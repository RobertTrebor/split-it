(ns tie.util.ds
  (:require
    [clojure.tools.logging :as log]
    [tie.core-common :as sc]))


(defprotocol IDataSource
  (create [this])
  (connection [this])
  (close [this ])
  (status [this]))


(defn create-ds
  [ds-impl]
  (if-not (satisfies? IDataSource ds-impl)
    (do
      (log/info "Data source creation failed, ds-impl does not satisfied IDataSource ")
      (sc/fail "Data source creation failed, ds-impl does not satisfied IDataSource "))
    (let [ds (create ds-impl)]
      ds)))


(defn close-ds
  [ds-impl]
  (try
    (when (satisfies? IDataSource ds-impl)
      (close ds-impl)
      (log/info "Database connection closed successfully "))
    (catch Exception e
      (log/error e))))


(defn get-ds
  [ds-impl]
  (when (satisfies? IDataSource ds-impl)
    {:datasource (connection ds-impl)}))


(defn status-ds
  [ds-impl]
  (when (satisfies? IDataSource ds-impl)
    (status ds-impl)))


