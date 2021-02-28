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
                      (let [parse-attempt (js/parseFloat new-user-input)
                            convert-to-celsius (scale ->celsius)]
                        (if (js/isNaN parse-attempt)
                          (update-temp nil)
                          (-> parse-attempt convert-to-celsius update-temp))))
      :font         font
      :on-focus     (fn [_]
                      (reset! !input externally-set-temperature)
                      (reset! !focused? true))
      :on-blur      (fn [_]
                      (reset! !focused? false)
                      (reset! !input nil))}]))

(defn temperature-converter []
  (r/with-let [!celsius-temp (r/atom nil)]
    (into [:div.temperature-converter.gui]
          (for [scale scales]
            [temperature-input
             {:scale                      scale
              :externally-set-temperature @(r/track str (when @!celsius-temp
                                                          (let [convert-from-celsius (scale from-celsius)]
                                                            (-> @!celsius-temp convert-from-celsius (.toFixed 2)))))
              :update-temp                #(reset! !celsius-temp %)}]))))
