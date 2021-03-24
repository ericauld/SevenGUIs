goog.provide('sevenguis.util');
sevenguis.util.sqr_distance_2d = (function sevenguis$util$sqr_distance_2d(p__75010,p__75011){
var vec__75012 = p__75010;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75012,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75012,(1),null);
var vec__75015 = p__75011;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75015,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75015,(1),null);
var vec__75018 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75018,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75018,(1),null);
return (Math.pow(d1,(2)) + Math.pow(d2,(2)));
});
sevenguis.util.coords_rel = (function sevenguis$util$coords_rel(_BANG_element_ref,event){
var temp__5735__auto__ = cljs.core.deref(_BANG_element_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var element = temp__5735__auto__;
var rect = element.getBoundingClientRect();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.clientX,event.clientY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rect.left,rect.top], null));
} else {
return null;
}
});
sevenguis.util.within = (function sevenguis$util$within(tolerance,float1,float2){
return (Math.abs((float2 - float1)) < tolerance);
});
sevenguis.util.get_event_value = (function sevenguis$util$get_event_value(event){
return event.target.value;
});
sevenguis.util.button = (function sevenguis$util$button(listener,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),listener], null),text], null);
});
sevenguis.util.modal = (function sevenguis$util$modal(p__75021){
var map__75022 = p__75021;
var map__75022__$1 = (((((!((map__75022 == null))))?(((((map__75022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75022):map__75022);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75022__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var set_ref_func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75022__$1,new cljs.core.Keyword(null,"set-ref-func","set-ref-func",-1302962063));
var listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75022__$1,new cljs.core.Keyword(null,"listener","listener",882147248));
var close_modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75022__$1,new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985));
var button_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75022__$1,new cljs.core.Keyword(null,"button-text","button-text",-1800441720));
var times_symbol = "\u00D7";
var confirm = (function (_e){
(close_modal.cljs$core$IFn$_invoke$arity$0 ? close_modal.cljs$core$IFn$_invoke$arity$0() : close_modal.call(null));

if(cljs.core.truth_(listener)){
return (listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),set_ref_func], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-close-wrapper","div.dialog-close-wrapper",-1292050291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dialog-close","span.dialog-close",-360255878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_modal], null),times_symbol], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),text], null),(cljs.core.truth_(button_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),confirm], null),button_text], null):null)], null);
});
sevenguis.util.context_menu = (function sevenguis$util$context_menu(p__75024){
var map__75025 = p__75024;
var map__75025__$1 = (((((!((map__75025 == null))))?(((((map__75025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75025):map__75025);
var options_and_listeners = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75025__$1,new cljs.core.Keyword(null,"options-and-listeners","options-and-listeners",-1780414521));
var _BANG_visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75025__$1,new cljs.core.Keyword(null,"!visible?","!visible?",-564061257));
var _BANG_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75025__$1,new cljs.core.Keyword(null,"!position","!position",-1373918838));
var with_cancel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75025__$1,new cljs.core.Keyword(null,"with-cancel?","with-cancel?",805171968));
var cancel_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75025__$1,new cljs.core.Keyword(null,"cancel-listener","cancel-listener",-711512528));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.context-menu","div.context-menu",-297265218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(cljs.core.deref(_BANG_visible_QMARK_))?"show":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(function (){var G__75027 = cljs.core.deref(_BANG_position);
if((G__75027 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(G__75027,(1));
}
})(),new cljs.core.Keyword(null,"left","left",-399115937),(function (){var G__75028 = cljs.core.deref(_BANG_position);
if((G__75028 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(G__75028,(0));
}
})()], null)], null),(function (){var G__75029 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),(function (){var iter__4529__auto__ = (function sevenguis$util$context_menu_$_iter__75030(s__75031){
return (new cljs.core.LazySeq(null,(function (){
var s__75031__$1 = s__75031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75031__$1);
if(temp__5735__auto__){
var s__75031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75031__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75031__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75033 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75032 = (0);
while(true){
if((i__75032 < size__4528__auto__)){
var vec__75034 = cljs.core._nth(c__4527__auto__,i__75032);
var option_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75034,(0),null);
var listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75034,(1),null);
cljs.core.chunk_append(b__75033,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__75032,vec__75034,option_name,listener,c__4527__auto__,size__4528__auto__,b__75033,s__75031__$2,temp__5735__auto__,map__75025,map__75025__$1,options_and_listeners,_BANG_visible_QMARK_,_BANG_position,with_cancel_QMARK_,cancel_listener){
return (function sevenguis$util$context_menu_$_iter__75030_$_on_click_context_menu_option(_){
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

return cljs.core.reset_BANG_(_BANG_visible_QMARK_,false);
});})(i__75032,vec__75034,option_name,listener,c__4527__auto__,size__4528__auto__,b__75033,s__75031__$2,temp__5735__auto__,map__75025,map__75025__$1,options_and_listeners,_BANG_visible_QMARK_,_BANG_position,with_cancel_QMARK_,cancel_listener))
], null),option_name], null));

var G__75112 = (i__75032 + (1));
i__75032 = G__75112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75033),sevenguis$util$context_menu_$_iter__75030(cljs.core.chunk_rest(s__75031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75033),null);
}
} else {
var vec__75037 = cljs.core.first(s__75031__$2);
var option_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75037,(0),null);
var listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75037,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__75037,option_name,listener,s__75031__$2,temp__5735__auto__,map__75025,map__75025__$1,options_and_listeners,_BANG_visible_QMARK_,_BANG_position,with_cancel_QMARK_,cancel_listener){
return (function sevenguis$util$context_menu_$_iter__75030_$_on_click_context_menu_option(_){
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

return cljs.core.reset_BANG_(_BANG_visible_QMARK_,false);
});})(vec__75037,option_name,listener,s__75031__$2,temp__5735__auto__,map__75025,map__75025__$1,options_and_listeners,_BANG_visible_QMARK_,_BANG_position,with_cancel_QMARK_,cancel_listener))
], null),option_name], null),sevenguis$util$context_menu_$_iter__75030(cljs.core.rest(s__75031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options_and_listeners);
})());
if(cljs.core.truth_(with_cancel_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__75029,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.context-menu-rule","hr.context-menu-rule",878209443)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.context-menu-cancel","li.context-menu-cancel",-608803827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$util$context_menu_$_on_click_cancel(_){
if(cljs.core.truth_(cancel_listener)){
(cancel_listener.cljs$core$IFn$_invoke$arity$0 ? cancel_listener.cljs$core$IFn$_invoke$arity$0() : cancel_listener.call(null));
} else {
}

return cljs.core.reset_BANG_(_BANG_visible_QMARK_,false);
})], null),"Cancel"], null)], 0));
} else {
return G__75029;
}
})()], null);
});
sevenguis.util.get_bubble_left = (function sevenguis$util$get_bubble_left(slider_position,bubble_scale,bubble_shift){
var left_position = ((slider_position * bubble_scale) + bubble_shift);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_position),"px"].join('');
});
sevenguis.util.range_with_bubble = (function sevenguis$util$range_with_bubble(p__75040){
var map__75041 = p__75040;
var map__75041__$1 = (((((!((map__75041 == null))))?(((((map__75041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75041):map__75041);
var _BANG_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"!value","!value",1189919300));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"max","max",61366548));
var bubble_scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"bubble-scale","bubble-scale",33327641));
var bubble_shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"bubble-shift","bubble-shift",-956348627));
var display_precision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"display-precision","display-precision",415581883));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75041__$1,new cljs.core.Keyword(null,"step","step",1288888124));

