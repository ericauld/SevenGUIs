goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36465 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36465(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36466 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36466(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35893 = coll;
var G__35894 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35893,G__35894) : shadow.dom.lazy_native_coll_seq.call(null,G__35893,G__35894));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35898 = arguments.length;
switch (G__35898) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35903 = arguments.length;
switch (G__35903) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35908 = arguments.length;
switch (G__35908) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35922 = arguments.length;
switch (G__35922) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35928 = arguments.length;
switch (G__35928) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35931 = arguments.length;
switch (G__35931) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35941){if((e35941 instanceof Object)){
var e = e35941;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35941;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35947 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35948 = null;
var count__35949 = (0);
var i__35950 = (0);
while(true){
if((i__35950 < count__35949)){
var el = chunk__35948.cljs$core$IIndexed$_nth$arity$2(null,i__35950);
var handler_36495__$1 = ((function (seq__35947,chunk__35948,count__35949,i__35950,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35947,chunk__35948,count__35949,i__35950,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36495__$1);


var G__36498 = seq__35947;
var G__36499 = chunk__35948;
var G__36500 = count__35949;
var G__36501 = (i__35950 + (1));
seq__35947 = G__36498;
chunk__35948 = G__36499;
count__35949 = G__36500;
i__35950 = G__36501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35947);
if(temp__5735__auto__){
var seq__35947__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35947__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35947__$1);
var G__36503 = cljs.core.chunk_rest(seq__35947__$1);
var G__36504 = c__4556__auto__;
var G__36505 = cljs.core.count(c__4556__auto__);
var G__36506 = (0);
seq__35947 = G__36503;
chunk__35948 = G__36504;
count__35949 = G__36505;
i__35950 = G__36506;
continue;
} else {
var el = cljs.core.first(seq__35947__$1);
var handler_36507__$1 = ((function (seq__35947,chunk__35948,count__35949,i__35950,el,seq__35947__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35947,chunk__35948,count__35949,i__35950,el,seq__35947__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36507__$1);


var G__36509 = cljs.core.next(seq__35947__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__35947 = G__36509;
chunk__35948 = G__36510;
count__35949 = G__36511;
i__35950 = G__36512;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35958 = arguments.length;
switch (G__35958) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35967 = cljs.core.seq(events);
var chunk__35968 = null;
var count__35969 = (0);
var i__35970 = (0);
while(true){
if((i__35970 < count__35969)){
var vec__35983 = chunk__35968.cljs$core$IIndexed$_nth$arity$2(null,i__35970);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35983,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36518 = seq__35967;
var G__36519 = chunk__35968;
var G__36520 = count__35969;
var G__36521 = (i__35970 + (1));
seq__35967 = G__36518;
chunk__35968 = G__36519;
count__35969 = G__36520;
i__35970 = G__36521;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35967);
if(temp__5735__auto__){
var seq__35967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35967__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35967__$1);
var G__36524 = cljs.core.chunk_rest(seq__35967__$1);
var G__36525 = c__4556__auto__;
var G__36526 = cljs.core.count(c__4556__auto__);
var G__36527 = (0);
seq__35967 = G__36524;
chunk__35968 = G__36525;
count__35969 = G__36526;
i__35970 = G__36527;
continue;
} else {
var vec__35986 = cljs.core.first(seq__35967__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36531 = cljs.core.next(seq__35967__$1);
var G__36532 = null;
var G__36533 = (0);
var G__36534 = (0);
seq__35967 = G__36531;
chunk__35968 = G__36532;
count__35969 = G__36533;
i__35970 = G__36534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35990 = cljs.core.seq(styles);
var chunk__35991 = null;
var count__35992 = (0);
var i__35993 = (0);
while(true){
if((i__35993 < count__35992)){
var vec__36001 = chunk__35991.cljs$core$IIndexed$_nth$arity$2(null,i__35993);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36537 = seq__35990;
var G__36538 = chunk__35991;
var G__36539 = count__35992;
var G__36540 = (i__35993 + (1));
seq__35990 = G__36537;
chunk__35991 = G__36538;
count__35992 = G__36539;
i__35993 = G__36540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35990);
if(temp__5735__auto__){
var seq__35990__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35990__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35990__$1);
var G__36541 = cljs.core.chunk_rest(seq__35990__$1);
var G__36542 = c__4556__auto__;
var G__36543 = cljs.core.count(c__4556__auto__);
var G__36544 = (0);
seq__35990 = G__36541;
chunk__35991 = G__36542;
count__35992 = G__36543;
i__35993 = G__36544;
continue;
} else {
var vec__36007 = cljs.core.first(seq__35990__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36007,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36007,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36545 = cljs.core.next(seq__35990__$1);
var G__36546 = null;
var G__36547 = (0);
var G__36548 = (0);
seq__35990 = G__36545;
chunk__35991 = G__36546;
count__35992 = G__36547;
i__35993 = G__36548;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36015_36550 = key;
var G__36015_36551__$1 = (((G__36015_36550 instanceof cljs.core.Keyword))?G__36015_36550.fqn:null);
switch (G__36015_36551__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36557 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36557,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36557,"aria-");
}
})())){
el.setAttribute(ks_36557,value);
} else {
(el[ks_36557] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36032){
var map__36033 = p__36032;
var map__36033__$1 = (((((!((map__36033 == null))))?(((((map__36033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36033):map__36033);
var props = map__36033__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36033__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36037 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36037,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36037,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36037,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36041 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36041,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36041;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36044 = arguments.length;
switch (G__36044) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36046){
var vec__36048 = p__36046;
var seq__36049 = cljs.core.seq(vec__36048);
var first__36050 = cljs.core.first(seq__36049);
var seq__36049__$1 = cljs.core.next(seq__36049);
var nn = first__36050;
var first__36050__$1 = cljs.core.first(seq__36049__$1);
var seq__36049__$2 = cljs.core.next(seq__36049__$1);
var np = first__36050__$1;
var nc = seq__36049__$2;
var node = vec__36048;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36051 = nn;
var G__36052 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36051,G__36052) : create_fn.call(null,G__36051,G__36052));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36054 = nn;
var G__36055 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36054,G__36055) : create_fn.call(null,G__36054,G__36055));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36057 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(1),null);
var seq__36061_36574 = cljs.core.seq(node_children);
var chunk__36062_36575 = null;
var count__36063_36576 = (0);
var i__36064_36577 = (0);
while(true){
if((i__36064_36577 < count__36063_36576)){
var child_struct_36582 = chunk__36062_36575.cljs$core$IIndexed$_nth$arity$2(null,i__36064_36577);
var children_36583 = shadow.dom.dom_node(child_struct_36582);
if(cljs.core.seq_QMARK_(children_36583)){
var seq__36091_36584 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36583));
var chunk__36093_36585 = null;
var count__36094_36586 = (0);
var i__36095_36587 = (0);
while(true){
if((i__36095_36587 < count__36094_36586)){
var child_36588 = chunk__36093_36585.cljs$core$IIndexed$_nth$arity$2(null,i__36095_36587);
if(cljs.core.truth_(child_36588)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36588);


var G__36589 = seq__36091_36584;
var G__36590 = chunk__36093_36585;
var G__36591 = count__36094_36586;
var G__36592 = (i__36095_36587 + (1));
seq__36091_36584 = G__36589;
chunk__36093_36585 = G__36590;
count__36094_36586 = G__36591;
i__36095_36587 = G__36592;
continue;
} else {
var G__36593 = seq__36091_36584;
var G__36594 = chunk__36093_36585;
var G__36595 = count__36094_36586;
var G__36596 = (i__36095_36587 + (1));
seq__36091_36584 = G__36593;
chunk__36093_36585 = G__36594;
count__36094_36586 = G__36595;
i__36095_36587 = G__36596;
continue;
}
} else {
var temp__5735__auto___36597 = cljs.core.seq(seq__36091_36584);
if(temp__5735__auto___36597){
var seq__36091_36598__$1 = temp__5735__auto___36597;
if(cljs.core.chunked_seq_QMARK_(seq__36091_36598__$1)){
var c__4556__auto___36599 = cljs.core.chunk_first(seq__36091_36598__$1);
var G__36600 = cljs.core.chunk_rest(seq__36091_36598__$1);
var G__36601 = c__4556__auto___36599;
var G__36602 = cljs.core.count(c__4556__auto___36599);
var G__36603 = (0);
seq__36091_36584 = G__36600;
chunk__36093_36585 = G__36601;
count__36094_36586 = G__36602;
i__36095_36587 = G__36603;
continue;
} else {
var child_36604 = cljs.core.first(seq__36091_36598__$1);
if(cljs.core.truth_(child_36604)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36604);


var G__36605 = cljs.core.next(seq__36091_36598__$1);
var G__36606 = null;
var G__36607 = (0);
var G__36608 = (0);
seq__36091_36584 = G__36605;
chunk__36093_36585 = G__36606;
count__36094_36586 = G__36607;
i__36095_36587 = G__36608;
continue;
} else {
var G__36609 = cljs.core.next(seq__36091_36598__$1);
var G__36610 = null;
var G__36611 = (0);
var G__36612 = (0);
seq__36091_36584 = G__36609;
chunk__36093_36585 = G__36610;
count__36094_36586 = G__36611;
i__36095_36587 = G__36612;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36583);
}


var G__36613 = seq__36061_36574;
var G__36614 = chunk__36062_36575;
var G__36615 = count__36063_36576;
var G__36616 = (i__36064_36577 + (1));
seq__36061_36574 = G__36613;
chunk__36062_36575 = G__36614;
count__36063_36576 = G__36615;
i__36064_36577 = G__36616;
continue;
} else {
var temp__5735__auto___36617 = cljs.core.seq(seq__36061_36574);
if(temp__5735__auto___36617){
var seq__36061_36618__$1 = temp__5735__auto___36617;
if(cljs.core.chunked_seq_QMARK_(seq__36061_36618__$1)){
var c__4556__auto___36619 = cljs.core.chunk_first(seq__36061_36618__$1);
var G__36620 = cljs.core.chunk_rest(seq__36061_36618__$1);
var G__36621 = c__4556__auto___36619;
var G__36622 = cljs.core.count(c__4556__auto___36619);
var G__36623 = (0);
seq__36061_36574 = G__36620;
chunk__36062_36575 = G__36621;
count__36063_36576 = G__36622;
i__36064_36577 = G__36623;
continue;
} else {
var child_struct_36624 = cljs.core.first(seq__36061_36618__$1);
var children_36625 = shadow.dom.dom_node(child_struct_36624);
if(cljs.core.seq_QMARK_(children_36625)){
var seq__36106_36626 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36625));
var chunk__36108_36627 = null;
var count__36109_36628 = (0);
var i__36110_36629 = (0);
while(true){
if((i__36110_36629 < count__36109_36628)){
var child_36634 = chunk__36108_36627.cljs$core$IIndexed$_nth$arity$2(null,i__36110_36629);
if(cljs.core.truth_(child_36634)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36634);


var G__36635 = seq__36106_36626;
var G__36636 = chunk__36108_36627;
var G__36637 = count__36109_36628;
var G__36638 = (i__36110_36629 + (1));
seq__36106_36626 = G__36635;
chunk__36108_36627 = G__36636;
count__36109_36628 = G__36637;
i__36110_36629 = G__36638;
continue;
} else {
var G__36639 = seq__36106_36626;
var G__36640 = chunk__36108_36627;
var G__36641 = count__36109_36628;
var G__36642 = (i__36110_36629 + (1));
seq__36106_36626 = G__36639;
chunk__36108_36627 = G__36640;
count__36109_36628 = G__36641;
i__36110_36629 = G__36642;
continue;
}
} else {
var temp__5735__auto___36643__$1 = cljs.core.seq(seq__36106_36626);
if(temp__5735__auto___36643__$1){
var seq__36106_36644__$1 = temp__5735__auto___36643__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36106_36644__$1)){
var c__4556__auto___36645 = cljs.core.chunk_first(seq__36106_36644__$1);
var G__36646 = cljs.core.chunk_rest(seq__36106_36644__$1);
var G__36647 = c__4556__auto___36645;
var G__36648 = cljs.core.count(c__4556__auto___36645);
var G__36649 = (0);
seq__36106_36626 = G__36646;
chunk__36108_36627 = G__36647;
count__36109_36628 = G__36648;
i__36110_36629 = G__36649;
continue;
} else {
var child_36650 = cljs.core.first(seq__36106_36644__$1);
if(cljs.core.truth_(child_36650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36650);


var G__36651 = cljs.core.next(seq__36106_36644__$1);
var G__36652 = null;
var G__36653 = (0);
var G__36654 = (0);
seq__36106_36626 = G__36651;
chunk__36108_36627 = G__36652;
count__36109_36628 = G__36653;
i__36110_36629 = G__36654;
continue;
} else {
var G__36655 = cljs.core.next(seq__36106_36644__$1);
var G__36656 = null;
var G__36657 = (0);
var G__36658 = (0);
seq__36106_36626 = G__36655;
chunk__36108_36627 = G__36656;
count__36109_36628 = G__36657;
i__36110_36629 = G__36658;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36625);
}


var G__36659 = cljs.core.next(seq__36061_36618__$1);
var G__36660 = null;
var G__36661 = (0);
var G__36662 = (0);
seq__36061_36574 = G__36659;
chunk__36062_36575 = G__36660;
count__36063_36576 = G__36661;
i__36064_36577 = G__36662;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36121 = cljs.core.seq(node);
var chunk__36122 = null;
var count__36123 = (0);
var i__36124 = (0);
while(true){
if((i__36124 < count__36123)){
var n = chunk__36122.cljs$core$IIndexed$_nth$arity$2(null,i__36124);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36666 = seq__36121;
var G__36667 = chunk__36122;
var G__36668 = count__36123;
var G__36669 = (i__36124 + (1));
seq__36121 = G__36666;
chunk__36122 = G__36667;
count__36123 = G__36668;
i__36124 = G__36669;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36121);
if(temp__5735__auto__){
var seq__36121__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36121__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36121__$1);
var G__36670 = cljs.core.chunk_rest(seq__36121__$1);
var G__36671 = c__4556__auto__;
var G__36672 = cljs.core.count(c__4556__auto__);
var G__36673 = (0);
seq__36121 = G__36670;
chunk__36122 = G__36671;
count__36123 = G__36672;
i__36124 = G__36673;
continue;
} else {
var n = cljs.core.first(seq__36121__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36675 = cljs.core.next(seq__36121__$1);
var G__36676 = null;
var G__36677 = (0);
var G__36678 = (0);
seq__36121 = G__36675;
chunk__36122 = G__36676;
count__36123 = G__36677;
i__36124 = G__36678;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36135 = arguments.length;
switch (G__36135) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36142 = arguments.length;
switch (G__36142) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36148 = arguments.length;
switch (G__36148) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36697 = arguments.length;
var i__4737__auto___36698 = (0);
while(true){
if((i__4737__auto___36698 < len__4736__auto___36697)){
args__4742__auto__.push((arguments[i__4737__auto___36698]));

var G__36699 = (i__4737__auto___36698 + (1));
i__4737__auto___36698 = G__36699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36154_36700 = cljs.core.seq(nodes);
var chunk__36155_36701 = null;
var count__36156_36702 = (0);
var i__36157_36703 = (0);
while(true){
if((i__36157_36703 < count__36156_36702)){
var node_36704 = chunk__36155_36701.cljs$core$IIndexed$_nth$arity$2(null,i__36157_36703);
fragment.appendChild(shadow.dom._to_dom(node_36704));


var G__36705 = seq__36154_36700;
var G__36706 = chunk__36155_36701;
var G__36707 = count__36156_36702;
var G__36708 = (i__36157_36703 + (1));
seq__36154_36700 = G__36705;
chunk__36155_36701 = G__36706;
count__36156_36702 = G__36707;
i__36157_36703 = G__36708;
continue;
} else {
var temp__5735__auto___36710 = cljs.core.seq(seq__36154_36700);
if(temp__5735__auto___36710){
var seq__36154_36711__$1 = temp__5735__auto___36710;
if(cljs.core.chunked_seq_QMARK_(seq__36154_36711__$1)){
var c__4556__auto___36712 = cljs.core.chunk_first(seq__36154_36711__$1);
var G__36714 = cljs.core.chunk_rest(seq__36154_36711__$1);
var G__36715 = c__4556__auto___36712;
var G__36716 = cljs.core.count(c__4556__auto___36712);
var G__36717 = (0);
seq__36154_36700 = G__36714;
chunk__36155_36701 = G__36715;
count__36156_36702 = G__36716;
i__36157_36703 = G__36717;
continue;
} else {
var node_36718 = cljs.core.first(seq__36154_36711__$1);
fragment.appendChild(shadow.dom._to_dom(node_36718));


var G__36719 = cljs.core.next(seq__36154_36711__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36154_36700 = G__36719;
chunk__36155_36701 = G__36720;
count__36156_36702 = G__36721;
i__36157_36703 = G__36722;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36153){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36153));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36160_36723 = cljs.core.seq(scripts);
var chunk__36162_36724 = null;
var count__36163_36725 = (0);
var i__36164_36726 = (0);
while(true){
if((i__36164_36726 < count__36163_36725)){
var vec__36176_36729 = chunk__36162_36724.cljs$core$IIndexed$_nth$arity$2(null,i__36164_36726);
var script_tag_36730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176_36729,(0),null);
var script_body_36731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176_36729,(1),null);
eval(script_body_36731);


var G__36735 = seq__36160_36723;
var G__36736 = chunk__36162_36724;
var G__36737 = count__36163_36725;
var G__36738 = (i__36164_36726 + (1));
seq__36160_36723 = G__36735;
chunk__36162_36724 = G__36736;
count__36163_36725 = G__36737;
i__36164_36726 = G__36738;
continue;
} else {
var temp__5735__auto___36739 = cljs.core.seq(seq__36160_36723);
if(temp__5735__auto___36739){
var seq__36160_36742__$1 = temp__5735__auto___36739;
if(cljs.core.chunked_seq_QMARK_(seq__36160_36742__$1)){
var c__4556__auto___36743 = cljs.core.chunk_first(seq__36160_36742__$1);
var G__36744 = cljs.core.chunk_rest(seq__36160_36742__$1);
var G__36745 = c__4556__auto___36743;
var G__36746 = cljs.core.count(c__4556__auto___36743);
var G__36747 = (0);
seq__36160_36723 = G__36744;
chunk__36162_36724 = G__36745;
count__36163_36725 = G__36746;
i__36164_36726 = G__36747;
continue;
} else {
var vec__36180_36748 = cljs.core.first(seq__36160_36742__$1);
var script_tag_36749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36180_36748,(0),null);
var script_body_36750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36180_36748,(1),null);
eval(script_body_36750);


var G__36752 = cljs.core.next(seq__36160_36742__$1);
var G__36753 = null;
var G__36754 = (0);
var G__36755 = (0);
seq__36160_36723 = G__36752;
chunk__36162_36724 = G__36753;
count__36163_36725 = G__36754;
i__36164_36726 = G__36755;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36185){
var vec__36186 = p__36185;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36193 = arguments.length;
switch (G__36193) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36201 = cljs.core.seq(style_keys);
var chunk__36202 = null;
var count__36203 = (0);
var i__36204 = (0);
while(true){
if((i__36204 < count__36203)){
var it = chunk__36202.cljs$core$IIndexed$_nth$arity$2(null,i__36204);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36774 = seq__36201;
var G__36775 = chunk__36202;
var G__36776 = count__36203;
var G__36777 = (i__36204 + (1));
seq__36201 = G__36774;
chunk__36202 = G__36775;
count__36203 = G__36776;
i__36204 = G__36777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36201);
if(temp__5735__auto__){
var seq__36201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36201__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36201__$1);
var G__36781 = cljs.core.chunk_rest(seq__36201__$1);
var G__36782 = c__4556__auto__;
var G__36783 = cljs.core.count(c__4556__auto__);
var G__36784 = (0);
seq__36201 = G__36781;
chunk__36202 = G__36782;
count__36203 = G__36783;
i__36204 = G__36784;
continue;
} else {
var it = cljs.core.first(seq__36201__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36785 = cljs.core.next(seq__36201__$1);
var G__36786 = null;
var G__36787 = (0);
var G__36788 = (0);
seq__36201 = G__36785;
chunk__36202 = G__36786;
count__36203 = G__36787;
i__36204 = G__36788;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36211,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36224 = k36211;
var G__36224__$1 = (((G__36224 instanceof cljs.core.Keyword))?G__36224.fqn:null);
switch (G__36224__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36211,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36228){
var vec__36230 = p__36228;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36210){
var self__ = this;
var G__36210__$1 = this;
return (new cljs.core.RecordIter((0),G__36210__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36212,other36213){
var self__ = this;
var this36212__$1 = this;
return (((!((other36213 == null)))) && ((this36212__$1.constructor === other36213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36212__$1.x,other36213.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36212__$1.y,other36213.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36212__$1.__extmap,other36213.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36210){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36249 = cljs.core.keyword_identical_QMARK_;
var expr__36250 = k__4388__auto__;
if(cljs.core.truth_((pred__36249.cljs$core$IFn$_invoke$arity$2 ? pred__36249.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36250) : pred__36249.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36250)))){
return (new shadow.dom.Coordinate(G__36210,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36249.cljs$core$IFn$_invoke$arity$2 ? pred__36249.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36250) : pred__36249.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36250)))){
return (new shadow.dom.Coordinate(self__.x,G__36210,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36210),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36210){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36210,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36216){
var extmap__4419__auto__ = (function (){var G__36256 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36216,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36216)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36256);
} else {
return G__36256;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36216),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36216),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36261,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36265 = k36261;
var G__36265__$1 = (((G__36265 instanceof cljs.core.Keyword))?G__36265.fqn:null);
switch (G__36265__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36261,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36267){
var vec__36268 = p__36267;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36268,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36268,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36260){
var self__ = this;
var G__36260__$1 = this;
return (new cljs.core.RecordIter((0),G__36260__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36262,other36263){
var self__ = this;
var this36262__$1 = this;
return (((!((other36263 == null)))) && ((this36262__$1.constructor === other36263.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36262__$1.w,other36263.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36262__$1.h,other36263.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36262__$1.__extmap,other36263.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36260){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36278 = cljs.core.keyword_identical_QMARK_;
var expr__36279 = k__4388__auto__;
if(cljs.core.truth_((pred__36278.cljs$core$IFn$_invoke$arity$2 ? pred__36278.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36279) : pred__36278.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36279)))){
return (new shadow.dom.Size(G__36260,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36278.cljs$core$IFn$_invoke$arity$2 ? pred__36278.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36279) : pred__36278.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36279)))){
return (new shadow.dom.Size(self__.w,G__36260,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36260),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36260){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36260,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36264){
var extmap__4419__auto__ = (function (){var G__36281 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36264,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36264)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36281);
} else {
return G__36281;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36264),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36264),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36840 = (i + (1));
var G__36841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36840;
ret = G__36841;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36303){
var vec__36305 = p__36303;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36313 = arguments.length;
switch (G__36313) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36852 = ps;
var G__36853 = (i + (1));
el__$1 = G__36852;
i = G__36853;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36342 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36342,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36342,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36342,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36345_36859 = cljs.core.seq(props);
var chunk__36346_36860 = null;
var count__36347_36861 = (0);
var i__36348_36862 = (0);
while(true){
if((i__36348_36862 < count__36347_36861)){
var vec__36357_36863 = chunk__36346_36860.cljs$core$IIndexed$_nth$arity$2(null,i__36348_36862);
var k_36864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36357_36863,(0),null);
var v_36865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36357_36863,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36864);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36864),v_36865);


var G__36867 = seq__36345_36859;
var G__36868 = chunk__36346_36860;
var G__36869 = count__36347_36861;
var G__36870 = (i__36348_36862 + (1));
seq__36345_36859 = G__36867;
chunk__36346_36860 = G__36868;
count__36347_36861 = G__36869;
i__36348_36862 = G__36870;
continue;
} else {
var temp__5735__auto___36872 = cljs.core.seq(seq__36345_36859);
if(temp__5735__auto___36872){
var seq__36345_36873__$1 = temp__5735__auto___36872;
if(cljs.core.chunked_seq_QMARK_(seq__36345_36873__$1)){
var c__4556__auto___36874 = cljs.core.chunk_first(seq__36345_36873__$1);
var G__36875 = cljs.core.chunk_rest(seq__36345_36873__$1);
var G__36876 = c__4556__auto___36874;
var G__36877 = cljs.core.count(c__4556__auto___36874);
var G__36878 = (0);
seq__36345_36859 = G__36875;
chunk__36346_36860 = G__36876;
count__36347_36861 = G__36877;
i__36348_36862 = G__36878;
continue;
} else {
var vec__36362_36880 = cljs.core.first(seq__36345_36873__$1);
var k_36881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362_36880,(0),null);
var v_36882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362_36880,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36881);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36881),v_36882);


var G__36885 = cljs.core.next(seq__36345_36873__$1);
var G__36886 = null;
var G__36887 = (0);
var G__36888 = (0);
seq__36345_36859 = G__36885;
chunk__36346_36860 = G__36886;
count__36347_36861 = G__36887;
i__36348_36862 = G__36888;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36367 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36367,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36367,(1),null);
var seq__36370_36890 = cljs.core.seq(node_children);
var chunk__36372_36891 = null;
var count__36373_36892 = (0);
var i__36374_36893 = (0);
while(true){
if((i__36374_36893 < count__36373_36892)){
var child_struct_36894 = chunk__36372_36891.cljs$core$IIndexed$_nth$arity$2(null,i__36374_36893);
if((!((child_struct_36894 == null)))){
if(typeof child_struct_36894 === 'string'){
var text_36896 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36896),child_struct_36894].join(''));
} else {
var children_36898 = shadow.dom.svg_node(child_struct_36894);
if(cljs.core.seq_QMARK_(children_36898)){
var seq__36397_36899 = cljs.core.seq(children_36898);
var chunk__36399_36900 = null;
var count__36400_36901 = (0);
var i__36401_36902 = (0);
while(true){
if((i__36401_36902 < count__36400_36901)){
var child_36904 = chunk__36399_36900.cljs$core$IIndexed$_nth$arity$2(null,i__36401_36902);
if(cljs.core.truth_(child_36904)){
node.appendChild(child_36904);


var G__36905 = seq__36397_36899;
var G__36906 = chunk__36399_36900;
var G__36907 = count__36400_36901;
var G__36908 = (i__36401_36902 + (1));
seq__36397_36899 = G__36905;
chunk__36399_36900 = G__36906;
count__36400_36901 = G__36907;
i__36401_36902 = G__36908;
continue;
} else {
var G__36910 = seq__36397_36899;
var G__36911 = chunk__36399_36900;
var G__36912 = count__36400_36901;
var G__36913 = (i__36401_36902 + (1));
seq__36397_36899 = G__36910;
chunk__36399_36900 = G__36911;
count__36400_36901 = G__36912;
i__36401_36902 = G__36913;
continue;
}
} else {
var temp__5735__auto___36914 = cljs.core.seq(seq__36397_36899);
if(temp__5735__auto___36914){
var seq__36397_36916__$1 = temp__5735__auto___36914;
if(cljs.core.chunked_seq_QMARK_(seq__36397_36916__$1)){
var c__4556__auto___36917 = cljs.core.chunk_first(seq__36397_36916__$1);
var G__36919 = cljs.core.chunk_rest(seq__36397_36916__$1);
var G__36920 = c__4556__auto___36917;
var G__36921 = cljs.core.count(c__4556__auto___36917);
var G__36922 = (0);
seq__36397_36899 = G__36919;
chunk__36399_36900 = G__36920;
count__36400_36901 = G__36921;
i__36401_36902 = G__36922;
continue;
} else {
var child_36923 = cljs.core.first(seq__36397_36916__$1);
if(cljs.core.truth_(child_36923)){
node.appendChild(child_36923);


var G__36924 = cljs.core.next(seq__36397_36916__$1);
var G__36925 = null;
var G__36926 = (0);
var G__36927 = (0);
seq__36397_36899 = G__36924;
chunk__36399_36900 = G__36925;
count__36400_36901 = G__36926;
i__36401_36902 = G__36927;
continue;
} else {
var G__36928 = cljs.core.next(seq__36397_36916__$1);
var G__36929 = null;
var G__36930 = (0);
var G__36931 = (0);
seq__36397_36899 = G__36928;
chunk__36399_36900 = G__36929;
count__36400_36901 = G__36930;
i__36401_36902 = G__36931;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36898);
}
}


var G__36932 = seq__36370_36890;
var G__36933 = chunk__36372_36891;
var G__36934 = count__36373_36892;
var G__36935 = (i__36374_36893 + (1));
seq__36370_36890 = G__36932;
chunk__36372_36891 = G__36933;
count__36373_36892 = G__36934;
i__36374_36893 = G__36935;
continue;
} else {
var G__36936 = seq__36370_36890;
var G__36937 = chunk__36372_36891;
var G__36938 = count__36373_36892;
var G__36939 = (i__36374_36893 + (1));
seq__36370_36890 = G__36936;
chunk__36372_36891 = G__36937;
count__36373_36892 = G__36938;
i__36374_36893 = G__36939;
continue;
}
} else {
var temp__5735__auto___36940 = cljs.core.seq(seq__36370_36890);
if(temp__5735__auto___36940){
var seq__36370_36942__$1 = temp__5735__auto___36940;
if(cljs.core.chunked_seq_QMARK_(seq__36370_36942__$1)){
var c__4556__auto___36943 = cljs.core.chunk_first(seq__36370_36942__$1);
var G__36944 = cljs.core.chunk_rest(seq__36370_36942__$1);
var G__36945 = c__4556__auto___36943;
var G__36946 = cljs.core.count(c__4556__auto___36943);
var G__36947 = (0);
seq__36370_36890 = G__36944;
chunk__36372_36891 = G__36945;
count__36373_36892 = G__36946;
i__36374_36893 = G__36947;
continue;
} else {
var child_struct_36948 = cljs.core.first(seq__36370_36942__$1);
if((!((child_struct_36948 == null)))){
if(typeof child_struct_36948 === 'string'){
var text_36949 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36949),child_struct_36948].join(''));
} else {
var children_36950 = shadow.dom.svg_node(child_struct_36948);
if(cljs.core.seq_QMARK_(children_36950)){
var seq__36414_36951 = cljs.core.seq(children_36950);
var chunk__36416_36952 = null;
var count__36417_36953 = (0);
var i__36418_36954 = (0);
while(true){
if((i__36418_36954 < count__36417_36953)){
var child_36955 = chunk__36416_36952.cljs$core$IIndexed$_nth$arity$2(null,i__36418_36954);
if(cljs.core.truth_(child_36955)){
node.appendChild(child_36955);


var G__36957 = seq__36414_36951;
var G__36958 = chunk__36416_36952;
var G__36959 = count__36417_36953;
var G__36960 = (i__36418_36954 + (1));
seq__36414_36951 = G__36957;
chunk__36416_36952 = G__36958;
count__36417_36953 = G__36959;
i__36418_36954 = G__36960;
continue;
} else {
var G__36962 = seq__36414_36951;
var G__36963 = chunk__36416_36952;
var G__36964 = count__36417_36953;
var G__36965 = (i__36418_36954 + (1));
seq__36414_36951 = G__36962;
chunk__36416_36952 = G__36963;
count__36417_36953 = G__36964;
i__36418_36954 = G__36965;
continue;
}
} else {
var temp__5735__auto___36966__$1 = cljs.core.seq(seq__36414_36951);
if(temp__5735__auto___36966__$1){
var seq__36414_36967__$1 = temp__5735__auto___36966__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36414_36967__$1)){
var c__4556__auto___36969 = cljs.core.chunk_first(seq__36414_36967__$1);
var G__36970 = cljs.core.chunk_rest(seq__36414_36967__$1);
var G__36971 = c__4556__auto___36969;
var G__36972 = cljs.core.count(c__4556__auto___36969);
var G__36973 = (0);
seq__36414_36951 = G__36970;
chunk__36416_36952 = G__36971;
count__36417_36953 = G__36972;
i__36418_36954 = G__36973;
continue;
} else {
var child_36974 = cljs.core.first(seq__36414_36967__$1);
if(cljs.core.truth_(child_36974)){
node.appendChild(child_36974);


var G__36976 = cljs.core.next(seq__36414_36967__$1);
var G__36977 = null;
var G__36978 = (0);
var G__36979 = (0);
seq__36414_36951 = G__36976;
chunk__36416_36952 = G__36977;
count__36417_36953 = G__36978;
i__36418_36954 = G__36979;
continue;
} else {
var G__36980 = cljs.core.next(seq__36414_36967__$1);
var G__36981 = null;
var G__36982 = (0);
var G__36983 = (0);
seq__36414_36951 = G__36980;
chunk__36416_36952 = G__36981;
count__36417_36953 = G__36982;
i__36418_36954 = G__36983;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36950);
}
}


var G__36988 = cljs.core.next(seq__36370_36942__$1);
var G__36989 = null;
var G__36990 = (0);
var G__36991 = (0);
seq__36370_36890 = G__36988;
chunk__36372_36891 = G__36989;
count__36373_36892 = G__36990;
i__36374_36893 = G__36991;
continue;
} else {
var G__36993 = cljs.core.next(seq__36370_36942__$1);
var G__36994 = null;
var G__36995 = (0);
var G__36996 = (0);
seq__36370_36890 = G__36993;
chunk__36372_36891 = G__36994;
count__36373_36892 = G__36995;
i__36374_36893 = G__36996;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37006 = arguments.length;
var i__4737__auto___37008 = (0);
while(true){
if((i__4737__auto___37008 < len__4736__auto___37006)){
args__4742__auto__.push((arguments[i__4737__auto___37008]));

var G__37010 = (i__4737__auto___37008 + (1));
i__4737__auto___37008 = G__37010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36430){
var G__36431 = cljs.core.first(seq36430);
var seq36430__$1 = cljs.core.next(seq36430);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36431,seq36430__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36437 = arguments.length;
switch (G__36437) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__34081__auto___37020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_36444){
var state_val_36445 = (state_36444[(1)]);
if((state_val_36445 === (1))){
var state_36444__$1 = state_36444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36444__$1,(2),once_or_cleanup);
} else {
if((state_val_36445 === (2))){
var inst_36440 = (state_36444[(2)]);
var inst_36442 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36444__$1 = (function (){var statearr_36446 = state_36444;
(statearr_36446[(7)] = inst_36440);

return statearr_36446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36444__$1,inst_36442);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34034__auto__ = null;
var shadow$dom$state_machine__34034__auto____0 = (function (){
var statearr_36448 = [null,null,null,null,null,null,null,null];
(statearr_36448[(0)] = shadow$dom$state_machine__34034__auto__);

(statearr_36448[(1)] = (1));

return statearr_36448;
});
var shadow$dom$state_machine__34034__auto____1 = (function (state_36444){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_36444);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e36450){var ex__34037__auto__ = e36450;
var statearr_36451_37027 = state_36444;
(statearr_36451_37027[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_36444[(4)]))){
var statearr_36453_37028 = state_36444;
(statearr_36453_37028[(1)] = cljs.core.first((state_36444[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37029 = state_36444;
state_36444 = G__37029;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
shadow$dom$state_machine__34034__auto__ = function(state_36444){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34034__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34034__auto____1.call(this,state_36444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34034__auto____0;
shadow$dom$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34034__auto____1;
return shadow$dom$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_36456 = f__34082__auto__();
(statearr_36456[(6)] = c__34081__auto___37020);

return statearr_36456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
