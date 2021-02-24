(ns sevenguis.temperature-converter
  (:require
    [reagent.core :as r]
    [clojure.string :as str]
    [sevenguis.util :as util]
    [goog.string :as gstr]))

(def state (r/atom {:user-input-celsius    nil
                    :user-input-fahrenheit nil}))
(def input-elements (atom {:fahrenheit nil :celsius nil}))
(def suffix-elements (atom {:fahrenheit nil :celsius nil}))

(def !input-element-fahrenheit (atom nil))
(def !input-element-celsius (atom nil))
(def !suffix-element-fahrenheit (atom nil))
(def !suffix-element-celsius (atom nil))
(def canvas (atom nil))

(defn copy-event-value [event atom]
  (->> event util/get-event-value (reset! atom)))

(defn get-text-width [text font]
  (if-not @canvas
    (reset! canvas (.createElement js/document "canvas")))
  (let [context (.getContext @canvas "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn update-suffix [!suffix-element input]
  (when-let [suffix-element @!suffix-element]
    (let [width (get-text-width input "20.5px Roboto")
          offset 4]
      (set! (-> suffix-element .-style .-left) (str (+ width offset) "px"))
      (js/console.log (str "Suffix element set to " width))))) ;todo remove

(defn update-suffix2 [suffix-elements path input]
  (js/console.log (str "Suffix elements ") @suffix-elements)
  (js/console.log (str "path ") path)
  (js/console.log (str "input ") input)
  (if (get-in @suffix-elements path)
    (let [width (get-text-width input "20.5px Roboto")
          offset 4]
      (set! (-> (get-in @suffix-elements path) .-style .-left) (str (+ width offset) "px"))
      (js/console.log (str "Suffix element set to " width))))) ;todo remove

(defn temperature-input [placeholder value-atom symbol input-element suffix-element]
  [:div.temperature-input
   [:input {:ref         #(reset! input-element %)
            :placeholder placeholder
            :value       @value-atom
            :on-change   (fn [event]
                           (copy-event-value event value-atom)
                           (update-suffix suffix-element @value-atom))}]
   [:span.temperature-units
    {:ref    #(reset! suffix-element %)
     :hidden (empty? @value-atom)}
    symbol]])

(defn temperature-input2 [scale-name unicode-symbol-for-units]
  (let [scale-key (keyword (str/lower-case scale-name))
        user-input-key (keyword (str "user-input-" (str/lower-case scale-name)))
        user-input-cursor (r/cursor state [user-input-key])]
    [:div.temperature-input
     [:input {:ref         #(swap! input-elements assoc scale-key %)
              :placeholder (str/capitalize scale-name)
              :value       @user-input-cursor
              :on-change   (fn [event]
                             (copy-event-value event user-input-cursor)
                             (if (get @suffix-elements scale-key)
                               (update-suffix2 suffix-elements [scale-key] @user-input-cursor)))}]
     [:span.temperature-units
      {:ref    (fn [event]
                 (swap! suffix-elements assoc scale-key event))
       :hidden (empty? @user-input-cursor)}
      unicode-symbol-for-units]]))

(defn temperature-converter []
  [:div.temperature-converter
   [temperature-input2 "fahrenheit" \u2109]
   [temperature-input2 "celsius" \u2103]])

