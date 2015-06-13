(ns app.db-test
  (:require [clojure.java.jdbc :as jdbc]
            [tie.jdbc :as tj]
            [tie.core :as tie]
            [tie.core-common :as sc]
            [tie.reader :as r]
            [app.db :as db]
            [com.stuartsierra.component :as component]
            [tie.util.ds :as ds]))


(def test-components [:tie :db :sql-processor])

(defrecord TestSystem [tie db sql-processor ]
  component/Lifecycle
  (start [this]
    (println "Starting test system... ")
    (component/start-system this test-components))
  (stop [this]
    (println "Stoping test system... ")
    (component/stop-system this test-components)))


(defn build-test-system [config-options]
  (let [{:keys [file-name init-tie-name-coll]} config-options]
    (map->TestSystem
      {:tie           (db/new-tie file-name)
       :db            (db/new-db)
       :sql-processor (component/using (db/new-sql-validator init-tie-name-coll)
                                       {:db  :db})})))


(def default-test-config-map {:host "localhost"
                              :port 9001
                              :init-tie-name-coll [:create-ddl :init-data]
                              :file-name db/tms-file-name})

(def test-system (build-test-system default-test-config-map))


(comment

  (alter-var-root #'test-system component/start)


  (clojure.pprint/pprint (get-in user/system [:tie :tms :get-employee-by-id]))

  ;;  select-by-name api test  #############################################################
  (-> [:init-data]
      (r/select-by-name (r/read-file "tie.edn.sql") )
      (clojure.pprint/pprint))

  (-> [:get-dept-by-ids :get-dept-by-ids]
      (r/select-by-name (r/read-file "tie.edn.sql")   )
      (clojure.pprint/pprint))

  (-> [:get-employee-by-id]
      (r/select-by-name (r/read-file "tie.edn.sql"))
      (clojure.pprint/pprint))

  (-> (r/read-file "tie.edn.sql")
      (r/get-name-for-groups :load-employee nil)
      (r/select-by-name (r/read-file "tie.edn.sql"))
      (clojure.pprint/pprint))




  (-> [:delete-dept]
      (r/select-by-name (r/read-file "tie.edn.sql"))
      (clojure.pprint/pprint))


  ;; datasource create and stop ####################################################################
  ;; data source start
  (db/init)

  ;reload file
  (db/reload-file)

  ;; db close
  (db/close)

  ;datasource status
  (ds/status-ds (get-in test-system [:db :connection]) )



  ;validate dml with database
  (-> (db/get-ds)
      (tj/validate-dml! (r/get-dml (db/get-tms))))



  (-> (ds/get-ds @db/i-ds)
      (tj/db-do @db/tms [:create-ddl :init-data] ))


  ;;; ########## Sequence ######################

  (-> (ds/get-ds (get-in test-system [:db :connection]) )
      (jdbc/query  ["call next value for seq_dept"] :as-arrays? true)
      (get-in [1 0])
      (type))

  (-> (ds/get-ds (get-in test-system [:db :connection]) )
      (jdbc/execute!   ["call next value for seq_dept"] :transaction? false)
      (get-in [0])
      (type))

  (-> (ds/get-ds @db/i-ds)
      (tj/query @db/tms [:gen-dept] {})
      (clojure.pprint/pprint))


  (-> (ds/get-ds (get-in test-system [:db :connection]))
      (tj/query (get-in test-system [:tie :tms]) [:gen-dept :gen-empl] {})
      (clojure.pprint/pprint))



  ;;;;;;;;;;;; Department Model ################################

  (-> (ds/get-ds (get-in test-system [:db :connection]))
      (tj/query (get-in test-system [:tie :tms]) [:get-dept-list] {})
      (clojure.pprint/pprint))


  (-> (db/get-ds)
      (jdbc/query  ["select * from department " ] :as-arrays? true)
      (clojure.pprint/pprint))


  (let [n-coll [:get-dept-by-id ]]
    (-> (db/get-ds)
        (tj/query (db/get-tms) n-coll {:id 1} )
        (clojure.pprint/pprint)))


  (-> (ds/get-ds @db/i-ds)
      (tj/query @db/tms  [:get-dept-by-ids] {:id  [1 2 112]} )
      (clojure.pprint/pprint))


  (let [v {:department {:dept_name "Call Center 5"}}]
    (-> (ds/get-ds @db/i-ds)
        (tj/execute! @db/tms [:insert-dept] v)
        (clojure.pprint/pprint)))


  (let [d {:department {:dept_name "Call Center 127" :transaction_id 1 :id 107}}
        m [:update-dept] ]
    (-> (ds/get-ds @db/i-ds)
        (tj/execute! @db/tms  m d)
        (clojure.pprint/pprint)))


  (let [input {:department {:id [107 ] }}
        m [:delete-dept] ]
    (-> (ds/get-ds @db/i-ds)
        (tj/execute! @db/tms m input)
        (clojure.pprint/pprint)))


  ;;;;;;;;;;;;; Employee  ###############################################################

  (-> (ds/get-ds @db/i-ds)
      (tj/query @db/tms [:get-employee-list] {})
      (clojure.pprint/pprint))


  (-> (ds/get-ds @db/i-ds)
      (tj/query @db/tms  [:get-employee-by-id ] {:id 1})
      (clojure.pprint/pprint))


  (let [n-coll [:get-dept-by-id :get-dept-employee]]
    (-> (ds/get-ds @db/i-ds)
        (tj/query @db/tms n-coll {:id 1} )
        (clojure.pprint/pprint)))


  (let [n-coll (r/get-name-for-groups @db/tms :load-employee nil)]
    (-> (ds/get-ds @db/i-ds)
        (tj/query @db/tms n-coll {:id 112})
        (clojure.pprint/pprint)))


  (-> (ds/get-ds @db/i-ds)
      (jdbc/query  ["select m.*, em.employee_id from meeting m, employee_meeting em where em.employee_id=? and em.meeting_id = m.meeting_id;" 112] )
      (clojure.pprint/pprint))


  (let [employee {:employee
                  [{:firstname "Abdul",
                    :lastname "Rahim",
                    :dept_id 1}
                   {:firstname "Chu",
                    :lastname "Nio",
                    :dept_id 1}]}
        m [:insert-employee] ]
    (-> (ds/get-ds @db/i-ds)
        (tj/execute! @db/tms  m employee )
        (clojure.pprint/pprint)))


  (let [employee {:employee {:firstname "Schwan"
                             :lastname  "Ragg"
                             :dept_id   1
                             :employee-detail
                                        {
                                         :street  "Schwan",
                                         :city    "Munich",
                                         :state   "Bayern",
                                         :country "Germany"}
                             }}]
    (-> (ds/get-ds @db/i-ds)
        (tj/execute! @db/tms [:insert-employee :insert-employee-detail] employee)
        (clojure.pprint/pprint)))



  ;;;;;######################## Meeting [Employee n:n Meeting] ############



  (-> (ds/get-ds @db/i-ds)
      (tj/query @db/tms [:get-meeting-list] {})
      (clojure.pprint/pprint))



  (let [meeting {:meeting
                 {:subject "Hello Meeting for IT"
                  }}]
    (->
      (ds/get-ds @db/i-ds)
      (tj/execute! @db/tms [:insert-meeting] meeting)
      (clojure.pprint/pprint)))


  (let [meeting {:meeting
                 {:subject "Hello Meeting for Manager"
                  :employee
                           {:id 112
                            }
                  }}]
    (->
      (ds/get-ds @db/i-ds)
      (tj/execute! @db/tms [:insert-meeting :insert-employee-meeting] meeting)
      (clojure.pprint/pprint)))


  (let [meeting {:meeting
                 {:subject "Hello Meeting for IT"
                  :employee
                           [{:current_transaction_id 1,
                             :dept_id 2,
                             :lastname "Zoma",
                             :firstname "Abba"
                             :id 1}
                            {:current_transaction_id 1,
                             :dept_id 2,
                             :lastname "Zoma",
                             :firstname "Abba"
                             :id 2}]}}]
    (->(ds/get-ds @db/i-ds)
       (tj/execute! @db/tms [:insert-meeting :insert-employee-meeting] meeting)
       (clojure.pprint/pprint)))



  )
