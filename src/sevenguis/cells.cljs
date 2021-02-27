(ns sevenguis.cells
  (:require
    [reagent.core :as r]
    [clojure.string :as str]
    [instaparse.core :as insta]
    [sevenguis.util :as util]
    [cljs.test :as t]))

(def n-columns 5)
(def n-rows 5)

(def cell-name-regex (re-pattern "[A-Za-z][1-9][0-9]?"))

(def state (r/atom {:user-input               (->> (range)
                                                   (map str)
                                                   (partition n-columns)
                                                   (take n-rows)
                                                   (mapv vec))
                    :modal-menu-visible? false
                    :modal-input         ""
                    :selected-cell       nil}))

(def !modal-element (atom nil))

(defn is-cell-name? [s]
  (not (str/blank? (re-matches cell-name-regex s))))

(defn is-num? [s]
  (not (js/isNaN s)))

(defn within-epsilon [tolerance float1 float2]
  (let [diff (js/Math.abs (- float1 float2))]
    (< diff tolerance)))

(defn cell-label->indices [cell]
  {:pre [(is-cell-name? cell)]}
  (let [column-letter (-> (get cell 0) str/upper-case)
        column-number (-> column-letter .charCodeAt (- (.charCodeAt "A")))
        row-number (-> cell (subs 1) js/parseInt (- 1))]
    [column-number row-number]))

(defn reset-user-input! [cell v]
  (let [[x y] (cell-label->indices cell)]
    (r/rswap! state assoc-in [:user-input y x] v)))

