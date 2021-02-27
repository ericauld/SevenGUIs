(ns sevenguis.temperature-converter
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def state (r/atom {:celsius-str    nil
                    :fahrenheit-str nil}))
(def degrees-fahrenheit-unicode \u2109)
(def degrees-celsius-unicode \u2103)
(def font "20.5px Roboto")

(defn convert-numeric-string
  ([converter s n-decimal-places]
   (let [parse-attempt (js/parseFloat s)]
     (if-not (js/isNaN parse-attempt)
       (-> parse-attempt converter (.toFixed n-decimal-places) str))))
  ([converter s] (convert-numeric-string converter s 2)))

(defn fahrenheit->celsius [fahrenheit-temp]
  (-> fahrenheit-temp (- 32) (* 5) (/ 9)))

(defn celsius->fahrenheit [celsius-temp]
  (-> celsius-temp (* 9) (/ 5) (+ 32)))

(defn temperature-converter []
  (r/with-let [fahrenheit (r/cursor state [:fahrenheit-str])
               celsius (r/cursor state [:celsius-str])]
    [:div.temperature-converter.gui
     [util/input-with-suffix {:suffix-str            degrees-fahrenheit-unicode
                              :value                 @fahrenheit
                              :placeholder           "Fahrenheit"
                              :callback-value-update (fn [new-value]
                                                       (reset! fahrenheit new-value)
                                                       (->> new-value
                                                            (convert-numeric-string fahrenheit->celsius)
                                                            (reset! celsius)))
                              :font                  font}]
     [util/input-with-suffix {:suffix-str            degrees-celsius-unicode
                              :value                 @celsius
                              :placeholder           "Celsius"
                              :callback-value-update (fn [new-value]
                                                       (reset! celsius new-value)
                                                       (->> new-value
                                                            (convert-numeric-string celsius->fahrenheit)
                                                            (reset! fahrenheit)))
                              :font                  font}]]))
