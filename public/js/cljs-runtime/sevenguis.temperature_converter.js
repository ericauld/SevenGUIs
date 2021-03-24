goog.provide('sevenguis.temperature_converter');
sevenguis.temperature_converter.scales = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),null,new cljs.core.Keyword(null,"celsius","celsius",-813774085),null], null), null);
sevenguis.temperature_converter.precision = (1);
sevenguis.temperature_converter.suffix_unicode_symbol = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),"\u2109",new cljs.core.Keyword(null,"celsius","celsius",-813774085),"\u2103"], null);
sevenguis.temperature_converter.font = "20.5px Roboto";
sevenguis.temperature_converter.__GT_master = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),(function sevenguis$temperature_converter$fahrenheit__GT_celsius(fahrenheit_temp){
return (((fahrenheit_temp - (32)) * (5)) / (9));
}),new cljs.core.Keyword(null,"celsius","celsius",-813774085),cljs.core.identity], null);
sevenguis.temperature_converter.from_master = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),(function sevenguis$temperature_converter$celsius__GT_fahrenheit(celsius_temp){
if(cljs.core.truth_(celsius_temp)){
return (((celsius_temp * (9)) / (5)) + (32));
} else {
return null;
}
}),new cljs.core.Keyword(null,"celsius","celsius",-813774085),cljs.core.identity], null);
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.temperature_converter !== 'undefined') && (typeof sevenguis.temperature_converter._BANG_app_db !== 'undefined')){
} else {
sevenguis.temperature_converter._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"master-value","master-value",-836305730),null,new cljs.core.Keyword(null,"user-input","user-input",-504242422),null,new cljs.core.Keyword(null,"focus","focus",234677911),null], null));
}
sevenguis.temperature_converter._BANG_focus = reagent.core.cursor(sevenguis.temperature_converter._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null));
sevenguis.temperature_converter._BANG_master_value = reagent.core.cursor(sevenguis.temperature_converter._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"master-value","master-value",-836305730)], null));
sevenguis.temperature_converter._BANG_user_input = reagent.core.cursor(sevenguis.temperature_converter._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422)], null));
sevenguis.temperature_converter.convert_num_str = (function sevenguis$temperature_converter$convert_num_str(converter,input_str){
var parse_attempt = parseFloat(input_str);
if(cljs.core.truth_(isNaN(parse_attempt))){
return null;
} else {
return (converter.cljs$core$IFn$_invoke$arity$1 ? converter.cljs$core$IFn$_invoke$arity$1(parse_attempt) : converter.call(null,parse_attempt));
}
});
sevenguis.temperature_converter.update_temp = (function sevenguis$temperature_converter$update_temp(scale,new_user_input){
cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_user_input,new_user_input);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_user_input,"")){
return cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_master_value,null);
} else {
var temp__5735__auto__ = sevenguis.temperature_converter.convert_num_str((scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(sevenguis.temperature_converter.__GT_master) : scale.call(null,sevenguis.temperature_converter.__GT_master)),new_user_input);
if(cljs.core.truth_(temp__5735__auto__)){
var conversion = temp__5735__auto__;
return cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_master_value,conversion);
} else {
return null;
}
}
});
sevenguis.temperature_converter.temperature_input = (function sevenguis$temperature_converter$temperature_input(scale){
var with_let75229 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75229","with-let75229",-1073479329));
var temp__5739__auto___75254 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___75254 == null)){
} else {
var c__28532__auto___75255 = temp__5739__auto___75254;
if((with_let75229.generation === c__28532__auto___75255.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75229.generation = c__28532__auto___75255.ratomGeneration);
}


var init75230 = (with_let75229.length === (0));
var _BANG_focused_QMARK_ = ((init75230)?(with_let75229[(0)] = reagent.core.track((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.temperature_converter._BANG_focus),scale);
}))):(with_let75229[(0)]));
var _BANG_computed_value = ((init75230)?(with_let75229[(1)] = reagent.core.track((function (){
var G__75231 = (function (){var G__75233 = cljs.core.deref(sevenguis.temperature_converter._BANG_master_value);
var fexpr__75232 = (scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(sevenguis.temperature_converter.from_master) : scale.call(null,sevenguis.temperature_converter.from_master));
return (fexpr__75232.cljs$core$IFn$_invoke$arity$1 ? fexpr__75232.cljs$core$IFn$_invoke$arity$1(G__75233) : fexpr__75232.call(null,G__75233));
})();
if((G__75231 == null)){
return null;
} else {
return G__75231.toFixed(sevenguis.temperature_converter.precision);
}
}))):(with_let75229[(1)]));
var _BANG_displayed_value = ((init75230)?(with_let75229[(2)] = reagent.core.track((function (){
if(cljs.core.truth_(cljs.core.deref(_BANG_focused_QMARK_))){
return cljs.core.deref(sevenguis.temperature_converter._BANG_user_input);
} else {
return cljs.core.deref(_BANG_computed_value);
}
}))):(with_let75229[(2)]));
var res__28533__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function sevenguis$temperature_converter$temperature_input_$_temperature_input_on_focus(_){
cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_user_input,cljs.core.deref(_BANG_computed_value));

return cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_focus,scale);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$temperature_converter$temperature_input_$_temperature_input_on_blur(){
return cljs.core.reset_BANG_(sevenguis.temperature_converter._BANG_focus,null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.input_with_suffix,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"!value","!value",1189919300),_BANG_displayed_value,new cljs.core.Keyword(null,"value-update","value-update",1489087272),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sevenguis.temperature_converter.update_temp,scale),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),clojure.string.capitalize(cljs.core.name(scale)),new cljs.core.Keyword(null,"suffix","suffix",367373057),(scale.cljs$core$IFn$_invoke$arity$1 ? scale.cljs$core$IFn$_invoke$arity$1(sevenguis.temperature_converter.suffix_unicode_symbol) : scale.call(null,sevenguis.temperature_converter.suffix_unicode_symbol)),new cljs.core.Keyword(null,"hide-suffix?","hide-suffix?",1561447163),cljs.core.not(cljs.core.deref(sevenguis.temperature_converter._BANG_master_value)),new cljs.core.Keyword(null,"font","font",-1506159249),sevenguis.temperature_converter.font], null)], null)], null);

return res__28533__auto__;
});
sevenguis.temperature_converter.temperature_converter = (function sevenguis$temperature_converter$temperature_converter(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.temperature-converter.gui","div.temperature-converter.gui",-2059973298)], null),(function (){var iter__4529__auto__ = (function sevenguis$temperature_converter$temperature_converter_$_iter__75240(s__75241){
return (new cljs.core.LazySeq(null,(function (){
var s__75241__$1 = s__75241;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75241__$1);
if(temp__5735__auto__){
var s__75241__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75241__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75241__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75243 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75242 = (0);
while(true){
if((i__75242 < size__4528__auto__)){
var scale = cljs.core._nth(c__4527__auto__,i__75242);
cljs.core.chunk_append(b__75243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.temperature_converter.temperature_input,scale], null));

var G__75260 = (i__75242 + (1));
i__75242 = G__75260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75243),sevenguis$temperature_converter$temperature_converter_$_iter__75240(cljs.core.chunk_rest(s__75241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75243),null);
}
} else {
var scale = cljs.core.first(s__75241__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.temperature_converter.temperature_input,scale], null),sevenguis$temperature_converter$temperature_converter_$_iter__75240(cljs.core.rest(s__75241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.temperature_converter.scales);
})());
});

//# sourceMappingURL=sevenguis.temperature_converter.js.map
