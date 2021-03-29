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

(def flight-types {:one-way :round-trip})

(def default-flight-type :one-way)

(def booking-states {:not-ready
                     :date-in-the-past
                     :dates-out-of-order
                     :success})

(defn matches-date-format? [s]
  (as-> s v
        ((fnil #(re-matches date-pattern %) "") v)
        (some? v)))

(defn str->Date [s]
  (when (matches-date-format? s)
    (let [date-keys date-notation-order
          date-values (->> (str/split s date-separator)
                           (map js/parseInt))
          parse-attempt (->> (interleave date-keys date-values)
                             (apply hash-map)
                             (map->Date))]
      (when (actual-date? parse-attempt)
        parse-attempt))))

(defn bad-input? [date-str]
  (cond
    (not date-str) false
    (= date-str "") false
    (not (str->Date date-str)) true
    :else false))

(defonce !app-db (r/atom {:flight-type     default-flight-type
                          :departure-input nil
                          :return-input    nil}))
(def !flight-type (r/cursor !app-db [:flight-type]))
(def !one-way? (r/track #(= @!flight-type :one-way)))

(def !departure-input (r/cursor !app-db [:departure-input]))

(def !return-input (r/cursor !app-db [:return-input]))

(def success-states {:not-ready
                     :date-in-the-past
                     :dates-out-of-order
                     :success})

(defn success-state [departure-input return-input one-way?]
  (let [departure-date-attempt (str->Date departure-input)
        return-date-attempt (str->Date return-input)]
    (cond
      one-way? (cond
                 (not (matches-date-format? departure-input)) :not-ready
                 (not departure-date-attempt) :not-ready
                 (already-happened? departure-date-attempt) :date-in-the-past
                 :else :success)
      :else (cond
              (not-every? matches-date-format? [departure-input return-input]) :not-ready
              (not-every? some? [departure-date-attempt return-date-attempt]) :not-ready
              (some already-happened? [departure-date-attempt return-date-attempt]) :date-in-the-past
              (not (is-before-or-same-as departure-date-attempt return-date-attempt)) :dates-out-of-order
              :else :success))))

(def !success-state (r/track #(success-state @!departure-input @!return-input @!one-way?)))

(def message {:not-ready          nil
              :date-in-the-past   (str "We regret to inform you that at least one of the dates "
                                       "you have chosen is in the past.")
              :dates-out-of-order "Unfortunately, it is impossible to return before you depart."
              :success            "You're all set!"})

(def !modal (atom nil))

(defn modal [{:keys [!modal-element text button-text]}]
  (let [times-symbol \u00D7]
    [:dialog {:ref (fn modal-ref-set [ref]
                     (reset! !modal-element ref)
                     (when-let [modal @!modal-element]
                       (js/dialogPolyfill.registerDialog modal)))}
     [:div.dialog-close-wrapper
      [:span.dialog-close {:on-click #(when-let [modal @!modal-element]
                                        (.close modal))}
       times-symbol]]
     [:p text]
     (when button-text [:button button-text])]))

(defn flight-booker2 []
  [:div.gui.flight-booker
   [:select {:on-change #(reset! !flight-type (keyword (.. % -target -value)))}
    [:option {:value :one-way} "One-way flight"]
    [:option {:value :round-trip} "Round-trip flight"]]
   [:input {:value       @!departure-input
            :className   (when (bad-input? @!departure-input) "bad-input")
            :placeholder date-format
            :on-change   #(reset! !departure-input (.. % -target -value))}]
   [:input {:value       (when-not @!one-way? @!return-input)
            :className   (when (and
                                 (not @!one-way?)
                                 (bad-input? @!return-input)) "bad-input")
            :placeholder (when-not @!one-way? date-format)
            :on-change   #(reset! !return-input (.. % -target -value))
            :disabled    @!one-way?}]
   [:button#book-button {:on-click #(when-let [modal @!modal]
                                      (.showModal modal))
                         :disabled (= @!success-state :not-ready)}
    "Book!"]
   [modal {:!modal-element !modal
           :text          (@!success-state message)}]])


