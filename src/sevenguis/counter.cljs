(ns sevenguis.counter
  (:require
    [reagent.core :as r]))

(defn counter []
  (r/with-let
    [click-count (r/atom 0)
     increment-click (fn [] (r/rswap! click-count inc))]
    [:div {:class "gui"}
     [:div {:class "gui-title"} "Counter"]
     [:div {:class "gui-main"}
      [:div {:class  "gui-display"
             :hidden (if (= @click-count 0) true)} @click-count]
      [:button {:style {:outline "none"} :on-click increment-click}
       "Click me!"]]]))