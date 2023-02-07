(ns counter.app
  (:require [reagent.core :as r])
  (:require [reagent.dom  :as dom]))

(println "Code reloaded!")

(defn init []
  (println "App init!"))

;; (defonce current-count (r/atom 0))
(defonce counters (r/atom []))

;; (defn Application []
;;   "Hello.")

(defn vec-delete [v i]
  (into (subvec v 0 i) (subvec v (inc i))))

(defn Counter-thing [i counter]
  [:div
   [:span {:style {:border "solid lightgray"}} 
    counter "! "]
   [:span
    [:button {:on-click (fn [] (swap! counters update i inc))}
     "+1"]
    [:button {:on-click (fn [] (swap! counters update i dec))}
     "-1"]
    [:button {:on-click (fn [] (swap! counters vec-delete i))}
     "X"]]])

(defn Application []
  [:div
   [:h1 "Counter"]
   [:div.horizontal
    [:button {:on-click (fn [] (swap! counters conj 0))} "Add Counter"]]
   [:div (doall
          (for [[i counter] (map-indexed vector @counters)]
            ^{:key (str i)} [Counter-thing i counter]))]])

(dom/render [Application] (js/document.getElementById "app"))
