(ns tie.tools.param-key-impl
  (:require [tie.util.common :as e]
            [tie.core-common :refer :all]
            [tie.tools.join-key-impl :as join]
            [schema.core :as s]
            [schema.macros :as sm]
            [schema.utils :as su]))

;;;;;;;, Param key processor ;;;;;;;;;;;;;;;;;;

(defonce params-key :params)
(defonce params-ref-con-key :ref-con)
(defonce params-ref-key :ref-key)
(defonce params-ref-fn-key :ref-fn-key)
(defonce params-ref-gen-key :ref-gen)


(defn sort-by-param-type
  [[_ t]]
  (condp = t
    params-ref-con-key 0
    params-ref-key 1
    params-ref-fn-key 2
    params-ref-gen-key 3
    4))


;params-ref-con-key
(defrecord ParamRefCon []
  KeyProcessor
  (k-name     [_]  params-ref-con-key )
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one s/Any "Any value")])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks) )
  (k-resolve  [_ ks] ks)
  (k-process  [_ ks m] (let [[src _ v] ks]
                          (assoc-in m src v))))


(comment
  (-> (->ParamRefCon)
      (k-schema-validate [:a :b :3]))
  )

;params-ref-key
(defrecord ParamRefKey []
  KeyProcessor
  (k-name     [_]  params-ref-key)
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one s/Keyword "Any value")])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks))
  (k-resolve  [_ ks] ks )
  (k-process  [_ ks m] (let [[src _ k] ks ]
                          (assoc-in m src k))))




(defrecord ParamRefFn []
  KeyProcessor
  (k-name     [_]   params-ref-fn-key   )
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one resolve-clj? "Any value")
                    (s/one s/Keyword "Type of validation ")])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks))
  (k-resolve  [_ ks] (let [w ks]
                        (->> (resolve (nth w 2))
                             (assoc w 2))))
  (k-process  [_ ks m] (let [[src _ f k] ks
                              v (apply-fn f (get-in m k))]
                          (if (fail? v)
                            v
                            (assoc-in m src v))) ))



(defrecord ParamRefGen [e-fn]
  KeyProcessor
  (k-name     [_] params-ref-gen-key )
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one s/Keyword "Type of validation ")
                    s/Keyword])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks))
  (k-resolve  [_ ks] ks)
  (k-process  [this ks m] (let [[src _ name] ks
                              f (fn [v]
                                  (-> v
                                      (assoc model-key name)
                                      (assoc result-key #{result-single-key result-array-key})
                                      (assoc dml-type-key dml-type-select-key)))
                              v  ((:e-fn this) [name] {} :post-in-step f)]
                          (if (fail? v)
                            v
                            (assoc-in m src (get-in v [name 1 0]))))))



(defn getParamKeyProcessor [efn]
  (let [cf? (fn [n [_ t]] (= n t))
        coll [(->ParamRefCon )
              (->ParamRefKey )
              (->ParamRefFn )
              (->ParamRefGen efn)]]
    (->> (warp-processor coll cf?)
         (processor params-key))))




(defonce ParamsKeySchema
         (let [p (partial do-schema-validate (getParamKeyProcessor nil))]
           (s/pred p 'do-schema-validate)))



(defn key-filter
  [params coll]
  (filter (fn [[f]]
            (contains? (into #{} params) f)
            ) coll))


(defn filter-param-key
  [m]
  (let [params (rest (sql-key m))]
    (-> m
        (update-in [params-key] #(->> (key-filter params %)
                                      (into []))))))



(comment
  (s/validate ParamsKeySchema [[:k  sc/params-ref-con-key 0]])

  (let [v [[:k  sc/params-ref-con-key 0]]]
    (time
      (param-key-validate v))
    )

  (let [v [[ [:k]  sc/params-ref-con-key 0]]
        m {:id 2}]
    (time
      (do-param-key v m nil))
    )


  (let [v [[[:id2] sc/params-ref-fn-key inc [:id]]
           [[:id3] sc/params-ref-con-key 5]]
        m {:id 2}]
    (time
      (do-param-key v m nil))
    )

  )


(comment

  (let [t (param-ref-fn [:t :t 3])]
    (-> t
        (k-schema-validate)
        (println))
    )

  )





(defn find-query-ks-coll
  [input-map pks c]
  (for [[f t :as q] pks
        :when (not (get-in input-map [f]))]
    (if (or (= t params-ref-key)
            (= t params-ref-fn-key))
      (-> q
          (assoc 0 (conj c f) )
          (assoc (e/last-index q) [(last q)]))
      (assoc q 0 (conj c f)  ))))


(defn get-param-ks
  [tm-coll input]
  (let [pks (->> (map params-key tm-coll)
                 (reduce concat)
                 (e/distinct-with-range 1))]
    (find-query-ks-coll input pks [])))


(defn get-model-param-ks
  [[root-m & child-m] input]
  (let [ffn (fn [root-ks-coll m]
              (let [m-key (model-key m)
                    p-key-coll (params-key m)]
                (for [ks root-ks-coll
                      :let [w (conj ks m-key)]
                      :when (get-in input w)
                      c (join/conj-name-index w input)
                      r (find-query-ks-coll input p-key-coll c)]
                  r)))
        root (get-in root-m [model-key])
        root-ks (join/conj-name-index [root] input)
        p (comp (map #(ffn root-ks %))
                cat)
        root-ks-v (ffn [[]] root-m)
        p (into root-ks-v p child-m)]
    p))







(comment


(let [m [{:group :modify-dept,
          :index 0,
          :name :insert-dept,
          :params [[:id :ref-gen :gen-dept]
                   [:transaction_id :ref-con 0]],
          :dml-type :insert,
          :join [],
          :model :department}]
      p {:department {:dept_name "Call Center 5"}}
      f (fn [in & m] (do {:gen-dept [[0] [1]]}))]
  (->>
    ;(assoc-model-input m p f)
    (get-model-param-ks m p)
    (clojure.pprint/pprint)))


(let [m [{:name :get-dept-by-id,
          :params [[:id :ref-gen :gen-dept]],
          :join [],
          :model :department}]
      p {:id3 3}
      f (fn [in & m] (do {:gen-dept [[0] [1]]}))]
  (->> ;(assoc-input-key p m f)

       (clojure.pprint/pprint))
  )







  )








