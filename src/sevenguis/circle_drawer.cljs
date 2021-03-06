(ns sevenguis.circle-drawer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(defprotocol Drawable
  (->svg [this settings]))

(defrecord Circle [center-x center-y radius]
  Drawable
  (->svg [_this settings]
    [:circle (merge
               {:cx center-x
                :cy center-y
                :r  radius}
               settings)]))

(def stroke-color "#6e6e6e")

(def fill-color-of-selected "#b5b3b3")

(def stroke-width 1.25)

(def default-radius 25)

(def min-radius 5)

(def max-radius 70)

(defn circle-drawer-buttons [{:keys [undo redo]}]
  [:div.gui-line.button-line
   [:button {:on-click undo} "Undo"]
   [:button {:on-click redo} "Redo"]])

(defn context-menu [{options-and-listeners :options-and-listeners
                     show?                 :show?
                     hide                  :hide
                     [left top]            :position
                     with-cancel?          :with-cancel?
                     cancel-listener       :cancel-listener}]
  "If with-cancel? is a truthy value, a cancel option will be appended to the
  context menu. By default it simply closes the menu, but if you want additional
  actions taken upon cancel, you may include an cancel listener. You need not
  close the menu in your cancel listener; this will be done automatically."
  [:div.context-menu {:className (when show? "show")
                      :style     {:left left
                                  :top  top}}
   (into [:ul]
         (cond->
           (mapv (fn [[option-name listener]]
                   ^{:key option-name} [:li
                                        {:on-click (fn on-option-click [click]
                                                     (listener click)
                                                     (hide))}
                                        option-name])
                 options-and-listeners)
           with-cancel? (conj
                          [:hr.context-menu-rule]
                          ^{:key "Cancel"} [:li.context-menu-cancel
                                            {:on-click (fn on-cancel-click [click]
                                                         (when cancel-listener
                                                           (cancel-listener click))
                                                         (hide))}
                                            "Cancel"])))])
;todo put in util

(defn change-diameter-dialog [{:keys [set-ref-func close selected-circle change-diameter]}]
  [:dialog {:ref set-ref-func}
   [:p (str "Adjust diameter of circle at ("
            (int (:center-x selected-circle))
            ", "
            (int (:center-y selected-circle))
            ")")]
   [:input#diameter-adjuster {:type "range"}]
   [:div.gui-line.button-line
    [:button {:on-click close} "Done"]
    [:button {:on-click close} "Cancel"]]])

(defn change-diameter-dialog2 [{:keys [set-ref-func close selected-circle update-diameter]}]
  [:dialog {:ref set-ref-func}
   [:p (str "Adjust diameter of circle at ("
            (int (:center-x selected-circle))
            ", "
            (int (:center-y selected-circle))
            ")")]
   [:div {:style {:position "relative"}}                    ;todo css
    [util/range-with-bubble {:original-value (:radius selected-circle)
                             :min            min-radius
                             :max            max-radius
                             :value-update   update-diameter
                             :label          nil            ;todo label?
                             :bubble-scale   112
                             :bubble-shift   75
                             :step           0.05
                             :display-precision 2}]]

   [:div.gui-line.button-line
    [:button {:on-click close} "Done"]
    [:button {:on-click close} "Cancel"]]])

(defonce !state (r/atom {:circles        []
                         :mouse-location nil}))

(def !index-of-selected
  (let [get-index-of-selected
        (fn [mouse-location circles]
          (when mouse-location
            (some->> circles
                     (map-indexed (fn [index circle]
                                    {:index                   index
                                     :sqr-distance-from-mouse (util/sqr-distance-2d [(:center-x circle)
                                                                                     (:center-y circle)]
                                                                                    mouse-location)
                                     :radius                  (:radius circle)}))
                     (filter #(< (:sqr-distance-from-mouse %)
                                 (js/Math.pow (:radius %) 2)))
                     (apply min-key :sqr-distance-from-mouse)
                     :index)))]
    (r/track! (fn track-selected []
                (get-index-of-selected (:mouse-location @!state) (:circles @!state)))))) ;todo reduce scope?
(defonce !svg (atom nil))
(defonce !gui (atom nil))
(def undo (fn []))
(def redo (fn []))
(def !show-context-menu? (r/atom false))
(def !context-menu-position (r/atom [100 100]))             ;todo make it start nil
(def !dialog (atom nil))

(defn circle-drawer []
  [:div#circle-drawer.gui {:ref (fn [ref] (reset! !gui ref))}
   [circle-drawer-buttons {:undo undo
                           :redo redo}]
   [:div.gui-line
    (into
      [:svg#circle-svg
       {:ref             (fn set-svg-ref [ref] (reset! !svg ref))
        :on-mouse-leave  (fn svg-on-mouse-leave [_]
                           (when-not @!show-context-menu?
                             (r/rswap! !state assoc :mouse-location nil))) ;todo before I had when no modal or context here.
        :on-mouse-move   (fn svg-on-mouse-move [mouse]      ;todo before I had when no modal or context here.
                           (when (and @!svg
                                      (not @!show-context-menu?))
                             (r/rswap! !state assoc :mouse-location (util/coords-rel @!svg mouse))))
        :on-context-menu (fn svg-on-context-menu [right-click]
                           (when (and @!index-of-selected @!gui)
                             (.preventDefault right-click)
                             (->> right-click (util/coords-rel @!gui) (reset! !context-menu-position))
                             (reset! !show-context-menu? true)))
        :on-click        (fn svg-on-click [click]
                           (if @!show-context-menu?
                             (reset! !show-context-menu? false)
                             (when @!svg
                               (let [[x y] (util/coords-rel @!svg click)]
                                 (r/rswap! !state update-in [:circles] conj (->Circle x y default-radius))))))}]
      (map-indexed
        (fn [index circle]
          ^{:key (str index)} (->svg circle {:fill         (if (= index @!index-of-selected)
                                                             fill-color-of-selected
                                                             "transparent")
                                             :stroke       stroke-color
                                             :stroke-width stroke-width}))
        (:circles @!state)))]                               ;todo reduce scope?

   [context-menu {:options-and-listeners {"Adjust diameter..." (fn adjust-diameter-click [_click]
                                                                 (when-let [dialog @!dialog]
                                                                   (.showModal dialog)))}
                  :position              @!context-menu-position
                  :show?                 @!show-context-menu?
                  :hide                  (fn hide-context-menu []
                                           (reset! !show-context-menu? false))
                  :with-cancel?          true
                  :cancel-listener       (fn cancel-click [click])}]
   [change-diameter-dialog2 {:set-ref-func    (fn [ref] (reset! !dialog ref))
                             :close           (fn close-dialog [click]
                                                (when-let [dialog @!dialog]
                                                  (.close dialog)))
                             :selected-circle (get-in @!state [:circles @!index-of-selected]) ;todo reduce scope?
                             :update-diameter #()}]])


