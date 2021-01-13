(ns sevenguis.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [clojure.string :as str]))

(def celsius-str "0")

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
     temperature-celsius (r/atom nil)
     celsius-update (fn [event]
                      (let [input-str (.. event -target -value)
                            converted-str (-> input-str celsius->fahrenheit)]
                        (reset! celsius-input input-str)
                        (reset! fahrenheit-input converted-str)))
     fahrenheit-update (fn [event]
                         (let [input-str (.. event -target -value)
                               converted-str (-> input-str fahrenheit->celsius)]
                           (reset! fahrenheit-input input-str)
                           (reset! celsius-input converted-str)))]
   [:div {:class "gui"}
    [:div {:class "gui-title"} "Temp Converter"]
    [:div {:class "gui-main"}
     [:input {:style     {:width "3.5em"}
              :on-change celsius-update
              :value     @celsius-input}]
     [:div "Celsius" [:b " = "]]
     [:input {:style {:width "3.5em"}
              :on-change fahrenheit-update
              :value @fahrenheit-input}]
     [:div "Fahrenheit"]]]))

(defn counter []
  (r/with-let
    [click-count (r/atom 0)
     increment-click (fn [] (r/rswap! click-count inc))]
    [:div {:class "gui"}
     [:div {:class "gui-title"} "Counter"]
     [:div {:class "gui-main"}
      [:div {:style {:color "purple"}} [:b @click-count]]
      [:button {:style {:outline "none"} :on-click increment-click}
       "Click me!"]]]))

(defn home-page []
  [:div {:style {:text-align "center"}}
   [:div {:class "title" :style {:justify-content "space-around"}}
    [:h2 "Seven GUIs in Reagent"]]
   [:div {:class "wrapper"}
    [counter]
    [temp-converter]
    [:div {:class "gui"} "Three"]
    [:div {:class "gui"} "Four"]
    [:div {:class "gui"} "Five"]
    [:div {:class "gui"} "Six"]
    [:div {:class "gui"} "Seven"]]])


(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
