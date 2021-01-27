(ns sevenguis.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]
    [tailrecursion.priority-map :refer [priority-map priority-map-by]]))


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

(defn get-event-value [event]
  (.. event -target -value))

(defn get-element-coords [html-element]
  [(.-left (.getBoundingClientRect html-element))
   (.-top (.getBoundingClientRect html-element))])

(defn get-event-coords [event]
  [(-> event .-clientX)
   (-> event .-clientY)])

(defn locate-relative-to [html-element event]
  (mapv - (get-event-coords event) (get-element-coords html-element)))

(defn distance-from-center-of [{:keys [cx cy]} [x y]]
  (js/Math.sqrt (+ (js/Math.pow (- x cx) 2) (js/Math.pow (- y cy) 2))))

(defrecord Circle [index cx cy rad hovered?])

(defn circle-drawer []
  (r/with-let [default-radius 20
               circles (r/atom [])
               add-circle! (fn [[cx cy]]
                             (let [index-of-new-circle (count @circles)]
                               (r/rswap! circles conj
                                         (map->Circle {:index    index-of-new-circle
                                                       :cx       cx
                                                       :cy       cy
                                                       :rad      default-radius
                                                       :hovered? true}))))
               context-menu-visible? (r/atom false)
               modal-visible? (r/atom false)
               !svg-element (atom nil)
               !gui-main-element (atom nil)
               context-menu-location (r/atom [0 0])
               hide-menu-or-draw-circle! (fn [click]
                                           (if @context-menu-visible?
                                             (reset! context-menu-visible? false)
                                             (if-not @modal-visible?
                                               ; make sure element has already been rendered
                                               (when-let [svg-element @!svg-element]
                                                 (->> click
                                                      (locate-relative-to svg-element)
                                                      add-circle!)))))
               show-context-menu! (fn [right-click]
                                    (.preventDefault right-click)
                                    ; make sure element has already been rendered
                                    (when-let [gui-main-element @!gui-main-element]
                                      (->> right-click
                                           (locate-relative-to gui-main-element)
                                           (reset! context-menu-location))
                                      (reset! context-menu-visible? true)))]
    [:div.gui
     [:div.gui-title "Circle Drawer"]
     [:div#circle-drawer-main.gui-main {:ref #(reset! !gui-main-element %)}
      [:svg {:width           500 :height 600
             :ref             #(reset! !svg-element %)
             :on-click        hide-menu-or-draw-circle!
             :on-context-menu show-context-menu!
             :on-mouse-move   (fn [mouse]
                                (when-let [svg-element @!svg-element]
                                  (js/console.log (->> mouse (locate-relative-to svg-element) str))))}
       (for [{:keys [index cx cy rad]} @circles]
         [:circle.circle (merge {:id index :cx cx :cy cy :r rad}
                                {:stroke         "black" :stroke-width 1.25 :fill "transparent"
                                 :on-mouse-over  nil
                                 :on-mouse-leave nil
                                 :on-mouse-move  nil})])]
      [:ul#context-menu
       {:hidden (not @context-menu-visible?)
        :style  {:left (get @context-menu-location 0)
                 :top  (get @context-menu-location 1)}}
       [:li#context-menu-item
        {:on-click (fn [click]
                     (reset! context-menu-visible? false)
                     (reset! modal-visible? true))}
        "Adjust radius"]]
      [:button "Undo"]
      [:button "Redo"]
      (if @modal-visible?
        [:div#modal {:style {:opacity 1}}
         "Modal"
         [:input {:type "range"}]
         [:button {:on-click #(reset! modal-visible? false)}
          "Done"]])]]))

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
                :on-change (fn [event] (let [input (get-event-value event)]
                                         (reset! filter-prefix input)))}]]
      [:div#name
       [:div#first-name
        [:div "Name:"]
        [:input {:value     @first-name-input
                 :on-change (fn [event]
                              (let [user-input (get-event-value event)]
                                (reset! first-name-input user-input)))}]]
       [:div#surname
        [:div "Surname:"]
        [:input {:value     @surname-input
                 :on-change (fn [event]
                              (let [user-input (get-event-value event)]
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
                                      (let [selected (get-event-value event)]
                                        (reset! selected-name selected)))}
        (let [prefix @filter-prefix
              prefix-as-regex (re-pattern (str prefix ".*"))
              matches-prefix? (fn [name] (re-matches prefix-as-regex name))
              filtered-names (filter matches-prefix? @name-list)]
          (for [name filtered-names :let [[last first] (str/split name " ")]]
            [:option {:value name} (str last ", " first)]))]]]]))

