(ns app.figoref
  (:require [base64-clj.core :as base64]
            [clojure.tools.logging :as log]
            [clj-http.client :as client]
            [clojure.data.json :as json])
  (:import [me.figo FigoException FigoSession]
           [me.figo.models Account Transaction]))


(def ^:dynamic figo-api-end-point "https://api.figo.me/")


(defn token-by-auth
  [{:keys [auth-code client-id secret debug debug-body]}]
  {:pre [(string? auth-code)
         (string? client-id)
         (string? secret)]}
  (let [basic (base64/encode (str client-id ":" secret))
        params {:form-params {"grant_type" "authorization_code"
                              "code"       auth-code}
                :headers     {"Authorization: Basic " basic
                              "username"              client-id
                              "password"              secret}}
        params (if debug (assoc params :debug true) params)
        params (if debug-body (assoc params :debug-body params) params)]
    (-> (client/post (str figo-api-end-point "auth/token") params)
        (:body)
        (json/read-str :key-fn keyword))))


(defn token-by-user
  [{:keys [user-name password client-id secret debug debug-body]}]
  {:pre [(string? user-name)
         (string? password)
         (string? client-id)
         (string? secret)]}
  (let [basic (base64/encode (str client-id ":" secret))
        params {:form-params {"grant_type" "password"
                              "username"   user-name
                              "password"   password}
                :headers     {"Authorization: Basic " basic}}
        params (if debug (assoc params :debug true) params)
        params (if debug-body (assoc params :debug-body params) params)]
    (-> (client/post (str figo-api-end-point "auth/token") params)
        (:body)
        (json/read-str :key-fn keyword))))


(defn accounts
  [{:keys [access_token debug debug-body]}]
  {:pre [(string? access_token)]}
  (let [acc-token (str "Bearer " access_token)
        params {:headers {"Authorization"  acc-token
                          "Accept" "application/json"
                          "Content-Type" "application/json"}}
        params (if debug (assoc params :debug true) params)
        params (if debug-body (assoc params :debug-body params) params)]
    (-> (client/get (str figo-api-end-point "rest/accounts") params)
        (:body)
        (json/read-str :key-fn keyword))))





(defn get-default-token []
  (token-by-user {:client-id "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc"
                      :secret    "Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0"
                      :user-name  "mamuninfo@gmail.com"
                      :password  "letmein"}))

(->
  (token-by-user {:client-id "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc"
                  :secret    "Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0"
                  :user-name "mamuninfo@gmail.com"
                  :password  "letmein"})
  ;(assoc          :debug true)
  ;(assoc          :debug-body true)
  (accounts)
  (clojure.pprint/pprint))


;(->> (accounts {}))

(defn make-session [acc-token]
  (FigoSession. acc-token))


(defn get-accounts [^FigoSession f-session]
  (let [v
        (->> (.getAccounts f-session)
             (into [])
             (map bean)
             (mapv #(select-keys % [:accountId :accountNumber :bankId :name :IBAN :currency :BIC :bankCode]))
             )]
    (log/info "Load account no.")

    (clojure.pprint/pprint v)
    v
    ))





;    for (Transaction transaction : session.getTransactions(session.getAccount("A1.2"))) {
;           System.out.println(transaction.getPurposeText());


(defn get-transaction [^FigoSession f-session account-id]
  (log/info "Load transaction with account no: " account-id)
  (let [v (.getTransactions f-session account-id)
        pv (->> v
                (into [])
                (map bean)
                (mapv #(select-keys % [:amount :accountNumber :purposeText :name :transactionId :bankCode :accountId]))
                )]
    pv

    )
  )


(comment


  (->>
    (token-by-user "mamuninfo@gmail.com" "letmein")
    (clojure.pprint/pprint))


  (let [{access_token :access_token} (token-by-user "mamuninfo@gmail.com" "letmein")]
    (->>
      (make-session access_token)
      (get-accounts)
      (clojure.pprint/pprint)))


  (let [{access_token :access_token} (token-by-user "mamuninfo@gmail.com" "letmein")
        sess (make-session access_token)
        accounts (get-accounts sess)
        f-account (get-in accounts [0 :accountId])]
    (->>
      (get-transaction sess f-account)
      (clojure.pprint/pprint)))

  )

