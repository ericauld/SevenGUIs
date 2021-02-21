(ns sevenguis.circle-drawer
  (:require
    [reagent.core :as r]
    [sevenguis.util :as util]))

(defn sqr-dist-from [[x y] {:keys [cx cy] :as _circle}]
  (+ (-> x (- cx) (js/Math.pow 2))
     (-> y (- cy) (js/Math.pow 2))))

(defn surrounds? [point {rad :rad :as circle}]
  (let [sqr-radius (js/Math.pow rad 2)]
    (-> point (sqr-dist-from circle) (< sqr-radius))))

(defrecord Circle [index cx cy rad])

(defn nearest-surrounding [circles point]
  (let [surrounds-point? (partial surrounds? point)
        sqr-dist-from-point (partial sqr-dist-from point)]
    (apply min-key sqr-dist-from-point (filter surrounds-point? circles))))

(defn locate-element [html-element]
  (let [rect (.getBoundingClientRect html-element)]
    [(.-left rect) (.-top rect)]))

(defn locate-event [event]
  [(.-clientX event)
   (.-clientY event)])

(defn locate-relative-to [html-element event]
  (mapv - (locate-event event) (locate-element html-element)))

(defn circle-drawer []
  (r/with-let
    [default-radius 40
     draw-settings {:stroke       "black"
                    :stroke-width 1.25}
     selected-circle-color "#6bcdff"
     unselected-circle-color "transparent"
     circles (r/atom [])
     selected-circle (r/atom nil)
     selected? #(= @selected-circle %)
     select! #(reset! selected-circle %)
     unselect! #(reset! selected-circle nil)
     reset-radius! (fn [circle-atom new-radius]
                     (r/rswap! circle-atom assoc :rad new-radius)
                     (r/rswap! circles assoc-in [(:index @circle-atom) :rad] new-radius))
     clear-circles! #(reset! circles [])
     undo-list (r/atom [])
     redo-list (r/atom [])
     clear-redo-list! #(reset! redo-list [])
     undo-watcher! (fn [_ _ old _] (r/rswap! undo-list conj old))
     track-edits (fn []
                   (add-watch circles ::undo-watcher undo-watcher!)
                   (add-watch circles ::redo-clearer clear-redo-list!))
     stop-tracking-edits (fn []
                           (remove-watch circles ::undo-watcher)
                           (remove-watch circles ::redo-clearer))
     do-without-tracking (fn [f! a & args]
                           (stop-tracking-edits)
                           (apply f! a args)
                           (track-edits))
     undo! (fn []
             (when-let [prev-state (peek @undo-list)]
               (let [current-state @circles]
                 (do-without-tracking reset! circles prev-state)
                 (r/rswap! undo-list pop)
                 (r/rswap! redo-list conj current-state))))
     redo! (fn []
             (when-let [redo-state (peek @redo-list)]
               (remove-watch circles ::redo-clearer)
               (reset! circles redo-state)
               (add-watch circles ::redo-clearer clear-redo-list!)
               (r/rswap! redo-list pop)))
     context-menu-visible? (r/atom false)
     modal-menu-visible? (r/atom false)
     !svg-element (atom nil)
     !gui-main-element (atom nil)
     context-menu-location (r/atom [0 0])
     show-context-menu-at! (fn [click]
                             ; make sure element has already been rendered
                             (when-let [gui-main-element @!gui-main-element]
                               (->> click
                                    (locate-relative-to gui-main-element)
                                    (reset! context-menu-location))
                               (reset! context-menu-visible? true)))
     add-circle-at-click! (fn [click]
                            ; make sure element has already been rendered
                            (when-let [svg-element @!svg-element]
                              (let [index-of-new-circle (count @circles)
                                    [click-x click-y] (->> click (locate-relative-to svg-element))
                                    new-circle (map->Circle {:index index-of-new-circle
                                                             :cx    click-x
                                                             :cy    click-y
                                                             :rad   default-radius})]
                                (r/rswap! circles conj new-circle)
                                (select! new-circle))))
     update-mouse-location! (fn [mouse]
                              ; make sure element has already been rendered
                              (when-let [svg-element @!svg-element]
                                (let [nearest-surrounding-circle (->> mouse
                                                                      (locate-relative-to svg-element)
                                                                      (nearest-surrounding @circles))]
                                  (if-not (selected? nearest-surrounding-circle)
                                    (select! nearest-surrounding-circle)))))
     hide-menu-or-draw-circle! (fn [click]
                                 (if @context-menu-visible?
                                   (reset! context-menu-visible? false)
                                   (if-not @modal-menu-visible?
                                     (add-circle-at-click! click))))
     _ (track-edits)]
    [:div.gui
     [:div.gui-title "Circle Drawer"]
     [:div#circle-drawer-main.gui-main {:ref #(reset! !gui-main-element %)}
      [:svg {:width           500 :height 600
             :ref             #(reset! !svg-element %)
             :on-click        hide-menu-or-draw-circle!
             :on-context-menu (fn [click] (when (some? @selected-circle)
                                            (.preventDefault click)
                                            (show-context-menu-at! click)))
             :on-mouse-move   #(if-not (or @modal-menu-visible? @context-menu-visible?)
                                 (update-mouse-location! %))
             :on-mouse-leave  #(if-not (or @context-menu-visible? @modal-menu-visible?)
                                 (unselect!))}
       (doall (for [{:keys [index cx cy rad] :as circle} @circles]
                ^{:key index} [:circle.circle
                               (merge draw-settings
                                      {:id   index :cx cx :cy cy :r rad
                                       :fill (if (= circle @selected-circle)
                                               selected-circle-color
                                               unselected-circle-color)})]))]
      [:ul#context-menu
       {:hidden (not @context-menu-visible?)
        :style  {:left (get @context-menu-location 0)
                 :top  (get @context-menu-location 1)}}
       [:li#context-menu-item
        {:on-click #(do (reset! context-menu-visible? false)
                        (reset! modal-menu-visible? true)
                        (r/rswap! undo-list conj @circles)
                        (stop-tracking-edits))}
        "Adjust radius"]]
      [:button {:on-click undo!
                :disabled (empty? @undo-list)}
       "Undo"]
      [:button {:on-click redo!
                :disabled (empty? @redo-list)}
       "Redo"]
      [:button {:on-click clear-circles!
                :disabled (empty? @circles)}
       "Clear all"]
      (if @modal-menu-visible?
        [:div#modal {:on-key-down #(if (-> % .-key (= "Escape"))
                                     (reset! modal-menu-visible? false))
                     :style       {:opacity 1}}
         "Adjust radius"
         [:input {:type      "range" :min 0 :max 400
                  :value     (-> @selected-circle :rad)
                  :on-change (fn [event]
                               (let [user-input (js/parseInt (util/get-event-value event))]
                                 (reset-radius! selected-circle user-input)))
                  :style     {:display "block"}}]
         [:button {:on-click #(do (reset! modal-menu-visible? false)
                                  (update-mouse-location! %)
                                  (if (= @circles (peek @undo-list))
                                    (r/rswap! undo-list pop))
                                  (track-edits))}
          "Done"]])]]))