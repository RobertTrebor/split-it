 (ns app
   (:require [com.stuartsierra.component :as component]
             [clojure.tools.logging :as log]
             [server.immutant :as s]
             [app.db :as db]
             [app.routes :as r ]))


(def system-components [:tie :db :sql-processor :routes :server])

(defrecord AppSystem [tie db sql-processor routes server]
  component/Lifecycle
  (start [this]
    (log/info "Starting app .....")
    (component/start-system this system-components))
  (stop [this]
    (log/info "Stoping app ......")
    (component/stop-system this system-components)))



(defn build-system [config-options]
  (let [{:keys [host port file-name init-tie-name-coll]} config-options]
    (map->AppSystem
      {:tie           (db/new-tie file-name)
       :db            (db/new-db)
       :sql-processor (component/using (db/new-sql-validator init-tie-name-coll)
                                       {:db  :db
                                        :tie :tie})
       :routes        (component/using (r/new-routes {})
                                       {:db  :db
                                        :tie :tie})
       :server        (component/using (s/new-server port)
                                       {:routes :routes})})))

(def default-config-map {:host "localhost"
                         :port 3000
                         :init-tie-name-coll [:create-ddl :init-data]
                         :file-name db/tms-file-name})


;(def system-app (build-system default-config-map))



