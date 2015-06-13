(ns app.db
  (:require [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [tie.core-common :as s]
            [tie.reader :as tie]
            [tie.jdbc :as tj]
            [tie.util.ds :as ds]
            [tie.util.c3p0 :as tcj]
            [tie.core-executor :as exec]
            [com.stuartsierra.component :as component]))


(def ^:dynamic tms-file-name "tie.edn.sql")

(defrecord Tie [file-name]
  component/Lifecycle
  (start [component]
    (log/info "Starting tie file ")
    (let [v (tie/read-file file-name)]
      (assoc component :tms v)))
  (stop [component]
    (println "Closing tie file ")
    (dissoc component :tms nil)))


(defn new-tie [file-name]
  (map->Tie {:file-name file-name}))



(defrecord DB [name]
  component/Lifecycle
  (start [component]
    (log/info "Starting database connection..")
    (let [ds-v (ds/create-ds (tcj/C3p0datasource))]
      (assoc component :connection ds-v)))
  (stop [component]
    (log/info "Starting database connection..")
    (if (:connection component)
      (do
        (ds/close-ds (:connection component))
        (dissoc component :connection))
      component)))


(defn new-db []
  (map->DB {:name ""}))


(defrecord SQLValidator [n-coll tie db]
  component/Lifecycle
  (start [component]
    (log/info "Starting sql validation...  ")
    (do
      (tj/db-do (ds/get-ds (:connection db) ) (:tms tie) n-coll)
      component))
  (stop [component]
    component))


(defn new-sql-validator [n-coll]
  (map->SQLValidator {:n-coll n-coll }))


 (defonce ^:private tms (atom nil))
 (defonce ^:private i-ds (atom nil))



 (defn reload-file
   ([tms ds]
    (let [f-name (get-in tms [s/config-key s/file-name-key])
          is-reload (get-in tms [s/config-key s/file-reload-key])]
      (if is-reload
        (let [new-tms (tie/read-file f-name)]
          (tj/validate-dml! ds  (tie/get-dml new-tms))
          new-tms)
        tms))))


 #_(defn get-tms
   []
   (if (get-in @tms [s/config-key s/file-reload-key])
     (let [file-name (get-in @tms [s/config-key s/file-name-key])]
       (log/info "File is reloading")
       (reload-file file-name))
     @tms))


#_(defn get-ds
  []
  (ds/get-ds @i-ds))


 (defonce ^:dynamic track-file-name "sql.log")

 (defn track []
   (slurp track-file-name))

 (defn track-in-file [file-name new-coll]
   (with-open [wrtr (io/writer file-name :append true)]
     (doseq [w new-coll]
       (.write wrtr (str w))
       (.write wrtr "\n"))))


 (defn track-start []
   (exec/start-tracking :track (partial track-in-file track-file-name) )
   nil)


 (defn track-stop []
   (exec/stop-tracking :track )
   nil)
