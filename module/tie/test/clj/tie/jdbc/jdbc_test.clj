(ns tie.util.jdbc-test
  (:require [clojure.test :refer :all]
            [tie.core :as tie]
            [tie.util.jdbc :as tj]
            [tie.util.c3p0 :as tcj]))

(def tms (-> "tie/jdbc/tie.edn.sql"
             (tie/read-file )
             (tj/create-ds tcj/C3p0datasource)))


(tj/db-do tms [:create-ddl :init-data])


(deftest query-test
  (testing "testing query  "
    (let [name :langs
          params {:id (list 2 4 5)}
          o (tj/query tms name params)]
      (println o)
      (is (not-empty (:lang o) )))))

;(query-test)


(deftest execute!-test
  (testing "testing query  "
    (let [input {:lang [{:id 11 :alias "four"}
                        {:id 12 :alias "Five"}]
                 :designer [{:id 11 :alias "ten"}
                            {:id 12 :alias "six"}]}
          name :save-lang-atom
          o (tj/execute! tms name input)
          params {:id (list 11 12)}
          qname :langs
          o1 (tj/query tms qname params)]
      (println o)
      (println o1)
      (is (not-empty o)))))

;execute!-test

(run-tests)

(tj/close-ds tms tcj/C3p0datasource)


