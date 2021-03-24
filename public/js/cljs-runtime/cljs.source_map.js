goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__67526){
var vec__67527 = p__67526;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67527,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__67530 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67530,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67530,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67530,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67530,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67530,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__67533 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67533,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67533,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67533,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67533,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67533,(4),null);
var vec__67536 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67536,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67536,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67536,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67536,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67536,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__67541 = segmap;
var map__67541__$1 = (((((!((map__67541 == null))))?(((((map__67541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67541):map__67541);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67541__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67541__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67541__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67541__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__67546 = arguments.length;
switch (G__67546) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__67550 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__68380 = cljs.core.next(segs__$1);
var G__68381 = nrelseg;
var G__68382 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__68380;
relseg__$1 = G__68381;
result__$1 = G__68382;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67550,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67550,(1),null);
var G__68384 = (gline + (1));
var G__68385 = cljs.core.next(lines__$1);
var G__68386 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__68387 = result__$1;
gline = G__68384;
lines__$1 = G__68385;
relseg = G__68386;
result = G__68387;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__67556 = segmap;
var map__67556__$1 = (((((!((map__67556 == null))))?(((((map__67556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67556):map__67556);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67556__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67556__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67556__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67556__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__67555_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__67555_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__67560 = arguments.length;
switch (G__67560) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__67565 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__68393 = cljs.core.next(segs__$1);
var G__68394 = nrelseg;
var G__68395 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__68393;
relseg__$1 = G__68394;
result__$1 = G__68395;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67565,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67565,(1),null);
var G__68396 = (gline + (1));
var G__68397 = cljs.core.next(lines__$1);
var G__68398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__68399 = result__$1;
gline = G__68396;
lines__$1 = G__68397;
relseg = G__68398;
result = G__68399;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__67570){
var vec__67571 = p__67570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67571,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67571,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67571,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67571,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67571,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__67576){
var vec__67577 = p__67576;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67577,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67577,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67577,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67577,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67577,(4),null);
var seg = vec__67577;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__67580){
var vec__67581 = p__67580;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67581,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67581,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67581,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67581,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67581,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__67591 = cljs.core.seq(infos);
var chunk__67592 = null;
var count__67593 = (0);
var i__67594 = (0);
while(true){
if((i__67594 < count__67593)){
var info = chunk__67592.cljs$core$IIndexed$_nth$arity$2(null,i__67594);
var segv_68410 = info__GT_segv(info,source_idx,line,col);
var gline_68411 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_68412 = cljs.core.count(cljs.core.deref(lines));
if((gline_68411 > (lc_68412 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__67591,chunk__67592,count__67593,i__67594,segv_68410,gline_68411,lc_68412,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_68411 - (lc_68412 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_68410], null));
});})(seq__67591,chunk__67592,count__67593,i__67594,segv_68410,gline_68411,lc_68412,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__67591,chunk__67592,count__67593,i__67594,segv_68410,gline_68411,lc_68412,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68411], null),cljs.core.conj,segv_68410);
});})(seq__67591,chunk__67592,count__67593,i__67594,segv_68410,gline_68411,lc_68412,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__68420 = seq__67591;
var G__68421 = chunk__67592;
var G__68422 = count__67593;
var G__68423 = (i__67594 + (1));
seq__67591 = G__68420;
chunk__67592 = G__68421;
count__67593 = G__68422;
i__67594 = G__68423;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67591);
if(temp__5735__auto__){
var seq__67591__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67591__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67591__$1);
var G__68428 = cljs.core.chunk_rest(seq__67591__$1);
var G__68429 = c__4556__auto__;
var G__68430 = cljs.core.count(c__4556__auto__);
var G__68431 = (0);
seq__67591 = G__68428;
chunk__67592 = G__68429;
count__67593 = G__68430;
i__67594 = G__68431;
continue;
} else {
var info = cljs.core.first(seq__67591__$1);
var segv_68432 = info__GT_segv(info,source_idx,line,col);
var gline_68433 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_68434 = cljs.core.count(cljs.core.deref(lines));
if((gline_68433 > (lc_68434 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__67591,chunk__67592,count__67593,i__67594,segv_68432,gline_68433,lc_68434,info,seq__67591__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_68433 - (lc_68434 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_68432], null));
});})(seq__67591,chunk__67592,count__67593,i__67594,segv_68432,gline_68433,lc_68434,info,seq__67591__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__67591,chunk__67592,count__67593,i__67594,segv_68432,gline_68433,lc_68434,info,seq__67591__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68433], null),cljs.core.conj,segv_68432);
});})(seq__67591,chunk__67592,count__67593,i__67594,segv_68432,gline_68433,lc_68434,info,seq__67591__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__68436 = cljs.core.next(seq__67591__$1);
var G__68437 = null;
var G__68438 = (0);
var G__68439 = (0);
seq__67591 = G__68436;
chunk__67592 = G__68437;
count__67593 = G__68438;
i__67594 = G__68439;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__67611_68440 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__67612_68441 = null;
var count__67613_68442 = (0);
var i__67614_68443 = (0);
while(true){
if((i__67614_68443 < count__67613_68442)){
var vec__67798_68446 = chunk__67612_68441.cljs$core$IIndexed$_nth$arity$2(null,i__67614_68443);
var source_idx_68447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67798_68446,(0),null);
var vec__67801_68448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67798_68446,(1),null);
var __68449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801_68448,(0),null);
var lines_68450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801_68448,(1),null);
var seq__67804_68452 = cljs.core.seq(lines_68450__$1);
var chunk__67805_68453 = null;
var count__67806_68454 = (0);
var i__67807_68455 = (0);
while(true){
if((i__67807_68455 < count__67806_68454)){
var vec__67853_68457 = chunk__67805_68453.cljs$core$IIndexed$_nth$arity$2(null,i__67807_68455);
var line_68458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67853_68457,(0),null);
var cols_68459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67853_68457,(1),null);
var seq__67859_68460 = cljs.core.seq(cols_68459);
var chunk__67860_68461 = null;
var count__67861_68462 = (0);
var i__67862_68463 = (0);
while(true){
if((i__67862_68463 < count__67861_68462)){
var vec__67869_68464 = chunk__67860_68461.cljs$core$IIndexed$_nth$arity$2(null,i__67862_68463);
var col_68465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67869_68464,(0),null);
var infos_68466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67869_68464,(1),null);
encode_cols(infos_68466,source_idx_68447,line_68458,col_68465);