var with_let75043 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75043","with-let75043",562362956));
var temp__5739__auto___75117 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___75117 == null)){
} else {
var c__28532__auto___75118 = temp__5739__auto___75117;
if((with_let75043.generation === c__28532__auto___75118.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75043.generation = c__28532__auto___75118.ratomGeneration);
}


var init75044 = (with_let75043.length === (0));
var _BANG_bubble = ((init75044)?(with_let75043[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let75043[(0)]));
var _BANG_show_bubble_QMARK_ = ((init75044)?(with_let75043[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let75043[(1)]));
var _BANG_slider_position = ((init75044)?(with_let75043[(2)] = reagent.core.track((function (){
return ((cljs.core.deref(_BANG_value) - min) / (max - min));
}))):(with_let75043[(2)]));
var _BANG_bubble_left = ((init75044)?(with_let75043[(3)] = reagent.core.track((function (){
return sevenguis.util.get_bubble_left(cljs.core.deref(_BANG_slider_position),bubble_scale,bubble_shift);
}))):(with_let75043[(3)]));
var res__28533__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.range-wrap","div.range-wrap",1335878026),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.range","input.range",-1726251658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"step","step",1288888124),(cljs.core.truth_(step)?step:(1)),new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(cljs.core.deref(_BANG_value))?cljs.core.deref(_BANG_value):""),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function sevenguis$util$range_with_bubble_$_range_on_input(e){
return cljs.core.reset_BANG_(_BANG_value,parseFloat(e.target.value));
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function sevenguis$util$range_with_bubble_$_range_mouse_down(_){
return cljs.core.reset_BANG_(_BANG_show_bubble_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function sevenguis$util$range_with_bubble_$_range_mouse_up(_){
return cljs.core.reset_BANG_(_BANG_show_bubble_QMARK_,false);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output.bubble","output.bubble",-525868141),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function sevenguis$util$range_with_bubble_$_set_bubble_ref(ref){
return cljs.core.reset_BANG_(_BANG_bubble,ref);
}),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.not(cljs.core.deref(_BANG_show_bubble_QMARK_)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(_BANG_bubble_left)], null)], null),(function (){var G__75045 = cljs.core.deref(_BANG_value);
var G__75045__$1 = (cljs.core.truth_(display_precision)?parseFloat(G__75045):G__75045);
var G__75045__$2 = (cljs.core.truth_(display_precision)?G__75045__$1.toFixed(display_precision):G__75045__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75045__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join('');

})()], null)], null);

