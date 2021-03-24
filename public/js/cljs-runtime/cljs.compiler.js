goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__69531 = s;
var map__69531__$1 = (((((!((map__69531 == null))))?(((((map__69531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69531):map__69531);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69531__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__69534 = info;
var map__69535 = G__69534;
var map__69535__$1 = (((((!((map__69535 == null))))?(((((map__69535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69535):map__69535);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69535__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__69534__$1 = G__69534;
while(true){
var d__$2 = d__$1;
var map__69539 = G__69534__$1;
var map__69539__$1 = (((((!((map__69539 == null))))?(((((map__69539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69539):map__69539);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69539__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__70308 = (d__$2 + (1));
var G__70309 = shadow__$2;
d__$1 = G__70308;
G__69534__$1 = G__70309;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__69541){
var map__69542 = p__69541;
var map__69542__$1 = (((((!((map__69542 == null))))?(((((map__69542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69542):map__69542);
var name_var = map__69542__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69542__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__69544 = info;
var map__69544__$1 = (((((!((map__69544 == null))))?(((((map__69544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69544):map__69544);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69544__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69544__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__69547 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__69547) : cljs.compiler.munge.call(null,G__69547));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__69549 = arguments.length;
switch (G__69549) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__69550 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__69550.cljs$core$IFn$_invoke$arity$1 ? fexpr__69550.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__69550.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__69551 = cp;
switch (G__69551) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__69554_70331 = cljs.core.seq(s);
var chunk__69555_70332 = null;
var count__69556_70333 = (0);
var i__69557_70334 = (0);
while(true){
if((i__69557_70334 < count__69556_70333)){
var c_70335 = chunk__69555_70332.cljs$core$IIndexed$_nth$arity$2(null,i__69557_70334);
sb.append(cljs.compiler.escape_char(c_70335));


var G__70338 = seq__69554_70331;
var G__70339 = chunk__69555_70332;
var G__70340 = count__69556_70333;
var G__70341 = (i__69557_70334 + (1));
seq__69554_70331 = G__70338;
chunk__69555_70332 = G__70339;
count__69556_70333 = G__70340;
i__69557_70334 = G__70341;
continue;
} else {
var temp__5735__auto___70342 = cljs.core.seq(seq__69554_70331);
if(temp__5735__auto___70342){
var seq__69554_70345__$1 = temp__5735__auto___70342;
if(cljs.core.chunked_seq_QMARK_(seq__69554_70345__$1)){
var c__4556__auto___70346 = cljs.core.chunk_first(seq__69554_70345__$1);
var G__70347 = cljs.core.chunk_rest(seq__69554_70345__$1);
var G__70348 = c__4556__auto___70346;
var G__70349 = cljs.core.count(c__4556__auto___70346);
var G__70350 = (0);
seq__69554_70331 = G__70347;
chunk__69555_70332 = G__70348;
count__69556_70333 = G__70349;
i__69557_70334 = G__70350;
continue;
} else {
var c_70353 = cljs.core.first(seq__69554_70345__$1);
sb.append(cljs.compiler.escape_char(c_70353));


var G__70354 = cljs.core.next(seq__69554_70345__$1);
var G__70355 = null;
var G__70356 = (0);
var G__70357 = (0);
seq__69554_70331 = G__70354;
chunk__69555_70332 = G__70355;
count__69556_70333 = G__70356;
i__69557_70334 = G__70357;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__69590 = cljs.core.get_global_hierarchy;
return (fexpr__69590.cljs$core$IFn$_invoke$arity$0 ? fexpr__69590.cljs$core$IFn$_invoke$arity$0() : fexpr__69590.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__69605_70358 = ast;
var map__69605_70359__$1 = (((((!((map__69605_70358 == null))))?(((((map__69605_70358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69605_70358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69605_70358):map__69605_70358);
var env_70360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69605_70359__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_70360))){
var map__69607_70362 = env_70360;
var map__69607_70363__$1 = (((((!((map__69607_70362 == null))))?(((((map__69607_70362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69607_70362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69607_70362):map__69607_70362);
var line_70364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69607_70363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_70365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69607_70363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__69610 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__69613 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__69612 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__69612.cljs$core$IFn$_invoke$arity$1 ? fexpr__69612.cljs$core$IFn$_invoke$arity$1(G__69613) : fexpr__69612.call(null,G__69613));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69610,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__69610;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_70364 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_70365)?(column_70365 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__69623 = arguments.length;
switch (G__69623) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___70380 = arguments.length;
var i__4737__auto___70381 = (0);
while(true){
if((i__4737__auto___70381 < len__4736__auto___70380)){
args_arr__4757__auto__.push((arguments[i__4737__auto___70381]));

var G__70382 = (i__4737__auto___70381 + (1));
i__4737__auto___70381 = G__70382;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_70383 = (function (){var G__69624 = a;
if((!(typeof a === 'string'))){
return G__69624.toString();
} else {
return G__69624;
}
})();
var temp__5739__auto___70384 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___70384 == null)){
} else {
var sm_data_70385 = temp__5739__auto___70384;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_70385,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__69615_SHARP_){
return (p1__69615_SHARP_ + s_70383.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_70383], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__69625 = cljs.core.seq(xs);
var chunk__69626 = null;
var count__69627 = (0);
var i__69628 = (0);
while(true){
if((i__69628 < count__69627)){
var x = chunk__69626.cljs$core$IIndexed$_nth$arity$2(null,i__69628);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__70402 = seq__69625;
var G__70403 = chunk__69626;
var G__70404 = count__69627;
var G__70405 = (i__69628 + (1));
seq__69625 = G__70402;
chunk__69626 = G__70403;
count__69627 = G__70404;
i__69628 = G__70405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__69625);
if(temp__5735__auto__){
var seq__69625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69625__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69625__$1);
var G__70406 = cljs.core.chunk_rest(seq__69625__$1);
var G__70407 = c__4556__auto__;
var G__70408 = cljs.core.count(c__4556__auto__);
var G__70409 = (0);
seq__69625 = G__70406;
chunk__69626 = G__70407;
count__69627 = G__70408;
i__69628 = G__70409;
continue;
} else {
var x = cljs.core.first(seq__69625__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__70410 = cljs.core.next(seq__69625__$1);
var G__70411 = null;
var G__70412 = (0);
var G__70413 = (0);
seq__69625 = G__70410;
chunk__69626 = G__70411;
count__69627 = G__70412;
i__69628 = G__70413;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq69617){
var G__69618 = cljs.core.first(seq69617);
var seq69617__$1 = cljs.core.next(seq69617);
var G__69619 = cljs.core.first(seq69617__$1);
var seq69617__$2 = cljs.core.next(seq69617__$1);
var G__69620 = cljs.core.first(seq69617__$2);
var seq69617__$3 = cljs.core.next(seq69617__$2);
var G__69621 = cljs.core.first(seq69617__$3);
var seq69617__$4 = cljs.core.next(seq69617__$3);
var G__69622 = cljs.core.first(seq69617__$4);
var seq69617__$5 = cljs.core.next(seq69617__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69618,G__69619,G__69620,G__69621,G__69622,seq69617__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__69629){
var map__69630 = p__69629;
var map__69630__$1 = (((((!((map__69630 == null))))?(((((map__69630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69630):map__69630);
var m = map__69630__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69630__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__69639 = arguments.length;
switch (G__69639) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___70415 = arguments.length;
var i__4737__auto___70416 = (0);
while(true){
if((i__4737__auto___70416 < len__4736__auto___70415)){
args_arr__4757__auto__.push((arguments[i__4737__auto___70416]));

var G__70417 = (i__4737__auto___70416 + (1));
i__4737__auto___70416 = G__70417;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__69640_70421 = cljs.core.seq(xs);
var chunk__69641_70422 = null;
var count__69642_70423 = (0);
var i__69643_70424 = (0);
while(true){
if((i__69643_70424 < count__69642_70423)){
var x_70425 = chunk__69641_70422.cljs$core$IIndexed$_nth$arity$2(null,i__69643_70424);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_70425);


var G__70426 = seq__69640_70421;
var G__70427 = chunk__69641_70422;
var G__70428 = count__69642_70423;
var G__70429 = (i__69643_70424 + (1));
seq__69640_70421 = G__70426;
chunk__69641_70422 = G__70427;
count__69642_70423 = G__70428;
i__69643_70424 = G__70429;
continue;
} else {
var temp__5735__auto___70430 = cljs.core.seq(seq__69640_70421);
if(temp__5735__auto___70430){
var seq__69640_70431__$1 = temp__5735__auto___70430;
if(cljs.core.chunked_seq_QMARK_(seq__69640_70431__$1)){
var c__4556__auto___70432 = cljs.core.chunk_first(seq__69640_70431__$1);
var G__70433 = cljs.core.chunk_rest(seq__69640_70431__$1);
var G__70434 = c__4556__auto___70432;
var G__70435 = cljs.core.count(c__4556__auto___70432);
var G__70436 = (0);
seq__69640_70421 = G__70433;
chunk__69641_70422 = G__70434;
count__69642_70423 = G__70435;
i__69643_70424 = G__70436;
continue;
} else {
var x_70437 = cljs.core.first(seq__69640_70431__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_70437);


var G__70439 = cljs.core.next(seq__69640_70431__$1);
var G__70440 = null;
var G__70441 = (0);
var G__70442 = (0);
seq__69640_70421 = G__70439;
chunk__69641_70422 = G__70440;
count__69642_70423 = G__70441;
i__69643_70424 = G__70442;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq69633){
var G__69634 = cljs.core.first(seq69633);
var seq69633__$1 = cljs.core.next(seq69633);
var G__69635 = cljs.core.first(seq69633__$1);
var seq69633__$2 = cljs.core.next(seq69633__$1);
var G__69636 = cljs.core.first(seq69633__$2);
var seq69633__$3 = cljs.core.next(seq69633__$2);
var G__69637 = cljs.core.first(seq69633__$3);
var seq69633__$4 = cljs.core.next(seq69633__$3);
var G__69638 = cljs.core.first(seq69633__$4);
var seq69633__$5 = cljs.core.next(seq69633__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69634,G__69635,G__69636,G__69637,G__69638,seq69633__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__69644_70448 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__69645_70449 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__69646_70450 = true;
var _STAR_print_fn_STAR__temp_val__69647_70451 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__69646_70450);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__69647_70451);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__69645_70449);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__69644_70448);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__69648 = cljs.core.get_global_hierarchy;
return (fexpr__69648.cljs$core$IFn$_invoke$arity$0 ? fexpr__69648.cljs$core$IFn$_invoke$arity$0() : fexpr__69648.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__69649 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69649,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69649,(1),null);
var G__69652 = ns;
var G__69653 = name;
var G__69654 = (function (){
var G__69655 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__69655) : cljs.compiler.emit_constant.call(null,G__69655));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__69652,G__69653,G__69654) : cljs.compiler.emit_record_value.call(null,G__69652,G__69653,G__69654));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__69656 = cljs.core.keys(x);
var G__69657 = cljs.core.vals(x);
var G__69658 = cljs.compiler.emit_constants_comma_sep;
var G__69659 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__69656,G__69657,G__69658,G__69659) : cljs.compiler.emit_map.call(null,G__69656,G__69657,G__69658,G__69659));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__69660 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__69661 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__69660,G__69661) : cljs.compiler.emit_with_meta.call(null,G__69660,G__69661));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__69662 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69662,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69662,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69662,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__69665 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__69665) : x.call(null,G__69665));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__69666 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__69666) : x.call(null,G__69666));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__69668 = items;
var G__69669 = (function (p1__69667_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__69667_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__69668,G__69669) : cljs.compiler.emit_js_object.call(null,G__69668,G__69669));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__69671){
var map__69672 = p__69671;
var map__69672__$1 = (((((!((map__69672 == null))))?(((((map__69672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69672):map__69672);
var ast = map__69672__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69672__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69672__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69672__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__69674 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__69674__$1 = (((((!((map__69674 == null))))?(((((map__69674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69674):map__69674);
var cenv = map__69674__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69674__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__69676 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__69679 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__69679) : cljs.compiler.es5_GT__EQ_.call(null,G__69679));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__69676,cljs.analyzer.es5_allowed);
} else {
return G__69676;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__69680 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__69680,reserved);
} else {
return G__69680;
}
})();
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__69681_70506 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__69681_70507__$1 = (((G__69681_70506 instanceof cljs.core.Keyword))?G__69681_70506.fqn:null);
switch (G__69681_70507__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__69682){
var map__69683 = p__69682;
var map__69683__$1 = (((((!((map__69683 == null))))?(((((map__69683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69683):map__69683);
var arg = map__69683__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69683__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69683__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69683__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__69685 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__69685__$1 = (((((!((map__69685 == null))))?(((((map__69685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69685):map__69685);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__69688){
var map__69689 = p__69688;
var map__69689__$1 = (((((!((map__69689 == null))))?(((((map__69689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69689):map__69689);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69689__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69689__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__69691_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__69691_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__69695 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__69695) : comma_sep.call(null,G__69695));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__69696 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__69696) : comma_sep.call(null,G__69696));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__69697){
var map__69698 = p__69697;
var map__69698__$1 = (((((!((map__69698 == null))))?(((((map__69698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69698):map__69698);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69698__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69698__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__69700){
var map__69701 = p__69700;
var map__69701__$1 = (((((!((map__69701 == null))))?(((((map__69701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69701):map__69701);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69701__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__69703_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__69703_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__69706 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__69706) : comma_sep.call(null,G__69706));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__69707){
var map__69708 = p__69707;
var map__69708__$1 = (((((!((map__69708 == null))))?(((((map__69708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69708):map__69708);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69708__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69708__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___70568 = cljs.core.seq(items);
if(temp__5735__auto___70568){
var items_70569__$1 = temp__5735__auto___70568;
var vec__69715_70570 = items_70569__$1;
var seq__69716_70571 = cljs.core.seq(vec__69715_70570);
var first__69717_70572 = cljs.core.first(seq__69716_70571);
var seq__69716_70573__$1 = cljs.core.next(seq__69716_70571);
var vec__69718_70574 = first__69717_70572;
var k_70575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69718_70574,(0),null);
var v_70576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69718_70574,(1),null);
var r_70577 = seq__69716_70573__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_70575),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_70576) : emit_js_object_val.call(null,v_70576)));

var seq__69721_70578 = cljs.core.seq(r_70577);
var chunk__69722_70579 = null;
var count__69723_70580 = (0);
var i__69724_70581 = (0);
while(true){
if((i__69724_70581 < count__69723_70580)){
var vec__69735_70582 = chunk__69722_70579.cljs$core$IIndexed$_nth$arity$2(null,i__69724_70581);
var k_70583__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69735_70582,(0),null);
var v_70584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69735_70582,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_70583__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_70584__$1) : emit_js_object_val.call(null,v_70584__$1)));


var G__70586 = seq__69721_70578;
var G__70587 = chunk__69722_70579;
var G__70588 = count__69723_70580;
var G__70589 = (i__69724_70581 + (1));
seq__69721_70578 = G__70586;
chunk__69722_70579 = G__70587;
count__69723_70580 = G__70588;
i__69724_70581 = G__70589;
continue;
} else {
var temp__5735__auto___70590__$1 = cljs.core.seq(seq__69721_70578);
if(temp__5735__auto___70590__$1){
var seq__69721_70591__$1 = temp__5735__auto___70590__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69721_70591__$1)){
var c__4556__auto___70592 = cljs.core.chunk_first(seq__69721_70591__$1);
var G__70593 = cljs.core.chunk_rest(seq__69721_70591__$1);
var G__70594 = c__4556__auto___70592;
var G__70595 = cljs.core.count(c__4556__auto___70592);
var G__70596 = (0);
seq__69721_70578 = G__70593;
chunk__69722_70579 = G__70594;
count__69723_70580 = G__70595;
i__69724_70581 = G__70596;
continue;
} else {
var vec__69742_70597 = cljs.core.first(seq__69721_70591__$1);
var k_70598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69742_70597,(0),null);
var v_70599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69742_70597,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_70598__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_70599__$1) : emit_js_object_val.call(null,v_70599__$1)));


var G__70600 = cljs.core.next(seq__69721_70591__$1);
var G__70601 = null;
var G__70602 = (0);
var G__70603 = (0);
seq__69721_70578 = G__70600;
chunk__69722_70579 = G__70601;
count__69723_70580 = G__70602;
i__69724_70581 = G__70603;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__69746){
var map__69747 = p__69746;
var map__69747__$1 = (((((!((map__69747 == null))))?(((((map__69747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69747):map__69747);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69747__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69747__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__69749){
var map__69750 = p__69749;
var map__69750__$1 = (((((!((map__69750 == null))))?(((((map__69750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69750):map__69750);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69750__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__69753){
var map__69754 = p__69753;
var map__69754__$1 = (((((!((map__69754 == null))))?(((((map__69754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69754):map__69754);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69754__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__69756){
var map__69757 = p__69756;
var map__69757__$1 = (((((!((map__69757 == null))))?(((((map__69757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69757):map__69757);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__69760 = cljs.analyzer.unwrap_quote(expr);
var map__69760__$1 = (((((!((map__69760 == null))))?(((((map__69760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69760):map__69760);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69760__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__69764 = cljs.analyzer.unwrap_quote(expr);
var map__69764__$1 = (((((!((map__69764 == null))))?(((((map__69764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69764):map__69764);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69764__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69764__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69764__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__69767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__69767.cljs$core$IFn$_invoke$arity$1 ? fexpr__69767.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__69767.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__69768){
var map__69769 = p__69768;
var map__69769__$1 = (((((!((map__69769 == null))))?(((((map__69769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69769):map__69769);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69769__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69769__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69769__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69769__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__69775){
var map__69776 = p__69775;
var map__69776__$1 = (((((!((map__69776 == null))))?(((((map__69776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69776):map__69776);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__69778_70653 = cljs.core.seq(nodes);
var chunk__69779_70654 = null;
var count__69780_70655 = (0);
var i__69781_70656 = (0);
while(true){
if((i__69781_70656 < count__69780_70655)){
var map__69804_70658 = chunk__69779_70654.cljs$core$IIndexed$_nth$arity$2(null,i__69781_70656);
var map__69804_70659__$1 = (((((!((map__69804_70658 == null))))?(((((map__69804_70658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69804_70658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69804_70658):map__69804_70658);
var ts_70660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69804_70659__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__69805_70661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69804_70659__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__69805_70662__$1 = (((((!((map__69805_70661 == null))))?(((((map__69805_70661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69805_70661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69805_70661):map__69805_70661);
var then_70663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69805_70662__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__69808_70666 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_70660));
var chunk__69809_70667 = null;
var count__69810_70668 = (0);
var i__69811_70669 = (0);
while(true){
if((i__69811_70669 < count__69810_70668)){
var test_70670 = chunk__69809_70667.cljs$core$IIndexed$_nth$arity$2(null,i__69811_70669);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_70670,":");


var G__70671 = seq__69808_70666;
var G__70672 = chunk__69809_70667;
var G__70673 = count__69810_70668;
var G__70674 = (i__69811_70669 + (1));
seq__69808_70666 = G__70671;
chunk__69809_70667 = G__70672;
count__69810_70668 = G__70673;
i__69811_70669 = G__70674;
continue;
} else {
var temp__5735__auto___70675 = cljs.core.seq(seq__69808_70666);
if(temp__5735__auto___70675){
var seq__69808_70676__$1 = temp__5735__auto___70675;
if(cljs.core.chunked_seq_QMARK_(seq__69808_70676__$1)){
var c__4556__auto___70677 = cljs.core.chunk_first(seq__69808_70676__$1);
var G__70679 = cljs.core.chunk_rest(seq__69808_70676__$1);
var G__70680 = c__4556__auto___70677;
var G__70681 = cljs.core.count(c__4556__auto___70677);
var G__70682 = (0);
seq__69808_70666 = G__70679;
chunk__69809_70667 = G__70680;
count__69810_70668 = G__70681;
i__69811_70669 = G__70682;
continue;
} else {
var test_70684 = cljs.core.first(seq__69808_70676__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_70684,":");


var G__70685 = cljs.core.next(seq__69808_70676__$1);
var G__70686 = null;
var G__70687 = (0);
var G__70688 = (0);
seq__69808_70666 = G__70685;
chunk__69809_70667 = G__70686;
count__69810_70668 = G__70687;
i__69811_70669 = G__70688;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_70663);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_70663);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__70690 = seq__69778_70653;
var G__70691 = chunk__69779_70654;
var G__70692 = count__69780_70655;
var G__70693 = (i__69781_70656 + (1));
seq__69778_70653 = G__70690;
chunk__69779_70654 = G__70691;
count__69780_70655 = G__70692;
i__69781_70656 = G__70693;
continue;
} else {
var temp__5735__auto___70694 = cljs.core.seq(seq__69778_70653);
if(temp__5735__auto___70694){
var seq__69778_70699__$1 = temp__5735__auto___70694;
if(cljs.core.chunked_seq_QMARK_(seq__69778_70699__$1)){
var c__4556__auto___70700 = cljs.core.chunk_first(seq__69778_70699__$1);
var G__70701 = cljs.core.chunk_rest(seq__69778_70699__$1);
var G__70702 = c__4556__auto___70700;
var G__70703 = cljs.core.count(c__4556__auto___70700);
var G__70704 = (0);
seq__69778_70653 = G__70701;
chunk__69779_70654 = G__70702;
count__69780_70655 = G__70703;
i__69781_70656 = G__70704;
continue;
} else {
var map__69812_70705 = cljs.core.first(seq__69778_70699__$1);
var map__69812_70706__$1 = (((((!((map__69812_70705 == null))))?(((((map__69812_70705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69812_70705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69812_70705):map__69812_70705);
var ts_70707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69812_70706__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__69813_70708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69812_70706__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__69813_70709__$1 = (((((!((map__69813_70708 == null))))?(((((map__69813_70708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69813_70708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69813_70708):map__69813_70708);
var then_70710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69813_70709__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__69816_70717 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_70707));
var chunk__69817_70718 = null;
var count__69818_70719 = (0);
var i__69819_70720 = (0);
while(true){
if((i__69819_70720 < count__69818_70719)){
var test_70722 = chunk__69817_70718.cljs$core$IIndexed$_nth$arity$2(null,i__69819_70720);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_70722,":");


var G__70725 = seq__69816_70717;
var G__70726 = chunk__69817_70718;
var G__70727 = count__69818_70719;
var G__70728 = (i__69819_70720 + (1));
seq__69816_70717 = G__70725;
chunk__69817_70718 = G__70726;
count__69818_70719 = G__70727;
i__69819_70720 = G__70728;
continue;
} else {
var temp__5735__auto___70729__$1 = cljs.core.seq(seq__69816_70717);
if(temp__5735__auto___70729__$1){
var seq__69816_70730__$1 = temp__5735__auto___70729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69816_70730__$1)){
var c__4556__auto___70731 = cljs.core.chunk_first(seq__69816_70730__$1);
var G__70732 = cljs.core.chunk_rest(seq__69816_70730__$1);
var G__70733 = c__4556__auto___70731;
var G__70734 = cljs.core.count(c__4556__auto___70731);
var G__70735 = (0);
seq__69816_70717 = G__70732;
chunk__69817_70718 = G__70733;
count__69818_70719 = G__70734;
i__69819_70720 = G__70735;
continue;
} else {
var test_70736 = cljs.core.first(seq__69816_70730__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_70736,":");


var G__70738 = cljs.core.next(seq__69816_70730__$1);
var G__70739 = null;
var G__70740 = (0);
var G__70741 = (0);
seq__69816_70717 = G__70738;
chunk__69817_70718 = G__70739;
count__69818_70719 = G__70740;
i__69819_70720 = G__70741;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_70710);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_70710);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__70743 = cljs.core.next(seq__69778_70699__$1);
var G__70744 = null;
var G__70745 = (0);
var G__70746 = (0);
seq__69778_70653 = G__70743;
chunk__69779_70654 = G__70744;
count__69780_70655 = G__70745;
i__69781_70656 = G__70746;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__69820){
var map__69821 = p__69820;
var map__69821__$1 = (((((!((map__69821 == null))))?(((((map__69821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69821):map__69821);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69821__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__69827 = env;
var G__69828 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__69827,G__69828) : cljs.compiler.resolve_type.call(null,G__69827,G__69828));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__69829 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69829,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69829,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__69824_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__69824_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__69824_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__69832 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__69832,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__69832;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__69835 = env;
var G__69836 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__69835,G__69836) : cljs.compiler.resolve_type.call(null,G__69835,G__69836));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69837_SHARP_){
return cljs.compiler.resolve_type(env,p1__69837_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__69840 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__69841 = cljs.core.seq(vec__69840);
var first__69842 = cljs.core.first(seq__69841);
var seq__69841__$1 = cljs.core.next(seq__69841);
var p = first__69842;
var first__69842__$1 = cljs.core.first(seq__69841__$1);
var seq__69841__$2 = cljs.core.next(seq__69841__$1);
var ts = first__69842__$1;
var first__69842__$2 = cljs.core.first(seq__69841__$2);
var seq__69841__$3 = cljs.core.next(seq__69841__$2);
var n = first__69842__$2;
var xs = seq__69841__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__69843 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__69844 = cljs.core.seq(vec__69843);
var first__69845 = cljs.core.first(seq__69844);
var seq__69844__$1 = cljs.core.next(seq__69844);
var p = first__69845;
var first__69845__$1 = cljs.core.first(seq__69844__$1);
var seq__69844__$2 = cljs.core.next(seq__69844__$1);
var ts = first__69845__$1;
var xs = seq__69844__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__69847 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__69846 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__69846.cljs$core$IFn$_invoke$arity$1 ? fexpr__69846.cljs$core$IFn$_invoke$arity$1(G__69847) : fexpr__69846.call(null,G__69847));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__69850 = arguments.length;
switch (G__69850) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__69865 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69848_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__69848_SHARP_);
} else {
return p1__69848_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__69866 = cljs.core.seq(vec__69865);
var first__69867 = cljs.core.first(seq__69866);
var seq__69866__$1 = cljs.core.next(seq__69866);
var x = first__69867;
var ys = seq__69866__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__69868 = cljs.core.seq(ys);
var chunk__69869 = null;
var count__69870 = (0);
var i__69871 = (0);
while(true){
if((i__69871 < count__69870)){
var next_line = chunk__69869.cljs$core$IIndexed$_nth$arity$2(null,i__69871);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__70791 = seq__69868;
var G__70792 = chunk__69869;
var G__70793 = count__69870;
var G__70794 = (i__69871 + (1));
seq__69868 = G__70791;
chunk__69869 = G__70792;
count__69870 = G__70793;
i__69871 = G__70794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__69868);
if(temp__5735__auto__){
var seq__69868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69868__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69868__$1);
var G__70795 = cljs.core.chunk_rest(seq__69868__$1);
var G__70796 = c__4556__auto__;
var G__70797 = cljs.core.count(c__4556__auto__);
var G__70798 = (0);
seq__69868 = G__70795;
chunk__69869 = G__70796;
count__69870 = G__70797;
i__69871 = G__70798;
continue;
} else {
var next_line = cljs.core.first(seq__69868__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__70799 = cljs.core.next(seq__69868__$1);
var G__70800 = null;
var G__70801 = (0);
var G__70802 = (0);
seq__69868 = G__70799;
chunk__69869 = G__70800;
count__69870 = G__70801;
i__69871 = G__70802;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__69875_70803 = cljs.core.seq(docs__$2);
var chunk__69876_70804 = null;
var count__69877_70805 = (0);
var i__69878_70806 = (0);
while(true){
if((i__69878_70806 < count__69877_70805)){
var e_70807 = chunk__69876_70804.cljs$core$IIndexed$_nth$arity$2(null,i__69878_70806);
if(cljs.core.truth_(e_70807)){
print_comment_lines(e_70807);
} else {
}


var G__70808 = seq__69875_70803;
var G__70809 = chunk__69876_70804;
var G__70810 = count__69877_70805;
var G__70811 = (i__69878_70806 + (1));
seq__69875_70803 = G__70808;
chunk__69876_70804 = G__70809;
count__69877_70805 = G__70810;
i__69878_70806 = G__70811;
continue;
} else {
var temp__5735__auto___70816 = cljs.core.seq(seq__69875_70803);
if(temp__5735__auto___70816){
var seq__69875_70818__$1 = temp__5735__auto___70816;
if(cljs.core.chunked_seq_QMARK_(seq__69875_70818__$1)){
var c__4556__auto___70823 = cljs.core.chunk_first(seq__69875_70818__$1);
var G__70824 = cljs.core.chunk_rest(seq__69875_70818__$1);
var G__70825 = c__4556__auto___70823;
var G__70826 = cljs.core.count(c__4556__auto___70823);
var G__70827 = (0);
seq__69875_70803 = G__70824;
chunk__69876_70804 = G__70825;
count__69877_70805 = G__70826;
i__69878_70806 = G__70827;
continue;
} else {
var e_70829 = cljs.core.first(seq__69875_70818__$1);
if(cljs.core.truth_(e_70829)){
print_comment_lines(e_70829);
} else {
}


var G__70831 = cljs.core.next(seq__69875_70818__$1);
var G__70832 = null;
var G__70833 = (0);
var G__70834 = (0);
seq__69875_70803 = G__70831;
chunk__69876_70804 = G__70832;
count__69877_70805 = G__70833;
i__69878_70806 = G__70834;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__69896_SHARP_){
return goog.string.startsWith(p1__69896_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__69897){
var map__69898 = p__69897;
var map__69898__$1 = (((((!((map__69898 == null))))?(((((map__69898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69898):map__69898);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69898__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__69900){
var map__69901 = p__69900;
var map__69901__$1 = (((((!((map__69901 == null))))?(((((map__69901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69901):map__69901);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69901__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__69903_70853 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__69904_70854 = null;
var count__69905_70855 = (0);
var i__69906_70856 = (0);
while(true){
if((i__69906_70856 < count__69905_70855)){
var vec__69913_70863 = chunk__69904_70854.cljs$core$IIndexed$_nth$arity$2(null,i__69906_70856);
var i_70864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69913_70863,(0),null);
var param_70865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69913_70863,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_70865);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__70866 = seq__69903_70853;
var G__70867 = chunk__69904_70854;
var G__70868 = count__69905_70855;
var G__70869 = (i__69906_70856 + (1));
seq__69903_70853 = G__70866;
chunk__69904_70854 = G__70867;
count__69905_70855 = G__70868;
i__69906_70856 = G__70869;
continue;
} else {
var temp__5735__auto___70870 = cljs.core.seq(seq__69903_70853);
if(temp__5735__auto___70870){
var seq__69903_70872__$1 = temp__5735__auto___70870;
if(cljs.core.chunked_seq_QMARK_(seq__69903_70872__$1)){
var c__4556__auto___70874 = cljs.core.chunk_first(seq__69903_70872__$1);
var G__70875 = cljs.core.chunk_rest(seq__69903_70872__$1);
var G__70876 = c__4556__auto___70874;
var G__70877 = cljs.core.count(c__4556__auto___70874);
var G__70878 = (0);
seq__69903_70853 = G__70875;
chunk__69904_70854 = G__70876;
count__69905_70855 = G__70877;
i__69906_70856 = G__70878;
continue;
} else {
var vec__69916_70880 = cljs.core.first(seq__69903_70872__$1);
var i_70881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69916_70880,(0),null);
var param_70882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69916_70880,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_70882);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__70907 = cljs.core.next(seq__69903_70872__$1);
var G__70908 = null;
var G__70909 = (0);
var G__70910 = (0);
seq__69903_70853 = G__70907;
chunk__69904_70854 = G__70908;
count__69905_70855 = G__70909;
i__69906_70856 = G__70910;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__69920_70912 = cljs.core.seq(params);
var chunk__69921_70913 = null;
var count__69922_70914 = (0);
var i__69923_70915 = (0);
while(true){
if((i__69923_70915 < count__69922_70914)){
var param_70916 = chunk__69921_70913.cljs$core$IIndexed$_nth$arity$2(null,i__69923_70915);
cljs.compiler.emit(param_70916);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_70916,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70918 = seq__69920_70912;
var G__70919 = chunk__69921_70913;
var G__70920 = count__69922_70914;
var G__70921 = (i__69923_70915 + (1));
seq__69920_70912 = G__70918;
chunk__69921_70913 = G__70919;
count__69922_70914 = G__70920;
i__69923_70915 = G__70921;
continue;
} else {
var temp__5735__auto___70922 = cljs.core.seq(seq__69920_70912);
if(temp__5735__auto___70922){
var seq__69920_70923__$1 = temp__5735__auto___70922;
if(cljs.core.chunked_seq_QMARK_(seq__69920_70923__$1)){
var c__4556__auto___70925 = cljs.core.chunk_first(seq__69920_70923__$1);
var G__70926 = cljs.core.chunk_rest(seq__69920_70923__$1);
var G__70927 = c__4556__auto___70925;
var G__70928 = cljs.core.count(c__4556__auto___70925);
var G__70929 = (0);
seq__69920_70912 = G__70926;
chunk__69921_70913 = G__70927;
count__69922_70914 = G__70928;
i__69923_70915 = G__70929;
continue;
} else {
var param_70932 = cljs.core.first(seq__69920_70923__$1);
cljs.compiler.emit(param_70932);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_70932,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70933 = cljs.core.next(seq__69920_70923__$1);
var G__70934 = null;
var G__70935 = (0);
var G__70936 = (0);
seq__69920_70912 = G__70933;
chunk__69921_70913 = G__70934;
count__69922_70914 = G__70935;
i__69923_70915 = G__70936;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__69924_70937 = cljs.core.seq(params);
var chunk__69925_70938 = null;
var count__69926_70939 = (0);
var i__69927_70940 = (0);
while(true){
if((i__69927_70940 < count__69926_70939)){
var param_70942 = chunk__69925_70938.cljs$core$IIndexed$_nth$arity$2(null,i__69927_70940);
cljs.compiler.emit(param_70942);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_70942,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70944 = seq__69924_70937;
var G__70945 = chunk__69925_70938;
var G__70946 = count__69926_70939;
var G__70947 = (i__69927_70940 + (1));
seq__69924_70937 = G__70944;
chunk__69925_70938 = G__70945;
count__69926_70939 = G__70946;
i__69927_70940 = G__70947;
continue;
} else {
var temp__5735__auto___70948 = cljs.core.seq(seq__69924_70937);
if(temp__5735__auto___70948){
var seq__69924_70949__$1 = temp__5735__auto___70948;
if(cljs.core.chunked_seq_QMARK_(seq__69924_70949__$1)){
var c__4556__auto___70950 = cljs.core.chunk_first(seq__69924_70949__$1);
var G__70951 = cljs.core.chunk_rest(seq__69924_70949__$1);
var G__70952 = c__4556__auto___70950;
var G__70953 = cljs.core.count(c__4556__auto___70950);
var G__70954 = (0);
seq__69924_70937 = G__70951;
chunk__69925_70938 = G__70952;
count__69926_70939 = G__70953;
i__69927_70940 = G__70954;
continue;
} else {
var param_70955 = cljs.core.first(seq__69924_70949__$1);
cljs.compiler.emit(param_70955);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_70955,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70956 = cljs.core.next(seq__69924_70949__$1);
var G__70957 = null;
var G__70958 = (0);
var G__70959 = (0);
seq__69924_70937 = G__70956;
chunk__69925_70938 = G__70957;
count__69926_70939 = G__70958;
i__69927_70940 = G__70959;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__69932 = cljs.core.seq(params);
var chunk__69933 = null;
var count__69934 = (0);
var i__69935 = (0);
while(true){
if((i__69935 < count__69934)){
var param = chunk__69933.cljs$core$IIndexed$_nth$arity$2(null,i__69935);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70960 = seq__69932;
var G__70961 = chunk__69933;
var G__70962 = count__69934;
var G__70963 = (i__69935 + (1));
seq__69932 = G__70960;
chunk__69933 = G__70961;
count__69934 = G__70962;
i__69935 = G__70963;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__69932);
if(temp__5735__auto__){
var seq__69932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69932__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__69932__$1);
var G__70964 = cljs.core.chunk_rest(seq__69932__$1);
var G__70965 = c__4556__auto__;
var G__70966 = cljs.core.count(c__4556__auto__);
var G__70967 = (0);
seq__69932 = G__70964;
chunk__69933 = G__70965;
count__69934 = G__70966;
i__69935 = G__70967;
continue;
} else {
var param = cljs.core.first(seq__69932__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__70968 = cljs.core.next(seq__69932__$1);
var G__70969 = null;
var G__70970 = (0);
var G__70971 = (0);
seq__69932 = G__70968;
chunk__69933 = G__70969;
count__69934 = G__70970;
i__69935 = G__70971;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__69936){
var map__69937 = p__69936;
var map__69937__$1 = (((((!((map__69937 == null))))?(((((map__69937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69937):map__69937);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69937__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__69939){
var map__69940 = p__69939;
var map__69940__$1 = (((((!((map__69940 == null))))?(((((map__69940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69940):map__69940);
var f = map__69940__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69940__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_70995__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_70996 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_70995__$1);
var delegate_name_70997 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_70996),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_70997," = function (");

var seq__69942_70998 = cljs.core.seq(params);
var chunk__69943_70999 = null;
var count__69944_71000 = (0);
var i__69945_71001 = (0);
while(true){
if((i__69945_71001 < count__69944_71000)){
var param_71003 = chunk__69943_70999.cljs$core$IIndexed$_nth$arity$2(null,i__69945_71001);
cljs.compiler.emit(param_71003);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_71003,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__71005 = seq__69942_70998;
var G__71006 = chunk__69943_70999;
var G__71007 = count__69944_71000;
var G__71008 = (i__69945_71001 + (1));
seq__69942_70998 = G__71005;
chunk__69943_70999 = G__71006;
count__69944_71000 = G__71007;
i__69945_71001 = G__71008;
continue;
} else {
var temp__5735__auto___71009 = cljs.core.seq(seq__69942_70998);
if(temp__5735__auto___71009){
var seq__69942_71010__$1 = temp__5735__auto___71009;
if(cljs.core.chunked_seq_QMARK_(seq__69942_71010__$1)){
var c__4556__auto___71011 = cljs.core.chunk_first(seq__69942_71010__$1);
var G__71015 = cljs.core.chunk_rest(seq__69942_71010__$1);
var G__71016 = c__4556__auto___71011;
var G__71017 = cljs.core.count(c__4556__auto___71011);
var G__71018 = (0);
seq__69942_70998 = G__71015;
chunk__69943_70999 = G__71016;
count__69944_71000 = G__71017;
i__69945_71001 = G__71018;
continue;
} else {
var param_71020 = cljs.core.first(seq__69942_71010__$1);
cljs.compiler.emit(param_71020);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_71020,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__71037 = cljs.core.next(seq__69942_71010__$1);
var G__71038 = null;
var G__71039 = (0);
var G__71040 = (0);
seq__69942_70998 = G__71037;
chunk__69943_70999 = G__71038;
count__69944_71000 = G__71039;
i__69945_71001 = G__71040;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_70996," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_71046 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_71046,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_70997,".call(this,");

var seq__69946_71047 = cljs.core.seq(params);
var chunk__69947_71048 = null;
var count__69948_71049 = (0);
var i__69949_71050 = (0);
while(true){
if((i__69949_71050 < count__69948_71049)){
var param_71054 = chunk__69947_71048.cljs$core$IIndexed$_nth$arity$2(null,i__69949_71050);
cljs.compiler.emit(param_71054);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_71054,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__71056 = seq__69946_71047;
var G__71057 = chunk__69947_71048;
var G__71058 = count__69948_71049;
var G__71059 = (i__69949_71050 + (1));
seq__69946_71047 = G__71056;
chunk__69947_71048 = G__71057;
count__69948_71049 = G__71058;
i__69949_71050 = G__71059;
continue;
} else {
var temp__5735__auto___71060 = cljs.core.seq(seq__69946_71047);
if(temp__5735__auto___71060){
var seq__69946_71061__$1 = temp__5735__auto___71060;
if(cljs.core.chunked_seq_QMARK_(seq__69946_71061__$1)){
var c__4556__auto___71062 = cljs.core.chunk_first(seq__69946_71061__$1);
var G__71063 = cljs.core.chunk_rest(seq__69946_71061__$1);
var G__71064 = c__4556__auto___71062;
var G__71065 = cljs.core.count(c__4556__auto___71062);
var G__71066 = (0);
seq__69946_71047 = G__71063;
chunk__69947_71048 = G__71064;
count__69948_71049 = G__71065;
i__69949_71050 = G__71066;
continue;
} else {
var param_71067 = cljs.core.first(seq__69946_71061__$1);
cljs.compiler.emit(param_71067);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_71067,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__71068 = cljs.core.next(seq__69946_71061__$1);
var G__71069 = null;
var G__71070 = (0);
var G__71071 = (0);
seq__69946_71047 = G__71068;
chunk__69947_71048 = G__71069;
count__69948_71049 = G__71070;
i__69949_71050 = G__71071;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_70996,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_70996,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_70995__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_70996,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_70997,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_70996,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__69953){
var map__69954 = p__69953;
var map__69954__$1 = (((((!((map__69954 == null))))?(((((map__69954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69954):map__69954);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69954__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69950_SHARP_){
var and__4115__auto__ = p1__69950_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__69950_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_71075__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_71076 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_71075__$1);
var maxparams_71077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_71078 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_71076),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_71079 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__69951_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__69951_SHARP_)));
}),cljs.core.seq(mmap_71078));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_71076," = null;");

var seq__69956_71106 = cljs.core.seq(ms_71079);
var chunk__69957_71107 = null;
var count__69958_71108 = (0);
var i__69959_71109 = (0);
while(true){
if((i__69959_71109 < count__69958_71108)){
var vec__69966_71110 = chunk__69957_71107.cljs$core$IIndexed$_nth$arity$2(null,i__69959_71109);
var n_71111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69966_71110,(0),null);
var meth_71112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69966_71110,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_71111," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71112))){
cljs.compiler.emit_variadic_fn_method(meth_71112);
} else {
cljs.compiler.emit_fn_method(meth_71112);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__71118 = seq__69956_71106;
var G__71119 = chunk__69957_71107;
var G__71120 = count__69958_71108;
var G__71121 = (i__69959_71109 + (1));
seq__69956_71106 = G__71118;
chunk__69957_71107 = G__71119;
count__69958_71108 = G__71120;
i__69959_71109 = G__71121;
continue;
} else {
var temp__5735__auto___71122 = cljs.core.seq(seq__69956_71106);
if(temp__5735__auto___71122){
var seq__69956_71123__$1 = temp__5735__auto___71122;
if(cljs.core.chunked_seq_QMARK_(seq__69956_71123__$1)){
var c__4556__auto___71124 = cljs.core.chunk_first(seq__69956_71123__$1);
var G__71125 = cljs.core.chunk_rest(seq__69956_71123__$1);
var G__71126 = c__4556__auto___71124;
var G__71127 = cljs.core.count(c__4556__auto___71124);
var G__71128 = (0);
seq__69956_71106 = G__71125;
chunk__69957_71107 = G__71126;
count__69958_71108 = G__71127;
i__69959_71109 = G__71128;
continue;
} else {
var vec__69969_71131 = cljs.core.first(seq__69956_71123__$1);
var n_71132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69969_71131,(0),null);
var meth_71133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69969_71131,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_71132," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71133))){
cljs.compiler.emit_variadic_fn_method(meth_71133);
} else {
cljs.compiler.emit_fn_method(meth_71133);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__71138 = cljs.core.next(seq__69956_71123__$1);
var G__71139 = null;
var G__71140 = (0);
var G__71141 = (0);
seq__69956_71106 = G__71138;
chunk__69957_71107 = G__71139;
count__69958_71108 = G__71140;
i__69959_71109 = G__71141;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_71076," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_71077),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_71077)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_71077));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__69972_71142 = cljs.core.seq(ms_71079);
var chunk__69973_71143 = null;
var count__69974_71144 = (0);
var i__69975_71145 = (0);
while(true){
if((i__69975_71145 < count__69974_71144)){
var vec__69987_71146 = chunk__69973_71143.cljs$core$IIndexed$_nth$arity$2(null,i__69975_71145);
var n_71147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69987_71146,(0),null);
var meth_71148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69987_71146,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71148))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_71153 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_71153," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_71154 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_71153," = new cljs.core.IndexedSeq(",a_71154,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_71147,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_71077)),(((cljs.core.count(maxparams_71077) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_71153,");"], 0));
} else {
var pcnt_71155 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_71148));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_71155,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_71147,".call(this",(((pcnt_71155 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_71155,maxparams_71077)),null,(1),null)),(2),null))),");");
}


var G__71156 = seq__69972_71142;
var G__71157 = chunk__69973_71143;
var G__71158 = count__69974_71144;
var G__71159 = (i__69975_71145 + (1));
seq__69972_71142 = G__71156;
chunk__69973_71143 = G__71157;
count__69974_71144 = G__71158;
i__69975_71145 = G__71159;
continue;
} else {
var temp__5735__auto___71160 = cljs.core.seq(seq__69972_71142);
if(temp__5735__auto___71160){
var seq__69972_71161__$1 = temp__5735__auto___71160;
if(cljs.core.chunked_seq_QMARK_(seq__69972_71161__$1)){
var c__4556__auto___71162 = cljs.core.chunk_first(seq__69972_71161__$1);
var G__71163 = cljs.core.chunk_rest(seq__69972_71161__$1);
var G__71164 = c__4556__auto___71162;
var G__71165 = cljs.core.count(c__4556__auto___71162);
var G__71166 = (0);
seq__69972_71142 = G__71163;
chunk__69973_71143 = G__71164;
count__69974_71144 = G__71165;
i__69975_71145 = G__71166;
continue;
} else {
var vec__69993_71167 = cljs.core.first(seq__69972_71161__$1);
var n_71168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69993_71167,(0),null);
var meth_71169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69993_71167,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71169))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_71170 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_71170," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_71171 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_71170," = new cljs.core.IndexedSeq(",a_71171,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_71168,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_71077)),(((cljs.core.count(maxparams_71077) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_71170,");"], 0));
} else {
var pcnt_71172 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_71169));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_71172,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_71168,".call(this",(((pcnt_71172 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_71172,maxparams_71077)),null,(1),null)),(2),null))),");");
}


var G__71173 = cljs.core.next(seq__69972_71161__$1);
var G__71174 = null;
var G__71175 = (0);
var G__71176 = (0);
seq__69972_71142 = G__71173;
chunk__69973_71143 = G__71174;
count__69974_71144 = G__71175;
i__69975_71145 = G__71176;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_71177 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_71079)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_71177,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_71076,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_71076,".cljs$lang$applyTo = ",cljs.core.some((function (p1__69952_SHARP_){
var vec__69996 = p1__69952_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69996,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69996,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_71079),".cljs$lang$applyTo;");
} else {
}

var seq__69999_71178 = cljs.core.seq(ms_71079);
var chunk__70000_71179 = null;
var count__70001_71180 = (0);
var i__70002_71181 = (0);
while(true){
if((i__70002_71181 < count__70001_71180)){
var vec__70009_71182 = chunk__70000_71179.cljs$core$IIndexed$_nth$arity$2(null,i__70002_71181);
var n_71183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70009_71182,(0),null);
var meth_71184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70009_71182,(1),null);
var c_71185 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_71184));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71184))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_71076,".cljs$core$IFn$_invoke$arity$variadic = ",n_71183,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_71076,".cljs$core$IFn$_invoke$arity$",c_71185," = ",n_71183,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__71186 = seq__69999_71178;
var G__71187 = chunk__70000_71179;
var G__71188 = count__70001_71180;
var G__71189 = (i__70002_71181 + (1));
seq__69999_71178 = G__71186;
chunk__70000_71179 = G__71187;
count__70001_71180 = G__71188;
i__70002_71181 = G__71189;
continue;
} else {
var temp__5735__auto___71190 = cljs.core.seq(seq__69999_71178);
if(temp__5735__auto___71190){
var seq__69999_71191__$1 = temp__5735__auto___71190;
if(cljs.core.chunked_seq_QMARK_(seq__69999_71191__$1)){
var c__4556__auto___71192 = cljs.core.chunk_first(seq__69999_71191__$1);
var G__71193 = cljs.core.chunk_rest(seq__69999_71191__$1);
var G__71194 = c__4556__auto___71192;
var G__71195 = cljs.core.count(c__4556__auto___71192);
var G__71196 = (0);
seq__69999_71178 = G__71193;
chunk__70000_71179 = G__71194;
count__70001_71180 = G__71195;
i__70002_71181 = G__71196;
continue;
} else {
var vec__70012_71197 = cljs.core.first(seq__69999_71191__$1);
var n_71198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70012_71197,(0),null);
var meth_71199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70012_71197,(1),null);
var c_71200 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_71199));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_71199))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_71076,".cljs$core$IFn$_invoke$arity$variadic = ",n_71198,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_71076,".cljs$core$IFn$_invoke$arity$",c_71200," = ",n_71198,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__71201 = cljs.core.next(seq__69999_71191__$1);
var G__71202 = null;
var G__71203 = (0);
var G__71204 = (0);
seq__69999_71178 = G__71201;
chunk__70000_71179 = G__71202;
count__70001_71180 = G__71203;
i__70002_71181 = G__71204;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_71076,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__70015){
var map__70016 = p__70015;
var map__70016__$1 = (((((!((map__70016 == null))))?(((((map__70016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70016):map__70016);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70016__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70016__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__70018_71205 = cljs.core.seq(statements);
var chunk__70019_71206 = null;
var count__70020_71207 = (0);
var i__70021_71208 = (0);
while(true){
if((i__70021_71208 < count__70020_71207)){
var s_71209 = chunk__70019_71206.cljs$core$IIndexed$_nth$arity$2(null,i__70021_71208);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_71209);


var G__71210 = seq__70018_71205;
var G__71211 = chunk__70019_71206;
var G__71212 = count__70020_71207;
var G__71213 = (i__70021_71208 + (1));
seq__70018_71205 = G__71210;
chunk__70019_71206 = G__71211;
count__70020_71207 = G__71212;
i__70021_71208 = G__71213;
continue;
} else {
var temp__5735__auto___71215 = cljs.core.seq(seq__70018_71205);
if(temp__5735__auto___71215){
var seq__70018_71216__$1 = temp__5735__auto___71215;
if(cljs.core.chunked_seq_QMARK_(seq__70018_71216__$1)){
var c__4556__auto___71217 = cljs.core.chunk_first(seq__70018_71216__$1);
var G__71218 = cljs.core.chunk_rest(seq__70018_71216__$1);
var G__71219 = c__4556__auto___71217;
var G__71220 = cljs.core.count(c__4556__auto___71217);
var G__71221 = (0);
seq__70018_71205 = G__71218;
chunk__70019_71206 = G__71219;
count__70020_71207 = G__71220;
i__70021_71208 = G__71221;
continue;
} else {
var s_71227 = cljs.core.first(seq__70018_71216__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_71227);


var G__71229 = cljs.core.next(seq__70018_71216__$1);
var G__71230 = null;
var G__71231 = (0);
var G__71232 = (0);
seq__70018_71205 = G__71229;
chunk__70019_71206 = G__71230;
count__70020_71207 = G__71231;
i__70021_71208 = G__71232;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__70023){
var map__70024 = p__70023;
var map__70024__$1 = (((((!((map__70024 == null))))?(((((map__70024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70024):map__70024);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70024__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70024__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70024__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70024__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__70026,is_loop){
var map__70027 = p__70026;
var map__70027__$1 = (((((!((map__70027 == null))))?(((((map__70027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70027):map__70027);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70027__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70027__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70027__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__70030_71233 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__70031_71234 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__70031_71234);

try{var seq__70032_71235 = cljs.core.seq(bindings);
var chunk__70033_71236 = null;
var count__70034_71237 = (0);
var i__70035_71238 = (0);
while(true){
if((i__70035_71238 < count__70034_71237)){
var map__70042_71239 = chunk__70033_71236.cljs$core$IIndexed$_nth$arity$2(null,i__70035_71238);
var map__70042_71240__$1 = (((((!((map__70042_71239 == null))))?(((((map__70042_71239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70042_71239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70042_71239):map__70042_71239);
var binding_71241 = map__70042_71240__$1;
var init_71242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70042_71240__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_71241);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_71242,";");


var G__71243 = seq__70032_71235;
var G__71244 = chunk__70033_71236;
var G__71245 = count__70034_71237;
var G__71246 = (i__70035_71238 + (1));
seq__70032_71235 = G__71243;
chunk__70033_71236 = G__71244;
count__70034_71237 = G__71245;
i__70035_71238 = G__71246;
continue;
} else {
var temp__5735__auto___71247 = cljs.core.seq(seq__70032_71235);
if(temp__5735__auto___71247){
var seq__70032_71248__$1 = temp__5735__auto___71247;
if(cljs.core.chunked_seq_QMARK_(seq__70032_71248__$1)){
var c__4556__auto___71249 = cljs.core.chunk_first(seq__70032_71248__$1);
var G__71250 = cljs.core.chunk_rest(seq__70032_71248__$1);
var G__71251 = c__4556__auto___71249;
var G__71252 = cljs.core.count(c__4556__auto___71249);
var G__71253 = (0);
seq__70032_71235 = G__71250;
chunk__70033_71236 = G__71251;
count__70034_71237 = G__71252;
i__70035_71238 = G__71253;
continue;
} else {
var map__70046_71254 = cljs.core.first(seq__70032_71248__$1);
var map__70046_71255__$1 = (((((!((map__70046_71254 == null))))?(((((map__70046_71254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70046_71254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70046_71254):map__70046_71254);
var binding_71256 = map__70046_71255__$1;
var init_71257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70046_71255__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_71256);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_71257,";");


var G__71258 = cljs.core.next(seq__70032_71248__$1);
var G__71259 = null;
var G__71260 = (0);
var G__71261 = (0);
seq__70032_71235 = G__71258;
chunk__70033_71236 = G__71259;
count__70034_71237 = G__71260;
i__70035_71238 = G__71261;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__70030_71233);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__70048){
var map__70049 = p__70048;
var map__70049__$1 = (((((!((map__70049 == null))))?(((((map__70049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70049):map__70049);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___71301 = cljs.core.count(exprs);
var i_71302 = (0);
while(true){
if((i_71302 < n__4613__auto___71301)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_71302) : temps.call(null,i_71302))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_71302) : exprs.call(null,i_71302)),";");

var G__71303 = (i_71302 + (1));
i_71302 = G__71303;
continue;
} else {
}
break;
}

var n__4613__auto___71304 = cljs.core.count(exprs);
var i_71305 = (0);
while(true){
if((i_71305 < n__4613__auto___71304)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_71305) : params.call(null,i_71305)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_71305) : temps.call(null,i_71305)),";");

var G__71306 = (i_71305 + (1));
i_71305 = G__71306;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__70051){
var map__70052 = p__70051;
var map__70052__$1 = (((((!((map__70052 == null))))?(((((map__70052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70052):map__70052);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70052__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70052__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__70056_71307 = cljs.core.seq(bindings);
var chunk__70057_71308 = null;
var count__70058_71309 = (0);
var i__70059_71310 = (0);
while(true){
if((i__70059_71310 < count__70058_71309)){
var map__70064_71311 = chunk__70057_71308.cljs$core$IIndexed$_nth$arity$2(null,i__70059_71310);
var map__70064_71312__$1 = (((((!((map__70064_71311 == null))))?(((((map__70064_71311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70064_71311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70064_71311):map__70064_71311);
var binding_71313 = map__70064_71312__$1;
var init_71314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70064_71312__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_71313)," = ",init_71314,";");


var G__71315 = seq__70056_71307;
var G__71316 = chunk__70057_71308;
var G__71317 = count__70058_71309;
var G__71318 = (i__70059_71310 + (1));
seq__70056_71307 = G__71315;
chunk__70057_71308 = G__71316;
count__70058_71309 = G__71317;
i__70059_71310 = G__71318;
continue;
} else {
var temp__5735__auto___71319 = cljs.core.seq(seq__70056_71307);
if(temp__5735__auto___71319){
var seq__70056_71320__$1 = temp__5735__auto___71319;
if(cljs.core.chunked_seq_QMARK_(seq__70056_71320__$1)){
var c__4556__auto___71321 = cljs.core.chunk_first(seq__70056_71320__$1);
var G__71322 = cljs.core.chunk_rest(seq__70056_71320__$1);
var G__71323 = c__4556__auto___71321;
var G__71324 = cljs.core.count(c__4556__auto___71321);
var G__71325 = (0);
seq__70056_71307 = G__71322;
chunk__70057_71308 = G__71323;
count__70058_71309 = G__71324;
i__70059_71310 = G__71325;
continue;
} else {
var map__70066_71326 = cljs.core.first(seq__70056_71320__$1);
var map__70066_71327__$1 = (((((!((map__70066_71326 == null))))?(((((map__70066_71326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70066_71326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70066_71326):map__70066_71326);
var binding_71328 = map__70066_71327__$1;
var init_71329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70066_71327__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_71328)," = ",init_71329,";");


var G__71330 = cljs.core.next(seq__70056_71320__$1);
var G__71331 = null;
var G__71332 = (0);
var G__71333 = (0);
seq__70056_71307 = G__71330;
chunk__70057_71308 = G__71331;
count__70058_71309 = G__71332;
i__70059_71310 = G__71333;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__70070){
var map__70071 = p__70070;
var map__70071__$1 = (((((!((map__70071 == null))))?(((((map__70071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70071):map__70071);
var expr = map__70071__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70071__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70071__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__70083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__70083.cljs$core$IFn$_invoke$arity$1 ? fexpr__70083.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__70083.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__70085 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__70085.cljs$core$IFn$_invoke$arity$1 ? fexpr__70085.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__70085.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__70073 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__70068_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70068_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__70069_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70069_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70073,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70073,(1),null);
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_71343 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_71343,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_71344 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_71344,args)),(((mfa_71344 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_71344,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__70087 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__70086 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__70086.cljs$core$IFn$_invoke$arity$1 ? fexpr__70086.cljs$core$IFn$_invoke$arity$1(G__70087) : fexpr__70086.call(null,G__70087));
} else {
return and__4115__auto__;
}
})())){
var fprop_71345 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_71345," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_71345,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_71345," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_71345,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__70091){
var map__70092 = p__70091;
var map__70092__$1 = (((((!((map__70092 == null))))?(((((map__70092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70092):map__70092);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__70094){
var map__70095 = p__70094;
var map__70095__$1 = (((((!((map__70095 == null))))?(((((map__70095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70095):map__70095);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__70097 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__70097__$1 = (((((!((map__70097 == null))))?(((((map__70097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70097):map__70097);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__70098 = options;
var map__70098__$1 = (((((!((map__70098 == null))))?(((((map__70098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70098):map__70098);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__70099 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__70104 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__70104__$1 = (((((!((map__70104 == null))))?(((((map__70104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70104):map__70104);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70104__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70099,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70099,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__70106_71362 = cljs.core.seq(libs_to_load);
var chunk__70107_71363 = null;
var count__70108_71364 = (0);
var i__70109_71365 = (0);
while(true){
if((i__70109_71365 < count__70108_71364)){
var lib_71368 = chunk__70107_71363.cljs$core$IIndexed$_nth$arity$2(null,i__70109_71365);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_71368)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_71368),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71368),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_71368),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71368),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_71368,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71368),"');");
}

}
}
}


var G__71374 = seq__70106_71362;
var G__71375 = chunk__70107_71363;
var G__71376 = count__70108_71364;
var G__71377 = (i__70109_71365 + (1));
seq__70106_71362 = G__71374;
chunk__70107_71363 = G__71375;
count__70108_71364 = G__71376;
i__70109_71365 = G__71377;
continue;
} else {
var temp__5735__auto___71378 = cljs.core.seq(seq__70106_71362);
if(temp__5735__auto___71378){
var seq__70106_71380__$1 = temp__5735__auto___71378;
if(cljs.core.chunked_seq_QMARK_(seq__70106_71380__$1)){
var c__4556__auto___71383 = cljs.core.chunk_first(seq__70106_71380__$1);
var G__71384 = cljs.core.chunk_rest(seq__70106_71380__$1);
var G__71385 = c__4556__auto___71383;
var G__71386 = cljs.core.count(c__4556__auto___71383);
var G__71387 = (0);
seq__70106_71362 = G__71384;
chunk__70107_71363 = G__71385;
count__70108_71364 = G__71386;
i__70109_71365 = G__71387;
continue;
} else {
var lib_71388 = cljs.core.first(seq__70106_71380__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_71388)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_71388),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71388),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_71388),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71388),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_71388,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_71388),"');");
}

}
}
}


var G__71394 = cljs.core.next(seq__70106_71380__$1);
var G__71395 = null;
var G__71396 = (0);
var G__71397 = (0);
seq__70106_71362 = G__71394;
chunk__70107_71363 = G__71395;
count__70108_71364 = G__71396;
i__70109_71365 = G__71397;
continue;
}
} else {
}
}
break;
}

var seq__70113_71398 = cljs.core.seq(node_libs);
var chunk__70114_71399 = null;
var count__70115_71400 = (0);
var i__70116_71401 = (0);
while(true){
if((i__70116_71401 < count__70115_71400)){
var lib_71402 = chunk__70114_71399.cljs$core$IIndexed$_nth$arity$2(null,i__70116_71401);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_71402)," = require('",lib_71402,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__71403 = seq__70113_71398;
var G__71404 = chunk__70114_71399;
var G__71405 = count__70115_71400;
var G__71406 = (i__70116_71401 + (1));
seq__70113_71398 = G__71403;
chunk__70114_71399 = G__71404;
count__70115_71400 = G__71405;
i__70116_71401 = G__71406;
continue;
} else {
var temp__5735__auto___71407 = cljs.core.seq(seq__70113_71398);
if(temp__5735__auto___71407){
var seq__70113_71408__$1 = temp__5735__auto___71407;
if(cljs.core.chunked_seq_QMARK_(seq__70113_71408__$1)){
var c__4556__auto___71436 = cljs.core.chunk_first(seq__70113_71408__$1);
var G__71437 = cljs.core.chunk_rest(seq__70113_71408__$1);
var G__71438 = c__4556__auto___71436;
var G__71439 = cljs.core.count(c__4556__auto___71436);
var G__71440 = (0);
seq__70113_71398 = G__71437;
chunk__70114_71399 = G__71438;
count__70115_71400 = G__71439;
i__70116_71401 = G__71440;
continue;
} else {
var lib_71441 = cljs.core.first(seq__70113_71408__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_71441)," = require('",lib_71441,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__71442 = cljs.core.next(seq__70113_71408__$1);
var G__71443 = null;
var G__71444 = (0);
var G__71445 = (0);
seq__70113_71398 = G__71442;
chunk__70114_71399 = G__71443;
count__70115_71400 = G__71444;
i__70116_71401 = G__71445;
continue;
}
} else {
}
}
break;
}

var seq__70117_71446 = cljs.core.seq(global_exports_libs);
var chunk__70118_71447 = null;
var count__70119_71448 = (0);
var i__70120_71449 = (0);
while(true){
if((i__70120_71449 < count__70119_71448)){
var lib_71450 = chunk__70118_71447.cljs$core$IIndexed$_nth$arity$2(null,i__70120_71449);
var map__70125_71451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_71450));
var map__70125_71452__$1 = (((((!((map__70125_71451 == null))))?(((((map__70125_71451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70125_71451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70125_71451):map__70125_71451);
var global_exports_71453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70125_71452__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_71453,lib_71450);


var G__71454 = seq__70117_71446;
var G__71455 = chunk__70118_71447;
var G__71456 = count__70119_71448;
var G__71457 = (i__70120_71449 + (1));
seq__70117_71446 = G__71454;
chunk__70118_71447 = G__71455;
count__70119_71448 = G__71456;
i__70120_71449 = G__71457;
continue;
} else {
var temp__5735__auto___71458 = cljs.core.seq(seq__70117_71446);
if(temp__5735__auto___71458){
var seq__70117_71459__$1 = temp__5735__auto___71458;
if(cljs.core.chunked_seq_QMARK_(seq__70117_71459__$1)){
var c__4556__auto___71460 = cljs.core.chunk_first(seq__70117_71459__$1);
var G__71461 = cljs.core.chunk_rest(seq__70117_71459__$1);
var G__71462 = c__4556__auto___71460;
var G__71463 = cljs.core.count(c__4556__auto___71460);
var G__71464 = (0);
seq__70117_71446 = G__71461;
chunk__70118_71447 = G__71462;
count__70119_71448 = G__71463;
i__70120_71449 = G__71464;
continue;
} else {
var lib_71466 = cljs.core.first(seq__70117_71459__$1);
var map__70131_71467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_71466));
var map__70131_71468__$1 = (((((!((map__70131_71467 == null))))?(((((map__70131_71467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70131_71467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70131_71467):map__70131_71467);
var global_exports_71469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70131_71468__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_71469,lib_71466);


var G__71470 = cljs.core.next(seq__70117_71459__$1);
var G__71471 = null;
var G__71472 = (0);
var G__71473 = (0);
seq__70117_71446 = G__71470;
chunk__70118_71447 = G__71471;
count__70119_71448 = G__71472;
i__70120_71449 = G__71473;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__70133){
var map__70134 = p__70133;
var map__70134__$1 = (((((!((map__70134 == null))))?(((((map__70134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70134):map__70134);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70134__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__70136){
var map__70137 = p__70136;
var map__70137__$1 = (((((!((map__70137 == null))))?(((((map__70137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70137):map__70137);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__70139){
var map__70140 = p__70139;
var map__70140__$1 = (((((!((map__70140 == null))))?(((((map__70140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70140):map__70140);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70140__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__70142_71490 = cljs.core.seq(protocols);
var chunk__70143_71491 = null;
var count__70144_71492 = (0);
var i__70145_71493 = (0);
while(true){
if((i__70145_71493 < count__70144_71492)){
var protocol_71494 = chunk__70143_71491.cljs$core$IIndexed$_nth$arity$2(null,i__70145_71493);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_71494)),"}");


var G__71495 = seq__70142_71490;
var G__71496 = chunk__70143_71491;
var G__71497 = count__70144_71492;
var G__71498 = (i__70145_71493 + (1));
seq__70142_71490 = G__71495;
chunk__70143_71491 = G__71496;
count__70144_71492 = G__71497;
i__70145_71493 = G__71498;
continue;
} else {
var temp__5735__auto___71499 = cljs.core.seq(seq__70142_71490);
if(temp__5735__auto___71499){
var seq__70142_71500__$1 = temp__5735__auto___71499;
if(cljs.core.chunked_seq_QMARK_(seq__70142_71500__$1)){
var c__4556__auto___71501 = cljs.core.chunk_first(seq__70142_71500__$1);
var G__71502 = cljs.core.chunk_rest(seq__70142_71500__$1);
var G__71503 = c__4556__auto___71501;
var G__71504 = cljs.core.count(c__4556__auto___71501);
var G__71505 = (0);
seq__70142_71490 = G__71502;
chunk__70143_71491 = G__71503;
count__70144_71492 = G__71504;
i__70145_71493 = G__71505;
continue;
} else {
var protocol_71506 = cljs.core.first(seq__70142_71500__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_71506)),"}");


var G__71507 = cljs.core.next(seq__70142_71500__$1);
var G__71508 = null;
var G__71509 = (0);
var G__71510 = (0);
seq__70142_71490 = G__71507;
chunk__70143_71491 = G__71508;
count__70144_71492 = G__71509;
i__70145_71493 = G__71510;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__70146_71511 = cljs.core.seq(fields__$1);
var chunk__70147_71512 = null;
var count__70148_71513 = (0);
var i__70149_71514 = (0);
while(true){
if((i__70149_71514 < count__70148_71513)){
var fld_71515 = chunk__70147_71512.cljs$core$IIndexed$_nth$arity$2(null,i__70149_71514);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_71515," = ",fld_71515,";");


var G__71516 = seq__70146_71511;
var G__71517 = chunk__70147_71512;
var G__71518 = count__70148_71513;
var G__71519 = (i__70149_71514 + (1));
seq__70146_71511 = G__71516;
chunk__70147_71512 = G__71517;
count__70148_71513 = G__71518;
i__70149_71514 = G__71519;
continue;
} else {
var temp__5735__auto___71520 = cljs.core.seq(seq__70146_71511);
if(temp__5735__auto___71520){
var seq__70146_71521__$1 = temp__5735__auto___71520;
if(cljs.core.chunked_seq_QMARK_(seq__70146_71521__$1)){
var c__4556__auto___71522 = cljs.core.chunk_first(seq__70146_71521__$1);
var G__71523 = cljs.core.chunk_rest(seq__70146_71521__$1);
var G__71524 = c__4556__auto___71522;
var G__71525 = cljs.core.count(c__4556__auto___71522);
var G__71526 = (0);
seq__70146_71511 = G__71523;
chunk__70147_71512 = G__71524;
count__70148_71513 = G__71525;
i__70149_71514 = G__71526;
continue;
} else {
var fld_71527 = cljs.core.first(seq__70146_71521__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_71527," = ",fld_71527,";");


var G__71528 = cljs.core.next(seq__70146_71521__$1);
var G__71529 = null;
var G__71530 = (0);
var G__71531 = (0);
seq__70146_71511 = G__71528;
chunk__70147_71512 = G__71529;
count__70148_71513 = G__71530;
i__70149_71514 = G__71531;
continue;
}
} else {
}
}
break;
}

var seq__70150_71532 = cljs.core.seq(pmasks);
var chunk__70151_71533 = null;
var count__70152_71534 = (0);
var i__70153_71535 = (0);
while(true){
if((i__70153_71535 < count__70152_71534)){
var vec__70160_71536 = chunk__70151_71533.cljs$core$IIndexed$_nth$arity$2(null,i__70153_71535);
var pno_71537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70160_71536,(0),null);
var pmask_71538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70160_71536,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_71537,"$ = ",pmask_71538,";");


var G__71539 = seq__70150_71532;
var G__71540 = chunk__70151_71533;
var G__71541 = count__70152_71534;
var G__71542 = (i__70153_71535 + (1));
seq__70150_71532 = G__71539;
chunk__70151_71533 = G__71540;
count__70152_71534 = G__71541;
i__70153_71535 = G__71542;
continue;
} else {
var temp__5735__auto___71543 = cljs.core.seq(seq__70150_71532);
if(temp__5735__auto___71543){
var seq__70150_71548__$1 = temp__5735__auto___71543;
if(cljs.core.chunked_seq_QMARK_(seq__70150_71548__$1)){
var c__4556__auto___71549 = cljs.core.chunk_first(seq__70150_71548__$1);
var G__71550 = cljs.core.chunk_rest(seq__70150_71548__$1);
var G__71551 = c__4556__auto___71549;
var G__71552 = cljs.core.count(c__4556__auto___71549);
var G__71553 = (0);
seq__70150_71532 = G__71550;
chunk__70151_71533 = G__71551;
count__70152_71534 = G__71552;
i__70153_71535 = G__71553;
continue;
} else {
var vec__70163_71555 = cljs.core.first(seq__70150_71548__$1);
var pno_71556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70163_71555,(0),null);
var pmask_71557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70163_71555,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_71556,"$ = ",pmask_71557,";");


var G__71558 = cljs.core.next(seq__70150_71548__$1);
var G__71559 = null;
var G__71560 = (0);
var G__71561 = (0);
seq__70150_71532 = G__71558;
chunk__70151_71533 = G__71559;
count__70152_71534 = G__71560;
i__70153_71535 = G__71561;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__70166){
var map__70167 = p__70166;
var map__70167__$1 = (((((!((map__70167 == null))))?(((((map__70167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70167):map__70167);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70167__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70167__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70167__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70167__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70167__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__70169_71577 = cljs.core.seq(protocols);
var chunk__70170_71578 = null;
var count__70171_71579 = (0);
var i__70172_71580 = (0);
while(true){
if((i__70172_71580 < count__70171_71579)){
var protocol_71581 = chunk__70170_71578.cljs$core$IIndexed$_nth$arity$2(null,i__70172_71580);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_71581)),"}");


var G__71582 = seq__70169_71577;
var G__71583 = chunk__70170_71578;
var G__71584 = count__70171_71579;
var G__71585 = (i__70172_71580 + (1));
seq__70169_71577 = G__71582;
chunk__70170_71578 = G__71583;
count__70171_71579 = G__71584;
i__70172_71580 = G__71585;
continue;
} else {
var temp__5735__auto___71586 = cljs.core.seq(seq__70169_71577);
if(temp__5735__auto___71586){
var seq__70169_71587__$1 = temp__5735__auto___71586;
if(cljs.core.chunked_seq_QMARK_(seq__70169_71587__$1)){
var c__4556__auto___71588 = cljs.core.chunk_first(seq__70169_71587__$1);
var G__71589 = cljs.core.chunk_rest(seq__70169_71587__$1);
var G__71590 = c__4556__auto___71588;
var G__71591 = cljs.core.count(c__4556__auto___71588);
var G__71592 = (0);
seq__70169_71577 = G__71589;
chunk__70170_71578 = G__71590;
count__70171_71579 = G__71591;
i__70172_71580 = G__71592;
continue;
} else {
var protocol_71593 = cljs.core.first(seq__70169_71587__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_71593)),"}");


var G__71594 = cljs.core.next(seq__70169_71587__$1);
var G__71595 = null;
var G__71596 = (0);
var G__71597 = (0);
seq__70169_71577 = G__71594;
chunk__70170_71578 = G__71595;
count__70171_71579 = G__71596;
i__70172_71580 = G__71597;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__70178_71598 = cljs.core.seq(fields__$1);
var chunk__70179_71599 = null;
var count__70180_71600 = (0);
var i__70181_71601 = (0);
while(true){
if((i__70181_71601 < count__70180_71600)){
var fld_71602 = chunk__70179_71599.cljs$core$IIndexed$_nth$arity$2(null,i__70181_71601);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_71602," = ",fld_71602,";");


var G__71603 = seq__70178_71598;
var G__71604 = chunk__70179_71599;
var G__71605 = count__70180_71600;
var G__71606 = (i__70181_71601 + (1));
seq__70178_71598 = G__71603;
chunk__70179_71599 = G__71604;
count__70180_71600 = G__71605;
i__70181_71601 = G__71606;
continue;
} else {
var temp__5735__auto___71607 = cljs.core.seq(seq__70178_71598);
if(temp__5735__auto___71607){
var seq__70178_71609__$1 = temp__5735__auto___71607;
if(cljs.core.chunked_seq_QMARK_(seq__70178_71609__$1)){
var c__4556__auto___71610 = cljs.core.chunk_first(seq__70178_71609__$1);
var G__71611 = cljs.core.chunk_rest(seq__70178_71609__$1);
var G__71612 = c__4556__auto___71610;
var G__71613 = cljs.core.count(c__4556__auto___71610);
var G__71614 = (0);
seq__70178_71598 = G__71611;
chunk__70179_71599 = G__71612;
count__70180_71600 = G__71613;
i__70181_71601 = G__71614;
continue;
} else {
var fld_71615 = cljs.core.first(seq__70178_71609__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_71615," = ",fld_71615,";");


var G__71616 = cljs.core.next(seq__70178_71609__$1);
var G__71617 = null;
var G__71618 = (0);
var G__71619 = (0);
seq__70178_71598 = G__71616;
chunk__70179_71599 = G__71617;
count__70180_71600 = G__71618;
i__70181_71601 = G__71619;
continue;
}
} else {
}
}
break;
}

var seq__70182_71624 = cljs.core.seq(pmasks);
var chunk__70183_71625 = null;
var count__70184_71626 = (0);
var i__70185_71627 = (0);
while(true){
if((i__70185_71627 < count__70184_71626)){
var vec__70193_71628 = chunk__70183_71625.cljs$core$IIndexed$_nth$arity$2(null,i__70185_71627);
var pno_71629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70193_71628,(0),null);
var pmask_71630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70193_71628,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_71629,"$ = ",pmask_71630,";");


var G__71632 = seq__70182_71624;
var G__71633 = chunk__70183_71625;
var G__71634 = count__70184_71626;
var G__71635 = (i__70185_71627 + (1));
seq__70182_71624 = G__71632;
chunk__70183_71625 = G__71633;
count__70184_71626 = G__71634;
i__70185_71627 = G__71635;
continue;
} else {
var temp__5735__auto___71636 = cljs.core.seq(seq__70182_71624);
if(temp__5735__auto___71636){
var seq__70182_71637__$1 = temp__5735__auto___71636;
if(cljs.core.chunked_seq_QMARK_(seq__70182_71637__$1)){
var c__4556__auto___71638 = cljs.core.chunk_first(seq__70182_71637__$1);
var G__71639 = cljs.core.chunk_rest(seq__70182_71637__$1);
var G__71640 = c__4556__auto___71638;
var G__71641 = cljs.core.count(c__4556__auto___71638);
var G__71642 = (0);
seq__70182_71624 = G__71639;
chunk__70183_71625 = G__71640;
count__70184_71626 = G__71641;
i__70185_71627 = G__71642;
continue;
} else {
var vec__70196_71643 = cljs.core.first(seq__70182_71637__$1);
var pno_71644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70196_71643,(0),null);
var pmask_71645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70196_71643,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_71644,"$ = ",pmask_71645,";");


var G__71646 = cljs.core.next(seq__70182_71637__$1);
var G__71647 = null;
var G__71648 = (0);
var G__71649 = (0);
seq__70182_71624 = G__71646;
chunk__70183_71625 = G__71647;
count__70184_71626 = G__71648;
i__70185_71627 = G__71649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__70199){
var map__70200 = p__70199;
var map__70200__$1 = (((((!((map__70200 == null))))?(((((map__70200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70200):map__70200);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70200__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70200__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70200__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70200__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__70211){
var map__70212 = p__70211;
var map__70212__$1 = (((((!((map__70212 == null))))?(((((map__70212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70212):map__70212);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70212__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70212__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70212__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70212__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70212__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__69525__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__69525__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__70236 = cljs.core.seq(table);
var chunk__70237 = null;
var count__70238 = (0);
var i__70239 = (0);
while(true){
if((i__70239 < count__70238)){
var vec__70271 = chunk__70237.cljs$core$IIndexed$_nth$arity$2(null,i__70239);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70271,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70271,(1),null);
var ns_71659 = cljs.core.namespace(sym);
var name_71660 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__71661 = seq__70236;
var G__71662 = chunk__70237;
var G__71663 = count__70238;
var G__71664 = (i__70239 + (1));
seq__70236 = G__71661;
chunk__70237 = G__71662;
count__70238 = G__71663;
i__70239 = G__71664;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70236);
if(temp__5735__auto__){
var seq__70236__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70236__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70236__$1);
var G__71665 = cljs.core.chunk_rest(seq__70236__$1);
var G__71666 = c__4556__auto__;
var G__71667 = cljs.core.count(c__4556__auto__);
var G__71668 = (0);
seq__70236 = G__71665;
chunk__70237 = G__71666;
count__70238 = G__71667;
i__70239 = G__71668;
continue;
} else {
var vec__70274 = cljs.core.first(seq__70236__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70274,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70274,(1),null);
var ns_71669 = cljs.core.namespace(sym);
var name_71670 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__71671 = cljs.core.next(seq__70236__$1);
var G__71672 = null;
var G__71673 = (0);
var G__71674 = (0);
seq__70236 = G__71671;
chunk__70237 = G__71672;
count__70238 = G__71673;
i__70239 = G__71674;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__70278 = arguments.length;
switch (G__70278) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_71676 = cljs.core.first(ks);
var vec__70279_71677 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_71676);
var top_71678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70279_71677,(0),null);
var prefix_SINGLEQUOTE__71679 = vec__70279_71677;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_71676)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__71679) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_71678)) || (cljs.core.contains_QMARK_(known_externs,top_71678)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__71679)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_71678);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__71679)),";");
}
} else {
}

var m_71680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_71676);
if(cljs.core.empty_QMARK_(m_71680)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__71679,m_71680,top_level,known_externs);
}

var G__71681 = cljs.core.next(ks);
ks = G__71681;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
