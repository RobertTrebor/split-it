(ns tie.core-common
  (:require [tie.util.common :as e]
            [schema.core :as s]
            [schema.macros :as sm]
            [schema.utils :as su]))





(def resolve-clj? (s/pred resolve 'resolve-clj))


(defn resolve-type [w]
  (let [t (type w)]
    (if (= clojure.lang.Symbol t)
      (resolve w)
      t)))


(def resolve-type? (s/pred resolve-type 'resolve-type ))


(defonce dml-type-key :dml-type)
(defonce dml-type-select-key :select)
(defonce dml-type-insert-key :insert)
(defonce dml-type-update-key :update)
(defonce dml-type-delete-key :delete)
(defonce dml-type-call-key :call)

(defonce bind-type-key :bind-type)

(defonce output-key :output)
(defonce input-key :input)
(defonce error-key :error)
(defonce exec-time-key :exec-time)
(defonce query-exception-key :query-exception)


(defonce name-key :name)



(defonce commit-key :commit)
(defonce commit-all-key :all)
(defonce commit-any-key :any)
(defonce commit-none-key :none)


(defonce result-key :result)
(defonce result-array-key :array)
(defonce result-single-key :single)


;(defonce generated-value-key :generated-value)


(defonce column-key :column)

(defonce doc-key :doc)
(defonce def-model-key :def-model)
(defonce model-key :model)
(defonce skip-key :skip)
(defonce timeout-key :timeout)
(defonce group-key :group)
(defonce index :index )
(defonce sql-key :sql)

(defonce name-anno-key :name-meta)

(defonce reserve-name-key :reserve-name)
(defonce file-name-key :file-name)
(defonce file-reload-key :file-reload)
(defonce config-key :_config_)
(defonce ds-key :datasource)
(defonce ds-conn-key :datasource-conn)
(defonce tx-prop :tx-prop)

(defonce error-key :error)


(defn is-config?
  [tm]
  (if (= config-key (name-key tm))
    :config
    :others))


(defn is-reserver2?
  [reserve-name m]
  (let [name (name-key m)]
    (if (or (re-matches #":_.*" (str name))
            (contains? reserve-name name)
            (= config-key name))
      :reserve
      :others)))


(defn is-reserve?
  [tms coll]
  (if (->> (clojure.set/intersection
             (into #{} coll)
             (get-in tms [config-key reserve-name-key]))
           (not-empty))
    true
    false))




(defn is-dml-type? [m-map]
  (let [dml (dml-type-key m-map)]
    (or
      (= dml-type-update-key dml)
      (= dml-type-call-key dml)
      (= dml-type-insert-key dml)
      (= dml-type-delete-key dml)
      (= dml-type-select-key dml))))




(defn into-model-map
  [coll]
  (let [f (fn [v]
            {(model-key v)
             (or (error-key v)
                 (output-key v)
                 v)})]
    (into {} (map f) coll)))


(defn into-name-map
  [coll]
  (into {} (map (fn [v] {(name-key v) v}) ) coll))



(defn select-values
  [m k-coll]
  (if-not (map? m) m (mapv #(%1 m) k-coll)))


(defn fail
  [message]
  {error-key message})


(defn fail?
  [message]
  (cond
    (map? message) (if (contains? message error-key)
                     message
                     false)
    (sequential? message) (reduce (fn [acc m]
                                    (if-let [r (fail? m)]
                                      (reduced r)
                                      acc))
                                  false
                                  message)
    :else false))




(defn apply-fn [f v]
  (try
    (f v)
    (catch Exception e
      (do
        (fail {:function (:name (e/get-meta f))
               :value    v
               :detail   (.toString e)})))))


#_(defmacro fail2->
  [expr & forms]
  `(e/until-> fail? ~expr ~@forms))


(defn xf-input
  [in-v]
  (if (sequential? in-v) in-v [in-v]))


(defn xf-result
  [in-v out-v]
  (if (sequential? in-v)
    out-v
    (if (map? out-v)
      out-v
      (first out-v))))


(defn map-xf->
  [coll]
  (map (fn [w] `(map #(if (tie.core-common/fail? %) % (-> % ~w))) ) coll))


(defn warp-xf [coll]
  `(comp
     ~@(map-xf-> coll)))


(defn warp-xf-until [coll]
  `(comp
     (tie.util.common/xf-until tie.core-common/fail?)
     ~@(map-xf-> coll)
     (tie.util.common/xf-until tie.core-common/fail?)))


(defn warp-xf-take-until [coll]
  `(comp
     (tie.util.common/xf-take-until tie.core-common/fail?)
     ~@(map-xf-> coll)
     (tie.util.common/xf-take-until tie.core-common/fail?)))


(defmacro fail->
  [v & forms]
  (let [fr (warp-xf-until forms)]
    `(->> [~v]
          (transduce ~fr conj [])
          (xf-result nil))))


(defmacro item-fail->
  [v & forms]
  (let [fr (warp-xf-until forms)]
    `(->> (xf-input ~v)
          (transduce ~fr conj [])
          (xf-result ~v))))


(defmacro take-until-item-fail->
  "Pass all input as one and call forms ony by another"
  [v & forms]
  (let [fr (warp-xf-take-until forms)]
    `(->> (xf-input ~v)
          (transduce ~fr  conj [])
          (xf-result ~v))))


(defmacro item->
  "Pass all input as one and call forms ony by another"
  [v & forms]
  (let [fr (warp-xf forms)]
    `(->> (xf-input ~v)
          (transduce ~fr conj [])
          (xf-result ~v))))




(defn commit-type
  [tm-coll]
  (let [p (comp
            (filter #(not= dml-type-select-key (dml-type-key %)))
            (map #(commit-key %))
            (map #(or % commit-all-key)))
        commits (into [] p tm-coll)
        c (or (some #{commit-none-key} commits)
              (some #{commit-all-key} commits)
              (e/contain-all? commits commit-any-key)
              commit-none-key)]
    c))







(comment


  (take-until-item-fail-> [{:4 5} {:9 8}] (assoc :error 2)(assoc :error3 2))

  (item-fail-> [{:4 5} {:9 8}] (assoc :error 2)(assoc :error3 2))

  (item-fail-> [{:4 5} {:9 8}] (assoc :error 2)(assoc :c 2))

  (item-fail-> {:error 5} (assoc :b 2)(assoc :c 2))

  (item-fail-> {:error 5} (assoc :error 2)(assoc :c 2))

  (let [p (fn [w] (do (println w) (assoc {} :error2 3)))
        p2 (fn [w] (do (println w) (assoc {} :a 4)))]
    (item-fail-> [{:error3 5}] p p2))


  (let [v 1]
    (->>
      (clojure.walk/macroexpand-all
        '(srunn2-> (assoc :b 2) (assoc :c 2)))
      (clojure.pprint/pprint)))


  (->>
    (clojure.walk/macroexpand-all
      '(compfail-> (assoc :b 2)(assoc :c 2)))
    (clojure.pprint/pprint))


  (let [t [{:n 4}]
        cr (fn [acc v]
             (if (fail? v)
               (reduced v)
               (conj acc v))
             )
        p (comp (map #(assoc % :a 4) ))]
    (transduce p conj [] t)
    )


  (t-exec [{:error 3} {:b 4}] (compfail-> (assoc :a 3)) )


  (xffail-> [{:b 4} {:error2 3}]
          (assoc :a 3)
          (assoc :t 3))

  (xffail-> [3 6 9] inc inc)


  (compfail-> (assoc  :b 2))


  (let [v [{:a 1} {:d 4}]
        p (compfail-> (assoc :b 2))]

    (transduce p conj [] v)
    )


  (->>
    (clojure.walk/macroexpand-all '(compfail-> (assoc :a 3) (assoc  :a 3)))
    (clojure.pprint/pprint))





  (->>
    (macroexpand '(until-> fail? {:a 3} #(assoc % :n 4) #(assoc % :n 4)))
    (clojure.pprint/pprint))

  (->>
    (macroexpand '(item-fail-> {} #(assoc % :v 4) #(assoc % :b 4)))
    (clojure.pprint/pprint))


  (let [v {:error2 3}]
    (item-fail-> v #(assoc % :v 4) #(assoc % :b 4)))

  (->>
    (macroexpand '(suntil-> #(assoc % :a 3) #(assoc % :c 5)))
    (clojure.pprint/pprint))


  (let [f #(assoc % :a 3)
        p (comp (map #(until-> fail? % f))
                (take-until fail?))]
    (->>
      (transduce p conj [] [{:b 3}])
      (clojure.pprint/pprint)))





  (let [p (suntil-> #(assoc % :a 3) #(assoc % :a 5))]
    (->>
      (transduce p conj [] [{:error2 3}{:d 3}])
      (clojure.pprint/pprint)))


  )



(defprotocol KeyProcessor
  (k-name            [this]  "Return key name")
  (k-schema          [this]  "Return Schema")
  (k-schema-validate [this ks] "Validate Schema")
  (k-resolve         [this ks] "Resolve Key")
  (k-process         [this ks m] "Process apply"))


(defn do-schema-validate
  [processor v]
  (k-schema-validate processor v))

(defn do-resolve
  [processor v]
  (k-resolve processor v))


(defn do-process
  [processor v m]
  (k-process processor v m ))


(defprotocol KeyProcessorFinder
  (p-processor [this t] "Return get instance "))


(defrecord KeyProcessorFinderImpl [coll-proc cf?]
  KeyProcessorFinder
  (p-processor [this w]
    (reduce (fn [acc v]
              (if (cf? (k-name v) w)
                (reduced v)
                acc)
              ) nil (:coll-proc this))))



(defrecord CProcessor [name finder]
  KeyProcessor
  (k-name [this] (:name this))
  (k-schema [_] [[]])
  (k-schema-validate [this ks-coll]
    (if-not (coll? ks-coll)
      false
      (do
        (->> ks-coll
             (mapv #(k-schema-validate (p-processor (:finder this) %) %))))))
  (k-resolve [this ks-coll]
    (->> ks-coll
         (mapv #(k-resolve (p-processor (:finder this) %) %))))
  (k-process [this ks-coll m]
    (->> ks-coll
         (reduce (fn [acc ks]
                   (let [w (k-process (p-processor (:finder this) ks) ks acc)]
                     (if (fail? w)
                       (reduced w)
                       w))
                   ) m))))



(defn warp-processor [coll cf?]
  (->KeyProcessorFinderImpl coll cf?))


(defn processor [name builder]
  (->CProcessor name builder))