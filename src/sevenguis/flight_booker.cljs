(ns sevenguis.flight-booker
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))


(defn dates-out-of-order? [date-str1 date-str2]
  (let [[month1 day1 year1] (str/split date-str1 "/")
        [month2 day2 year2] (str/split date-str2 "/")]
    (prn (str year1 month1 day1) (str year2 month2 day2))
    (> (compare (str year1 month1 day1) (str year2 month2 day2)) 0)))

(defn not-a-calendar-date? [date-str]
  (let [[month-str day-str year-str] (str/split date-str "/")
        [month day year] (mapv js/parseInt [month-str day-str year-str])
        date (js/Date. year (- month 1) day)
        parsed-month (-> date .getMonth (+ 1))
        parsed-day (.getDate date)
        parsed-year (.getFullYear date)]
    (not (and (= month parsed-month) (= day parsed-day) (= year parsed-year)))))

(defn not-in-date-format? [date-str]
  (not (re-matches #"^\d{2}/\d{2}/\d{4}$" date-str)))

(defn invalid-date-input? [date-str]
  (if (str/blank? date-str)
    false
    (or (not-in-date-format? date-str) (not-a-calendar-date? date-str))))

(defn flight-booker []
  (r/with-let [flight-type (r/atom "oneway")
               departure-date (r/atom nil)
               departure-date-is-invalid (r/atom true)
               return-date (r/atom nil)
               return-date-is-invalid (r/atom true)
               flight-is-booked (r/atom false)]
              [:div#flight-booker.gui
               [:div.gui-title "Flight Booker"]
               [:div.gui-main
                [:select {:value     @flight-type
                          :style     {:display "block"}
                          :disabled  @flight-is-booked
                          :on-change (fn [event]
                                       (let [selection (util/get-event-value event)]
                                         (reset! flight-type selection)))}
                 [:option {:value "roundtrip"} "Round-trip"]
                 [:option {:value "oneway"} "One-way"]]
                [:div#departure
                 [:div "Departure"]
                 [:input#departure-input.gui-display
                  {:value       @departure-date
                   :disabled    @flight-is-booked
                   :style       {:width            "6em"
                                 :background-color (if (and @departure-date-is-invalid
                                                            (not (str/blank? @departure-date))) "#f1bebe")}
                   :placeholder "mm/dd/yyyy"
                   :on-change   (fn [event] (let [date-entered (util/get-event-value event)]
                                              (reset! departure-date-is-invalid (invalid-date-input? date-entered))
                                              (reset! departure-date date-entered)))}]]
                [:div#return {:hidden (if (= @flight-type "oneway") true)}
                 [:div "Return"]
                 [:input#return-input.gui-display
                  {:value       @return-date
                   :disabled    @flight-is-booked
                   :style       {:width            "6em"
                                 :background-color (if (and @return-date-is-invalid
                                                            (not (str/blank? @return-date))) "#f1bebe")}
                   :placeholder "mm/dd/yyyy"
                   :on-change   (fn [event] (let [date-entered (util/get-event-value event)]
                                              (reset! return-date-is-invalid (invalid-date-input? date-entered))
                                              (reset! return-date date-entered)))}]]
                [:button {:on-click #(reset! flight-is-booked true)
                          :disabled (or @flight-is-booked
                                        @departure-date-is-invalid
                                        (and (= @flight-type "roundtrip") @return-date-is-invalid)
                                        (dates-out-of-order? @departure-date @return-date))}
                 "Book!"]]
               [:div#success-message {:hidden (not @flight-is-booked)}
                [:div "Success! Your trip departs on " @departure-date
                 (if (= @flight-type "roundtrip") (str " and returns " @return-date)) "."]
                [:button {:on-click (fn [_event] (do (reset! departure-date "") (reset! flight-is-booked false) (reset! return-date "")))}
                 "Book again!"]]]))