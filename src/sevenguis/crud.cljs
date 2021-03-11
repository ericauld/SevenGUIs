(ns sevenguis.crud
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(defrecord Name [first last])

(def initial-names [(->Name "Joni" "Mitchell")
                    (->Name "Trish" "Keenan")
                    (->Name "Laura" "Viers")
                    (->Name "Cate" "Le Bon")
                    (->Name "Verity" "Susman")])

(def size-of-name-list-window 5)

(defn format-name [name] (str (:last name)
                              ", "
                              (:first name)))

(def allowed-prefix-regex #"^[^\\]*$")

(defn valid-prefix? [user-input]
  (if-not user-input
    true
    (some? (re-matches allowed-prefix-regex user-input))))

(defonce !app-db (r/atom {:name-list           [(->Name "Joni" "Mitchell")
                                                (->Name "Trish" "Keenan")
                                                (->Name "Laura" "Viers")
                                                (->Name "Cate" "Le Bon")
                                                (->Name "Verity" "Susman")]
                          :prefix-input        nil
                          :name-input          nil
                          :surname-input       nil
                          :focus               nil
                          :selected-name-index nil}))

(def !focus (r/cursor !app-db [:focus]))

(def !prefix (r/cursor !app-db [:prefix-input]))

(def !names (r/cursor !app-db [:name-list]))

(def !selected (r/cursor !app-db [:selected-name-index]))

(def !prefix-valid? (r/track #(valid-prefix? @!prefix)))

(def !first-name-input (r/cursor !app-db [:name-input]))

(def !surname-input (r/cursor !app-db [:surname-input]))

(def !user-input-as-Name (r/track (fn make-name-from-user-input []
                                    (let [first-name @!first-name-input
                                          surname @!surname-input]
                                      (when (and
                                              (string? first-name)
                                              (string? surname)
                                              (not (str/blank? first-name))
                                              (not (str/blank? surname)))
                                        (->Name first-name surname))))))

(defn matches? [prefix name]
  (if (or (not prefix)
          (and (string? prefix)
               (str/blank? prefix)))
    true
    (let [prefix-pattern (re-pattern (str "^" prefix))]
      (some? (re-find prefix-pattern (:last name))))))

(def !matches-prefix? (r/track (fn get-prefix-matcher []
                                 (fn [name]
                                   (if-not @!prefix-valid?
                                     false
                                     (matches? @!prefix name))))))

(defn crud-buttons []
  [:div.gui-line.button-line
   [:button {:on-click (fn create-on-click [_]
                         (when-let [name @!user-input-as-Name]
                           (r/rswap! !names conj name)
                           (reset! !first-name-input nil)
                           (reset! !surname-input nil)))
             :disabled (not @!user-input-as-Name)}
    "Create"]
   [:button {:disabled (not-every? some? [@!selected @!user-input-as-Name])
             :on-click (fn update-on-click [_]
                         (r/rswap! !names assoc @!selected @!user-input-as-Name)
                         (reset! !first-name-input nil)
                         (reset! !surname-input nil))}
    "Update"]
   [:button {:disabled (not @!selected)
             :on-click (fn delete-on-click [_]
                         (r/rswap! !names assoc @!selected nil)
                         (reset! !selected nil))}
    "Delete"]])

(defn name-input []
  [:div.crud-column
   [:div#blank-line.gui-line " "]
   [:div.subcolumn-wrapper
    [:div.subcolumn
     [:div.gui-line [:span "Name:"]]
     [:div.gui-line [:span "Surname:"]]]
    [:div.subcolumn
     [:div.gui-line [:input {:value     @!first-name-input
                             :on-change (fn name-input-on-change [e]
                                          (reset! !first-name-input (.. e -target -value)))
                             :on-focus  (fn name-input-on-focus [_]
                                          (reset! !focus :name-input))
                             :on-blur   (fn name-input-on-blur [_]
                                          (reset! !focus nil))}]]
     [:div.gui-line [:input {:value     @!surname-input
                             :on-change (fn surname-input-on-change [e]
                                          (reset! !surname-input (.. e -target -value)))
                             :on-focus  (fn surname-input-on-focus [_]
                                          (reset! !focus :surname-input))
                             :on-blur   (fn surname-input-on-blur [_]
                                          (reset! !focus nil))}]]]]])

(defn prefix-input []
  [:div.gui-line
   [:span "Filter prefix:"]
   [:input#prefix-input {:className (when-not @!prefix-valid? "bad-input")
                         :on-change (fn on-change-prefix-input [e]
                                      (reset! !prefix (.. e -target -value)))
                         :on-focus  (fn prefix-input-on-focus [_]
                                      (reset! !focus :prefix-input))
                         :on-blur   (fn prefix-input-on-blur [_]
                                      (reset! !focus nil))}]])

(defn crud []
  [:div#crud.gui
   [:div.crud-column-wrapper
    [:div.crud-column
     [prefix-input]
     [util/filtered-list {:!items               !names
                          :!keep?               !matches-prefix?
                          :!focus               !focus
                          :size                 size-of-name-list-window
                          :item->str            format-name
                          :!selected-item-index !selected}]]
    [name-input]]
   [crud-buttons]])