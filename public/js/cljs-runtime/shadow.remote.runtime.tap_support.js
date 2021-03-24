goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39329,p__39330){
var map__39331 = p__39329;
var map__39331__$1 = (((((!((map__39331 == null))))?(((((map__39331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39331):map__39331);
var svc = map__39331__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39331__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39331__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39331__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39332 = p__39330;
var map__39332__$1 = (((((!((map__39332 == null))))?(((((map__39332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39332):map__39332);
var msg = map__39332__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39332__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39343,p__39344){
var map__39345 = p__39343;
var map__39345__$1 = (((((!((map__39345 == null))))?(((((map__39345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39345):map__39345);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39345__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39346 = p__39344;
var map__39346__$1 = (((((!((map__39346 == null))))?(((((map__39346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39346):map__39346);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39353,p__39354){
var map__39357 = p__39353;
var map__39357__$1 = (((((!((map__39357 == null))))?(((((map__39357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39357):map__39357);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39358 = p__39354;
var map__39358__$1 = (((((!((map__39358 == null))))?(((((map__39358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39358):map__39358);
var msg = map__39358__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39358__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39361,tid){
var map__39364 = p__39361;
var map__39364__$1 = (((((!((map__39364 == null))))?(((((map__39364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39364):map__39364);
var svc = map__39364__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39364__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39375 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39376 = null;
var count__39377 = (0);
var i__39378 = (0);
while(true){
if((i__39378 < count__39377)){
var vec__39389 = chunk__39376.cljs$core$IIndexed$_nth$arity$2(null,i__39378);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39389,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39389,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39402 = seq__39375;
var G__39403 = chunk__39376;
var G__39404 = count__39377;
var G__39405 = (i__39378 + (1));
seq__39375 = G__39402;
chunk__39376 = G__39403;
count__39377 = G__39404;
i__39378 = G__39405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39375);
if(temp__5735__auto__){
var seq__39375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39375__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39375__$1);
var G__39406 = cljs.core.chunk_rest(seq__39375__$1);
var G__39407 = c__4556__auto__;
var G__39408 = cljs.core.count(c__4556__auto__);
var G__39409 = (0);
seq__39375 = G__39406;
chunk__39376 = G__39407;
count__39377 = G__39408;
i__39378 = G__39409;
continue;
} else {
var vec__39392 = cljs.core.first(seq__39375__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39410 = cljs.core.next(seq__39375__$1);
var G__39411 = null;
var G__39412 = (0);
var G__39413 = (0);
seq__39375 = G__39410;
chunk__39376 = G__39411;
count__39377 = G__39412;
i__39378 = G__39413;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39366_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39366_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39367_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39367_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39368_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39368_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39369_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39369_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39398){
var map__39399 = p__39398;
var map__39399__$1 = (((((!((map__39399 == null))))?(((((map__39399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39399):map__39399);
var svc = map__39399__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39399__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
