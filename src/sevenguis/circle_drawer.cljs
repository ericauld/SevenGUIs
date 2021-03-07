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

(defn change-diameter-dialog [{:keys [set-ref-func
                                      close
                                      selected-circle
                                      update-diameter
                                      active?]}]
  [:dialog {:ref set-ref-func}
   [:p (str "Adjust diameter of circle at ("
            (int (:center-x selected-circle))
            ", "
            (int (:center-y selected-circle))
            ")")]
   [:div
    [util/range-with-bubble {:external-value      (when selected-circle
                                                    (:radius selected-circle))
                             :min                 min-radius
                             :max                 max-radius
                             :value-update        update-diameter
                             :label               nil
                             :bubble-scale        112
                             :bubble-shift        10
                             :step                0.05
                             :display-precision   2
                             :listen-for-updates? (not active?)}]]

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
(def !context-menu-position (r/atom nil))
(def !dialog (atom nil))
(def !dialog-open? (r/atom false))
(def close-dialog (fn [_click]
                    (when-let [dialog @!dialog]
                      (.close dialog))
                    (reset! !dialog-open? false)))
(def set-dialog-ref (fn [ref] (reset! !dialog ref)))
(def update-diameter (fn []))

(defn circle-drawer []
  (r/with-let [])
  [:div#circle-drawer.gui {:ref (fn [ref] (reset! !gui ref))}
   [circle-drawer-buttons {:undo undo
                           :redo redo}]
   [:div.gui-line
    (into
      [:svg#circle-svg
       {:ref             (fn set-svg-ref [ref] (reset! !svg ref))
        :on-mouse-leave  (fn svg-on-mouse-leave [_]
                           (when-not @!show-context-menu?
                             (r/rswap! !state assoc :mouse-location nil)))
        :on-mouse-move   (fn svg-on-mouse-move [mouse]
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

   [util/context-menu {:options-and-listeners {"Adjust diameter..." (fn adjust-diameter-click [_click]
                                                                      (when-let [dialog @!dialog]
                                                                        (.showModal dialog)
                                                                        (reset! !dialog-open? true)))}
                       :position              @!context-menu-position
                       :show?                 @!show-context-menu?
                       :hide                  (fn hide-context-menu []
                                                (reset! !show-context-menu? false))
                       :with-cancel?          true
                       :cancel-listener       (fn cancel-click [click])}]
   [change-diameter-dialog {:set-ref-func    set-dialog-ref
                            :close           close-dialog
                            :selected-circle @(r/cursor !state [:circles @!index-of-selected])
                            :update-diameter update-diameter
                            :active?         @!dialog-open?}]])


