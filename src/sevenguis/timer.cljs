(ns sevenguis.timer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(defonce state (r/atom {:duration     nil
                        :elapsed      0}))
(def ms-between-ticks 50)
(def n-decimal-places 2)

(defn elapsed-time-progress [percentage]
  [:div.gui-line
   [:span "Elapsed time:"]
   [:progress.timer-progress
    {:value percentage}]])

;todo elapsed time bar can carry all the elapsed time...can be passed duration
;todo and put the gui text line in there

(defn button-row [reset-clock stop start]
  [:div.gui-line.button-line
   [:button {:on-click reset-clock} "Reset"]
   [:button {:on-click stop} "Stop"]
   [:button {:on-click start} "Start"]])

(defn old-timer [{:keys [min-seconds max-seconds]}]
  (r/with-let [!bubble (atom nil)
               duration (r/cursor state [:duration])
               show-bubble? (r/cursor state [:show-bubble?])
               elapsed (r/cursor state [:elapsed])
               duration-percentage (fn [] (-> @duration
                                              (- min-seconds)
                                              (/ (- max-seconds min-seconds))
                                              (* 100)))
               reposition-bubble (fn []
                                   (when-let [bubble @!bubble]
                                     (let [bubble-shift (+ (* (duration-percentage) 1.12) 10)]
                                       (set! (.-innerHTML bubble) (str @duration "s"))
                                       (set! (.. bubble -style -left) (str bubble-shift "px")))))
               tick #(r/rswap! elapsed (partial + (/ ms-between-ticks 1000)))
               time-remaining? #(< @elapsed @duration)
               ticking (atom nil)
               stop (fn [] (js/clearInterval @ticking)
                      (reset! ticking nil))
               start #(when-not @ticking
                        (reset! ticking (js/setInterval
                                          (fn [] (if (time-remaining?) (tick) (stop)))
                                          ms-between-ticks)))
               reset-clock (fn [] (stop) (reset! elapsed 0))
               _ (reset! duration min-seconds)]

    [:div.gui.timer
     [elapsed-time-progress (/ @elapsed @duration)]
     [:div.gui-line (str (.toFixed @elapsed n-decimal-places) "s")]
     [:div.gui-line
      [:span "Duration:"]
      [:div#duration.range-wrap
       [:input.range {:type          "range"
                      :value         @duration
                      :min           min-seconds
                      :max           max-seconds
                      :on-input      (fn [event]
                                       (->> event util/get-event-value (reset! duration))
                                       (reposition-bubble)
                                       (when (and (not @ticking)
                                                  (time-remaining?))
                                         (start)))
                      :on-mouse-down (fn [] (reset! show-bubble? true)
                                       (reposition-bubble))
                      :on-mouse-up   #(reset! show-bubble? false)}]
       [:output.bubble {:ref    #(reset! !bubble %)
                        :hidden (not @show-bubble?)}]]]
     [button-row reset-clock stop start]]))

(defn duration-display [min max duration-callback]
  (r/with-let [duration (r/atom min)
               percentage #(-> (/ (- @duration min) (- max min))
                               (* 100))
               !bubble (atom nil)
               show-bubble? (r/atom false)
               reposition-bubble #(when-let [bubble @!bubble]
                                    (let [bubble-shift (+ (* (percentage) 1.12) 10)]
                                      (set! (.-innerHTML bubble) (str @duration "s"))
                                      (set! (.. bubble -style -left) (str bubble-shift "px"))))]
    [:div.gui-line
     [:span "Duration:"]
     [:div#duration.range-wrap
      [:input.range {:type          "range"
                     :value         @duration
                     :min           min
                     :max           max
                     :on-input      (fn [event]
                                      (let [new-val (-> event util/get-event-value)]
                                        (reset! duration new-val)
                                        (duration-callback new-val)
                                        (reposition-bubble)))
                     :on-mouse-down (fn [] (reset! show-bubble? true)
                                      (reposition-bubble))
                     :on-mouse-up   #(reset! show-bubble? false)}]
      [:output.bubble {:ref    #(reset! !bubble %)
                       :hidden (not @show-bubble?)}]]]))


(defn timer [{:keys [min-seconds max-seconds]}]
  (r/with-let [duration (r/cursor state [:duration])
               elapsed (r/cursor state [:elapsed])
               tick #(r/rswap! elapsed (partial + (/ ms-between-ticks 1000)))
               time-remaining? #(< @elapsed @duration)
               ticking (atom nil)
               stop (fn [] (js/clearInterval @ticking)
                      (reset! ticking nil))
               start #(when-not @ticking
                        (reset! ticking (js/setInterval
                                          (fn [] (if (time-remaining?) (tick) (stop)))
                                          ms-between-ticks)))
               reset-clock (fn [] (stop) (reset! elapsed 0))
               alter-duration (fn [new-duration]
                                (reset! duration new-duration)
                                (when (and (not @ticking)
                                           (time-remaining?))
                                  (start)))
               _ (reset! duration min-seconds)]
    [:div.gui.timer
     [elapsed-time-progress (/ @elapsed @duration)]
     [:div.gui-line (str (.toFixed @elapsed n-decimal-places) "s")]
     [duration-display min-seconds max-seconds alter-duration]
     [button-row reset-clock stop start]]))