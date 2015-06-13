(def common-deps '[[org.clojure/clojure "1.7.0-RC1"]
                   [org.clojure/tools.reader "0.9.2"]
                   [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                   [org.clojure/tools.logging "0.3.1"]
                   [prismatic/schema "0.2.2"]
                   [org.clojure/java.jdbc "0.3.6"]
                   [c3p0/c3p0 "0.9.1.2"]])

(defproject split "0.1.5"
            :description "Clojure database access framework"
            :url "https://github.com/Mamun/sql-tie"
            :license {:alias "Eclipse Public License"
                      :url   "http://www.eclipse.org/legal/epl-v10.html"}

            :dependencies ~(concat
                             common-deps
                             '[[ring "1.3.2"]
                               [ring-middleware-format "0.5.0"
                                :exclusions [ring org.clojure/core.memoize]]
                               [compojure "1.3.4"]
                               [org.immutant/web "2.0.1"]
                               [com.stuartsierra/component "0.2.3"]

                               [net.glxn.qrgen/javase "2.0"]

                               [potemkin "0.3.11"]
                               [clj-http "1.1.2"]
                               [org.clojure/data.json "0.2.6"]
                               [ch.qos.logback/logback-classic "1.0.9"]
                               [base64-clj "0.1.1"]
                               [me.figo/sdk "1.2.1"]
                               [com.h2database/h2 "1.3.154"]])

            :plugins      [[lein-midje "3.0.0"]
                           [codox "0.6.4"]
                           [lein-immutant "2.0.0-alpha1"]]
            :codox        {:sources    ["src"]
                           :output-dir "doc/api"}

 ;           :repl-options {:port 4555}
            :source-paths ["src"
                           "module/tie/src/clj"]
            :test-paths ["test"]
            :resource-paths ["web/resources/"
                             "resources"]
            :uberjar-name "split.jar"
            :main main
            :profiles {
                       ;Example with immutant

                       :uberjar {:main main :aot :all }

                       :dev        {:resource-paths ["web/resources/"
                                                     "resources"]
                                    :source-paths ["dev"]
                                    :plugins        [[lein-immutant "2.0.0-alpha1"]]
                                    :dependencies   [[com.h2database/h2 "1.3.154"]
                                                     [org.clojure/tools.nrepl "0.2.5"]]}
                       :app-prod   {:main         main
                                    :plugins      [[lein-immutant "2.0.0-alpha1"]]
                                    :uberjar-name "tie-standalone.jar"
                                    :aot          [main]
                                    :manifest     {"Class-Path" "lib lib/*"}}


                       ;Other
                       :http-kit   {:resource-paths ["examples/app/web/resources"
                                                     "examples/app/resources"]
                                    :main           server.httpkit
                                    :aot            [server.httpkit]
                                    :dependencies   [[http-kit "2.1.18"]]}
                       :jetty      {:resource-paths ["examples/app/web/resources" "examples/app/resources"]
                                    :plugins        [[lein-ring "0.8.3"]]
                                    :dependencies   [[ring-server "0.3.1"]]
                                    :ring           {:handler routes/app
                                                     :init    routes/init
                                                     :destroy routes/destroy}}
                       :jetty-prod {:plugins      [[lein-ring "0.8.3"]]
                                    :dependencies [[ring-server "0.3.1"]]
                                    :manifest     {"Class-Path" "lib"}
                                    :ring         {:handler routes/app
                                                   :init    routes/init
                                                   :destroy routes/destroy}}})

