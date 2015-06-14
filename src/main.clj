 (ns main
   (:require [app :as a]
             [com.stuartsierra.component :as component]
             [environ.core :refer [env]])
   (:gen-class))


(defn -main [& [port]]
  (println "main port : " port)
  (let [port  (Integer. (or port (env :port) "3000"))
        d-map (-> a/default-config-map
                  (assoc :port port))]
    (clojure.pprint/pprint  d-map)
    (component/start (a/build-system d-map)))
  #_(s/start-server 3000))



(comment
  (main "3001")
  )