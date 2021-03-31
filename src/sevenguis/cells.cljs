(ns sevenguis.cells
  (:require
    [reagent.core :as r]
    [instaparse.core :as insta]))

(def n-rows 100)

(def n-columns 26)

(def alphabet-caps "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

(def column-labels (take n-columns alphabet-caps))

(defonce
  !app-db
  (r/atom {:cell-being-edited                   nil
           :cell-values                         (into {}
                                                      (for [column-letter column-labels
                                                            row-number (range n-rows)]
                                                        [(str column-letter row-number) nil]))
           :cell-being-edited-cached-user-input nil}))

(def !cell-being-edited (r/cursor !app-db [:cell-being-edited]))

(def !cached-input (r/cursor !app-db [:cell-being-edited-cached-user-input]))

(def func-with-name {"sum"  +
                     "add"  #(+ %1 %2)
                     "sub"  #(- %1 %2)
                     "prod" *
                     "mul"  #(* %1 %2)
                     "div"  #(/ %1 %2)})

(defprotocol Expression
  (evaluate [this]))

(defprotocol Formula
  (display [this]))

(defprotocol Abbreviation
  (expand-and-eval [this]))

(defn eval-list [coll]
  (mapcat expand-and-eval coll))

(defrecord Decimal [value]
  Expression
  (evaluate [_this] value)
  Formula
  (display [_this] value)
  Abbreviation
  (expand-and-eval [_this] (list value)))

(defrecord Textual [s]
  Formula
  (display [_this] s)
  Expression
  (evaluate [_this] 0)
  Abbreviation
  (expand-and-eval [_this] (list 0)))

(declare user-input->hiccup-tree)
(declare hiccup-tree->formula-object)

(defrecord Cell [column row]
  Expression
  (evaluate [_this]
    @(r/track (fn cell-evaluate-track []
                (when-let [cell-input (if (= (str column row) @!cell-being-edited)
                                        @!cached-input
                                        @(r/cursor !app-db [:cell-values (str column row)]))]
                  (-> cell-input
                      user-input->hiccup-tree
                      hiccup-tree->formula-object
                      evaluate)))))
  Abbreviation
  (expand-and-eval [_this]
    (list
      @(r/track (fn cell-evaluate-track []
                  (when-let [cell-input (if (= (str column row) @!cell-being-edited)
                                          @!cached-input
                                          @(r/cursor !app-db [:cell-values (str column row)]))]
                    (-> cell-input
                        user-input->hiccup-tree
                        hiccup-tree->formula-object
                        evaluate))))))
  Formula
  (display [_this]
    @(r/track (fn cell-evaluate-track []
                (when-let [cell-input (if (= (str column row) @!cell-being-edited)
                                        @!cached-input
                                        @(r/cursor !app-db [:cell-values (str column row)]))]
                  (-> cell-input
                      user-input->hiccup-tree
                      hiccup-tree->formula-object
                      evaluate))))))

(defn cell-range->list [first-cell final-cell]
  (let [n-columns-in-range (-> (.charCodeAt (:column final-cell))
                               (- (.charCodeAt (:column first-cell)))
                               (+ 1))
        n-rows-in-range (-> (:row final-cell)
                            (- (:row first-cell))
                            (+ 1))]
    (if-not (and (> n-columns-in-range 0) (> n-rows-in-range 0))
      (list)
      (for [column-offset (range n-columns-in-range)
            row-offset (range n-rows-in-range)
            :let [column (-> (:column first-cell) .charCodeAt (+ column-offset) char)
                  row (-> (:row first-cell) (+ row-offset))]]
        (->Cell column row)))))

(defrecord Cell-range [first-cell final-cell]
  Abbreviation
  (expand-and-eval [_this] @(r/track
                              (fn cell-range-value []
                                (eval-list (cell-range->list first-cell final-cell))))))

(defrecord Application [func-as-string arg-list]
  Expression
  (evaluate [_this]
    (let [function (get func-with-name func-as-string)]
      @(r/track (fn eval-application []
                  (apply function (eval-list arg-list))))))
  Formula
  (display [_this]
    (let [function (get func-with-name func-as-string)]
      @(r/track (fn eval-application []
                  (apply function (eval-list arg-list))))))
  Abbreviation
  (expand-and-eval [_this]
    (let [function (get func-with-name func-as-string)]
      (list
        @(r/track (fn eval-application []
                    (apply function (eval-list arg-list))))))))

(def symbol->creator {:Formula         identity
                      :Expr            identity
                      :Abbreviation    identity
                      :Application     (fn application-creator [func-as-string & arg-list]
                                         (->Application func-as-string arg-list))
                      :Cell-range      (fn cell-range-creator [first-cell final-cell]
                                         (->Cell-range first-cell final-cell))
                      :Cell            (fn cell-creator [column row] (->Cell column row))
                      :column          identity
                      :row             int
                      :textual         (fn textual-creator [s] (->Textual s))
                      :function-symbol identity
                      :decimal         (fn decimal-creator [s] (->Decimal (js/parseFloat s)))})

(def user-input->hiccup-tree
  (insta/parser "
  Formula = decimal / textual / (<'='> Expr)
  Expr =  Cell | decimal | Application
  Abbreviation = Cell-range | Expr
  Application = function-symbol <'('> (Abbreviation <','> )* Abbreviation <')'>
  Cell-range   = Cell <':'> Cell
  Cell    = column row
  column = #'[A-Za-z]'
  row = #'[0-9][0-9]?'
  textual = #'[^=].*' / #'\\s*'
  function-symbol   = #'[a-zA-Z_]\\w*'
  decimal = #'-?\\d+(\\.\\d+)?'"))

(defn hiccup-tree->formula-object [tree]
  (insta/transform symbol->creator tree))

(defn get-computed-value [input]
  (when input
    @(r/track
       (fn get-computed-value-track []
         (-> input
             user-input->hiccup-tree
             hiccup-tree->formula-object
             display)))))

(defn cell [{:keys [!user-input
                    !computed-value
                    cell-name]}]
  (let [this-cell-being-edited? (when @!cell-being-edited
                                  (= cell-name @!cell-being-edited))]
    [:td [:input {:read-only       (when-not this-cell-being-edited? true)
                  :value           (if this-cell-being-edited? @!user-input @!computed-value)
                  :on-change       (fn cell-on-change [e]
                                     (reset! !user-input (.. e -target -value)))
                  :on-double-click (fn cell-on-double-click []
                                     (reset! !cached-input @!user-input)
                                     (reset! !cell-being-edited cell-name))
                  :on-blur         (fn cell-on-blur []
                                     (reset! !cached-input nil)
                                     (reset! !cell-being-edited nil))}]]))

(defn cells []
  [:div.gui.cells
   [:div.instructions [:span "Double-click to edit a cell (per assignment instructions)"]]
   [:div.instructions [:span "Formulas begin with an = sign"]]
   [:div.instructions [:span "Example operations: sum, prod, sub, div"]]
   [:div.instructions [:span "Commas between function arguments, no space"]]
   [:div.table-wrapper
    [:table
     [:thead
      (into
        [:tr [:th]]
        (for [column-letter column-labels]
          [:th column-letter]))]
     (into [:tbody]
           (for [row-number (range n-rows)]
             (into [:tr [:td row-number]]
                   (for [column-letter column-labels
                         :let [cell-name (str column-letter row-number)
                               !user-input (r/cursor !app-db [:cell-values cell-name])]]
                     (cell {:cell-name        cell-name
                            :!user-input     !user-input
                            :!computed-value (r/track
                                               (fn computed-value-track []
                                                 (get-computed-value
                                                   (if (= @!cell-being-edited cell-name)
                                                     @!cached-input
                                                     @!user-input))))})))))]]])