(ns tie.tools.Validation-key-impl
  (:require [tie.core-common :refer :all]
            [schema.core :as s]
            [schema.macros :as sm]
            [schema.utils :as su]))



(defonce validation-key :validation)
(def vali-type :type)
(def vali-range :range)
(def vali-contain :contain)

;vali-type
(defrecord ValiType [name]
  KeyProcessor
  (k-name     [this] (:name this))
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one resolve-type? "Clojure or Java type")
                    (s/one s/Str "fail message")])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks ))
  (k-resolve  [_ ks] (assoc ks 2 (resolve-type (nth ks 2))))
  (k-process  [_ ks _] (let [[p-value _ v-type e-message] ks]
                          (if (= v-type (type p-value))
                            {}
                            (fail e-message)))))


;vali-contain
(defrecord ValiContain [name]
  KeyProcessor
  (k-name     [this]  (:name this))
  (k-schema   [_]  [(s/one s/Keyword "Source Data Model")
                    (s/one s/Keyword "Type of validation ")
                    (s/one resolve-type? "Clojure or Java type")
                    (s/one s/Str "fail message")])
  (k-schema-validate [this ks] (s/validate (k-schema this) ks ))
  (k-resolve  [_ ks] (assoc ks 2 (resolve-type (nth ks 2))))
  (k-process  [_ ks _] (let [[p-value _ v-type e-message] ks
                              r (mapv #(= v-type (type %)) p-value )
                              r (every? true? r)]
                          (if r
                            {}
                            (fail e-message)))))


(defrecord ValiRange [name]
  KeyProcessor
  (k-name     [this]  (:name this))
  (k-schema   [_] [(s/one s/Keyword "Source Data Model")
                   (s/one s/Keyword "Type of validation ")
                   (s/one s/Int "Min range value")
                   (s/one s/Int "Max range value")
                   (s/one s/Str "fail message")] )
  (k-schema-validate [this ks] (s/validate (k-schema this) ks))
  (k-resolve  [_ ks] ks )
  (k-process  [_ ks _] (let [[p-value _ min max e-message] ks]
                          (if (and (>= p-value min)
                                   (<= p-value max))
                            {}
                            (fail e-message)))))



(def ValidationKeyProcessor (let [cf? (fn [n [_ t]] (= n t))
                                  coll [(->ValiType vali-type)
                                        (->ValiRange vali-range)
                                        (->ValiContain vali-contain)]]
                              (->> (warp-processor coll cf?)
                                   (processor validation-key))))


(defonce ValiKeySchema
         (let [p (partial do-schema-validate ValidationKeyProcessor)]
           (s/pred p 'do-schema-validate)))




(defn key-filter
  [params coll]
  (filter (fn [[f]]
            (contains? (into #{} params) f)
            ) coll))


(defn filter-validation-key
  [m]
  (let [params (rest (sql-key m))]
    (-> m
        (update-in [validation-key]  #(->> (key-filter params %)
                                            (into []))))))



(comment

  (let [w [[:id vali-contain (read-string "Long") "error"]
           [:id vali-type (read-string "[]") "error"]]]
    (s/validate ValiKeySchema w)
    ;(vali-key-resolve w)
    )



  )