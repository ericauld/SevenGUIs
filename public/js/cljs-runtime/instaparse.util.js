goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28568 = arguments.length;
var i__4737__auto___28569 = (0);
while(true){
if((i__4737__auto___28569 < len__4736__auto___28568)){
args__4742__auto__.push((arguments[i__4737__auto___28569]));

var G__28571 = (i__4737__auto___28569 + (1));
i__4737__auto___28569 = G__28571;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq28561){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28561));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28572 = arguments.length;
var i__4737__auto___28574 = (0);
while(true){
if((i__4737__auto___28574 < len__4736__auto___28572)){
args__4742__auto__.push((arguments[i__4737__auto___28574]));

var G__28575 = (i__4737__auto___28574 + (1));
i__4737__auto___28574 = G__28575;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq28564){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28564));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__28565 = "";
var G__28565__$1 = (cljs.core.truth_(re.ignoreCase)?[G__28565,"i"].join(''):G__28565);
var G__28565__$2 = (cljs.core.truth_(re.multiline)?[G__28565__$1,"m"].join(''):G__28565__$1);
if(cljs.core.truth_(re.unicode)){
return [G__28565__$2,"u"].join('');
} else {
return G__28565__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
