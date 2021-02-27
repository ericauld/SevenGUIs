(ns sevenguis.util
  (:require
    [reagent.core :as r]
    [clojure.string :as str]))


(defn get-event-value [event]
  (.. event -target -value))

(defn button [listener text]
  [:button.button {:on-click listener} text])

(defn modal [{:keys [text set-ref-func listener close-modal button-text]}]
  (let [times-symbol \u00D7
        confirm (fn [_e]
                  (close-modal)
                  (listener))]
    [:dialog {:ref set-ref-func}
     [:div.dialog-close-wrapper
      [:span.dialog-close {:on-click close-modal} times-symbol]]
     [:p text]
     (when button-text [:button {:on-click confirm} button-text])]))

(def canvas (atom nil))

(defn get-text-width [text font]
  (if-not @canvas
    (reset! canvas (.createElement js/document "canvas")))
  (let [context (.getContext @canvas "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn update-suffix-position [suffix-element-atom input font]
  (if @suffix-element-atom
    (let [width (get-text-width input font)
          offset 4]
      (set! (-> @suffix-element-atom .-style .-left)
            (str (+ width offset) "px")))))

(defn input-with-suffix [{:keys [suffix-str
                                 value
                                 placeholder
                                 callback-value-update
                                 font]} _props]
  (r/with-let [input-element (atom nil)
               suffix-element (atom nil)]
    (update-suffix-position suffix-element value font)
    [:div.input-with-suffix-wrapper
     [:input.input-with-suffix {:ref         #(reset! input-element %)
                                :placeholder placeholder
                                :value       value
                                :on-change   (fn [event]
                                               (let [new-user-input (get-event-value event)]
                                                 (callback-value-update new-user-input)
                                                 (if @suffix-element
                                                   (update-suffix-position suffix-element new-user-input font))))}]
     [:span.suffix-element
      {:ref    #(reset! suffix-element %)
       :hidden (empty? value)}
      suffix-str]]))