(ns figwheel.connect (:require [hello-world.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/hello-world.core.on-js-reload (apply js/hello-world.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'hello-world.core/on-js-reload' is missing"))), :build-id "dev"})

