(ns sevenguis.counter
  (:require
    [reagent.core :as r]))

(def state (r/atom {:click-count 0}))

(defn counter []
  (r/with-let [click-count (r/cursor state [:click-count])]
    [:div.counter
     [:div.counter-text (str "The count is " @click-count ".")]
     [:button.button {:on-click #(r/rswap! click-count inc)}
      "Add 1"]]))