var G__68467 = seq__67859_68460;
var G__68468 = chunk__67860_68461;
var G__68469 = count__67861_68462;
var G__68470 = (i__67862_68463 + (1));
seq__67859_68460 = G__68467;
chunk__67860_68461 = G__68468;
count__67861_68462 = G__68469;
i__67862_68463 = G__68470;
continue;
} else {
var temp__5735__auto___68471 = cljs.core.seq(seq__67859_68460);
if(temp__5735__auto___68471){
var seq__67859_68472__$1 = temp__5735__auto___68471;
if(cljs.core.chunked_seq_QMARK_(seq__67859_68472__$1)){
var c__4556__auto___68473 = cljs.core.chunk_first(seq__67859_68472__$1);
var G__68474 = cljs.core.chunk_rest(seq__67859_68472__$1);
var G__68475 = c__4556__auto___68473;
var G__68476 = cljs.core.count(c__4556__auto___68473);
var G__68477 = (0);
seq__67859_68460 = G__68474;
chunk__67860_68461 = G__68475;
count__67861_68462 = G__68476;
i__67862_68463 = G__68477;
continue;
} else {
var vec__67884_68478 = cljs.core.first(seq__67859_68472__$1);
var col_68479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67884_68478,(0),null);
var infos_68480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67884_68478,(1),null);
encode_cols(infos_68480,source_idx_68447,line_68458,col_68479);


var G__68481 = cljs.core.next(seq__67859_68472__$1);
var G__68482 = null;
var G__68483 = (0);
var G__68484 = (0);
seq__67859_68460 = G__68481;
chunk__67860_68461 = G__68482;
count__67861_68462 = G__68483;
i__67862_68463 = G__68484;
continue;
}
} else {
}
}
break;
}


var G__68485 = seq__67804_68452;
var G__68486 = chunk__67805_68453;
var G__68487 = count__67806_68454;
var G__68488 = (i__67807_68455 + (1));
seq__67804_68452 = G__68485;
chunk__67805_68453 = G__68486;
count__67806_68454 = G__68487;
i__67807_68455 = G__68488;
continue;
} else {
var temp__5735__auto___68489 = cljs.core.seq(seq__67804_68452);
if(temp__5735__auto___68489){
var seq__67804_68490__$1 = temp__5735__auto___68489;
if(cljs.core.chunked_seq_QMARK_(seq__67804_68490__$1)){
var c__4556__auto___68491 = cljs.core.chunk_first(seq__67804_68490__$1);
var G__68492 = cljs.core.chunk_rest(seq__67804_68490__$1);
var G__68493 = c__4556__auto___68491;
var G__68494 = cljs.core.count(c__4556__auto___68491);
var G__68495 = (0);
seq__67804_68452 = G__68492;
chunk__67805_68453 = G__68493;
count__67806_68454 = G__68494;
i__67807_68455 = G__68495;
continue;
} else {
var vec__67887_68496 = cljs.core.first(seq__67804_68490__$1);
var line_68497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67887_68496,(0),null);
var cols_68498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67887_68496,(1),null);
var seq__67890_68499 = cljs.core.seq(cols_68498);
var chunk__67891_68500 = null;
var count__67892_68501 = (0);
var i__67893_68502 = (0);
while(true){
if((i__67893_68502 < count__67892_68501)){
var vec__67900_68503 = chunk__67891_68500.cljs$core$IIndexed$_nth$arity$2(null,i__67893_68502);
var col_68504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67900_68503,(0),null);
var infos_68505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67900_68503,(1),null);
encode_cols(infos_68505,source_idx_68447,line_68497,col_68504);


var G__68506 = seq__67890_68499;
var G__68507 = chunk__67891_68500;
var G__68508 = count__67892_68501;
var G__68509 = (i__67893_68502 + (1));
seq__67890_68499 = G__68506;
chunk__67891_68500 = G__68507;
count__67892_68501 = G__68508;
i__67893_68502 = G__68509;
continue;
} else {
var temp__5735__auto___68510__$1 = cljs.core.seq(seq__67890_68499);
if(temp__5735__auto___68510__$1){
var seq__67890_68511__$1 = temp__5735__auto___68510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67890_68511__$1)){
var c__4556__auto___68512 = cljs.core.chunk_first(seq__67890_68511__$1);
var G__68513 = cljs.core.chunk_rest(seq__67890_68511__$1);
var G__68514 = c__4556__auto___68512;
var G__68515 = cljs.core.count(c__4556__auto___68512);
var G__68516 = (0);
seq__67890_68499 = G__68513;
chunk__67891_68500 = G__68514;
count__67892_68501 = G__68515;
i__67893_68502 = G__68516;
continue;
} else {
var vec__67903_68517 = cljs.core.first(seq__67890_68511__$1);
var col_68518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67903_68517,(0),null);
var infos_68519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67903_68517,(1),null);
encode_cols(infos_68519,source_idx_68447,line_68497,col_68518);


