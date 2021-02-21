(ns sevenguis.temperature-converter
  (:require
    [reagent.core :as r]
    [clojure.string :as str]
    [sevenguis.util :as util]))

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

(defn temp-converter []
  (r/with-let
    [celsius-input (r/atom "")
     fahrenheit-input (r/atom "")
     celsius-update (fn [event]
                      (let [input-str (util/get-event-value event)
                            converted-str (-> input-str celsius->fahrenheit)]
                        (reset! celsius-input input-str)
                        (reset! fahrenheit-input converted-str)))
     fahrenheit-update (fn [event]
                         (let [input-str (util/get-event-value event)
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