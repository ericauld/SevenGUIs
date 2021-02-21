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
  [:div {:style {:text-align "center"}}
   [:div.title {:style {:justify-content "space-around"}}
    [:h2 "Seven GUIs in Reagent"]]
   [:div.wrapper
    [counter/counter]
    [temperature-converter/temp-converter]
    [flight-booker/flight-booker]
    [timer/timer]
    [crud/crud]
    [circle-drawer/circle-drawer]
    [cells/cells]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