var G__68520 = cljs.core.next(seq__67890_68511__$1);
var G__68521 = null;
var G__68522 = (0);
var G__68523 = (0);
seq__67890_68499 = G__68520;
chunk__67891_68500 = G__68521;
count__67892_68501 = G__68522;
i__67893_68502 = G__68523;
continue;
}
} else {
}
}
break;
}


var G__68524 = cljs.core.next(seq__67804_68490__$1);
var G__68525 = null;
var G__68526 = (0);
var G__68527 = (0);
seq__67804_68452 = G__68524;
chunk__67805_68453 = G__68525;
count__67806_68454 = G__68526;
i__67807_68455 = G__68527;
continue;
}
} else {
}
}
break;
}


var G__68528 = seq__67611_68440;
var G__68529 = chunk__67612_68441;
var G__68530 = count__67613_68442;
var G__68531 = (i__67614_68443 + (1));
seq__67611_68440 = G__68528;
chunk__67612_68441 = G__68529;
count__67613_68442 = G__68530;
i__67614_68443 = G__68531;
continue;
} else {
var temp__5735__auto___68532 = cljs.core.seq(seq__67611_68440);
if(temp__5735__auto___68532){
var seq__67611_68533__$1 = temp__5735__auto___68532;
if(cljs.core.chunked_seq_QMARK_(seq__67611_68533__$1)){
var c__4556__auto___68536 = cljs.core.chunk_first(seq__67611_68533__$1);
var G__68537 = cljs.core.chunk_rest(seq__67611_68533__$1);
var G__68538 = c__4556__auto___68536;
var G__68539 = cljs.core.count(c__4556__auto___68536);
var G__68540 = (0);
seq__67611_68440 = G__68537;
chunk__67612_68441 = G__68538;
count__67613_68442 = G__68539;
i__67614_68443 = G__68540;
continue;
} else {
var vec__67909_68541 = cljs.core.first(seq__67611_68533__$1);
var source_idx_68542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67909_68541,(0),null);
var vec__67912_68543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67909_68541,(1),null);
var __68544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67912_68543,(0),null);
var lines_68545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67912_68543,(1),null);
var seq__67915_68546 = cljs.core.seq(lines_68545__$1);
var chunk__67916_68547 = null;
var count__67917_68548 = (0);
var i__67918_68549 = (0);
while(true){
if((i__67918_68549 < count__67917_68548)){
var vec__67963_68550 = chunk__67916_68547.cljs$core$IIndexed$_nth$arity$2(null,i__67918_68549);
var line_68551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67963_68550,(0),null);
var cols_68552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67963_68550,(1),null);
var seq__67967_68555 = cljs.core.seq(cols_68552);
var chunk__67968_68556 = null;
var count__67969_68557 = (0);
var i__67970_68558 = (0);
while(true){
if((i__67970_68558 < count__67969_68557)){
var vec__67978_68559 = chunk__67968_68556.cljs$core$IIndexed$_nth$arity$2(null,i__67970_68558);
var col_68560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67978_68559,(0),null);
var infos_68561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67978_68559,(1),null);
encode_cols(infos_68561,source_idx_68542,line_68551,col_68560);


var G__68562 = seq__67967_68555;
var G__68563 = chunk__67968_68556;
var G__68564 = count__67969_68557;
var G__68565 = (i__67970_68558 + (1));
seq__67967_68555 = G__68562;
chunk__67968_68556 = G__68563;
count__67969_68557 = G__68564;
i__67970_68558 = G__68565;
continue;
} else {
var temp__5735__auto___68566__$1 = cljs.core.seq(seq__67967_68555);
if(temp__5735__auto___68566__$1){
var seq__67967_68567__$1 = temp__5735__auto___68566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67967_68567__$1)){
var c__4556__auto___68568 = cljs.core.chunk_first(seq__67967_68567__$1);
var G__68569 = cljs.core.chunk_rest(seq__67967_68567__$1);
var G__68570 = c__4556__auto___68568;
var G__68571 = cljs.core.count(c__4556__auto___68568);
var G__68572 = (0);
seq__67967_68555 = G__68569;
chunk__67968_68556 = G__68570;
count__67969_68557 = G__68571;
i__67970_68558 = G__68572;
continue;
} else {
var vec__67981_68573 = cljs.core.first(seq__67967_68567__$1);
var col_68574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67981_68573,(0),null);
var infos_68575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67981_68573,(1),null);
encode_cols(infos_68575,source_idx_68542,line_68551,col_68574);


var G__68577 = cljs.core.next(seq__67967_68567__$1);
var G__68580 = null;
var G__68582 = (0);
var G__68583 = (0);
seq__67967_68555 = G__68577;
chunk__67968_68556 = G__68580;
count__67969_68557 = G__68582;
i__67970_68558 = G__68583;
continue;
}
} else {
}
}
break;
}


