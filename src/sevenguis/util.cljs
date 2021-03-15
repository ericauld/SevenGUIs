(ns sevenguis.util
  (:require
    [reagent.core :as r]
    [clojure.string :as str]))

(defn sqr-distance-2d [[x1 y1] [x2 y2]]
  (let [[d1 d2] (mapv - [x2 y2] [x1 y1])]
    (+
      (js/Math.pow d1 2)
      (js/Math.pow d2 2))))

(defn coords-rel [!element-ref event]
  (when-let [element @!element-ref]
    (let [rect (.getBoundingClientRect element)]
      (mapv -
            [(.-clientX event) (.-clientY event)]
            [(.-left rect) (.-top rect)]))))

(defn within [tolerance float1 float2]
  (< (js/Math.abs (- float2 float1)) tolerance))

(defn get-event-value [event]
  (.. event -target -value))

(defn button [listener text]
  [:button.button {:on-click listener} text])

(defn modal [{:keys [text set-ref-func listener close-modal button-text]}]
  (let [times-symbol \u00D7
        confirm (fn [_e]
                  (close-modal)
                  (when listener
                    (listener)))]
    [:dialog {:ref set-ref-func}
     [:div.dialog-close-wrapper
      [:span.dialog-close {:on-click close-modal} times-symbol]]
     [:p text]
     (when button-text [:button {:on-click confirm} button-text])]))

(defn context-menu [{options-and-listeners :options-and-listeners
                     show?                 :show?
                     hide                  :hide
                     [left top]            :position
                     with-cancel?          :with-cancel?
                     cancel-listener       :cancel-listener}]
  "If with-cancel? is a truthy value, a cancel option will be appended to the
  context menu. By default it simply closes the menu, but if you want additional
  actions taken upon cancel, you may include an cancel listener. You need not
  close the menu in your cancel listener; this will be done automatically."
  [:div.context-menu {:className (when show? "show")
                      :style     {:left left
                                  :top  top}}
   (into [:ul]
         (cond->
           (mapv (fn [[option-name listener]]
                   ^{:key option-name} [:li
                                        {:on-click (fn on-option-click [click]
                                                     (listener click)
                                                     (hide))}
                                        option-name])
                 options-and-listeners)
           with-cancel? (conj
                          [:hr.context-menu-rule]
                          ^{:key "Cancel"} [:li.context-menu-cancel
                                            {:on-click (fn on-cancel-click [click]
                                                         (when cancel-listener
                                                           (cancel-listener click))
                                                         (hide))}
                                            "Cancel"])))])

(defn get-bubble-left [slider-position bubble-scale bubble-shift]
  (let [left-position (+ (* slider-position bubble-scale) bubble-shift)]
    (str left-position "px")))

(defn range-with-bubble [{:keys [!value
                                 min
                                 max
                                 bubble-scale
                                 bubble-shift
                                 display-precision
                                 label
                                 step]}]
  "Bubble scale and bubble shift are finicky constants to get the
  bubble to follow the slider button closely."
  (r/with-let [!bubble (atom nil)
               !show-bubble? (r/atom false)
               !slider-position (r/track #(/ (- @!value min) (- max min)))
               !bubble-left (r/track #(get-bubble-left @!slider-position bubble-scale bubble-shift))]
    [:div.range-wrap
     [:input.range {:step          (if step step 1)
                    :type          "range"
                    :value         @!value
                    :min           min
                    :max           max
                    :on-input      (fn range-on-input [e] (reset! !value (js/parseFloat (.. e -target -value))))
                    :on-mouse-down (fn range-mouse-down [_] (reset! !show-bubble? true))
                    :on-mouse-up   (fn range-mouse-up [_] (reset! !show-bubble? false))}]
     [:output.bubble {:ref    (fn set-bubble-ref [ref] (reset! !bubble ref))
                      :hidden (not @!show-bubble?)
                      :style  {:left @!bubble-left}}
      (cond-> @!value
              display-precision js/parseFloat
              display-precision (.toFixed display-precision)
              true (str label))]]))

(def canvas (atom nil))

(defn get-text-width [text font]
  (if-not @canvas
    (reset! canvas (.createElement js/document "canvas")))
  (let [context (.getContext @canvas "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn get-suffix-left [text font]
  (let [width (get-text-width text font)
        offset 6]
    (str (+ width offset) "px")))

(defn input-with-suffix [{:keys [!value ;todo move to util
                                 value-update
                                 placeholder
                                 hide-suffix?
                                 font
                                 suffix]}]
  (r/with-let [!suffix-element (atom nil)]
    [:div.input-with-suffix-wrapper
     [:input.input-with-suffix {:value       @!value
                                :on-change   #(value-update (.. % -target -value))
                                :placeholder placeholder}]
     [:span.suffix-element {:ref    #(reset! !suffix-element %)
                            :hidden hide-suffix?
                            :style  {:left @(r/track #(get-suffix-left @!value font))}}
      suffix]]))


(defn filtered-list [{:keys [item->str
                             !items
                             !keep?
                             !focus
                             size
                             !selected-item-index]}]
  [:div
   (into [:select#name-list {:size      size
                             :on-focus  (fn name-list-on-focus [_]
                                          (reset! !focus :name-list))
                             :on-blur   (fn name-list-on-blur [_]
                                          (reset! !focus nil))
                             :on-change (fn select-on-change [e]
                                          (reset! !selected-item-index (as-> e v
                                                                             (.. v -target -value)
                                                                             (js/parseInt v))))}]
         (keep-indexed
           (fn build-option-element [index item]
             (when (and item (@!keep? item))
               ^{:key (str index)}
               [:option.crud-name {:value (str index)} (item->str item)]))
           @!items))])