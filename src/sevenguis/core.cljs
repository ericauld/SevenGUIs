(ns sevenguis.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]))




(defn not-a-calendar-date? [date-str]
  (let [[month-str day-str year-str] (str/split date-str "/")
        [month day year] (mapv js/parseInt [month-str day-str year-str])
        date (js/Date. year (- month 1) day)
        parsed-month (-> date .getMonth (+ 1))
        parsed-day (.getDate date)
        parsed-year (.getFullYear date)]
    (not (and (= month parsed-month) (= day parsed-day) (= year parsed-year)))))

(defn date-doesnt-match-regex? [date-str]
  (not (re-matches #"^\d{2}/\d{2}/\d{4}$" date-str)))

(defn invalid-date-input? [date-str]
  (if (str/blank? date-str)
    false
    (or (date-doesnt-match-regex? date-str) (not-a-calendar-date? date-str))))

(defn celsius->fahrenheit [celsius-str]
  (if (str/blank? celsius-str)
    ""
    (let [celsius-flt (-> celsius-str js/parseFloat)
          converted-val (-> celsius-flt (* 9) (/ 5) (+ 32))]
      (.toFixed converted-val 1))))

(defn fahrenheit->celsius [fahr-temp-str]
  (if (str/blank? fahr-temp-str)
    ""
    (let [fahrenheit-flt (-> fahr-temp-str js/parseFloat)
          converted-val (-> fahrenheit-flt (- 32) (* 5) (/ 9))]
      (.toFixed converted-val 1))))

(defn dates-out-of-order? [date-str1 date-str2]
  (let [[month1 day1 year1] (str/split date-str1 "/")
        [month2 day2 year2] (str/split date-str2 "/")]
    (prn (str year1 month1 day1) (str year2 month2 day2))
    (> (compare (str year1 month1 day1) (str year2 month2 day2)) 0)))

(defn timer []
  )


(defn flight-booker []
  (r/with-let [flight-type (r/atom "oneway")
               departure-date (r/atom nil)
               departure-date-is-invalid (r/atom true)
               return-date (r/atom nil)
               return-date-is-invalid (r/atom true)
               flight-is-booked (r/atom false)]
    [:div {:class "gui"}
     [:div {:class "gui-title"} "Flight Booker"]
     [:div {:class "gui-main"}
      [:select {:value     @flight-type
                :style     {:display "block"}
                :disabled  @flight-is-booked
                :on-change (fn [event]
                             (let [selection (.. event -target -value)]
                               (reset! flight-type selection)))}
       [:option {:value "roundtrip"} "Round-trip"]
       [:option {:value "oneway"} "One-way"]]
      [:div [:div "Departure"]
       [:input {:class       "gui-display"
                :value       @departure-date
                :disabled    @flight-is-booked
                :style       {:width            "6em"
                              :background-color (if (and @departure-date-is-invalid
                                                         (not (str/blank? @departure-date))) "#f1bebe")}
                :placeholder "mm/dd/yyyy"
                :on-change   (fn [event] (let [date-entered (.. event -target -value)]
                                           (reset! departure-date-is-invalid (invalid-date-input? date-entered))
                                           (reset! departure-date date-entered)))}]]
      [:div {:hidden (if (= @flight-type "oneway") true)}
       [:div "Return"]
       [:input {:class       "gui-display"
                :value       @return-date
                :disabled    @flight-is-booked
                :style       {:width            "6em"
                              :background-color (if (and @return-date-is-invalid
                                                         (not (str/blank? @return-date))) "#f1bebe")}
                :placeholder "mm/dd/yyyy"
                :on-change   (fn [event] (let [date-entered (.. event -target -value)]
                                           (reset! return-date-is-invalid (invalid-date-input? date-entered))
                                           (reset! return-date date-entered)))}]]
      [:button {:on-click #(reset! flight-is-booked true)
                :disabled (or @flight-is-booked
                              @departure-date-is-invalid
                              (and (= @flight-type "roundtrip") @return-date-is-invalid)
                              (dates-out-of-order? @departure-date @return-date))}
       "Book!"]]
     [:div {:hidden (not @flight-is-booked)}
      [:div "Success! Your trip departs on " @departure-date
       (if (= @flight-type "roundtrip") (str " and returns " @return-date))"."]
      [:button {:on-click (fn [event] (do (reset! departure-date "") (reset! flight-is-booked false) (reset! return-date "")))}
       "Book again!"]]]))

(defn temp-converter []
  (r/with-let
    [celsius-input (r/atom "")
     fahrenheit-input (r/atom "")
     celsius-update
     (fn [event]
       (let [input-str (.. event -target -value)
             converted-str (-> input-str celsius->fahrenheit)]
         (reset! celsius-input input-str)
         (reset! fahrenheit-input converted-str)))
     fahrenheit-update
     (fn [event]
       (let [input-str (.. event -target -value)
             converted-str (-> input-str fahrenheit->celsius)]
         (reset! fahrenheit-input input-str)
         (reset! celsius-input converted-str)))]
    [:div {:class "gui"}
     [:div {:class "gui-title"} "Temp Converter"]
     [:div {:class "gui-main"}
      [:div
       [:input {:class     "gui-display"
                :style     {:width "3.5em"}
                :on-change celsius-update
                :value     @celsius-input}]
       [:div "Celsius"]]
      [:div [:b "   "]]
      [:div
       [:input {:class     "gui-display"
                :style     {:width "3.5em"}
                :on-change fahrenheit-update
                :value     @fahrenheit-input}]
       [:div "Fahrenheit"]]]]))

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

(defn home-page []
  [:div {:style {:text-align "center"}}
   [:div {:class "title" :style {:justify-content "space-around"}}
    [:h2 "Seven GUIs in Reagent"]]
   [:div {:class "wrapper"}
    [counter]
    [temp-converter]
    [flight-booker]
    [:div {:class "gui"} "Four"]
    [:div {:class "gui"} "Five"]
    [:div {:class "gui"} "Six"]
    [:div {:class "gui"} "Seven"]]])


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