var G__68584 = seq__67915_68546;
var G__68585 = chunk__67916_68547;
var G__68586 = count__67917_68548;
var G__68587 = (i__67918_68549 + (1));
seq__67915_68546 = G__68584;
chunk__67916_68547 = G__68585;
count__67917_68548 = G__68586;
i__67918_68549 = G__68587;
continue;
} else {
var temp__5735__auto___68588__$1 = cljs.core.seq(seq__67915_68546);
if(temp__5735__auto___68588__$1){
var seq__67915_68589__$1 = temp__5735__auto___68588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67915_68589__$1)){
var c__4556__auto___68590 = cljs.core.chunk_first(seq__67915_68589__$1);
var G__68591 = cljs.core.chunk_rest(seq__67915_68589__$1);
var G__68592 = c__4556__auto___68590;
var G__68593 = cljs.core.count(c__4556__auto___68590);
var G__68594 = (0);
seq__67915_68546 = G__68591;
chunk__67916_68547 = G__68592;
count__67917_68548 = G__68593;
i__67918_68549 = G__68594;
continue;
} else {
var vec__67985_68595 = cljs.core.first(seq__67915_68589__$1);
var line_68596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67985_68595,(0),null);
var cols_68597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67985_68595,(1),null);
var seq__67988_68598 = cljs.core.seq(cols_68597);
var chunk__67989_68599 = null;
var count__67990_68600 = (0);
var i__67991_68601 = (0);
while(true){
if((i__67991_68601 < count__67990_68600)){
var vec__68000_68602 = chunk__67989_68599.cljs$core$IIndexed$_nth$arity$2(null,i__67991_68601);
var col_68603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68000_68602,(0),null);
var infos_68604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68000_68602,(1),null);
encode_cols(infos_68604,source_idx_68542,line_68596,col_68603);


var G__68605 = seq__67988_68598;
var G__68606 = chunk__67989_68599;
var G__68607 = count__67990_68600;
var G__68608 = (i__67991_68601 + (1));
seq__67988_68598 = G__68605;
chunk__67989_68599 = G__68606;
count__67990_68600 = G__68607;
i__67991_68601 = G__68608;
continue;
} else {
var temp__5735__auto___68609__$2 = cljs.core.seq(seq__67988_68598);
if(temp__5735__auto___68609__$2){
var seq__67988_68610__$1 = temp__5735__auto___68609__$2;
if(cljs.core.chunked_seq_QMARK_(seq__67988_68610__$1)){
var c__4556__auto___68611 = cljs.core.chunk_first(seq__67988_68610__$1);
var G__68612 = cljs.core.chunk_rest(seq__67988_68610__$1);
var G__68613 = c__4556__auto___68611;
var G__68614 = cljs.core.count(c__4556__auto___68611);
var G__68615 = (0);
seq__67988_68598 = G__68612;
chunk__67989_68599 = G__68613;
count__67990_68600 = G__68614;
i__67991_68601 = G__68615;
continue;
} else {
var vec__68003_68616 = cljs.core.first(seq__67988_68610__$1);
var col_68617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68003_68616,(0),null);
var infos_68618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68003_68616,(1),null);
encode_cols(infos_68618,source_idx_68542,line_68596,col_68617);


var G__68619 = cljs.core.next(seq__67988_68610__$1);
var G__68620 = null;
var G__68621 = (0);
var G__68622 = (0);
seq__67988_68598 = G__68619;
chunk__67989_68599 = G__68620;
count__67990_68600 = G__68621;
i__67991_68601 = G__68622;
continue;
}
} else {
}
}
break;
}


var G__68623 = cljs.core.next(seq__67915_68589__$1);
var G__68624 = null;
var G__68625 = (0);
var G__68626 = (0);
seq__67915_68546 = G__68623;
chunk__67916_68547 = G__68624;
count__67917_68548 = G__68625;
i__67918_68549 = G__68626;
continue;
}
} else {
}
}
break;
}


