(ns tie.core-test
  (:use [clojure.test])
  (:require [clojure.test :refer :all]
            [tie.core :refer :all]
            ))


(deftest do-validation!-test
  (testing "testing query validation with successful "
    (let [input {:params {:id 3 :tid 3}
                 :validation {:id [integer? ]
                              :tid [integer? ]}}
          ret (do-validation input) ]
      (is (empty? (:error ret) ))))
  (testing "testing query validation with error "
    (let [input {:params {:id 3 :tid 3}
                 :validation {:id [integer? ]
                              :tid [integer? string?]}}
          ret  (do-validation input )]
      (is (not-empty (:error ret) )))))

;(do-validation!-test)

(deftest do-params!-test
  (testing "testing do input for query"
    (let [t {:input {:id 4}
             :params {:id 3}
             :sql ["select * from tab" :id]}
          e {:params {:id 4}}
          r (select-keys  (do-params  t) [:params])]
      (is (= e r))))
  (testing "testing do input for query"
    (let [t {:input {}
             :params {:id2 3}
             :sql ["select * from tab" :id2]}
          e {:params {:id2 3}}
          r (select-keys (do-params t) [:params]) ]
      (is (= e r)))))

;(do-params!-test)

(deftest do-params!-test2
  (testing "testing do input for execute"
    (let [t {:input  [{:id 1}]
             :identifier [:user]
             :dml-type :insert
             :sql ["select * from tab" :id]}
          e {:params [{:id 1}]}
          r (select-keys (do-params t) [:params]) ]
      (is (= e r))))
  (testing "testing do input for execute"
    (let [t {:input  [[1][4]]
             :identifier [:user]
             :dml-type :insert
             :sql ["select * from tab" :id]}
          e {:params [{:id 1}{:id 4}]}
          r (select-keys (do-params t) [:params]) ]
      (println r)
      (is (= e r)))))

;(do-params!-test2)


(deftest replace-sql-params!-test
  (testing "testing query assoc params with successful"
    (let [inp [{:sql    ["SELECT * FROM lang where id in (:id) and tid in (:tid)" :id :tid]
                :input {:id [1 4] :tid [9 8 7]}}]
          expected-result ["SELECT * FROM lang where id in (?, ?) and tid in (?, ?, ?)" 1 4 9 8 7]
          actual-result (-> (transduce bind-form conj [] inp)
                            (get-in [0 :sql]))]
      (is (= actual-result expected-result ))))
  (testing "testing accoc sql for execute"
    (let [inp [{:input   [[1 "name"] [1 "name"]]
              :dml-type :insert
              :sql      ["insert into lang values " :id :alias]}]
          actual-result (-> (transduce bind-form conj [] inp)
                            (get-in [0 :sql]))
          expected-result ["insert into lang values " [1 "name"] [1 "name"]]]
      (is (= actual-result expected-result )))))

;(replace-sql-params!-test)




(deftest bind!-test
  (testing "testing apply bind sucessfully"
    (let [data [[{:id 1 :alias "name"} {:id 1 :alias "name"}]
                [{:id 1 :alias "name"}]]
          inp {:sql-list [{:validation {:id [integer? ] :alias [string?]}
                           :sql ["insert into lang values (:id, :name )" :id :alias]
                           :dml-type :insert
                           :identifier :lang}
                          {:validation {:id [integer? ] :alias [string?]}
                           :sql ["insert into lang2 values (:id, :name )" :id :alias]
                           :dml-type :insert
                           :identifier :lang2}]
               :bind-type :insert}

          expected-result (list ["insert into lang values (?, ? )" [1 "name" ] [1 "name" ]]
                                ["insert into lang2 values (?, ? )" [1 "name"]])
          actual-result (->>  (assoc-input data inp )
                              (:sql-list)
                              (transduce bind-form conj [] )
                              (map :sql))]
      (is (= actual-result  expected-result)))))

;(bind!-test)

(deftest bind!-test-2
  (testing "testing apply bind sucessfully"
    (let [input {:id 1 :alias "name"}
          inp {:bind-type :select
               :sql-list [{:validation {:id [number? ] :alias [string?]}
                           :sql ["select into lang values (:id, :name )" :id :alias]
                           :dml-type :select
                           :identifier :lang}
                          {:validation {:id [integer? ] :alias [string?]}
                           :dml-type :select
                           :sql ["select into lang2 values (:id, :name )" :id :alias]
                           :identifier :lang2}]}
          e-r (list ["select into lang values (?, ? )"  1 "name" ]
                    ["select into lang2 values (?, ? )"  1 "name" ])
          actual-result (->>  (assoc-input input inp )
                              (:sql-list)
                              (transduce bind-form conj [] )
                              (map :sql))]
      (is (= e-r actual-result)))))



;(bind!-test-2)

;(run-tests)




