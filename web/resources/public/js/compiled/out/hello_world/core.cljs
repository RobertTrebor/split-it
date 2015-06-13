(ns ^:figwheel-always hello-world.core
    (:require [ajax.core :refer [GET POST]]
              [json-html.core :refer [edn->hiccup]]
              [reagent.core :as reagent :refer [atom]]
              [reagent-forms.core :refer [bind-fields init-field value-of]]))

(enable-console-print!)



;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn handler [[response error]]
      (reset! app-state response)
      (.log js/console (str response)))


(defn error-handler [{:keys [status status-text]}]
      (.log js/console (str "something bad happened: " status " " status-text)))


(defn query [name params]
      (GET "query"
           {:params {:name name }
            :handler handler}))



(query :get-dept-list nil)

(defn row [label input]
      [:div.row
       [:div.col-md-2 [:label label]]
       [:div.col-md-5 input]])


(def form-template
  [:div
   (row "first name" [:input {:field :text :id :dept_name}])
   [:div.row
    [:div.col-md-2]
    [:div.col-md-5
     [:div.alert.alert-danger
      {:field :alert :id :errors.dept_name}]]]])


(defn add-department [dept-map]
      (do
        (POST "/department"
              {:params dept-map
               :handler (fn [] (query :get-dept-list nil))
               :error-handler error-handler})))


(defn connect-figo []
      [:div
       [:h1 "Conenct"]
       [:h1
        [:a {:href  "https://api.figo.me/auth/code?response_type=code&client_id=CPocl5egXH1XQwV4XFGb5KGAVI5XihrmNC9ZKMm3Dyjc&state=123"}
         "Connect Figo"]]])


(defn form []
      (let [doc (atom {})]
           (fn []
               [:div
                [:div.page-header [:h3 "New "]]
                [bind-fields form-template doc]
                [:button.btn.btn-default
                 {:on-click
                  #(if (empty? (get-in @doc [:dept_name]))
                    (swap! doc assoc-in [:errors :dept_name]
                           "dept name is empty")
                    (add-department @doc))}
                 "Add department"]
                [:hr]
                [:h5 "Document State"]
                [edn->hiccup @doc]])))


(defn dept-list []
      [:div
       [:hr]
       [:h3 "List"]
       [edn->hiccup @app-state]])


(defn dept-app []
      [:div [:h1 "App view  "]
       [connect-figo]
       [form]
       [dept-list]])

(reagent/render-component [dept-app] (.getElementById js/document "app"))



