(ns sevenguis.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]
    [cljs.test :as t]))

(defn locate-element [html-element]
  (let [rect (.getBoundingClientRect html-element)]
    [(.-left rect) (.-top rect)]))

(defn locate-event [event]
  [(.-clientX event)
   (.-clientY event)])

(defn locate-relative-to [html-element event]
  (mapv - (locate-event event) (locate-element html-element)))

(defn sqr-dist-from [[x y] {:keys [cx cy] :as _circle}]
  (+ (-> x (- cx) (js/Math.pow 2))
     (-> y (- cy) (js/Math.pow 2))))

(defn surrounds? [point {rad :rad :as circle}]
  (let [sqr-radius (js/Math.pow rad 2)]
    (-> point (sqr-dist-from circle) (< sqr-radius))))

(defrecord Circle [index cx cy rad])

(defn nearest-surrounding [circles point]
  (let [surrounds-point? (partial surrounds? point)
        sqr-dist-from-point (partial sqr-dist-from point)]
    (apply min-key sqr-dist-from-point (filter surrounds-point? circles))))

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

(defn deref-if-necessary [v]
  (if (satisfies? IDeref v) @v v))

(def n-columns 6)
(def n-rows 6)

(def state (r/atom {:value               (->> (repeat nil)
                                              (partition n-columns)
                                              (take n-rows)
                                              (mapv vec))
                    :modal-menu-visible? false
                    :modal-input         ""
                    :selected-cell       nil}))

(defn valid-cell-name? [s]
  (let [cell-name-pattern (re-pattern "[A-Z][1-9][0-9]?")]
    (not (str/blank? (re-matches cell-name-pattern s)))))

(defn cell-name->indices [cell]
  {:pre [(valid-cell-name? cell)]}
  (let [column-letter (get cell 0)
        column-number (-> column-letter .charCodeAt (- (.charCodeAt "A")))
        row-number (-> cell (subs 1) js/parseInt (- 1))]
    [column-number row-number]))

(defn reset-cell! [cell v]
  (let [[x y] (cell-name->indices cell)]
    (r/rswap! state assoc-in [:value y x] v)))

