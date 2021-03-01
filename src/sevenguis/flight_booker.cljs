(ns sevenguis.flight-booker
  (:require
    [reagent.core :as r]
    [clojure.string :as str]
    [sevenguis.util :as util]))

(def date-separator \/)
(def notation {:month "mm"
               :day   "dd"
               :year  "yyyy"})
(def date-notation-order [:month :day :year])
(def date-format (str/join date-separator
                           (for [time-period date-notation-order]
                             (time-period notation))))

(def pattern-for {:month "\\d{2}"
                  :day   "\\d{2}"
                  :year  "\\d{4}"})

(def date-pattern (re-pattern (str \^
                                   (str/join
                                     date-separator
                                     (for [time-period date-notation-order]
                                       (time-period pattern-for)))
                                   \$)))

(defn actual-date? [{:keys [month day year]}]
  "Use js date to determine whether this date will/did occur. "
    "If a date has never/will never occur, the js/Date constructor will "
    "roll over to a real date, and this causes the parsed value and the "
    " given value to be different."
  (let [date-candidate (js/Date. year (- month 1) day)
        parsed-month (-> date-candidate .getMonth (+ 1))
        parsed-day (.getDate date-candidate)
        parsed-year (.getFullYear date-candidate)]
    (= [month day year] [parsed-month parsed-day parsed-year])))

(defrecord Date [month day year])

(defn today []
  (let [now (js/Date.)
        month (-> now .getMonth (+ 1))
        day (.getDate now)
        year (.getFullYear now)]
    (->Date month day year)))

(defn is-before-or-same-as [date1 date2]
  (<= (compare [(:year date1) (:month date1) (:day date1)]
               [(:year date2) (:month date2) (:day date2)])
      0))

(defn already-happened? [date]
  (not (-> (today) (is-before-or-same-as date))))

(defn flight-input [{:keys [update-date disabled?]}]
  (r/with-let [!user-input (r/atom nil)
               no-input? (fn []
                           (let [input @!user-input]
                             (cond
                               (nil? input) true
                               (string? input) (empty? input)
                               :else false)))
               in-date-format? (fn [] (as-> @!user-input v
                                            ((fnil #(re-matches date-pattern %) "") v)
                                            (some? v)))
               parse-input (fn []
                             (when (in-date-format?)
                               (let [date-keys date-notation-order
                                     date-values (->> (str/split @!user-input date-separator)
                                                      (map js/parseInt))
                                     date (->> (interleave date-keys date-values)
                                               (apply hash-map)
                                               (map->Date))]
                                 (when (actual-date? date)
                                   date))))]
    [:input {:className   (when-not (or (no-input?)
                                        (parse-input))
                            "bad-date")
             :placeholder (when-not disabled? date-format)
             :value       @!user-input
             :on-change   (fn update-input [e]
                            (let [new-user-input (util/get-event-value e)]
                              (reset! !user-input new-user-input)
                              (update-date (parse-input))))
             :disabled    disabled?}]))

(def success-message "Congrats! You're all set!")
(def date-in-past-message (str "We regret to inform you that one of the days you "
                               "have selected is in the past."))
(def out-of-order-message (str "Unfortunately, it is impossible to arrive before you depart."))

(defn flight-booker []
  (r/with-let [!flight-type (r/atom "One-way")
               !departure (r/atom nil)
               !return (r/atom nil)
               !modal (atom nil)
               !modal-message (r/atom nil)
               book-button-disabled? #(not (or (and (= @!flight-type "One-way")
                                                    @!departure)
                                               (and @!departure
                                                    @!return)))
               set-modal-message #(reset!
                                    !modal-message
                                    (cond
                                      (and (= @!flight-type "One-way")
                                           (already-happened? @!departure)) date-in-past-message
                                      (and (= @!flight-type "Round-trip")
                                           (or (already-happened? @!departure)
                                               (already-happened? @!return))) date-in-past-message
                                      (and (= @!flight-type "Round-trip")
                                           (not (-> @!departure
                                                    (is-before-or-same-as @!return)))) out-of-order-message
                                      :else success-message))]
    [:div.gui.flight-booker
     [:select {:on-change (fn change-select [e]
                            (->> e
                                 util/get-event-value
                                 (reset! !flight-type)))}
      [:option {:value "One-way"} "One-way flight"]
      [:option {:value "Round-trip"} "Round-trip flight"]]
     [flight-input {:update-date (fn update-date [date]
                                   (reset! !departure date))}]
     [flight-input {:update-date (fn update-date [date]
                                   (reset! !return date))
                    :disabled?   (= @!flight-type "One-way")}]
     [:button#book-button {:on-click (fn on-click [_]
                                       (when-let [modal @!modal]
                                         (set-modal-message)
                                         (.showModal modal)))
                           :disabled (book-button-disabled?)}
      "Book!"]
     [util/modal {:text         @!modal-message             ;todo make sure it's not rendering when modal isn't showing
                  :set-ref-func (fn set-modal-ref [ref]
                                  (reset! !modal ref))
                  :listener     nil
                  :close-modal  (fn close-modal []
                                  (when-let [modal @!modal]
                                    (.close modal)))
                  :button-text  "OK"}]]))