return res__28533__auto__;
});
sevenguis.util.canvas = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.util.get_text_width = (function sevenguis$util$get_text_width(text,font){
if(cljs.core.not(cljs.core.deref(sevenguis.util.canvas))){
cljs.core.reset_BANG_(sevenguis.util.canvas,document.createElement("canvas"));
} else {
}

var context = cljs.core.deref(sevenguis.util.canvas).getContext("2d");
(context.font = font);

return context.measureText(text).width;
});
sevenguis.util.get_suffix_left = (function sevenguis$util$get_suffix_left(text,font){
var width = sevenguis.util.get_text_width(text,font);
var offset = (6);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((width + offset)),"px"].join('');
});
sevenguis.util.input_with_suffix = (function sevenguis$util$input_with_suffix(p__75048){
var map__75049 = p__75048;
var map__75049__$1 = (((((!((map__75049 == null))))?(((((map__75049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75049):map__75049);
var _BANG_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"!value","!value",1189919300));
var value_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"value-update","value-update",1489087272));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var hide_suffix_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"hide-suffix?","hide-suffix?",1561447163));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75049__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var with_let75051 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75051","with-let75051",-1182469705));
var temp__5739__auto___75129 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___75129 == null)){
} else {
var c__28532__auto___75130 = temp__5739__auto___75129;
if((with_let75051.generation === c__28532__auto___75130.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75051.generation = c__28532__auto___75130.ratomGeneration);
}


var init75052 = (with_let75051.length === (0));
var _BANG_suffix_element = ((init75052)?(with_let75051[(0)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let75051[(0)]));
var res__28533__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-with-suffix-wrapper","div.input-with-suffix-wrapper",953807285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-with-suffix","input.input-with-suffix",-1743778270),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(_BANG_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__75046_SHARP_){
var G__75053 = p1__75046_SHARP_.target.value;
return (value_update.cljs$core$IFn$_invoke$arity$1 ? value_update.cljs$core$IFn$_invoke$arity$1(G__75053) : value_update.call(null,G__75053));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.suffix-element","span.suffix-element",-802825787),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__75047_SHARP_){
return cljs.core.reset_BANG_(_BANG_suffix_element,p1__75047_SHARP_);
}),new cljs.core.Keyword(null,"hidden","hidden",-312506092),hide_suffix_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(reagent.core.track((function (){
return sevenguis.util.get_suffix_left(cljs.core.deref(_BANG_value),font);
})))], null)], null),suffix], null)], null);

return res__28533__auto__;
});
sevenguis.util.filtered_list = (function sevenguis$util$filtered_list(p__75054){
var map__75055 = p__75054;
var map__75055__$1 = (((((!((map__75055 == null))))?(((((map__75055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75055):map__75055);
var item__GT_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"item->str","item->str",-951370232));
var _BANG_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"!items","!items",1965469221));
var _BANG_keep_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"!keep?","!keep?",1059574733));
var _BANG_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"!focus","!focus",382027913));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var _BANG_selected_item_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75055__$1,new cljs.core.Keyword(null,"!selected-item-index","!selected-item-index",-3640468));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#name-list","select#name-list",-1674192336),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function sevenguis$util$filtered_list_$_name_list_on_focus(_){
return cljs.core.reset_BANG_(_BANG_focus,new cljs.core.Keyword(null,"name-list","name-list",-749937499));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$util$filtered_list_$_name_list_on_blur(_){
return cljs.core.reset_BANG_(_BANG_focus,null);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function sevenguis$util$filtered_list_$_select_on_change(e){
return cljs.core.reset_BANG_(_BANG_selected_item_index,(function (){var v = e;
var v__$1 = v.target.value;
return parseInt(v__$1);
})());
})], null)], null),cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function sevenguis$util$filtered_list_$_build_option_element(index,item){
if(cljs.core.truth_((function (){var and__4115__auto__ = item;
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__75057 = cljs.core.deref(_BANG_keep_QMARK_);
return (fexpr__75057.cljs$core$IFn$_invoke$arity$1 ? fexpr__75057.cljs$core$IFn$_invoke$arity$1(item) : fexpr__75057.call(null,item));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.crud-name","option.crud-name",-1884525439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)], null),(item__GT_str.cljs$core$IFn$_invoke$arity$1 ? item__GT_str.cljs$core$IFn$_invoke$arity$1(item) : item__GT_str.call(null,item))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)], null));
} else {
return null;
}
}),cljs.core.deref(_BANG_items)))], null);
});

//# sourceMappingURL=sevenguis.util.js.map
