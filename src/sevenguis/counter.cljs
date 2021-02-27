(ns sevenguis.counter
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def state (r/atom {:click-count 0}))

(defn counter []
  (r/with-let [click-count (r/cursor state [:click-count])
               increment-count #(r/rswap! click-count inc)
               decrease-count-five #(r/rswap! click-count (fn [x] (max 0 (- x 5))))
               reset-counter #(reset! click-count 0)
               !modal (atom nil)
               set-modal-ref #(reset! !modal %)
               close-modal (fn [_e] (when-let [modal @!modal]
                                      (.close modal)))
               show-modal (fn [_e] (when-let [modal @!modal]
                                     (.showModal modal)))]
    [:div.counter.gui
     [:div.gui-line
      [:span (str "The count is " @click-count ".")]
      [:div.button-line
       [:button {:on-click increment-count} "+1"]
       [:button {:on-click decrease-count-five} "-5"]
       [:button {:on-click show-modal} "Reset"]]]
     [util/modal {:text "Reset count?"
                  :set-ref-func set-modal-ref
                  :listener reset-counter
                  :close-modal close-modal
                  :button-text "OK"}]]))