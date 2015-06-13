(ns tie.util.c3p0
  (:require
   [tie.util.ds :as j ])
  (:import
   [com.mchange.v2.c3p0 ComboPooledDataSource]))


(defrecord C3p0datasourceImpl [conf]
  j/IDataSource
  (create [this]
    (if (nil? (:ds this))
      (if conf
        (->> (ComboPooledDataSource. conf)
             (assoc this :ds))
        (->> (ComboPooledDataSource.)
             (assoc this :ds)))))
  (close [this]
    (if-not (nil? (:ds this))
      (.close (:ds this))))
  (connection [this]
    (:ds this))
  (status [this]
    (let [^ComboPooledDataSource ds (:ds this)]
      {:conn (.getNumConnectionsDefaultUser ds)
       :idle (.getNumIdleConnectionsDefaultUser ds)
       :busy (.getNumBusyConnectionsDefaultUser ds)})))


(defn C3p0datasource
  ([] (C3p0datasource nil))
  ([conf]
   (->C3p0datasourceImpl conf)))


;(def C3p0datasource (->C3p0datasourceImpl))


