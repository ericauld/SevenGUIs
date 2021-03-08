(ns sevenguis.temperature-converter
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(def scales #{:fahrenheit :celsius})

(def ->celsius {:fahrenheit (fn fahrenheit->celsius [fahrenheit-temp]
                              (-> fahrenheit-temp (- 32) (* 5) (/ 9)))
                :celsius    identity})
(def from-celsius {:fahrenheit (fn celsius->fahrenheit [celsius-temp]
                                 (when celsius-temp
                                   (-> celsius-temp (* 9) (/ 5) (+ 32))))
                   :celsius    identity})

(def suffix-unicode-symbol {:fahrenheit \u2109 :celsius \u2103})

(def font "21.5px Roboto")

(defn temperature-input [{:keys [scale externally-set-temperature update-temp]}]
  (r/with-let [!input (r/atom nil)
               !focused? (r/atom false)]
    [util/input-with-suffix
     {:suffix-str   (scale suffix-unicode-symbol)
      :value        (if @!focused? @!input externally-set-temperature)
      :placeholder  (-> scale name (str/capitalize))
      :value-update (fn [new-user-input]
                      (reset! !input new-user-input)
                      (let [parse-attempt (js/parseFloat new-user-input)]
                        (if (js/isNaN parse-attempt)
                          (update-temp nil)
                          (as-> parse-attempt v
                                ((scale ->celsius) v)
                                (update-temp v)))))
      :font         font
      :on-focus     (fn on-focus [_]
                      (reset! !input externally-set-temperature)
                      (reset! !focused? true))
      :on-blur      (fn on-blur [_]
                      (reset! !focused? false)
                      (reset! !input nil))}]))

(defn temperature-converter []
  (r/with-let [!celsius-temp (r/atom nil)]
    (into [:div.temperature-converter.gui]
          (for [scale scales]
            [temperature-input
             {:scale                      scale
              :externally-set-temperature @(r/track str (when @!celsius-temp
                                                          (as-> @!celsius-temp v
                                                                ((scale from-celsius) v)
                                                                (.toFixed v 2))))
              :update-temp                #(reset! !celsius-temp %)}]))))




























(def canvas (atom nil))

(defn get-text-width2 [text font]
  (if-not @canvas
    (reset! canvas (.createElement js/document "canvas")))
  (let [context (.getContext @canvas "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn update-suffix-position2 [suffix-element-atom input font]
  (when @suffix-element-atom
    (let [width (get-text-width2 input font)
          offset 4]
      (set! (-> @suffix-element-atom .-style .-left)
            (str (+ width offset) "px")))))

(defn input-with-suffix2 [{:keys [suffix-str
                                  value
                                  placeholder
                                  value-update
                                  font
                                  on-focus
                                  on-blur]} _props]
  (r/with-let [input-element (atom nil)
               suffix-element (atom nil)]
    (update-suffix-position2 suffix-element value font)
    [:div.input-with-suffix-wrapper
     [:input.input-with-suffix {:ref         #(reset! input-element %)
                                :placeholder placeholder
                                :value       value
                                :on-change   (fn [event]
                                               (let [new-user-input (util/get-event-value event)]
                                                 (value-update new-user-input)
                                                 (if @suffix-element
                                                   (update-suffix-position2 suffix-element new-user-input font))))
                                :on-focus    on-focus
                                :on-blur     on-blur}]
     [:span.suffix-element
      {:ref    (fn set-suffix-ref [ref]
                 (reset! suffix-element ref)
                 (update-suffix-position2 suffix-element value font))
       :hidden (try
                 (empty? value)
                 (catch js/Error _e
                   (println "You may have passed input with suffix an incorrect type (needs string).")))}
      suffix-str]]))










(def canvas2 (atom nil))

(defn get-text-width3 [text font]
  (if-not @canvas2
    (reset! canvas2 (.createElement js/document "canvas")))
  (let [context (.getContext @canvas2 "2d")]
    (set! (.-font context) font)
    (-> context (.measureText text) (.-width))))

(defn get-suffix-left [text font]
  (let [width (get-text-width3 text font)
        offset 4]
    (str (+ width offset ) "px")))

(defn update-suffix-position3 [!suffix-element input font]
  (when @!suffix-element
    (let [width (get-text-width3 input font)
          offset 4]
      (set! (-> @!suffix-element .-style .-left)
            (str (+ width offset) "px")))))

(def ->master {:fahrenheit (fn fahrenheit->celsius [fahrenheit-temp]
                             (-> fahrenheit-temp (- 32) (* 5) (/ 9)))
               :celsius    identity})
(def from-master {:fahrenheit (fn celsius->fahrenheit [celsius-temp]
                                (when celsius-temp
                                  (-> celsius-temp (* 9) (/ 5) (+ 32))))
                  :celsius    identity})

(def precision 1)
(def scales2 #{:fahrenheit :celsius})

(defonce !app-db (r/atom {:master-value nil
                          :user-input   nil
                          :focus        nil}))

(defn convert-num-str [converter input-str]
  (let [parse-attempt (js/parseFloat input-str)]
    (when-not (js/isNaN parse-attempt)
      (-> parse-attempt converter))))

(defn temperature-input2 [scale]
  (let [!focus (r/cursor !app-db [:focus])
        !focused? (r/track #(= scale @!focus))
        !master-value (r/cursor !app-db [:master-value])
        !user-input (r/cursor !app-db [:user-input])
        !computed-value (r/track (fn [] (some->
                                          ((scale from-master) @!master-value)
                                          (.toFixed precision))))
        !displayed-value (r/track (fn []
                                    (if @!focused?
                                      @!user-input
                                      @!computed-value)))
        !suffix-element (atom nil)]
    [:div.input-with-suffix-wrapper
     [:input.input-with-suffix {:placeholder (-> scale name (str/capitalize))
                                :value       @!displayed-value
                                :on-change   (fn temperature-on-change [e]
                                               (let [new-input (.. e -target -value)]
                                                 (reset! !user-input new-input)
                                                 (if (= new-input "")
                                                   (r/rswap! !app-db assoc :master-value nil)
                                                   (when-let [conversion (convert-num-str (scale ->master) new-input)]
                                                     (reset! !master-value conversion)))))
                                :on-focus    (fn [_e]
                                               (reset! !focus scale)
                                               (r/rswap! !app-db assoc :user-input @!computed-value))
                                :on-blur     #(reset! !focus nil)}]
     [:span.suffix-element {:ref    (fn [ref]
                                      (reset! !suffix-element ref)
                                      (js/console.log "Suffix ref set called")) ;todo remove
                            :hidden (not @!master-value)
                            :style  {:left @(r/track #(get-suffix-left @!displayed-value font))}}
      (scale suffix-unicode-symbol)]]))


(defn temperature-converter2 []
  [:div.temperature-converter.gui
   [temperature-input2 :fahrenheit]
   [temperature-input2 :celsius]])






























