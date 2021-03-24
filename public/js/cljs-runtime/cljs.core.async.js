goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34162 = arguments.length;
switch (G__34162) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34163 = (function (f,blockable,meta34164){
this.f = f;
this.blockable = blockable;
this.meta34164 = meta34164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34165,meta34164__$1){
var self__ = this;
var _34165__$1 = this;
return (new cljs.core.async.t_cljs$core$async34163(self__.f,self__.blockable,meta34164__$1));
}));

(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34165){
var self__ = this;
var _34165__$1 = this;
return self__.meta34164;
}));

(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34164","meta34164",-1868565816,null)], null);
}));

(cljs.core.async.t_cljs$core$async34163.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34163");

(cljs.core.async.t_cljs$core$async34163.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34163");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34163.
 */
cljs.core.async.__GT_t_cljs$core$async34163 = (function cljs$core$async$__GT_t_cljs$core$async34163(f__$1,blockable__$1,meta34164){
return (new cljs.core.async.t_cljs$core$async34163(f__$1,blockable__$1,meta34164));
});

}

return (new cljs.core.async.t_cljs$core$async34163(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34168 = arguments.length;
switch (G__34168) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34170 = arguments.length;
switch (G__34170) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34172 = arguments.length;
switch (G__34172) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35888 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35888) : fn1.call(null,val_35888));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35888) : fn1.call(null,val_35888));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34174 = arguments.length;
switch (G__34174) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35890 = n;
var x_35891 = (0);
while(true){
if((x_35891 < n__4613__auto___35890)){
(a[x_35891] = x_35891);

var G__35892 = (x_35891 + (1));
x_35891 = G__35892;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34175 = (function (flag,meta34176){
this.flag = flag;
this.meta34176 = meta34176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34177,meta34176__$1){
var self__ = this;
var _34177__$1 = this;
return (new cljs.core.async.t_cljs$core$async34175(self__.flag,meta34176__$1));
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34177){
var self__ = this;
var _34177__$1 = this;
return self__.meta34176;
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34176","meta34176",-1987563637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34175");

(cljs.core.async.t_cljs$core$async34175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34175.
 */
cljs.core.async.__GT_t_cljs$core$async34175 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34175(flag__$1,meta34176){
return (new cljs.core.async.t_cljs$core$async34175(flag__$1,meta34176));
});

}

return (new cljs.core.async.t_cljs$core$async34175(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34178 = (function (flag,cb,meta34179){
this.flag = flag;
this.cb = cb;
this.meta34179 = meta34179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34180,meta34179__$1){
var self__ = this;
var _34180__$1 = this;
return (new cljs.core.async.t_cljs$core$async34178(self__.flag,self__.cb,meta34179__$1));
}));

(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34180){
var self__ = this;
var _34180__$1 = this;
return self__.meta34179;
}));

(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34179","meta34179",1190124815,null)], null);
}));

(cljs.core.async.t_cljs$core$async34178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34178");

(cljs.core.async.t_cljs$core$async34178.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34178.
 */
cljs.core.async.__GT_t_cljs$core$async34178 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34178(flag__$1,cb__$1,meta34179){
return (new cljs.core.async.t_cljs$core$async34178(flag__$1,cb__$1,meta34179));
});

}

