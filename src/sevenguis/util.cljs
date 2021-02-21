(ns sevenguis.util)

(defn get-event-value [event]
  (.. event -target -value))