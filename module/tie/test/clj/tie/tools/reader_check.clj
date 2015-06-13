(ns tie.reader-check
  (:require [clojure.java.io :as io]) )


(-> "tie2.edn.sql"
    (io/resource)
    (slurp)
    (clojure.string/replace #"\n" "")
    ;(re-seq #"(.*?)")
    ;(re-seq #"*")
    )

(re-seq #"\w+" "mary had a little lamb")

(def data "/*mary */ had a /*little*/ lamb")

;(re-seq #"(\/*.*?)(.+?)(*/\)" data)



(def m (re-matcher #"(?i)<title.*?>(.+?)</title>" "check <title>1337</title>hello <title>1336</title>" )      )


(re-find m)
;^(.+)(?:\n|\r\n?)((?:(?:\n|\r\n?).+)+)



(let [f "\\/\\*"
      ;m "(.+?)"
      m ".+?"
      e "\\*\\/"
      p (str f m e)
      p1 (str e m "[" f "|.+?$]" )
      input " /* {:a 1 } */ /* {:b 2} */ test; /* {:c 3 }*/ sdf"]
  (println (re-pattern p))
    (println (re-pattern p1))
  (println (re-seq (re-pattern p) input  ))
  (println (re-seq (re-pattern p1) input  ))
  (println (count (re-seq (re-pattern p1) input  )) )
  )