var G__68627 = cljs.core.next(seq__67611_68533__$1);
var G__68628 = null;
var G__68629 = (0);
var G__68630 = (0);
seq__67611_68440 = G__68627;
chunk__67612_68441 = G__68628;
count__67613_68442 = G__68629;
i__67614_68443 = G__68630;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__68006 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__67588_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67588_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__67589_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__67589_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67590_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__67590_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__68012 = G__68006;
goog.object.set(G__68012,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__68012;
} else {
return G__68006;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__68013 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__68018 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68018,(1),null);
var G__68636 = cljs.core.next(col_map_seq);
var G__68637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__68018,col,infos,vec__68013,line,col_map){
return (function (v,p__68021){
var map__68022 = p__68021;
var map__68022__$1 = (((((!((map__68022 == null))))?(((((map__68022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68022):map__68022);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68022__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68022__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__68018,col,infos,vec__68013,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__68636;
new_cols = G__68637;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__68648 = cljs.core.next(line_map_seq);
var G__68649 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__68648;
new_lines = G__68649;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__68024_68650 = cljs.core.seq(reverse_map);
var chunk__68025_68651 = null;
var count__68026_68652 = (0);
var i__68027_68653 = (0);
while(true){
if((i__68027_68653 < count__68026_68652)){
var vec__68212_68654 = chunk__68025_68651.cljs$core$IIndexed$_nth$arity$2(null,i__68027_68653);
var line_68655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68212_68654,(0),null);
var columns_68656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68212_68654,(1),null);
var seq__68215_68657 = cljs.core.seq(columns_68656);
var chunk__68216_68658 = null;
var count__68217_68659 = (0);
var i__68218_68660 = (0);
while(true){
if((i__68218_68660 < count__68217_68659)){
var vec__68264_68661 = chunk__68216_68658.cljs$core$IIndexed$_nth$arity$2(null,i__68218_68660);
var column_68662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68264_68661,(0),null);
var column_info_68663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68264_68661,(1),null);
var seq__68267_68666 = cljs.core.seq(column_info_68663);
var chunk__68268_68667 = null;
var count__68269_68668 = (0);
var i__68270_68669 = (0);
while(true){
if((i__68270_68669 < count__68269_68668)){
var map__68275_68672 = chunk__68268_68667.cljs$core$IIndexed$_nth$arity$2(null,i__68270_68669);
var map__68275_68673__$1 = (((((!((map__68275_68672 == null))))?(((((map__68275_68672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68275_68672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68275_68672):map__68275_68672);
var gline_68674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68673__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68673__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68674], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68267_68666,chunk__68268_68667,count__68269_68668,i__68270_68669,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68275_68672,map__68275_68673__$1,gline_68674,gcol_68675,name_68676,vec__68264_68661,column_68662,column_info_68663,vec__68212_68654,line_68655,columns_68656,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68675], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68655,new cljs.core.Keyword(null,"col","col",-1959363084),column_68662,new cljs.core.Keyword(null,"name","name",1843675177),name_68676], null));
});})(seq__68267_68666,chunk__68268_68667,count__68269_68668,i__68270_68669,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68275_68672,map__68275_68673__$1,gline_68674,gcol_68675,name_68676,vec__68264_68661,column_68662,column_info_68663,vec__68212_68654,line_68655,columns_68656,inverted))
,cljs.core.sorted_map()));


var G__68680 = seq__68267_68666;
var G__68681 = chunk__68268_68667;
var G__68682 = count__68269_68668;
var G__68683 = (i__68270_68669 + (1));
seq__68267_68666 = G__68680;
chunk__68268_68667 = G__68681;
count__68269_68668 = G__68682;
i__68270_68669 = G__68683;
continue;
} else {
var temp__5735__auto___68685 = cljs.core.seq(seq__68267_68666);
if(temp__5735__auto___68685){
var seq__68267_68686__$1 = temp__5735__auto___68685;
if(cljs.core.chunked_seq_QMARK_(seq__68267_68686__$1)){
var c__4556__auto___68687 = cljs.core.chunk_first(seq__68267_68686__$1);
var G__68688 = cljs.core.chunk_rest(seq__68267_68686__$1);
var G__68689 = c__4556__auto___68687;
var G__68690 = cljs.core.count(c__4556__auto___68687);
var G__68691 = (0);
seq__68267_68666 = G__68688;
chunk__68268_68667 = G__68689;
count__68269_68668 = G__68690;
i__68270_68669 = G__68691;
continue;
} else {
var map__68277_68692 = cljs.core.first(seq__68267_68686__$1);
var map__68277_68693__$1 = (((((!((map__68277_68692 == null))))?(((((map__68277_68692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68277_68692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68277_68692):map__68277_68692);
var gline_68694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277_68693__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277_68693__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277_68693__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68694], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68267_68666,chunk__68268_68667,count__68269_68668,i__68270_68669,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68277_68692,map__68277_68693__$1,gline_68694,gcol_68695,name_68696,seq__68267_68686__$1,temp__5735__auto___68685,vec__68264_68661,column_68662,column_info_68663,vec__68212_68654,line_68655,columns_68656,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68695], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68655,new cljs.core.Keyword(null,"col","col",-1959363084),column_68662,new cljs.core.Keyword(null,"name","name",1843675177),name_68696], null));
});})(seq__68267_68666,chunk__68268_68667,count__68269_68668,i__68270_68669,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68277_68692,map__68277_68693__$1,gline_68694,gcol_68695,name_68696,seq__68267_68686__$1,temp__5735__auto___68685,vec__68264_68661,column_68662,column_info_68663,vec__68212_68654,line_68655,columns_68656,inverted))
,cljs.core.sorted_map()));


var G__68705 = cljs.core.next(seq__68267_68686__$1);
var G__68706 = null;
var G__68707 = (0);
var G__68708 = (0);
seq__68267_68666 = G__68705;
chunk__68268_68667 = G__68706;
count__68269_68668 = G__68707;
i__68270_68669 = G__68708;
continue;
}
} else {
}
}
break;
}


var G__68709 = seq__68215_68657;
var G__68710 = chunk__68216_68658;
var G__68711 = count__68217_68659;
var G__68712 = (i__68218_68660 + (1));
seq__68215_68657 = G__68709;
chunk__68216_68658 = G__68710;
count__68217_68659 = G__68711;
i__68218_68660 = G__68712;
continue;
} else {
var temp__5735__auto___68715 = cljs.core.seq(seq__68215_68657);
if(temp__5735__auto___68715){
var seq__68215_68716__$1 = temp__5735__auto___68715;
if(cljs.core.chunked_seq_QMARK_(seq__68215_68716__$1)){
var c__4556__auto___68717 = cljs.core.chunk_first(seq__68215_68716__$1);
var G__68720 = cljs.core.chunk_rest(seq__68215_68716__$1);
var G__68721 = c__4556__auto___68717;
var G__68722 = cljs.core.count(c__4556__auto___68717);
var G__68723 = (0);
seq__68215_68657 = G__68720;
chunk__68216_68658 = G__68721;
count__68217_68659 = G__68722;
i__68218_68660 = G__68723;
continue;
} else {
var vec__68279_68726 = cljs.core.first(seq__68215_68716__$1);
var column_68727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68279_68726,(0),null);
var column_info_68728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68279_68726,(1),null);
var seq__68282_68729 = cljs.core.seq(column_info_68728);
var chunk__68283_68730 = null;
var count__68284_68731 = (0);
var i__68285_68732 = (0);
while(true){
if((i__68285_68732 < count__68284_68731)){
var map__68290_68733 = chunk__68283_68730.cljs$core$IIndexed$_nth$arity$2(null,i__68285_68732);
var map__68290_68734__$1 = (((((!((map__68290_68733 == null))))?(((((map__68290_68733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68290_68733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68290_68733):map__68290_68733);
var gline_68735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290_68734__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290_68734__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290_68734__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68735], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68282_68729,chunk__68283_68730,count__68284_68731,i__68285_68732,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68290_68733,map__68290_68734__$1,gline_68735,gcol_68736,name_68737,vec__68279_68726,column_68727,column_info_68728,seq__68215_68716__$1,temp__5735__auto___68715,vec__68212_68654,line_68655,columns_68656,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68736], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68655,new cljs.core.Keyword(null,"col","col",-1959363084),column_68727,new cljs.core.Keyword(null,"name","name",1843675177),name_68737], null));
});})(seq__68282_68729,chunk__68283_68730,count__68284_68731,i__68285_68732,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68290_68733,map__68290_68734__$1,gline_68735,gcol_68736,name_68737,vec__68279_68726,column_68727,column_info_68728,seq__68215_68716__$1,temp__5735__auto___68715,vec__68212_68654,line_68655,columns_68656,inverted))
,cljs.core.sorted_map()));


