(ns sevenguis.timer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def seconds-between-ticks 0.05)

(def n-decimal-places 2)

(def precision-for-detecting-if-time-is-up 0.01)

(def min-duration 5)

(def max-duration 300)

(defonce !app-db (r/atom {:elapsed  0
                          :duration min-duration}))

(def !elapsed (r/cursor !app-db [:elapsed]))

(def !duration (r/cursor !app-db [:duration]))

(def bubble-scale 112)

(def bubble-shift 10)

(defn tick [] (r/rswap! !elapsed (partial + seconds-between-ticks)))

(def !ticking (atom nil))

(defn start-clock []
  (when-not @!ticking
    (reset! !ticking
            (js/setInterval
              (fn tick-if-time-left []
                (when-not (or (> @!elapsed @!duration)
                              ((partial
                                 util/within
                                 precision-for-detecting-if-time-is-up) @!elapsed @!duration))
                  (tick)))
              (* 1000 seconds-between-ticks)))))

(defn stop-clock []
  (js/clearInterval @!ticking)
  (reset! !ticking nil))

(def reset-clock (fn []
                   (stop-clock)
                   (reset! !elapsed 0)))

(defn button-row []
  [:div.gui-line.button-line
   [:button {:on-click start-clock} "Start"]
   [:button {:on-click stop-clock} "Stop"]
   [:button {:on-click reset-clock} "Reset"]])

(defn timer []
  [:div.timer.gui
   [:div.gui-line
    [:span "Elapsed time:"]
    [:progress.timer-progress
     {:value (/ @!elapsed @!duration)}]]
   [:div.gui-line
    [:span (str (.toFixed @!elapsed n-decimal-places) "s")]]
   [:div.gui-line
    [:span "Duration:"]
    [util/range-with-bubble {:!value        !duration
                             :min          min-duration
                             :max          max-duration
                             :bubble-scale bubble-scale
                             :bubble-shift bubble-shift
                             :label        "s"}]]
   [button-row]])
