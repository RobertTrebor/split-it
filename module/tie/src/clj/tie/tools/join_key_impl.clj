(ns tie.tools.join-key-impl
  (:require [tie.util.common :as e]))


(defonce join-key :join)
(defonce join-1-1-key :1-1)
(defonce join-1-n-key :1-n)
(defonce join-n-1-key :n-1)
(defonce join-n-n-key :n-n)


(defn add-bi-join
  [join-coll]
  (let [ f (fn [[s-tab s-id join-key d-tab d-id [r-tab r-id r-id2] :as j]]
             (condp = join-key
               join-1-1-key [d-tab d-id join-1-1-key s-tab s-id]
               join-1-n-key [d-tab d-id join-n-1-key s-tab s-id]
               join-n-1-key [d-tab d-id join-1-n-key s-tab s-id]
               join-n-n-key [d-tab d-id join-n-n-key s-tab s-id [r-tab r-id2 r-id]]
               j))]
    (->> (map f join-coll)
         (concat join-coll )
         (distinct )
         (sort-by first )
         (into [] ))))


(defn join-group-by-src
  [join-coll]
  (->> join-coll
       (group-by first)
       (map (fn [[k coll]]
              {k {join-key coll}}))
       (into {})))


(defn conj-name-index
  [ks-coll data-m]
  (if-not (sequential? (get-in data-m ks-coll))
    [ks-coll]
    (->> (count (get-in data-m ks-coll))
         (range 0)
         (map #(conj ks-coll %)))))


(defn conj-s-index
  [j-coll data-m]
  (for [[g-key coll] (group-by first j-coll)
        j coll
        em (conj-name-index [g-key] data-m)]
    (-> j
        (assoc 0 em ))))


(defn conj-d-index
  [js-coll  input-map]
  (for [[s-tab-id _ _ d-tab-id _ :as j]  js-coll
        :let [w (conj s-tab-id d-tab-id)]
        :when (get-in input-map w)
        c (conj-name-index w input-map)]
    (-> j
        (assoc 3 c ))))


(defn group-with-join
  [dt data-coll]
  (let [fdata (first data-coll)
        w (cond
            (map? data-coll)
            (if (get data-coll dt)
              {(get data-coll dt) data-coll}
              nil)
            (map? fdata)
            (group-by dt data-coll)
            (vector? fdata)
            (let [index (.indexOf fdata dt)]
              (->> (group-by #(get %1 index) (rest data-coll))
                   (reduce (fn [acc [k w]]
                             (assoc acc k (conj [fdata] w))
                             ) {} )))
            :else data-coll)]
    {dt w}))


(defn group-with-join-coll
  [j-coll data-m]
  (reduce (fn [acc j]
            (let [[_ _ rel d dt [n nst dst]] j
                  jm (if (= rel join-n-n-key)
                       (->
                         (group-with-join nst (get data-m n))
                         #_(clojure.set/rename-keys {nst dt}))
                       (group-with-join dt (get data-m d)))
                  jm {d jm}]
              (merge-with merge acc jm))
            ) {} j-coll))




(defn join-data
  [j-coll join-data data-m]
  (reduce (fn [acc j]
            (let [[s st j d dt [n nst dst]] j
                  dt (if (= join-n-n-key j) nst dt)
                  s-value (get-in data-m (conj s st) )
                  d-data (get-in join-data [d dt s-value])
                  d-key (conj s d)]
              (assoc-in acc d-key d-data))
            ) data-m j-coll))


(defn join-params-value
  [data-m j-coll]
  (reduce (fn [acc j1]
            (let [[s st rel _ dt [_ sdt _]] j1
                  gm (group-with-join st (s data-m) )
                  w (keys (get-in gm [ st]))]
              (if (= rel join-n-n-key)
                (merge acc {sdt w})
                (merge acc {dt w})))
            ) {} j-coll))


(defn- is-skip?
  [join output]
  (let [root (get-in join [0 0])]
    (if (or (nil? join)
            (empty? join)
            (empty? (root output))
            (and (not (map? (root output)))
                 (sequential? (first (root output)))))
      true false)))


(defn do-join
  "Do join "
  [input-map join-coll ]

  (if (is-skip? join-coll input-map)
    input-map
    (let [g-data (group-with-join-coll join-coll input-map)
          ;_ (clojure.pprint/pprint g-data)
          ww (conj-s-index join-coll input-map)
          root (get-in join-coll [0 0])]
      (-> ww
          (join-data g-data input-map)
          (select-keys [root])))))


(comment

  (let [input-map {:department {:id 1, :transaction_id 0, :dept_name "Business"},
                   :employee-meeting
                               [{:meeting_id 102,
                                 :subject "Hello Meeting for Admin",
                                 :employee_id 112,
                                 :meeting_id_2 102}
                                {:meeting_id 103,
                                 :subject "Hello Meeting for Admin",
                                 :employee_id 112,
                                 :meeting_id_2 103}],
                   :employee-detail
                               {:employee_id 112,
                                :street "Schwan",
                                :city "Munich",
                                :state "Bayern",
                                :country "Germany"},
                   :employee
                               {:id 112,
                                :transaction_id 0,
                                :firstname "Schwan",
                                :lastname "Ragg",
                                :dept_id 1}}
        join [[:employee :id :1-1 :employee-detail :employee_id]
              [:employee :id :n-n :meeting :meeting_id [:employee-meeting :employee_id :meeting_id]]
              [:employee :dept_id :n-1 :department :id]]]
    (-> (do-join input-map join)
        (clojure.pprint/pprint))

    #_(->> input-map
         (group-with-join-coll [[:employee :id :n-n :meeting :meeting_id [:employee-meeting :employee_id :meeting_id]]])
        (clojure.pprint/pprint))

    )

  )





(defmulti join-value (fn [[_ _ rel] _] rel))


(defmethod join-value
  join-n-n-key
  [ks input-map]
  (let [[st s _ dt d] ks]
    (-> ks
        (assoc 1 (get-in input-map (conj st s )))
        (assoc 4 (get-in input-map (conj dt d) )))))


(defmethod join-value
  :default
  [ks input-map]
  (let [[s-tab s _ d-tab d] ks
        s-ks (conj s-tab s)
        d-ks (conj d-tab d)]
    (conj d-ks (get-in input-map s-ks))))


(defn assoc-n-n-join [j-coll]
  (reduce (fn [acc [_ s-v _ _ d-v [dt s d]]]
            (let [v {s s-v d d-v}
                  pre-v (or (dt acc) [])
                  f-v (conj pre-v v)]
              (assoc acc dt f-v))
            ) {} j-coll))



(comment

  (let [v [[[:meeting] 2 :n-n [:meeting :employee] 1 [:employee-meeting :meeting_id :employee_id]]]]
    (assoc-n-n-join v)
    )

  )


(defn do-assoc-join-key
  "Assoc join key"
  [input-map join-coll]
  (let [r (-> join-coll
              (conj-s-index input-map)
              (conj-d-index input-map ))

        [n-join join] (split-with (fn [[_ _ rel]]
                                    (if (= rel join-n-n-key)
                                      true
                                      false))
                                  r)

        join (if (empty? join)
               join
               (map #(join-value % input-map) join))
        n-join (mapv #(join-value % input-map) n-join)
        n-value (assoc-n-n-join n-join)]

    (->
      (e/update-key-coll join input-map)
      (merge n-value))))


(comment

  (let [d {:meeting {:subject "Hello ", :meeting_id 2, :employee {:id 1}}}
        j [[:meeting :meeting_id :n-n :employee :id [:employee-meeting :meeting_id :employee_id]]]]
    (-> (do-assoc-join-key d j)
        (clojure.pprint/pprint))
    )

  )


(defn assoc-value
  [join-coll data]
  (->> join-coll
       (map (fn [j]
              [(nth j 3) (e/as-sequential (get-in data  (conj (first j) (nth j 3)) ) )]))
       (group-by first)
       (reduce (fn [acc [k v]]
                 (->> (mapv second v)
                      (reduce concat)
                      (assoc acc k ))) {} )))

(defn dissoc-value
  [join-coll data]
  (reduce (fn [acc v]
            (update-in acc (first v) dissoc (nth v 3) )
            ) data join-coll))


(defn do-disjoin
  "Disassoc join "
  [input-map join-coll]
  (let [ks (conj-s-index join-coll input-map)
        t-map (assoc-value ks input-map)
        w (dissoc-value ks input-map)]
    (merge w t-map)))




