[Problem statement](https://eugenkiss.github.io/7guis/)

[Play with the GUIs live](https://ericauld.github.io/SevenGUIs)

[View my video demo of the GUIs](https://www.youtube.com/watch?v=T_hNWevacT4)

This was a fun group of front-end *katas* which I implemented in ClojureScript using the Reagent wrapper around React. It was suggested to me by [Roam Research](www.roamresearch.com). Read more about this and other projects at www.ericauld.net/software.

## Installation

### Development mode
```
npm install
npx shadow-cljs watch app
```
start a ClojureScript REPL
```
npx shadow-cljs browser-repl
```
### Building for production

```
npx shadow-cljs release app
```
