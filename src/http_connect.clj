 (ns http-connect
   (:require [clj-http.client :as client]
             [clojure.data.json :as json]))


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




  (let [r {:form-params {"grant_type" "authorization_code"
                         "code" code}
           :basic-auth ["user" "pass"]
           :accept       :json}
        v (-> (client/post "https://api.figo.me/auth/token" r)
              (:body)
              (json/read-str :key-fn keyword)
              (resp/response))]
    (log/info "After get authentication key ")
    (log/info v )
    (resp/response v))




  )