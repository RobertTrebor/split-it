(ns tie.reader
  (:require [tie.tools.reader.read-file :as fr]
            [tie.tools.reader.merge-tag :as mt]
            [tie.util.common :as c]
            [tie.tools.param-key-impl :as pa]
            [tie.tools.join-key-impl :as join]
            [tie.core-common :as sc]
            [tie.reader-schema :as sch]
            [tie.tools.sql-param-bind-impl :as sp]
            [tie.tools.Validation-key-impl :as p]))




(def skip-key-for-call   [join/join-key p/validation-key pa/params-key])
(def skip-key-for-others [sc/result-key sc/column-key])


(defn do-filter-for-dml-type
  [m]
  (condp = (sc/dml-type-key m)
    sc/dml-type-select-key
    (->> (into [] (sc/skip-key m))
         (apply dissoc m))
    sc/dml-type-call-key
    (->> (into [] (sc/skip-key m))
         (reduce conj skip-key-for-call)
         (apply dissoc m))
    (->> (into [] (sc/skip-key m))
         (reduce conj skip-key-for-others)
         (apply dissoc m skip-key-for-others))))


;;;;;;;;;;;; Process block;;;;;;;;



(defn assoc-name-key
  [m]
  (->> (sc/name-key m)
       (c/as-sequential)
       (assoc m sc/name-key)))



(defn assoc-model-key
  [m]
  (if-not (sc/model-key m)
    (->> (repeat (count (sc/name-key m)) nil)
         (assoc m sc/model-key))
    (let [model (sc/model-key m)
          model (if-not (keyword? model)
                  model
                  (-> (count (sc/name-key m))
                      (repeat model)))]
      (assoc m sc/model-key model))))


(defn count-sql-and-name!
  [w]
  (let [sqls (sc/sql-key w)
        name-coll (sc/name-key w)
        t-sqls (count sqls)
        t-iden (count name-coll)]
    (when-not (= t-sqls t-iden)
      (if (> t-sqls t-iden)
        (throw (Exception. (format "Identities not found for \" %s \" " (str sqls) )))
        (throw (Exception. (format "Sql statement not found for \" %s \" " (str name-coll) )))))
    w))


(defn count-name-and-model!
  [w]
  (let [model (sc/model-key w)
        name (sc/name-key w)
        t-model (count model)
        t-name (count name)]
    (when-not (= t-model t-name)
      (if (> t-model t-name)
        (throw (Exception. (format "Name not found for \" %s \" " (str model) )))
        (throw (Exception. (format "Model not found for \" %s \" " (str name) )))))
    w))





(defn debug [msg m ]
  (println "Debug start--------------")
  (println msg)
  (clojure.pprint/pprint m)
  (println "Debug end--------------")
  m
         )


(defn resolve-validation-key
  [tm]
  (if-not (p/validation-key tm )
    tm
    (->> (p/validation-key tm )
         (sc/do-resolve p/ValidationKeyProcessor )
         (assoc tm p/validation-key ))))


(defn resolve-params-key
  [tm]
  (if-not (pa/params-key tm)
    tm
    (->> (pa/params-key tm )
         (sc/do-resolve (pa/getParamKeyProcessor nil))
         (assoc tm pa/params-key ))))


