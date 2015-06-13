 (ns http-connect
   (:require [clj-http.client :as client]
             [clojure.data.json :as json]
             [base64-clj.core :as base64]))


(comment


  (client/get "http://google.com")

  ;?name=get-dept-by-id&id=1

  (let [p {"name" "get-dept-by-id"
           "id"   "1"}
        r {:query-params p
           :accept       :json}]
    (-> (client/get "http://localhost:9001/query" r)
        (:body)
        (json/read-str :key-fn keyword)
        (clojure.pprint/pprint)))


  (let [p {"name" "get-dept-list"
           "id"   "1"}
        r {:query-params p
           :accept       :json}]
    (-> (client/get "http://localhost:9001/query" r)
        (:body)
        (json/read-str :key-fn keyword)
        (clojure.pprint/pprint)))



  (let [r {:form-params {"dept_name" "business-hr"}
           :accept       :json}]
    (-> (client/post "http://localhost:9001/department" r)
        (:body)
        (json/read-str :key-fn keyword)
        (clojure.pprint/pprint)))

  (let [r {:form-params {"dept_name" "new-business-hr"}
           :content-type :json
           :accept       :json}]
    (-> (client/post "http://localhost:9001/department" r)
        (:body)
        (json/read-str :key-fn keyword)
        (clojure.pprint/pprint)))


  ;(client/post "http://site.com" {:form-params {:foo "bar"} :content-type :json})

  (json/write-str {:a 1 :b 2}
                  :key-fn #(.toUpperCase (str %)))




  (->>
    (client/get
      "https://api.figo.me/auth/code?response_type=code&client_id=CaESKmC8MAhNpDe5rvmWnSkRE_7pkkVIIgMwclgzGcQY&scope=accounts%3Dro+balance%3Dro+transactions%3Dro&state=xqD6gjWygsBlF0uB")
    (clojure.pprint/pprint))


  (->> (client/get "https://api.figo.me/auth/code?response_type=code&client_id=CaESKmC8MAhNpDe5rvmWnSkRE_7pkkVIIgMwclgzGcQY&scope=accounts%3Dro+balance%3Dro+transactions%3Dro&state=xqD6gjWygsBlF0uB" )
       (clojure.pprint/pprint))




  (let [basic (base64/encode "CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc:Sl7mrzkzYprH7D5gdxiKyVMtyKF_xEtIOBsVsZ4VqbZ0")
        r {:form-params {"grant_type" "password"
                         "username" "mamuninfo@gmail.com"
                         "password" "letmein"}
           ;:debug true
           ;:debug-body true
           :headers {"Authorization: Basic " basic}}
        v (-> (client/post "https://api.figo.me/auth/token" r)
              (:body)
              (json/read-str :key-fn keyword))]
    (clojure.pprint/pprint v))




  )