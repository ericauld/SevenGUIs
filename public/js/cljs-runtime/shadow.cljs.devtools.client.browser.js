goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39829 = arguments.length;
var i__4737__auto___39830 = (0);
while(true){
if((i__4737__auto___39830 < len__4736__auto___39829)){
args__4742__auto__.push((arguments[i__4737__auto___39830]));

var G__39831 = (i__4737__auto___39830 + (1));
i__4737__auto___39830 = G__39831;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39538){
var G__39539 = cljs.core.first(seq39538);
var seq39538__$1 = cljs.core.next(seq39538);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39539,seq39538__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39543 = cljs.core.seq(sources);
var chunk__39544 = null;
var count__39545 = (0);
var i__39546 = (0);
while(true){
if((i__39546 < count__39545)){
var map__39554 = chunk__39544.cljs$core$IIndexed$_nth$arity$2(null,i__39546);
var map__39554__$1 = (((((!((map__39554 == null))))?(((((map__39554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39554):map__39554);
var src = map__39554__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39556){var e_39832 = e39556;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39832);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39832.message)].join('')));
}

var G__39841 = seq__39543;
var G__39842 = chunk__39544;
var G__39843 = count__39545;
var G__39844 = (i__39546 + (1));
seq__39543 = G__39841;
chunk__39544 = G__39842;
count__39545 = G__39843;
i__39546 = G__39844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39543);
if(temp__5735__auto__){
var seq__39543__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39543__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39543__$1);
var G__39845 = cljs.core.chunk_rest(seq__39543__$1);
var G__39846 = c__4556__auto__;
var G__39847 = cljs.core.count(c__4556__auto__);
var G__39848 = (0);
seq__39543 = G__39845;
chunk__39544 = G__39846;
count__39545 = G__39847;
i__39546 = G__39848;
continue;
} else {
var map__39557 = cljs.core.first(seq__39543__$1);
var map__39557__$1 = (((((!((map__39557 == null))))?(((((map__39557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39557):map__39557);
var src = map__39557__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39567){var e_39849 = e39567;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39849);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39849.message)].join('')));
}

var G__39850 = cljs.core.next(seq__39543__$1);
var G__39851 = null;
var G__39852 = (0);
var G__39853 = (0);
seq__39543 = G__39850;
chunk__39544 = G__39851;
count__39545 = G__39852;
i__39546 = G__39853;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39594 = cljs.core.seq(js_requires);
var chunk__39595 = null;
var count__39596 = (0);
var i__39597 = (0);
while(true){
if((i__39597 < count__39596)){
var js_ns = chunk__39595.cljs$core$IIndexed$_nth$arity$2(null,i__39597);
var require_str_39854 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39854);


var G__39855 = seq__39594;
var G__39856 = chunk__39595;
var G__39857 = count__39596;
var G__39858 = (i__39597 + (1));
seq__39594 = G__39855;
chunk__39595 = G__39856;
count__39596 = G__39857;
i__39597 = G__39858;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39594);
if(temp__5735__auto__){
var seq__39594__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39594__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39594__$1);
var G__39859 = cljs.core.chunk_rest(seq__39594__$1);
var G__39860 = c__4556__auto__;
var G__39861 = cljs.core.count(c__4556__auto__);
var G__39862 = (0);
seq__39594 = G__39859;
chunk__39595 = G__39860;
count__39596 = G__39861;
i__39597 = G__39862;
continue;
} else {
var js_ns = cljs.core.first(seq__39594__$1);
var require_str_39863 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39863);


var G__39864 = cljs.core.next(seq__39594__$1);
var G__39865 = null;
var G__39866 = (0);
var G__39867 = (0);
seq__39594 = G__39864;
chunk__39595 = G__39865;
count__39596 = G__39866;
i__39597 = G__39867;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39617){
var map__39619 = p__39617;
var map__39619__$1 = (((((!((map__39619 == null))))?(((((map__39619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39619):map__39619);
var msg = map__39619__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626(s__39627){
return (new cljs.core.LazySeq(null,(function (){
var s__39627__$1 = s__39627;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39627__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39641 = cljs.core.first(xs__6292__auto__);
var map__39641__$1 = (((((!((map__39641 == null))))?(((((map__39641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39641):map__39641);
var src = map__39641__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39641__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39641__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39627__$1,map__39641,map__39641__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39619,map__39619__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(s__39629){
return (new cljs.core.LazySeq(null,((function (s__39627__$1,map__39641,map__39641__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39619,map__39619__$1,msg,info,reload_info){
return (function (){
var s__39629__$1 = s__39629;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39629__$1);
if(temp__5735__auto____$1){
var s__39629__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39629__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39629__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39631 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39630 = (0);
while(true){
if((i__39630 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39630);
cljs.core.chunk_append(b__39631,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39868 = (i__39630 + (1));
i__39630 = G__39868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39631),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(cljs.core.chunk_rest(s__39629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39631),null);
}
} else {
var warning = cljs.core.first(s__39629__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626_$_iter__39628(cljs.core.rest(s__39629__$2)));
}
} else {
return null;
}
break;
}
});})(s__39627__$1,map__39641,map__39641__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39619,map__39619__$1,msg,info,reload_info))
,null,null));
});})(s__39627__$1,map__39641,map__39641__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39619,map__39619__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39626(cljs.core.rest(s__39627__$1)));
} else {
var G__39869 = cljs.core.rest(s__39627__$1);
s__39627__$1 = G__39869;
continue;
}
} else {
var G__39871 = cljs.core.rest(s__39627__$1);
s__39627__$1 = G__39871;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39654_39872 = cljs.core.seq(warnings);
var chunk__39655_39873 = null;
var count__39656_39874 = (0);
var i__39657_39875 = (0);
while(true){
if((i__39657_39875 < count__39656_39874)){
var map__39682_39876 = chunk__39655_39873.cljs$core$IIndexed$_nth$arity$2(null,i__39657_39875);
var map__39682_39877__$1 = (((((!((map__39682_39876 == null))))?(((((map__39682_39876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39682_39876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39682_39876):map__39682_39876);
var w_39878 = map__39682_39877__$1;
var msg_39879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682_39877__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682_39877__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682_39877__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39682_39877__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39882)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39880),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39881),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39879__$1)].join(''));


var G__39883 = seq__39654_39872;
var G__39884 = chunk__39655_39873;
var G__39885 = count__39656_39874;
var G__39886 = (i__39657_39875 + (1));
seq__39654_39872 = G__39883;
chunk__39655_39873 = G__39884;
count__39656_39874 = G__39885;
i__39657_39875 = G__39886;
continue;
} else {
var temp__5735__auto___39887 = cljs.core.seq(seq__39654_39872);
if(temp__5735__auto___39887){
var seq__39654_39888__$1 = temp__5735__auto___39887;
if(cljs.core.chunked_seq_QMARK_(seq__39654_39888__$1)){
var c__4556__auto___39889 = cljs.core.chunk_first(seq__39654_39888__$1);
var G__39890 = cljs.core.chunk_rest(seq__39654_39888__$1);
var G__39891 = c__4556__auto___39889;
var G__39892 = cljs.core.count(c__4556__auto___39889);
var G__39893 = (0);
seq__39654_39872 = G__39890;
chunk__39655_39873 = G__39891;
count__39656_39874 = G__39892;
i__39657_39875 = G__39893;
continue;
} else {
var map__39684_39894 = cljs.core.first(seq__39654_39888__$1);
var map__39684_39895__$1 = (((((!((map__39684_39894 == null))))?(((((map__39684_39894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39684_39894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39684_39894):map__39684_39894);
var w_39896 = map__39684_39895__$1;
var msg_39897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684_39895__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684_39895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684_39895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684_39895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39900)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39898),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39899),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39897__$1)].join(''));


var G__39901 = cljs.core.next(seq__39654_39888__$1);
var G__39902 = null;
var G__39903 = (0);
var G__39904 = (0);
seq__39654_39872 = G__39901;
chunk__39655_39873 = G__39902;
count__39656_39874 = G__39903;
i__39657_39875 = G__39904;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39616_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39616_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39692){
var map__39693 = p__39692;
var map__39693__$1 = (((((!((map__39693 == null))))?(((((map__39693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39693):map__39693);
var msg = map__39693__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39693__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39695 = cljs.core.seq(updates);
var chunk__39697 = null;
var count__39698 = (0);
var i__39699 = (0);
while(true){
if((i__39699 < count__39698)){
var path = chunk__39697.cljs$core$IIndexed$_nth$arity$2(null,i__39699);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39752_39905 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39756_39906 = null;
var count__39757_39907 = (0);
var i__39758_39908 = (0);
while(true){
if((i__39758_39908 < count__39757_39907)){
var node_39909 = chunk__39756_39906.cljs$core$IIndexed$_nth$arity$2(null,i__39758_39908);
if(cljs.core.not(node_39909.shadow$old)){
var path_match_39910 = shadow.cljs.devtools.client.browser.match_paths(node_39909.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39910)){
var new_link_39911 = (function (){var G__39764 = node_39909.cloneNode(true);
G__39764.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39910),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39764;
})();
(node_39909.shadow$old = true);

(new_link_39911.onload = ((function (seq__39752_39905,chunk__39756_39906,count__39757_39907,i__39758_39908,seq__39695,chunk__39697,count__39698,i__39699,new_link_39911,path_match_39910,node_39909,path,map__39693,map__39693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39909);
});})(seq__39752_39905,chunk__39756_39906,count__39757_39907,i__39758_39908,seq__39695,chunk__39697,count__39698,i__39699,new_link_39911,path_match_39910,node_39909,path,map__39693,map__39693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39910], 0));

goog.dom.insertSiblingAfter(new_link_39911,node_39909);


var G__39913 = seq__39752_39905;
var G__39914 = chunk__39756_39906;
var G__39915 = count__39757_39907;
var G__39916 = (i__39758_39908 + (1));
seq__39752_39905 = G__39913;
chunk__39756_39906 = G__39914;
count__39757_39907 = G__39915;
i__39758_39908 = G__39916;
continue;
} else {
var G__39917 = seq__39752_39905;
var G__39918 = chunk__39756_39906;
var G__39919 = count__39757_39907;
var G__39920 = (i__39758_39908 + (1));
seq__39752_39905 = G__39917;
chunk__39756_39906 = G__39918;
count__39757_39907 = G__39919;
i__39758_39908 = G__39920;
continue;
}
} else {
var G__39921 = seq__39752_39905;
var G__39922 = chunk__39756_39906;
var G__39923 = count__39757_39907;
var G__39924 = (i__39758_39908 + (1));
seq__39752_39905 = G__39921;
chunk__39756_39906 = G__39922;
count__39757_39907 = G__39923;
i__39758_39908 = G__39924;
continue;
}
} else {
var temp__5735__auto___39925 = cljs.core.seq(seq__39752_39905);
if(temp__5735__auto___39925){
var seq__39752_39926__$1 = temp__5735__auto___39925;
if(cljs.core.chunked_seq_QMARK_(seq__39752_39926__$1)){
var c__4556__auto___39927 = cljs.core.chunk_first(seq__39752_39926__$1);
var G__39928 = cljs.core.chunk_rest(seq__39752_39926__$1);
var G__39929 = c__4556__auto___39927;
var G__39930 = cljs.core.count(c__4556__auto___39927);
var G__39931 = (0);
seq__39752_39905 = G__39928;
chunk__39756_39906 = G__39929;
count__39757_39907 = G__39930;
i__39758_39908 = G__39931;
continue;
} else {
var node_39932 = cljs.core.first(seq__39752_39926__$1);
if(cljs.core.not(node_39932.shadow$old)){
var path_match_39934 = shadow.cljs.devtools.client.browser.match_paths(node_39932.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39934)){
var new_link_39935 = (function (){var G__39766 = node_39932.cloneNode(true);
G__39766.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39934),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39766;
})();
(node_39932.shadow$old = true);

(new_link_39935.onload = ((function (seq__39752_39905,chunk__39756_39906,count__39757_39907,i__39758_39908,seq__39695,chunk__39697,count__39698,i__39699,new_link_39935,path_match_39934,node_39932,seq__39752_39926__$1,temp__5735__auto___39925,path,map__39693,map__39693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39932);
});})(seq__39752_39905,chunk__39756_39906,count__39757_39907,i__39758_39908,seq__39695,chunk__39697,count__39698,i__39699,new_link_39935,path_match_39934,node_39932,seq__39752_39926__$1,temp__5735__auto___39925,path,map__39693,map__39693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39934], 0));

goog.dom.insertSiblingAfter(new_link_39935,node_39932);


var G__39936 = cljs.core.next(seq__39752_39926__$1);
var G__39937 = null;
var G__39938 = (0);
var G__39939 = (0);
seq__39752_39905 = G__39936;
chunk__39756_39906 = G__39937;
count__39757_39907 = G__39938;
i__39758_39908 = G__39939;
continue;
} else {
var G__39940 = cljs.core.next(seq__39752_39926__$1);
var G__39941 = null;
var G__39942 = (0);
var G__39943 = (0);
seq__39752_39905 = G__39940;
chunk__39756_39906 = G__39941;
count__39757_39907 = G__39942;
i__39758_39908 = G__39943;
continue;
}
} else {
var G__39944 = cljs.core.next(seq__39752_39926__$1);
var G__39945 = null;
var G__39946 = (0);
var G__39947 = (0);
seq__39752_39905 = G__39944;
chunk__39756_39906 = G__39945;
count__39757_39907 = G__39946;
i__39758_39908 = G__39947;
continue;
}
}
} else {
}
}
break;
}


var G__39948 = seq__39695;
var G__39949 = chunk__39697;
var G__39950 = count__39698;
var G__39951 = (i__39699 + (1));
seq__39695 = G__39948;
chunk__39697 = G__39949;
count__39698 = G__39950;
i__39699 = G__39951;
continue;
} else {
var G__39952 = seq__39695;
var G__39953 = chunk__39697;
var G__39954 = count__39698;
var G__39955 = (i__39699 + (1));
seq__39695 = G__39952;
chunk__39697 = G__39953;
count__39698 = G__39954;
i__39699 = G__39955;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39695);
if(temp__5735__auto__){
var seq__39695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39695__$1);
var G__39956 = cljs.core.chunk_rest(seq__39695__$1);
var G__39957 = c__4556__auto__;
var G__39958 = cljs.core.count(c__4556__auto__);
var G__39959 = (0);
seq__39695 = G__39956;
chunk__39697 = G__39957;
count__39698 = G__39958;
i__39699 = G__39959;
continue;
} else {
var path = cljs.core.first(seq__39695__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39771_39960 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39775_39961 = null;
var count__39776_39962 = (0);
var i__39777_39963 = (0);
while(true){
if((i__39777_39963 < count__39776_39962)){
var node_39964 = chunk__39775_39961.cljs$core$IIndexed$_nth$arity$2(null,i__39777_39963);
if(cljs.core.not(node_39964.shadow$old)){
var path_match_39965 = shadow.cljs.devtools.client.browser.match_paths(node_39964.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39965)){
var new_link_39966 = (function (){var G__39783 = node_39964.cloneNode(true);
G__39783.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39965),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39783;
})();
(node_39964.shadow$old = true);

(new_link_39966.onload = ((function (seq__39771_39960,chunk__39775_39961,count__39776_39962,i__39777_39963,seq__39695,chunk__39697,count__39698,i__39699,new_link_39966,path_match_39965,node_39964,path,seq__39695__$1,temp__5735__auto__,map__39693,map__39693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39964);
});})(seq__39771_39960,chunk__39775_39961,count__39776_39962,i__39777_39963,seq__39695,chunk__39697,count__39698,i__39699,new_link_39966,path_match_39965,node_39964,path,seq__39695__$1,temp__5735__auto__,map__39693,map__39693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39965], 0));

goog.dom.insertSiblingAfter(new_link_39966,node_39964);


var G__39967 = seq__39771_39960;
var G__39968 = chunk__39775_39961;
var G__39969 = count__39776_39962;
var G__39970 = (i__39777_39963 + (1));
seq__39771_39960 = G__39967;
chunk__39775_39961 = G__39968;
count__39776_39962 = G__39969;
i__39777_39963 = G__39970;
continue;
} else {
var G__39971 = seq__39771_39960;
var G__39972 = chunk__39775_39961;
var G__39973 = count__39776_39962;
var G__39974 = (i__39777_39963 + (1));
seq__39771_39960 = G__39971;
chunk__39775_39961 = G__39972;
count__39776_39962 = G__39973;
i__39777_39963 = G__39974;
continue;
}
} else {
var G__39975 = seq__39771_39960;
var G__39976 = chunk__39775_39961;
var G__39977 = count__39776_39962;
var G__39978 = (i__39777_39963 + (1));
seq__39771_39960 = G__39975;
chunk__39775_39961 = G__39976;
count__39776_39962 = G__39977;
i__39777_39963 = G__39978;
continue;
}
} else {
var temp__5735__auto___39979__$1 = cljs.core.seq(seq__39771_39960);
if(temp__5735__auto___39979__$1){
var seq__39771_39980__$1 = temp__5735__auto___39979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39771_39980__$1)){
var c__4556__auto___39981 = cljs.core.chunk_first(seq__39771_39980__$1);
var G__39982 = cljs.core.chunk_rest(seq__39771_39980__$1);
var G__39983 = c__4556__auto___39981;
var G__39984 = cljs.core.count(c__4556__auto___39981);
var G__39985 = (0);
seq__39771_39960 = G__39982;
chunk__39775_39961 = G__39983;
count__39776_39962 = G__39984;
i__39777_39963 = G__39985;
continue;
} else {
var node_39986 = cljs.core.first(seq__39771_39980__$1);
if(cljs.core.not(node_39986.shadow$old)){
var path_match_39987 = shadow.cljs.devtools.client.browser.match_paths(node_39986.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39987)){
var new_link_39988 = (function (){var G__39784 = node_39986.cloneNode(true);
G__39784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39987),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39784;
})();
(node_39986.shadow$old = true);

(new_link_39988.onload = ((function (seq__39771_39960,chunk__39775_39961,count__39776_39962,i__39777_39963,seq__39695,chunk__39697,count__39698,i__39699,new_link_39988,path_match_39987,node_39986,seq__39771_39980__$1,temp__5735__auto___39979__$1,path,seq__39695__$1,temp__5735__auto__,map__39693,map__39693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39986);
});})(seq__39771_39960,chunk__39775_39961,count__39776_39962,i__39777_39963,seq__39695,chunk__39697,count__39698,i__39699,new_link_39988,path_match_39987,node_39986,seq__39771_39980__$1,temp__5735__auto___39979__$1,path,seq__39695__$1,temp__5735__auto__,map__39693,map__39693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39987], 0));

goog.dom.insertSiblingAfter(new_link_39988,node_39986);


var G__39989 = cljs.core.next(seq__39771_39980__$1);
var G__39990 = null;
var G__39991 = (0);
var G__39992 = (0);
seq__39771_39960 = G__39989;
chunk__39775_39961 = G__39990;
count__39776_39962 = G__39991;
i__39777_39963 = G__39992;
continue;
} else {
var G__39993 = cljs.core.next(seq__39771_39980__$1);
var G__39994 = null;
var G__39995 = (0);
var G__39996 = (0);
seq__39771_39960 = G__39993;
chunk__39775_39961 = G__39994;
count__39776_39962 = G__39995;
i__39777_39963 = G__39996;
continue;
}
} else {
var G__39997 = cljs.core.next(seq__39771_39980__$1);
var G__39998 = null;
var G__39999 = (0);
var G__40000 = (0);
seq__39771_39960 = G__39997;
chunk__39775_39961 = G__39998;
count__39776_39962 = G__39999;
i__39777_39963 = G__40000;
continue;
}
}
} else {
}
}
break;
}


var G__40001 = cljs.core.next(seq__39695__$1);
var G__40002 = null;
var G__40003 = (0);
var G__40004 = (0);
seq__39695 = G__40001;
chunk__39697 = G__40002;
count__39698 = G__40003;
i__39699 = G__40004;
continue;
} else {
var G__40005 = cljs.core.next(seq__39695__$1);
var G__40006 = null;
var G__40007 = (0);
var G__40008 = (0);
seq__39695 = G__40005;
chunk__39697 = G__40006;
count__39698 = G__40007;
i__39699 = G__40008;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39790){
var map__39791 = p__39790;
var map__39791__$1 = (((((!((map__39791 == null))))?(((((map__39791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39791):map__39791);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39791__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39793){
var map__39794 = p__39793;
var map__39794__$1 = (((((!((map__39794 == null))))?(((((map__39794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39794):map__39794);
var _ = map__39794__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39796,done,error){
var map__39797 = p__39796;
var map__39797__$1 = (((((!((map__39797 == null))))?(((((map__39797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39797):map__39797);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39797__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39799,done,error){
var map__39800 = p__39799;
var map__39800__$1 = (((((!((map__39800 == null))))?(((((map__39800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39800):map__39800);
var msg = map__39800__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39802){
var map__39803 = p__39802;
var map__39803__$1 = (((((!((map__39803 == null))))?(((((map__39803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39803):map__39803);
var src = map__39803__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39805 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39805) : done.call(null,G__39805));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39810){
var map__39811 = p__39810;
var map__39811__$1 = (((((!((map__39811 == null))))?(((((map__39811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39811):map__39811);
var msg__$1 = map__39811__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39811__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39814){var ex = e39814;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39815){
var map__39816 = p__39815;
var map__39816__$1 = (((((!((map__39816 == null))))?(((((map__39816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39816):map__39816);
var env = map__39816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39818){
var map__39819 = p__39818;
var map__39819__$1 = (((((!((map__39819 == null))))?(((((map__39819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39819):map__39819);
var msg = map__39819__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39819__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39821){
var map__39822 = p__39821;
var map__39822__$1 = (((((!((map__39822 == null))))?(((((map__39822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39822):map__39822);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39822__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39822__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39824){
var map__39825 = p__39824;
var map__39825__$1 = (((((!((map__39825 == null))))?(((((map__39825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39825):map__39825);
var svc = map__39825__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39825__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
