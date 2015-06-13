(ns server.jetty
  #_(:use
   [ring.middleware file-info file]
   [app.routes])
  #_(:require
    [ring.middleware.reload :as reload]
    [compojure.handler :as handler]
    [ring.server.standalone :refer :all]))


;(defonce server (atom nil))


#_(defn start-server [port]
  (when (nil? @server)
    (reset! server (serve (handler/site #'app)
                         {:port          port
                          :auto-reload?  true
                          :join          false
                          :init          init
                          :destory       destroy
                          :open-browser? false}))))


#_(defn stop-server []
  (when-not (nil? @server)
    (.stop @server)
    (destroy)
    (reset! server nil)))


(comment
  ;Comment for dev start

  (start-server 9001 )
  (stop-server)

  )


