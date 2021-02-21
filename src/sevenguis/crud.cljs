(ns sevenguis.crud
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(defn crud []
  (r/with-let [name-list (r/atom #{"Smith John" "Jones Jane"})
               first-name-input (r/atom nil)
               surname-input (r/atom nil)
               selected-name (r/atom nil)
               filter-prefix (r/atom nil)]
              [:div.gui
               [:div.gui-title "CRUD"]
               [:div.gui-main
                [:div#prefix
                 [:div "Filter prefix:"]
                 [:input {:value     @filter-prefix
                          :on-change (fn [event] (let [input (util/get-event-value event)]
                                                   (reset! filter-prefix input)))}]]
                [:div#name
                 [:div#first-name
                  [:div "Name:"]
                  [:input {:value     @first-name-input
                           :on-change (fn [event]
                                        (let [user-input (util/get-event-value event)]
                                          (reset! first-name-input user-input)))}]]
                 [:div#surname
                  [:div "Surname:"]
                  [:input {:value     @surname-input
                           :on-change (fn [event]
                                        (let [user-input (util/get-event-value event)]
                                          (reset! surname-input user-input)))}]]
                 [:button {:on-click
                           #(let [first-name @first-name-input
                                  surname @surname-input]
                              (if-not (or (str/blank? first-name)
                                          (str/blank? surname))
                                (do (r/rswap! name-list conj (str surname " " first-name))
                                    (reset! first-name-input nil)
                                    (reset! surname-input nil))))}
                  "Create"]
                 [:button {:on-click #(let [first-name @first-name-input
                                            surname @surname-input
                                            old-name @selected-name]
                                        (if-not (or (str/blank? first-name)
                                                    (str/blank? surname)
                                                    (str/blank? old-name))
                                          (do (r/rswap! name-list disj old-name)
                                              (r/rswap! name-list conj (str surname " " first-name)))))}
                  "Update"]
                 [:button {:on-click #(if @selected-name (r/rswap! name-list disj @selected-name))}
                  "Delete"]]
                [:div#name-list
                 [:select {:size 5 :on-change (fn [event]
                                                (let [selected (util/get-event-value event)]
                                                  (reset! selected-name selected)))}
                  (let [prefix @filter-prefix
                        prefix-as-regex (re-pattern (str prefix ".*"))
                        matches-prefix? (fn [name] (re-matches prefix-as-regex name))
                        filtered-names (filter matches-prefix? @name-list)]
                    (doall (for [name filtered-names :let [[last first] (str/split name " ")]]
                             ^{:key name} [:option {:value name} (str last ", " first)])))]]]]))