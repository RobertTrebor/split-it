 (ns main
   (:require [app :as a]
             [com.stuartsierra.component :as component])
   (:gen-class))


(defn -main [& args]
  (println "Starting server ")
  (component/start (a/build-system a/default-config-map) )
  #_(s/start-server 3000))



