(ns sevenguis.crud
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(defrecord Name [first last])

(def initial-names [(->Name "Joni" "Mitchell")
                    (->Name "Trish" "Keenan")
                    (->Name "Laura" "Viers")
                    (->Name "Cate" "Le Bon")])

(defn format-name [name] (str (:last name)
                              ", "
                              (:first name)))

(def allowed-prefix-regex #"^[^\\]*$")

(defn valid-prefix? [user-input]
  (some? (re-matches allowed-prefix-regex user-input)))

(defn name-input [{:keys [name-input
                          update-name
                          surname-input
                          update-surname]}]
  [:div.crud-column
   [:div#blank-line.gui-line " "]
   [:div.subcolumn-wrapper
    [:div.subcolumn
     [:div.gui-line [:span "Name:"]]
     [:div.gui-line [:span "Surname:"]]]
    [:div.subcolumn
     [:div.gui-line [:input {:value     name-input
                             :on-change (fn on-change-name [e]
                                          (-> e
                                              util/get-event-value
                                              update-name))}]]
     [:div.gui-line [:input {:value     surname-input
                             :on-change (fn on-change-surname [e]
                                          (-> e
                                              util/get-event-value
                                              update-surname))}]]]]])

(defn name-list [{:keys [names select matches-user-prefix?]}]
  [:div
   [:select#name-list {:size      5
                       :on-change (fn select-on-change [e]
                                    (->> e
                                         util/get-event-value
                                         js/parseInt
                                         select))}
    (doall (keep-indexed
             (fn build-option-element [index my-name]
               (when (and
                       my-name
                       (matches-user-prefix? my-name))
                 (let [formatted-name (format-name my-name)]
                   ^{:key (str index)}
                   [:option.crud-name {:value (str index)} formatted-name])))
             names))]])

(defn crud-buttons [{:keys [create update delete]}]
  [:div.gui-line.button-line
   [:button {:on-click create} "Create"]
   [:button {:on-click update} "Update"]
   [:button {:on-click delete} "Delete"]])

(defn prefix-input [{:keys [update-prefix]}]
  (r/with-let [!user-prefix-valid? (r/atom true)]
    [:div.gui-line
     [:span "Filter prefix:"]
     [:input#prefix-input {:className (when-not @!user-prefix-valid? "bad-input")
                           :on-change (fn update-prefix-from-event [e]
                                        (let [user-input (util/get-event-value e)]
                                          (if (valid-prefix? user-input)
                                            (do
                                              (when-not @!user-prefix-valid?
                                                (reset! !user-prefix-valid? true))
                                              (update-prefix user-input))
                                            (reset! !user-prefix-valid? false))))}]]))

(defn crud []
  (r/with-let [!state (r/atom {:names         initial-names
                               :input-name    nil
                               :input-surname nil
                               :input-prefix  nil})
               !index-of-selected (r/atom 0)
               update-input-name (fn [name-str] (r/rswap! !state assoc :input-name name-str))
               update-input-surname (fn [surname-str] (r/rswap! !state assoc :input-surname surname-str))
               delete-selected (fn []
                                 (when @!index-of-selected
                                   (r/rswap! !state assoc-in [:names @!index-of-selected] nil)
                                   (reset! !index-of-selected nil)))
               get-name-from-input (fn []
                                     (let [first-name (:input-name @!state) ;todo limit scope?
                                           surname (:input-surname @!state)] ;todo limit scope?
                                       (when (and
                                               (string? first-name)
                                               (string? surname)
                                               (not (str/blank? first-name))
                                               (not (str/blank? surname)))
                                         (->Name first-name surname))))
               update-selected (fn []
                                 (when-let [new-name (get-name-from-input)]
                                   (r/rswap! !state assoc-in [:names @!index-of-selected] new-name)
                                   (r/rswap! !state assoc :input-name nil :input-surname nil)))
               create (fn []
                        (when-let [new-name (get-name-from-input)]
                          (r/rswap! !state update :names conj new-name)
                          (r/rswap! !state assoc :input-name nil :input-surname nil)))
               select (fn [index]
                        (reset! !index-of-selected index))
               matches-users-prefix? (fn [my-name]
                                       (let [prefix @(r/cursor !state [:input-prefix])]
                                         (if (or (not prefix)
                                                 (str/blank? prefix))
                                           true
                                           (let [prefix-pattern (re-pattern (str "^" prefix))]
                                             (some? (re-find prefix-pattern (:last my-name)))))))
               update-prefix (fn [s]
                               (r/rswap! !state assoc :input-prefix s))]
    [:div#crud.gui
     [:div.crud-column-wrapper
      [:div.crud-column
       [prefix-input {:update-prefix update-prefix}]
       [name-list {:names                @(r/cursor !state [:names])
                   :select               select
                   :matches-user-prefix? matches-users-prefix?}]]
      [name-input {:name-input     @(r/cursor !state [:input-name])
                   :update-name    update-input-name
                   :surname-input  @(r/cursor !state [:input-surname])
                   :update-surname update-input-surname}]]
     [crud-buttons {:create create
                    :update update-selected
                    :delete delete-selected}]]))