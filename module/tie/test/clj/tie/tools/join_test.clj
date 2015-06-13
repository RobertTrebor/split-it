(ns tie.tools.join-test
  (:use [clojure.test])
  (:require [tie.tools.join-key-impl :refer :all]))


(deftest group-with-join-test
  (testing "Group with join test"
    (let [output {:department [{:name "Markeing" , :transaction_id 0, :id 2}]
                  :employee [{:dept_id 2, :lastname "Zen", :firstname "Bala" ,
                              :transaction_id 0, :id 2}
                             {:dept_id 1, :lastname "Zen", :firstname "Bala" ,
                              :transaction_id 0, :id 1}]}
          j [:department :id :1-n :employee :dept_id]
          v (group-with-join :employee :dept_id output)
          v (group-with-join :department :id output)
          ]
      (->> v
           (clojure.pprint/pprint)))))


;(group-with-join-test)



(comment

  (keys (get-in {:department {:id {2 "he"}}} [:department :id]))

  (let [w
        {:employee
         [{:id             1,
           :transaction_id 0,
           :firstname      "Abba",
           :lastname       "Zoma",
           :dept_id        1}]}
        j [[:employee :dept_id :n-1 :department :id]
           [:employee :transaction_id :n-1 :department :id]]]
    (join-params-value j w)
    #_(reduce (fn [acc j1]
              (let [[s st] j1
                    w (keys (get-in (group-with-join s st w) [s st]))]
                (merge acc {st w})
                )
              ) {} j)
    ;(group-with-join :employee :dept_id w)
    )

  )


(deftest do-join-test
  (testing "Do join"
    (let [output {:department [{:name "Markeing" , :transaction_id 0, :id 2}]
                  :employee [{:dept_id 2, :lastname "Zen", :firstname "Bala" ,
                              :transaction_id 0, :id 2}
                             {:dept_id 1, :lastname "Zen", :firstname "Bala" ,
                              :transaction_id 0, :id 1}]}
          output {:employee   [[:dept_id :lastname :firstname :transaction_id :id]
                               [2 "Zen" "Bala" 0 1]
                               [2 "Zen" "Bala" 0 1]
                               [1 "Zen" "Bala" 0 1]],
                  :department [{:name "Markeing", :transaction_id 0, :id 2}]}
          join2 [[:department :id :1-n :employee :dept_id]
                 [:department :id :1-n :employee1 :dept_id]
                 [:department :id :1-n :employee1 :dept_id1]] ]

      (->>
        ;(group-by-join join2)
        (do-join output join2  )
        (clojure.pprint/pprint))
      (assert true)
      )))


;(do-join-test)


(deftest do-assoc-join-key-test
  (testing "do assoc join key"
    (let [join [[:employee :id :1-1 :employee-detail :employee_id]]
          data {:employee {:id              138,
                           :transaction_id  0,
                           :employee-detail [{:city    "Munich",
                                              :state   "Bayert",
                                              :street  "Scwan",
                                              :country "Germany"}],
                           :lastname        "Ragg",
                           :dept_id         1,
                           :firstname       "Scwan"}}]
      (->> (do-assoc-join-key data join)
           (clojure.pprint/pprint)))))





(deftest do-disjoin-test
  (testing "do disjoin test"
    (let [join [[:employee :id :1-1 :employee-detail :employee_id]]
          input {:employee {:id              137, :transaction_id 0,
                            :employee-detail [{:employee_id 137, :city "Munich",
                                               :state       "Bayern",
                                               :street      "Scwn", :country "Germany"}
                                              {:employee_id 137, :city "Munich",
                                               :state       "Bayern",
                                               :street      "Scwn", :country "Germany"}],
                            :lastname        "Ragg", :dept_id 1, :firstname "Schwan"}}]
      (-> (do-disjoin join input)
          (clojure.pprint/pprint))))
  (testing "another test"
    (let [join [[:employee
                 :id :1-1 :employee-detail :employee_id]]
          input {:employee [{:id              137, :transaction_id 0,
                             :employee-detail [{:employee_id 137, :city "Munich",
                                                :state       "Bayern",
                                                :street      "Scwn", :country "Germany"}
                                               {:employee_id 137, :city "Munich",
                                                :state       "Bayern",
                                                :street      "Scwn", :country "Germany"}],
                             :lastname        "Ragg", :dept_id 1, :firstname "Schwan"}
                            {:id              137, :transaction_id 0,
                             :employee-detail {:employee_id 138, :city "Munich",
                                               :state       "Bayern",
                                               :street      "Scwn", :country "Germany"},
                             :lastname        "Ragg", :dept_id 1, :firstname "Schwan"}]}]
      (->>
        (do-disjoin  join input)
        (clojure.pprint/pprint)))
    ))











(comment



  (let [v [[:department :id :1-n :employee :dept_id]
           [:employee :id :1-1 :employee-detail :employee_id]
           [:employee :id :n-n :meeting :meeting_id [:employee-meeting :employee_id :meeting_id]]
           ]


        ]
    (->     (add-bi-join v)
            (clojure.pprint/pprint ))



    )


  )

