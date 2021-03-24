goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38866){
var map__38867 = p__38866;
var map__38867__$1 = (((((!((map__38867 == null))))?(((((map__38867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38867):map__38867);
var m = map__38867__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38867__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38867__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38871_39079 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38872_39080 = null;
var count__38873_39081 = (0);
var i__38874_39082 = (0);
while(true){
if((i__38874_39082 < count__38873_39081)){
var f_39087 = chunk__38872_39080.cljs$core$IIndexed$_nth$arity$2(null,i__38874_39082);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39087], 0));


var G__39088 = seq__38871_39079;
var G__39089 = chunk__38872_39080;
var G__39090 = count__38873_39081;
var G__39091 = (i__38874_39082 + (1));
seq__38871_39079 = G__39088;
chunk__38872_39080 = G__39089;
count__38873_39081 = G__39090;
i__38874_39082 = G__39091;
continue;
} else {
var temp__5735__auto___39093 = cljs.core.seq(seq__38871_39079);
if(temp__5735__auto___39093){
var seq__38871_39094__$1 = temp__5735__auto___39093;
if(cljs.core.chunked_seq_QMARK_(seq__38871_39094__$1)){
var c__4556__auto___39095 = cljs.core.chunk_first(seq__38871_39094__$1);
var G__39096 = cljs.core.chunk_rest(seq__38871_39094__$1);
var G__39097 = c__4556__auto___39095;
var G__39098 = cljs.core.count(c__4556__auto___39095);
var G__39099 = (0);
seq__38871_39079 = G__39096;
chunk__38872_39080 = G__39097;
count__38873_39081 = G__39098;
i__38874_39082 = G__39099;
continue;
} else {
var f_39100 = cljs.core.first(seq__38871_39094__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39100], 0));


var G__39101 = cljs.core.next(seq__38871_39094__$1);
var G__39102 = null;
var G__39103 = (0);
var G__39104 = (0);
seq__38871_39079 = G__39101;
chunk__38872_39080 = G__39102;
count__38873_39081 = G__39103;
i__38874_39082 = G__39104;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39105 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39105], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39105)))?cljs.core.second(arglists_39105):arglists_39105)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38877_39113 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38878_39114 = null;
var count__38879_39115 = (0);
var i__38880_39116 = (0);
while(true){
if((i__38880_39116 < count__38879_39115)){
var vec__38893_39117 = chunk__38878_39114.cljs$core$IIndexed$_nth$arity$2(null,i__38880_39116);
var name_39118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893_39117,(0),null);
var map__38896_39119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38893_39117,(1),null);
var map__38896_39120__$1 = (((((!((map__38896_39119 == null))))?(((((map__38896_39119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38896_39119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38896_39119):map__38896_39119);
var doc_39121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38896_39120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38896_39120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39118], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39122], 0));

if(cljs.core.truth_(doc_39121)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39121], 0));
} else {
}


var G__39124 = seq__38877_39113;
var G__39125 = chunk__38878_39114;
var G__39126 = count__38879_39115;
var G__39127 = (i__38880_39116 + (1));
seq__38877_39113 = G__39124;
chunk__38878_39114 = G__39125;
count__38879_39115 = G__39126;
i__38880_39116 = G__39127;
continue;
} else {
var temp__5735__auto___39128 = cljs.core.seq(seq__38877_39113);
if(temp__5735__auto___39128){
var seq__38877_39129__$1 = temp__5735__auto___39128;
if(cljs.core.chunked_seq_QMARK_(seq__38877_39129__$1)){
var c__4556__auto___39130 = cljs.core.chunk_first(seq__38877_39129__$1);
var G__39131 = cljs.core.chunk_rest(seq__38877_39129__$1);
var G__39132 = c__4556__auto___39130;
var G__39133 = cljs.core.count(c__4556__auto___39130);
var G__39134 = (0);
seq__38877_39113 = G__39131;
chunk__38878_39114 = G__39132;
count__38879_39115 = G__39133;
i__38880_39116 = G__39134;
continue;
} else {
var vec__38899_39135 = cljs.core.first(seq__38877_39129__$1);
var name_39136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38899_39135,(0),null);
var map__38902_39137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38899_39135,(1),null);
var map__38902_39138__$1 = (((((!((map__38902_39137 == null))))?(((((map__38902_39137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38902_39137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38902_39137):map__38902_39137);
var doc_39139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39138__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38902_39138__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39136], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39140], 0));

if(cljs.core.truth_(doc_39139)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39139], 0));
} else {
}


var G__39141 = cljs.core.next(seq__38877_39129__$1);
var G__39142 = null;
var G__39143 = (0);
var G__39144 = (0);
seq__38877_39113 = G__39141;
chunk__38878_39114 = G__39142;
count__38879_39115 = G__39143;
i__38880_39116 = G__39144;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38904 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38905 = null;
var count__38906 = (0);
var i__38907 = (0);
while(true){
if((i__38907 < count__38906)){
var role = chunk__38905.cljs$core$IIndexed$_nth$arity$2(null,i__38907);
var temp__5735__auto___39145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39145__$1)){
var spec_39146 = temp__5735__auto___39145__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39146)], 0));
} else {
}


