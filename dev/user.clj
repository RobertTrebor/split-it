 (ns user
   (:require [com.stuartsierra.component :as component]
             [clojure.tools.namespace.repl :refer (refresh)]
             [app :refer :all ]))

(def system nil)

(defn init []
  (alter-var-root #'system
                  (constantly (build-system default-config-map)  )))

(defn start []
  (alter-var-root #'system component/start)
  nil)

(defn stop []
  (alter-var-root #'system
                  (fn [s] (when s (component/stop s))))
  nil)

(defn go []
  (init)
  (start))

(defn reset []
  (stop)
  (refresh :after 'user/go))


(comment

  (go )

  (reset)
  ;(start-server 9001)

  ;(stop-server)

  (clojure.pprint/pprint (get-in system [:tie :tms :get-employee-by-id]))

  )