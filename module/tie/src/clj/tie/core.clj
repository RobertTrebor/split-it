(ns tie.core
  (:require [tie.core-executor :as e]
            [tie.core-common :as sc]
            [tie.util.common :as c]
            [tie.tools.sql-param-bind-impl :as bind]
            [tie.tools.Validation-key-impl :as ki]
            [tie.tools.join-key-impl :as join]
            [tie.tools.param-key-impl :as p]))


(def pre-in-step :pre-in-step)
(def post-in-step :post-in-step)
(def pre-out-step :pre-out-step)
(def post-out-step :post-out-step)


(defn as-map [step-coll]
  (apply hash-map step-coll))


;;;;;;;;;;;;; Processing block

(defn validate-input-not-empty!
  [m]
  (let [input (sc/input-key m)
        sql (sc/sql-key m)]
    (if (and (not-empty (rest sql))
             (empty? input))
      (sc/fail (format "Input is missing for %s " (sc/model-key m)))
      m)))


(defn validate-input-type!
  [m]
  (let [dml-type (sc/dml-type-key m)
        input (sc/input-key m)
        sql (sc/sql-key m)]
    (if (and (not= dml-type sc/dml-type-insert-key)
             (not-empty (rest sql))
             (not (map? input)))
      (sc/fail (format "Input Params for %s will be map format but %s is not map format " sql input))
      m)))


(defn- validate-required-params*!
  [p-set input]
  (let [p-set (into #{} p-set)
        i-set (into #{} (keys input))
        diff-keys (clojure.set/difference p-set i-set)]
    (if-not (empty? diff-keys)
      (sc/fail (format "Missing required parameter %s" (pr-str diff-keys)))
      input)))


(defn validate-required-params!
  [m]
  (let [p-set (partial validate-required-params*! (rest (sc/sql-key m)))
        input (c/as-sequential (sc/input-key m))
        r (sc/item-fail-> input p-set)]
    (if (sc/fail? r)
      r
      m)))



(defn validation!
  [m]
  (let [sql-p (into #{} (rest (sc/sql-key m)))
        v-map (group-by first (ki/validation-key m))
        coll (for [p  (c/as-sequential (sc/input-key m))
                p1 (keys (select-keys p sql-p))
                v1 (p1 v-map)]
            (assoc v1 0 (p1 p)))
        sql-p (sc/do-process ki/ValidationKeyProcessor coll nil) ]
    (if (sc/fail? sql-p)
      sql-p
      m)))



(defn bind-input
  [tm steps]
  (let [pres  (or (pre-in-step steps) identity)
        posts (or (post-in-step steps) identity)]
    (sc/fail-> tm
               pres
               validate-input-not-empty!
               validate-input-type!
               validate-required-params!
               validation!
               bind/bind-sql-params
               posts
               (dissoc sc/input-key
                       p/params-key
                       ki/validation-key
                       sc/group-key
                       sc/name-key))))


(defn assoc-input-key
  [input tm-coll f]
  (let [p (p/getParamKeyProcessor f)
        coll (->> (p/get-param-ks tm-coll input)
                 (sort-by p/sort-by-param-type ))
        w (sc/do-process p coll input )]
    (mapv #(assoc % sc/input-key w) tm-coll)))


(defn assoc-model-input
  [tm-coll input f]
  (let [pr   (p/getParamKeyProcessor f)
        coll (->> (p/get-model-param-ks tm-coll input)
                 (sort-by p/sort-by-param-type ))
        r (sc/do-process pr coll input)
        join (get-in tm-coll [0 join/join-key])
        w (-> r
              (join/do-assoc-join-key join)
              (join/do-disjoin join))]
    (mapv #(assoc % sc/input-key ((sc/model-key %) w)) tm-coll )))


;;;;;;;;;;;;;;;;;; Output procesing block


(defn do-column-key
  [tm]
  (let [column (sc/column-key tm)
        output (sc/output-key tm)]
    (cond
      (or (nil? column)
          (sc/fail? tm)
          (not (map? (first output))))
      tm
      :else
      (->> (repeat column)
           (map clojure.set/rename-keys output)
           (into [])
           (assoc tm sc/output-key)))))


(defn do-result-key
  [tm]
  (if-not (or (= (sc/dml-type-key tm) sc/dml-type-select-key)
              (= (sc/dml-type-key tm) sc/dml-type-call-key))
    tm
    (let [result (sc/result-key tm)
          output (sc/output-key tm)]
      (cond
        (nil? result)
        tm
        (and (empty? output)
             (contains? result sc/result-single-key))
        (assoc tm sc/output-key {})
        (and (contains? result sc/result-array-key)
             (contains? result sc/result-single-key))
        (assoc tm sc/output-key [(first output) (second output)])
        (and (contains? result sc/result-single-key))
        (assoc tm sc/output-key (first output))
        :else tm))))


(defmulti do-bind-output
          (fn [tm _] (sc/dml-type-key tm)))


(defmethod do-bind-output
  sc/dml-type-select-key
  [tm steps]
  (let [pres  (or (pre-out-step steps) identity)
        posts (or (post-out-step steps) identity)]
    (sc/item-fail-> tm
                    pres
                    do-column-key
                    do-result-key
                    posts)))


(defmethod do-bind-output
  sc/dml-type-call-key
  [tm steps]
  (let [pres  (or (pre-out-step steps) identity)
        posts (or (post-out-step steps) identity)]
    (sc/item-fail-> tm
                    pres
                    do-result-key
                    posts)))


(defmethod do-bind-output
  :default
  [tm steps]
  (let [pres  (or (pre-out-step steps) identity)
        posts (or (post-out-step steps) identity)]
    (sc/item-fail-> tm
                    pres
                    posts)))



(defn default-executor [executor]
  (-> executor
      (e/warp-executor-execption)
      (e/warp-update-tracking)))



(defn chan-executor [executor]
  (-> (default-executor executor)
      (e/warp-channel)
      (e/warp-channel-collection)
      (e/get-channel-value)))


;;;;;;;;;;;;;;;;; Run

(defn print-debug [v]
  (do
    (println "-------------")
    (clojure.pprint/pprint v)
    (println "-------------")
    v
    ))


(defn run
  [tm-coll proc-map executor]
  (sc/fail-> tm-coll
             (sc/item-fail-> (bind-input proc-map))
             (executor)
             (sc/item-fail-> (do-bind-output proc-map))
             (sc/into-model-map)
             ))



(defn parallel? [[root & more]]
  (cond
    (nil? more)
    false
    (empty? (join/join-key root))
    true
    :else false))


(defn run-query
  [[root & more-tm :as tm-coll] exec generator-fn input proc-map]
  (if (nil? more-tm)
    (-> input
        (assoc-input-key [root] generator-fn)
        (run proc-map (chan-executor exec)))
    (if (parallel? tm-coll)
      (do
        (-> (assoc-input-key input tm-coll generator-fn)
            (run proc-map (chan-executor exec))))
      (let [f-result (-> input
                         (assoc-input-key [root] generator-fn)
                         (run proc-map (chan-executor exec)))
            f-r ((sc/model-key root) f-result)]
        (if (or (nil? f-r)
                (empty? f-r))
          f-result
          (sc/fail-> f-result
                     (join/join-params-value (join/join-key root))
                     (merge input)
                     (assoc-input-key more-tm generator-fn)
                     (run proc-map (chan-executor exec))
                     (merge f-result)))))))

