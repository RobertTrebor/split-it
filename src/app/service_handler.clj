(ns app.service-handler
  (:import (clojure.lang ExceptionInfo))
  (:require
    [schema.core :as s]
    [app.db :as db]
    [tie.util.ds :as ds]
    [clojure.tools.logging :as log]
    [tie.jdbc :as tj]
    [tie.core-common :as tc]
    [tie.reader :as r]
    [app.db :as db]))


(defn to-response-format [{:keys [error] :as m}]
  (if error
    [nil error]
    [m nil]))


(defn str->keyword-one [name-str]
  (if (and name-str
           (not (keyword? name-str)))
    (keyword name-str)
    name-str))


(defn str->keyword-batch [name]
  (if name
    (if (sequential? name)
      (mapv str->keyword-one name)
      [(keyword name)])))


(defn error-response [& [msg]]
  (->> {:error (or msg "Input format is wrong, should be name=query&id=1")}
       (to-response-format)))


(defn name-list-by-group-name
  [tie g-name name-coll]
  (let [tms (:tms tie)
        g-name (str->keyword-one g-name)
        name-coll (str->keyword-batch name-coll)]
    (r/get-name-for-groups tms g-name name-coll)))


(defn query-handler
  [tie db name-coll params]
   (let [tms (:tms tie)
         ds (ds/get-ds (:connection db) )
         tms (db/reload-file tms ds)]
     (try
       (if (nil? name-coll)
         (error-response "Need name params as an example \"/query?name=?\"")
         (-> (tj/query ds tms name-coll params)
             (to-response-format)))
       (catch Exception e
         (log/info (.getMessage e))
         (error-response (.getMessage e))))))


(defn add-new-deprtment
  [tie db v]
  (let [tms (:tms tie)
        ds (ds/get-ds (:connection db))
        tms (db/reload-file tms ds)
        m [:insert-dept]
        v-map {:department [v]}]
    (log/info "Addind new depoartment " v-map)
    (try
      (-> (tj/execute! ds tms m v-map)
          (to-response-format))
      (catch Exception e
        (log/info (.getMessage e))
        (error-response (.getMessage e))))))



(def Add-Meeting-schema {(s/required-key :subject) s/Str})








