(ns sevenguis.util
  (:require
    [reagent.core :as r]
    [clojure.string :as str]))

(defn sqr-distance-2d [[x1 y1] [x2 y2]]
  (let [[d1 d2] (mapv - [x2 y2] [x1 y1])]
    (+
      (js/Math.pow d1 2)
      (js/Math.pow d2 2))))

(defn coords-rel [element event]
  (let [rect (.getBoundingClientRect element)]
    (mapv -
          [(.-clientX event) (.-clientY event)]
          [(.-left rect) (.-top rect)])))

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

(defn range-with-bubble [{:keys [original-value
                                 min
                                 max
                                 value-update
                                 label
                                 bubble-scale
                                 bubble-shift
                                 step
                                 display-precision]}]
  "Bubble scale and bubble shift are finicky constants to get the
  bubble to follow the slider button closely"
  (r/with-let [!value (r/atom original-value)
               !show-bubble? (r/atom false)
               !bubble (atom nil)
               slider-position (fn [] (/ (- @!value min) (- max min)))
               reset-bubble #(when-let [bubble @!bubble]
                               (let [bubble-shift (+ (* (slider-position) bubble-scale) bubble-shift)]
                                 (set! (.-innerHTML bubble)
                                       (cond-> @!value
                                               display-precision js/parseFloat
                                               display-precision (.toFixed display-precision)
                                               true (str label)))
                                 (set! (.. bubble -style -left) (str bubble-shift "px"))))]
    [:<>
     [:input.range {:step          (if step step 1)
                    :type          "range"
                    :value         @!value
                    :min           min
                    :max           max
                    :on-input      (fn range-input [e]
                                     (js/console.log "On input called") ;todo remove
                                     (let [new-user-input (get-event-value e)]
                                       (reset! !value new-user-input)
                                       (value-update new-user-input)
                                       (reset-bubble)))
                    :on-mouse-down (fn on-mouse-down []
                                     (reset-bubble)
                                     (reset! !show-bubble? true))
                    :on-mouse-up   (fn on-mouse-up []
                                     (reset! !show-bubble? false))}]
     [:output.bubble {:hidden (not @!show-bubble?)
                      :ref    (fn set-bubble-ref [ref]
                                (reset! !bubble ref))}]]))

(def canvas (atom nil))

(defn get-text-width [text font]
  (if-not @canvas
    (reset! canvas (.createElement js/document "canvas")))
  (let [context (.getContext @canvas "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn update-suffix-position [suffix-element-atom input font]
  (when @suffix-element-atom
    (let [width (get-text-width input font)
          offset 4]
      (set! (-> @suffix-element-atom .-style .-left)
            (str (+ width offset) "px")))))

(defn input-with-suffix [{:keys [suffix-str
                                 value
                                 placeholder
                                 value-update
                                 font
                                 on-focus
                                 on-blur]} _props]
  (r/with-let [input-element (atom nil)
               suffix-element (atom nil)]
    (update-suffix-position suffix-element value font)
    [:div.input-with-suffix-wrapper
     [:input.input-with-suffix {:ref         #(reset! input-element %)
                                :placeholder placeholder
                                :value       value
                                :on-change   (fn [event]
                                               (let [new-user-input (get-event-value event)]
                                                 (value-update new-user-input)
                                                 (if @suffix-element
                                                   (update-suffix-position suffix-element new-user-input font))))
                                :on-focus    on-focus
                                :on-blur     on-blur}]
     [:span.suffix-element
      {:ref    (fn set-suffix-ref [ref]
                 (reset! suffix-element ref)
                 (update-suffix-position suffix-element value font))
       :hidden (try
                 (empty? value)
                 (catch js/Error _e
                   (println "You may have passed input with suffix an incorrect type (needs string).")))}
      suffix-str]]))