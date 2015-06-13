(ns app.routes
  (:use compojure.core)
  (:require [ring.middleware.params :as p]
            [ring.middleware.format-params :as fp]
            [ring.middleware.format-response :as fr]
            [ring.util.response :as resp]
            [ring.middleware.resource :as res]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clojure.tools.logging :as log]
            [clojure.tools.reader.edn :as edn]
            [app.routes-middleware :as m]
            [com.stuartsierra.component :as component]
            [app.service-handler :as ser]
            [clj-http.client :as client]
            [clojure.data.json :as json]
            [base64-clj.core :as base64]
            [qrcode :as qr]))


; lein with-profile compojure ring server-headless
; For employee http://localhost:9001/query?name=[employee]&id=1
; For meeting


(defn read-params-string [params]
  (reduce (fn [acc [k v]]
            (cond
              (string? v)
              (assoc acc k (edn/read-string v))
              :else
              (assoc acc k v))) {} params))



(defroutes track-routes
           (context "/track" []
                    (GET "/" [] (resp/response nil #_(db/track)))
                    (GET "/start" []
                         (do
                           #_(db/track-stop)
                           "Done"))
                    (GET "/stop" []
                         (do
                           #_(db/track-stop)
                           "Done"))))


(defn query-routes [tie db]
  (routes (GET "/:gname" [gname & params]
               (let [params (read-params-string params)
                     {:keys [name]} params
                     name-coll (ser/name-list-by-group-name tie gname name)]
                 (->> (ser/query-handler tie db name-coll params)
                      (resp/response))))
          (GET "/" [& params]
               (let [params (read-params-string params)
                     {:keys [name]} params
                     name-coll (ser/str->keyword-batch name)]
                 (->> (ser/query-handler tie db name-coll params)
                      (resp/response))))))


(defn department-routes [tie db]
  (routes
    (POST "/" {params :params}
      (do
        (->> (ser/add-new-deprtment tie db params)
             (resp/response))))))




(defn main-routes [tie db]
  (routes
    (GET "/" [state code :as {:keys [params]} ]
      (if (nil? code)
        (resp/response "access fail")
        (do
          (log/info "code= " code)
          ;(log/info "state=" state)
          (log/info "Callback return.... " params)
          (try
            (let [basic (base64/encode "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc:Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0")
                  r {:form-params {"grant_type" "authorization_code"
                                   "code"       code}
                     :debug true
                     :debug-body true
                     :headers     {"Authorization: Basic" basic
                                   "username"             "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc"
                                   "password"             "Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0"
                                   }}
                  v (-> (client/post "https://api.figo.me/auth/token" r)
                        (:body)
                        (json/read-str :key-fn keyword))]
              (log/info "After get authentication key......... " v)
              (resp/response v))
            (catch Exception e
              ;(clojure.pprint/pprint (.getMessage e))
              (log/error e "System got Exception")
              (resp/response "execption"))))))
    (GET "/index" [:as {:keys [context params]}]
      (do
        (log/info "/" params)
        (resp/redirect (str context "/index.html"))))
    (context "/query" [] (query-routes tie db))
    (context "/department" [] (department-routes tie db))
    (context "/status" [] (resp/response "Not implemented yet" ))
    (GET "/qrcode" [value] (qr/qr-response value))

    ;:basic-auth

    track-routes
    (route/resources "/")
    (route/not-found "Page not found")))


(defrecord AppRoutes [config tie db]
  component/Lifecycle
  (start [component]
    (log/info "Starting app routes...... ")
    (let [r
          (-> (handler/site (main-routes tie db))
              ;(res/wrap-resource "public")
              (m/wrap-request-log)
              (p/wrap-params)
              (fp/wrap-restful-params)
              (fr/wrap-restful-response)
              (m/wrap-exceptions)
              (m/warp-allow-cross-origin)
              )]
      (assoc component :handler r)))
  (stop [component]
    (log/info "Stoping app routes.......")
    (dissoc component :handler)))


(defn new-routes [config-map]
  (map->AppRoutes {:config config-map}))




