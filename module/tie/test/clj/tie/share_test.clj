(ns tie.share-test
  (:use [clojure.test])
  (:require [clojure.test :refer :all]
            [tie.share :refer :all]))


(deftest tie-comp-test
  (testing "testing tie-comp "
    (let [input {:input :input}
          f1 (fn [v] (assoc v :f1 :f1) )
          f2 (fn [v] (assoc v :f2 :f2) )
          e-result {:f2 :f2, :f1 :f1, :input :input}
          a-result ((tie-comp f1 f2)  input   ) ]
      (println a-result)
      (is (= a-result e-result))))
  (testing "testing tie-comp with error "
    (let [input {:input :input}
          f1 (fn [v] (assoc v :error :f1) )
          f2 (fn [v] (assoc v :f2 :f2) )
          e-result {:error :f1, :input :input}
          a-result ((tie-comp f1 f2)  input   ) ]
      (println a-result)
      (is (= a-result e-result)))))



(deftest tie-comp-list-test
  (testing "testing tie comp list"
    (let [input [{:a :a} {:b :b}]
          f1 (fn [v] (assoc v :f1 :f1))
          a-result ((tie-comp-list f1) input)
          e-result [{:f1 :f1, :a :a} {:f1 :f1, :b :b}]]
      (println a-result)
      (is (= a-result e-result))))
  (testing "testing tie comp list with error "
    (let [input [{:a :a :error :error} {:b :b}]
          f1 (fn [v] (assoc v :f1 :f1))
          a-result ((tie-comp-list f1) input)
          e-result {:f1 :f1, :a :a, :error :error}]
      (println a-result)
      (is (= a-result e-result)))))





(run-tests)