(defn timer []
  (r/with-let [decimal-precision 1
               seconds-between-ticks 0.1
               milliseconds-between-ticks (* 1000 seconds-between-ticks)
               clock-is-ticking (r/atom false)
               seconds-until-stop (r/atom 60.0)
               seconds-elapsed (r/atom 0.0)
               time-is-up (fn [] (>= (+ @seconds-elapsed 0.1) @seconds-until-stop))
               tick! (fn [] (r/rswap! seconds-elapsed (fn [x] (+ x seconds-between-ticks))))
               ticking-process (r/atom nil)
               stop-clock! (fn [] (reset! clock-is-ticking false)
                             (js/clearInterval @ticking-process))
               tick-if-time-remains! #((if (time-is-up) (stop-clock!) (tick!)))
               start-clock! (fn [] (reset! clock-is-ticking true)
                              (reset! ticking-process (js/setInterval tick-if-time-remains!
                                                                      milliseconds-between-ticks)))]
    [:div.gui
     [:div.gui-title "Timer"]
     [:div.gui-main
      [:meter {:min 0 :max @seconds-until-stop :value @seconds-elapsed}]
      [:div.gui-display (.toFixed @seconds-elapsed decimal-precision) "s"]
      [:div#duration
       [:div "Duration"]
       [:input {:type      "range" :min 5 :max 600 :value @seconds-until-stop
                :on-change (fn [event]
                             (let [user-input (get-event-value event)]
                               (reset! seconds-until-stop user-input)
                               (if (and (not @clock-is-ticking)
                                        (not (= @seconds-elapsed 0))
                                        (< @seconds-elapsed @seconds-until-stop))
                                 (start-clock!))))}]
       [:div.gui-display (.toFixed (js/parseFloat @seconds-until-stop) 1) "s"]]
      [:div#buttons
       [:button#reset {:on-click #((reset! seconds-elapsed 0)
                                   (js/clearInterval @ticking-process))}
        "Reset"]
       [:button#start {:on-click start-clock!}
        "Start"]]]]
    (finally (js/clearInterval @ticking-process))))

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
                             (let [selection (get-event-value event)]
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
         :on-change   (fn [event] (let [date-entered (get-event-value event)]
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
         :on-change   (fn [event] (let [date-entered (get-event-value event)]
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
      [:button {:on-click (fn [event] (do (reset! departure-date "") (reset! flight-is-booked false) (reset! return-date "")))}
       "Book again!"]]]))

(defn temp-converter []
  (r/with-let
    [celsius-input (r/atom "")
     fahrenheit-input (r/atom "")
     celsius-update (fn [event]
                      (let [input-str (get-event-value event)
                            converted-str (-> input-str celsius->fahrenheit)]
                        (reset! celsius-input input-str)
                        (reset! fahrenheit-input converted-str)))
     fahrenheit-update (fn [event]
                         (let [input-str (get-event-value event)
                               converted-str (-> input-str fahrenheit->celsius)]
                           (reset! fahrenheit-input input-str)
                           (reset! celsius-input converted-str)))]
    [:div#temp-converter.gui
     [:div.gui-title "Temp Converter"]
     [:div.gui-main
      [:div#celsius
       [:input.gui-display {:style     {:width "3.5em"}
                            :on-change celsius-update
                            :value     @celsius-input}]
       [:div "Celsius"]]
      [:div#space-between [:b "   "]]
      [:div#fahrenheit
       [:input.gui-display {:style     {:width "3.5em"}
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
   [:div.title {:style {:justify-content "space-around"}}
    [:h2 "Seven GUIs in Reagent"]]
   [:div.wrapper
    [counter]
    [temp-converter]
    [flight-booker]
    [timer]
    [crud]
    [circle-drawer]
    [:div.gui "Seven"]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
