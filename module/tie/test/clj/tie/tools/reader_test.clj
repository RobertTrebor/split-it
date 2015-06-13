(ns tie.reader-test
  (:use [clojure.test])
  (:require [clojure.test :refer :all]
            [tie.util.reader :refer :all]
            [clojure.tools.reader.edn :as edn]))

(def config {:alias :config
             :default-timeout 1000})

(deftest split-sql-params-test
  (testing "split-sql-params-> sucess  "
    (let [input "select * from lang where id=:id;select * from designer where id=:id"
          exp-r [["select * from lang where id=:id" :id]
                 ["select * from designer where id=:id" :id]]
          acu-r (split-sql-params input)]
      (is (= exp-r acu-r)))))

(split-sql-params-test)


(deftest dml-type-test
  (testing "dml-type -> success"
    (let [input ["select * from lang where id=:id" :id]
          exp-r :select
          acu-r (dml-type input)]
      (is (= exp-r acu-r))))
  (testing "dml-type -> success"
    (let [input ["insert into lang values (:id :name) " :id :alias]
          exp-r :insert
          acu-r (dml-type input)]
      (is (= exp-r acu-r)))))

(dml-type-test)


(deftest bind-type-test
  (testing "bind-type -> success"
    (let [input [{:dml-type :select }
                 {:dml-type :insert}]
          exp-r :insert
          acu-r (bind-type input)]
      (is (= exp-r acu-r))))
  (testing "bind-type -> success"
    (let [input [{:dml-type :select }
                 {:dml-type :select}]
          exp-r :select
          acu-r (bind-type input)]
      (is (= exp-r acu-r)))))

(bind-type-test)


(deftest resolve-validation-test
  (testing "resolve-validation -> success"
    (let [input (edn/read-string "{:id [integer?]}")
          acu-r (resolve-validation input)
          exp-r [#'clojure.core/integer?]]
      (is (= exp-r (:id acu-r)))))
  (testing "resolve-validation -> success "
    (let [input (edn/read-string "{:id [seq?]}")
          acu-r (resolve-validation input)
          exp-r [#'clojure.core/seq?]]
      (is (= exp-r (:id acu-r)))))
  (testing "resolve-validation -> success "
    (let [input (edn/read-string "{:id [\"3\"]}")
          acu-r (resolve-validation input)]
      (is (true? ((first (:id acu-r)) 3))))))


;(resolve-validation-test)


(deftest do-entity-sql-test
  (testing "do-entity-sql -> success "
    (let [e-input :user
          s-input ["select * from user where id=:id" :id]
          m-input {:params  {:id 3} }
          a-result (do-entity-sql config m-input e-input s-input)
          e-result {:params {:id 3},
                    :sql ["select * from user where id=:id" :id],
                    :timeout 1000,
                    :identifier :user,
                    :dml-type :select}]
      (is (= e-result a-result)))))

;(do-entity-sql-test )

(deftest do-module-test
  (testing "do-module -> success "
    (let [input {:alias :lang_designer
                 :identifier [:lang :designer]
                 :sql "SELECT * FROM lang where id = :id;SELECT * FROM lang_designer where id = :id;"}
          e-result {:alias :lang_designer
                    :bind-type :select
                    :sql-list (list {:sql ["SELECT * FROM lang where id = :id" :id],
                                     :timeout 1000,
                                     :identifier :lang,
                                     :dml-type :select}
                                    {:sql ["SELECT * FROM lang_designer where id = :id" :id],
                                     :timeout 1000,
                                     :identifier :designer,
                                     :dml-type :select})}
          a-result (do-module config input)]
      (is (= e-result a-result)))))

;(do-module-test)



(run-tests)
