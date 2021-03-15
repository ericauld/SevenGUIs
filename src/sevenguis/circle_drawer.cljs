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

(def min-radius 1)

(def max-radius 240)

(def bubble-scale 112)

(def bubble-shift 10)

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
(def hide-context-menu (fn []
                         (reset! !show-context-menu? false)))
(def cancel-click (fn [click]))                             ;todo maybe have it reset to previous
(def !dialog (atom nil))
(def !dialog-open? (r/atom false))
(def close-dialog (fn [_click]
                    (when-let [dialog @!dialog]
                      (.close dialog))
                    (reset! !dialog-open? false)))
(def set-dialog-ref (fn [ref] (reset! !dialog ref)))
(def update-diameter (fn [new-diameter-str]
                       (r/rswap! !state
                                 assoc-in
                                 [:circles @!index-of-selected :radius]
                                 (js/parseFloat new-diameter-str))))

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
                             (r/rswap! !state assoc :mouse-location nil)))
        :on-mouse-move   (fn svg-on-mouse-move [mouse]
                           (js/console.log (str "Mouse move was called and dialog open was " @!dialog-open?))
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
                       :hide                  hide-context-menu
                       :with-cancel?          true
                       :cancel-listener       cancel-click}]
   [change-diameter-dialog {:set-ref-func    set-dialog-ref
                            :close           close-dialog
                            :selected-circle @(r/cursor !state [:circles @!index-of-selected])
                            :update-diameter update-diameter
                            :active?         @!dialog-open?}]])

(defn old-context-menu [{options-and-listeners :options-and-listeners
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























































(def radius-step 0.05)
(def display-precision 2)

(def circle-settings {:stroke       "#6e6e6e"
                      :stroke-width 1.25})
(def fill-color-of-selected2 "#b5b3b3")

(defprotocol Drawable2
  (draw [this]
        [this settings]))

(defrecord Circle3 [radius center-position]
  Drawable2
  (draw [_this]
    (let [[x y] center-position]
      [:circle {:r  radius
                :cx x
                :cy y}]))
  (draw [_this settings]
    (let [[x y] center-position]
      [:circle (-> {:r  radius
                    :cx x
                    :cy y}
                   (merge settings))])))

(defonce !app-db (r/atom {:circles                      []
                          :modal-menu-visible?          nil
                          :context-menu-visible?        nil
                          :mouse-position-rel-svg       nil
                          :context-menu-position        nil
                          :snapshots                    []
                          :cached-selected-circle-index nil}))

(def !circles (r/cursor !app-db [:circles]))

(def !mouse-position (r/cursor !app-db [:mouse-position-rel-svg]))

(def !context-menu-position2 (r/cursor !app-db [:context-menu-position]))

(def !context-visible? (r/cursor !app-db [:context-menu-visible?]))

(def !modal-visible? (r/cursor !app-db [:modal-menu-visible?]))

(def !cached-selected (r/cursor !app-db [:cached-selected-circle-index]))

(defn index-of-selected [circles mouse-position]
  (let [circles-with-indices-and-square-distances
        (map-indexed
          (fn [index circle]
            (let [sqr-distance-2d (fn [[x1 y1] [x2 y2]]
                                    (let [[d1 d2] (mapv - [x2 y2] [x1 y1])]
                                      (+
                                        (js/Math.pow d1 2)
                                        (js/Math.pow d2 2))))]
              {:index               index
               :sqr-radius          (-> circle :radius (js/Math.pow 2))
               :sqr-dist-from-mouse (sqr-distance-2d mouse-position (:center-position circle))}))
          circles)
        circles-surrounding-mouse (filter #(< (:sqr-dist-from-mouse %)
                                              (:sqr-radius %))
                                          circles-with-indices-and-square-distances)
        index-of-closest-surrounding
        (some->> circles-surrounding-mouse (apply min-key :sqr-dist-from-mouse) :index)]
    index-of-closest-surrounding))

(def !index-of-selected2 (r/track #(if-not (or @!context-visible? @!modal-visible?)
                                     (index-of-selected @!circles @!mouse-position)
                                     @!cached-selected)))

(defn get-set-selected-circle
  ([_k] (when @!index-of-selected2
          (nth @!circles @!index-of-selected2)))
  ([_k v] (when @!index-of-selected2
            (r/rswap! !circles assoc @!index-of-selected2 v))))

(def !selected-circle (r/cursor get-set-selected-circle []))

(def !modal-ref (atom nil))

(def !svg-ref (atom nil))

(def !gui-ref (atom nil))

(defn get-mouse-position-rel-svg [e])

(defn render-circles
  ([circles index-of-selected]
   (render-circles circles index-of-selected nil))
  ([circles index-of-selected settings]
   (map-indexed (fn [index circle]
                  (let [settings-with-fill
                        (merge settings
                               {:fill (if (= index index-of-selected)
                                        fill-color-of-selected2
                                        "transparent")})]
                    (draw circle settings-with-fill)))
                circles)))

(def !render-circles
  (r/track #(render-circles @!circles
                            @!index-of-selected2
                            circle-settings)))