var G__68744 = seq__68282_68729;
var G__68745 = chunk__68283_68730;
var G__68746 = count__68284_68731;
var G__68747 = (i__68285_68732 + (1));
seq__68282_68729 = G__68744;
chunk__68283_68730 = G__68745;
count__68284_68731 = G__68746;
i__68285_68732 = G__68747;
continue;
} else {
var temp__5735__auto___68748__$1 = cljs.core.seq(seq__68282_68729);
if(temp__5735__auto___68748__$1){
var seq__68282_68749__$1 = temp__5735__auto___68748__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68282_68749__$1)){
var c__4556__auto___68752 = cljs.core.chunk_first(seq__68282_68749__$1);
var G__68753 = cljs.core.chunk_rest(seq__68282_68749__$1);
var G__68754 = c__4556__auto___68752;
var G__68755 = cljs.core.count(c__4556__auto___68752);
var G__68756 = (0);
seq__68282_68729 = G__68753;
chunk__68283_68730 = G__68754;
count__68284_68731 = G__68755;
i__68285_68732 = G__68756;
continue;
} else {
var map__68293_68757 = cljs.core.first(seq__68282_68749__$1);
var map__68293_68758__$1 = (((((!((map__68293_68757 == null))))?(((((map__68293_68757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68293_68757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68293_68757):map__68293_68757);
var gline_68759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293_68758__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293_68758__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293_68758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68759], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68282_68729,chunk__68283_68730,count__68284_68731,i__68285_68732,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68293_68757,map__68293_68758__$1,gline_68759,gcol_68760,name_68761,seq__68282_68749__$1,temp__5735__auto___68748__$1,vec__68279_68726,column_68727,column_info_68728,seq__68215_68716__$1,temp__5735__auto___68715,vec__68212_68654,line_68655,columns_68656,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68760], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68655,new cljs.core.Keyword(null,"col","col",-1959363084),column_68727,new cljs.core.Keyword(null,"name","name",1843675177),name_68761], null));
});})(seq__68282_68729,chunk__68283_68730,count__68284_68731,i__68285_68732,seq__68215_68657,chunk__68216_68658,count__68217_68659,i__68218_68660,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68293_68757,map__68293_68758__$1,gline_68759,gcol_68760,name_68761,seq__68282_68749__$1,temp__5735__auto___68748__$1,vec__68279_68726,column_68727,column_info_68728,seq__68215_68716__$1,temp__5735__auto___68715,vec__68212_68654,line_68655,columns_68656,inverted))
,cljs.core.sorted_map()));


var G__68770 = cljs.core.next(seq__68282_68749__$1);
var G__68771 = null;
var G__68772 = (0);
var G__68773 = (0);
seq__68282_68729 = G__68770;
chunk__68283_68730 = G__68771;
count__68284_68731 = G__68772;
i__68285_68732 = G__68773;
continue;
}
} else {
}
}
break;
}


var G__68777 = cljs.core.next(seq__68215_68716__$1);
var G__68778 = null;
var G__68779 = (0);
var G__68780 = (0);
seq__68215_68657 = G__68777;
chunk__68216_68658 = G__68778;
count__68217_68659 = G__68779;
i__68218_68660 = G__68780;
continue;
}
} else {
}
}
break;
}


