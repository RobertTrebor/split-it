(ns app.figoref
  (:require [base64-clj.core :as base64]
            [clojure.tools.logging :as log]
            [clj-http.client :as client]
            [clojure.data.json :as json])
  (:import [me.figo FigoException FigoSession]
           [me.figo.models Account Transaction]))


(defn get-access-token
  [auth-code]
  (try
    (let [basic (base64/encode "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc:Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0")
          r {:form-params {"grant_type" "authorization_code"
                           "code"       auth-code}
             :headers     {"Authorization: Basic " basic
                           "username"             "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc"
                           "password"             "Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0"
                           }}
          v (-> (client/post "https://api.figo.me/auth/token" r)
                (:body)
                (json/read-str :key-fn keyword))]
      (log/info "Figo token value  ")
      (clojure.pprint/pprint   v)
      v)
    (catch Exception e
      (log/error e "System got Exception")
      {})))

(defn get-access-taken-by-user [username password]
  (try
    (let [basic (base64/encode "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc:Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0")
          r {:form-params {"grant_type" "password"
                           "username"   username            ;"mamuninfo@gmail.com"
                           "password"   password            ;"letmein"
                           }
             ;:debug true
             ;:debug-body true
             :headers     {"Authorization: Basic " basic}}]
      (-> (client/post "https://api.figo.me/auth/token" r)
          (:body)
          (json/read-str :key-fn keyword)))
    (catch Exception e
      (log/error e "System got Exception")
      {})))

(defn get-default-token []
  (get-access-taken-by-user "mamuninfo@gmail.com" "letmein"))


(defn make-session [acc-token]
  (FigoSession. acc-token))


(defn get-accounts [^FigoSession f-session]
  (let [v
        (->> (.getAccounts f-session)
             (into [])
             (map bean)
             (mapv #(select-keys % [:accountId :accountNumber :bankId :name :IBAN :currency :BIC :bankCode ] ))
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
    (get-access-taken-by-user "mamuninfo@gmail.com" "letmein")
    (clojure.pprint/pprint))


  (let [{access_token :access_token} (get-access-taken-by-user "mamuninfo@gmail.com" "letmein")]
    (->>
      (make-session access_token)
      (get-accounts )
      (clojure.pprint/pprint)))


  (let [{access_token :access_token} (get-access-taken-by-user "mamuninfo@gmail.com" "letmein")
        sess (make-session access_token)
        accounts (get-accounts sess)
        f-account (get-in accounts [0 :accountId])]
    (->>
      (get-transaction sess f-account)
      (clojure.pprint/pprint)))


  )

