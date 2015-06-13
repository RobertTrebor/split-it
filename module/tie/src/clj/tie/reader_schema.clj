(ns tie.reader-schema
  (:require [schema.core :as s]
            [schema.macros :as sm]
            [schema.utils :as su]
            [tie.tools.join-key-impl :as j]
            [tie.tools.Validation-key-impl :as p]
            [tie.tools.param-key-impl :as pi]
            [tie.core-common :refer :all]))



(defn resolve-name?
  [v]
  (if (keyword? v)
    true
    (every? keyword? v)))



(defn- not-blank? [^String v]
  (not (clojure.string/blank? v)))


(defonce StrNotBlankSchema (s/both s/Str (s/pred not-blank? 'not-blank?)))
(defonce NameSchema        (s/pred resolve-name? 'resolve-name?))



(defonce CommitSchema (s/enum commit-all-key commit-any-key commit-none-key))

;Result keyword and Schema
(defonce ResultSchema #{(s/enum result-array-key result-single-key)})

;Generated Value keyword and Schema
;(defonce GeneratedValueSchema {s/Keyword s/Keyword})

;Join keyword and Schema
(defonce JoinSingleNTNSchema [(s/one s/Keyword "Join Model ")
                              (s/one s/Keyword "Join Model Id1")
                              (s/one s/Keyword "Join Model Id2")])
(defonce JoinSingleSchema [(s/one s/Keyword "Source Data Model")
                           (s/one s/Keyword "Source Model Id")
                           (s/one (s/enum j/join-1-n-key j/join-1-1-key j/join-n-1-key j/join-n-n-key) "Relationship")
                           (s/one s/Keyword "Dest Model")
                           (s/one s/Keyword "Dest Model Id")
                           (s/optional JoinSingleNTNSchema "JoinSingleNTNSchema")])
(defonce JoinSchema [JoinSingleSchema])

;Column keyword and Schema

(defonce ColumnSchema {s/Keyword s/Keyword})
(defonce SkipSchema #{(s/enum p/validation-key column-key j/join-key)})


(def CommonSchema {(s/optional-key doc-key)        s/Str
                   (s/optional-key model-key)      NameSchema
                   (s/optional-key group-key)      s/Keyword
                   (s/optional-key skip-key)       SkipSchema
                   (s/optional-key p/validation-key) p/ValiKeySchema
                   (s/optional-key column-key)     ColumnSchema
                   (s/optional-key pi/params-key)     pi/ParamsKeySchema
                   (s/optional-key result-key)     ResultSchema
                   (s/optional-key commit-key)     CommitSchema
                   (s/optional-key timeout-key)    s/Int})


(def MetaSchema (-> CommonSchema
                    (dissoc (s/optional-key model-key))
                    (dissoc (s/optional-key doc-key))
                    (dissoc (s/optional-key group-key))
                    (assoc  (s/optional-key model-key)    s/Keyword)))


(def TieSchema (-> CommonSchema
                   (assoc (s/required-key sql-key)          StrNotBlankSchema)
                   (assoc (s/required-key name-key)         NameSchema)
                   (assoc (s/optional-key name-anno-key)    {s/Keyword MetaSchema})
                   (assoc (s/optional-key j/join-key)       JoinSchema)))


(defn check-tx-proc? [v]
  (let [tt [{:isolation #{:none :read-committed :read-uncommitted :repeatable-read :serializable}}
            {:read-only? #{true false}}]
        v (partition 2 v)
        is-contains? (fn [k kv]
                       (->> (map #(contains? (k %) kv) tt)
                            (some true?)))]
    (reduce (fn [acc [k kv]]
              (if-not (is-contains? k kv)
                (reduced false)
                acc)
              ) true v)))


(def TieConfigSchema (-> CommonSchema
                         (dissoc (s/optional-key timeout-key))
                         (dissoc (s/optional-key model-key))
                         (dissoc (s/optional-key group-key))
                         (dissoc (s/optional-key skip-key))
                         (assoc  (s/optional-key tx-prop)          (s/pred check-tx-proc? 'check-tx-proc))
                         (assoc  (s/optional-key file-name-key)    s/Str)
                         (assoc  (s/optional-key file-reload-key)  boolean)
                         (assoc  (s/optional-key reserve-name-key) #{s/Keyword})
                         (assoc  (s/optional-key j/join-key)       JoinSchema)
                         (assoc  (s/optional-key ds-key)           s/Any)
                         (assoc  (s/required-key name-key)         s/Keyword)
                         (assoc  (s/required-key timeout-key)      s/Int)))



(defn get-error-key [m]
  (loop [a m
         r []]
    (let [k (first (keys a))]
      (if-not (map? (k a))
        (conj r k)
        (recur (k a) (conj r k))))))



(defn apply-schema
  [schema value]
  (try
    (s/validate schema value)
    (catch clojure.lang.ExceptionInfo e
      (let [err (-> e ex-data :error)
            err-k (get-error-key err)
            r (get-in (-> e ex-data :value) err-k)
            r (update-in err err-k (fn [_] r))]
        (throw (ex-info "Schema Failed " {:path r
                                          :error (get-in err err-k)} ))))))


(defn validate-schema! [v]

  (let [w
        (apply-schema TieSchema v)]


    w)

  )


(defn validate-config-schema! [v]
  (apply-schema TieConfigSchema v))





