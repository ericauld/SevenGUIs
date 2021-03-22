(ns sevenguis.circle-drawer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(def bubble-scale 112)

(def bubble-shift 10)

(def default-diameter 40)

(def min-diameter 1)

(def max-diameter 500)

(def diameter-step 1)

(def circle-settings {:stroke       "#6e6e6e"
                      :stroke-width 1.25})

(def fill-color-of-selected "#b5b3b3")

(defprotocol Drawable
  (draw [this]
        [this settings]))

(defrecord Circle [diameter center-position]
  Drawable
  (draw [this]
    (draw this nil))
  (draw [_this settings]
    (let [[x y] center-position]
      [:circle (-> {:r  (/ diameter 2)
                    :cx x
                    :cy y}
                   (merge settings))])))

(defonce !app-db (r/atom {:circles                         []
                          :modal-menu-visible?             nil
                          :context-menu-visible?           nil
                          :mouse-position-rel-svg          nil
                          :context-menu-position           nil
                          :cached-selected-circle-index    nil
                          :cached-selected-circle-diameter nil}))

(def !circles (r/cursor !app-db [:circles]))

(defonce !circle-history (r/atom {:undo-stack []
                                  :redo-stack []}))

(defprotocol Undoable-Command
  (execute [this])
  (undo [this])
  (redo [this]
        "Redo behavior should differ from execute behavior in that upon redo, the redo stack is not cleared"))

(defn add-to-history! [!history command]
  (r/rswap! !history update :undo-stack conj command)
  (r/rswap! !history assoc :redo-stack []))

(defrecord Add-Circle-Command [location diameter !memento]
  Undoable-Command
  (execute [this]
    (reset! !memento @!circles)
    (r/rswap! !circles conj (->Circle diameter location))
    (add-to-history! !circle-history this))
  (redo [_this]
    (r/rswap! !circles conj (->Circle diameter location)))
  (undo [_this]
    (reset! !circles @!memento)))

(defrecord Change-Diameter-Command [index new-diameter !memento]
  Undoable-Command
  (execute [this]
    (reset! !memento @!circles)
    (r/rswap! !circles assoc-in [index :diameter] new-diameter)
    (add-to-history! !circle-history this))
  (redo [_this]
    (r/rswap! !circles assoc-in [index :diameter] new-diameter))
  (undo [_this]
    (reset! !circles @!memento)))

(defn undo-last! [!history]
  (when-let [last-command (last (:undo-stack @!history))]
    (undo last-command)
    (r/rswap! !history update-in [:undo-stack] pop)
    (r/rswap! !history update-in [:redo-stack] conj last-command)))

(defn redo-last! [!history]
  (when-let [last-undo (last (:redo-stack @!history))]
    (redo last-undo)
    (r/rswap! !history update-in [:undo-stack] conj last-undo)
    (r/rswap! !history update-in [:redo-stack] pop)))

(def !mouse-position (r/cursor !app-db [:mouse-position-rel-svg]))

(def !context-menu-position (r/cursor !app-db [:context-menu-position]))

(def !context-visible? (r/cursor !app-db [:context-menu-visible?]))

(def !modal-visible? (r/cursor !app-db [:modal-menu-visible?]))

(def !cached-selected-index (r/cursor !app-db [:cached-selected-circle-index]))

(def !cached-diameter (r/cursor !app-db [:cached-selected-circle-diameter]))

(defn find-index-of-selected-circle [circles mouse-position]
  (when mouse-position
    (let [circles-with-indices-and-square-distances
          (map-indexed
            (fn [index circle]
              (let [sqr-distance-2d (fn [[x1 y1] [x2 y2]]
                                      (let [[d1 d2] (mapv - [x2 y2] [x1 y1])]
                                        (+
                                          (js/Math.pow d1 2)
                                          (js/Math.pow d2 2))))]
                {:index                         index
                 :sqr-radius                    (-> circle :diameter (/ 2) (js/Math.pow 2))
                 :sqr-dist-from-center-to-mouse (sqr-distance-2d mouse-position (:center-position circle))}))
            circles)
          circles-surrounding-mouse (filter #(< (:sqr-dist-from-center-to-mouse %)
                                                (:sqr-radius %))
                                            circles-with-indices-and-square-distances)
          index-of-closest-surrounding
          (some->> circles-surrounding-mouse (apply min-key :sqr-dist-from-center-to-mouse) :index)]
      index-of-closest-surrounding)))

(def !index-of-selected-circle (r/track #(if-not (or @!context-visible? @!modal-visible?)
                                           (find-index-of-selected-circle @!circles @!mouse-position)
                                           @!cached-selected-index)))