(defn swap-cell! [cell f]
  (let [[x y] (cell-name->indices cell)]
    (r/rswap! state update-in [:value y x] #(-> % js/parseFloat f str))))

(defn get-user-input [cell]
  (if cell
    (let [[x y] (cell-name->indices cell)]
      @(r/cursor state [:value y x]))))

(defn increment-cell! [cell]
  {:pre [(-> cell get-user-input js/isNaN not)]}
  (swap-cell! cell #(-> % js/parseFloat inc str)))

(def selected-cell
  (let [get-set (fn ([_k] (let [selected-cell (:selected-cell @state)]
                            (get-user-input selected-cell)))
                  ([_k v] (let [selected-cell (:selected-cell @state)]
                            (reset-cell! selected-cell v))))]
    (r/cursor get-set nil)))

(defn get-cell-cursor [cell]
  (let [[x y] (cell-name->indices cell)]
    (r/cursor state [:value y x])))

(declare displayed-value)
(declare parse-user-input)

(defn parse-formula [s]
  (js/console.log (str "Parse formula was called on " s))
  (if (valid-cell-name? s)
    @(displayed-value s)
    "Invalid formula"))

(defn is-num [s]
  (not (js/isNaN s)))

(defn parse-user-input [s]
  (js/console.log (str "Parse user input called on " s))    ;todo remove
  (if-not (str/blank? s)
    (if (is-num s)
      (js/parseFloat s)
      (if (str/starts-with? s "=")
        (parse-formula (subs s 1))
        s))))

(defn select-cell! [cell]
  (r/rswap! state assoc-in [:selected-cell] cell))

(defn displayed-value [cell]
  (js/console.log (str "displayed value called on " cell))
  (r/track #(-> cell get-user-input parse-user-input)))

(t/deftest test-parse-user-input
  (t/testing "Text input"
    (t/is (= (parse-user-input "") nil))
    (t/is (= (parse-user-input " ") nil))
    (let [input "Example input"]
      (t/is (= input (parse-user-input input)))))

  (t/testing "Numerical input"
    (doseq [input [0 2 -3 3.14]]
      (t/is (= input (parse-user-input (str input))))))

  (t/testing "Track another cell's value" ;todo might need to provide values first so tests aren't passing spuriously
    (doseq [tracked-cell ["A1" "B2"]]
      (let [user-input (str "=" tracked-cell)
            tracked-cell-cursor (get-cell-cursor tracked-cell)
            tracking-cell-value (parse-user-input user-input)]
        (t/is (= @tracking-cell-value
                 @tracked-cell-cursor))
        (increment-cell! tracked-cell)
        (t/is (= @tracking-cell-value
                 @tracked-cell-cursor))))))

(defn cell [cell-name]
  (js/console.log (str cell-name " rendering")) ;todo remove
  [:input.cell
   {:value           (str cell-name " value " @(displayed-value cell-name))
    :on-change       (fn [])
    :on-double-click (fn []
                       (select-cell! cell-name)
                       (r/rswap! state assoc :modal-input @selected-cell)
                       (r/rswap! state assoc-in [:modal-menu-visible?] true))}])

(defn modal-cell-editor []
  (r/with-let [user-input-cursor (r/cursor state [:modal-input])
               done-editing-listener (fn [_e]
                                       (reset! selected-cell @user-input-cursor)
                                       (reset! user-input-cursor "")
                                       (r/rswap! state assoc-in [:modal-menu-visible?] false)
                                       (r/rswap! state assoc-in [:selected-cell] nil))
               user-presses-enter (fn [e] (-> e .-key (= "Enter")))]
    [:div.cell-modal {:on-key-down #(if (and (user-presses-enter %) (:modal-menu-visible? @state))
                                      (done-editing-listener))
                      :hidden      (not @(r/cursor state [:modal-menu-visible?]))}
     [:input
      {:value     @user-input-cursor
       :on-change #(reset! user-input-cursor (get-event-value %))}]
     [:div
      [:button {:on-click done-editing-listener} "Done"]]]))

(defn sum-cell []
  [:input {:value     (str "A1 + B1 = "
                           @(r/track #(+ @(displayed-value "A1")) @(displayed-value "B1")))
           :on-change (fn [])
           :style     {:width "15em"}}])

(defn increment-button [cell]
  [:button {:on-click #(increment-cell! cell)}
   (str "Increment " cell)])

(defn cell-grid []
  [:div.cell-container
   (doall (for [y (map str (range 1 (+ 1 n-rows)))]
            (-> (for [x (subs "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 0 n-columns)]
                  ^{:key (str x y)} [cell (str x y)])       ;todo fix key
                (concat [[:br]]))))])

(defn cells []
  [:div
   [cell-grid]
   [:div (doall (-> (for [column "ABC" :let [cell-label (str column "1")]]
                      ^{:key cell-label} [increment-button cell-label])
                    (concat [[:button {:on-click #(r/rswap! state assoc :value (->> (repeat nil)
                                                                                    (partition n-columns)
                                                                                    (take n-rows)
                                                                                    (mapv vec)))}
                              "Clear all"]])))]
   [sum-cell]
   [:text (str "Selected cell: " @(r/cursor state [:selected-cell]))]
   [modal-cell-editor]])

(defn circle-drawer []
  (r/with-let
    [default-radius 40
     draw-settings {:stroke       "black"
                    :stroke-width 1.25}
     selected-circle-color "#6bcdff"
     unselected-circle-color "transparent"
     circles (r/atom [])
     selected-circle (r/atom nil)
     selected? #(= @selected-circle %)
     select! #(reset! selected-circle %)
     unselect! #(reset! selected-circle nil)
     reset-radius! (fn [circle-atom new-radius]
                     (r/rswap! circle-atom assoc :rad new-radius)
                     (r/rswap! circles assoc-in [(:index @circle-atom) :rad] new-radius))
     clear-circles! #(reset! circles [])
     undo-list (r/atom [])
     redo-list (r/atom [])
     clear-redo-list! #(reset! redo-list [])
     undo-watcher! (fn [_ _ old _] (r/rswap! undo-list conj old))
     track-edits (fn []
                   (add-watch circles ::undo-watcher undo-watcher!)
                   (add-watch circles ::redo-clearer clear-redo-list!))
     stop-tracking-edits (fn []
                           (remove-watch circles ::undo-watcher)
                           (remove-watch circles ::redo-clearer))
     do-without-tracking (fn [f! a & args]
                           (stop-tracking-edits)
                           (apply f! a args)
                           (track-edits))
     undo! (fn []
             (when-let [prev-state (peek @undo-list)]
               (let [current-state @circles]
                 (do-without-tracking reset! circles prev-state)
                 (r/rswap! undo-list pop)
                 (r/rswap! redo-list conj current-state))))
     redo! (fn []
             (when-let [redo-state (peek @redo-list)]
               (remove-watch circles ::redo-clearer)
               (reset! circles redo-state)
               (add-watch circles ::redo-clearer clear-redo-list!)
               (r/rswap! redo-list pop)))
     context-menu-visible? (r/atom false)
     modal-menu-visible? (r/atom false)
     !svg-element (atom nil)
     !gui-main-element (atom nil)
     context-menu-location (r/atom [0 0])
     show-context-menu-at! (fn [click]
                             ; make sure element has already been rendered
                             (when-let [gui-main-element @!gui-main-element]
                               (->> click
                                    (locate-relative-to gui-main-element)
                                    (reset! context-menu-location))
                               (reset! context-menu-visible? true)))
     add-circle-at-click! (fn [click]
                            ; make sure element has already been rendered
                            (when-let [svg-element @!svg-element]
                              (let [index-of-new-circle (count @circles)
                                    [click-x click-y] (->> click (locate-relative-to svg-element))
                                    new-circle (map->Circle {:index index-of-new-circle
                                                             :cx    click-x
                                                             :cy    click-y
                                                             :rad   default-radius})]
                                (r/rswap! circles conj new-circle)
                                (select! new-circle))))
     update-mouse-location! (fn [mouse]
                              ; make sure element has already been rendered
                              (when-let [svg-element @!svg-element]
                                (let [nearest-surrounding-circle (->> mouse
                                                                      (locate-relative-to svg-element)
                                                                      (nearest-surrounding @circles))]
                                  (if-not (selected? nearest-surrounding-circle)
                                    (select! nearest-surrounding-circle)))))
     hide-menu-or-draw-circle! (fn [click]
                                 (if @context-menu-visible?
                                   (reset! context-menu-visible? false)
                                   (if-not @modal-menu-visible?
                                     (add-circle-at-click! click))))
     _ (track-edits)]
    [:div.gui
     [:div.gui-title "Circle Drawer"]
     [:div#circle-drawer-main.gui-main {:ref #(reset! !gui-main-element %)}
      [:svg {:width           500 :height 600
             :ref             #(reset! !svg-element %)
             :on-click        hide-menu-or-draw-circle!
             :on-context-menu (fn [click] (when (some? @selected-circle)
                                            (.preventDefault click)
                                            (show-context-menu-at! click)))
             :on-mouse-move   #(if-not (or @modal-menu-visible? @context-menu-visible?)
                                 (update-mouse-location! %))
             :on-mouse-leave  #(if-not (or @context-menu-visible? @modal-menu-visible?)
                                 (unselect!))}
       (doall (for [{:keys [index cx cy rad] :as circle} @circles]
                ^{:key index} [:circle.circle
                               (merge draw-settings
                                      {:id   index :cx cx :cy cy :r rad
                                       :fill (if (= circle @selected-circle)
                                               selected-circle-color
                                               unselected-circle-color)})]))]
      [:ul#context-menu
       {:hidden (not @context-menu-visible?)
        :style  {:left (get @context-menu-location 0)
                 :top  (get @context-menu-location 1)}}
       [:li#context-menu-item
        {:on-click #(do (reset! context-menu-visible? false)
                        (reset! modal-menu-visible? true)
                        (r/rswap! undo-list conj @circles)
                        (stop-tracking-edits))}
        "Adjust radius"]]
      [:button {:on-click undo!
                :disabled (empty? @undo-list)}
       "Undo"]
      [:button {:on-click redo!
                :disabled (empty? @redo-list)}
       "Redo"]
      [:button {:on-click clear-circles!
                :disabled (empty? @circles)}
       "Clear all"]
      (if @modal-menu-visible?
        [:div#modal {:on-key-down #(if (-> % .-key (= "Escape"))
                                     (reset! modal-menu-visible? false))
                     :style       {:opacity 1}}
         "Adjust radius"
         [:input {:type      "range" :min 0 :max 400
                  :value     (-> @selected-circle :rad)
                  :on-change (fn [event]
                               (let [user-input (js/parseInt (get-event-value event))]
                                 (reset-radius! selected-circle user-input)))
                  :style     {:display "block"}}]
         [:button {:on-click #(do (reset! modal-menu-visible? false)
                                  (update-mouse-location! %)
                                  (if (= @circles (peek @undo-list))
                                    (r/rswap! undo-list pop))
                                  (track-edits))}
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
          (doall (for [name filtered-names :let [[last first] (str/split name " ")]]
                   ^{:key name} [:option {:value name} (str last ", " first)])))]]]]))

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
               tick-if-time-remains! #(if (time-is-up) (stop-clock!) (tick!))
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
    [cells]]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
