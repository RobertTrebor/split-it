(ns tie.util.common)


(def ^{:private true} unique-id-atom (atom 0))

(defn unique-id []
  (swap! unique-id-atom inc )
  @unique-id-atom)


(defn get-meta [o]
  (->> *ns*
       ns-map
       (filter (fn [[_ v]] (and (var? v) (= o (var-get v)))))
       first
       second
       meta))


(defn contain-all?
  [coll key]
  (reduce (fn [acc v]
            (if-not (= v key)
              (reduced nil)
              acc)
            ) key coll))


#_(defn conj-last
  [v coll ]
  (->
    (into [] (drop-last coll))
    (conj v)))

(defn last-index [q]
  (.indexOf q (last q)))


#_(defn interleave-conj
  [v items]
  (->> (for [v1 v
             item items]
         (if (sequential? v1)
           (conj v1 item)
           (conj [v1] item)))
       (into [])))


(defn skip-type
  [pred]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result input]
       (if (pred input)
         (conj result input)
         (rf result input))))))



(defn xf-until [pred]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result input]
       (if (pred input)
         (reduced input)
         (rf result input))))))




(defn xf-take-until [pred]
  (fn [rf]
    (fn
      ([] (rf))
      ([result] (rf result))
      ([result input]
       (if (pred input)
         (reduced (rf result input))
         (rf result input))))))


#_(defmacro until->>
  [pred expr & forms]
  `(if (~pred ~expr)
     ~expr
     ~(if (not-empty forms)
        (let [next-expr `(->> ~expr ~(first forms))]
          `(let [r# ~next-expr]
             (if (~pred r#)
               r#
               (until->> ~pred r# ~@(rest forms)))))
        expr)))


#_(defmacro until->
  [pred expr & forms]
  `(if (~pred ~expr)
     ~expr
     ~(if (not-empty forms)
        (let [next-expr `(-> ~expr ~(first forms))]
          `(let [r# ~next-expr]
             (if (~pred r#)
               r#
               (until-> ~pred r# ~@(rest forms)))))
        expr)))


(defn seql=
  [range v1-seq v2-seq]
  (let [v1 (take range v1-seq)
        v2 (take range v2-seq)]
    (= v1 v2)))


(defn seql-contains?
  [f? coll v]
  (some #(f? v %) coll))


(defn contains-with [range]
  (->> (partial seql= range)
       (partial seql-contains?)))


(defn distinct-with [pred?]
  (fn [rf]
    (let [seen (volatile! #{})]
      (fn
        ([] (rf))              ;; init arity
        ([result] (rf result)) ;; completion arity
        ([result input]        ;; reduction arity
         (if (pred? @seen input)
           result
           (do (vswap! seen conj input)
               (rf result input))))))))


(defn distinct-with-range [range coll]
  (into [] (distinct-with (contains-with range)) coll))


(defn conj-with-range [range coll target]
  (if ((contains-with range)  coll target)
    coll
    (conj coll target)))


(defn concat-with-range [range old-coll new-coll]
  (->>  old-coll
       (reduce #(conj-with-range range %1 %2) new-coll)
       (into [])))


(defn concat-distinct-with-range [range old-coll new-coll]
  (concat-with-range range (distinct-with-range range old-coll) (distinct-with-range range new-coll)))


(defn as-sequential
  [input]
  (if (sequential? input)
    input
    [input]))



(defn update-key-coll
  [kv-coll m]
  (reduce #(assoc-in %1 (butlast %2) (last %2))
          m
          kv-coll ))




(comment

  (let [a [[1 4 3] [1 2 7]]
        b [[1 11 3] [1 2 9]]
        ]
    ;(sequential= 1 a b)
    ;(distinct-with-range 1 a)
    (concat-distinct-with-range 2 a b)
    )

  )