(defn context-menu2 []
  [:div.context-menu {:className (when @!context-visible? "show")
                      :style     {:top  (some-> @!context-menu-position2 (nth 1))
                                  :left (some-> @!context-menu-position2 (nth 0))}}
   [:ul
    [:li {:on-click (fn on-click-context-menu [_]
                      (when-let [modal @!modal-ref]
                        (reset! !context-visible? false)
                        (reset! !modal-visible? true)
                        (.showModal modal)))}
     "Adjust diameter..."]
    [:hr.context-menu-rule]
    [:li.context-menu-cancel {:on-click (fn on-click-cancel [_]
                                          (reset! !context-visible? false))}
     "Cancel"]]])


(defn change-diameter-dialog3 []
  [:dialog {:ref (fn set-modal-ref [ref] (reset! !modal-ref ref))}
   (let [[x y] (when @!selected-circle
                 (->> @!selected-circle :center-position (mapv js/Math.round)))]
     [:p (str "Adjust diameter of circle at (" x "," y ")")])
   [:div]
   [util/range-with-bubble {:!value            (r/cursor !selected-circle [:radius])
                            :min               min-radius
                            :max               max-radius
                            :bubble-scale      bubble-scale
                            :bubble-shift      bubble-shift
                            :display-precision nil
                            :label             nil}]

   [:div.gui-line.button-line
    [:button {:on-click (fn on-click-modal-done [_]
                          (when-let [modal @!modal-ref]
                            (reset! !modal-visible? false)
                            (.close modal)))} "Done"]
    [:button {:on-click (fn on-click-modal-cancel [_]
                          (when-let [modal @!modal-ref]
                            (reset! !modal-visible? false)  ;todo this should revert to before rad changed
                            (.close modal)))} "Cancel"]]])

(defn circle-canvas []
  [:div.gui-line
   (into
     [:svg#circle-svg
      {:ref             (fn set-svg-ref [ref] (reset! !svg-ref ref))
       :on-mouse-leave  (fn svg-mouse-leave [_] (reset! !mouse-position nil))
       :on-mouse-move   (fn svg-mouse-move [e] (reset! !mouse-position (util/coords-rel !svg-ref e)))
       :on-context-menu #(when @!index-of-selected2
                           (.preventDefault %)
                           (reset! !cached-selected @!index-of-selected2)
                           (reset! !context-menu-position2 (util/coords-rel !gui-ref %))
                           (reset! !context-visible? true))
       :on-click        (fn svg-on-click [_]
                          (when-not @!context-visible?      ;todo maybe modal also
                            (r/rswap! !circles conj (->Circle3 default-radius
                                                               @!mouse-position))))}]
     @!render-circles)])

(defn circle-drawer2 []
  [:div#circle-drawer.gui {:ref #(reset! !gui-ref %)}
   [circle-drawer-buttons {:undo nil
                           :redo nil}]
   [circle-canvas]
   [context-menu2 {:options-and-listeners nil
                   :position              nil
                   :show?                 nil
                   :hide                  nil
                   :with-cancel?          nil
                   :cancel-listener       nil}]
   [change-diameter-dialog3 {:set-ref-func    nil
                             :close           nil
                             :selected-circle nil
                             :update-diameter nil
                             :active?         nil}]])