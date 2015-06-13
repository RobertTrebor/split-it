(ns tie.core-executor
  (:require [tie.core-common :as sc]
            [clojure.set]
            [clojure.core.async :as async :refer [<! >! <!! chan alt! go go-loop onto-chan sliding-buffer]]))


(defonce ^:private tracking-fns (atom {}))
(defonce tracking-keys [sc/sql-key sc/error-key sc/exec-time-key])


(defn start-tracking
  [name callback]
  {:pre [(keyword? name)
         (fn? callback)]}
  (swap! tracking-fns assoc-in [name] callback)
  nil)


(defn stop-tracking
  [name]
  {:pre [(keyword? name)]}
  (swap! tracking-fns #(dissoc % name))
  nil)


(defn stop-all-tracking
 []
 (reset! tracking-fns {})
 nil)


(defn warp-update-tracking
  [executor]
  (fn [m]
    (let [result (executor m)]
      (go
        (let [tracking-fns (vals @tracking-fns)]
          (if (< 0 (count tracking-fns))
            (let [r (if (map? result) [result] result)
                  p (map #(select-keys % tracking-keys))
                  v (into [] p r)]
              (doseq [t-fn tracking-fns]
                (t-fn v))))))
      result)))


(defn warp-executor-execption
  [executor]
  (fn [m]
    (try
      (let [^:double st (System/nanoTime)
            r (executor m)
            total (/ (-' (System/nanoTime) st) 1000000.0)
            r (if (seq? r) (into [] r) r)]
        (assoc m sc/output-key r sc/exec-time-key total))
      (catch Exception e
        (->> {sc/query-exception-key (.getMessage e)}
             (sc/fail)
             (merge m))))))


(defn warp-channel
  [executor]
  (fn [m]
    (async/go
      (let [t-v     (or (sc/timeout-key m) 2000)
            exec-ch (async/thread (executor m))
            [v rch] (async/alts! [exec-ch (async/timeout t-v)])]
        (if (= rch exec-ch)
          v
          (->> {sc/query-exception-key "Execution time out" sc/timeout-key t-v}
               (sc/fail)
               (merge m)))))))


(defn warp-channel-collection
  [executor]
  (fn [m-coll]
    (->> m-coll
         (map #(executor %))
         (doall)
         (async/merge)
         (async/take (count m-coll))
         (async/into []))
    #_(if (> 2 (count m-coll))
      (do
        (println "---" (count m-coll))
        (executor (first m-coll)))

      )))


(defn get-channel-value
  [executor]
  (fn [m]
    (let [r (executor m)]
      (async/<!! r))))




(comment
  (let [e (fn [v] (do
                    (println "before thread sleep")
                    (Thread/sleep (rand-int 1000))
                    [{:a 3}]))
        et 2                                                ;;set type for parallel
        v [{:b 3 sc/timeout-key 3000}
           {:b1 3 sc/timeout-key 3000}
           {:c1 3 sc/timeout-key 3000}
           {:d1 3 sc/timeout-key 3000}]]
    (clojure.pprint/pprint
      (time (do-execute et e v)))
    )

  (println "Hello")

  )