(ns tie.jdbc
  (:require
    [clojure.tools.logging :as log]
    [clojure.java.jdbc :as sql]
    [clojure.java.jdbc :as jdbc]
    [tie.tools.join-key-impl :as join]
    [tie.core :as tie]
    [tie.reader :as r]
    [tie.core-common :as sc]))



(defn jdbc-executor [ds]
  (fn [tm]
    (let [dml-type (sc/dml-type-key tm)
          sql (sc/sql-key tm)
          result (sc/result-key tm)]
      (condp = dml-type
        sc/dml-type-select-key
        (if (contains? result sc/result-array-key)
          (let [v (sql/query ds sql :as-arrays? true)]
            v)
          (let [v (sql/query ds sql)]
            v))
        sc/dml-type-insert-key
        (sql/execute! ds sql :multi? true)
        (let [v (sql/execute! ds sql)]
          v)))))


(defn commit?
  [commit-type read-only? v]
  (if read-only?
    false
    (condp = commit-type
      sc/commit-any-key true
      sc/commit-all-key (if (sc/fail? v) false true)
      false)))


(defn with-db-transaction
  [ds tx-prop commit-type exec]
  (let [tx-map (apply hash-map tx-prop)
        isolation  (or (:isolation tx-map) :serializable)
        read-only? (if (contains? tx-map  :read-only?)
                     (:read-only? tx-map)
                     true)
        read-only?  (if read-only?
                      read-only?
                      (= commit-type sc/commit-none-key))]
    (sql/with-db-transaction [t-conn ds
                              :isolation isolation
                              :read-only? read-only?]
                             (let [v (exec t-conn)]
                               (if (commit? commit-type read-only? v)
                                 (sql/db-unset-rollback-only! t-conn)
                                 (sql/db-set-rollback-only! t-conn))
                               v))))


(defn jdbc-transaction-executor
  [ds tms]
  (fn [tm-coll]
    (let [e (fn [conn]
              (let [exec (tie/default-executor (jdbc-executor conn))]
                (sc/take-until-item-fail-> tm-coll exec)))]
      (with-db-transaction ds (get-in tms [sc/config-key sc/tx-prop]) (sc/commit-type tm-coll) e))))



(defn query
  [ds tms name-coll input & steps-map]
  (let [proc-map (tie/as-map steps-map)
        tm-coll  (r/select-by-name name-coll tms)
        r-query  (partial query ds tms)]
    (if (sc/fail? tm-coll)
      tm-coll
      (sc/fail-> tm-coll
                 (tie/run-query (jdbc-executor ds) r-query input proc-map)
                 (join/do-join (get-in tm-coll [0 join/join-key]))))))



(defn delete!
  [ds tms name-coll input & steps-map]
  (let [proc-map (tie/as-map steps-map)
        r-query  (partial query ds tms)
        exec     (jdbc-transaction-executor ds tms)
        tm-coll (r/select-by-name name-coll tms)]
    (if (sc/fail? tm-coll)
      tm-coll
      (sc/fail-> input
                 (tie/assoc-input-key r-query tm-coll)
                 (tie/run proc-map exec)))))



(defn execute!
  [ds tms name-coll input & steps-map]
  (let [proc-map (tie/as-map steps-map)
        r-query  (partial query ds tms)
        exec     (jdbc-transaction-executor ds tms)]
    (sc/fail-> name-coll
               (r/select-by-name tms)
               (tie/assoc-model-input input r-query)
               (tie/run proc-map exec))))



(defn validate-dml!
  [ds str-coll]
  (jdbc/with-db-connection
    [conn ds]
    (doseq [str str-coll]
      (sql/prepare-statement (:connection conn) str)))
  (log/info (format "checking %d dml statement is done " (count str-coll))))



(defn db-do
  "call db do commands "
  [ds tms name-coll]
  (try
    (let [name-coll (r/select-by-name name-coll tms)]
      (doseq [m (vals name-coll)]
        (when-let [sql (get-in m [sc/sql-key])]
          (log/info (str "DB do with " sql))
          (sql/db-do-commands ds false sql)
          (log/info (str "DB do done with " (pr-str name-coll))))))
    (catch Exception e
      (log/error e )
      (log/error (.getMessage e)))))
