 (ns main
   (:require [app :as a]
             [com.stuartsierra.component :as component]
             [environ.core :refer [env]])
   (:gen-class))


(defn -main [& [port]]
  (println "Starting server ")
  (let [port (Integer. (or port (env :port) 3000))
        d-map (-> a/default-config-map
                  (assoc :port port))]
    (component/start (a/build-system d-map)))
  #_(s/start-server 3000))



