(ns sevenguis.timer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def seconds-between-ticks 0.05)
(def n-decimal-places 2)
(def precision-for-detecting-if-time-is-up 0.01)

(defn duration-selector [{:keys [min-seconds max-seconds value-update]}]
  (r/with-let [!duration (r/atom min-seconds)
               !show-bubble? (r/atom false)
               !bubble (atom nil)
               slider-position (fn [] (/ (- @!duration min-seconds) (- max-seconds min-seconds)))
               reset-bubble #(when-let [bubble @!bubble]
                               (let [bubble-shift (+ (* (slider-position) 112) 93)]
                                 (set! (.-innerHTML bubble) (str @!duration "s"))
                                 (set! (.. bubble -style -left) (str bubble-shift "px"))))]
    [:div.gui-line
     [:span "Duration:"]
     [:input.range {:type          "range"
                    :value         @!duration
                    :min           min-seconds
                    :max           max-seconds
                    :on-input      (fn range-input [e]
                                     (let [new-user-input (util/get-event-value e)]
                                       (reset! !duration new-user-input)
                                       (value-update new-user-input)
                                       (reset-bubble)))
                    :on-mouse-down (fn on-mouse-down []
                                     (reset-bubble)
                                     (reset! !show-bubble? true))
                    :on-mouse-up   (fn on-mouse-up []
                                     (reset! !show-bubble? false))}]
     [:output.bubble {:hidden (not @!show-bubble?)
                      :ref    (fn set-bubble-ref [ref]
                                (reset! !bubble ref))}]]))

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
                             (reset! !elapsed 0))]

    [:div.timer.gui
     [:div.gui-line
      [:span "Elapsed time:"]
      [:progress.timer-progress
       {:value (/ @!elapsed @!duration)}]]
     [:div.gui-line
      [:span (str (.toFixed @!elapsed n-decimal-places) "s")]]
     [duration-selector {:min-seconds  min-seconds
                         :max-seconds  max-seconds
                         :value-update (fn duration-update [new-value]
                                         (reset! !duration new-value))}]
     [button-row {:start-clock start-clock
                  :stop-clock  stop-clock
                  :reset-clock reset-clock}]]
    (finally (js/clearInterval @!ticking))))