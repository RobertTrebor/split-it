(ns tie.tools.reader.merge-tag
  (:require [tie.util.common :as c]
            [tie.tools.param-key-impl :as p]
            [tie.tools.join-key-impl :as j]
            [tie.tools.Validation-key-impl :as v]
            [tie.core-common :as sc]))

(def merge-key-list [p/params-key v/validation-key sc/column-key
                     sc/result-key sc/commit-key sc/timeout-key sc/skip-key])


(defn merge-val
  [v v-new]
  (cond
    (and (map? v-new)
         (map? v))
    (merge v v-new)
    (and (vector? v-new)
         (vector? v))
    (do

      (c/concat-distinct-with-range 2 v v-new))
    :else (or v-new v)))


(defn do-merging-with-config
  [join-map config-tags m ]
  (let [model-key-name (sc/model-key m)
        config-tags-map (select-keys config-tags merge-key-list)
        j-map (get  join-map model-key-name)
        config-model-tags-map (get-in config-tags [sc/def-model-key model-key-name])]
    (merge-with  merge-val
                 config-tags-map
                 config-model-tags-map
                 j-map
                 m)))




(defn dml-type
  [[sql-str]]
  (-> sql-str
      (clojure.string/lower-case)
      (clojure.string/split #"\s+")
      (first)
      (keyword)))


(defn as-map
  [tm [index sql name group-name model-name]]
  (let [default-m {sc/sql-key      sql
                   sc/index        index
                   sc/name-key     name
                   sc/dml-type-key (dml-type sql)}
        default-m (if-not group-name default-m (assoc default-m sc/group-key group-name))
        deafult-m (if-not model-name default-m (assoc default-m sc/model-key model-name))
        name-m    (get-in tm [sc/name-anno-key name])
        model-m   (get-in tm [sc/name-anno-key model-name])
        share-m   (select-keys tm merge-key-list)]
    (merge-with merge-val
                {sc/model-key name}
                share-m
                model-m
                deafult-m
                name-m)))


(defn merge-key
  [tm f-config ]
  (let [sqls (sc/sql-key tm)
        t-sqls (count sqls)
        w (map vector
               (take t-sqls (range))
               sqls
               (sc/name-key tm)
               (repeat (sc/group-key tm))
               (sc/model-key tm))
        m-coll (map #(as-map tm %) w)
        join-map (->> (get-in f-config [j/join-key])
                      (j/add-bi-join)
                      (j/join-group-by-src))]
    (for [n-tag m-coll]
      (do-merging-with-config join-map f-config n-tag)
      )))
