(ns app.routes-middleware
  (:require [clojure.tools.logging :as log]))


(defn warp-allow-cross-origin
  "middleware function to allow crosss origin"
  [handler]
  (fn [request]
   (let [response (handler request)]
     (-> response
         (assoc-in  [:headers "Access-Control-Allow-Origin"] "*")))))


(defn wrap-request-log
  "Log http request"
  [app]
  (fn [{:keys [request-method uri] :as req}]
    (let [resp (app req)]
      (log/info (-> req
                   ; (dissoc :body)
                    (dissoc :unauthenticated-handler)))
      resp)))


(defn wrap-exceptions
  "Catch all system exception "
  [app]
  (fn [request]
    (try
      (app request)
      (catch Exception e
        (log/error e "System got Exception")
        {:status 500
         :headers {"Content-Type" "text/html"}
         :body "Exception in server"}))))
