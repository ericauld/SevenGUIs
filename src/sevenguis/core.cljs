(ns sevenguis.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]
    [sevenguis.timer :as timer]
    [sevenguis.util :as util]
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
    [:li [flight-booker/flight-booker]]
    [:li [timer/timer {:min-seconds 5
                       :max-seconds 300}]]
    [:li [crud/crud]]]])
;    [circle-drawer/circle-drawer]
;    [cells/cells]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
