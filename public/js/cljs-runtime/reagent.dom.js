goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__40379 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40380 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40380);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__40381 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40382 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40382);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40381);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40379);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__40386 = arguments.length;
switch (G__40386) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__40387 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40387,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40387,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__40391_40415 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__40392_40416 = null;
var count__40393_40417 = (0);
var i__40394_40418 = (0);
while(true){
if((i__40394_40418 < count__40393_40417)){
var vec__40406_40419 = chunk__40392_40416.cljs$core$IIndexed$_nth$arity$2(null,i__40394_40418);
var container_40420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406_40419,(0),null);
var comp_40421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40406_40419,(1),null);
reagent.dom.re_render_component(comp_40421,container_40420);


var G__40422 = seq__40391_40415;
var G__40423 = chunk__40392_40416;
var G__40424 = count__40393_40417;
var G__40425 = (i__40394_40418 + (1));
seq__40391_40415 = G__40422;
chunk__40392_40416 = G__40423;
count__40393_40417 = G__40424;
i__40394_40418 = G__40425;
continue;
} else {
var temp__5735__auto___40427 = cljs.core.seq(seq__40391_40415);
if(temp__5735__auto___40427){
var seq__40391_40428__$1 = temp__5735__auto___40427;
if(cljs.core.chunked_seq_QMARK_(seq__40391_40428__$1)){
var c__4556__auto___40429 = cljs.core.chunk_first(seq__40391_40428__$1);
var G__40430 = cljs.core.chunk_rest(seq__40391_40428__$1);
var G__40431 = c__4556__auto___40429;
var G__40432 = cljs.core.count(c__4556__auto___40429);
var G__40433 = (0);
seq__40391_40415 = G__40430;
chunk__40392_40416 = G__40431;
count__40393_40417 = G__40432;
i__40394_40418 = G__40433;
continue;
} else {
var vec__40409_40434 = cljs.core.first(seq__40391_40428__$1);
var container_40435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40409_40434,(0),null);
var comp_40436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40409_40434,(1),null);
reagent.dom.re_render_component(comp_40436,container_40435);


var G__40438 = cljs.core.next(seq__40391_40428__$1);
var G__40439 = null;
var G__40440 = (0);
var G__40441 = (0);
seq__40391_40415 = G__40438;
chunk__40392_40416 = G__40439;
count__40393_40417 = G__40440;
i__40394_40418 = G__40441;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