var G__68782 = seq__68024_68650;
var G__68783 = chunk__68025_68651;
var G__68784 = count__68026_68652;
var G__68785 = (i__68027_68653 + (1));
seq__68024_68650 = G__68782;
chunk__68025_68651 = G__68783;
count__68026_68652 = G__68784;
i__68027_68653 = G__68785;
continue;
} else {
var temp__5735__auto___68786 = cljs.core.seq(seq__68024_68650);
if(temp__5735__auto___68786){
var seq__68024_68787__$1 = temp__5735__auto___68786;
if(cljs.core.chunked_seq_QMARK_(seq__68024_68787__$1)){
var c__4556__auto___68788 = cljs.core.chunk_first(seq__68024_68787__$1);
var G__68789 = cljs.core.chunk_rest(seq__68024_68787__$1);
var G__68790 = c__4556__auto___68788;
var G__68791 = cljs.core.count(c__4556__auto___68788);
var G__68792 = (0);
seq__68024_68650 = G__68789;
chunk__68025_68651 = G__68790;
count__68026_68652 = G__68791;
i__68027_68653 = G__68792;
continue;
} else {
var vec__68296_68793 = cljs.core.first(seq__68024_68787__$1);
var line_68794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68296_68793,(0),null);
var columns_68795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68296_68793,(1),null);
var seq__68299_68797 = cljs.core.seq(columns_68795);
var chunk__68300_68798 = null;
var count__68301_68799 = (0);
var i__68302_68800 = (0);
while(true){
if((i__68302_68800 < count__68301_68799)){
var vec__68345_68804 = chunk__68300_68798.cljs$core$IIndexed$_nth$arity$2(null,i__68302_68800);
var column_68805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68345_68804,(0),null);
var column_info_68806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68345_68804,(1),null);
var seq__68348_68807 = cljs.core.seq(column_info_68806);
var chunk__68349_68808 = null;
var count__68350_68809 = (0);
var i__68351_68810 = (0);
while(true){
if((i__68351_68810 < count__68350_68809)){
var map__68356_68812 = chunk__68349_68808.cljs$core$IIndexed$_nth$arity$2(null,i__68351_68810);
var map__68356_68813__$1 = (((((!((map__68356_68812 == null))))?(((((map__68356_68812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68356_68812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68356_68812):map__68356_68812);
var gline_68814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356_68813__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356_68813__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356_68813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68814], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68348_68807,chunk__68349_68808,count__68350_68809,i__68351_68810,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68356_68812,map__68356_68813__$1,gline_68814,gcol_68815,name_68816,vec__68345_68804,column_68805,column_info_68806,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68815], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68794,new cljs.core.Keyword(null,"col","col",-1959363084),column_68805,new cljs.core.Keyword(null,"name","name",1843675177),name_68816], null));
});})(seq__68348_68807,chunk__68349_68808,count__68350_68809,i__68351_68810,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68356_68812,map__68356_68813__$1,gline_68814,gcol_68815,name_68816,vec__68345_68804,column_68805,column_info_68806,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted))
,cljs.core.sorted_map()));


var G__68821 = seq__68348_68807;
var G__68822 = chunk__68349_68808;
var G__68823 = count__68350_68809;
var G__68824 = (i__68351_68810 + (1));
seq__68348_68807 = G__68821;
chunk__68349_68808 = G__68822;
count__68350_68809 = G__68823;
i__68351_68810 = G__68824;
continue;
} else {
var temp__5735__auto___68829__$1 = cljs.core.seq(seq__68348_68807);
if(temp__5735__auto___68829__$1){
var seq__68348_68830__$1 = temp__5735__auto___68829__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68348_68830__$1)){
var c__4556__auto___68831 = cljs.core.chunk_first(seq__68348_68830__$1);
var G__68832 = cljs.core.chunk_rest(seq__68348_68830__$1);
var G__68833 = c__4556__auto___68831;
var G__68834 = cljs.core.count(c__4556__auto___68831);
var G__68835 = (0);
seq__68348_68807 = G__68832;
chunk__68349_68808 = G__68833;
count__68350_68809 = G__68834;
i__68351_68810 = G__68835;
continue;
} else {
var map__68358_68836 = cljs.core.first(seq__68348_68830__$1);
var map__68358_68837__$1 = (((((!((map__68358_68836 == null))))?(((((map__68358_68836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68358_68836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68358_68836):map__68358_68836);
var gline_68838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68358_68837__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68358_68837__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68358_68837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68838], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68348_68807,chunk__68349_68808,count__68350_68809,i__68351_68810,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68358_68836,map__68358_68837__$1,gline_68838,gcol_68839,name_68840,seq__68348_68830__$1,temp__5735__auto___68829__$1,vec__68345_68804,column_68805,column_info_68806,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68839], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68794,new cljs.core.Keyword(null,"col","col",-1959363084),column_68805,new cljs.core.Keyword(null,"name","name",1843675177),name_68840], null));
});})(seq__68348_68807,chunk__68349_68808,count__68350_68809,i__68351_68810,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68358_68836,map__68358_68837__$1,gline_68838,gcol_68839,name_68840,seq__68348_68830__$1,temp__5735__auto___68829__$1,vec__68345_68804,column_68805,column_info_68806,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted))
,cljs.core.sorted_map()));


var G__68842 = cljs.core.next(seq__68348_68830__$1);
var G__68843 = null;
var G__68844 = (0);
var G__68845 = (0);
seq__68348_68807 = G__68842;
chunk__68349_68808 = G__68843;
count__68350_68809 = G__68844;
i__68351_68810 = G__68845;
continue;
}
} else {
}
}
break;
}