(defn swap-user-input! [cell f]
  (let [[x y] (cell-label->indices cell)]
    (r/rswap! state update-in [:user-input y x] #(-> % js/parseFloat f str))))

(defn get-user-input [cell-label]
  (if cell-label
    (let [[x y] (cell-label->indices cell-label)]
      @(r/cursor state [:user-input y x]))))

(defn increment-value-of! [cell-label]
  (swap-user-input! cell-label #(-> % js/parseFloat inc str)))

(def selected-cell
  (let [get-set (fn ([_k] (let [selected-cell (:selected-cell @state)]
                            (get-user-input selected-cell)))
                  ([_k v] (let [selected-cell (:selected-cell @state)]
                            (reset-user-input! selected-cell v))))]
    (r/cursor get-set nil)))

(defn cell-cursor [cell]
  (let [[x y] (cell-label->indices cell)]
    (r/cursor state [:user-input y x])))

(defprotocol Formula
  (display-formula [this])
  (expand-if-range [this]))

(defprotocol Evaluator
  (eval-formula [this]))

(declare user-input->formula)
(declare op-table)

(defrecord Coordinate [cell-name] 
  Formula
  (display-formula [_this] (-> @(cell-cursor cell-name)
                               user-input->formula
                               eval-formula))
  (expand-if-range [this] (list this))
  Evaluator
  (eval-formula [_this] (-> @(cell-cursor cell-name)
                            user-input->formula
                            eval-formula)))

(defrecord Application [func-string args-as-objects]
  Formula
  (display-formula [_this]
    (let [function (op-table func-string)
          evaluated-args-list (->> args-as-objects
                                   (map expand-if-range)
                                   (mapcat #(map eval-formula %)))]
      @(r/track apply function evaluated-args-list)))
  (expand-if-range [this] (list this))
  Evaluator
  (eval-formula [_this]
    (let [function (op-table func-string)
          evaluated-args-list (->> args-as-objects
                                   (map expand-if-range)
                                   (mapcat #(map eval-formula %)))]
      @(r/track apply function evaluated-args-list))))

(defn range->list-of-cells [cell1-name cell2-name]
  (let [letter1 (str/upper-case (first cell1-name))
        letter2 (str/upper-case (first cell2-name))
        n-rows-in-range (-> (.charCodeAt letter2) (- (.charCodeAt letter1)) (+ 1))
        number1 (-> (subs cell1-name 1) js/parseInt)
        number2 (-> (subs cell2-name 1) js/parseInt)
        n-columns-in-range (-> number2 (- number1) (+ 1))]
    (if (and (> n-rows-in-range 0) (> n-columns-in-range 0))
      (for [offset-row (range n-rows-in-range)
            offset-column (range n-columns-in-range)
            :let [letter (-> letter1 .charCodeAt (+ offset-row) char)
                  number (-> number1 (+ offset-column))]]
        (->Coordinate (str letter number))))))

(defrecord CellRange [coordinate1 coordinate2]
  Formula
  (display-formula [_this] nil)
  (expand-if-range [_this]
    (let [cell-name1 (:cell-name coordinate1)
          cell-name2 (:cell-name coordinate2)]
      (range->list-of-cells cell-name1 cell-name2))))

(defrecord Decimal [float-value]
  Formula
  (display-formula [_this] float-value)
  (expand-if-range [this] (list this))
  Evaluator
  (eval-formula [_this] float-value))

(defrecord Textual [s]
  Formula
  (display-formula [_this] s)
  (expand-if-range [this] (list this))
  Evaluator
  (eval-formula [_this] 0))


(def op-table {"sum"  +
               "add"  #(+ %1 %2)
               "sub"  #(- %1 %2)
               "prod" *
               "mul"  #(* %1 %2)
               "div"  #(/ %1 %2)})

(def user-input->tree
  (insta/parser "
  formula = decimal / textual / (<'='> expr)
  expr    = cellrange | cell | decimal | application
  application = ident <'('> (expr <','> )* expr <')'>
  cellrange   = cell <':'> cell
  textual = #'[^=].*' / #'\\s*'
  ident   = #'[a-zA-Z_]\\w*'
  decimal = #'-?\\d+(\\.\\d+)?'
  cell    = #'[A-Za-z][1-9][0-9]?'"))

(def type-map {:ident       str
               :decimal     #(-> % js/parseFloat ->Decimal)
               :cell        #(->Coordinate %)
               :formula     identity
               :expr        identity
               :cellrange   #(->CellRange %1 %2)
               :application (fn [func-string & arg-list]
                              (->Application func-string arg-list))
               :textual     #(->Textual %)})

(defn tree->formula [tree]
  (insta/transform type-map tree))

(defn user-input->formula [s]
  (-> s user-input->tree tree->formula))

(t/deftest test-parse-user-input
  (let [approx= (partial within-epsilon 0.01)]

    (t/testing "Text input"
      (doseq [input ["" " " "Example input"]]
        (t/is (= (-> input user-input->formula display-formula) input))))

    (t/testing "Numerical input"
      (doseq [input ["0" "2" "-3" "3.14"]]
        (t/is (approx= (-> input user-input->formula display-formula)
                       (js/parseFloat input)))))

    (t/testing "Track another cell which contains a simple value"
      (doseq [tracked-cell ["A1" "B2" "D5"]]
        (let [user-input (str "=" tracked-cell)
              tracking-value (r/track display-formula (user-input->formula user-input))
              tracked-cell-value 3.14
              _ (reset-user-input! tracked-cell (str tracked-cell-value))]
          (t/is (approx= @tracking-value
                         tracked-cell-value))
          (increment-value-of! tracked-cell)
          (t/is (approx= @tracking-value
                         (+ 1 tracked-cell-value))))))

    (t/testing "Track a sum of two cells, each with simple values"
      (let [first-cell "A1"
            first-value 3.14
            second-cell "B2"
            second-value 9229
            _ (reset-user-input! first-cell (str first-value))
            _ (reset-user-input! second-cell (str second-value))
            user-formula-input (str "=add(" first-cell "," second-cell ")")
            tracking-value (r/track display-formula (user-input->formula user-formula-input))]
        (t/is (approx= @tracking-value (+ first-value second-value)))
        (increment-value-of! first-cell)
        (t/is (approx= @tracking-value (+ first-value second-value 1)))))

    (t/testing "Track a sum of a cell with a simple value and a constant"
      (let [cell "A1"
            first-value 3.14
            constant 9229
            _ (reset-user-input! cell (str first-value))
            user-formula-input (str "=add(" cell "," constant ")")
            tracking-value (r/track display-formula (user-input->formula user-formula-input))]
        (t/is (approx= @tracking-value (+ first-value constant)))
        (increment-value-of! cell)
        (t/is (approx= @tracking-value (+ first-value constant 1)))))

    (t/testing "Track a product of two cells, each with simple values"
      (let [first-cell "A1"
            first-value 3.14
            second-cell "B2"
            second-value 9229
            _ (reset-user-input! first-cell (str first-value))
            _ (reset-user-input! second-cell (str second-value))
            user-formula-input (str "=mul(" first-cell "," second-cell ")")
            tracking-value (r/track display-formula (user-input->formula user-formula-input))]
        (t/is (approx= @tracking-value (* first-value second-value)))
        (increment-value-of! first-cell)
        (t/is (approx= @tracking-value (* (+ first-value 1) second-value)))))

    (t/testing "Track a sum of a range of cells"
      (let [user-input "=sum(A1:A4)"
            set-value (reduce + (range 4))
            formula-tracker (r/track display-formula (user-input->formula user-input))
            _ (doseq [[cell-name cell-value] [["A1" "0"] ["A2" "1"] ["A3" "2"] ["A4" "3"]]]
                (reset-user-input! cell-name cell-value))]
        (t/is (= @formula-tracker set-value))
        (increment-value-of! "A1")
        (t/is (= @formula-tracker (+ set-value 1)))))

    (t/testing "Track a product of a range of cells"
      (let [user-input "=prod(A1:A4)"
            _ (doseq [[cell-name cell-value] [["A1" "1"] ["A2" "2"] ["A3" "3"] ["A4" "4"]]]
                (reset-user-input! cell-name cell-value))
            actual-value (reduce * (range 1 5))
            formula-tracker (r/track display-formula (user-input->formula user-input))]
        (t/is (= @formula-tracker actual-value))
        (increment-value-of! "A1")
        (let [new-value (reduce * '(2 2 3 4))]
          (t/is (= @formula-tracker new-value)))))

    (t/testing "Nested formula"
      (let [user-input "=sum(A1:A3,prod(A2:A4),5)"
            _ (doseq [[cell-name cell-value] [["A1" "1"] ["A2" "2"] ["A3" "3"] ["A4" "4"]]]
                (reset-user-input! cell-name cell-value))
            actual-value (+ 1 2 3 (* 2 3 4) 5)
            formula-tracker (r/track display-formula (user-input->formula user-input))]
        (t/is (= @formula-tracker actual-value))
        (increment-value-of! "A2")
        (t/is (= @formula-tracker (+ 1 3 3 (* 3 3 4) 5)))))))

(defn select-cell! [cell]
  (r/rswap! state assoc-in [:selected-cell] cell))

(defn cell [cell-name]
  [:input.cell
   {:value           @(r/track #(-> cell-name get-user-input user-input->formula display-formula))
    :read-only       true
    :on-click        (fn [click] (.preventDefault click))
    :on-double-click (fn [_click]
                       (select-cell! cell-name)
                       (r/rswap! state assoc :modal-input @selected-cell :modal-menu-visible? true)
                       (js/setTimeout #(when-let [modal-element @!modal-element]
                                         (.focus modal-element))
                                      5))}])

(defn modal-cell-editor []
  (r/with-let [user-input-cursor (r/cursor state [:modal-input])
               done-editing-listener (fn [_e]
                                       (reset! selected-cell @user-input-cursor)
                                       (reset! user-input-cursor "")
                                       (r/rswap! state assoc :modal-menu-visible? false :selected-cell nil))
               cancel-editing-listener (fn [_e]
                                         (reset! user-input-cursor "")
                                         (r/rswap! state assoc :modal-menu-visible? false :selected-cell nil))
               user-presses-enter (fn [e] (-> e .-key (= "Enter")))
               user-presses-escape (fn [e] (-> e .-key (= "Escape")))]
              [:div.cell-modal {:on-key-down (fn [keypress] (if (:modal-menu-visible? @state)
                                                              (cond (user-presses-enter keypress) (done-editing-listener)
                                                                    (user-presses-escape keypress) (cancel-editing-listener))))
                                :hidden      (not @(r/cursor state [:modal-menu-visible?]))}
               [:input
                {:ref       #(reset! !modal-element %)
                 :value     @user-input-cursor
                 :on-change #(reset! user-input-cursor (util/get-event-value %))}]
               [:div
                [:button {:on-click done-editing-listener} "Done"]]]))

(defn sum-of-A1-B1-demo []
  [:input {:value     ""
           :on-change (fn [])
           :style     {:width "15em"}}])

(defn increment-button [cell-label]
  [:button {:on-click (fn [_e]
                        (if (-> cell-label get-user-input is-num?)
                          (increment-value-of! cell-label)))}
   (str "Increment " cell-label)])

(defn cell-grid []
  [:div.cell-container
   (doall (for [y (map str (range 1 (+ 1 n-rows)))]
            (-> (for [x (subs "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 0 n-columns)]
                  ^{:key (str x y)} [cell (str x y)])
                (concat [^{:key (str y "br")} [:br]]))))])

(defn cells []
  [:div
   [cell-grid]
   [:div (doall (-> (for [column "ABC" :let [cell-label (str column "1")]]
                      ^{:key cell-label} [increment-button cell-label])
                    (concat [^{:key "clear"}
                             [:button {:on-click #(r/rswap! state assoc :user-input (->> (repeat "")
                                                                                         (partition n-columns)
                                                                                         (take n-rows)
                                                                                         (mapv vec)))}
                              "Clear all"]])))]
   [sum-of-A1-B1-demo]
   [:div (str "Selected cell: " @(r/cursor state [:selected-cell]))]
   [modal-cell-editor]])