(defn get-set-selected-circle
  ([_k] (when @!index-of-selected-circle
          (nth @!circles @!index-of-selected-circle)))
  ([_k v] (when @!index-of-selected-circle
            (r/rswap! !circles assoc @!index-of-selected-circle v))))

(def !selected-circle
  "The cursor is set with a get-set function and an empty path, since the path consists only of the index
  of the selected circle, which is already provided in the get-set function."
  (r/cursor get-set-selected-circle []))

(def !modal-ref (atom nil))

(def !svg-ref (atom nil))

(def !gui-ref (atom nil))

(defn render-circles
  ([circles index-of-selected]
   (render-circles circles index-of-selected nil))
  ([circles index-of-selected settings]
   (map-indexed (fn [index circle]
                  (let [settings-with-fill
                        (merge settings
                               {:fill (if (= index index-of-selected)
                                        fill-color-of-selected
                                        "transparent")})]
                    (draw circle settings-with-fill)))
                circles)))

(def !render-circles
  (r/track #(render-circles @!circles
                            @!index-of-selected-circle
                            circle-settings)))

(defn change-diameter-dialog []
  [:dialog {:ref (fn set-modal-ref [ref] (reset! !modal-ref ref))}
   [:p
    (let [[x y] (when @!selected-circle
                  (->> @!selected-circle :center-position (mapv js/Math.round)))]
      (str "Adjust diameter of circle at (" x "," y ")"))]
   [:div]
   [util/range-with-bubble {:!value       (r/cursor !selected-circle [:diameter])
                            :min          min-diameter
                            :max          max-diameter
                            :bubble-scale bubble-scale
                            :bubble-shift bubble-shift
                            :step         diameter-step}]

   [:div.gui-line.button-line
    [:button {:on-click (fn on-click-modal-done [_]
                          (when-not (= @!cached-diameter (:diameter @!selected-circle))
                            (let [circles-before-diameter-change (assoc-in
                                                                   @!circles
                                                                   [@!index-of-selected-circle :diameter]
                                                                   @!cached-diameter)
                                  change-diameter-command
                                  (map->Change-Diameter-Command
                                    {:index        @!index-of-selected-circle
                                     :new-diameter (:diameter @!selected-circle)
                                     :!memento     (atom circles-before-diameter-change)})]
                              (add-to-history! !circle-history change-diameter-command)))
                          (when-let [modal @!modal-ref]
                            (reset! !modal-visible? false)
                            (.close modal)))}
     "Done"]
    [:button {:on-click (fn on-click-modal-cancel [_]
                          (when-let [modal @!modal-ref]
                            (r/rswap! !selected-circle assoc :diameter @!cached-diameter)
                            (reset! !modal-visible? false)
                            (.close modal)))}
     "Cancel"]]])

(defn circle-canvas []
  [:div.gui-line
   (into
     [:svg#circle-svg
      {:ref             (fn set-svg-ref [ref] (reset! !svg-ref ref))
       :on-mouse-leave  (fn svg-mouse-leave [_] (reset! !mouse-position nil))
       :on-mouse-move   (fn svg-mouse-move [e] (reset! !mouse-position (util/coords-rel !svg-ref e)))
       :on-context-menu (fn svg-on-context-menu [right-click]
                          (when @!index-of-selected-circle
                            (.preventDefault right-click)
                            (reset! !cached-selected-index @!index-of-selected-circle)
                            (reset! !cached-diameter (-> @!circles (nth @!index-of-selected-circle) :diameter))
                            (reset! !context-menu-position (util/coords-rel !gui-ref right-click))
                            (reset! !context-visible? true)))
       :on-click        (fn svg-on-click [_]
                          (when-not @!context-visible?
                            (execute (map->Add-Circle-Command {:location @!mouse-position
                                                               :diameter default-diameter
                                                               :!memento (atom nil)}))))}]
     @!render-circles)])

(defn circle-drawer-buttons []
  [:div.gui-line.button-line
   [:button {:on-click (fn undo-on-click [_] (undo-last! !circle-history))} "Undo"]
   [:button {:on-click (fn redo-on-click [_] (redo-last! !circle-history))} "Redo"]])

(defn circle-drawer []
  [:div#circle-drawer.gui {:ref #(reset! !gui-ref %)}
   [circle-drawer-buttons]
   [circle-canvas]
   [util/context-menu {:options-and-listeners {"Adjust diameter..."
                                               (fn context-menu-adjust-diameter-on-click [_]
                                                 (when-let [modal @!modal-ref]
                                                   (reset! !modal-visible? true)
                                                   (.showModal modal)))}
                       :!visible?             !context-visible?
                       :!position             !context-menu-position
                       :with-cancel?          true}]
   [change-diameter-dialog]])