return (new cljs.core.async.t_cljs$core$async34178(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34183_SHARP_){
var G__34186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34183_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34186) : fret.call(null,G__34186));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34184_SHARP_){
var G__34187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34184_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34187) : fret.call(null,G__34187));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35896 = (i + (1));
i = G__35896;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35899 = arguments.length;
var i__4737__auto___35900 = (0);
while(true){
if((i__4737__auto___35900 < len__4736__auto___35899)){
args__4742__auto__.push((arguments[i__4737__auto___35900]));

var G__35901 = (i__4737__auto___35900 + (1));
i__4737__auto___35900 = G__35901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34194){
var map__34196 = p__34194;
var map__34196__$1 = (((((!((map__34196 == null))))?(((((map__34196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34196):map__34196);
var opts = map__34196__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34192){
var G__34193 = cljs.core.first(seq34192);
var seq34192__$1 = cljs.core.next(seq34192);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34193,seq34192__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34200 = arguments.length;
switch (G__34200) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34081__auto___35905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34232){
var state_val_34233 = (state_34232[(1)]);
if((state_val_34233 === (7))){
var inst_34223 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34238_35907 = state_34232__$1;
(statearr_34238_35907[(2)] = inst_34223);

(statearr_34238_35907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (1))){
var state_34232__$1 = state_34232;
var statearr_34239_35909 = state_34232__$1;
(statearr_34239_35909[(2)] = null);

(statearr_34239_35909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (4))){
var inst_34203 = (state_34232[(7)]);
var inst_34203__$1 = (state_34232[(2)]);
var inst_34204 = (inst_34203__$1 == null);
var state_34232__$1 = (function (){var statearr_34241 = state_34232;
(statearr_34241[(7)] = inst_34203__$1);

return statearr_34241;
})();
if(cljs.core.truth_(inst_34204)){
var statearr_34242_35910 = state_34232__$1;
(statearr_34242_35910[(1)] = (5));

} else {
var statearr_34243_35911 = state_34232__$1;
(statearr_34243_35911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (13))){
var state_34232__$1 = state_34232;
var statearr_34245_35912 = state_34232__$1;
(statearr_34245_35912[(2)] = null);

(statearr_34245_35912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (6))){
var inst_34203 = (state_34232[(7)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34232__$1,(11),to,inst_34203);
} else {
if((state_val_34233 === (3))){
var inst_34230 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34232__$1,inst_34230);
} else {
if((state_val_34233 === (12))){
var state_34232__$1 = state_34232;
var statearr_34247_35913 = state_34232__$1;
(statearr_34247_35913[(2)] = null);

(statearr_34247_35913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (2))){
var state_34232__$1 = state_34232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34232__$1,(4),from);
} else {
if((state_val_34233 === (11))){
var inst_34216 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
if(cljs.core.truth_(inst_34216)){
var statearr_34250_35914 = state_34232__$1;
(statearr_34250_35914[(1)] = (12));

} else {
var statearr_34251_35915 = state_34232__$1;
(statearr_34251_35915[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (9))){
var state_34232__$1 = state_34232;
var statearr_34252_35916 = state_34232__$1;
(statearr_34252_35916[(2)] = null);

(statearr_34252_35916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (5))){
var state_34232__$1 = state_34232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34254_35917 = state_34232__$1;
(statearr_34254_35917[(1)] = (8));

} else {
var statearr_34255_35918 = state_34232__$1;
(statearr_34255_35918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (14))){
var inst_34221 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34256_35919 = state_34232__$1;
(statearr_34256_35919[(2)] = inst_34221);

(statearr_34256_35919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (10))){
var inst_34213 = (state_34232[(2)]);
var state_34232__$1 = state_34232;
var statearr_34257_35921 = state_34232__$1;
(statearr_34257_35921[(2)] = inst_34213);

(statearr_34257_35921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34233 === (8))){
var inst_34210 = cljs.core.async.close_BANG_(to);
var state_34232__$1 = state_34232;
var statearr_34258_35923 = state_34232__$1;
(statearr_34258_35923[(2)] = inst_34210);

(statearr_34258_35923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_34259 = [null,null,null,null,null,null,null,null];
(statearr_34259[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_34259[(1)] = (1));

return statearr_34259;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_34232){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34232);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34260){var ex__34037__auto__ = e34260;
var statearr_34261_35924 = state_34232;
(statearr_34261_35924[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34232[(4)]))){
var statearr_34262_35925 = state_34232;
(statearr_34262_35925[(1)] = cljs.core.first((state_34232[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35926 = state_34232;
state_34232 = G__35926;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_34232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_34232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34263 = f__34082__auto__();
(statearr_34263[(6)] = c__34081__auto___35905);

return statearr_34263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34265){
var vec__34266 = p__34265;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(1),null);
var job = vec__34266;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34081__auto___35929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34273){
var state_val_34274 = (state_34273[(1)]);
if((state_val_34274 === (1))){
var state_34273__$1 = state_34273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34273__$1,(2),res,v);
} else {
if((state_val_34274 === (2))){
var inst_34270 = (state_34273[(2)]);
var inst_34271 = cljs.core.async.close_BANG_(res);
var state_34273__$1 = (function (){var statearr_34275 = state_34273;
(statearr_34275[(7)] = inst_34270);

return statearr_34275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34273__$1,inst_34271);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_34277 = [null,null,null,null,null,null,null,null];
(statearr_34277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__);

(statearr_34277[(1)] = (1));

return statearr_34277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1 = (function (state_34273){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34273);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34278){var ex__34037__auto__ = e34278;
var statearr_34279_35932 = state_34273;
(statearr_34279_35932[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34273[(4)]))){
var statearr_34280_35933 = state_34273;
(statearr_34280_35933[(1)] = cljs.core.first((state_34273[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35934 = state_34273;
state_34273 = G__35934;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = function(state_34273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1.call(this,state_34273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34281 = f__34082__auto__();
(statearr_34281[(6)] = c__34081__auto___35929);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34283){
var vec__34284 = p__34283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34284,(1),null);
var job = vec__34284;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35935 = n;
var __35936 = (0);
while(true){
if((__35936 < n__4613__auto___35935)){
var G__34287_35937 = type;
var G__34287_35938__$1 = (((G__34287_35937 instanceof cljs.core.Keyword))?G__34287_35937.fqn:null);
switch (G__34287_35938__$1) {
case "compute":
var c__34081__auto___35940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35936,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = ((function (__35936,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (1))){
var state_34300__$1 = state_34300;
var statearr_34303_35942 = state_34300__$1;
(statearr_34303_35942[(2)] = null);

(statearr_34303_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (2))){
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34300__$1,(4),jobs);
} else {
if((state_val_34301 === (3))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (4))){
var inst_34290 = (state_34300[(2)]);
var inst_34291 = process(inst_34290);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34291)){
var statearr_34305_35943 = state_34300__$1;
(statearr_34305_35943[(1)] = (5));

} else {
var statearr_34306_35944 = state_34300__$1;
(statearr_34306_35944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var state_34300__$1 = state_34300;
var statearr_34307_35945 = state_34300__$1;
(statearr_34307_35945[(2)] = null);

(statearr_34307_35945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var state_34300__$1 = state_34300;
var statearr_34308_35946 = state_34300__$1;
(statearr_34308_35946[(2)] = null);

(statearr_34308_35946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (7))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34310_35951 = state_34300__$1;
(statearr_34310_35951[(2)] = inst_34296);

(statearr_34310_35951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35936,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
;
return ((function (__35936,switch__34033__auto__,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_34311 = [null,null,null,null,null,null,null];
(statearr_34311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__);

(statearr_34311[(1)] = (1));

return statearr_34311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1 = (function (state_34300){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34300);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34312){var ex__34037__auto__ = e34312;
var statearr_34313_35952 = state_34300;
(statearr_34313_35952[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34300[(4)]))){
var statearr_34314_35953 = state_34300;
(statearr_34314_35953[(1)] = cljs.core.first((state_34300[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35954 = state_34300;
state_34300 = G__35954;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__;
})()
;})(__35936,switch__34033__auto__,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
})();
var state__34083__auto__ = (function (){var statearr_34315 = f__34082__auto__();
(statearr_34315[(6)] = c__34081__auto___35940);

return statearr_34315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
});})(__35936,c__34081__auto___35940,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
);


break;
case "async":
var c__34081__auto___35955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35936,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = ((function (__35936,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (1))){
var state_34328__$1 = state_34328;
var statearr_34332_35956 = state_34328__$1;
(statearr_34332_35956[(2)] = null);

(statearr_34332_35956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (2))){
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34328__$1,(4),jobs);
} else {
if((state_val_34329 === (3))){
var inst_34326 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34326);
} else {
if((state_val_34329 === (4))){
var inst_34318 = (state_34328[(2)]);
var inst_34319 = async(inst_34318);
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34319)){
var statearr_34333_35959 = state_34328__$1;
(statearr_34333_35959[(1)] = (5));

} else {
var statearr_34334_35960 = state_34328__$1;
(statearr_34334_35960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var state_34328__$1 = state_34328;
var statearr_34335_35961 = state_34328__$1;
(statearr_34335_35961[(2)] = null);

(statearr_34335_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var state_34328__$1 = state_34328;
var statearr_34336_35962 = state_34328__$1;
(statearr_34336_35962[(2)] = null);

(statearr_34336_35962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (7))){
var inst_34324 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34340_35963 = state_34328__$1;
(statearr_34340_35963[(2)] = inst_34324);

(statearr_34340_35963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35936,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
;
return ((function (__35936,switch__34033__auto__,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_34341 = [null,null,null,null,null,null,null];
(statearr_34341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__);

(statearr_34341[(1)] = (1));

return statearr_34341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1 = (function (state_34328){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34328);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34342){var ex__34037__auto__ = e34342;
var statearr_34344_35964 = state_34328;
(statearr_34344_35964[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34328[(4)]))){
var statearr_34345_35965 = state_34328;
(statearr_34345_35965[(1)] = cljs.core.first((state_34328[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35966 = state_34328;
state_34328 = G__35966;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__;
})()
;})(__35936,switch__34033__auto__,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
})();
var state__34083__auto__ = (function (){var statearr_34346 = f__34082__auto__();
(statearr_34346[(6)] = c__34081__auto___35955);

return statearr_34346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
});})(__35936,c__34081__auto___35955,G__34287_35937,G__34287_35938__$1,n__4613__auto___35935,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34287_35938__$1)].join('')));

}

var G__35971 = (__35936 + (1));
__35936 = G__35971;
continue;
} else {
}
break;
}

var c__34081__auto___35972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34370){
var state_val_34371 = (state_34370[(1)]);
if((state_val_34371 === (7))){
var inst_34365 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34372_35973 = state_34370__$1;
(statearr_34372_35973[(2)] = inst_34365);

(statearr_34372_35973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (1))){
var state_34370__$1 = state_34370;
var statearr_34373_35977 = state_34370__$1;
(statearr_34373_35977[(2)] = null);

(statearr_34373_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (4))){
var inst_34349 = (state_34370[(7)]);
var inst_34349__$1 = (state_34370[(2)]);
var inst_34350 = (inst_34349__$1 == null);
var state_34370__$1 = (function (){var statearr_34374 = state_34370;
(statearr_34374[(7)] = inst_34349__$1);

return statearr_34374;
})();
if(cljs.core.truth_(inst_34350)){
var statearr_34375_35978 = state_34370__$1;
(statearr_34375_35978[(1)] = (5));

} else {
var statearr_34376_35982 = state_34370__$1;
(statearr_34376_35982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (6))){
var inst_34349 = (state_34370[(7)]);
var inst_34354 = (state_34370[(8)]);
var inst_34354__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34356 = [inst_34349,inst_34354__$1];
var inst_34357 = (new cljs.core.PersistentVector(null,2,(5),inst_34355,inst_34356,null));
var state_34370__$1 = (function (){var statearr_34377 = state_34370;
(statearr_34377[(8)] = inst_34354__$1);

return statearr_34377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34370__$1,(8),jobs,inst_34357);
} else {
if((state_val_34371 === (3))){
var inst_34367 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34370__$1,inst_34367);
} else {
if((state_val_34371 === (2))){
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34370__$1,(4),from);
} else {
if((state_val_34371 === (9))){
var inst_34362 = (state_34370[(2)]);
var state_34370__$1 = (function (){var statearr_34381 = state_34370;
(statearr_34381[(9)] = inst_34362);

return statearr_34381;
})();
var statearr_34382_35989 = state_34370__$1;
(statearr_34382_35989[(2)] = null);

(statearr_34382_35989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (5))){
var inst_34352 = cljs.core.async.close_BANG_(jobs);
var state_34370__$1 = state_34370;
var statearr_34384_35994 = state_34370__$1;
(statearr_34384_35994[(2)] = inst_34352);

(statearr_34384_35994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (8))){
var inst_34354 = (state_34370[(8)]);
var inst_34359 = (state_34370[(2)]);
var state_34370__$1 = (function (){var statearr_34385 = state_34370;
(statearr_34385[(10)] = inst_34359);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34370__$1,(9),results,inst_34354);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_34386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__);

(statearr_34386[(1)] = (1));

return statearr_34386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1 = (function (state_34370){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34370);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34389){var ex__34037__auto__ = e34389;
var statearr_34390_36004 = state_34370;
(statearr_34390_36004[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34370[(4)]))){
var statearr_34391_36005 = state_34370;
(statearr_34391_36005[(1)] = cljs.core.first((state_34370[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36006 = state_34370;
state_34370 = G__36006;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = function(state_34370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1.call(this,state_34370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34392 = f__34082__auto__();
(statearr_34392[(6)] = c__34081__auto___35972);

return statearr_34392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


var c__34081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34432){
var state_val_34433 = (state_34432[(1)]);
if((state_val_34433 === (7))){
var inst_34428 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34434_36010 = state_34432__$1;
(statearr_34434_36010[(2)] = inst_34428);

(statearr_34434_36010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (20))){
var state_34432__$1 = state_34432;
var statearr_34435_36011 = state_34432__$1;
(statearr_34435_36011[(2)] = null);

(statearr_34435_36011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (1))){
var state_34432__$1 = state_34432;
var statearr_34436_36012 = state_34432__$1;
(statearr_34436_36012[(2)] = null);

(statearr_34436_36012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (4))){
var inst_34397 = (state_34432[(7)]);
var inst_34397__$1 = (state_34432[(2)]);
var inst_34398 = (inst_34397__$1 == null);
var state_34432__$1 = (function (){var statearr_34437 = state_34432;
(statearr_34437[(7)] = inst_34397__$1);

return statearr_34437;
})();
if(cljs.core.truth_(inst_34398)){
var statearr_34439_36013 = state_34432__$1;
(statearr_34439_36013[(1)] = (5));

} else {
var statearr_34440_36014 = state_34432__$1;
(statearr_34440_36014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (15))){
var inst_34410 = (state_34432[(8)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34432__$1,(18),to,inst_34410);
} else {
if((state_val_34433 === (21))){
var inst_34423 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34442_36016 = state_34432__$1;
(statearr_34442_36016[(2)] = inst_34423);

(statearr_34442_36016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (13))){
var inst_34425 = (state_34432[(2)]);
var state_34432__$1 = (function (){var statearr_34443 = state_34432;
(statearr_34443[(9)] = inst_34425);

return statearr_34443;
})();
var statearr_34444_36017 = state_34432__$1;
(statearr_34444_36017[(2)] = null);

(statearr_34444_36017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (6))){
var inst_34397 = (state_34432[(7)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34432__$1,(11),inst_34397);
} else {
if((state_val_34433 === (17))){
var inst_34418 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
if(cljs.core.truth_(inst_34418)){
var statearr_34445_36018 = state_34432__$1;
(statearr_34445_36018[(1)] = (19));

} else {
var statearr_34446_36019 = state_34432__$1;
(statearr_34446_36019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (3))){
var inst_34430 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34432__$1,inst_34430);
} else {
if((state_val_34433 === (12))){
var inst_34407 = (state_34432[(10)]);
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34432__$1,(14),inst_34407);
} else {
if((state_val_34433 === (2))){
var state_34432__$1 = state_34432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34432__$1,(4),results);
} else {
if((state_val_34433 === (19))){
var state_34432__$1 = state_34432;
var statearr_34450_36020 = state_34432__$1;
(statearr_34450_36020[(2)] = null);

(statearr_34450_36020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (11))){
var inst_34407 = (state_34432[(2)]);
var state_34432__$1 = (function (){var statearr_34451 = state_34432;
(statearr_34451[(10)] = inst_34407);

return statearr_34451;
})();
var statearr_34452_36021 = state_34432__$1;
(statearr_34452_36021[(2)] = null);

(statearr_34452_36021[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (9))){
var state_34432__$1 = state_34432;
var statearr_34453_36022 = state_34432__$1;
(statearr_34453_36022[(2)] = null);

(statearr_34453_36022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (5))){
var state_34432__$1 = state_34432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34454_36023 = state_34432__$1;
(statearr_34454_36023[(1)] = (8));

} else {
var statearr_34455_36024 = state_34432__$1;
(statearr_34455_36024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (14))){
var inst_34410 = (state_34432[(8)]);
var inst_34410__$1 = (state_34432[(2)]);
var inst_34411 = (inst_34410__$1 == null);
var inst_34412 = cljs.core.not(inst_34411);
var state_34432__$1 = (function (){var statearr_34456 = state_34432;
(statearr_34456[(8)] = inst_34410__$1);

return statearr_34456;
})();
if(inst_34412){
var statearr_34459_36025 = state_34432__$1;
(statearr_34459_36025[(1)] = (15));

} else {
var statearr_34460_36026 = state_34432__$1;
(statearr_34460_36026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (16))){
var state_34432__$1 = state_34432;
var statearr_34463_36027 = state_34432__$1;
(statearr_34463_36027[(2)] = false);

(statearr_34463_36027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (10))){
var inst_34404 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34464_36028 = state_34432__$1;
(statearr_34464_36028[(2)] = inst_34404);

(statearr_34464_36028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (18))){
var inst_34415 = (state_34432[(2)]);
var state_34432__$1 = state_34432;
var statearr_34465_36029 = state_34432__$1;
(statearr_34465_36029[(2)] = inst_34415);

(statearr_34465_36029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34433 === (8))){
var inst_34401 = cljs.core.async.close_BANG_(to);
var state_34432__$1 = state_34432;
var statearr_34467_36030 = state_34432__$1;
(statearr_34467_36030[(2)] = inst_34401);

(statearr_34467_36030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_34468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__);

(statearr_34468[(1)] = (1));

return statearr_34468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1 = (function (state_34432){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34432);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34469){var ex__34037__auto__ = e34469;
var statearr_34470_36031 = state_34432;
(statearr_34470_36031[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34432[(4)]))){
var statearr_34471_36034 = state_34432;
(statearr_34471_36034[(1)] = cljs.core.first((state_34432[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_34432;
state_34432 = G__36036;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__ = function(state_34432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1.call(this,state_34432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34472 = f__34082__auto__();
(statearr_34472[(6)] = c__34081__auto__);

return statearr_34472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

return c__34081__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34474 = arguments.length;
switch (G__34474) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34476 = arguments.length;
switch (G__34476) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34478 = arguments.length;
switch (G__34478) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34081__auto___36047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (7))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34507_36053 = state_34504__$1;
(statearr_34507_36053[(2)] = inst_34500);

(statearr_34507_36053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
var statearr_34508_36056 = state_34504__$1;
(statearr_34508_36056[(2)] = null);

(statearr_34508_36056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (4))){
var inst_34481 = (state_34504[(7)]);
var inst_34481__$1 = (state_34504[(2)]);
var inst_34482 = (inst_34481__$1 == null);
var state_34504__$1 = (function (){var statearr_34510 = state_34504;
(statearr_34510[(7)] = inst_34481__$1);

return statearr_34510;
})();
if(cljs.core.truth_(inst_34482)){
var statearr_34511_36060 = state_34504__$1;
(statearr_34511_36060[(1)] = (5));

} else {
var statearr_34512_36065 = state_34504__$1;
(statearr_34512_36065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (13))){
var state_34504__$1 = state_34504;
var statearr_34513_36066 = state_34504__$1;
(statearr_34513_36066[(2)] = null);

(statearr_34513_36066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var inst_34481 = (state_34504[(7)]);
var inst_34487 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34481) : p.call(null,inst_34481));
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34487)){
var statearr_34514_36073 = state_34504__$1;
(statearr_34514_36073[(1)] = (9));

} else {
var statearr_34515_36074 = state_34504__$1;
(statearr_34515_36074[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (12))){
var state_34504__$1 = state_34504;
var statearr_34516_36075 = state_34504__$1;
(statearr_34516_36075[(2)] = null);

(statearr_34516_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (2))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,(4),ch);
} else {
if((state_val_34505 === (11))){
var inst_34481 = (state_34504[(7)]);
var inst_34491 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34504__$1,(8),inst_34491,inst_34481);
} else {
if((state_val_34505 === (9))){
var state_34504__$1 = state_34504;
var statearr_34518_36076 = state_34504__$1;
(statearr_34518_36076[(2)] = tc);

(statearr_34518_36076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var inst_34484 = cljs.core.async.close_BANG_(tc);
var inst_34485 = cljs.core.async.close_BANG_(fc);
var state_34504__$1 = (function (){var statearr_34519 = state_34504;
(statearr_34519[(8)] = inst_34484);

return statearr_34519;
})();
var statearr_34520_36083 = state_34504__$1;
(statearr_34520_36083[(2)] = inst_34485);

(statearr_34520_36083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (14))){
var inst_34498 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34521_36084 = state_34504__$1;
(statearr_34521_36084[(2)] = inst_34498);

(statearr_34521_36084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (10))){
var state_34504__$1 = state_34504;
var statearr_34522_36085 = state_34504__$1;
(statearr_34522_36085[(2)] = fc);

(statearr_34522_36085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (8))){
var inst_34493 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34493)){
var statearr_34523_36086 = state_34504__$1;
(statearr_34523_36086[(1)] = (12));

} else {
var statearr_34524_36087 = state_34504__$1;
(statearr_34524_36087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_34525 = [null,null,null,null,null,null,null,null,null];
(statearr_34525[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_34525[(1)] = (1));

return statearr_34525;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_34504){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34526){var ex__34037__auto__ = e34526;
var statearr_34527_36088 = state_34504;
(statearr_34527_36088[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34504[(4)]))){
var statearr_34528_36089 = state_34504;
(statearr_34528_36089[(1)] = cljs.core.first((state_34504[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36090 = state_34504;
state_34504 = G__36090;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34529 = f__34082__auto__();
(statearr_34529[(6)] = c__34081__auto___36047);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36097 = state_34552__$1;
(statearr_34554_36097[(2)] = inst_34548);

(statearr_34554_36097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var inst_34530 = init;
var inst_34531 = inst_34530;
var state_34552__$1 = (function (){var statearr_34555 = state_34552;
(statearr_34555[(7)] = inst_34531);

return statearr_34555;
})();
var statearr_34556_36098 = state_34552__$1;
(statearr_34556_36098[(2)] = null);

(statearr_34556_36098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (4))){
var inst_34534 = (state_34552[(8)]);
var inst_34534__$1 = (state_34552[(2)]);
var inst_34535 = (inst_34534__$1 == null);
var state_34552__$1 = (function (){var statearr_34557 = state_34552;
(statearr_34557[(8)] = inst_34534__$1);

return statearr_34557;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34558_36099 = state_34552__$1;
(statearr_34558_36099[(1)] = (5));

} else {
var statearr_34559_36100 = state_34552__$1;
(statearr_34559_36100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34534 = (state_34552[(8)]);
var inst_34538 = (state_34552[(9)]);
var inst_34531 = (state_34552[(7)]);
var inst_34538__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34531,inst_34534) : f.call(null,inst_34531,inst_34534));
var inst_34539 = cljs.core.reduced_QMARK_(inst_34538__$1);
var state_34552__$1 = (function (){var statearr_34560 = state_34552;
(statearr_34560[(9)] = inst_34538__$1);

return statearr_34560;
})();
if(inst_34539){
var statearr_34561_36101 = state_34552__$1;
(statearr_34561_36101[(1)] = (8));

} else {
var statearr_34562_36102 = state_34552__$1;
(statearr_34562_36102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (3))){
var inst_34550 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34552__$1,inst_34550);
} else {
if((state_val_34553 === (2))){
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34552__$1,(4),ch);
} else {
if((state_val_34553 === (9))){
var inst_34538 = (state_34552[(9)]);
var inst_34531 = inst_34538;
var state_34552__$1 = (function (){var statearr_34563 = state_34552;
(statearr_34563[(7)] = inst_34531);

return statearr_34563;
})();
var statearr_34564_36103 = state_34552__$1;
(statearr_34564_36103[(2)] = null);

(statearr_34564_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34531 = (state_34552[(7)]);
var state_34552__$1 = state_34552;
var statearr_34565_36104 = state_34552__$1;
(statearr_34565_36104[(2)] = inst_34531);

(statearr_34565_36104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (10))){
var inst_34546 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34566_36105 = state_34552__$1;
(statearr_34566_36105[(2)] = inst_34546);

(statearr_34566_36105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (8))){
var inst_34538 = (state_34552[(9)]);
var inst_34541 = cljs.core.deref(inst_34538);
var state_34552__$1 = state_34552;
var statearr_34567_36112 = state_34552__$1;
(statearr_34567_36112[(2)] = inst_34541);

(statearr_34567_36112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34034__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34034__auto____0 = (function (){
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$reduce_$_state_machine__34034__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var cljs$core$async$reduce_$_state_machine__34034__auto____1 = (function (state_34552){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34552);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34569){var ex__34037__auto__ = e34569;
var statearr_34570_36113 = state_34552;
(statearr_34570_36113[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34552[(4)]))){
var statearr_34571_36114 = state_34552;
(statearr_34571_36114[(1)] = cljs.core.first((state_34552[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36115 = state_34552;
state_34552 = G__36115;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34034__auto__ = function(state_34552){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34034__auto____1.call(this,state_34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34034__auto____0;
cljs$core$async$reduce_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34034__auto____1;
return cljs$core$async$reduce_$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34572 = f__34082__auto__();
(statearr_34572[(6)] = c__34081__auto__);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

return c__34081__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34578){
var state_val_34579 = (state_34578[(1)]);
if((state_val_34579 === (1))){
var inst_34573 = cljs.core.async.reduce(f__$1,init,ch);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34578__$1,(2),inst_34573);
} else {
if((state_val_34579 === (2))){
var inst_34575 = (state_34578[(2)]);
var inst_34576 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34575) : f__$1.call(null,inst_34575));
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34578__$1,inst_34576);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34034__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34034__auto____0 = (function (){
var statearr_34580 = [null,null,null,null,null,null,null];
(statearr_34580[(0)] = cljs$core$async$transduce_$_state_machine__34034__auto__);

(statearr_34580[(1)] = (1));

return statearr_34580;
});
var cljs$core$async$transduce_$_state_machine__34034__auto____1 = (function (state_34578){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34578);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34581){var ex__34037__auto__ = e34581;
var statearr_34582_36116 = state_34578;
(statearr_34582_36116[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34578[(4)]))){
var statearr_34583_36117 = state_34578;
(statearr_34583_36117[(1)] = cljs.core.first((state_34578[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36118 = state_34578;
state_34578 = G__36118;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34034__auto__ = function(state_34578){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34034__auto____1.call(this,state_34578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34034__auto____0;
cljs$core$async$transduce_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34034__auto____1;
return cljs$core$async$transduce_$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34584 = f__34082__auto__();
(statearr_34584[(6)] = c__34081__auto__);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

return c__34081__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34586 = arguments.length;
switch (G__34586) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34593 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34613_36125 = state_34611__$1;
(statearr_34613_36125[(2)] = inst_34593);

(statearr_34613_36125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34587 = cljs.core.seq(coll);
var inst_34588 = inst_34587;
var state_34611__$1 = (function (){var statearr_34614 = state_34611;
(statearr_34614[(7)] = inst_34588);

return statearr_34614;
})();
var statearr_34615_36126 = state_34611__$1;
(statearr_34615_36126[(2)] = null);

(statearr_34615_36126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var inst_34588 = (state_34611[(7)]);
var inst_34591 = cljs.core.first(inst_34588);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34611__$1,(7),ch,inst_34591);
} else {
if((state_val_34612 === (13))){
var inst_34605 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34616_36127 = state_34611__$1;
(statearr_34616_36127[(2)] = inst_34605);

(statearr_34616_36127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (6))){
var inst_34596 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34596)){
var statearr_34617_36128 = state_34611__$1;
(statearr_34617_36128[(1)] = (8));

} else {
var statearr_34618_36129 = state_34611__$1;
(statearr_34618_36129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34609 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (12))){
var state_34611__$1 = state_34611;
var statearr_34619_36130 = state_34611__$1;
(statearr_34619_36130[(2)] = null);

(statearr_34619_36130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (2))){
var inst_34588 = (state_34611[(7)]);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34588)){
var statearr_34620_36131 = state_34611__$1;
(statearr_34620_36131[(1)] = (4));

} else {
var statearr_34621_36132 = state_34611__$1;
(statearr_34621_36132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (11))){
var inst_34602 = cljs.core.async.close_BANG_(ch);
var state_34611__$1 = state_34611;
var statearr_34622_36134 = state_34611__$1;
(statearr_34622_36134[(2)] = inst_34602);

(statearr_34622_36134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (9))){
var state_34611__$1 = state_34611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34623_36136 = state_34611__$1;
(statearr_34623_36136[(1)] = (11));

} else {
var statearr_34624_36137 = state_34611__$1;
(statearr_34624_36137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (5))){
var inst_34588 = (state_34611[(7)]);
var state_34611__$1 = state_34611;
var statearr_34625_36138 = state_34611__$1;
(statearr_34625_36138[(2)] = inst_34588);

(statearr_34625_36138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34607 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34626_36139 = state_34611__$1;
(statearr_34626_36139[(2)] = inst_34607);

(statearr_34626_36139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34588 = (state_34611[(7)]);
var inst_34598 = cljs.core.next(inst_34588);
var inst_34588__$1 = inst_34598;
var state_34611__$1 = (function (){var statearr_34627 = state_34611;
(statearr_34627[(7)] = inst_34588__$1);

return statearr_34627;
})();
var statearr_34628_36141 = state_34611__$1;
(statearr_34628_36141[(2)] = null);

(statearr_34628_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_34629 = [null,null,null,null,null,null,null,null];
(statearr_34629[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_34629[(1)] = (1));

return statearr_34629;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_34611){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34611);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34630){var ex__34037__auto__ = e34630;
var statearr_34631_36143 = state_34611;
(statearr_34631_36143[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34611[(4)]))){
var statearr_34632_36144 = state_34611;
(statearr_34632_36144[(1)] = cljs.core.first((state_34611[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36145 = state_34611;
state_34611 = G__36145;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34633 = f__34082__auto__();
(statearr_34633[(6)] = c__34081__auto__);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

return c__34081__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34635 = arguments.length;
switch (G__34635) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36149 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36149(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36150 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36150(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36151 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36151(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36152 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36152(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34636 = (function (ch,cs,meta34637){
this.ch = ch;
this.cs = cs;
this.meta34637 = meta34637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34638,meta34637__$1){
var self__ = this;
var _34638__$1 = this;
return (new cljs.core.async.t_cljs$core$async34636(self__.ch,self__.cs,meta34637__$1));
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34638){
var self__ = this;
var _34638__$1 = this;
return self__.meta34637;
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34636.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34637","meta34637",561371421,null)], null);
}));

(cljs.core.async.t_cljs$core$async34636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34636");

(cljs.core.async.t_cljs$core$async34636.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34636.
 */
cljs.core.async.__GT_t_cljs$core$async34636 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34636(ch__$1,cs__$1,meta34637){
return (new cljs.core.async.t_cljs$core$async34636(ch__$1,cs__$1,meta34637));
});

}

return (new cljs.core.async.t_cljs$core$async34636(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34081__auto___36158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_34793){
var state_val_34794 = (state_34793[(1)]);
if((state_val_34794 === (7))){
var inst_34789 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34795_36159 = state_34793__$1;
(statearr_34795_36159[(2)] = inst_34789);

(statearr_34795_36159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (20))){
var inst_34683 = (state_34793[(7)]);
var inst_34702 = cljs.core.first(inst_34683);
var inst_34703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34702,(0),null);
var inst_34704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34702,(1),null);
var state_34793__$1 = (function (){var statearr_34796 = state_34793;
(statearr_34796[(8)] = inst_34703);

return statearr_34796;
})();
if(cljs.core.truth_(inst_34704)){
var statearr_34797_36161 = state_34793__$1;
(statearr_34797_36161[(1)] = (22));

} else {
var statearr_34798_36165 = state_34793__$1;
(statearr_34798_36165[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (27))){
var inst_34738 = (state_34793[(9)]);
var inst_34743 = (state_34793[(10)]);
var inst_34648 = (state_34793[(11)]);
var inst_34736 = (state_34793[(12)]);
var inst_34743__$1 = cljs.core._nth(inst_34736,inst_34738);
var inst_34744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34743__$1,inst_34648,done);
var state_34793__$1 = (function (){var statearr_34799 = state_34793;
(statearr_34799[(10)] = inst_34743__$1);

return statearr_34799;
})();
if(cljs.core.truth_(inst_34744)){
var statearr_34800_36169 = state_34793__$1;
(statearr_34800_36169[(1)] = (30));

} else {
var statearr_34801_36170 = state_34793__$1;
(statearr_34801_36170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (1))){
var state_34793__$1 = state_34793;
var statearr_34802_36171 = state_34793__$1;
(statearr_34802_36171[(2)] = null);

(statearr_34802_36171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (24))){
var inst_34683 = (state_34793[(7)]);
var inst_34709 = (state_34793[(2)]);
var inst_34710 = cljs.core.next(inst_34683);
var inst_34659 = inst_34710;
var inst_34660 = null;
var inst_34661 = (0);
var inst_34662 = (0);
var state_34793__$1 = (function (){var statearr_34803 = state_34793;
(statearr_34803[(13)] = inst_34659);

(statearr_34803[(14)] = inst_34660);

(statearr_34803[(15)] = inst_34709);

(statearr_34803[(16)] = inst_34661);

(statearr_34803[(17)] = inst_34662);

return statearr_34803;
})();
var statearr_34807_36175 = state_34793__$1;
(statearr_34807_36175[(2)] = null);

(statearr_34807_36175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (39))){
var state_34793__$1 = state_34793;
var statearr_34811_36179 = state_34793__$1;
(statearr_34811_36179[(2)] = null);

(statearr_34811_36179[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (4))){
var inst_34648 = (state_34793[(11)]);
var inst_34648__$1 = (state_34793[(2)]);
var inst_34649 = (inst_34648__$1 == null);
var state_34793__$1 = (function (){var statearr_34812 = state_34793;
(statearr_34812[(11)] = inst_34648__$1);

return statearr_34812;
})();
if(cljs.core.truth_(inst_34649)){
var statearr_34813_36183 = state_34793__$1;
(statearr_34813_36183[(1)] = (5));

} else {
var statearr_34814_36184 = state_34793__$1;
(statearr_34814_36184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (15))){
var inst_34659 = (state_34793[(13)]);
var inst_34660 = (state_34793[(14)]);
var inst_34661 = (state_34793[(16)]);
var inst_34662 = (state_34793[(17)]);
var inst_34678 = (state_34793[(2)]);
var inst_34680 = (inst_34662 + (1));
var tmp34808 = inst_34659;
var tmp34809 = inst_34660;
var tmp34810 = inst_34661;
var inst_34659__$1 = tmp34808;
var inst_34660__$1 = tmp34809;
var inst_34661__$1 = tmp34810;
var inst_34662__$1 = inst_34680;
var state_34793__$1 = (function (){var statearr_34815 = state_34793;
(statearr_34815[(13)] = inst_34659__$1);

(statearr_34815[(18)] = inst_34678);

(statearr_34815[(14)] = inst_34660__$1);

(statearr_34815[(16)] = inst_34661__$1);

(statearr_34815[(17)] = inst_34662__$1);

return statearr_34815;
})();
var statearr_34816_36189 = state_34793__$1;
(statearr_34816_36189[(2)] = null);

(statearr_34816_36189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (21))){
var inst_34713 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34820_36190 = state_34793__$1;
(statearr_34820_36190[(2)] = inst_34713);

(statearr_34820_36190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (31))){
var inst_34743 = (state_34793[(10)]);
var inst_34747 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34743);
var state_34793__$1 = state_34793;
var statearr_34821_36191 = state_34793__$1;
(statearr_34821_36191[(2)] = inst_34747);

(statearr_34821_36191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (32))){
var inst_34737 = (state_34793[(19)]);
var inst_34738 = (state_34793[(9)]);
var inst_34735 = (state_34793[(20)]);
var inst_34736 = (state_34793[(12)]);
var inst_34749 = (state_34793[(2)]);
var inst_34750 = (inst_34738 + (1));
var tmp34817 = inst_34737;
var tmp34818 = inst_34735;
var tmp34819 = inst_34736;
var inst_34735__$1 = tmp34818;
var inst_34736__$1 = tmp34819;
var inst_34737__$1 = tmp34817;
var inst_34738__$1 = inst_34750;
var state_34793__$1 = (function (){var statearr_34825 = state_34793;
(statearr_34825[(19)] = inst_34737__$1);

(statearr_34825[(9)] = inst_34738__$1);

(statearr_34825[(20)] = inst_34735__$1);

(statearr_34825[(12)] = inst_34736__$1);

(statearr_34825[(21)] = inst_34749);

return statearr_34825;
})();
var statearr_34826_36194 = state_34793__$1;
(statearr_34826_36194[(2)] = null);

(statearr_34826_36194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (40))){
var inst_34762 = (state_34793[(22)]);
var inst_34766 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34762);
var state_34793__$1 = state_34793;
var statearr_34827_36195 = state_34793__$1;
(statearr_34827_36195[(2)] = inst_34766);

(statearr_34827_36195[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (33))){
var inst_34753 = (state_34793[(23)]);
var inst_34755 = cljs.core.chunked_seq_QMARK_(inst_34753);
var state_34793__$1 = state_34793;
if(inst_34755){
var statearr_34828_36196 = state_34793__$1;
(statearr_34828_36196[(1)] = (36));

} else {
var statearr_34829_36197 = state_34793__$1;
(statearr_34829_36197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (13))){
var inst_34672 = (state_34793[(24)]);
var inst_34675 = cljs.core.async.close_BANG_(inst_34672);
var state_34793__$1 = state_34793;
var statearr_34830_36198 = state_34793__$1;
(statearr_34830_36198[(2)] = inst_34675);

(statearr_34830_36198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (22))){
var inst_34703 = (state_34793[(8)]);
var inst_34706 = cljs.core.async.close_BANG_(inst_34703);
var state_34793__$1 = state_34793;
var statearr_34831_36199 = state_34793__$1;
(statearr_34831_36199[(2)] = inst_34706);

(statearr_34831_36199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (36))){
var inst_34753 = (state_34793[(23)]);
var inst_34757 = cljs.core.chunk_first(inst_34753);
var inst_34758 = cljs.core.chunk_rest(inst_34753);
var inst_34759 = cljs.core.count(inst_34757);
var inst_34735 = inst_34758;
var inst_34736 = inst_34757;
var inst_34737 = inst_34759;
var inst_34738 = (0);
var state_34793__$1 = (function (){var statearr_34836 = state_34793;
(statearr_34836[(19)] = inst_34737);

(statearr_34836[(9)] = inst_34738);

(statearr_34836[(20)] = inst_34735);

(statearr_34836[(12)] = inst_34736);

return statearr_34836;
})();
var statearr_34837_36200 = state_34793__$1;
(statearr_34837_36200[(2)] = null);

(statearr_34837_36200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (41))){
var inst_34753 = (state_34793[(23)]);
var inst_34768 = (state_34793[(2)]);
var inst_34769 = cljs.core.next(inst_34753);
var inst_34735 = inst_34769;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34793__$1 = (function (){var statearr_34838 = state_34793;
(statearr_34838[(25)] = inst_34768);

(statearr_34838[(19)] = inst_34737);

(statearr_34838[(9)] = inst_34738);

(statearr_34838[(20)] = inst_34735);

(statearr_34838[(12)] = inst_34736);

return statearr_34838;
})();
var statearr_34839_36205 = state_34793__$1;
(statearr_34839_36205[(2)] = null);

(statearr_34839_36205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (43))){
var state_34793__$1 = state_34793;
var statearr_34840_36206 = state_34793__$1;
(statearr_34840_36206[(2)] = null);

(statearr_34840_36206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (29))){
var inst_34777 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34843_36207 = state_34793__$1;
(statearr_34843_36207[(2)] = inst_34777);

(statearr_34843_36207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (44))){
var inst_34786 = (state_34793[(2)]);
var state_34793__$1 = (function (){var statearr_34851 = state_34793;
(statearr_34851[(26)] = inst_34786);

return statearr_34851;
})();
var statearr_34852_36208 = state_34793__$1;
(statearr_34852_36208[(2)] = null);

(statearr_34852_36208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (6))){
var inst_34725 = (state_34793[(27)]);
var inst_34724 = cljs.core.deref(cs);
var inst_34725__$1 = cljs.core.keys(inst_34724);
var inst_34726 = cljs.core.count(inst_34725__$1);
var inst_34727 = cljs.core.reset_BANG_(dctr,inst_34726);
var inst_34734 = cljs.core.seq(inst_34725__$1);
var inst_34735 = inst_34734;
var inst_34736 = null;
var inst_34737 = (0);
var inst_34738 = (0);
var state_34793__$1 = (function (){var statearr_34853 = state_34793;
(statearr_34853[(28)] = inst_34727);

(statearr_34853[(27)] = inst_34725__$1);

(statearr_34853[(19)] = inst_34737);

(statearr_34853[(9)] = inst_34738);

(statearr_34853[(20)] = inst_34735);

(statearr_34853[(12)] = inst_34736);

return statearr_34853;
})();
var statearr_34857_36209 = state_34793__$1;
(statearr_34857_36209[(2)] = null);

(statearr_34857_36209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (28))){
var inst_34753 = (state_34793[(23)]);
var inst_34735 = (state_34793[(20)]);
var inst_34753__$1 = cljs.core.seq(inst_34735);
var state_34793__$1 = (function (){var statearr_34858 = state_34793;
(statearr_34858[(23)] = inst_34753__$1);

return statearr_34858;
})();
if(inst_34753__$1){
var statearr_34862_36214 = state_34793__$1;
(statearr_34862_36214[(1)] = (33));

} else {
var statearr_34863_36215 = state_34793__$1;
(statearr_34863_36215[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (25))){
var inst_34737 = (state_34793[(19)]);
var inst_34738 = (state_34793[(9)]);
var inst_34740 = (inst_34738 < inst_34737);
var inst_34741 = inst_34740;
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34741)){
var statearr_34864_36217 = state_34793__$1;
(statearr_34864_36217[(1)] = (27));

} else {
var statearr_34865_36218 = state_34793__$1;
(statearr_34865_36218[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (34))){
var state_34793__$1 = state_34793;
var statearr_34869_36219 = state_34793__$1;
(statearr_34869_36219[(2)] = null);

(statearr_34869_36219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (17))){
var state_34793__$1 = state_34793;
var statearr_34870_36220 = state_34793__$1;
(statearr_34870_36220[(2)] = null);

(statearr_34870_36220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (3))){
var inst_34791 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34793__$1,inst_34791);
} else {
if((state_val_34794 === (12))){
var inst_34718 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34871_36221 = state_34793__$1;
(statearr_34871_36221[(2)] = inst_34718);

(statearr_34871_36221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (2))){
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34793__$1,(4),ch);
} else {
if((state_val_34794 === (23))){
var state_34793__$1 = state_34793;
var statearr_34872_36222 = state_34793__$1;
(statearr_34872_36222[(2)] = null);

(statearr_34872_36222[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (35))){
var inst_34775 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34873_36223 = state_34793__$1;
(statearr_34873_36223[(2)] = inst_34775);

(statearr_34873_36223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (19))){
var inst_34683 = (state_34793[(7)]);
var inst_34687 = cljs.core.chunk_first(inst_34683);
var inst_34690 = cljs.core.chunk_rest(inst_34683);
var inst_34691 = cljs.core.count(inst_34687);
var inst_34659 = inst_34690;
var inst_34660 = inst_34687;
var inst_34661 = inst_34691;
var inst_34662 = (0);
var state_34793__$1 = (function (){var statearr_34874 = state_34793;
(statearr_34874[(13)] = inst_34659);

(statearr_34874[(14)] = inst_34660);

(statearr_34874[(16)] = inst_34661);

(statearr_34874[(17)] = inst_34662);

return statearr_34874;
})();
var statearr_34875_36225 = state_34793__$1;
(statearr_34875_36225[(2)] = null);

(statearr_34875_36225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (11))){
var inst_34683 = (state_34793[(7)]);
var inst_34659 = (state_34793[(13)]);
var inst_34683__$1 = cljs.core.seq(inst_34659);
var state_34793__$1 = (function (){var statearr_34876 = state_34793;
(statearr_34876[(7)] = inst_34683__$1);

return statearr_34876;
})();
if(inst_34683__$1){
var statearr_34877_36226 = state_34793__$1;
(statearr_34877_36226[(1)] = (16));

} else {
var statearr_34878_36227 = state_34793__$1;
(statearr_34878_36227[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (9))){
var inst_34720 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34879_36229 = state_34793__$1;
(statearr_34879_36229[(2)] = inst_34720);

(statearr_34879_36229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (5))){
var inst_34657 = cljs.core.deref(cs);
var inst_34658 = cljs.core.seq(inst_34657);
var inst_34659 = inst_34658;
var inst_34660 = null;
var inst_34661 = (0);
var inst_34662 = (0);
var state_34793__$1 = (function (){var statearr_34882 = state_34793;
(statearr_34882[(13)] = inst_34659);

(statearr_34882[(14)] = inst_34660);

(statearr_34882[(16)] = inst_34661);

(statearr_34882[(17)] = inst_34662);

return statearr_34882;
})();
var statearr_34883_36233 = state_34793__$1;
(statearr_34883_36233[(2)] = null);

(statearr_34883_36233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (14))){
var state_34793__$1 = state_34793;
var statearr_34884_36234 = state_34793__$1;
(statearr_34884_36234[(2)] = null);

(statearr_34884_36234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (45))){
var inst_34783 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34885_36235 = state_34793__$1;
(statearr_34885_36235[(2)] = inst_34783);

(statearr_34885_36235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (26))){
var inst_34725 = (state_34793[(27)]);
var inst_34779 = (state_34793[(2)]);
var inst_34780 = cljs.core.seq(inst_34725);
var state_34793__$1 = (function (){var statearr_34889 = state_34793;
(statearr_34889[(29)] = inst_34779);

return statearr_34889;
})();
if(inst_34780){
var statearr_34890_36236 = state_34793__$1;
(statearr_34890_36236[(1)] = (42));

} else {
var statearr_34891_36237 = state_34793__$1;
(statearr_34891_36237[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (16))){
var inst_34683 = (state_34793[(7)]);
var inst_34685 = cljs.core.chunked_seq_QMARK_(inst_34683);
var state_34793__$1 = state_34793;
if(inst_34685){
var statearr_34892_36238 = state_34793__$1;
(statearr_34892_36238[(1)] = (19));

} else {
var statearr_34893_36239 = state_34793__$1;
(statearr_34893_36239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (38))){
var inst_34772 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34894_36240 = state_34793__$1;
(statearr_34894_36240[(2)] = inst_34772);

(statearr_34894_36240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (30))){
var state_34793__$1 = state_34793;
var statearr_34895_36241 = state_34793__$1;
(statearr_34895_36241[(2)] = null);

(statearr_34895_36241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (10))){
var inst_34660 = (state_34793[(14)]);
var inst_34662 = (state_34793[(17)]);
var inst_34671 = cljs.core._nth(inst_34660,inst_34662);
var inst_34672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34671,(0),null);
var inst_34673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34671,(1),null);
var state_34793__$1 = (function (){var statearr_34897 = state_34793;
(statearr_34897[(24)] = inst_34672);

return statearr_34897;
})();
if(cljs.core.truth_(inst_34673)){
var statearr_34898_36242 = state_34793__$1;
(statearr_34898_36242[(1)] = (13));

} else {
var statearr_34900_36243 = state_34793__$1;
(statearr_34900_36243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (18))){
var inst_34716 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34901_36244 = state_34793__$1;
(statearr_34901_36244[(2)] = inst_34716);

(statearr_34901_36244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (42))){
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34793__$1,(45),dchan);
} else {
if((state_val_34794 === (37))){
var inst_34753 = (state_34793[(23)]);
var inst_34648 = (state_34793[(11)]);
var inst_34762 = (state_34793[(22)]);
var inst_34762__$1 = cljs.core.first(inst_34753);
var inst_34763 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34762__$1,inst_34648,done);
var state_34793__$1 = (function (){var statearr_34902 = state_34793;
(statearr_34902[(22)] = inst_34762__$1);

return statearr_34902;
})();
if(cljs.core.truth_(inst_34763)){
var statearr_34903_36245 = state_34793__$1;
(statearr_34903_36245[(1)] = (39));

} else {
var statearr_34904_36246 = state_34793__$1;
(statearr_34904_36246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (8))){
var inst_34661 = (state_34793[(16)]);
var inst_34662 = (state_34793[(17)]);
var inst_34665 = (inst_34662 < inst_34661);
var inst_34666 = inst_34665;
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34666)){
var statearr_34905_36247 = state_34793__$1;
(statearr_34905_36247[(1)] = (10));

} else {
var statearr_34906_36248 = state_34793__$1;
(statearr_34906_36248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34034__auto__ = null;
var cljs$core$async$mult_$_state_machine__34034__auto____0 = (function (){
var statearr_34907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34907[(0)] = cljs$core$async$mult_$_state_machine__34034__auto__);

(statearr_34907[(1)] = (1));

return statearr_34907;
});
var cljs$core$async$mult_$_state_machine__34034__auto____1 = (function (state_34793){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_34793);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e34908){var ex__34037__auto__ = e34908;
var statearr_34909_36252 = state_34793;
(statearr_34909_36252[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_34793[(4)]))){
var statearr_34910_36253 = state_34793;
(statearr_34910_36253[(1)] = cljs.core.first((state_34793[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_34793;
state_34793 = G__36254;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34034__auto__ = function(state_34793){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34034__auto____1.call(this,state_34793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34034__auto____0;
cljs$core$async$mult_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34034__auto____1;
return cljs$core$async$mult_$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_34911 = f__34082__auto__();
(statearr_34911[(6)] = c__34081__auto___36158);

return statearr_34911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34913 = arguments.length;
switch (G__34913) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36257 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36257(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36258 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36258(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36259 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36259(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36266 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36266(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36271 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36271(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36272 = arguments.length;
var i__4737__auto___36273 = (0);
while(true){
if((i__4737__auto___36273 < len__4736__auto___36272)){
args__4742__auto__.push((arguments[i__4737__auto___36273]));

var G__36274 = (i__4737__auto___36273 + (1));
i__4737__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34965){
var map__34966 = p__34965;
var map__34966__$1 = (((((!((map__34966 == null))))?(((((map__34966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34966):map__34966);
var opts = map__34966__$1;
var statearr_34969_36275 = state;
(statearr_34969_36275[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34970_36276 = state;
(statearr_34970_36276[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34971_36277 = state;
(statearr_34971_36277[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34936){
var G__34937 = cljs.core.first(seq34936);
var seq34936__$1 = cljs.core.next(seq34936);
var G__34938 = cljs.core.first(seq34936__$1);
var seq34936__$2 = cljs.core.next(seq34936__$1);
var G__34939 = cljs.core.first(seq34936__$2);
var seq34936__$3 = cljs.core.next(seq34936__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34937,G__34938,G__34939,seq34936__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34973 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34974){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34974 = meta34974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34975,meta34974__$1){
var self__ = this;
var _34975__$1 = this;
return (new cljs.core.async.t_cljs$core$async34973(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34974__$1));
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34975){
var self__ = this;
var _34975__$1 = this;
return self__.meta34974;
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34973.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34974","meta34974",-275902988,null)], null);
}));

(cljs.core.async.t_cljs$core$async34973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34973");

(cljs.core.async.t_cljs$core$async34973.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34973.
 */
cljs.core.async.__GT_t_cljs$core$async34973 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34973(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34974){
return (new cljs.core.async.t_cljs$core$async34973(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34974));
});

}

return (new cljs.core.async.t_cljs$core$async34973(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34081__auto___36282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35077){
var state_val_35078 = (state_35077[(1)]);
if((state_val_35078 === (7))){
var inst_34992 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
var statearr_35079_36283 = state_35077__$1;
(statearr_35079_36283[(2)] = inst_34992);

(statearr_35079_36283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (20))){
var inst_35004 = (state_35077[(7)]);
var state_35077__$1 = state_35077;
var statearr_35080_36284 = state_35077__$1;
(statearr_35080_36284[(2)] = inst_35004);

(statearr_35080_36284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (27))){
var state_35077__$1 = state_35077;
var statearr_35081_36285 = state_35077__$1;
(statearr_35081_36285[(2)] = null);

(statearr_35081_36285[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (1))){
var inst_34979 = (state_35077[(8)]);
var inst_34979__$1 = calc_state();
var inst_34981 = (inst_34979__$1 == null);
var inst_34982 = cljs.core.not(inst_34981);
var state_35077__$1 = (function (){var statearr_35082 = state_35077;
(statearr_35082[(8)] = inst_34979__$1);

return statearr_35082;
})();
if(inst_34982){
var statearr_35083_36286 = state_35077__$1;
(statearr_35083_36286[(1)] = (2));

} else {
var statearr_35084_36287 = state_35077__$1;
(statearr_35084_36287[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (24))){
var inst_35037 = (state_35077[(9)]);
var inst_35051 = (state_35077[(10)]);
var inst_35028 = (state_35077[(11)]);
var inst_35051__$1 = (inst_35028.cljs$core$IFn$_invoke$arity$1 ? inst_35028.cljs$core$IFn$_invoke$arity$1(inst_35037) : inst_35028.call(null,inst_35037));
var state_35077__$1 = (function (){var statearr_35085 = state_35077;
(statearr_35085[(10)] = inst_35051__$1);

return statearr_35085;
})();
if(cljs.core.truth_(inst_35051__$1)){
var statearr_35086_36288 = state_35077__$1;
(statearr_35086_36288[(1)] = (29));

} else {
var statearr_35087_36289 = state_35077__$1;
(statearr_35087_36289[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (4))){
var inst_34995 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_34995)){
var statearr_35088_36290 = state_35077__$1;
(statearr_35088_36290[(1)] = (8));

} else {
var statearr_35089_36291 = state_35077__$1;
(statearr_35089_36291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (15))){
var inst_35022 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_35022)){
var statearr_35090_36292 = state_35077__$1;
(statearr_35090_36292[(1)] = (19));

} else {
var statearr_35091_36293 = state_35077__$1;
(statearr_35091_36293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (21))){
var inst_35027 = (state_35077[(12)]);
var inst_35027__$1 = (state_35077[(2)]);
var inst_35028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35027__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35077__$1 = (function (){var statearr_35092 = state_35077;
(statearr_35092[(12)] = inst_35027__$1);

(statearr_35092[(13)] = inst_35029);

(statearr_35092[(11)] = inst_35028);

return statearr_35092;
})();
return cljs.core.async.ioc_alts_BANG_(state_35077__$1,(22),inst_35030);
} else {
if((state_val_35078 === (31))){
var inst_35059 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_35059)){
var statearr_35093_36294 = state_35077__$1;
(statearr_35093_36294[(1)] = (32));

} else {
var statearr_35094_36295 = state_35077__$1;
(statearr_35094_36295[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (32))){
var inst_35036 = (state_35077[(14)]);
var state_35077__$1 = state_35077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35077__$1,(35),out,inst_35036);
} else {
if((state_val_35078 === (33))){
var inst_35027 = (state_35077[(12)]);
var inst_35004 = inst_35027;
var state_35077__$1 = (function (){var statearr_35095 = state_35077;
(statearr_35095[(7)] = inst_35004);

return statearr_35095;
})();
var statearr_35096_36296 = state_35077__$1;
(statearr_35096_36296[(2)] = null);

(statearr_35096_36296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (13))){
var inst_35004 = (state_35077[(7)]);
var inst_35011 = inst_35004.cljs$lang$protocol_mask$partition0$;
var inst_35012 = (inst_35011 & (64));
var inst_35013 = inst_35004.cljs$core$ISeq$;
var inst_35014 = (cljs.core.PROTOCOL_SENTINEL === inst_35013);
var inst_35015 = ((inst_35012) || (inst_35014));
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_35015)){
var statearr_35097_36301 = state_35077__$1;
(statearr_35097_36301[(1)] = (16));

} else {
var statearr_35098_36302 = state_35077__$1;
(statearr_35098_36302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (22))){
var inst_35037 = (state_35077[(9)]);
var inst_35036 = (state_35077[(14)]);
var inst_35035 = (state_35077[(2)]);
var inst_35036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35035,(0),null);
var inst_35037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35035,(1),null);
var inst_35038 = (inst_35036__$1 == null);
var inst_35039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35037__$1,change);
var inst_35040 = ((inst_35038) || (inst_35039));
var state_35077__$1 = (function (){var statearr_35099 = state_35077;
(statearr_35099[(9)] = inst_35037__$1);

(statearr_35099[(14)] = inst_35036__$1);

return statearr_35099;
})();
if(cljs.core.truth_(inst_35040)){
var statearr_35100_36304 = state_35077__$1;
(statearr_35100_36304[(1)] = (23));

} else {
var statearr_35101_36308 = state_35077__$1;
(statearr_35101_36308[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (36))){
var inst_35027 = (state_35077[(12)]);
var inst_35004 = inst_35027;
var state_35077__$1 = (function (){var statearr_35102 = state_35077;
(statearr_35102[(7)] = inst_35004);

return statearr_35102;
})();
var statearr_35103_36309 = state_35077__$1;
(statearr_35103_36309[(2)] = null);

(statearr_35103_36309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (29))){
var inst_35051 = (state_35077[(10)]);
var state_35077__$1 = state_35077;
var statearr_35104_36310 = state_35077__$1;
(statearr_35104_36310[(2)] = inst_35051);

(statearr_35104_36310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (6))){
var state_35077__$1 = state_35077;
var statearr_35105_36311 = state_35077__$1;
(statearr_35105_36311[(2)] = false);

(statearr_35105_36311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (28))){
var inst_35047 = (state_35077[(2)]);
var inst_35048 = calc_state();
var inst_35004 = inst_35048;
var state_35077__$1 = (function (){var statearr_35106 = state_35077;
(statearr_35106[(15)] = inst_35047);

(statearr_35106[(7)] = inst_35004);

return statearr_35106;
})();
var statearr_35107_36314 = state_35077__$1;
(statearr_35107_36314[(2)] = null);

(statearr_35107_36314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (25))){
var inst_35073 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
var statearr_35108_36315 = state_35077__$1;
(statearr_35108_36315[(2)] = inst_35073);

(statearr_35108_36315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (34))){
var inst_35071 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
var statearr_35109_36316 = state_35077__$1;
(statearr_35109_36316[(2)] = inst_35071);

(statearr_35109_36316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (17))){
var state_35077__$1 = state_35077;
var statearr_35110_36317 = state_35077__$1;
(statearr_35110_36317[(2)] = false);

(statearr_35110_36317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (3))){
var state_35077__$1 = state_35077;
var statearr_35111_36318 = state_35077__$1;
(statearr_35111_36318[(2)] = false);

(statearr_35111_36318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (12))){
var inst_35075 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35077__$1,inst_35075);
} else {
if((state_val_35078 === (2))){
var inst_34979 = (state_35077[(8)]);
var inst_34984 = inst_34979.cljs$lang$protocol_mask$partition0$;
var inst_34985 = (inst_34984 & (64));
var inst_34986 = inst_34979.cljs$core$ISeq$;
var inst_34987 = (cljs.core.PROTOCOL_SENTINEL === inst_34986);
var inst_34988 = ((inst_34985) || (inst_34987));
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_34988)){
var statearr_35112_36319 = state_35077__$1;
(statearr_35112_36319[(1)] = (5));

} else {
var statearr_35113_36320 = state_35077__$1;
(statearr_35113_36320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (23))){
var inst_35036 = (state_35077[(14)]);
var inst_35042 = (inst_35036 == null);
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_35042)){
var statearr_35114_36321 = state_35077__$1;
(statearr_35114_36321[(1)] = (26));

} else {
var statearr_35115_36322 = state_35077__$1;
(statearr_35115_36322[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (35))){
var inst_35062 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
if(cljs.core.truth_(inst_35062)){
var statearr_35116_36323 = state_35077__$1;
(statearr_35116_36323[(1)] = (36));

} else {
var statearr_35117_36324 = state_35077__$1;
(statearr_35117_36324[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (19))){
var inst_35004 = (state_35077[(7)]);
var inst_35024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35004);
var state_35077__$1 = state_35077;
var statearr_35118_36325 = state_35077__$1;
(statearr_35118_36325[(2)] = inst_35024);

(statearr_35118_36325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (11))){
var inst_35004 = (state_35077[(7)]);
var inst_35008 = (inst_35004 == null);
var inst_35009 = cljs.core.not(inst_35008);
var state_35077__$1 = state_35077;
if(inst_35009){
var statearr_35119_36326 = state_35077__$1;
(statearr_35119_36326[(1)] = (13));

} else {
var statearr_35120_36327 = state_35077__$1;
(statearr_35120_36327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (9))){
var inst_34979 = (state_35077[(8)]);
var state_35077__$1 = state_35077;
var statearr_35121_36328 = state_35077__$1;
(statearr_35121_36328[(2)] = inst_34979);

(statearr_35121_36328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (5))){
var state_35077__$1 = state_35077;
var statearr_35122_36329 = state_35077__$1;
(statearr_35122_36329[(2)] = true);

(statearr_35122_36329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (14))){
var state_35077__$1 = state_35077;
var statearr_35123_36330 = state_35077__$1;
(statearr_35123_36330[(2)] = false);

(statearr_35123_36330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (26))){
var inst_35037 = (state_35077[(9)]);
var inst_35044 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35037);
var state_35077__$1 = state_35077;
var statearr_35124_36331 = state_35077__$1;
(statearr_35124_36331[(2)] = inst_35044);

(statearr_35124_36331[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (16))){
var state_35077__$1 = state_35077;
var statearr_35125_36332 = state_35077__$1;
(statearr_35125_36332[(2)] = true);

(statearr_35125_36332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (38))){
var inst_35067 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
var statearr_35126_36333 = state_35077__$1;
(statearr_35126_36333[(2)] = inst_35067);

(statearr_35126_36333[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (30))){
var inst_35037 = (state_35077[(9)]);
var inst_35029 = (state_35077[(13)]);
var inst_35028 = (state_35077[(11)]);
var inst_35054 = cljs.core.empty_QMARK_(inst_35028);
var inst_35055 = (inst_35029.cljs$core$IFn$_invoke$arity$1 ? inst_35029.cljs$core$IFn$_invoke$arity$1(inst_35037) : inst_35029.call(null,inst_35037));
var inst_35056 = cljs.core.not(inst_35055);
var inst_35057 = ((inst_35054) && (inst_35056));
var state_35077__$1 = state_35077;
var statearr_35127_36334 = state_35077__$1;
(statearr_35127_36334[(2)] = inst_35057);

(statearr_35127_36334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (10))){
var inst_34979 = (state_35077[(8)]);
var inst_35000 = (state_35077[(2)]);
var inst_35001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35000,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35004 = inst_34979;
var state_35077__$1 = (function (){var statearr_35128 = state_35077;
(statearr_35128[(7)] = inst_35004);

(statearr_35128[(16)] = inst_35003);

(statearr_35128[(17)] = inst_35002);

(statearr_35128[(18)] = inst_35001);

return statearr_35128;
})();
var statearr_35129_36335 = state_35077__$1;
(statearr_35129_36335[(2)] = null);

(statearr_35129_36335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (18))){
var inst_35019 = (state_35077[(2)]);
var state_35077__$1 = state_35077;
var statearr_35130_36336 = state_35077__$1;
(statearr_35130_36336[(2)] = inst_35019);

(statearr_35130_36336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (37))){
var state_35077__$1 = state_35077;
var statearr_35131_36337 = state_35077__$1;
(statearr_35131_36337[(2)] = null);

(statearr_35131_36337[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35078 === (8))){
var inst_34979 = (state_35077[(8)]);
var inst_34997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34979);
var state_35077__$1 = state_35077;
var statearr_35132_36338 = state_35077__$1;
(statearr_35132_36338[(2)] = inst_34997);

(statearr_35132_36338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34034__auto__ = null;
var cljs$core$async$mix_$_state_machine__34034__auto____0 = (function (){
var statearr_35133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35133[(0)] = cljs$core$async$mix_$_state_machine__34034__auto__);

(statearr_35133[(1)] = (1));

return statearr_35133;
});
var cljs$core$async$mix_$_state_machine__34034__auto____1 = (function (state_35077){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35077);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35134){var ex__34037__auto__ = e35134;
var statearr_35135_36339 = state_35077;
(statearr_35135_36339[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35077[(4)]))){
var statearr_35136_36340 = state_35077;
(statearr_35136_36340[(1)] = cljs.core.first((state_35077[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36341 = state_35077;
state_35077 = G__36341;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34034__auto__ = function(state_35077){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34034__auto____1.call(this,state_35077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34034__auto____0;
cljs$core$async$mix_$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34034__auto____1;
return cljs$core$async$mix_$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35139 = f__34082__auto__();
(statearr_35139[(6)] = c__34081__auto___36282);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36349 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36349(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36353 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36353(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36360 = (function() {
var G__36361 = null;
var G__36361__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36361__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36361 = function(p,v){
switch(arguments.length){
case 1:
return G__36361__1.call(this,p);
case 2:
return G__36361__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36361.cljs$core$IFn$_invoke$arity$1 = G__36361__1;
G__36361.cljs$core$IFn$_invoke$arity$2 = G__36361__2;
return G__36361;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35177 = arguments.length;
switch (G__35177) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36360(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36360(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35189 = arguments.length;
switch (G__35189) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35187_SHARP_){
if(cljs.core.truth_((p1__35187_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35187_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35187_SHARP_.call(null,topic)))){
return p1__35187_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35187_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35191 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35192){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35192 = meta35192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35193,meta35192__$1){
var self__ = this;
var _35193__$1 = this;
return (new cljs.core.async.t_cljs$core$async35191(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35192__$1));
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35193){
var self__ = this;
var _35193__$1 = this;
return self__.meta35192;
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35192","meta35192",-1174927231,null)], null);
}));

(cljs.core.async.t_cljs$core$async35191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35191");

(cljs.core.async.t_cljs$core$async35191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35191.
 */
cljs.core.async.__GT_t_cljs$core$async35191 = (function cljs$core$async$__GT_t_cljs$core$async35191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35192){
return (new cljs.core.async.t_cljs$core$async35191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35192));
});

}

return (new cljs.core.async.t_cljs$core$async35191(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34081__auto___36389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35274){
var state_val_35275 = (state_35274[(1)]);
if((state_val_35275 === (7))){
var inst_35270 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35276_36390 = state_35274__$1;
(statearr_35276_36390[(2)] = inst_35270);

(statearr_35276_36390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (20))){
var state_35274__$1 = state_35274;
var statearr_35277_36391 = state_35274__$1;
(statearr_35277_36391[(2)] = null);

(statearr_35277_36391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (1))){
var state_35274__$1 = state_35274;
var statearr_35282_36392 = state_35274__$1;
(statearr_35282_36392[(2)] = null);

(statearr_35282_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (24))){
var inst_35253 = (state_35274[(7)]);
var inst_35262 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35253);
var state_35274__$1 = state_35274;
var statearr_35283_36393 = state_35274__$1;
(statearr_35283_36393[(2)] = inst_35262);

(statearr_35283_36393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (4))){
var inst_35205 = (state_35274[(8)]);
var inst_35205__$1 = (state_35274[(2)]);
var inst_35206 = (inst_35205__$1 == null);
var state_35274__$1 = (function (){var statearr_35284 = state_35274;
(statearr_35284[(8)] = inst_35205__$1);

return statearr_35284;
})();
if(cljs.core.truth_(inst_35206)){
var statearr_35285_36394 = state_35274__$1;
(statearr_35285_36394[(1)] = (5));

} else {
var statearr_35286_36395 = state_35274__$1;
(statearr_35286_36395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (15))){
var inst_35247 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35288_36396 = state_35274__$1;
(statearr_35288_36396[(2)] = inst_35247);

(statearr_35288_36396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (21))){
var inst_35267 = (state_35274[(2)]);
var state_35274__$1 = (function (){var statearr_35290 = state_35274;
(statearr_35290[(9)] = inst_35267);

return statearr_35290;
})();
var statearr_35291_36403 = state_35274__$1;
(statearr_35291_36403[(2)] = null);

(statearr_35291_36403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (13))){
var inst_35229 = (state_35274[(10)]);
var inst_35231 = cljs.core.chunked_seq_QMARK_(inst_35229);
var state_35274__$1 = state_35274;
if(inst_35231){
var statearr_35292_36404 = state_35274__$1;
(statearr_35292_36404[(1)] = (16));

} else {
var statearr_35294_36405 = state_35274__$1;
(statearr_35294_36405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (22))){
var inst_35259 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
if(cljs.core.truth_(inst_35259)){
var statearr_35295_36406 = state_35274__$1;
(statearr_35295_36406[(1)] = (23));

} else {
var statearr_35296_36407 = state_35274__$1;
(statearr_35296_36407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (6))){
var inst_35255 = (state_35274[(11)]);
var inst_35253 = (state_35274[(7)]);
var inst_35205 = (state_35274[(8)]);
var inst_35253__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35205) : topic_fn.call(null,inst_35205));
var inst_35254 = cljs.core.deref(mults);
var inst_35255__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35254,inst_35253__$1);
var state_35274__$1 = (function (){var statearr_35297 = state_35274;
(statearr_35297[(11)] = inst_35255__$1);

(statearr_35297[(7)] = inst_35253__$1);

return statearr_35297;
})();
if(cljs.core.truth_(inst_35255__$1)){
var statearr_35298_36408 = state_35274__$1;
(statearr_35298_36408[(1)] = (19));

} else {
var statearr_35299_36409 = state_35274__$1;
(statearr_35299_36409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (25))){
var inst_35264 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35300_36410 = state_35274__$1;
(statearr_35300_36410[(2)] = inst_35264);

(statearr_35300_36410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (17))){
var inst_35229 = (state_35274[(10)]);
var inst_35238 = cljs.core.first(inst_35229);
var inst_35239 = cljs.core.async.muxch_STAR_(inst_35238);
var inst_35240 = cljs.core.async.close_BANG_(inst_35239);
var inst_35241 = cljs.core.next(inst_35229);
var inst_35215 = inst_35241;
var inst_35216 = null;
var inst_35217 = (0);
var inst_35218 = (0);
var state_35274__$1 = (function (){var statearr_35301 = state_35274;
(statearr_35301[(12)] = inst_35217);

(statearr_35301[(13)] = inst_35215);

(statearr_35301[(14)] = inst_35218);

(statearr_35301[(15)] = inst_35216);

(statearr_35301[(16)] = inst_35240);

return statearr_35301;
})();
var statearr_35302_36411 = state_35274__$1;
(statearr_35302_36411[(2)] = null);

(statearr_35302_36411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (3))){
var inst_35272 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35274__$1,inst_35272);
} else {
if((state_val_35275 === (12))){
var inst_35249 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35304_36412 = state_35274__$1;
(statearr_35304_36412[(2)] = inst_35249);

(statearr_35304_36412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (2))){
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35274__$1,(4),ch);
} else {
if((state_val_35275 === (23))){
var state_35274__$1 = state_35274;
var statearr_35305_36413 = state_35274__$1;
(statearr_35305_36413[(2)] = null);

(statearr_35305_36413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (19))){
var inst_35255 = (state_35274[(11)]);
var inst_35205 = (state_35274[(8)]);
var inst_35257 = cljs.core.async.muxch_STAR_(inst_35255);
var state_35274__$1 = state_35274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35274__$1,(22),inst_35257,inst_35205);
} else {
if((state_val_35275 === (11))){
var inst_35215 = (state_35274[(13)]);
var inst_35229 = (state_35274[(10)]);
var inst_35229__$1 = cljs.core.seq(inst_35215);
var state_35274__$1 = (function (){var statearr_35309 = state_35274;
(statearr_35309[(10)] = inst_35229__$1);

return statearr_35309;
})();
if(inst_35229__$1){
var statearr_35310_36420 = state_35274__$1;
(statearr_35310_36420[(1)] = (13));

} else {
var statearr_35311_36421 = state_35274__$1;
(statearr_35311_36421[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (9))){
var inst_35251 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35312_36422 = state_35274__$1;
(statearr_35312_36422[(2)] = inst_35251);

(statearr_35312_36422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (5))){
var inst_35212 = cljs.core.deref(mults);
var inst_35213 = cljs.core.vals(inst_35212);
var inst_35214 = cljs.core.seq(inst_35213);
var inst_35215 = inst_35214;
var inst_35216 = null;
var inst_35217 = (0);
var inst_35218 = (0);
var state_35274__$1 = (function (){var statearr_35313 = state_35274;
(statearr_35313[(12)] = inst_35217);

(statearr_35313[(13)] = inst_35215);

(statearr_35313[(14)] = inst_35218);

(statearr_35313[(15)] = inst_35216);

return statearr_35313;
})();
var statearr_35314_36423 = state_35274__$1;
(statearr_35314_36423[(2)] = null);

(statearr_35314_36423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (14))){
var state_35274__$1 = state_35274;
var statearr_35318_36424 = state_35274__$1;
(statearr_35318_36424[(2)] = null);

(statearr_35318_36424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (16))){
var inst_35229 = (state_35274[(10)]);
var inst_35233 = cljs.core.chunk_first(inst_35229);
var inst_35234 = cljs.core.chunk_rest(inst_35229);
var inst_35235 = cljs.core.count(inst_35233);
var inst_35215 = inst_35234;
var inst_35216 = inst_35233;
var inst_35217 = inst_35235;
var inst_35218 = (0);
var state_35274__$1 = (function (){var statearr_35319 = state_35274;
(statearr_35319[(12)] = inst_35217);

(statearr_35319[(13)] = inst_35215);

(statearr_35319[(14)] = inst_35218);

(statearr_35319[(15)] = inst_35216);

return statearr_35319;
})();
var statearr_35320_36425 = state_35274__$1;
(statearr_35320_36425[(2)] = null);

(statearr_35320_36425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (10))){
var inst_35217 = (state_35274[(12)]);
var inst_35215 = (state_35274[(13)]);
var inst_35218 = (state_35274[(14)]);
var inst_35216 = (state_35274[(15)]);
var inst_35223 = cljs.core._nth(inst_35216,inst_35218);
var inst_35224 = cljs.core.async.muxch_STAR_(inst_35223);
var inst_35225 = cljs.core.async.close_BANG_(inst_35224);
var inst_35226 = (inst_35218 + (1));
var tmp35315 = inst_35217;
var tmp35316 = inst_35215;
var tmp35317 = inst_35216;
var inst_35215__$1 = tmp35316;
var inst_35216__$1 = tmp35317;
var inst_35217__$1 = tmp35315;
var inst_35218__$1 = inst_35226;
var state_35274__$1 = (function (){var statearr_35321 = state_35274;
(statearr_35321[(12)] = inst_35217__$1);

(statearr_35321[(13)] = inst_35215__$1);

(statearr_35321[(14)] = inst_35218__$1);

(statearr_35321[(17)] = inst_35225);

(statearr_35321[(15)] = inst_35216__$1);

return statearr_35321;
})();
var statearr_35322_36426 = state_35274__$1;
(statearr_35322_36426[(2)] = null);

(statearr_35322_36426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (18))){
var inst_35244 = (state_35274[(2)]);
var state_35274__$1 = state_35274;
var statearr_35323_36427 = state_35274__$1;
(statearr_35323_36427[(2)] = inst_35244);

(statearr_35323_36427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35275 === (8))){
var inst_35217 = (state_35274[(12)]);
var inst_35218 = (state_35274[(14)]);
var inst_35220 = (inst_35218 < inst_35217);
var inst_35221 = inst_35220;
var state_35274__$1 = state_35274;
if(cljs.core.truth_(inst_35221)){
var statearr_35324_36428 = state_35274__$1;
(statearr_35324_36428[(1)] = (10));

} else {
var statearr_35325_36429 = state_35274__$1;
(statearr_35325_36429[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35326[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35326[(1)] = (1));

return statearr_35326;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35274){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35274);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35327){var ex__34037__auto__ = e35327;
var statearr_35328_36432 = state_35274;
(statearr_35328_36432[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35274[(4)]))){
var statearr_35329_36433 = state_35274;
(statearr_35329_36433[(1)] = cljs.core.first((state_35274[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36434 = state_35274;
state_35274 = G__36434;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35330 = f__34082__auto__();
(statearr_35330[(6)] = c__34081__auto___36389);

return statearr_35330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35332 = arguments.length;
switch (G__35332) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35334 = arguments.length;
switch (G__35334) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35336 = arguments.length;
switch (G__35336) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34081__auto___36447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35379){
var state_val_35380 = (state_35379[(1)]);
if((state_val_35380 === (7))){
var state_35379__$1 = state_35379;
var statearr_35381_36449 = state_35379__$1;
(statearr_35381_36449[(2)] = null);

(statearr_35381_36449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (1))){
var state_35379__$1 = state_35379;
var statearr_35382_36452 = state_35379__$1;
(statearr_35382_36452[(2)] = null);

(statearr_35382_36452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (4))){
var inst_35340 = (state_35379[(7)]);
var inst_35339 = (state_35379[(8)]);
var inst_35342 = (inst_35340 < inst_35339);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35342)){
var statearr_35383_36454 = state_35379__$1;
(statearr_35383_36454[(1)] = (6));

} else {
var statearr_35384_36455 = state_35379__$1;
(statearr_35384_36455[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (15))){
var inst_35365 = (state_35379[(9)]);
var inst_35370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35365);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35379__$1,(17),out,inst_35370);
} else {
if((state_val_35380 === (13))){
var inst_35365 = (state_35379[(9)]);
var inst_35365__$1 = (state_35379[(2)]);
var inst_35366 = cljs.core.some(cljs.core.nil_QMARK_,inst_35365__$1);
var state_35379__$1 = (function (){var statearr_35385 = state_35379;
(statearr_35385[(9)] = inst_35365__$1);

return statearr_35385;
})();
if(cljs.core.truth_(inst_35366)){
var statearr_35386_36457 = state_35379__$1;
(statearr_35386_36457[(1)] = (14));

} else {
var statearr_35387_36458 = state_35379__$1;
(statearr_35387_36458[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (6))){
var state_35379__$1 = state_35379;
var statearr_35388_36459 = state_35379__$1;
(statearr_35388_36459[(2)] = null);

(statearr_35388_36459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (17))){
var inst_35372 = (state_35379[(2)]);
var state_35379__$1 = (function (){var statearr_35390 = state_35379;
(statearr_35390[(10)] = inst_35372);

return statearr_35390;
})();
var statearr_35391_36460 = state_35379__$1;
(statearr_35391_36460[(2)] = null);

(statearr_35391_36460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (3))){
var inst_35377 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35379__$1,inst_35377);
} else {
if((state_val_35380 === (12))){
var _ = (function (){var statearr_35392 = state_35379;
(statearr_35392[(4)] = cljs.core.rest((state_35379[(4)])));

return statearr_35392;
})();
var state_35379__$1 = state_35379;
var ex35389 = (state_35379__$1[(2)]);
var statearr_35393_36461 = state_35379__$1;
(statearr_35393_36461[(5)] = ex35389);


if((ex35389 instanceof Object)){
var statearr_35394_36462 = state_35379__$1;
(statearr_35394_36462[(1)] = (11));

(statearr_35394_36462[(5)] = null);

} else {
throw ex35389;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (2))){
var inst_35338 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35339 = cnt;
var inst_35340 = (0);
var state_35379__$1 = (function (){var statearr_35395 = state_35379;
(statearr_35395[(7)] = inst_35340);

(statearr_35395[(8)] = inst_35339);

(statearr_35395[(11)] = inst_35338);

return statearr_35395;
})();
var statearr_35396_36463 = state_35379__$1;
(statearr_35396_36463[(2)] = null);

(statearr_35396_36463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (11))){
var inst_35344 = (state_35379[(2)]);
var inst_35345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35379__$1 = (function (){var statearr_35397 = state_35379;
(statearr_35397[(12)] = inst_35344);

return statearr_35397;
})();
var statearr_35398_36464 = state_35379__$1;
(statearr_35398_36464[(2)] = inst_35345);

(statearr_35398_36464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (9))){
var inst_35340 = (state_35379[(7)]);
var _ = (function (){var statearr_35399 = state_35379;
(statearr_35399[(4)] = cljs.core.cons((12),(state_35379[(4)])));

return statearr_35399;
})();
var inst_35351 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35340) : chs__$1.call(null,inst_35340));
var inst_35352 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35340) : done.call(null,inst_35340));
var inst_35353 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35351,inst_35352);
var ___$1 = (function (){var statearr_35400 = state_35379;
(statearr_35400[(4)] = cljs.core.rest((state_35379[(4)])));

return statearr_35400;
})();
var state_35379__$1 = state_35379;
var statearr_35401_36467 = state_35379__$1;
(statearr_35401_36467[(2)] = inst_35353);

(statearr_35401_36467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (5))){
var inst_35363 = (state_35379[(2)]);
var state_35379__$1 = (function (){var statearr_35402 = state_35379;
(statearr_35402[(13)] = inst_35363);

return statearr_35402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35379__$1,(13),dchan);
} else {
if((state_val_35380 === (14))){
var inst_35368 = cljs.core.async.close_BANG_(out);
var state_35379__$1 = state_35379;
var statearr_35403_36468 = state_35379__$1;
(statearr_35403_36468[(2)] = inst_35368);

(statearr_35403_36468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (16))){
var inst_35375 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35404_36469 = state_35379__$1;
(statearr_35404_36469[(2)] = inst_35375);

(statearr_35404_36469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (10))){
var inst_35340 = (state_35379[(7)]);
var inst_35356 = (state_35379[(2)]);
var inst_35357 = (inst_35340 + (1));
var inst_35340__$1 = inst_35357;
var state_35379__$1 = (function (){var statearr_35405 = state_35379;
(statearr_35405[(14)] = inst_35356);

(statearr_35405[(7)] = inst_35340__$1);

return statearr_35405;
})();
var statearr_35406_36470 = state_35379__$1;
(statearr_35406_36470[(2)] = null);

(statearr_35406_36470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (8))){
var inst_35361 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35407_36471 = state_35379__$1;
(statearr_35407_36471[(2)] = inst_35361);

(statearr_35407_36471[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35408[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35408[(1)] = (1));

return statearr_35408;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35379){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35379);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35409){var ex__34037__auto__ = e35409;
var statearr_35410_36472 = state_35379;
(statearr_35410_36472[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35379[(4)]))){
var statearr_35411_36473 = state_35379;
(statearr_35411_36473[(1)] = cljs.core.first((state_35379[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36474 = state_35379;
state_35379 = G__36474;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35412 = f__34082__auto__();
(statearr_35412[(6)] = c__34081__auto___36447);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35415 = arguments.length;
switch (G__35415) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___36478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35447){
var state_val_35448 = (state_35447[(1)]);
if((state_val_35448 === (7))){
var inst_35426 = (state_35447[(7)]);
var inst_35427 = (state_35447[(8)]);
var inst_35426__$1 = (state_35447[(2)]);
var inst_35427__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35426__$1,(0),null);
var inst_35428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35426__$1,(1),null);
var inst_35429 = (inst_35427__$1 == null);
var state_35447__$1 = (function (){var statearr_35449 = state_35447;
(statearr_35449[(9)] = inst_35428);

(statearr_35449[(7)] = inst_35426__$1);

(statearr_35449[(8)] = inst_35427__$1);

return statearr_35449;
})();
if(cljs.core.truth_(inst_35429)){
var statearr_35450_36480 = state_35447__$1;
(statearr_35450_36480[(1)] = (8));

} else {
var statearr_35451_36481 = state_35447__$1;
(statearr_35451_36481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (1))){
var inst_35416 = cljs.core.vec(chs);
var inst_35417 = inst_35416;
var state_35447__$1 = (function (){var statearr_35452 = state_35447;
(statearr_35452[(10)] = inst_35417);

return statearr_35452;
})();
var statearr_35453_36483 = state_35447__$1;
(statearr_35453_36483[(2)] = null);

(statearr_35453_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (4))){
var inst_35417 = (state_35447[(10)]);
var state_35447__$1 = state_35447;
return cljs.core.async.ioc_alts_BANG_(state_35447__$1,(7),inst_35417);
} else {
if((state_val_35448 === (6))){
var inst_35443 = (state_35447[(2)]);
var state_35447__$1 = state_35447;
var statearr_35454_36484 = state_35447__$1;
(statearr_35454_36484[(2)] = inst_35443);

(statearr_35454_36484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (3))){
var inst_35445 = (state_35447[(2)]);
var state_35447__$1 = state_35447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35447__$1,inst_35445);
} else {
if((state_val_35448 === (2))){
var inst_35417 = (state_35447[(10)]);
var inst_35419 = cljs.core.count(inst_35417);
var inst_35420 = (inst_35419 > (0));
var state_35447__$1 = state_35447;
if(cljs.core.truth_(inst_35420)){
var statearr_35456_36486 = state_35447__$1;
(statearr_35456_36486[(1)] = (4));

} else {
var statearr_35457_36487 = state_35447__$1;
(statearr_35457_36487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (11))){
var inst_35417 = (state_35447[(10)]);
var inst_35436 = (state_35447[(2)]);
var tmp35455 = inst_35417;
var inst_35417__$1 = tmp35455;
var state_35447__$1 = (function (){var statearr_35458 = state_35447;
(statearr_35458[(11)] = inst_35436);

(statearr_35458[(10)] = inst_35417__$1);

return statearr_35458;
})();
var statearr_35459_36488 = state_35447__$1;
(statearr_35459_36488[(2)] = null);

(statearr_35459_36488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (9))){
var inst_35427 = (state_35447[(8)]);
var state_35447__$1 = state_35447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35447__$1,(11),out,inst_35427);
} else {
if((state_val_35448 === (5))){
var inst_35441 = cljs.core.async.close_BANG_(out);
var state_35447__$1 = state_35447;
var statearr_35460_36490 = state_35447__$1;
(statearr_35460_36490[(2)] = inst_35441);

(statearr_35460_36490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (10))){
var inst_35439 = (state_35447[(2)]);
var state_35447__$1 = state_35447;
var statearr_35461_36491 = state_35447__$1;
(statearr_35461_36491[(2)] = inst_35439);

(statearr_35461_36491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35448 === (8))){
var inst_35428 = (state_35447[(9)]);
var inst_35426 = (state_35447[(7)]);
var inst_35427 = (state_35447[(8)]);
var inst_35417 = (state_35447[(10)]);
var inst_35431 = (function (){var cs = inst_35417;
var vec__35422 = inst_35426;
var v = inst_35427;
var c = inst_35428;
return (function (p1__35413_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35413_SHARP_);
});
})();
var inst_35432 = cljs.core.filterv(inst_35431,inst_35417);
var inst_35417__$1 = inst_35432;
var state_35447__$1 = (function (){var statearr_35462 = state_35447;
(statearr_35462[(10)] = inst_35417__$1);

return statearr_35462;
})();
var statearr_35463_36494 = state_35447__$1;
(statearr_35463_36494[(2)] = null);

(statearr_35463_36494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35464[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35464[(1)] = (1));

return statearr_35464;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35447){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35447);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35465){var ex__34037__auto__ = e35465;
var statearr_35466_36496 = state_35447;
(statearr_35466_36496[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35447[(4)]))){
var statearr_35467_36497 = state_35447;
(statearr_35467_36497[(1)] = cljs.core.first((state_35447[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36502 = state_35447;
state_35447 = G__36502;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35468 = f__34082__auto__();
(statearr_35468[(6)] = c__34081__auto___36478);

return statearr_35468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35470 = arguments.length;
switch (G__35470) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___36514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35494){
var state_val_35495 = (state_35494[(1)]);
if((state_val_35495 === (7))){
var inst_35476 = (state_35494[(7)]);
var inst_35476__$1 = (state_35494[(2)]);
var inst_35477 = (inst_35476__$1 == null);
var inst_35478 = cljs.core.not(inst_35477);
var state_35494__$1 = (function (){var statearr_35496 = state_35494;
(statearr_35496[(7)] = inst_35476__$1);

return statearr_35496;
})();
if(inst_35478){
var statearr_35497_36515 = state_35494__$1;
(statearr_35497_36515[(1)] = (8));

} else {
var statearr_35498_36516 = state_35494__$1;
(statearr_35498_36516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (1))){
var inst_35471 = (0);
var state_35494__$1 = (function (){var statearr_35499 = state_35494;
(statearr_35499[(8)] = inst_35471);

return statearr_35499;
})();
var statearr_35500_36517 = state_35494__$1;
(statearr_35500_36517[(2)] = null);

(statearr_35500_36517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (4))){
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35494__$1,(7),ch);
} else {
if((state_val_35495 === (6))){
var inst_35489 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35501_36522 = state_35494__$1;
(statearr_35501_36522[(2)] = inst_35489);

(statearr_35501_36522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (3))){
var inst_35491 = (state_35494[(2)]);
var inst_35492 = cljs.core.async.close_BANG_(out);
var state_35494__$1 = (function (){var statearr_35502 = state_35494;
(statearr_35502[(9)] = inst_35491);

return statearr_35502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35494__$1,inst_35492);
} else {
if((state_val_35495 === (2))){
var inst_35471 = (state_35494[(8)]);
var inst_35473 = (inst_35471 < n);
var state_35494__$1 = state_35494;
if(cljs.core.truth_(inst_35473)){
var statearr_35503_36529 = state_35494__$1;
(statearr_35503_36529[(1)] = (4));

} else {
var statearr_35504_36530 = state_35494__$1;
(statearr_35504_36530[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (11))){
var inst_35471 = (state_35494[(8)]);
var inst_35481 = (state_35494[(2)]);
var inst_35482 = (inst_35471 + (1));
var inst_35471__$1 = inst_35482;
var state_35494__$1 = (function (){var statearr_35505 = state_35494;
(statearr_35505[(10)] = inst_35481);

(statearr_35505[(8)] = inst_35471__$1);

return statearr_35505;
})();
var statearr_35506_36549 = state_35494__$1;
(statearr_35506_36549[(2)] = null);

(statearr_35506_36549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (9))){
var state_35494__$1 = state_35494;
var statearr_35507_36552 = state_35494__$1;
(statearr_35507_36552[(2)] = null);

(statearr_35507_36552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (5))){
var state_35494__$1 = state_35494;
var statearr_35508_36554 = state_35494__$1;
(statearr_35508_36554[(2)] = null);

(statearr_35508_36554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (10))){
var inst_35486 = (state_35494[(2)]);
var state_35494__$1 = state_35494;
var statearr_35509_36555 = state_35494__$1;
(statearr_35509_36555[(2)] = inst_35486);

(statearr_35509_36555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35495 === (8))){
var inst_35476 = (state_35494[(7)]);
var state_35494__$1 = state_35494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35494__$1,(11),out,inst_35476);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35510[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35510[(1)] = (1));

return statearr_35510;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35494){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35494);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35511){var ex__34037__auto__ = e35511;
var statearr_35512_36562 = state_35494;
(statearr_35512_36562[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35494[(4)]))){
var statearr_35513_36565 = state_35494;
(statearr_35513_36565[(1)] = cljs.core.first((state_35494[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36566 = state_35494;
state_35494 = G__36566;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35514 = f__34082__auto__();
(statearr_35514[(6)] = c__34081__auto___36514);

return statearr_35514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35516 = (function (f,ch,meta35517){
this.f = f;
this.ch = ch;
this.meta35517 = meta35517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35518,meta35517__$1){
var self__ = this;
var _35518__$1 = this;
return (new cljs.core.async.t_cljs$core$async35516(self__.f,self__.ch,meta35517__$1));
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35518){
var self__ = this;
var _35518__$1 = this;
return self__.meta35517;
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35519 = (function (f,ch,meta35517,_,fn1,meta35520){
this.f = f;
this.ch = ch;
this.meta35517 = meta35517;
this._ = _;
this.fn1 = fn1;
this.meta35520 = meta35520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35521,meta35520__$1){
var self__ = this;
var _35521__$1 = this;
return (new cljs.core.async.t_cljs$core$async35519(self__.f,self__.ch,self__.meta35517,self__._,self__.fn1,meta35520__$1));
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35521){
var self__ = this;
var _35521__$1 = this;
return self__.meta35520;
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35515_SHARP_){
var G__35522 = (((p1__35515_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35515_SHARP_) : self__.f.call(null,p1__35515_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35522) : f1.call(null,G__35522));
});
}));

(cljs.core.async.t_cljs$core$async35519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35517","meta35517",-1695711147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35516","cljs.core.async/t_cljs$core$async35516",-1707207066,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35520","meta35520",460302218,null)], null);
}));

(cljs.core.async.t_cljs$core$async35519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35519");

(cljs.core.async.t_cljs$core$async35519.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35519.
 */
cljs.core.async.__GT_t_cljs$core$async35519 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35519(f__$1,ch__$1,meta35517__$1,___$2,fn1__$1,meta35520){
return (new cljs.core.async.t_cljs$core$async35519(f__$1,ch__$1,meta35517__$1,___$2,fn1__$1,meta35520));
});

}

return (new cljs.core.async.t_cljs$core$async35519(self__.f,self__.ch,self__.meta35517,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35523 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35523) : self__.f.call(null,G__35523));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35517","meta35517",-1695711147,null)], null);
}));

(cljs.core.async.t_cljs$core$async35516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35516");

(cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35516.
 */
cljs.core.async.__GT_t_cljs$core$async35516 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35516(f__$1,ch__$1,meta35517){
return (new cljs.core.async.t_cljs$core$async35516(f__$1,ch__$1,meta35517));
});

}

return (new cljs.core.async.t_cljs$core$async35516(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35524 = (function (f,ch,meta35525){
this.f = f;
this.ch = ch;
this.meta35525 = meta35525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35526,meta35525__$1){
var self__ = this;
var _35526__$1 = this;
return (new cljs.core.async.t_cljs$core$async35524(self__.f,self__.ch,meta35525__$1));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35526){
var self__ = this;
var _35526__$1 = this;
return self__.meta35525;
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35525","meta35525",-639712638,null)], null);
}));

(cljs.core.async.t_cljs$core$async35524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35524");

(cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35524.
 */
cljs.core.async.__GT_t_cljs$core$async35524 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35524(f__$1,ch__$1,meta35525){
return (new cljs.core.async.t_cljs$core$async35524(f__$1,ch__$1,meta35525));
});

}

return (new cljs.core.async.t_cljs$core$async35524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35527 = (function (p,ch,meta35528){
this.p = p;
this.ch = ch;
this.meta35528 = meta35528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35529,meta35528__$1){
var self__ = this;
var _35529__$1 = this;
return (new cljs.core.async.t_cljs$core$async35527(self__.p,self__.ch,meta35528__$1));
}));

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35529){
var self__ = this;
var _35529__$1 = this;
return self__.meta35528;
}));

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35528","meta35528",-1764136144,null)], null);
}));

(cljs.core.async.t_cljs$core$async35527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35527");

(cljs.core.async.t_cljs$core$async35527.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35527.
 */
cljs.core.async.__GT_t_cljs$core$async35527 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35527(p__$1,ch__$1,meta35528){
return (new cljs.core.async.t_cljs$core$async35527(p__$1,ch__$1,meta35528));
});

}

return (new cljs.core.async.t_cljs$core$async35527(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35531 = arguments.length;
switch (G__35531) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___36684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35552){
var state_val_35553 = (state_35552[(1)]);
if((state_val_35553 === (7))){
var inst_35548 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35554_36685 = state_35552__$1;
(statearr_35554_36685[(2)] = inst_35548);

(statearr_35554_36685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (1))){
var state_35552__$1 = state_35552;
var statearr_35555_36686 = state_35552__$1;
(statearr_35555_36686[(2)] = null);

(statearr_35555_36686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (4))){
var inst_35534 = (state_35552[(7)]);
var inst_35534__$1 = (state_35552[(2)]);
var inst_35535 = (inst_35534__$1 == null);
var state_35552__$1 = (function (){var statearr_35556 = state_35552;
(statearr_35556[(7)] = inst_35534__$1);

return statearr_35556;
})();
if(cljs.core.truth_(inst_35535)){
var statearr_35557_36691 = state_35552__$1;
(statearr_35557_36691[(1)] = (5));

} else {
var statearr_35558_36692 = state_35552__$1;
(statearr_35558_36692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (6))){
var inst_35534 = (state_35552[(7)]);
var inst_35539 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35534) : p.call(null,inst_35534));
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35539)){
var statearr_35559_36693 = state_35552__$1;
(statearr_35559_36693[(1)] = (8));

} else {
var statearr_35560_36694 = state_35552__$1;
(statearr_35560_36694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (3))){
var inst_35550 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35552__$1,inst_35550);
} else {
if((state_val_35553 === (2))){
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35552__$1,(4),ch);
} else {
if((state_val_35553 === (11))){
var inst_35542 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35561_36695 = state_35552__$1;
(statearr_35561_36695[(2)] = inst_35542);

(statearr_35561_36695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (9))){
var state_35552__$1 = state_35552;
var statearr_35562_36696 = state_35552__$1;
(statearr_35562_36696[(2)] = null);

(statearr_35562_36696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (5))){
var inst_35537 = cljs.core.async.close_BANG_(out);
var state_35552__$1 = state_35552;
var statearr_35563_36709 = state_35552__$1;
(statearr_35563_36709[(2)] = inst_35537);

(statearr_35563_36709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (10))){
var inst_35545 = (state_35552[(2)]);
var state_35552__$1 = (function (){var statearr_35564 = state_35552;
(statearr_35564[(8)] = inst_35545);

return statearr_35564;
})();
var statearr_35565_36713 = state_35552__$1;
(statearr_35565_36713[(2)] = null);

(statearr_35565_36713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35553 === (8))){
var inst_35534 = (state_35552[(7)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35552__$1,(11),out,inst_35534);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35566 = [null,null,null,null,null,null,null,null,null];
(statearr_35566[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35566[(1)] = (1));

return statearr_35566;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35552){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35552);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35567){var ex__34037__auto__ = e35567;
var statearr_35568_36727 = state_35552;
(statearr_35568_36727[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35552[(4)]))){
var statearr_35569_36728 = state_35552;
(statearr_35569_36728[(1)] = cljs.core.first((state_35552[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36734 = state_35552;
state_35552 = G__36734;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35570 = f__34082__auto__();
(statearr_35570[(6)] = c__34081__auto___36684);

return statearr_35570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35572 = arguments.length;
switch (G__35572) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34081__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35634){
var state_val_35635 = (state_35634[(1)]);
if((state_val_35635 === (7))){
var inst_35630 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35636_36763 = state_35634__$1;
(statearr_35636_36763[(2)] = inst_35630);

(statearr_35636_36763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (20))){
var inst_35600 = (state_35634[(7)]);
var inst_35611 = (state_35634[(2)]);
var inst_35612 = cljs.core.next(inst_35600);
var inst_35586 = inst_35612;
var inst_35587 = null;
var inst_35588 = (0);
var inst_35589 = (0);
var state_35634__$1 = (function (){var statearr_35637 = state_35634;
(statearr_35637[(8)] = inst_35586);

(statearr_35637[(9)] = inst_35589);

(statearr_35637[(10)] = inst_35611);

(statearr_35637[(11)] = inst_35588);

(statearr_35637[(12)] = inst_35587);

return statearr_35637;
})();
var statearr_35638_36765 = state_35634__$1;
(statearr_35638_36765[(2)] = null);

(statearr_35638_36765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (1))){
var state_35634__$1 = state_35634;
var statearr_35639_36766 = state_35634__$1;
(statearr_35639_36766[(2)] = null);

(statearr_35639_36766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (4))){
var inst_35575 = (state_35634[(13)]);
var inst_35575__$1 = (state_35634[(2)]);
var inst_35576 = (inst_35575__$1 == null);
var state_35634__$1 = (function (){var statearr_35640 = state_35634;
(statearr_35640[(13)] = inst_35575__$1);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35576)){
var statearr_35641_36770 = state_35634__$1;
(statearr_35641_36770[(1)] = (5));

} else {
var statearr_35642_36771 = state_35634__$1;
(statearr_35642_36771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (15))){
var state_35634__$1 = state_35634;
var statearr_35646_36772 = state_35634__$1;
(statearr_35646_36772[(2)] = null);

(statearr_35646_36772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (21))){
var state_35634__$1 = state_35634;
var statearr_35647_36773 = state_35634__$1;
(statearr_35647_36773[(2)] = null);

(statearr_35647_36773[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (13))){
var inst_35586 = (state_35634[(8)]);
var inst_35589 = (state_35634[(9)]);
var inst_35588 = (state_35634[(11)]);
var inst_35587 = (state_35634[(12)]);
var inst_35596 = (state_35634[(2)]);
var inst_35597 = (inst_35589 + (1));
var tmp35643 = inst_35586;
var tmp35644 = inst_35588;
var tmp35645 = inst_35587;
var inst_35586__$1 = tmp35643;
var inst_35587__$1 = tmp35645;
var inst_35588__$1 = tmp35644;
var inst_35589__$1 = inst_35597;
var state_35634__$1 = (function (){var statearr_35648 = state_35634;
(statearr_35648[(8)] = inst_35586__$1);

(statearr_35648[(14)] = inst_35596);

(statearr_35648[(9)] = inst_35589__$1);

(statearr_35648[(11)] = inst_35588__$1);

(statearr_35648[(12)] = inst_35587__$1);

return statearr_35648;
})();
var statearr_35649_36789 = state_35634__$1;
(statearr_35649_36789[(2)] = null);

(statearr_35649_36789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (22))){
var state_35634__$1 = state_35634;
var statearr_35650_36790 = state_35634__$1;
(statearr_35650_36790[(2)] = null);

(statearr_35650_36790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (6))){
var inst_35575 = (state_35634[(13)]);
var inst_35584 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35575) : f.call(null,inst_35575));
var inst_35585 = cljs.core.seq(inst_35584);
var inst_35586 = inst_35585;
var inst_35587 = null;
var inst_35588 = (0);
var inst_35589 = (0);
var state_35634__$1 = (function (){var statearr_35651 = state_35634;
(statearr_35651[(8)] = inst_35586);

(statearr_35651[(9)] = inst_35589);

(statearr_35651[(11)] = inst_35588);

(statearr_35651[(12)] = inst_35587);

return statearr_35651;
})();
var statearr_35652_36795 = state_35634__$1;
(statearr_35652_36795[(2)] = null);

(statearr_35652_36795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (17))){
var inst_35600 = (state_35634[(7)]);
var inst_35604 = cljs.core.chunk_first(inst_35600);
var inst_35605 = cljs.core.chunk_rest(inst_35600);
var inst_35606 = cljs.core.count(inst_35604);
var inst_35586 = inst_35605;
var inst_35587 = inst_35604;
var inst_35588 = inst_35606;
var inst_35589 = (0);
var state_35634__$1 = (function (){var statearr_35653 = state_35634;
(statearr_35653[(8)] = inst_35586);

(statearr_35653[(9)] = inst_35589);

(statearr_35653[(11)] = inst_35588);

(statearr_35653[(12)] = inst_35587);

return statearr_35653;
})();
var statearr_35654_36796 = state_35634__$1;
(statearr_35654_36796[(2)] = null);

(statearr_35654_36796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (3))){
var inst_35632 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35634__$1,inst_35632);
} else {
if((state_val_35635 === (12))){
var inst_35620 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35655_36801 = state_35634__$1;
(statearr_35655_36801[(2)] = inst_35620);

(statearr_35655_36801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (2))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35634__$1,(4),in$);
} else {
if((state_val_35635 === (23))){
var inst_35628 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35656_36802 = state_35634__$1;
(statearr_35656_36802[(2)] = inst_35628);

(statearr_35656_36802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (19))){
var inst_35615 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35657_36803 = state_35634__$1;
(statearr_35657_36803[(2)] = inst_35615);

(statearr_35657_36803[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (11))){
var inst_35586 = (state_35634[(8)]);
var inst_35600 = (state_35634[(7)]);
var inst_35600__$1 = cljs.core.seq(inst_35586);
var state_35634__$1 = (function (){var statearr_35658 = state_35634;
(statearr_35658[(7)] = inst_35600__$1);

return statearr_35658;
})();
if(inst_35600__$1){
var statearr_35659_36804 = state_35634__$1;
(statearr_35659_36804[(1)] = (14));

} else {
var statearr_35660_36805 = state_35634__$1;
(statearr_35660_36805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (9))){
var inst_35622 = (state_35634[(2)]);
var inst_35623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35634__$1 = (function (){var statearr_35661 = state_35634;
(statearr_35661[(15)] = inst_35622);

return statearr_35661;
})();
if(cljs.core.truth_(inst_35623)){
var statearr_35662_36808 = state_35634__$1;
(statearr_35662_36808[(1)] = (21));

} else {
var statearr_35663_36809 = state_35634__$1;
(statearr_35663_36809[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (5))){
var inst_35578 = cljs.core.async.close_BANG_(out);
var state_35634__$1 = state_35634;
var statearr_35664_36810 = state_35634__$1;
(statearr_35664_36810[(2)] = inst_35578);

(statearr_35664_36810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (14))){
var inst_35600 = (state_35634[(7)]);
var inst_35602 = cljs.core.chunked_seq_QMARK_(inst_35600);
var state_35634__$1 = state_35634;
if(inst_35602){
var statearr_35665_36811 = state_35634__$1;
(statearr_35665_36811[(1)] = (17));

} else {
var statearr_35666_36812 = state_35634__$1;
(statearr_35666_36812[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (16))){
var inst_35618 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35667_36813 = state_35634__$1;
(statearr_35667_36813[(2)] = inst_35618);

(statearr_35667_36813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (10))){
var inst_35589 = (state_35634[(9)]);
var inst_35587 = (state_35634[(12)]);
var inst_35594 = cljs.core._nth(inst_35587,inst_35589);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(13),out,inst_35594);
} else {
if((state_val_35635 === (18))){
var inst_35600 = (state_35634[(7)]);
var inst_35609 = cljs.core.first(inst_35600);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(20),out,inst_35609);
} else {
if((state_val_35635 === (8))){
var inst_35589 = (state_35634[(9)]);
var inst_35588 = (state_35634[(11)]);
var inst_35591 = (inst_35589 < inst_35588);
var inst_35592 = inst_35591;
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35592)){
var statearr_35668_36815 = state_35634__$1;
(statearr_35668_36815[(1)] = (10));

} else {
var statearr_35669_36816 = state_35634__$1;
(statearr_35669_36816[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____0 = (function (){
var statearr_35670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35670[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__);

(statearr_35670[(1)] = (1));

return statearr_35670;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____1 = (function (state_35634){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35634);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35671){var ex__34037__auto__ = e35671;
var statearr_35672_36818 = state_35634;
(statearr_35672_36818[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35634[(4)]))){
var statearr_35673_36819 = state_35634;
(statearr_35673_36819[(1)] = cljs.core.first((state_35634[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36820 = state_35634;
state_35634 = G__36820;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__ = function(state_35634){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____1.call(this,state_35634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34034__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35674 = f__34082__auto__();
(statearr_35674[(6)] = c__34081__auto__);

return statearr_35674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));

return c__34081__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35676 = arguments.length;
switch (G__35676) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35678 = arguments.length;
switch (G__35678) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35680 = arguments.length;
switch (G__35680) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___36832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35704){
var state_val_35705 = (state_35704[(1)]);
if((state_val_35705 === (7))){
var inst_35699 = (state_35704[(2)]);
var state_35704__$1 = state_35704;
var statearr_35706_36833 = state_35704__$1;
(statearr_35706_36833[(2)] = inst_35699);

(statearr_35706_36833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (1))){
var inst_35681 = null;
var state_35704__$1 = (function (){var statearr_35707 = state_35704;
(statearr_35707[(7)] = inst_35681);

return statearr_35707;
})();
var statearr_35708_36834 = state_35704__$1;
(statearr_35708_36834[(2)] = null);

(statearr_35708_36834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (4))){
var inst_35684 = (state_35704[(8)]);
var inst_35684__$1 = (state_35704[(2)]);
var inst_35685 = (inst_35684__$1 == null);
var inst_35686 = cljs.core.not(inst_35685);
var state_35704__$1 = (function (){var statearr_35709 = state_35704;
(statearr_35709[(8)] = inst_35684__$1);

return statearr_35709;
})();
if(inst_35686){
var statearr_35710_36843 = state_35704__$1;
(statearr_35710_36843[(1)] = (5));

} else {
var statearr_35711_36844 = state_35704__$1;
(statearr_35711_36844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (6))){
var state_35704__$1 = state_35704;
var statearr_35712_36845 = state_35704__$1;
(statearr_35712_36845[(2)] = null);

(statearr_35712_36845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (3))){
var inst_35701 = (state_35704[(2)]);
var inst_35702 = cljs.core.async.close_BANG_(out);
var state_35704__$1 = (function (){var statearr_35713 = state_35704;
(statearr_35713[(9)] = inst_35701);

return statearr_35713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35704__$1,inst_35702);
} else {
if((state_val_35705 === (2))){
var state_35704__$1 = state_35704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35704__$1,(4),ch);
} else {
if((state_val_35705 === (11))){
var inst_35684 = (state_35704[(8)]);
var inst_35693 = (state_35704[(2)]);
var inst_35681 = inst_35684;
var state_35704__$1 = (function (){var statearr_35714 = state_35704;
(statearr_35714[(10)] = inst_35693);

(statearr_35714[(7)] = inst_35681);

return statearr_35714;
})();
var statearr_35715_36846 = state_35704__$1;
(statearr_35715_36846[(2)] = null);

(statearr_35715_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (9))){
var inst_35684 = (state_35704[(8)]);
var state_35704__$1 = state_35704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35704__$1,(11),out,inst_35684);
} else {
if((state_val_35705 === (5))){
var inst_35684 = (state_35704[(8)]);
var inst_35681 = (state_35704[(7)]);
var inst_35688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35684,inst_35681);
var state_35704__$1 = state_35704;
if(inst_35688){
var statearr_35717_36847 = state_35704__$1;
(statearr_35717_36847[(1)] = (8));

} else {
var statearr_35718_36851 = state_35704__$1;
(statearr_35718_36851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (10))){
var inst_35696 = (state_35704[(2)]);
var state_35704__$1 = state_35704;
var statearr_35719_36854 = state_35704__$1;
(statearr_35719_36854[(2)] = inst_35696);

(statearr_35719_36854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35705 === (8))){
var inst_35681 = (state_35704[(7)]);
var tmp35716 = inst_35681;
var inst_35681__$1 = tmp35716;
var state_35704__$1 = (function (){var statearr_35720 = state_35704;
(statearr_35720[(7)] = inst_35681__$1);

return statearr_35720;
})();
var statearr_35721_36855 = state_35704__$1;
(statearr_35721_36855[(2)] = null);

(statearr_35721_36855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35722[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35722[(1)] = (1));

return statearr_35722;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35704){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35704);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35723){var ex__34037__auto__ = e35723;
var statearr_35724_36856 = state_35704;
(statearr_35724_36856[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35704[(4)]))){
var statearr_35725_36857 = state_35704;
(statearr_35725_36857[(1)] = cljs.core.first((state_35704[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36858 = state_35704;
state_35704 = G__36858;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35726 = f__34082__auto__();
(statearr_35726[(6)] = c__34081__auto___36832);

return statearr_35726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35728 = arguments.length;
switch (G__35728) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___36879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35766){
var state_val_35767 = (state_35766[(1)]);
if((state_val_35767 === (7))){
var inst_35762 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35768_36883 = state_35766__$1;
(statearr_35768_36883[(2)] = inst_35762);

(statearr_35768_36883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (1))){
var inst_35729 = (new Array(n));
var inst_35730 = inst_35729;
var inst_35731 = (0);
var state_35766__$1 = (function (){var statearr_35769 = state_35766;
(statearr_35769[(7)] = inst_35730);

(statearr_35769[(8)] = inst_35731);

return statearr_35769;
})();
var statearr_35770_36889 = state_35766__$1;
(statearr_35770_36889[(2)] = null);

(statearr_35770_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (4))){
var inst_35734 = (state_35766[(9)]);
var inst_35734__$1 = (state_35766[(2)]);
var inst_35735 = (inst_35734__$1 == null);
var inst_35736 = cljs.core.not(inst_35735);
var state_35766__$1 = (function (){var statearr_35771 = state_35766;
(statearr_35771[(9)] = inst_35734__$1);

return statearr_35771;
})();
if(inst_35736){
var statearr_35772_36895 = state_35766__$1;
(statearr_35772_36895[(1)] = (5));

} else {
var statearr_35773_36897 = state_35766__$1;
(statearr_35773_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (15))){
var inst_35756 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35774_36903 = state_35766__$1;
(statearr_35774_36903[(2)] = inst_35756);

(statearr_35774_36903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (13))){
var state_35766__$1 = state_35766;
var statearr_35775_36909 = state_35766__$1;
(statearr_35775_36909[(2)] = null);

(statearr_35775_36909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (6))){
var inst_35731 = (state_35766[(8)]);
var inst_35752 = (inst_35731 > (0));
var state_35766__$1 = state_35766;
if(cljs.core.truth_(inst_35752)){
var statearr_35776_36915 = state_35766__$1;
(statearr_35776_36915[(1)] = (12));

} else {
var statearr_35777_36918 = state_35766__$1;
(statearr_35777_36918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (3))){
var inst_35764 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35766__$1,inst_35764);
} else {
if((state_val_35767 === (12))){
var inst_35730 = (state_35766[(7)]);
var inst_35754 = cljs.core.vec(inst_35730);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35766__$1,(15),out,inst_35754);
} else {
if((state_val_35767 === (2))){
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35766__$1,(4),ch);
} else {
if((state_val_35767 === (11))){
var inst_35746 = (state_35766[(2)]);
var inst_35747 = (new Array(n));
var inst_35730 = inst_35747;
var inst_35731 = (0);
var state_35766__$1 = (function (){var statearr_35778 = state_35766;
(statearr_35778[(7)] = inst_35730);

(statearr_35778[(8)] = inst_35731);

(statearr_35778[(10)] = inst_35746);

return statearr_35778;
})();
var statearr_35779_36941 = state_35766__$1;
(statearr_35779_36941[(2)] = null);

(statearr_35779_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (9))){
var inst_35730 = (state_35766[(7)]);
var inst_35744 = cljs.core.vec(inst_35730);
var state_35766__$1 = state_35766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35766__$1,(11),out,inst_35744);
} else {
if((state_val_35767 === (5))){
var inst_35730 = (state_35766[(7)]);
var inst_35739 = (state_35766[(11)]);
var inst_35734 = (state_35766[(9)]);
var inst_35731 = (state_35766[(8)]);
var inst_35738 = (inst_35730[inst_35731] = inst_35734);
var inst_35739__$1 = (inst_35731 + (1));
var inst_35740 = (inst_35739__$1 < n);
var state_35766__$1 = (function (){var statearr_35780 = state_35766;
(statearr_35780[(11)] = inst_35739__$1);

(statearr_35780[(12)] = inst_35738);

return statearr_35780;
})();
if(cljs.core.truth_(inst_35740)){
var statearr_35781_36956 = state_35766__$1;
(statearr_35781_36956[(1)] = (8));

} else {
var statearr_35782_36961 = state_35766__$1;
(statearr_35782_36961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (14))){
var inst_35759 = (state_35766[(2)]);
var inst_35760 = cljs.core.async.close_BANG_(out);
var state_35766__$1 = (function (){var statearr_35784 = state_35766;
(statearr_35784[(13)] = inst_35759);

return statearr_35784;
})();
var statearr_35785_36968 = state_35766__$1;
(statearr_35785_36968[(2)] = inst_35760);

(statearr_35785_36968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (10))){
var inst_35750 = (state_35766[(2)]);
var state_35766__$1 = state_35766;
var statearr_35786_36975 = state_35766__$1;
(statearr_35786_36975[(2)] = inst_35750);

(statearr_35786_36975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35767 === (8))){
var inst_35730 = (state_35766[(7)]);
var inst_35739 = (state_35766[(11)]);
var tmp35783 = inst_35730;
var inst_35730__$1 = tmp35783;
var inst_35731 = inst_35739;
var state_35766__$1 = (function (){var statearr_35787 = state_35766;
(statearr_35787[(7)] = inst_35730__$1);

(statearr_35787[(8)] = inst_35731);

return statearr_35787;
})();
var statearr_35788_36998 = state_35766__$1;
(statearr_35788_36998[(2)] = null);

(statearr_35788_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35766){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35766);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35790){var ex__34037__auto__ = e35790;
var statearr_35791_36999 = state_35766;
(statearr_35791_36999[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35766[(4)]))){
var statearr_35792_37000 = state_35766;
(statearr_35792_37000[(1)] = cljs.core.first((state_35766[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_35766;
state_35766 = G__37003;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35793 = f__34082__auto__();
(statearr_35793[(6)] = c__34081__auto___36879);

return statearr_35793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35795 = arguments.length;
switch (G__35795) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34081__auto___37012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34082__auto__ = (function (){var switch__34033__auto__ = (function (state_35837){
var state_val_35838 = (state_35837[(1)]);
if((state_val_35838 === (7))){
var inst_35833 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35839_37013 = state_35837__$1;
(statearr_35839_37013[(2)] = inst_35833);

(statearr_35839_37013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (1))){
var inst_35796 = [];
var inst_35797 = inst_35796;
var inst_35798 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35837__$1 = (function (){var statearr_35840 = state_35837;
(statearr_35840[(7)] = inst_35797);

(statearr_35840[(8)] = inst_35798);

return statearr_35840;
})();
var statearr_35841_37019 = state_35837__$1;
(statearr_35841_37019[(2)] = null);

(statearr_35841_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (4))){
var inst_35801 = (state_35837[(9)]);
var inst_35801__$1 = (state_35837[(2)]);
var inst_35802 = (inst_35801__$1 == null);
var inst_35803 = cljs.core.not(inst_35802);
var state_35837__$1 = (function (){var statearr_35842 = state_35837;
(statearr_35842[(9)] = inst_35801__$1);

return statearr_35842;
})();
if(inst_35803){
var statearr_35843_37021 = state_35837__$1;
(statearr_35843_37021[(1)] = (5));

} else {
var statearr_35844_37022 = state_35837__$1;
(statearr_35844_37022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (15))){
var inst_35827 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35845_37023 = state_35837__$1;
(statearr_35845_37023[(2)] = inst_35827);

(statearr_35845_37023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (13))){
var state_35837__$1 = state_35837;
var statearr_35846_37024 = state_35837__$1;
(statearr_35846_37024[(2)] = null);

(statearr_35846_37024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (6))){
var inst_35797 = (state_35837[(7)]);
var inst_35822 = inst_35797.length;
var inst_35823 = (inst_35822 > (0));
var state_35837__$1 = state_35837;
if(cljs.core.truth_(inst_35823)){
var statearr_35847_37025 = state_35837__$1;
(statearr_35847_37025[(1)] = (12));

} else {
var statearr_35848_37026 = state_35837__$1;
(statearr_35848_37026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (3))){
var inst_35835 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35837__$1,inst_35835);
} else {
if((state_val_35838 === (12))){
var inst_35797 = (state_35837[(7)]);
var inst_35825 = cljs.core.vec(inst_35797);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35837__$1,(15),out,inst_35825);
} else {
if((state_val_35838 === (2))){
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35837__$1,(4),ch);
} else {
if((state_val_35838 === (11))){
var inst_35805 = (state_35837[(10)]);
var inst_35801 = (state_35837[(9)]);
var inst_35815 = (state_35837[(2)]);
var inst_35816 = [];
var inst_35817 = inst_35816.push(inst_35801);
var inst_35797 = inst_35816;
var inst_35798 = inst_35805;
var state_35837__$1 = (function (){var statearr_35849 = state_35837;
(statearr_35849[(7)] = inst_35797);

(statearr_35849[(11)] = inst_35817);

(statearr_35849[(12)] = inst_35815);

(statearr_35849[(8)] = inst_35798);

return statearr_35849;
})();
var statearr_35850_37030 = state_35837__$1;
(statearr_35850_37030[(2)] = null);

(statearr_35850_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (9))){
var inst_35797 = (state_35837[(7)]);
var inst_35813 = cljs.core.vec(inst_35797);
var state_35837__$1 = state_35837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35837__$1,(11),out,inst_35813);
} else {
if((state_val_35838 === (5))){
var inst_35805 = (state_35837[(10)]);
var inst_35801 = (state_35837[(9)]);
var inst_35798 = (state_35837[(8)]);
var inst_35805__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35801) : f.call(null,inst_35801));
var inst_35806 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35805__$1,inst_35798);
var inst_35807 = cljs.core.keyword_identical_QMARK_(inst_35798,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35808 = ((inst_35806) || (inst_35807));
var state_35837__$1 = (function (){var statearr_35851 = state_35837;
(statearr_35851[(10)] = inst_35805__$1);

return statearr_35851;
})();
if(cljs.core.truth_(inst_35808)){
var statearr_35852_37033 = state_35837__$1;
(statearr_35852_37033[(1)] = (8));

} else {
var statearr_35853_37034 = state_35837__$1;
(statearr_35853_37034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (14))){
var inst_35830 = (state_35837[(2)]);
var inst_35831 = cljs.core.async.close_BANG_(out);
var state_35837__$1 = (function (){var statearr_35855 = state_35837;
(statearr_35855[(13)] = inst_35830);

return statearr_35855;
})();
var statearr_35856_37037 = state_35837__$1;
(statearr_35856_37037[(2)] = inst_35831);

(statearr_35856_37037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (10))){
var inst_35820 = (state_35837[(2)]);
var state_35837__$1 = state_35837;
var statearr_35857_37038 = state_35837__$1;
(statearr_35857_37038[(2)] = inst_35820);

(statearr_35857_37038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35838 === (8))){
var inst_35797 = (state_35837[(7)]);
var inst_35805 = (state_35837[(10)]);
var inst_35801 = (state_35837[(9)]);
var inst_35810 = inst_35797.push(inst_35801);
var tmp35854 = inst_35797;
var inst_35797__$1 = tmp35854;
var inst_35798 = inst_35805;
var state_35837__$1 = (function (){var statearr_35858 = state_35837;
(statearr_35858[(7)] = inst_35797__$1);

(statearr_35858[(14)] = inst_35810);

(statearr_35858[(8)] = inst_35798);

return statearr_35858;
})();
var statearr_35859_37040 = state_35837__$1;
(statearr_35859_37040[(2)] = null);

(statearr_35859_37040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34034__auto__ = null;
var cljs$core$async$state_machine__34034__auto____0 = (function (){
var statearr_35860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35860[(0)] = cljs$core$async$state_machine__34034__auto__);

(statearr_35860[(1)] = (1));

return statearr_35860;
});
var cljs$core$async$state_machine__34034__auto____1 = (function (state_35837){
while(true){
var ret_value__34035__auto__ = (function (){try{while(true){
var result__34036__auto__ = switch__34033__auto__(state_35837);
if(cljs.core.keyword_identical_QMARK_(result__34036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34036__auto__;
}
break;
}
}catch (e35861){var ex__34037__auto__ = e35861;
var statearr_35862_37041 = state_35837;
(statearr_35862_37041[(2)] = ex__34037__auto__);


if(cljs.core.seq((state_35837[(4)]))){
var statearr_35863_37042 = state_35837;
(statearr_35863_37042[(1)] = cljs.core.first((state_35837[(4)])));

} else {
throw ex__34037__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37043 = state_35837;
state_35837 = G__37043;
continue;
} else {
return ret_value__34035__auto__;
}
break;
}
});
cljs$core$async$state_machine__34034__auto__ = function(state_35837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34034__auto____1.call(this,state_35837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34034__auto____0;
cljs$core$async$state_machine__34034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34034__auto____1;
return cljs$core$async$state_machine__34034__auto__;
})()
})();
var state__34083__auto__ = (function (){var statearr_35864 = f__34082__auto__();
(statearr_35864[(6)] = c__34081__auto___37012);

return statearr_35864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34083__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
