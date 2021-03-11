(ns sevenguis.core
  (:require
    [reagent.dom :as d]
    [sevenguis.timer :as timer]
    [sevenguis.crud :as crud]
    [sevenguis.circle-drawer :as circle-drawer]
    [sevenguis.cells :as cells]
    [sevenguis.flight-booker :as flight-booker]
    [sevenguis.temperature-converter :as temperature-converter]
    [sevenguis.counter :as counter]))

(defn home-page []
  [:div.main
   [:h1 [:a#seven-guis-link {:href "https://eugenkiss.github.io/7guis/"} "Seven GUIs"] " in Reagent"]
   [:ol
    [:li [counter/counter]]
    [:li [temperature-converter/temperature-converter]]
    [:li [flight-booker/flight-booker2]]
    [:li [timer/timer]]
    [:li [crud/crud]]]])
;    [:li [circle-drawer/circle-drawer]]
;    [cells/cells]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
