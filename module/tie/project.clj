(defproject sql-tie "0.1.5"
  :description "Clojure database access framework"
  :url "https://github.com/Mamun/sql-tie"
  :license {:alias "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/tools.reader "0.9.2"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/tools.logging "0.3.1"]
                 [prismatic/schema "0.2.2"]
                 [org.clojure/java.jdbc "0.3.6"]
                 [c3p0/c3p0 "0.9.1.2"]]

  :repl-options {:port 4555}
  :profiles {:dev {:dependencies [[com.h2database/h2 "1.3.154"]
                                  [org.clojure/tools.nrepl "0.2.5"]]
                   :plugins [[lein-midje "3.0.0"]
                             [codox "0.6.4"]]
                   :codox {:sources ["src"]
                           :output-dir "doc/api"}}})

