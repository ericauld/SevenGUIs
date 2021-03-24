goog.provide('sevenguis.timer');
sevenguis.timer.seconds_between_ticks = 0.05;
sevenguis.timer.n_decimal_places = (2);
sevenguis.timer.precision_for_detecting_if_time_is_up = 0.01;
sevenguis.timer.min_duration = (5);
sevenguis.timer.max_duration = (300);
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.timer !== 'undefined') && (typeof sevenguis.timer._BANG_app_db !== 'undefined')){
} else {
sevenguis.timer._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),sevenguis.timer.min_duration], null));
}
sevenguis.timer._BANG_elapsed = reagent.core.cursor(sevenguis.timer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null));
sevenguis.timer._BANG_duration = reagent.core.cursor(sevenguis.timer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
sevenguis.timer.bubble_scale = (112);
sevenguis.timer.bubble_shift = (10);
sevenguis.timer.tick = (function sevenguis$timer$tick(){
return reagent.core.rswap_BANG_(sevenguis.timer._BANG_elapsed,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sevenguis.timer.seconds_between_ticks));
});
sevenguis.timer._BANG_ticking = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.timer.start_clock = (function sevenguis$timer$start_clock(){
if(cljs.core.truth_(cljs.core.deref(sevenguis.timer._BANG_ticking))){
return null;
} else {
return cljs.core.reset_BANG_(sevenguis.timer._BANG_ticking,setInterval((function sevenguis$timer$start_clock_$_tick_if_time_left(){
if(cljs.core.truth_((function (){var or__4126__auto__ = (cljs.core.deref(sevenguis.timer._BANG_elapsed) > cljs.core.deref(sevenguis.timer._BANG_duration));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sevenguis.util.within,sevenguis.timer.precision_for_detecting_if_time_is_up)(cljs.core.deref(sevenguis.timer._BANG_elapsed),cljs.core.deref(sevenguis.timer._BANG_duration));
}
})())){
return null;
} else {
return sevenguis.timer.tick();
}
}),((1000) * sevenguis.timer.seconds_between_ticks)));
}
});
sevenguis.timer.stop_clock = (function sevenguis$timer$stop_clock(){
clearInterval(cljs.core.deref(sevenguis.timer._BANG_ticking));

return cljs.core.reset_BANG_(sevenguis.timer._BANG_ticking,null);
});
sevenguis.timer.reset_clock = (function sevenguis$timer$reset_clock(){
sevenguis.timer.stop_clock();

return cljs.core.reset_BANG_(sevenguis.timer._BANG_elapsed,(0));
});
sevenguis.timer.button_row = (function sevenguis$timer$button_row(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line.button-line","div.gui-line.button-line",-639077900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sevenguis.timer.start_clock], null),"Start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sevenguis.timer.stop_clock], null),"Stop"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sevenguis.timer.reset_clock], null),"Reset"], null)], null);
});
sevenguis.timer.timer = (function sevenguis$timer$timer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.timer.gui","div.timer.gui",-1619053978),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Elapsed time:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.timer-progress","progress.timer-progress",-378389607),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.deref(sevenguis.timer._BANG_elapsed) / cljs.core.deref(sevenguis.timer._BANG_duration))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.timer._BANG_elapsed).toFixed(sevenguis.timer.n_decimal_places)),"s"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Duration:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.range_with_bubble,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"!value","!value",1189919300),sevenguis.timer._BANG_duration,new cljs.core.Keyword(null,"min","min",444991522),sevenguis.timer.min_duration,new cljs.core.Keyword(null,"max","max",61366548),sevenguis.timer.max_duration,new cljs.core.Keyword(null,"bubble-scale","bubble-scale",33327641),sevenguis.timer.bubble_scale,new cljs.core.Keyword(null,"bubble-shift","bubble-shift",-956348627),sevenguis.timer.bubble_shift,new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.timer.button_row], null)], null);
});

//# sourceMappingURL=sevenguis.timer.js.map
