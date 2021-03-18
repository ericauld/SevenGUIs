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

(defn context-menu [{:keys [options-and-listeners
                            !visible?
                            !position
                            with-cancel?
                            cancel-listener]}]
  "Options-and-listeners is a map with keys strings which are the name of the desired menu option,
  and values the listener which you want executed when the user clicks on that option. Your listener
  doesn't need to bother hiding the context menu; that will be done automatically.
  If with-cancel? is true, a cancel option will be added to the bottom of the context menu.
  If you simply want it to close the context menu, you need not add a listener for it; if you
  want it to do other things as well, add a cancel-listener."
  [:div.context-menu {:className (when @!visible? "show")
                      :style     {:top  (some-> @!position (nth 1))
                                  :left (some-> @!position (nth 0))}}
   (cond-> (into [:ul]
                 (for [[option-name listener] options-and-listeners]
                   [:li {:on-click (fn on-click-context-menu-option [_]
                                     (listener)
                                     (reset! !visible? false))}
                    option-name]))
           with-cancel? (conj [:hr.context-menu-rule]
                              [:li.context-menu-cancel {:on-click (fn on-click-cancel [_]
                                                                    (when cancel-listener
                                                                      (cancel-listener))
                                                                    (reset! !visible? false))}
                               "Cancel"]))])

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
                    :value         (if @!value @!value "")
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

(defn input-with-suffix [{:keys [!value
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