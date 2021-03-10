(ns sevenguis.temperature-converter
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]
    [clojure.string :as str]))

(def scales #{:fahrenheit :celsius})

(def precision 1)

(def suffix-unicode-symbol {:fahrenheit \u2109 :celsius \u2103})

(def font "20.5px Roboto")

(def ->master {:fahrenheit (fn fahrenheit->celsius [fahrenheit-temp]
                             (-> fahrenheit-temp (- 32) (* 5) (/ 9)))
               :celsius    identity})
(def from-master {:fahrenheit (fn celsius->fahrenheit [celsius-temp]
                                (when celsius-temp
                                  (-> celsius-temp (* 9) (/ 5) (+ 32))))
                  :celsius    identity})

(defonce !app-db (r/atom {:master-value nil
                          :user-input   nil
                          :focus        nil}))

(defn convert-num-str [converter input-str]
  (let [parse-attempt (js/parseFloat input-str)]
    (when-not (js/isNaN parse-attempt)
      (-> parse-attempt converter))))

(defn temperature-input [scale]
  (r/with-let [!focus (r/cursor !app-db [:focus])
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
               update (fn [new-input]
                        (reset! !user-input new-input)
                        (if (= new-input "")
                          (reset! !master-value nil)
                          (when-let [conversion (convert-num-str (scale ->master) new-input)]
                            (reset! !master-value conversion))))]
    [:div {:style    {:display "inline"}
           :on-focus (fn temperature-input-on-focus [_]
                       (reset! !user-input @!computed-value)
                       (reset! !focus scale))
           :on-blur  (fn temperature-input-on-blur []
                       (reset! !focus nil))}
     [util/input-with-suffix {:!value        !displayed-value
                              :value-update update
                              :placeholder  (-> scale name (str/capitalize))
                              :suffix       (scale suffix-unicode-symbol)
                              :hide-suffix? (not @!master-value)
                              :font         font}]]))

(defn temperature-converter []
  [:div.temperature-converter.gui
   [temperature-input :fahrenheit]
   [temperature-input :celsius]])
