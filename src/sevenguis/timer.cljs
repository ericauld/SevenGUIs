(ns sevenguis.timer
  (:require
    [reagent.core :as r]))

(defn timer []
  (r/with-let [decimal-precision 1
               seconds-between-ticks 0.1
               milliseconds-between-ticks (* 1000 seconds-between-ticks)
               clock-is-ticking (r/atom false)
               seconds-until-stop (r/atom 60.0)
               seconds-elapsed (r/atom 0.0)
               time-is-up (fn [] (>= (+ @seconds-elapsed 0.1) @seconds-until-stop))
               tick! (fn [] (r/rswap! seconds-elapsed (fn [x] (+ x seconds-between-ticks))))
               ticking-process (r/atom nil)
               stop-clock! (fn [] (reset! clock-is-ticking false)
                             (js/clearInterval @ticking-process))
               tick-if-time-remains! #(if (time-is-up) (stop-clock!) (tick!))
               start-clock! (fn [] (reset! clock-is-ticking true)
                              (reset! ticking-process (js/setInterval tick-if-time-remains!
                                                                      milliseconds-between-ticks)))]
              [:div.gui
               [:div.gui-title "Timer"]
               [:div.gui-main
                [:meter {:min 0 :max @seconds-until-stop :value @seconds-elapsed}]
                [:div.gui-display (.toFixed @seconds-elapsed decimal-precision) "s"]
                [:div#duration
                 [:div "Duration"]
                 [:input {:type      "range" :min 5 :max 600 :value @seconds-until-stop
                          :on-change (fn [event]
                                       (let [user-input (sevenguis.util/get-event-value event)]
                                         (reset! seconds-until-stop user-input)
                                         (if (and (not @clock-is-ticking)
                                                  (not (= @seconds-elapsed 0))
                                                  (< @seconds-elapsed @seconds-until-stop))
                                           (start-clock!))))}]
                 [:div.gui-display (.toFixed (js/parseFloat @seconds-until-stop) 1) "s"]]
                [:div#buttons
                 [:button#reset {:on-click #((reset! seconds-elapsed 0)
                                             (js/clearInterval @ticking-process))}
                  "Reset"]
                 [:button#start {:on-click start-clock!}
                  "Start"]]]]
              (finally (js/clearInterval @ticking-process))))