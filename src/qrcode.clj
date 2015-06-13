 (ns qrcode
  (:require [ring.util.io :as rio]
            [clojure.java.io :as cio ])
  (:import [net.glxn.qrgen.javase QRCode]
           [net.glxn.qrgen.core.image ImageType]))

(defn get-qr-output-stream
 [v]
 (rio/piped-input-stream
  (fn [ostream]
   (doto (QRCode/from v)
    (.to  ImageType/PNG)
    (.withSize 250 250)
    (.writeTo ostream)))))


(defn qr-response
 [v]
 {:headers {"Content-Type" "images/png"}
  :body (get-qr-output-stream v)})



(comment

 (let [s 2 #_(ByteArrayOutputStream.)]

  (with-open [o (cio/output-stream "test3.png")]
   (doto (QRCode/from "hello world")
    (.to  ImageType/PNG)
    (.writeTo  o)
    )

   ;(.writeTo (QRCode/from "hello world") o)
   ))


 (->
  (.file (QRCode/from "Hello World"))
  )

 )