var G__68846 = seq__68299_68797;
var G__68847 = chunk__68300_68798;
var G__68848 = count__68301_68799;
var G__68849 = (i__68302_68800 + (1));
seq__68299_68797 = G__68846;
chunk__68300_68798 = G__68847;
count__68301_68799 = G__68848;
i__68302_68800 = G__68849;
continue;
} else {
var temp__5735__auto___68850__$1 = cljs.core.seq(seq__68299_68797);
if(temp__5735__auto___68850__$1){
var seq__68299_68851__$1 = temp__5735__auto___68850__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68299_68851__$1)){
var c__4556__auto___68852 = cljs.core.chunk_first(seq__68299_68851__$1);
var G__68853 = cljs.core.chunk_rest(seq__68299_68851__$1);
var G__68854 = c__4556__auto___68852;
var G__68855 = cljs.core.count(c__4556__auto___68852);
var G__68856 = (0);
seq__68299_68797 = G__68853;
chunk__68300_68798 = G__68854;
count__68301_68799 = G__68855;
i__68302_68800 = G__68856;
continue;
} else {
var vec__68360_68857 = cljs.core.first(seq__68299_68851__$1);
var column_68858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68360_68857,(0),null);
var column_info_68859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68360_68857,(1),null);
var seq__68363_68860 = cljs.core.seq(column_info_68859);
var chunk__68364_68861 = null;
var count__68365_68862 = (0);
var i__68366_68863 = (0);
while(true){
if((i__68366_68863 < count__68365_68862)){
var map__68371_68864 = chunk__68364_68861.cljs$core$IIndexed$_nth$arity$2(null,i__68366_68863);
var map__68371_68865__$1 = (((((!((map__68371_68864 == null))))?(((((map__68371_68864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68371_68864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68371_68864):map__68371_68864);
var gline_68866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68371_68865__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68371_68865__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68371_68865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68866], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68363_68860,chunk__68364_68861,count__68365_68862,i__68366_68863,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68371_68864,map__68371_68865__$1,gline_68866,gcol_68867,name_68868,vec__68360_68857,column_68858,column_info_68859,seq__68299_68851__$1,temp__5735__auto___68850__$1,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68867], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68794,new cljs.core.Keyword(null,"col","col",-1959363084),column_68858,new cljs.core.Keyword(null,"name","name",1843675177),name_68868], null));
});})(seq__68363_68860,chunk__68364_68861,count__68365_68862,i__68366_68863,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68371_68864,map__68371_68865__$1,gline_68866,gcol_68867,name_68868,vec__68360_68857,column_68858,column_info_68859,seq__68299_68851__$1,temp__5735__auto___68850__$1,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted))
,cljs.core.sorted_map()));


var G__68873 = seq__68363_68860;
var G__68874 = chunk__68364_68861;
var G__68875 = count__68365_68862;
var G__68876 = (i__68366_68863 + (1));
seq__68363_68860 = G__68873;
chunk__68364_68861 = G__68874;
count__68365_68862 = G__68875;
i__68366_68863 = G__68876;
continue;
} else {
var temp__5735__auto___68877__$2 = cljs.core.seq(seq__68363_68860);
if(temp__5735__auto___68877__$2){
var seq__68363_68881__$1 = temp__5735__auto___68877__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68363_68881__$1)){
var c__4556__auto___68882 = cljs.core.chunk_first(seq__68363_68881__$1);
var G__68883 = cljs.core.chunk_rest(seq__68363_68881__$1);
var G__68884 = c__4556__auto___68882;
var G__68885 = cljs.core.count(c__4556__auto___68882);
var G__68886 = (0);
seq__68363_68860 = G__68883;
chunk__68364_68861 = G__68884;
count__68365_68862 = G__68885;
i__68366_68863 = G__68886;
continue;
} else {
var map__68373_68887 = cljs.core.first(seq__68363_68881__$1);
var map__68373_68888__$1 = (((((!((map__68373_68887 == null))))?(((((map__68373_68887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68373_68887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68373_68887):map__68373_68887);
var gline_68889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68373_68888__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_68890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68373_68888__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_68891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68373_68888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_68889], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__68363_68860,chunk__68364_68861,count__68365_68862,i__68366_68863,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68373_68887,map__68373_68888__$1,gline_68889,gcol_68890,name_68891,seq__68363_68881__$1,temp__5735__auto___68877__$2,vec__68360_68857,column_68858,column_info_68859,seq__68299_68851__$1,temp__5735__auto___68850__$1,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_68890], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_68794,new cljs.core.Keyword(null,"col","col",-1959363084),column_68858,new cljs.core.Keyword(null,"name","name",1843675177),name_68891], null));
});})(seq__68363_68860,chunk__68364_68861,count__68365_68862,i__68366_68863,seq__68299_68797,chunk__68300_68798,count__68301_68799,i__68302_68800,seq__68024_68650,chunk__68025_68651,count__68026_68652,i__68027_68653,map__68373_68887,map__68373_68888__$1,gline_68889,gcol_68890,name_68891,seq__68363_68881__$1,temp__5735__auto___68877__$2,vec__68360_68857,column_68858,column_info_68859,seq__68299_68851__$1,temp__5735__auto___68850__$1,vec__68296_68793,line_68794,columns_68795,seq__68024_68787__$1,temp__5735__auto___68786,inverted))
,cljs.core.sorted_map()));


var G__68896 = cljs.core.next(seq__68363_68881__$1);
var G__68897 = null;
var G__68898 = (0);
var G__68899 = (0);
seq__68363_68860 = G__68896;
chunk__68364_68861 = G__68897;
count__68365_68862 = G__68898;
i__68366_68863 = G__68899;
continue;
}
} else {
}
}
break;
}


var G__68900 = cljs.core.next(seq__68299_68851__$1);
var G__68901 = null;
var G__68902 = (0);
var G__68903 = (0);
seq__68299_68797 = G__68900;
chunk__68300_68798 = G__68901;
count__68301_68799 = G__68902;
i__68302_68800 = G__68903;
continue;
}
} else {
}
}
break;
}


var G__68904 = cljs.core.next(seq__68024_68787__$1);
var G__68905 = null;
var G__68906 = (0);
var G__68907 = (0);
seq__68024_68650 = G__68904;
chunk__68025_68651 = G__68905;
count__68026_68652 = G__68906;
i__68027_68653 = G__68907;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