(defn do-sql-format-and-validate!
  [f-config coll]
  (let [step-fn (comp
                  (map sch/validate-schema!)
                  (map sp/assoc-sql-key)
                  (map assoc-name-key)
                  (map count-sql-and-name!)
                  (map assoc-model-key)
                  (map count-name-and-model!)
                  (map #(mt/merge-key % f-config))
                  cat
                  (map p/filter-validation-key)
                  (map pa/filter-param-key)
                  (map do-filter-for-dml-type)
                  (map resolve-validation-key)
                  (map resolve-params-key))
        r-coll (into [] step-fn coll)]
    r-coll))



(defn distinct-name!
  [m-coll]
  (let [i-coll (->> m-coll
                    (map (juxt sc/name-key))
                    (flatten))]
    (if-not (apply distinct? i-coll)
      (let [w (->> (frequencies i-coll)
                   (filter (fn [[_ v]]
                             (if (< 1 v) true false)))
                   (into {}))]
        (throw (Exception. (str "Found duplicate name " w)))))))


(defn distinct-group-name!
  [m-coll]
  (let [i-coll (->> m-coll
                    (map (juxt sc/group-key))
                    (flatten)
                    (remove nil?))]
    (if-not (empty? i-coll)
      (if-not (apply distinct? i-coll)
        (let [w (->> (frequencies i-coll)
                     (filter (fn [[_ v]]
                               (if (< 1 v) true false)))
                     (into {}))]
          (throw (Exception. (str "Found duplicate group  " w))))))))


#_(defn name-mapping-key!
  [m-coll]
  (doseq [v m-coll]
    (let [n (sc/name-key v)
          ns (if (sequential? n) n [n])
          nm (keys (sc/name-anno-key v))]
      (if-not (clojure.set/superset?
                (into #{} ns)
                (into #{} nm))
        (throw (Exception. (str "Mapping Name is not found  name " ns " name-mapping " nm)))))))


(defn do-format-and-validate!
  [coll]
  (distinct-name! coll)
  (distinct-group-name! coll)
  ;(name-mapping-key! coll)
  (let [{:keys [config others]} (group-by sc/is-config? coll)
        f-config (first config)
        _ (sch/validate-config-schema! f-config)
        ir? (partial sc/is-reserver2? (get-in f-config [sc/reserve-name-key]))
        {:keys [reserve others]} (group-by ir? others)]
    (->> (do-sql-format-and-validate! f-config others)
         (concat config reserve))))



;;; Reading block

(defn read-file
  [file-name]
  (let [fv (fr/do-file-read file-name)
        result (do-format-and-validate! fv)]
    (-> (sc/into-name-map result)
        (assoc-in [sc/config-key sc/file-name-key] file-name))))


(defn get-config
  [tms]
  (sc/config-key tms))


(defn get-name-for-groups
  [tms gname name-coll]
  (let [name-set (into #{} name-coll)
        p (if name-coll
            (comp (filter #(= (sc/group-key %) gname))
                  (filter #(contains? name-set (sc/name-key %))))
            (comp (filter #(= (sc/group-key %) gname))))
        t (into [] p (vals tms))
        w (sort-by sc/index t)]
    (into [] (map sc/name-key) w)))



(defn get-dml
  [tms]
  (let [p (comp (filter sc/is-dml-type?)
                (map sc/sql-key)
                (map first)
                (map #(clojure.string/replace % #":\w+" "?")))]
    (into [] p (vals tms))))


(defn validate-name!
  [tm name-coll]
  (let [skey (into #{} (keys tm))
        op-key (into #{} name-coll)]
    (if (clojure.set/superset? skey op-key)
      tm
      (->> (clojure.set/difference op-key skey )
           (first)
           (str "Name not found " )
           (sc/fail )))))


(defn validate-model!
  [tm-coll]
  (let [model-coll (mapv sc/model-key tm-coll)
        m (distinct model-coll)]
    (if (not= (count model-coll)
              (count m))
      (sc/fail (str "Duplicate model name " model-coll))
      tm-coll)))



(defn filter-join-key
  [join model-coll]
  (->> join
       (filter (fn [[_ _ rel d-table _ nr]]
                 (if (= rel join/join-n-n-key)
                   (some #{(first nr)} model-coll)
                   (some #{d-table} model-coll))))
       (into [])))


(defn filter-key
  [coll]
  (let [model-key-coll (mapv sc/model-key coll )
        p (comp
            (c/skip-type #(= sc/dml-type-call-key (sc/dml-type-key %)) )
            (map #(update-in % [join/join-key] filter-join-key model-key-coll )))]
    (transduce p conj [] coll)))


(defn select-by-name
  [name-key-coll tms]
  (let [tm-map (select-keys tms name-key-coll)]
    (cond
      (nil? tm-map)
      (sc/fail "Name not found")
      (sc/is-reserve? tms name-key-coll)
      tm-map
      :else
      (sc/fail-> tm-map
                 (validate-name! name-key-coll)
                 (sc/select-values name-key-coll)
                 (validate-model!)
                 (filter-key)))))
