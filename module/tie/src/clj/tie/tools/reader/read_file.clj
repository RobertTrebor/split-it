(ns tie.tools.reader.read-file
  (:require [clojure.java.io :as io]
            [clojure.tools.reader.edn :as edn]
            [tie.core-common :as sc]))


(defn tie-file-reader
  [file-name]
  (let [fs (-> file-name
               (io/resource)
               (slurp)
               (clojure.string/replace #"\n" ""))]
    (for [ms (clojure.string/split fs #"/\*")
          :when (not (clojure.string/blank? ms))
          m (clojure.string/split ms #"\*/")
          :when (not (clojure.string/blank? m))]
      (if (.startsWith (clojure.string/triml m)  "{" )
        (edn/read-string m)
        m))))


(defn map-sql-tag
  [w]
  (reduce (fn [acc v]
            (let [[f & r] acc]
              (cond
                (nil? f)    (conj acc v)
                (string? v) (if (sc/sql-key f)
                              acc
                              (conj r (assoc f sc/sql-key v)))
                :else (conj acc v)))
            ) (list) w))


(defn do-file-read
  [file-name]
  (-> file-name
      (tie-file-reader)
      (map-sql-tag)))