var G__39147 = seq__38904;
var G__39148 = chunk__38905;
var G__39149 = count__38906;
var G__39150 = (i__38907 + (1));
seq__38904 = G__39147;
chunk__38905 = G__39148;
count__38906 = G__39149;
i__38907 = G__39150;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38904);
if(temp__5735__auto____$1){
var seq__38904__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38904__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38904__$1);
var G__39152 = cljs.core.chunk_rest(seq__38904__$1);
var G__39154 = c__4556__auto__;
var G__39155 = cljs.core.count(c__4556__auto__);
var G__39157 = (0);
seq__38904 = G__39152;
chunk__38905 = G__39154;
count__38906 = G__39155;
i__38907 = G__39157;
continue;
} else {
var role = cljs.core.first(seq__38904__$1);
var temp__5735__auto___39158__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39158__$2)){
var spec_39159 = temp__5735__auto___39158__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39159)], 0));
} else {
}


var G__39160 = cljs.core.next(seq__38904__$1);
var G__39161 = null;
var G__39162 = (0);
var G__39163 = (0);
seq__38904 = G__39160;
chunk__38905 = G__39161;
count__38906 = G__39162;
i__38907 = G__39163;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39166 = cljs.core.ex_cause(t);
via = G__39165;
t = G__39166;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38915 = datafied_throwable;
var map__38915__$1 = (((((!((map__38915 == null))))?(((((map__38915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38915):map__38915);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38915__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38916 = cljs.core.last(via);
var map__38916__$1 = (((((!((map__38916 == null))))?(((((map__38916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38916):map__38916);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38916__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38917 = data;
var map__38917__$1 = (((((!((map__38917 == null))))?(((((map__38917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38917):map__38917);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38918 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38918__$1 = (((((!((map__38918 == null))))?(((((map__38918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38918):map__38918);
var top_data = map__38918__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38931 = phase;
var G__38931__$1 = (((G__38931 instanceof cljs.core.Keyword))?G__38931.fqn:null);
switch (G__38931__$1) {
case "read-source":
var map__38932 = data;
var map__38932__$1 = (((((!((map__38932 == null))))?(((((map__38932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38932):map__38932);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38932__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38932__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38943 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38943__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38943,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38943);
var G__38943__$2 = (cljs.core.truth_((function (){var fexpr__38944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38944.cljs$core$IFn$_invoke$arity$1 ? fexpr__38944.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38944.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38943__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38943__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38943__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38945 = top_data;
var G__38945__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38945,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38945);
var G__38945__$2 = (cljs.core.truth_((function (){var fexpr__38946 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38946.cljs$core$IFn$_invoke$arity$1 ? fexpr__38946.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38946.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38945__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38945__$1);
var G__38945__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38945__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38945__$2);
var G__38945__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38945__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38945__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38945__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38945__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38947 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38947,(3),null);
var G__38954 = top_data;
var G__38954__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38954,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38954);
var G__38954__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38954__$1);
var G__38954__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38954__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38954__$2);
var G__38954__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38954__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38954__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38954__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38954__$4;
}

break;
case "execution":
var vec__38964 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38964,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38964,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38964,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38964,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38913_SHARP_){
var or__4126__auto__ = (p1__38913_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38976 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38976.cljs$core$IFn$_invoke$arity$1 ? fexpr__38976.cljs$core$IFn$_invoke$arity$1(p1__38913_SHARP_) : fexpr__38976.call(null,p1__38913_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38977 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38977__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38977,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38977);
var G__38977__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38977__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38977__$1);
var G__38977__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38977__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38977__$2);
var G__38977__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38977__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38977__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38977__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38977__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38931__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39004){
var map__39005 = p__39004;
var map__39005__$1 = (((((!((map__39005 == null))))?(((((map__39005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39005):map__39005);
var triage_data = map__39005__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39005__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39019 = phase;
var G__39019__$1 = (((G__39019 instanceof cljs.core.Keyword))?G__39019.fqn:null);
switch (G__39019__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39024 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39027 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39028 = loc;
var G__39029 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39033_39192 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39034_39193 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39035_39194 = true;
var _STAR_print_fn_STAR__temp_val__39036_39195 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39035_39194);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39036_39195);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39002_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39002_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39034_39193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39033_39192);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39024,G__39027,G__39028,G__39029) : format.call(null,G__39024,G__39027,G__39028,G__39029));

break;
case "macroexpansion":
var G__39045 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39046 = cause_type;
var G__39047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39048 = loc;
var G__39049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39045,G__39046,G__39047,G__39048,G__39049) : format.call(null,G__39045,G__39046,G__39047,G__39048,G__39049));

break;
case "compile-syntax-check":
var G__39054 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39055 = cause_type;
var G__39056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39057 = loc;
var G__39058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39054,G__39055,G__39056,G__39057,G__39058) : format.call(null,G__39054,G__39055,G__39056,G__39057,G__39058));

break;
case "compilation":
var G__39059 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39060 = cause_type;
var G__39061 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39062 = loc;
var G__39063 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39059,G__39060,G__39061,G__39062,G__39063) : format.call(null,G__39059,G__39060,G__39061,G__39062,G__39063));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39064 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39065 = symbol;
var G__39066 = loc;
var G__39067 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39068_39205 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39069_39206 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39070_39207 = true;
var _STAR_print_fn_STAR__temp_val__39071_39208 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39070_39207);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39071_39208);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39003_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39003_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39069_39206);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39068_39205);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39064,G__39065,G__39066,G__39067) : format.call(null,G__39064,G__39065,G__39066,G__39067));
} else {
var G__39073 = "Execution error%s at %s(%s).\n%s\n";
var G__39074 = cause_type;
var G__39075 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39076 = loc;
var G__39077 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39073,G__39074,G__39075,G__39076,G__39077) : format.call(null,G__39073,G__39074,G__39075,G__39076,G__39077));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39019__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
