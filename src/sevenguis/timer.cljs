(ns sevenguis.timer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def seconds-between-ticks 0.05)
(def n-decimal-places 2)
(def precision-for-detecting-if-time-is-up 0.01)

(defn button-row [{:keys [reset-clock stop-clock start-clock]}]
  [:div.gui-line.button-line
   [:button {:on-click start-clock} "Start"]
   [:button {:on-click stop-clock} "Stop"]
   [:button {:on-click reset-clock} "Reset"]])

(defn timer [{:keys [min-seconds max-seconds]}]
  (r/with-let [!duration (r/atom min-seconds)
               !elapsed (r/atom 0)
               tick #(r/rswap! !elapsed (partial + seconds-between-ticks))
               !ticking (atom nil)
               start-clock
               (fn []
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
               stop-clock (fn []
                            (js/clearInterval @!ticking)
                            (reset! !ticking nil))
               reset-clock (fn []
                             (stop-clock)
                             (reset! !elapsed 0))
               duration-update (fn [new-value]
                                 (reset! !duration new-value))]

    [:div.timer.gui
     [:div.gui-line
      [:span "Elapsed time:"]
      [:progress.timer-progress
       {:value (/ @!elapsed @!duration)}]]
     [:div.gui-line
      [:span (str (.toFixed @!elapsed n-decimal-places) "s")]]
     [:div.gui-line
      [:span "Duration:"]
      [util/range-with-bubble {:external-value min-seconds
                               :min            min-seconds
                               :max            max-seconds
                               :value-update   duration-update
                               :label          "s"
                               :bubble-scale   112
                               :bubble-shift   10}]]
     [button-row {:start-clock start-clock
                  :stop-clock  stop-clock
                  :reset-clock reset-clock}]]
    (finally (js/clearInterval @!ticking))))