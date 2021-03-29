goog.provide('sevenguis.counter');
sevenguis.counter.count_buttons = (function sevenguis$counter$count_buttons(increment_count,decrease_count_five,show_modal){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button-line","div.button-line",-612300315),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increment_count], null),"+1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),decrease_count_five], null),"-5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_modal], null),"Reset"], null)], null);
});
sevenguis.counter.counter = (function sevenguis$counter$counter(){
var with_let29664 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let29664","with-let29664",710715347));
var temp__5739__auto___29666 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___29666 == null)){
} else {
var c__28532__auto___29667 = temp__5739__auto___29666;
if((with_let29664.generation === c__28532__auto___29667.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let29664.generation = c__28532__auto___29667.ratomGeneration);
}


var init29665 = (with_let29664.length === (0));
var _BANG_click_count = ((init29665)?(with_let29664[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let29664[(0)]));
var increment_count = ((init29665)?(with_let29664[(1)] = (function (){
return reagent.core.rswap_BANG_(_BANG_click_count,cljs.core.inc);
})):(with_let29664[(1)]));
var decrease_count_five = ((init29665)?(with_let29664[(2)] = (function (){
return reagent.core.rswap_BANG_(_BANG_click_count,(function (x){
var x__4214__auto__ = (0);
var y__4215__auto__ = (x - (5));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));
})):(with_let29664[(2)]));
var reset_counter = ((init29665)?(with_let29664[(3)] = (function (){
return cljs.core.reset_BANG_(_BANG_click_count,(0));
})):(with_let29664[(3)]));
var _BANG_modal = ((init29665)?(with_let29664[(4)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let29664[(4)]));
var set_modal_ref = ((init29665)?(with_let29664[(5)] = (function (ref){
cljs.core.reset_BANG_(_BANG_modal,ref);

var temp__5735__auto__ = cljs.core.deref(_BANG_modal);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return dialogPolyfill.registerDialog(modal);
} else {
return null;
}
})):(with_let29664[(5)]));
var close_modal = ((init29665)?(with_let29664[(6)] = (function (_){
var temp__5735__auto__ = cljs.core.deref(_BANG_modal);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return modal.close();
} else {
return null;
}
})):(with_let29664[(6)]));
var show_modal = ((init29665)?(with_let29664[(7)] = (function (_){
var temp__5735__auto__ = cljs.core.deref(_BANG_modal);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return modal.showModal();
} else {
return null;
}
})):(with_let29664[(7)]));
var res__28533__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.counter.gui","div.counter.gui",357136101),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["The count is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_click_count)),"."].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.counter.count_buttons,increment_count,decrease_count_five,show_modal], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.modal,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Reset count?",new cljs.core.Keyword(null,"set-ref-func","set-ref-func",-1302962063),set_modal_ref,new cljs.core.Keyword(null,"listener","listener",882147248),reset_counter,new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),close_modal,new cljs.core.Keyword(null,"button-text","button-text",-1800441720),"OK"], null)], null)], null);

return res__28533__auto__;
});

//# sourceMappingURL=sevenguis.counter.js.map
