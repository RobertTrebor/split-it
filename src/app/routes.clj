(ns app.routes
  (:use compojure.core)
  (:require [ring.middleware.params :as p]
            [ring.middleware.format-params :as fp]
            [ring.middleware.format-response :as fr]
            [ring.util.response :as resp]
            [ring.middleware.resource :as res]
            [ring.middleware.session :as sess]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clojure.tools.logging :as log]
            [clojure.tools.reader.edn :as edn]
            [app.routes-middleware :as m]
            [com.stuartsierra.component :as component]
            [app.service-handler :as ser]
            [app.figoref :as figo]
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
    (GET "/" [state code :as {:keys [session]} ]
      (if (nil? code)
        (resp/response "access fail")
        (let [{access_token :access_token :as v} (figo/get-access-token code)
              session (-> session
                          (assoc :figo-access-token v)
                          (assoc :figo-session (figo/make-session access_token)))]
          (log/info "Fego return " session)
          {:status  302
           :headers {"Location" "/index"}
           :body    ""
           :session session})))
    (GET "/index" [:as {:keys [context params session]}]
      (do
        (log/info session)
        (log/info "/" params)
        (resp/redirect (str context "/index.html"))))
    (GET "/sess" [:as {:keys [session]}]
      (resp/response session))
    (GET "/testsess" [:as {:keys [session]}]
      (let [count (or (:count session) 0)
            session (assoc session :count (inc count))]
        {:session session
         :body count}))
    (GET "/accounts" [:as {:keys [session]}]
      (let [d (-> session
                  (:figo-session)
                  (figo/get-accounts))]
        (resp/response d)))

;    for (Transaction transaction : session.getTransactions(session.getAccount("A1.2"))) {
 ;           System.out.println(transaction.getPurposeText());

    (GET "/transaction" [accountId :as {:keys [session]}]
      (let [d (->> session
                  (:figo-session)
                  (figo/get-transaction accountId))]
        (resp/response d)))



    (context "/query" [] (query-routes tie db))
;    (context "/department" [] (department-routes tie db))


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
              (sess/wrap-session ))]
      (assoc component :handler r)))
  (stop [component]
    (log/info "Stoping app routes.......")
    (dissoc component :handler)))


(defn new-routes [config-map]
  (map->AppRoutes {:config config-map}))




