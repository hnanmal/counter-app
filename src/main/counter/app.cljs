(ns counter.app
  (:require [reagent.core :as r])
  (:require [reagent.dom  :as dom]))

(println (map-indexed vector [:a :b :c :d]))

(println "Code reloaded!")

(defn init []
  (println "App init!"))

(defonce current-count (r/atom 0))
(defonce counters (r/atom []))

;; (defn Application []
;;   "Hello.")

(defn Application []
  [:div 
   [:h1 "Counter"]
   (doall 
     (for [[i counter] (map-indexed vector @counters)]
       [:div
        counter
        " "
        [:button {:on-click (fn [] (swap! counters update i inc))}
         "+1"]
        [:button {:on-click (fn [] (swap! counters update i dec))}
         "-1"]]))
   [:button {:on-click (fn [] (swap! counters conj 0))} "Add Counter"]])

(dom/render [Application] (js/document.getElementById "app"))
