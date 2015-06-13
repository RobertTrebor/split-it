(ns server.immutant
  (:require [immutant.web :as im]
            [clojure.tools.logging :as log]
            [com.stuartsierra.component :as component]))



(defrecord Server [port routes]
  component/Lifecycle
  (start [component]
    (log/info "Starting server  " )
    (let [;handler (reload/wrap-reload (handler/site routes ))
          server (im/run (:handler routes) {:port port})]
      (log/info "Starting server done  with port....... " port)
      (assoc component :server server)))
  (stop [component]
    (log/info "Stoping server.........")
    (let [server (:server component)]
      (if server
        (do
          (im/stop server)
          (assoc component :server nil))
        component))))


(defn new-server [port]
  (map->Server {:port port}))




