(ns sevenguis.flight-booker
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(defonce !state (r/atom {:flight-type           "One-way"
                         :departing-flight-input nil
                         :return-flight-input    nil}))

(defrecord Date [month day year])

(def date-separator \/)

(def today
  (let [now (js/Date.)
        month (-> now .getMonth (+ 1))
        day (.getDate now)
        year (.getFullYear now)]
    (->Date month day year)))

(def date-pattern (re-pattern (str "^\\d{2}"
                                   date-separator
                                   "\\d{2}"
                                   date-separator
                                   "\\d{4}$")))

(defn in-date-format? [date-str]
  (and date-str
       (re-matches date-pattern date-str)))

(defn actual-date? [{:keys [month day year]}]
  (let [date-candidate (js/Date. year (- month 1) day)
        parsed-month (-> date-candidate .getMonth (+ 1))
        parsed-day (.getDate date-candidate)
        parsed-year (.getFullYear date-candidate)]
    (= [month day year] [parsed-month parsed-day parsed-year])))

(defn str->Date [date-str]
  (when (in-date-format? date-str)
    (let [[month day year] (mapv js/parseInt (str/split date-str date-separator))
          date-candidate (->Date month day year)]
      (when (actual-date? date-candidate) date-candidate))))

(defn dates-in-order? [date1 date2]
  (<= (compare [(:year date1) (:month date1) (:day date1)]
               [(:year date2) (:month date2) (:day date2)])
      0))

(defn flight-booker []
  (r/with-let
    [flight-type (r/cursor !state [:flight-type])
     one-way-flight? #(= @flight-type "One-way")
     departing-flight-input (r/cursor !state [:departing-flight-input])
     return-flight-input (r/cursor !state [:return-flight-input])
     good-user-input? #(if (one-way-flight?)
                         (let [date (str->Date @departing-flight-input)]
                           (and date
                                (dates-in-order? today date)))
                         (let [date1 (str->Date @departing-flight-input)
                               date2 (str->Date @return-flight-input)]
                           (and date1
                                date2
                                (dates-in-order? today date1)
                                (dates-in-order? date1 date2))))
     !modal (atom nil)
     set-modal-ref #(reset! !modal %)
     close-modal (fn [_e] (when-let [modal @!modal]
                            (.close modal)))
     show-modal (fn [_e] (when-let [modal @!modal]
                           (.showModal modal)))]
    [:div.gui.flight-booker
     [:select {:on-change    #(->> % util/get-event-value (reset! flight-type))
               :defaultValue "One-way"}
      [:option {:value "One-way"} "One-way"]
      [:option {:value "Round-trip"} "Round-trip"]]
     [:input {:className   (when-not (or (empty? @departing-flight-input)
                                         (str->Date @departing-flight-input))
                             "bad-date")
              :placeholder (str "mm" date-separator "dd" date-separator "yyyy")
              :value       @departing-flight-input
              :on-change   #(->> % (util/get-event-value) (reset! departing-flight-input))}]
     [:input {:className   (when-not (or
                                       (one-way-flight?)
                                       (empty? @return-flight-input)
                                       (str->Date @return-flight-input))
                             "bad-date")
              :placeholder (when-not (one-way-flight?) (str "mm" date-separator "dd" date-separator "yyyy"))
              :value       (when-not (one-way-flight?) @return-flight-input)
              :on-change   #(->> % (util/get-event-value) (reset! return-flight-input))
              :disabled    (one-way-flight?)}]
     [:button#book-button {:disabled (not (good-user-input?))
                           :on-click show-modal}
      "Book!"]
     [util/modal {:text "You're all set!"
                  :set-ref-func set-modal-ref
                  :listener #()
                  :close-modal close-modal
                  :button-text "OK"}]]))







