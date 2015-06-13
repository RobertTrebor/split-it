 (ns server.httpkit
   #_(:use [org.httpkit.server :only [run-server]]
         [app.routes :only [app init destroy]])
   #_(:require [ring.middleware.reload :as reload]
             [compojure.handler :as handler]
             [compojure.route :as route]))




 #_(defn stop-server []
   (when-not (nil? @server)
     (@server :timeout 100)
     (destroy)
     (reset! server nil)))


 #_(defn start-server [port dev?]
   (when (nil? @server)
     (let [handler (if dev?
                     (reload/wrap-reload (handler/site #'app)) ;; only reload when dev
                     (handler/site app))]
       (init)
       (reset! server (run-server handler {:port port})))))


 #_(defn -main [& args]
   (start-server 3000 false))


 (comment

   (start-server 9001 true)
   (stop-server)

   )