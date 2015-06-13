(ns tie.tools.sql-param-bind-impl
  (:require [tie.core-common :as sc]
            [tie.tools.Validation-key-impl :as k ]
            [tie.util.common :as c]))


(defn get-vali-type
  [coll id]
  (->> coll
       (filter #(and
                 (= id (first %))
                 (= k/vali-type (second %))))
       (map #(nth % 2))
       (first)))


(defn get-place-holder
  [type v]
  (if (contains? (supers type)
                 clojure.lang.Sequential)
    (clojure.string/join ", " (repeat (count v) "?"))
    "?"))


(defn update-sql-str
  [v sql-str k]
  (clojure.string/replace-first sql-str (re-pattern (str k)) v))


(defmulti bind-sql-params sc/dml-type-key)


(defmethod bind-sql-params
  sc/dml-type-insert-key
  [tm]
  (let [sql (sc/sql-key tm)
        sql-str (reduce (partial update-sql-str "?") sql )]
    (->> (sc/input-key tm)
         (c/as-sequential)
         (mapv #(sc/select-values %1 (rest sql)))
         (reduce conj [sql-str])
         (assoc tm sc/sql-key ))))


(defmethod bind-sql-params
  :default
  [tm]
  (let [[sql-str & sql-params] (sc/sql-key tm)
        params (sc/input-key tm)
        validation (k/validation-key tm)
        rf (fn [sql-coll p-key]
             (let [p-value (c/as-sequential (p-key params))
                   w (-> (get-vali-type validation p-key)
                         (get-place-holder p-value)
                         (update-sql-str (first sql-coll) p-key))
                   q-str (assoc sql-coll 0 w)]
               (reduce conj q-str p-value)))]
    (->> (reduce rf [sql-str] sql-params)
         (assoc tm sc/sql-key))))



(defn split-sql-params
  [sql]
  (let [p (comp (filter not-empty)
                (map (fn [v]
                       (->> (re-seq #"\w*:\w+" v)
                            (reduce #(conj %1 (read-string %2)) [v])))))
        sql (clojure.string/split (clojure.string/trim sql) #";")]
    (transduce p conj [] sql)))


(defn assoc-sql-key
  [m]
  (->> (sc/sql-key m)
       (split-sql-params )
       (assoc m sc/sql-key )))

