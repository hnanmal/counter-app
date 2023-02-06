goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13589 = (function (f,blockable,meta13590){
this.f = f;
this.blockable = blockable;
this.meta13590 = meta13590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13591,meta13590__$1){
var self__ = this;
var _13591__$1 = this;
return (new cljs.core.async.t_cljs$core$async13589(self__.f,self__.blockable,meta13590__$1));
}));

(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13591){
var self__ = this;
var _13591__$1 = this;
return self__.meta13590;
}));

(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13590","meta13590",-1383115250,null)], null);
}));

(cljs.core.async.t_cljs$core$async13589.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13589");

(cljs.core.async.t_cljs$core$async13589.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13589");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13589.
 */
cljs.core.async.__GT_t_cljs$core$async13589 = (function cljs$core$async$__GT_t_cljs$core$async13589(f,blockable,meta13590){
return (new cljs.core.async.t_cljs$core$async13589(f,blockable,meta13590));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13588 = arguments.length;
switch (G__13588) {
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
return (new cljs.core.async.t_cljs$core$async13589(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13602 = arguments.length;
switch (G__13602) {
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
var G__13607 = arguments.length;
switch (G__13607) {
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
var G__13610 = arguments.length;
switch (G__13610) {
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
var val_16783 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16783) : fn1.call(null,val_16783));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16783) : fn1.call(null,val_16783));
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
var G__13656 = arguments.length;
switch (G__13656) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___16788 = n;
var x_16789 = (0);
while(true){
if((x_16789 < n__5636__auto___16788)){
(a[x_16789] = x_16789);

var G__16790 = (x_16789 + (1));
x_16789 = G__16790;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13680 = (function (flag,meta13681){
this.flag = flag;
this.meta13681 = meta13681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13682,meta13681__$1){
var self__ = this;
var _13682__$1 = this;
return (new cljs.core.async.t_cljs$core$async13680(self__.flag,meta13681__$1));
}));

(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13682){
var self__ = this;
var _13682__$1 = this;
return self__.meta13681;
}));

(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13681","meta13681",502985822,null)], null);
}));

(cljs.core.async.t_cljs$core$async13680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13680");

(cljs.core.async.t_cljs$core$async13680.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13680.
 */
cljs.core.async.__GT_t_cljs$core$async13680 = (function cljs$core$async$__GT_t_cljs$core$async13680(flag,meta13681){
return (new cljs.core.async.t_cljs$core$async13680(flag,meta13681));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13680(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13697 = (function (flag,cb,meta13698){
this.flag = flag;
this.cb = cb;
this.meta13698 = meta13698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13699,meta13698__$1){
var self__ = this;
var _13699__$1 = this;
return (new cljs.core.async.t_cljs$core$async13697(self__.flag,self__.cb,meta13698__$1));
}));

(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13699){
var self__ = this;
var _13699__$1 = this;
return self__.meta13698;
}));

(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13698","meta13698",556780691,null)], null);
}));

(cljs.core.async.t_cljs$core$async13697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13697");

(cljs.core.async.t_cljs$core$async13697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13697.
 */
cljs.core.async.__GT_t_cljs$core$async13697 = (function cljs$core$async$__GT_t_cljs$core$async13697(flag,cb,meta13698){
return (new cljs.core.async.t_cljs$core$async13697(flag,cb,meta13698));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13697(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13713_SHARP_){
var G__13736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13713_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13736) : fret.call(null,G__13736));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13715_SHARP_){
var G__13737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13715_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13737) : fret.call(null,G__13737));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16804 = (i + (1));
i = G__16804;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___16805 = arguments.length;
var i__5770__auto___16806 = (0);
while(true){
if((i__5770__auto___16806 < len__5769__auto___16805)){
args__5775__auto__.push((arguments[i__5770__auto___16806]));

var G__16807 = (i__5770__auto___16806 + (1));
i__5770__auto___16806 = G__16807;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13758){
var map__13759 = p__13758;
var map__13759__$1 = cljs.core.__destructure_map(map__13759);
var opts = map__13759__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13747){
var G__13748 = cljs.core.first(seq13747);
var seq13747__$1 = cljs.core.next(seq13747);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13748,seq13747__$1);
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
var G__13781 = arguments.length;
switch (G__13781) {
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
var c__13481__auto___16810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_13879){
var state_val_13880 = (state_13879[(1)]);
if((state_val_13880 === (7))){
var inst_13866 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13889_16814 = state_13879__$1;
(statearr_13889_16814[(2)] = inst_13866);

(statearr_13889_16814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (1))){
var state_13879__$1 = state_13879;
var statearr_13892_16817 = state_13879__$1;
(statearr_13892_16817[(2)] = null);

(statearr_13892_16817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (4))){
var inst_13838 = (state_13879[(7)]);
var inst_13838__$1 = (state_13879[(2)]);
var inst_13846 = (inst_13838__$1 == null);
var state_13879__$1 = (function (){var statearr_13898 = state_13879;
(statearr_13898[(7)] = inst_13838__$1);

return statearr_13898;
})();
if(cljs.core.truth_(inst_13846)){
var statearr_13899_16818 = state_13879__$1;
(statearr_13899_16818[(1)] = (5));

} else {
var statearr_13900_16819 = state_13879__$1;
(statearr_13900_16819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (13))){
var state_13879__$1 = state_13879;
var statearr_13914_16820 = state_13879__$1;
(statearr_13914_16820[(2)] = null);

(statearr_13914_16820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (6))){
var inst_13838 = (state_13879[(7)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13879__$1,(11),to,inst_13838);
} else {
if((state_val_13880 === (3))){
var inst_13870 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13879__$1,inst_13870);
} else {
if((state_val_13880 === (12))){
var state_13879__$1 = state_13879;
var statearr_13930_16822 = state_13879__$1;
(statearr_13930_16822[(2)] = null);

(statearr_13930_16822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (2))){
var state_13879__$1 = state_13879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13879__$1,(4),from);
} else {
if((state_val_13880 === (11))){
var inst_13858 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
if(cljs.core.truth_(inst_13858)){
var statearr_13936_16826 = state_13879__$1;
(statearr_13936_16826[(1)] = (12));

} else {
var statearr_13938_16827 = state_13879__$1;
(statearr_13938_16827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (9))){
var state_13879__$1 = state_13879;
var statearr_13941_16832 = state_13879__$1;
(statearr_13941_16832[(2)] = null);

(statearr_13941_16832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (5))){
var state_13879__$1 = state_13879;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13943_16833 = state_13879__$1;
(statearr_13943_16833[(1)] = (8));

} else {
var statearr_13944_16834 = state_13879__$1;
(statearr_13944_16834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (14))){
var inst_13864 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13949_16835 = state_13879__$1;
(statearr_13949_16835[(2)] = inst_13864);

(statearr_13949_16835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (10))){
var inst_13855 = (state_13879[(2)]);
var state_13879__$1 = state_13879;
var statearr_13952_16839 = state_13879__$1;
(statearr_13952_16839[(2)] = inst_13855);

(statearr_13952_16839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13880 === (8))){
var inst_13850 = cljs.core.async.close_BANG_(to);
var state_13879__$1 = state_13879;
var statearr_13958_16844 = state_13879__$1;
(statearr_13958_16844[(2)] = inst_13850);

(statearr_13958_16844[(1)] = (10));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_13964 = [null,null,null,null,null,null,null,null];
(statearr_13964[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_13964[(1)] = (1));

return statearr_13964;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_13879){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_13879);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e13965){var ex__12901__auto__ = e13965;
var statearr_13966_16855 = state_13879;
(statearr_13966_16855[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_13879[(4)]))){
var statearr_13970_16859 = state_13879;
(statearr_13970_16859[(1)] = cljs.core.first((state_13879[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16860 = state_13879;
state_13879 = G__16860;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_13879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_13879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_13977 = f__13482__auto__();
(statearr_13977[(6)] = c__13481__auto___16810);

return statearr_13977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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
var process__$1 = (function (p__14036){
var vec__14058 = p__14036;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14058,(1),null);
var job = vec__14058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13481__auto___16863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14079){
var state_val_14084 = (state_14079[(1)]);
if((state_val_14084 === (1))){
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14079__$1,(2),res,v);
} else {
if((state_val_14084 === (2))){
var inst_14075 = (state_14079[(2)]);
var inst_14077 = cljs.core.async.close_BANG_(res);
var state_14079__$1 = (function (){var statearr_14096 = state_14079;
(statearr_14096[(7)] = inst_14075);

return statearr_14096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14079__$1,inst_14077);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_14101 = [null,null,null,null,null,null,null,null];
(statearr_14101[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__);

(statearr_14101[(1)] = (1));

return statearr_14101;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1 = (function (state_14079){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14079);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14114){var ex__12901__auto__ = e14114;
var statearr_14115_16874 = state_14079;
(statearr_14115_16874[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14079[(4)]))){
var statearr_14116_16875 = state_14079;
(statearr_14116_16875[(1)] = cljs.core.first((state_14079[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16876 = state_14079;
state_14079 = G__16876;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14117 = f__13482__auto__();
(statearr_14117[(6)] = c__13481__auto___16863);

return statearr_14117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14118){
var vec__14123 = p__14118;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(1),null);
var job = vec__14123;
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
var n__5636__auto___16880 = n;
var __16882 = (0);
while(true){
if((__16882 < n__5636__auto___16880)){
var G__14129_16883 = type;
var G__14129_16884__$1 = (((G__14129_16883 instanceof cljs.core.Keyword))?G__14129_16883.fqn:null);
switch (G__14129_16884__$1) {
case "compute":
var c__13481__auto___16888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16882,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = ((function (__16882,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function (state_14146){
var state_val_14147 = (state_14146[(1)]);
if((state_val_14147 === (1))){
var state_14146__$1 = state_14146;
var statearr_14148_16891 = state_14146__$1;
(statearr_14148_16891[(2)] = null);

(statearr_14148_16891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14147 === (2))){
var state_14146__$1 = state_14146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14146__$1,(4),jobs);
} else {
if((state_val_14147 === (3))){
var inst_14144 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14146__$1,inst_14144);
} else {
if((state_val_14147 === (4))){
var inst_14135 = (state_14146[(2)]);
var inst_14137 = process__$1(inst_14135);
var state_14146__$1 = state_14146;
if(cljs.core.truth_(inst_14137)){
var statearr_14150_16893 = state_14146__$1;
(statearr_14150_16893[(1)] = (5));

} else {
var statearr_14153_16894 = state_14146__$1;
(statearr_14153_16894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14147 === (5))){
var state_14146__$1 = state_14146;
var statearr_14155_16895 = state_14146__$1;
(statearr_14155_16895[(2)] = null);

(statearr_14155_16895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14147 === (6))){
var state_14146__$1 = state_14146;
var statearr_14156_16897 = state_14146__$1;
(statearr_14156_16897[(2)] = null);

(statearr_14156_16897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14147 === (7))){
var inst_14142 = (state_14146[(2)]);
var state_14146__$1 = state_14146;
var statearr_14157_16898 = state_14146__$1;
(statearr_14157_16898[(2)] = inst_14142);

(statearr_14157_16898[(1)] = (3));


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
});})(__16882,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
;
return ((function (__16882,switch__12897__auto__,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_14166 = [null,null,null,null,null,null,null];
(statearr_14166[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__);

(statearr_14166[(1)] = (1));

return statearr_14166;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1 = (function (state_14146){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14146);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14167){var ex__12901__auto__ = e14167;
var statearr_14172_16903 = state_14146;
(statearr_14172_16903[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14146[(4)]))){
var statearr_14173_16905 = state_14146;
(statearr_14173_16905[(1)] = cljs.core.first((state_14146[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16907 = state_14146;
state_14146 = G__16907;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = function(state_14146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1.call(this,state_14146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__;
})()
;})(__16882,switch__12897__auto__,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
})();
var state__13483__auto__ = (function (){var statearr_14174 = f__13482__auto__();
(statearr_14174[(6)] = c__13481__auto___16888);

return statearr_14174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
});})(__16882,c__13481__auto___16888,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
);


break;
case "async":
var c__13481__auto___16908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16882,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = ((function (__16882,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function (state_14191){
var state_val_14192 = (state_14191[(1)]);
if((state_val_14192 === (1))){
var state_14191__$1 = state_14191;
var statearr_14195_16911 = state_14191__$1;
(statearr_14195_16911[(2)] = null);

(statearr_14195_16911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14192 === (2))){
var state_14191__$1 = state_14191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14191__$1,(4),jobs);
} else {
if((state_val_14192 === (3))){
var inst_14189 = (state_14191[(2)]);
var state_14191__$1 = state_14191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14191__$1,inst_14189);
} else {
if((state_val_14192 === (4))){
var inst_14180 = (state_14191[(2)]);
var inst_14181 = async(inst_14180);
var state_14191__$1 = state_14191;
if(cljs.core.truth_(inst_14181)){
var statearr_14197_16914 = state_14191__$1;
(statearr_14197_16914[(1)] = (5));

} else {
var statearr_14198_16915 = state_14191__$1;
(statearr_14198_16915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14192 === (5))){
var state_14191__$1 = state_14191;
var statearr_14199_16916 = state_14191__$1;
(statearr_14199_16916[(2)] = null);

(statearr_14199_16916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14192 === (6))){
var state_14191__$1 = state_14191;
var statearr_14200_16917 = state_14191__$1;
(statearr_14200_16917[(2)] = null);

(statearr_14200_16917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14192 === (7))){
var inst_14187 = (state_14191[(2)]);
var state_14191__$1 = state_14191;
var statearr_14201_16920 = state_14191__$1;
(statearr_14201_16920[(2)] = inst_14187);

(statearr_14201_16920[(1)] = (3));


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
});})(__16882,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
;
return ((function (__16882,switch__12897__auto__,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_14203 = [null,null,null,null,null,null,null];
(statearr_14203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__);

(statearr_14203[(1)] = (1));

return statearr_14203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1 = (function (state_14191){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14191);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14204){var ex__12901__auto__ = e14204;
var statearr_14205_16922 = state_14191;
(statearr_14205_16922[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14191[(4)]))){
var statearr_14207_16923 = state_14191;
(statearr_14207_16923[(1)] = cljs.core.first((state_14191[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16924 = state_14191;
state_14191 = G__16924;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = function(state_14191){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1.call(this,state_14191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__;
})()
;})(__16882,switch__12897__auto__,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
})();
var state__13483__auto__ = (function (){var statearr_14209 = f__13482__auto__();
(statearr_14209[(6)] = c__13481__auto___16908);

return statearr_14209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
});})(__16882,c__13481__auto___16908,G__14129_16883,G__14129_16884__$1,n__5636__auto___16880,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14129_16884__$1)].join('')));

}

var G__16926 = (__16882 + (1));
__16882 = G__16926;
continue;
} else {
}
break;
}

var c__13481__auto___16928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14236){
var state_val_14237 = (state_14236[(1)]);
if((state_val_14237 === (7))){
var inst_14232 = (state_14236[(2)]);
var state_14236__$1 = state_14236;
var statearr_14242_16930 = state_14236__$1;
(statearr_14242_16930[(2)] = inst_14232);

(statearr_14242_16930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14237 === (1))){
var state_14236__$1 = state_14236;
var statearr_14244_16931 = state_14236__$1;
(statearr_14244_16931[(2)] = null);

(statearr_14244_16931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14237 === (4))){
var inst_14213 = (state_14236[(7)]);
var inst_14213__$1 = (state_14236[(2)]);
var inst_14216 = (inst_14213__$1 == null);
var state_14236__$1 = (function (){var statearr_14248 = state_14236;
(statearr_14248[(7)] = inst_14213__$1);

return statearr_14248;
})();
if(cljs.core.truth_(inst_14216)){
var statearr_14251_16939 = state_14236__$1;
(statearr_14251_16939[(1)] = (5));

} else {
var statearr_14253_16940 = state_14236__$1;
(statearr_14253_16940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14237 === (6))){
var inst_14222 = (state_14236[(8)]);
var inst_14213 = (state_14236[(7)]);
var inst_14222__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14224 = [inst_14213,inst_14222__$1];
var inst_14225 = (new cljs.core.PersistentVector(null,2,(5),inst_14223,inst_14224,null));
var state_14236__$1 = (function (){var statearr_14255 = state_14236;
(statearr_14255[(8)] = inst_14222__$1);

return statearr_14255;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14236__$1,(8),jobs,inst_14225);
} else {
if((state_val_14237 === (3))){
var inst_14234 = (state_14236[(2)]);
var state_14236__$1 = state_14236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14236__$1,inst_14234);
} else {
if((state_val_14237 === (2))){
var state_14236__$1 = state_14236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14236__$1,(4),from);
} else {
if((state_val_14237 === (9))){
var inst_14229 = (state_14236[(2)]);
var state_14236__$1 = (function (){var statearr_14260 = state_14236;
(statearr_14260[(9)] = inst_14229);

return statearr_14260;
})();
var statearr_14263_16941 = state_14236__$1;
(statearr_14263_16941[(2)] = null);

(statearr_14263_16941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14237 === (5))){
var inst_14218 = cljs.core.async.close_BANG_(jobs);
var state_14236__$1 = state_14236;
var statearr_14267_16942 = state_14236__$1;
(statearr_14267_16942[(2)] = inst_14218);

(statearr_14267_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14237 === (8))){
var inst_14222 = (state_14236[(8)]);
var inst_14227 = (state_14236[(2)]);
var state_14236__$1 = (function (){var statearr_14268 = state_14236;
(statearr_14268[(10)] = inst_14227);

return statearr_14268;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14236__$1,(9),results,inst_14222);
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
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_14273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__);

(statearr_14273[(1)] = (1));

return statearr_14273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1 = (function (state_14236){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14236);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14274){var ex__12901__auto__ = e14274;
var statearr_14275_16947 = state_14236;
(statearr_14275_16947[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14236[(4)]))){
var statearr_14277_16948 = state_14236;
(statearr_14277_16948[(1)] = cljs.core.first((state_14236[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16949 = state_14236;
state_14236 = G__16949;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = function(state_14236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1.call(this,state_14236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14278 = f__13482__auto__();
(statearr_14278[(6)] = c__13481__auto___16928);

return statearr_14278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


var c__13481__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14326){
var state_val_14327 = (state_14326[(1)]);
if((state_val_14327 === (7))){
var inst_14318 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14330_16950 = state_14326__$1;
(statearr_14330_16950[(2)] = inst_14318);

(statearr_14330_16950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (20))){
var state_14326__$1 = state_14326;
var statearr_14331_16952 = state_14326__$1;
(statearr_14331_16952[(2)] = null);

(statearr_14331_16952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (1))){
var state_14326__$1 = state_14326;
var statearr_14336_16953 = state_14326__$1;
(statearr_14336_16953[(2)] = null);

(statearr_14336_16953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (4))){
var inst_14283 = (state_14326[(7)]);
var inst_14283__$1 = (state_14326[(2)]);
var inst_14284 = (inst_14283__$1 == null);
var state_14326__$1 = (function (){var statearr_14337 = state_14326;
(statearr_14337[(7)] = inst_14283__$1);

return statearr_14337;
})();
if(cljs.core.truth_(inst_14284)){
var statearr_14338_16955 = state_14326__$1;
(statearr_14338_16955[(1)] = (5));

} else {
var statearr_14340_16956 = state_14326__$1;
(statearr_14340_16956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (15))){
var inst_14296 = (state_14326[(8)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14326__$1,(18),to,inst_14296);
} else {
if((state_val_14327 === (21))){
var inst_14311 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14345_16957 = state_14326__$1;
(statearr_14345_16957[(2)] = inst_14311);

(statearr_14345_16957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (13))){
var inst_14315 = (state_14326[(2)]);
var state_14326__$1 = (function (){var statearr_14346 = state_14326;
(statearr_14346[(9)] = inst_14315);

return statearr_14346;
})();
var statearr_14348_16958 = state_14326__$1;
(statearr_14348_16958[(2)] = null);

(statearr_14348_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (6))){
var inst_14283 = (state_14326[(7)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14326__$1,(11),inst_14283);
} else {
if((state_val_14327 === (17))){
var inst_14306 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14306)){
var statearr_14352_16963 = state_14326__$1;
(statearr_14352_16963[(1)] = (19));

} else {
var statearr_14355_16965 = state_14326__$1;
(statearr_14355_16965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (3))){
var inst_14320 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14326__$1,inst_14320);
} else {
if((state_val_14327 === (12))){
var inst_14293 = (state_14326[(10)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14326__$1,(14),inst_14293);
} else {
if((state_val_14327 === (2))){
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14326__$1,(4),results);
} else {
if((state_val_14327 === (19))){
var state_14326__$1 = state_14326;
var statearr_14357_16971 = state_14326__$1;
(statearr_14357_16971[(2)] = null);

(statearr_14357_16971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (11))){
var inst_14293 = (state_14326[(2)]);
var state_14326__$1 = (function (){var statearr_14362 = state_14326;
(statearr_14362[(10)] = inst_14293);

return statearr_14362;
})();
var statearr_14363_16976 = state_14326__$1;
(statearr_14363_16976[(2)] = null);

(statearr_14363_16976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (9))){
var state_14326__$1 = state_14326;
var statearr_14365_16980 = state_14326__$1;
(statearr_14365_16980[(2)] = null);

(statearr_14365_16980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (5))){
var state_14326__$1 = state_14326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14369_16981 = state_14326__$1;
(statearr_14369_16981[(1)] = (8));

} else {
var statearr_14372_16982 = state_14326__$1;
(statearr_14372_16982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (14))){
var inst_14296 = (state_14326[(8)]);
var inst_14300 = (state_14326[(11)]);
var inst_14296__$1 = (state_14326[(2)]);
var inst_14299 = (inst_14296__$1 == null);
var inst_14300__$1 = cljs.core.not(inst_14299);
var state_14326__$1 = (function (){var statearr_14373 = state_14326;
(statearr_14373[(8)] = inst_14296__$1);

(statearr_14373[(11)] = inst_14300__$1);

return statearr_14373;
})();
if(inst_14300__$1){
var statearr_14374_16984 = state_14326__$1;
(statearr_14374_16984[(1)] = (15));

} else {
var statearr_14375_16986 = state_14326__$1;
(statearr_14375_16986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (16))){
var inst_14300 = (state_14326[(11)]);
var state_14326__$1 = state_14326;
var statearr_14376_16988 = state_14326__$1;
(statearr_14376_16988[(2)] = inst_14300);

(statearr_14376_16988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (10))){
var inst_14290 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14377_16989 = state_14326__$1;
(statearr_14377_16989[(2)] = inst_14290);

(statearr_14377_16989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (18))){
var inst_14303 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14379_16990 = state_14326__$1;
(statearr_14379_16990[(2)] = inst_14303);

(statearr_14379_16990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (8))){
var inst_14287 = cljs.core.async.close_BANG_(to);
var state_14326__$1 = state_14326;
var statearr_14380_16991 = state_14326__$1;
(statearr_14380_16991[(2)] = inst_14287);

(statearr_14380_16991[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_14386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__);

(statearr_14386[(1)] = (1));

return statearr_14386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1 = (function (state_14326){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14326);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14387){var ex__12901__auto__ = e14387;
var statearr_14388_16992 = state_14326;
(statearr_14388_16992[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14326[(4)]))){
var statearr_14389_16993 = state_14326;
(statearr_14389_16993[(1)] = cljs.core.first((state_14326[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16999 = state_14326;
state_14326 = G__16999;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14391 = f__13482__auto__();
(statearr_14391[(6)] = c__13481__auto__);

return statearr_14391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

return c__13481__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14398 = arguments.length;
switch (G__14398) {
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
var G__14412 = arguments.length;
switch (G__14412) {
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
var G__14420 = arguments.length;
switch (G__14420) {
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
var c__13481__auto___17024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14449){
var state_val_14450 = (state_14449[(1)]);
if((state_val_14450 === (7))){
var inst_14445 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14453_17025 = state_14449__$1;
(statearr_14453_17025[(2)] = inst_14445);

(statearr_14453_17025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (1))){
var state_14449__$1 = state_14449;
var statearr_14454_17026 = state_14449__$1;
(statearr_14454_17026[(2)] = null);

(statearr_14454_17026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (4))){
var inst_14426 = (state_14449[(7)]);
var inst_14426__$1 = (state_14449[(2)]);
var inst_14427 = (inst_14426__$1 == null);
var state_14449__$1 = (function (){var statearr_14455 = state_14449;
(statearr_14455[(7)] = inst_14426__$1);

return statearr_14455;
})();
if(cljs.core.truth_(inst_14427)){
var statearr_14458_17036 = state_14449__$1;
(statearr_14458_17036[(1)] = (5));

} else {
var statearr_14459_17040 = state_14449__$1;
(statearr_14459_17040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (13))){
var state_14449__$1 = state_14449;
var statearr_14461_17042 = state_14449__$1;
(statearr_14461_17042[(2)] = null);

(statearr_14461_17042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (6))){
var inst_14426 = (state_14449[(7)]);
var inst_14432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14426) : p.call(null,inst_14426));
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14432)){
var statearr_14462_17050 = state_14449__$1;
(statearr_14462_17050[(1)] = (9));

} else {
var statearr_14463_17051 = state_14449__$1;
(statearr_14463_17051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (3))){
var inst_14447 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14449__$1,inst_14447);
} else {
if((state_val_14450 === (12))){
var state_14449__$1 = state_14449;
var statearr_14467_17052 = state_14449__$1;
(statearr_14467_17052[(2)] = null);

(statearr_14467_17052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (2))){
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14449__$1,(4),ch);
} else {
if((state_val_14450 === (11))){
var inst_14426 = (state_14449[(7)]);
var inst_14436 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14449__$1,(8),inst_14436,inst_14426);
} else {
if((state_val_14450 === (9))){
var state_14449__$1 = state_14449;
var statearr_14471_17055 = state_14449__$1;
(statearr_14471_17055[(2)] = tc);

(statearr_14471_17055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (5))){
var inst_14429 = cljs.core.async.close_BANG_(tc);
var inst_14430 = cljs.core.async.close_BANG_(fc);
var state_14449__$1 = (function (){var statearr_14472 = state_14449;
(statearr_14472[(8)] = inst_14429);

return statearr_14472;
})();
var statearr_14473_17056 = state_14449__$1;
(statearr_14473_17056[(2)] = inst_14430);

(statearr_14473_17056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (14))){
var inst_14443 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
var statearr_14476_17057 = state_14449__$1;
(statearr_14476_17057[(2)] = inst_14443);

(statearr_14476_17057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (10))){
var state_14449__$1 = state_14449;
var statearr_14477_17058 = state_14449__$1;
(statearr_14477_17058[(2)] = fc);

(statearr_14477_17058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14450 === (8))){
var inst_14438 = (state_14449[(2)]);
var state_14449__$1 = state_14449;
if(cljs.core.truth_(inst_14438)){
var statearr_14480_17059 = state_14449__$1;
(statearr_14480_17059[(1)] = (12));

} else {
var statearr_14481_17060 = state_14449__$1;
(statearr_14481_17060[(1)] = (13));

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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_14483 = [null,null,null,null,null,null,null,null,null];
(statearr_14483[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_14483[(1)] = (1));

return statearr_14483;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_14449){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14449);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14486){var ex__12901__auto__ = e14486;
var statearr_14487_17071 = state_14449;
(statearr_14487_17071[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14449[(4)]))){
var statearr_14490_17074 = state_14449;
(statearr_14490_17074[(1)] = cljs.core.first((state_14449[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17075 = state_14449;
state_14449 = G__17075;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_14449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_14449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14495 = f__13482__auto__();
(statearr_14495[(6)] = c__13481__auto___17024);

return statearr_14495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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
var c__13481__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14522){
var state_val_14523 = (state_14522[(1)]);
if((state_val_14523 === (7))){
var inst_14518 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14529_17083 = state_14522__$1;
(statearr_14529_17083[(2)] = inst_14518);

(statearr_14529_17083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (1))){
var inst_14497 = init;
var inst_14498 = inst_14497;
var state_14522__$1 = (function (){var statearr_14532 = state_14522;
(statearr_14532[(7)] = inst_14498);

return statearr_14532;
})();
var statearr_14533_17091 = state_14522__$1;
(statearr_14533_17091[(2)] = null);

(statearr_14533_17091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (4))){
var inst_14502 = (state_14522[(8)]);
var inst_14502__$1 = (state_14522[(2)]);
var inst_14503 = (inst_14502__$1 == null);
var state_14522__$1 = (function (){var statearr_14535 = state_14522;
(statearr_14535[(8)] = inst_14502__$1);

return statearr_14535;
})();
if(cljs.core.truth_(inst_14503)){
var statearr_14538_17098 = state_14522__$1;
(statearr_14538_17098[(1)] = (5));

} else {
var statearr_14539_17099 = state_14522__$1;
(statearr_14539_17099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (6))){
var inst_14502 = (state_14522[(8)]);
var inst_14507 = (state_14522[(9)]);
var inst_14498 = (state_14522[(7)]);
var inst_14507__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14498,inst_14502) : f.call(null,inst_14498,inst_14502));
var inst_14510 = cljs.core.reduced_QMARK_(inst_14507__$1);
var state_14522__$1 = (function (){var statearr_14540 = state_14522;
(statearr_14540[(9)] = inst_14507__$1);

return statearr_14540;
})();
if(inst_14510){
var statearr_14542_17104 = state_14522__$1;
(statearr_14542_17104[(1)] = (8));

} else {
var statearr_14543_17111 = state_14522__$1;
(statearr_14543_17111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (3))){
var inst_14520 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14522__$1,inst_14520);
} else {
if((state_val_14523 === (2))){
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14522__$1,(4),ch);
} else {
if((state_val_14523 === (9))){
var inst_14507 = (state_14522[(9)]);
var inst_14498 = inst_14507;
var state_14522__$1 = (function (){var statearr_14545 = state_14522;
(statearr_14545[(7)] = inst_14498);

return statearr_14545;
})();
var statearr_14546_17116 = state_14522__$1;
(statearr_14546_17116[(2)] = null);

(statearr_14546_17116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (5))){
var inst_14498 = (state_14522[(7)]);
var state_14522__$1 = state_14522;
var statearr_14547_17118 = state_14522__$1;
(statearr_14547_17118[(2)] = inst_14498);

(statearr_14547_17118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (10))){
var inst_14516 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14549_17122 = state_14522__$1;
(statearr_14549_17122[(2)] = inst_14516);

(statearr_14549_17122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (8))){
var inst_14507 = (state_14522[(9)]);
var inst_14512 = cljs.core.deref(inst_14507);
var state_14522__$1 = state_14522;
var statearr_14550_17123 = state_14522__$1;
(statearr_14550_17123[(2)] = inst_14512);

(statearr_14550_17123[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__12898__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12898__auto____0 = (function (){
var statearr_14552 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14552[(0)] = cljs$core$async$reduce_$_state_machine__12898__auto__);

(statearr_14552[(1)] = (1));

return statearr_14552;
});
var cljs$core$async$reduce_$_state_machine__12898__auto____1 = (function (state_14522){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14522);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14553){var ex__12901__auto__ = e14553;
var statearr_14554_17132 = state_14522;
(statearr_14554_17132[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14522[(4)]))){
var statearr_14555_17134 = state_14522;
(statearr_14555_17134[(1)] = cljs.core.first((state_14522[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17147 = state_14522;
state_14522 = G__17147;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12898__auto__ = function(state_14522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12898__auto____1.call(this,state_14522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12898__auto____0;
cljs$core$async$reduce_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12898__auto____1;
return cljs$core$async$reduce_$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14558 = f__13482__auto__();
(statearr_14558[(6)] = c__13481__auto__);

return statearr_14558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

return c__13481__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13481__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14567){
var state_val_14568 = (state_14567[(1)]);
if((state_val_14568 === (1))){
var inst_14562 = cljs.core.async.reduce(f__$1,init,ch);
var state_14567__$1 = state_14567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14567__$1,(2),inst_14562);
} else {
if((state_val_14568 === (2))){
var inst_14564 = (state_14567[(2)]);
var inst_14565 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14564) : f__$1.call(null,inst_14564));
var state_14567__$1 = state_14567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14567__$1,inst_14565);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12898__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12898__auto____0 = (function (){
var statearr_14577 = [null,null,null,null,null,null,null];
(statearr_14577[(0)] = cljs$core$async$transduce_$_state_machine__12898__auto__);

(statearr_14577[(1)] = (1));

return statearr_14577;
});
var cljs$core$async$transduce_$_state_machine__12898__auto____1 = (function (state_14567){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14567);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14578){var ex__12901__auto__ = e14578;
var statearr_14579_17157 = state_14567;
(statearr_14579_17157[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14567[(4)]))){
var statearr_14580_17158 = state_14567;
(statearr_14580_17158[(1)] = cljs.core.first((state_14567[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17162 = state_14567;
state_14567 = G__17162;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12898__auto__ = function(state_14567){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12898__auto____1.call(this,state_14567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12898__auto____0;
cljs$core$async$transduce_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12898__auto____1;
return cljs$core$async$transduce_$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14582 = f__13482__auto__();
(statearr_14582[(6)] = c__13481__auto__);

return statearr_14582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

return c__13481__auto__;
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
var G__14585 = arguments.length;
switch (G__14585) {
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
var c__13481__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14617){
var state_val_14618 = (state_14617[(1)]);
if((state_val_14618 === (7))){
var inst_14598 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14622_17170 = state_14617__$1;
(statearr_14622_17170[(2)] = inst_14598);

(statearr_14622_17170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (1))){
var inst_14592 = cljs.core.seq(coll);
var inst_14593 = inst_14592;
var state_14617__$1 = (function (){var statearr_14628 = state_14617;
(statearr_14628[(7)] = inst_14593);

return statearr_14628;
})();
var statearr_14629_17171 = state_14617__$1;
(statearr_14629_17171[(2)] = null);

(statearr_14629_17171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (4))){
var inst_14593 = (state_14617[(7)]);
var inst_14596 = cljs.core.first(inst_14593);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14617__$1,(7),ch,inst_14596);
} else {
if((state_val_14618 === (13))){
var inst_14611 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14633_17176 = state_14617__$1;
(statearr_14633_17176[(2)] = inst_14611);

(statearr_14633_17176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (6))){
var inst_14601 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
if(cljs.core.truth_(inst_14601)){
var statearr_14634_17178 = state_14617__$1;
(statearr_14634_17178[(1)] = (8));

} else {
var statearr_14635_17179 = state_14617__$1;
(statearr_14635_17179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (3))){
var inst_14615 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14617__$1,inst_14615);
} else {
if((state_val_14618 === (12))){
var state_14617__$1 = state_14617;
var statearr_14637_17182 = state_14617__$1;
(statearr_14637_17182[(2)] = null);

(statearr_14637_17182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (2))){
var inst_14593 = (state_14617[(7)]);
var state_14617__$1 = state_14617;
if(cljs.core.truth_(inst_14593)){
var statearr_14639_17191 = state_14617__$1;
(statearr_14639_17191[(1)] = (4));

} else {
var statearr_14640_17195 = state_14617__$1;
(statearr_14640_17195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (11))){
var inst_14608 = cljs.core.async.close_BANG_(ch);
var state_14617__$1 = state_14617;
var statearr_14642_17199 = state_14617__$1;
(statearr_14642_17199[(2)] = inst_14608);

(statearr_14642_17199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (9))){
var state_14617__$1 = state_14617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14648_17200 = state_14617__$1;
(statearr_14648_17200[(1)] = (11));

} else {
var statearr_14649_17201 = state_14617__$1;
(statearr_14649_17201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (5))){
var inst_14593 = (state_14617[(7)]);
var state_14617__$1 = state_14617;
var statearr_14651_17202 = state_14617__$1;
(statearr_14651_17202[(2)] = inst_14593);

(statearr_14651_17202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (10))){
var inst_14613 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14654_17203 = state_14617__$1;
(statearr_14654_17203[(2)] = inst_14613);

(statearr_14654_17203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (8))){
var inst_14593 = (state_14617[(7)]);
var inst_14603 = cljs.core.next(inst_14593);
var inst_14593__$1 = inst_14603;
var state_14617__$1 = (function (){var statearr_14656 = state_14617;
(statearr_14656[(7)] = inst_14593__$1);

return statearr_14656;
})();
var statearr_14657_17216 = state_14617__$1;
(statearr_14657_17216[(2)] = null);

(statearr_14657_17216[(1)] = (2));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_14658 = [null,null,null,null,null,null,null,null];
(statearr_14658[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_14658[(1)] = (1));

return statearr_14658;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_14617){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14617);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14659){var ex__12901__auto__ = e14659;
var statearr_14660_17217 = state_14617;
(statearr_14660_17217[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14617[(4)]))){
var statearr_14661_17218 = state_14617;
(statearr_14661_17218[(1)] = cljs.core.first((state_14617[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17219 = state_14617;
state_14617 = G__17219;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_14617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_14617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14663 = f__13482__auto__();
(statearr_14663[(6)] = c__13481__auto__);

return statearr_14663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

return c__13481__auto__;
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
var G__14667 = arguments.length;
switch (G__14667) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17230 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17230(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17235 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17235(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17238 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17238(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17257 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17257(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14693 = (function (ch,cs,meta14694){
this.ch = ch;
this.cs = cs;
this.meta14694 = meta14694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14695,meta14694__$1){
var self__ = this;
var _14695__$1 = this;
return (new cljs.core.async.t_cljs$core$async14693(self__.ch,self__.cs,meta14694__$1));
}));

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14695){
var self__ = this;
var _14695__$1 = this;
return self__.meta14694;
}));

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14693.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14694","meta14694",-2036144234,null)], null);
}));

(cljs.core.async.t_cljs$core$async14693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14693");

(cljs.core.async.t_cljs$core$async14693.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14693.
 */
cljs.core.async.__GT_t_cljs$core$async14693 = (function cljs$core$async$__GT_t_cljs$core$async14693(ch,cs,meta14694){
return (new cljs.core.async.t_cljs$core$async14693(ch,cs,meta14694));
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
var m = (new cljs.core.async.t_cljs$core$async14693(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13481__auto___17265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (7))){
var inst_14851 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14857_17267 = state_14855__$1;
(statearr_14857_17267[(2)] = inst_14851);

(statearr_14857_17267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (20))){
var inst_14742 = (state_14855[(7)]);
var inst_14757 = cljs.core.first(inst_14742);
var inst_14758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14757,(0),null);
var inst_14759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14757,(1),null);
var state_14855__$1 = (function (){var statearr_14858 = state_14855;
(statearr_14858[(8)] = inst_14758);

return statearr_14858;
})();
if(cljs.core.truth_(inst_14759)){
var statearr_14859_17269 = state_14855__$1;
(statearr_14859_17269[(1)] = (22));

} else {
var statearr_14860_17270 = state_14855__$1;
(statearr_14860_17270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (27))){
var inst_14709 = (state_14855[(9)]);
var inst_14789 = (state_14855[(10)]);
var inst_14791 = (state_14855[(11)]);
var inst_14796 = (state_14855[(12)]);
var inst_14796__$1 = cljs.core._nth(inst_14789,inst_14791);
var inst_14797 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14796__$1,inst_14709,done);
var state_14855__$1 = (function (){var statearr_14862 = state_14855;
(statearr_14862[(12)] = inst_14796__$1);

return statearr_14862;
})();
if(cljs.core.truth_(inst_14797)){
var statearr_14864_17274 = state_14855__$1;
(statearr_14864_17274[(1)] = (30));

} else {
var statearr_14865_17275 = state_14855__$1;
(statearr_14865_17275[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (1))){
var state_14855__$1 = state_14855;
var statearr_14866_17276 = state_14855__$1;
(statearr_14866_17276[(2)] = null);

(statearr_14866_17276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (24))){
var inst_14742 = (state_14855[(7)]);
var inst_14765 = (state_14855[(2)]);
var inst_14766 = cljs.core.next(inst_14742);
var inst_14718 = inst_14766;
var inst_14719 = null;
var inst_14721 = (0);
var inst_14722 = (0);
var state_14855__$1 = (function (){var statearr_14867 = state_14855;
(statearr_14867[(13)] = inst_14722);

(statearr_14867[(14)] = inst_14765);

(statearr_14867[(15)] = inst_14718);

(statearr_14867[(16)] = inst_14721);

(statearr_14867[(17)] = inst_14719);

return statearr_14867;
})();
var statearr_14868_17277 = state_14855__$1;
(statearr_14868_17277[(2)] = null);

(statearr_14868_17277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (39))){
var state_14855__$1 = state_14855;
var statearr_14872_17278 = state_14855__$1;
(statearr_14872_17278[(2)] = null);

(statearr_14872_17278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (4))){
var inst_14709 = (state_14855[(9)]);
var inst_14709__$1 = (state_14855[(2)]);
var inst_14710 = (inst_14709__$1 == null);
var state_14855__$1 = (function (){var statearr_14877 = state_14855;
(statearr_14877[(9)] = inst_14709__$1);

return statearr_14877;
})();
if(cljs.core.truth_(inst_14710)){
var statearr_14878_17279 = state_14855__$1;
(statearr_14878_17279[(1)] = (5));

} else {
var statearr_14882_17283 = state_14855__$1;
(statearr_14882_17283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (15))){
var inst_14722 = (state_14855[(13)]);
var inst_14718 = (state_14855[(15)]);
var inst_14721 = (state_14855[(16)]);
var inst_14719 = (state_14855[(17)]);
var inst_14738 = (state_14855[(2)]);
var inst_14739 = (inst_14722 + (1));
var tmp14869 = inst_14718;
var tmp14870 = inst_14721;
var tmp14871 = inst_14719;
var inst_14718__$1 = tmp14869;
var inst_14719__$1 = tmp14871;
var inst_14721__$1 = tmp14870;
var inst_14722__$1 = inst_14739;
var state_14855__$1 = (function (){var statearr_14886 = state_14855;
(statearr_14886[(13)] = inst_14722__$1);

(statearr_14886[(15)] = inst_14718__$1);

(statearr_14886[(18)] = inst_14738);

(statearr_14886[(16)] = inst_14721__$1);

(statearr_14886[(17)] = inst_14719__$1);

return statearr_14886;
})();
var statearr_14887_17288 = state_14855__$1;
(statearr_14887_17288[(2)] = null);

(statearr_14887_17288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (21))){
var inst_14769 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14892_17289 = state_14855__$1;
(statearr_14892_17289[(2)] = inst_14769);

(statearr_14892_17289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (31))){
var inst_14796 = (state_14855[(12)]);
var inst_14800 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14796);
var state_14855__$1 = state_14855;
var statearr_14894_17290 = state_14855__$1;
(statearr_14894_17290[(2)] = inst_14800);

(statearr_14894_17290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (32))){
var inst_14789 = (state_14855[(10)]);
var inst_14791 = (state_14855[(11)]);
var inst_14790 = (state_14855[(19)]);
var inst_14788 = (state_14855[(20)]);
var inst_14802 = (state_14855[(2)]);
var inst_14804 = (inst_14791 + (1));
var tmp14888 = inst_14789;
var tmp14889 = inst_14790;
var tmp14890 = inst_14788;
var inst_14788__$1 = tmp14890;
var inst_14789__$1 = tmp14888;
var inst_14790__$1 = tmp14889;
var inst_14791__$1 = inst_14804;
var state_14855__$1 = (function (){var statearr_14901 = state_14855;
(statearr_14901[(10)] = inst_14789__$1);

(statearr_14901[(11)] = inst_14791__$1);

(statearr_14901[(21)] = inst_14802);

(statearr_14901[(19)] = inst_14790__$1);

(statearr_14901[(20)] = inst_14788__$1);

return statearr_14901;
})();
var statearr_14902_17298 = state_14855__$1;
(statearr_14902_17298[(2)] = null);

(statearr_14902_17298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (40))){
var inst_14820 = (state_14855[(22)]);
var inst_14826 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14820);
var state_14855__$1 = state_14855;
var statearr_14904_17299 = state_14855__$1;
(statearr_14904_17299[(2)] = inst_14826);

(statearr_14904_17299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (33))){
var inst_14808 = (state_14855[(23)]);
var inst_14810 = cljs.core.chunked_seq_QMARK_(inst_14808);
var state_14855__$1 = state_14855;
if(inst_14810){
var statearr_14905_17306 = state_14855__$1;
(statearr_14905_17306[(1)] = (36));

} else {
var statearr_14906_17307 = state_14855__$1;
(statearr_14906_17307[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (13))){
var inst_14732 = (state_14855[(24)]);
var inst_14735 = cljs.core.async.close_BANG_(inst_14732);
var state_14855__$1 = state_14855;
var statearr_14908_17324 = state_14855__$1;
(statearr_14908_17324[(2)] = inst_14735);

(statearr_14908_17324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (22))){
var inst_14758 = (state_14855[(8)]);
var inst_14762 = cljs.core.async.close_BANG_(inst_14758);
var state_14855__$1 = state_14855;
var statearr_14909_17331 = state_14855__$1;
(statearr_14909_17331[(2)] = inst_14762);

(statearr_14909_17331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (36))){
var inst_14808 = (state_14855[(23)]);
var inst_14812 = cljs.core.chunk_first(inst_14808);
var inst_14813 = cljs.core.chunk_rest(inst_14808);
var inst_14814 = cljs.core.count(inst_14812);
var inst_14788 = inst_14813;
var inst_14789 = inst_14812;
var inst_14790 = inst_14814;
var inst_14791 = (0);
var state_14855__$1 = (function (){var statearr_14910 = state_14855;
(statearr_14910[(10)] = inst_14789);

(statearr_14910[(11)] = inst_14791);

(statearr_14910[(19)] = inst_14790);

(statearr_14910[(20)] = inst_14788);

return statearr_14910;
})();
var statearr_14911_17333 = state_14855__$1;
(statearr_14911_17333[(2)] = null);

(statearr_14911_17333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (41))){
var inst_14808 = (state_14855[(23)]);
var inst_14828 = (state_14855[(2)]);
var inst_14829 = cljs.core.next(inst_14808);
var inst_14788 = inst_14829;
var inst_14789 = null;
var inst_14790 = (0);
var inst_14791 = (0);
var state_14855__$1 = (function (){var statearr_14914 = state_14855;
(statearr_14914[(10)] = inst_14789);

(statearr_14914[(25)] = inst_14828);

(statearr_14914[(11)] = inst_14791);

(statearr_14914[(19)] = inst_14790);

(statearr_14914[(20)] = inst_14788);

return statearr_14914;
})();
var statearr_14915_17337 = state_14855__$1;
(statearr_14915_17337[(2)] = null);

(statearr_14915_17337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (43))){
var state_14855__$1 = state_14855;
var statearr_14916_17338 = state_14855__$1;
(statearr_14916_17338[(2)] = null);

(statearr_14916_17338[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (29))){
var inst_14839 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14917_17339 = state_14855__$1;
(statearr_14917_17339[(2)] = inst_14839);

(statearr_14917_17339[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (44))){
var inst_14848 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14921 = state_14855;
(statearr_14921[(26)] = inst_14848);

return statearr_14921;
})();
var statearr_14922_17340 = state_14855__$1;
(statearr_14922_17340[(2)] = null);

(statearr_14922_17340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (6))){
var inst_14780 = (state_14855[(27)]);
var inst_14779 = cljs.core.deref(cs);
var inst_14780__$1 = cljs.core.keys(inst_14779);
var inst_14781 = cljs.core.count(inst_14780__$1);
var inst_14782 = cljs.core.reset_BANG_(dctr,inst_14781);
var inst_14787 = cljs.core.seq(inst_14780__$1);
var inst_14788 = inst_14787;
var inst_14789 = null;
var inst_14790 = (0);
var inst_14791 = (0);
var state_14855__$1 = (function (){var statearr_14924 = state_14855;
(statearr_14924[(10)] = inst_14789);

(statearr_14924[(11)] = inst_14791);

(statearr_14924[(19)] = inst_14790);

(statearr_14924[(27)] = inst_14780__$1);

(statearr_14924[(28)] = inst_14782);

(statearr_14924[(20)] = inst_14788);

return statearr_14924;
})();
var statearr_14926_17344 = state_14855__$1;
(statearr_14926_17344[(2)] = null);

(statearr_14926_17344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (28))){
var inst_14808 = (state_14855[(23)]);
var inst_14788 = (state_14855[(20)]);
var inst_14808__$1 = cljs.core.seq(inst_14788);
var state_14855__$1 = (function (){var statearr_14928 = state_14855;
(statearr_14928[(23)] = inst_14808__$1);

return statearr_14928;
})();
if(inst_14808__$1){
var statearr_14929_17347 = state_14855__$1;
(statearr_14929_17347[(1)] = (33));

} else {
var statearr_14933_17348 = state_14855__$1;
(statearr_14933_17348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (25))){
var inst_14791 = (state_14855[(11)]);
var inst_14790 = (state_14855[(19)]);
var inst_14793 = (inst_14791 < inst_14790);
var inst_14794 = inst_14793;
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14794)){
var statearr_14935_17350 = state_14855__$1;
(statearr_14935_17350[(1)] = (27));

} else {
var statearr_14936_17351 = state_14855__$1;
(statearr_14936_17351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (34))){
var state_14855__$1 = state_14855;
var statearr_14937_17352 = state_14855__$1;
(statearr_14937_17352[(2)] = null);

(statearr_14937_17352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (17))){
var state_14855__$1 = state_14855;
var statearr_14938_17354 = state_14855__$1;
(statearr_14938_17354[(2)] = null);

(statearr_14938_17354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (3))){
var inst_14853 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14855__$1,inst_14853);
} else {
if((state_val_14856 === (12))){
var inst_14774 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14939_17355 = state_14855__$1;
(statearr_14939_17355[(2)] = inst_14774);

(statearr_14939_17355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (2))){
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14855__$1,(4),ch);
} else {
if((state_val_14856 === (23))){
var state_14855__$1 = state_14855;
var statearr_14941_17363 = state_14855__$1;
(statearr_14941_17363[(2)] = null);

(statearr_14941_17363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (35))){
var inst_14837 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14942_17364 = state_14855__$1;
(statearr_14942_17364[(2)] = inst_14837);

(statearr_14942_17364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (19))){
var inst_14742 = (state_14855[(7)]);
var inst_14749 = cljs.core.chunk_first(inst_14742);
var inst_14750 = cljs.core.chunk_rest(inst_14742);
var inst_14751 = cljs.core.count(inst_14749);
var inst_14718 = inst_14750;
var inst_14719 = inst_14749;
var inst_14721 = inst_14751;
var inst_14722 = (0);
var state_14855__$1 = (function (){var statearr_14943 = state_14855;
(statearr_14943[(13)] = inst_14722);

(statearr_14943[(15)] = inst_14718);

(statearr_14943[(16)] = inst_14721);

(statearr_14943[(17)] = inst_14719);

return statearr_14943;
})();
var statearr_14944_17366 = state_14855__$1;
(statearr_14944_17366[(2)] = null);

(statearr_14944_17366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (11))){
var inst_14742 = (state_14855[(7)]);
var inst_14718 = (state_14855[(15)]);
var inst_14742__$1 = cljs.core.seq(inst_14718);
var state_14855__$1 = (function (){var statearr_14946 = state_14855;
(statearr_14946[(7)] = inst_14742__$1);

return statearr_14946;
})();
if(inst_14742__$1){
var statearr_14947_17376 = state_14855__$1;
(statearr_14947_17376[(1)] = (16));

} else {
var statearr_14948_17377 = state_14855__$1;
(statearr_14948_17377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (9))){
var inst_14776 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14949_17380 = state_14855__$1;
(statearr_14949_17380[(2)] = inst_14776);

(statearr_14949_17380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (5))){
var inst_14716 = cljs.core.deref(cs);
var inst_14717 = cljs.core.seq(inst_14716);
var inst_14718 = inst_14717;
var inst_14719 = null;
var inst_14721 = (0);
var inst_14722 = (0);
var state_14855__$1 = (function (){var statearr_14950 = state_14855;
(statearr_14950[(13)] = inst_14722);

(statearr_14950[(15)] = inst_14718);

(statearr_14950[(16)] = inst_14721);

(statearr_14950[(17)] = inst_14719);

return statearr_14950;
})();
var statearr_14951_17389 = state_14855__$1;
(statearr_14951_17389[(2)] = null);

(statearr_14951_17389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (14))){
var state_14855__$1 = state_14855;
var statearr_14953_17390 = state_14855__$1;
(statearr_14953_17390[(2)] = null);

(statearr_14953_17390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (45))){
var inst_14845 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14954_17400 = state_14855__$1;
(statearr_14954_17400[(2)] = inst_14845);

(statearr_14954_17400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (26))){
var inst_14780 = (state_14855[(27)]);
var inst_14841 = (state_14855[(2)]);
var inst_14842 = cljs.core.seq(inst_14780);
var state_14855__$1 = (function (){var statearr_14956 = state_14855;
(statearr_14956[(29)] = inst_14841);

return statearr_14956;
})();
if(inst_14842){
var statearr_14961_17405 = state_14855__$1;
(statearr_14961_17405[(1)] = (42));

} else {
var statearr_14962_17407 = state_14855__$1;
(statearr_14962_17407[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (16))){
var inst_14742 = (state_14855[(7)]);
var inst_14747 = cljs.core.chunked_seq_QMARK_(inst_14742);
var state_14855__$1 = state_14855;
if(inst_14747){
var statearr_14963_17412 = state_14855__$1;
(statearr_14963_17412[(1)] = (19));

} else {
var statearr_14964_17417 = state_14855__$1;
(statearr_14964_17417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (38))){
var inst_14832 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14966_17418 = state_14855__$1;
(statearr_14966_17418[(2)] = inst_14832);

(statearr_14966_17418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (30))){
var state_14855__$1 = state_14855;
var statearr_14967_17419 = state_14855__$1;
(statearr_14967_17419[(2)] = null);

(statearr_14967_17419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (10))){
var inst_14722 = (state_14855[(13)]);
var inst_14719 = (state_14855[(17)]);
var inst_14731 = cljs.core._nth(inst_14719,inst_14722);
var inst_14732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14731,(0),null);
var inst_14733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14731,(1),null);
var state_14855__$1 = (function (){var statearr_14971 = state_14855;
(statearr_14971[(24)] = inst_14732);

return statearr_14971;
})();
if(cljs.core.truth_(inst_14733)){
var statearr_14972_17427 = state_14855__$1;
(statearr_14972_17427[(1)] = (13));

} else {
var statearr_14974_17430 = state_14855__$1;
(statearr_14974_17430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (18))){
var inst_14772 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14975_17432 = state_14855__$1;
(statearr_14975_17432[(2)] = inst_14772);

(statearr_14975_17432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (42))){
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14855__$1,(45),dchan);
} else {
if((state_val_14856 === (37))){
var inst_14820 = (state_14855[(22)]);
var inst_14709 = (state_14855[(9)]);
var inst_14808 = (state_14855[(23)]);
var inst_14820__$1 = cljs.core.first(inst_14808);
var inst_14821 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14820__$1,inst_14709,done);
var state_14855__$1 = (function (){var statearr_14983 = state_14855;
(statearr_14983[(22)] = inst_14820__$1);

return statearr_14983;
})();
if(cljs.core.truth_(inst_14821)){
var statearr_14984_17434 = state_14855__$1;
(statearr_14984_17434[(1)] = (39));

} else {
var statearr_14985_17435 = state_14855__$1;
(statearr_14985_17435[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (8))){
var inst_14722 = (state_14855[(13)]);
var inst_14721 = (state_14855[(16)]);
var inst_14724 = (inst_14722 < inst_14721);
var inst_14725 = inst_14724;
var state_14855__$1 = state_14855;
if(cljs.core.truth_(inst_14725)){
var statearr_14986_17436 = state_14855__$1;
(statearr_14986_17436[(1)] = (10));

} else {
var statearr_14987_17437 = state_14855__$1;
(statearr_14987_17437[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__12898__auto__ = null;
var cljs$core$async$mult_$_state_machine__12898__auto____0 = (function (){
var statearr_14989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14989[(0)] = cljs$core$async$mult_$_state_machine__12898__auto__);

(statearr_14989[(1)] = (1));

return statearr_14989;
});
var cljs$core$async$mult_$_state_machine__12898__auto____1 = (function (state_14855){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_14855);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e14990){var ex__12901__auto__ = e14990;
var statearr_14991_17444 = state_14855;
(statearr_14991_17444[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_14855[(4)]))){
var statearr_14992_17445 = state_14855;
(statearr_14992_17445[(1)] = cljs.core.first((state_14855[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17446 = state_14855;
state_14855 = G__17446;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12898__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12898__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12898__auto____0;
cljs$core$async$mult_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12898__auto____1;
return cljs$core$async$mult_$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_14993 = f__13482__auto__();
(statearr_14993[(6)] = c__13481__auto___17265);

return statearr_14993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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
var G__14996 = arguments.length;
switch (G__14996) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17476 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17476(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17494 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17494(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17495 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17495(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17497 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17497(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17498 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17498(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17500 = arguments.length;
var i__5770__auto___17501 = (0);
while(true){
if((i__5770__auto___17501 < len__5769__auto___17500)){
args__5775__auto__.push((arguments[i__5770__auto___17501]));

var G__17502 = (i__5770__auto___17501 + (1));
i__5770__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15021){
var map__15022 = p__15021;
var map__15022__$1 = cljs.core.__destructure_map(map__15022);
var opts = map__15022__$1;
var statearr_15023_17509 = state;
(statearr_15023_17509[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15024_17511 = state;
(statearr_15024_17511[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15025_17512 = state;
(statearr_15025_17512[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15016){
var G__15017 = cljs.core.first(seq15016);
var seq15016__$1 = cljs.core.next(seq15016);
var G__15018 = cljs.core.first(seq15016__$1);
var seq15016__$2 = cljs.core.next(seq15016__$1);
var G__15019 = cljs.core.first(seq15016__$2);
var seq15016__$3 = cljs.core.next(seq15016__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15017,G__15018,G__15019,seq15016__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15034 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15035){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15035 = meta15035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15036,meta15035__$1){
var self__ = this;
var _15036__$1 = this;
return (new cljs.core.async.t_cljs$core$async15034(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15035__$1));
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15036){
var self__ = this;
var _15036__$1 = this;
return self__.meta15035;
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15034.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15035","meta15035",-1773827808,null)], null);
}));

(cljs.core.async.t_cljs$core$async15034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15034");

(cljs.core.async.t_cljs$core$async15034.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15034.
 */
cljs.core.async.__GT_t_cljs$core$async15034 = (function cljs$core$async$__GT_t_cljs$core$async15034(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15035){
return (new cljs.core.async.t_cljs$core$async15034(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15035));
});


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
var m = (new cljs.core.async.t_cljs$core$async15034(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13481__auto___17584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_15112){
var state_val_15113 = (state_15112[(1)]);
if((state_val_15113 === (7))){
var inst_15072 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
if(cljs.core.truth_(inst_15072)){
var statearr_15118_17585 = state_15112__$1;
(statearr_15118_17585[(1)] = (8));

} else {
var statearr_15120_17586 = state_15112__$1;
(statearr_15120_17586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (20))){
var inst_15065 = (state_15112[(7)]);
var state_15112__$1 = state_15112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15112__$1,(23),out,inst_15065);
} else {
if((state_val_15113 === (1))){
var inst_15048 = calc_state();
var inst_15049 = cljs.core.__destructure_map(inst_15048);
var inst_15050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15049,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15049,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15049,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15053 = inst_15048;
var state_15112__$1 = (function (){var statearr_15123 = state_15112;
(statearr_15123[(8)] = inst_15053);

(statearr_15123[(9)] = inst_15052);

(statearr_15123[(10)] = inst_15051);

(statearr_15123[(11)] = inst_15050);

return statearr_15123;
})();
var statearr_15124_17588 = state_15112__$1;
(statearr_15124_17588[(2)] = null);

(statearr_15124_17588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (24))){
var inst_15056 = (state_15112[(12)]);
var inst_15053 = inst_15056;
var state_15112__$1 = (function (){var statearr_15126 = state_15112;
(statearr_15126[(8)] = inst_15053);

return statearr_15126;
})();
var statearr_15127_17596 = state_15112__$1;
(statearr_15127_17596[(2)] = null);

(statearr_15127_17596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (4))){
var inst_15067 = (state_15112[(13)]);
var inst_15065 = (state_15112[(7)]);
var inst_15064 = (state_15112[(2)]);
var inst_15065__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15064,(0),null);
var inst_15066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15064,(1),null);
var inst_15067__$1 = (inst_15065__$1 == null);
var state_15112__$1 = (function (){var statearr_15131 = state_15112;
(statearr_15131[(13)] = inst_15067__$1);

(statearr_15131[(7)] = inst_15065__$1);

(statearr_15131[(14)] = inst_15066);

return statearr_15131;
})();
if(cljs.core.truth_(inst_15067__$1)){
var statearr_15132_17600 = state_15112__$1;
(statearr_15132_17600[(1)] = (5));

} else {
var statearr_15133_17601 = state_15112__$1;
(statearr_15133_17601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (15))){
var inst_15086 = (state_15112[(15)]);
var inst_15057 = (state_15112[(16)]);
var inst_15086__$1 = cljs.core.empty_QMARK_(inst_15057);
var state_15112__$1 = (function (){var statearr_15134 = state_15112;
(statearr_15134[(15)] = inst_15086__$1);

return statearr_15134;
})();
if(inst_15086__$1){
var statearr_15135_17602 = state_15112__$1;
(statearr_15135_17602[(1)] = (17));

} else {
var statearr_15136_17603 = state_15112__$1;
(statearr_15136_17603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (21))){
var inst_15056 = (state_15112[(12)]);
var inst_15053 = inst_15056;
var state_15112__$1 = (function (){var statearr_15138 = state_15112;
(statearr_15138[(8)] = inst_15053);

return statearr_15138;
})();
var statearr_15140_17604 = state_15112__$1;
(statearr_15140_17604[(2)] = null);

(statearr_15140_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (13))){
var inst_15079 = (state_15112[(2)]);
var inst_15080 = calc_state();
var inst_15053 = inst_15080;
var state_15112__$1 = (function (){var statearr_15141 = state_15112;
(statearr_15141[(8)] = inst_15053);

(statearr_15141[(17)] = inst_15079);

return statearr_15141;
})();
var statearr_15142_17607 = state_15112__$1;
(statearr_15142_17607[(2)] = null);

(statearr_15142_17607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (22))){
var inst_15106 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
var statearr_15143_17608 = state_15112__$1;
(statearr_15143_17608[(2)] = inst_15106);

(statearr_15143_17608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (6))){
var inst_15066 = (state_15112[(14)]);
var inst_15070 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15066,change);
var state_15112__$1 = state_15112;
var statearr_15145_17611 = state_15112__$1;
(statearr_15145_17611[(2)] = inst_15070);

(statearr_15145_17611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (25))){
var state_15112__$1 = state_15112;
var statearr_15146_17613 = state_15112__$1;
(statearr_15146_17613[(2)] = null);

(statearr_15146_17613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (17))){
var inst_15058 = (state_15112[(18)]);
var inst_15066 = (state_15112[(14)]);
var inst_15088 = (inst_15058.cljs$core$IFn$_invoke$arity$1 ? inst_15058.cljs$core$IFn$_invoke$arity$1(inst_15066) : inst_15058.call(null,inst_15066));
var inst_15089 = cljs.core.not(inst_15088);
var state_15112__$1 = state_15112;
var statearr_15147_17621 = state_15112__$1;
(statearr_15147_17621[(2)] = inst_15089);

(statearr_15147_17621[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (3))){
var inst_15110 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15112__$1,inst_15110);
} else {
if((state_val_15113 === (12))){
var state_15112__$1 = state_15112;
var statearr_15151_17623 = state_15112__$1;
(statearr_15151_17623[(2)] = null);

(statearr_15151_17623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (2))){
var inst_15053 = (state_15112[(8)]);
var inst_15056 = (state_15112[(12)]);
var inst_15056__$1 = cljs.core.__destructure_map(inst_15053);
var inst_15057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15056__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15056__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15056__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15112__$1 = (function (){var statearr_15152 = state_15112;
(statearr_15152[(16)] = inst_15057);

(statearr_15152[(18)] = inst_15058);

(statearr_15152[(12)] = inst_15056__$1);

return statearr_15152;
})();
return cljs.core.async.ioc_alts_BANG_(state_15112__$1,(4),inst_15059);
} else {
if((state_val_15113 === (23))){
var inst_15097 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
if(cljs.core.truth_(inst_15097)){
var statearr_15154_17627 = state_15112__$1;
(statearr_15154_17627[(1)] = (24));

} else {
var statearr_15155_17628 = state_15112__$1;
(statearr_15155_17628[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (19))){
var inst_15092 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
var statearr_15156_17629 = state_15112__$1;
(statearr_15156_17629[(2)] = inst_15092);

(statearr_15156_17629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (11))){
var inst_15066 = (state_15112[(14)]);
var inst_15076 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15066);
var state_15112__$1 = state_15112;
var statearr_15157_17630 = state_15112__$1;
(statearr_15157_17630[(2)] = inst_15076);

(statearr_15157_17630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (9))){
var inst_15057 = (state_15112[(16)]);
var inst_15083 = (state_15112[(19)]);
var inst_15066 = (state_15112[(14)]);
var inst_15083__$1 = (inst_15057.cljs$core$IFn$_invoke$arity$1 ? inst_15057.cljs$core$IFn$_invoke$arity$1(inst_15066) : inst_15057.call(null,inst_15066));
var state_15112__$1 = (function (){var statearr_15158 = state_15112;
(statearr_15158[(19)] = inst_15083__$1);

return statearr_15158;
})();
if(cljs.core.truth_(inst_15083__$1)){
var statearr_15159_17631 = state_15112__$1;
(statearr_15159_17631[(1)] = (14));

} else {
var statearr_15160_17632 = state_15112__$1;
(statearr_15160_17632[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (5))){
var inst_15067 = (state_15112[(13)]);
var state_15112__$1 = state_15112;
var statearr_15161_17633 = state_15112__$1;
(statearr_15161_17633[(2)] = inst_15067);

(statearr_15161_17633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (14))){
var inst_15083 = (state_15112[(19)]);
var state_15112__$1 = state_15112;
var statearr_15163_17634 = state_15112__$1;
(statearr_15163_17634[(2)] = inst_15083);

(statearr_15163_17634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (26))){
var inst_15102 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
var statearr_15165_17635 = state_15112__$1;
(statearr_15165_17635[(2)] = inst_15102);

(statearr_15165_17635[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (16))){
var inst_15094 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
if(cljs.core.truth_(inst_15094)){
var statearr_15168_17636 = state_15112__$1;
(statearr_15168_17636[(1)] = (20));

} else {
var statearr_15169_17637 = state_15112__$1;
(statearr_15169_17637[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (10))){
var inst_15108 = (state_15112[(2)]);
var state_15112__$1 = state_15112;
var statearr_15171_17639 = state_15112__$1;
(statearr_15171_17639[(2)] = inst_15108);

(statearr_15171_17639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (18))){
var inst_15086 = (state_15112[(15)]);
var state_15112__$1 = state_15112;
var statearr_15172_17641 = state_15112__$1;
(statearr_15172_17641[(2)] = inst_15086);

(statearr_15172_17641[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15113 === (8))){
var inst_15065 = (state_15112[(7)]);
var inst_15074 = (inst_15065 == null);
var state_15112__$1 = state_15112;
if(cljs.core.truth_(inst_15074)){
var statearr_15175_17642 = state_15112__$1;
(statearr_15175_17642[(1)] = (11));

} else {
var statearr_15176_17644 = state_15112__$1;
(statearr_15176_17644[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__12898__auto__ = null;
var cljs$core$async$mix_$_state_machine__12898__auto____0 = (function (){
var statearr_15179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15179[(0)] = cljs$core$async$mix_$_state_machine__12898__auto__);

(statearr_15179[(1)] = (1));

return statearr_15179;
});
var cljs$core$async$mix_$_state_machine__12898__auto____1 = (function (state_15112){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_15112);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e15181){var ex__12901__auto__ = e15181;
var statearr_15182_17651 = state_15112;
(statearr_15182_17651[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_15112[(4)]))){
var statearr_15184_17652 = state_15112;
(statearr_15184_17652[(1)] = cljs.core.first((state_15112[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17653 = state_15112;
state_15112 = G__17653;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12898__auto__ = function(state_15112){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12898__auto____1.call(this,state_15112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12898__auto____0;
cljs$core$async$mix_$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12898__auto____1;
return cljs$core$async$mix_$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_15185 = f__13482__auto__();
(statearr_15185[(6)] = c__13481__auto___17584);

return statearr_15185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17656 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17656(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17663 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17663(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17667 = (function() {
var G__17670 = null;
var G__17670__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17670__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17670 = function(p,v){
switch(arguments.length){
case 1:
return G__17670__1.call(this,p);
case 2:
return G__17670__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17670.cljs$core$IFn$_invoke$arity$1 = G__17670__1;
G__17670.cljs$core$IFn$_invoke$arity$2 = G__17670__2;
return G__17670;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15204 = arguments.length;
switch (G__15204) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17667(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17667(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15243 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15244){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15244 = meta15244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15245,meta15244__$1){
var self__ = this;
var _15245__$1 = this;
return (new cljs.core.async.t_cljs$core$async15243(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15244__$1));
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15245){
var self__ = this;
var _15245__$1 = this;
return self__.meta15244;
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15244","meta15244",281694124,null)], null);
}));

(cljs.core.async.t_cljs$core$async15243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15243");

(cljs.core.async.t_cljs$core$async15243.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15243.
 */
cljs.core.async.__GT_t_cljs$core$async15243 = (function cljs$core$async$__GT_t_cljs$core$async15243(ch,topic_fn,buf_fn,mults,ensure_mult,meta15244){
return (new cljs.core.async.t_cljs$core$async15243(ch,topic_fn,buf_fn,mults,ensure_mult,meta15244));
});


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
var G__15232 = arguments.length;
switch (G__15232) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15220_SHARP_){
if(cljs.core.truth_((p1__15220_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15220_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15220_SHARP_.call(null,topic)))){
return p1__15220_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15220_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15243(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13481__auto___17708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_15373){
var state_val_15374 = (state_15373[(1)]);
if((state_val_15374 === (7))){
var inst_15367 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15384_17710 = state_15373__$1;
(statearr_15384_17710[(2)] = inst_15367);

(statearr_15384_17710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (20))){
var state_15373__$1 = state_15373;
var statearr_15388_17711 = state_15373__$1;
(statearr_15388_17711[(2)] = null);

(statearr_15388_17711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (1))){
var state_15373__$1 = state_15373;
var statearr_15392_17712 = state_15373__$1;
(statearr_15392_17712[(2)] = null);

(statearr_15392_17712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (24))){
var inst_15344 = (state_15373[(7)]);
var inst_15357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15344);
var state_15373__$1 = state_15373;
var statearr_15396_17713 = state_15373__$1;
(statearr_15396_17713[(2)] = inst_15357);

(statearr_15396_17713[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (4))){
var inst_15280 = (state_15373[(8)]);
var inst_15280__$1 = (state_15373[(2)]);
var inst_15281 = (inst_15280__$1 == null);
var state_15373__$1 = (function (){var statearr_15403 = state_15373;
(statearr_15403[(8)] = inst_15280__$1);

return statearr_15403;
})();
if(cljs.core.truth_(inst_15281)){
var statearr_15406_17714 = state_15373__$1;
(statearr_15406_17714[(1)] = (5));

} else {
var statearr_15408_17715 = state_15373__$1;
(statearr_15408_17715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (15))){
var inst_15337 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15417_17716 = state_15373__$1;
(statearr_15417_17716[(2)] = inst_15337);

(statearr_15417_17716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (21))){
var inst_15363 = (state_15373[(2)]);
var state_15373__$1 = (function (){var statearr_15419 = state_15373;
(statearr_15419[(9)] = inst_15363);

return statearr_15419;
})();
var statearr_15421_17722 = state_15373__$1;
(statearr_15421_17722[(2)] = null);

(statearr_15421_17722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (13))){
var inst_15308 = (state_15373[(10)]);
var inst_15311 = cljs.core.chunked_seq_QMARK_(inst_15308);
var state_15373__$1 = state_15373;
if(inst_15311){
var statearr_15424_17726 = state_15373__$1;
(statearr_15424_17726[(1)] = (16));

} else {
var statearr_15426_17727 = state_15373__$1;
(statearr_15426_17727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (22))){
var inst_15354 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15354)){
var statearr_15427_17733 = state_15373__$1;
(statearr_15427_17733[(1)] = (23));

} else {
var statearr_15428_17734 = state_15373__$1;
(statearr_15428_17734[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (6))){
var inst_15280 = (state_15373[(8)]);
var inst_15344 = (state_15373[(7)]);
var inst_15346 = (state_15373[(11)]);
var inst_15344__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15280) : topic_fn.call(null,inst_15280));
var inst_15345 = cljs.core.deref(mults);
var inst_15346__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15345,inst_15344__$1);
var state_15373__$1 = (function (){var statearr_15437 = state_15373;
(statearr_15437[(7)] = inst_15344__$1);

(statearr_15437[(11)] = inst_15346__$1);

return statearr_15437;
})();
if(cljs.core.truth_(inst_15346__$1)){
var statearr_15439_17740 = state_15373__$1;
(statearr_15439_17740[(1)] = (19));

} else {
var statearr_15440_17741 = state_15373__$1;
(statearr_15440_17741[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (25))){
var inst_15360 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15441_17742 = state_15373__$1;
(statearr_15441_17742[(2)] = inst_15360);

(statearr_15441_17742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (17))){
var inst_15308 = (state_15373[(10)]);
var inst_15326 = cljs.core.first(inst_15308);
var inst_15328 = cljs.core.async.muxch_STAR_(inst_15326);
var inst_15329 = cljs.core.async.close_BANG_(inst_15328);
var inst_15330 = cljs.core.next(inst_15308);
var inst_15290 = inst_15330;
var inst_15291 = null;
var inst_15292 = (0);
var inst_15293 = (0);
var state_15373__$1 = (function (){var statearr_15445 = state_15373;
(statearr_15445[(12)] = inst_15291);

(statearr_15445[(13)] = inst_15290);

(statearr_15445[(14)] = inst_15293);

(statearr_15445[(15)] = inst_15292);

(statearr_15445[(16)] = inst_15329);

return statearr_15445;
})();
var statearr_15448_17746 = state_15373__$1;
(statearr_15448_17746[(2)] = null);

(statearr_15448_17746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (3))){
var inst_15369 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15373__$1,inst_15369);
} else {
if((state_val_15374 === (12))){
var inst_15339 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15451_17751 = state_15373__$1;
(statearr_15451_17751[(2)] = inst_15339);

(statearr_15451_17751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (2))){
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15373__$1,(4),ch);
} else {
if((state_val_15374 === (23))){
var state_15373__$1 = state_15373;
var statearr_15455_17754 = state_15373__$1;
(statearr_15455_17754[(2)] = null);

(statearr_15455_17754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (19))){
var inst_15280 = (state_15373[(8)]);
var inst_15346 = (state_15373[(11)]);
var inst_15352 = cljs.core.async.muxch_STAR_(inst_15346);
var state_15373__$1 = state_15373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15373__$1,(22),inst_15352,inst_15280);
} else {
if((state_val_15374 === (11))){
var inst_15308 = (state_15373[(10)]);
var inst_15290 = (state_15373[(13)]);
var inst_15308__$1 = cljs.core.seq(inst_15290);
var state_15373__$1 = (function (){var statearr_15464 = state_15373;
(statearr_15464[(10)] = inst_15308__$1);

return statearr_15464;
})();
if(inst_15308__$1){
var statearr_15465_17756 = state_15373__$1;
(statearr_15465_17756[(1)] = (13));

} else {
var statearr_15468_17757 = state_15373__$1;
(statearr_15468_17757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (9))){
var inst_15341 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15469_17761 = state_15373__$1;
(statearr_15469_17761[(2)] = inst_15341);

(statearr_15469_17761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (5))){
var inst_15287 = cljs.core.deref(mults);
var inst_15288 = cljs.core.vals(inst_15287);
var inst_15289 = cljs.core.seq(inst_15288);
var inst_15290 = inst_15289;
var inst_15291 = null;
var inst_15292 = (0);
var inst_15293 = (0);
var state_15373__$1 = (function (){var statearr_15474 = state_15373;
(statearr_15474[(12)] = inst_15291);

(statearr_15474[(13)] = inst_15290);

(statearr_15474[(14)] = inst_15293);

(statearr_15474[(15)] = inst_15292);

return statearr_15474;
})();
var statearr_15475_17762 = state_15373__$1;
(statearr_15475_17762[(2)] = null);

(statearr_15475_17762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (14))){
var state_15373__$1 = state_15373;
var statearr_15483_17769 = state_15373__$1;
(statearr_15483_17769[(2)] = null);

(statearr_15483_17769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (16))){
var inst_15308 = (state_15373[(10)]);
var inst_15313 = cljs.core.chunk_first(inst_15308);
var inst_15314 = cljs.core.chunk_rest(inst_15308);
var inst_15315 = cljs.core.count(inst_15313);
var inst_15290 = inst_15314;
var inst_15291 = inst_15313;
var inst_15292 = inst_15315;
var inst_15293 = (0);
var state_15373__$1 = (function (){var statearr_15488 = state_15373;
(statearr_15488[(12)] = inst_15291);

(statearr_15488[(13)] = inst_15290);

(statearr_15488[(14)] = inst_15293);

(statearr_15488[(15)] = inst_15292);

return statearr_15488;
})();
var statearr_15490_17777 = state_15373__$1;
(statearr_15490_17777[(2)] = null);

(statearr_15490_17777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (10))){
var inst_15291 = (state_15373[(12)]);
var inst_15290 = (state_15373[(13)]);
var inst_15293 = (state_15373[(14)]);
var inst_15292 = (state_15373[(15)]);
var inst_15301 = cljs.core._nth(inst_15291,inst_15293);
var inst_15302 = cljs.core.async.muxch_STAR_(inst_15301);
var inst_15303 = cljs.core.async.close_BANG_(inst_15302);
var inst_15304 = (inst_15293 + (1));
var tmp15480 = inst_15291;
var tmp15481 = inst_15290;
var tmp15482 = inst_15292;
var inst_15290__$1 = tmp15481;
var inst_15291__$1 = tmp15480;
var inst_15292__$1 = tmp15482;
var inst_15293__$1 = inst_15304;
var state_15373__$1 = (function (){var statearr_15499 = state_15373;
(statearr_15499[(12)] = inst_15291__$1);

(statearr_15499[(13)] = inst_15290__$1);

(statearr_15499[(14)] = inst_15293__$1);

(statearr_15499[(15)] = inst_15292__$1);

(statearr_15499[(17)] = inst_15303);

return statearr_15499;
})();
var statearr_15501_17782 = state_15373__$1;
(statearr_15501_17782[(2)] = null);

(statearr_15501_17782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (18))){
var inst_15334 = (state_15373[(2)]);
var state_15373__$1 = state_15373;
var statearr_15505_17783 = state_15373__$1;
(statearr_15505_17783[(2)] = inst_15334);

(statearr_15505_17783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15374 === (8))){
var inst_15293 = (state_15373[(14)]);
var inst_15292 = (state_15373[(15)]);
var inst_15297 = (inst_15293 < inst_15292);
var inst_15298 = inst_15297;
var state_15373__$1 = state_15373;
if(cljs.core.truth_(inst_15298)){
var statearr_15507_17785 = state_15373__$1;
(statearr_15507_17785[(1)] = (10));

} else {
var statearr_15508_17786 = state_15373__$1;
(statearr_15508_17786[(1)] = (11));

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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_15512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15512[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_15512[(1)] = (1));

return statearr_15512;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_15373){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_15373);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e15513){var ex__12901__auto__ = e15513;
var statearr_15514_17791 = state_15373;
(statearr_15514_17791[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_15373[(4)]))){
var statearr_15516_17792 = state_15373;
(statearr_15516_17792[(1)] = cljs.core.first((state_15373[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17794 = state_15373;
state_15373 = G__17794;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_15517 = f__13482__auto__();
(statearr_15517[(6)] = c__13481__auto___17708);

return statearr_15517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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
var G__15523 = arguments.length;
switch (G__15523) {
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
var G__15542 = arguments.length;
switch (G__15542) {
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
var G__15549 = arguments.length;
switch (G__15549) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13481__auto___17813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_15646){
var state_val_15648 = (state_15646[(1)]);
if((state_val_15648 === (7))){
var state_15646__$1 = state_15646;
var statearr_15652_17814 = state_15646__$1;
(statearr_15652_17814[(2)] = null);

(statearr_15652_17814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (1))){
var state_15646__$1 = state_15646;
var statearr_15655_17815 = state_15646__$1;
(statearr_15655_17815[(2)] = null);

(statearr_15655_17815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (4))){
var inst_15568 = (state_15646[(7)]);
var inst_15567 = (state_15646[(8)]);
var inst_15570 = (inst_15568 < inst_15567);
var state_15646__$1 = state_15646;
if(cljs.core.truth_(inst_15570)){
var statearr_15660_17819 = state_15646__$1;
(statearr_15660_17819[(1)] = (6));

} else {
var statearr_15664_17820 = state_15646__$1;
(statearr_15664_17820[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (15))){
var inst_15631 = (state_15646[(9)]);
var inst_15637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15631);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15646__$1,(17),out,inst_15637);
} else {
if((state_val_15648 === (13))){
var inst_15631 = (state_15646[(9)]);
var inst_15631__$1 = (state_15646[(2)]);
var inst_15632 = cljs.core.some(cljs.core.nil_QMARK_,inst_15631__$1);
var state_15646__$1 = (function (){var statearr_15673 = state_15646;
(statearr_15673[(9)] = inst_15631__$1);

return statearr_15673;
})();
if(cljs.core.truth_(inst_15632)){
var statearr_15675_17822 = state_15646__$1;
(statearr_15675_17822[(1)] = (14));

} else {
var statearr_15676_17823 = state_15646__$1;
(statearr_15676_17823[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (6))){
var state_15646__$1 = state_15646;
var statearr_15680_17824 = state_15646__$1;
(statearr_15680_17824[(2)] = null);

(statearr_15680_17824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (17))){
var inst_15639 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15699 = state_15646;
(statearr_15699[(10)] = inst_15639);

return statearr_15699;
})();
var statearr_15702_17825 = state_15646__$1;
(statearr_15702_17825[(2)] = null);

(statearr_15702_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (3))){
var inst_15644 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15646__$1,inst_15644);
} else {
if((state_val_15648 === (12))){
var _ = (function (){var statearr_15710 = state_15646;
(statearr_15710[(4)] = cljs.core.rest((state_15646[(4)])));

return statearr_15710;
})();
var state_15646__$1 = state_15646;
var ex15693 = (state_15646__$1[(2)]);
var statearr_15711_17828 = state_15646__$1;
(statearr_15711_17828[(5)] = ex15693);


if((ex15693 instanceof Object)){
var statearr_15716_17832 = state_15646__$1;
(statearr_15716_17832[(1)] = (11));

(statearr_15716_17832[(5)] = null);

} else {
throw ex15693;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (2))){
var inst_15566 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15567 = cnt;
var inst_15568 = (0);
var state_15646__$1 = (function (){var statearr_15728 = state_15646;
(statearr_15728[(7)] = inst_15568);

(statearr_15728[(8)] = inst_15567);

(statearr_15728[(11)] = inst_15566);

return statearr_15728;
})();
var statearr_15729_17834 = state_15646__$1;
(statearr_15729_17834[(2)] = null);

(statearr_15729_17834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (11))){
var inst_15601 = (state_15646[(2)]);
var inst_15605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15646__$1 = (function (){var statearr_15733 = state_15646;
(statearr_15733[(12)] = inst_15601);

return statearr_15733;
})();
var statearr_15735_17835 = state_15646__$1;
(statearr_15735_17835[(2)] = inst_15605);

(statearr_15735_17835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (9))){
var inst_15568 = (state_15646[(7)]);
var _ = (function (){var statearr_15736 = state_15646;
(statearr_15736[(4)] = cljs.core.cons((12),(state_15646[(4)])));

return statearr_15736;
})();
var inst_15614 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15568) : chs__$1.call(null,inst_15568));
var inst_15615 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15568) : done.call(null,inst_15568));
var inst_15616 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15614,inst_15615);
var ___$1 = (function (){var statearr_15740 = state_15646;
(statearr_15740[(4)] = cljs.core.rest((state_15646[(4)])));

return statearr_15740;
})();
var state_15646__$1 = state_15646;
var statearr_15741_17836 = state_15646__$1;
(statearr_15741_17836[(2)] = inst_15616);

(statearr_15741_17836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (5))){
var inst_15629 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15743 = state_15646;
(statearr_15743[(13)] = inst_15629);

return statearr_15743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15646__$1,(13),dchan);
} else {
if((state_val_15648 === (14))){
var inst_15634 = cljs.core.async.close_BANG_(out);
var state_15646__$1 = state_15646;
var statearr_15744_17842 = state_15646__$1;
(statearr_15744_17842[(2)] = inst_15634);

(statearr_15744_17842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (16))){
var inst_15642 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15745_17843 = state_15646__$1;
(statearr_15745_17843[(2)] = inst_15642);

(statearr_15745_17843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (10))){
var inst_15568 = (state_15646[(7)]);
var inst_15619 = (state_15646[(2)]);
var inst_15622 = (inst_15568 + (1));
var inst_15568__$1 = inst_15622;
var state_15646__$1 = (function (){var statearr_15750 = state_15646;
(statearr_15750[(7)] = inst_15568__$1);

(statearr_15750[(14)] = inst_15619);

return statearr_15750;
})();
var statearr_15752_17845 = state_15646__$1;
(statearr_15752_17845[(2)] = null);

(statearr_15752_17845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (8))){
var inst_15626 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15753_17849 = state_15646__$1;
(statearr_15753_17849[(2)] = inst_15626);

(statearr_15753_17849[(1)] = (5));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_15758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15758[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_15758[(1)] = (1));

return statearr_15758;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_15646){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_15646);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e15759){var ex__12901__auto__ = e15759;
var statearr_15760_17853 = state_15646;
(statearr_15760_17853[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_15646[(4)]))){
var statearr_15761_17854 = state_15646;
(statearr_15761_17854[(1)] = cljs.core.first((state_15646[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17855 = state_15646;
state_15646 = G__17855;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_15646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_15646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_15764 = f__13482__auto__();
(statearr_15764[(6)] = c__13481__auto___17813);

return statearr_15764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

}

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
var G__15775 = arguments.length;
switch (G__15775) {
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
var c__13481__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_15825){
var state_val_15826 = (state_15825[(1)]);
if((state_val_15826 === (7))){
var inst_15799 = (state_15825[(7)]);
var inst_15798 = (state_15825[(8)]);
var inst_15798__$1 = (state_15825[(2)]);
var inst_15799__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15798__$1,(0),null);
var inst_15800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15798__$1,(1),null);
var inst_15805 = (inst_15799__$1 == null);
var state_15825__$1 = (function (){var statearr_15832 = state_15825;
(statearr_15832[(7)] = inst_15799__$1);

(statearr_15832[(9)] = inst_15800);

(statearr_15832[(8)] = inst_15798__$1);

return statearr_15832;
})();
if(cljs.core.truth_(inst_15805)){
var statearr_15837_17863 = state_15825__$1;
(statearr_15837_17863[(1)] = (8));

} else {
var statearr_15838_17864 = state_15825__$1;
(statearr_15838_17864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (1))){
var inst_15787 = cljs.core.vec(chs);
var inst_15788 = inst_15787;
var state_15825__$1 = (function (){var statearr_15841 = state_15825;
(statearr_15841[(10)] = inst_15788);

return statearr_15841;
})();
var statearr_15843_17865 = state_15825__$1;
(statearr_15843_17865[(2)] = null);

(statearr_15843_17865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (4))){
var inst_15788 = (state_15825[(10)]);
var state_15825__$1 = state_15825;
return cljs.core.async.ioc_alts_BANG_(state_15825__$1,(7),inst_15788);
} else {
if((state_val_15826 === (6))){
var inst_15821 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15845_17866 = state_15825__$1;
(statearr_15845_17866[(2)] = inst_15821);

(statearr_15845_17866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (3))){
var inst_15823 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15825__$1,inst_15823);
} else {
if((state_val_15826 === (2))){
var inst_15788 = (state_15825[(10)]);
var inst_15790 = cljs.core.count(inst_15788);
var inst_15791 = (inst_15790 > (0));
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15791)){
var statearr_15847_17870 = state_15825__$1;
(statearr_15847_17870[(1)] = (4));

} else {
var statearr_15852_17871 = state_15825__$1;
(statearr_15852_17871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (11))){
var inst_15788 = (state_15825[(10)]);
var inst_15814 = (state_15825[(2)]);
var tmp15846 = inst_15788;
var inst_15788__$1 = tmp15846;
var state_15825__$1 = (function (){var statearr_15856 = state_15825;
(statearr_15856[(11)] = inst_15814);

(statearr_15856[(10)] = inst_15788__$1);

return statearr_15856;
})();
var statearr_15858_17875 = state_15825__$1;
(statearr_15858_17875[(2)] = null);

(statearr_15858_17875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (9))){
var inst_15799 = (state_15825[(7)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15825__$1,(11),out,inst_15799);
} else {
if((state_val_15826 === (5))){
var inst_15819 = cljs.core.async.close_BANG_(out);
var state_15825__$1 = state_15825;
var statearr_15875_17880 = state_15825__$1;
(statearr_15875_17880[(2)] = inst_15819);

(statearr_15875_17880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (10))){
var inst_15817 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15876_17881 = state_15825__$1;
(statearr_15876_17881[(2)] = inst_15817);

(statearr_15876_17881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (8))){
var inst_15799 = (state_15825[(7)]);
var inst_15800 = (state_15825[(9)]);
var inst_15798 = (state_15825[(8)]);
var inst_15788 = (state_15825[(10)]);
var inst_15808 = (function (){var cs = inst_15788;
var vec__15794 = inst_15798;
var v = inst_15799;
var c = inst_15800;
return (function (p1__15769_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15769_SHARP_);
});
})();
var inst_15810 = cljs.core.filterv(inst_15808,inst_15788);
var inst_15788__$1 = inst_15810;
var state_15825__$1 = (function (){var statearr_15881 = state_15825;
(statearr_15881[(10)] = inst_15788__$1);

return statearr_15881;
})();
var statearr_15882_17882 = state_15825__$1;
(statearr_15882_17882[(2)] = null);

(statearr_15882_17882[(1)] = (2));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_15887 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15887[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_15887[(1)] = (1));

return statearr_15887;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_15825){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_15825);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e15889){var ex__12901__auto__ = e15889;
var statearr_15893_17883 = state_15825;
(statearr_15893_17883[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_15825[(4)]))){
var statearr_15894_17884 = state_15825;
(statearr_15894_17884[(1)] = cljs.core.first((state_15825[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17885 = state_15825;
state_15825 = G__17885;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_15895 = f__13482__auto__();
(statearr_15895[(6)] = c__13481__auto___17862);

return statearr_15895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
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
var G__15898 = arguments.length;
switch (G__15898) {
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
var c__13481__auto___17887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_15932){
var state_val_15934 = (state_15932[(1)]);
if((state_val_15934 === (7))){
var inst_15914 = (state_15932[(7)]);
var inst_15914__$1 = (state_15932[(2)]);
var inst_15915 = (inst_15914__$1 == null);
var inst_15916 = cljs.core.not(inst_15915);
var state_15932__$1 = (function (){var statearr_15937 = state_15932;
(statearr_15937[(7)] = inst_15914__$1);

return statearr_15937;
})();
if(inst_15916){
var statearr_15938_17892 = state_15932__$1;
(statearr_15938_17892[(1)] = (8));

} else {
var statearr_15939_17893 = state_15932__$1;
(statearr_15939_17893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (1))){
var inst_15906 = (0);
var state_15932__$1 = (function (){var statearr_15945 = state_15932;
(statearr_15945[(8)] = inst_15906);

return statearr_15945;
})();
var statearr_15946_17894 = state_15932__$1;
(statearr_15946_17894[(2)] = null);

(statearr_15946_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (4))){
var state_15932__$1 = state_15932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15932__$1,(7),ch);
} else {
if((state_val_15934 === (6))){
var inst_15927 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15950_17895 = state_15932__$1;
(statearr_15950_17895[(2)] = inst_15927);

(statearr_15950_17895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (3))){
var inst_15929 = (state_15932[(2)]);
var inst_15930 = cljs.core.async.close_BANG_(out);
var state_15932__$1 = (function (){var statearr_15952 = state_15932;
(statearr_15952[(9)] = inst_15929);

return statearr_15952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15932__$1,inst_15930);
} else {
if((state_val_15934 === (2))){
var inst_15906 = (state_15932[(8)]);
var inst_15908 = (inst_15906 < n);
var state_15932__$1 = state_15932;
if(cljs.core.truth_(inst_15908)){
var statearr_15957_17896 = state_15932__$1;
(statearr_15957_17896[(1)] = (4));

} else {
var statearr_15958_17897 = state_15932__$1;
(statearr_15958_17897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (11))){
var inst_15906 = (state_15932[(8)]);
var inst_15919 = (state_15932[(2)]);
var inst_15920 = (inst_15906 + (1));
var inst_15906__$1 = inst_15920;
var state_15932__$1 = (function (){var statearr_15961 = state_15932;
(statearr_15961[(10)] = inst_15919);

(statearr_15961[(8)] = inst_15906__$1);

return statearr_15961;
})();
var statearr_15962_17904 = state_15932__$1;
(statearr_15962_17904[(2)] = null);

(statearr_15962_17904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (9))){
var state_15932__$1 = state_15932;
var statearr_15966_17905 = state_15932__$1;
(statearr_15966_17905[(2)] = null);

(statearr_15966_17905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (5))){
var state_15932__$1 = state_15932;
var statearr_15968_17906 = state_15932__$1;
(statearr_15968_17906[(2)] = null);

(statearr_15968_17906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (10))){
var inst_15924 = (state_15932[(2)]);
var state_15932__$1 = state_15932;
var statearr_15969_17907 = state_15932__$1;
(statearr_15969_17907[(2)] = inst_15924);

(statearr_15969_17907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15934 === (8))){
var inst_15914 = (state_15932[(7)]);
var state_15932__$1 = state_15932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15932__$1,(11),out,inst_15914);
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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_15970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15970[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_15970[(1)] = (1));

return statearr_15970;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_15932){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_15932);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e15971){var ex__12901__auto__ = e15971;
var statearr_15972_17908 = state_15932;
(statearr_15972_17908[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_15932[(4)]))){
var statearr_15973_17915 = state_15932;
(statearr_15973_17915[(1)] = cljs.core.first((state_15932[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17916 = state_15932;
state_15932 = G__17916;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_15932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_15932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_15974 = f__13482__auto__();
(statearr_15974[(6)] = c__13481__auto___17887);

return statearr_15974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16000 = (function (f,ch,meta15985,_,fn1,meta16001){
this.f = f;
this.ch = ch;
this.meta15985 = meta15985;
this._ = _;
this.fn1 = fn1;
this.meta16001 = meta16001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16002,meta16001__$1){
var self__ = this;
var _16002__$1 = this;
return (new cljs.core.async.t_cljs$core$async16000(self__.f,self__.ch,self__.meta15985,self__._,self__.fn1,meta16001__$1));
}));

(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16002){
var self__ = this;
var _16002__$1 = this;
return self__.meta16001;
}));

(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15983_SHARP_){
var G__16009 = (((p1__15983_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15983_SHARP_) : self__.f.call(null,p1__15983_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16009) : f1.call(null,G__16009));
});
}));

(cljs.core.async.t_cljs$core$async16000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15985","meta15985",-947776530,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15984","cljs.core.async/t_cljs$core$async15984",-906241869,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16001","meta16001",-192001496,null)], null);
}));

(cljs.core.async.t_cljs$core$async16000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16000");

(cljs.core.async.t_cljs$core$async16000.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16000.
 */
cljs.core.async.__GT_t_cljs$core$async16000 = (function cljs$core$async$__GT_t_cljs$core$async16000(f,ch,meta15985,_,fn1,meta16001){
return (new cljs.core.async.t_cljs$core$async16000(f,ch,meta15985,_,fn1,meta16001));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15984 = (function (f,ch,meta15985){
this.f = f;
this.ch = ch;
this.meta15985 = meta15985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15986,meta15985__$1){
var self__ = this;
var _15986__$1 = this;
return (new cljs.core.async.t_cljs$core$async15984(self__.f,self__.ch,meta15985__$1));
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15986){
var self__ = this;
var _15986__$1 = this;
return self__.meta15985;
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16000(self__.f,self__.ch,self__.meta15985,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16010 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16010) : self__.f.call(null,G__16010));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15985","meta15985",-947776530,null)], null);
}));

(cljs.core.async.t_cljs$core$async15984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15984");

(cljs.core.async.t_cljs$core$async15984.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15984.
 */
cljs.core.async.__GT_t_cljs$core$async15984 = (function cljs$core$async$__GT_t_cljs$core$async15984(f,ch,meta15985){
return (new cljs.core.async.t_cljs$core$async15984(f,ch,meta15985));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15984(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16011 = (function (f,ch,meta16012){
this.f = f;
this.ch = ch;
this.meta16012 = meta16012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16013,meta16012__$1){
var self__ = this;
var _16013__$1 = this;
return (new cljs.core.async.t_cljs$core$async16011(self__.f,self__.ch,meta16012__$1));
}));

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16013){
var self__ = this;
var _16013__$1 = this;
return self__.meta16012;
}));

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16012","meta16012",296772455,null)], null);
}));

(cljs.core.async.t_cljs$core$async16011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16011");

(cljs.core.async.t_cljs$core$async16011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16011.
 */
cljs.core.async.__GT_t_cljs$core$async16011 = (function cljs$core$async$__GT_t_cljs$core$async16011(f,ch,meta16012){
return (new cljs.core.async.t_cljs$core$async16011(f,ch,meta16012));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16021 = (function (p,ch,meta16022){
this.p = p;
this.ch = ch;
this.meta16022 = meta16022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16023,meta16022__$1){
var self__ = this;
var _16023__$1 = this;
return (new cljs.core.async.t_cljs$core$async16021(self__.p,self__.ch,meta16022__$1));
}));

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16023){
var self__ = this;
var _16023__$1 = this;
return self__.meta16022;
}));

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16022","meta16022",-587338638,null)], null);
}));

(cljs.core.async.t_cljs$core$async16021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16021");

(cljs.core.async.t_cljs$core$async16021.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16021.
 */
cljs.core.async.__GT_t_cljs$core$async16021 = (function cljs$core$async$__GT_t_cljs$core$async16021(p,ch,meta16022){
return (new cljs.core.async.t_cljs$core$async16021(p,ch,meta16022));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16021(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16034 = arguments.length;
switch (G__16034) {
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
var c__13481__auto___17942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_16065){
var state_val_16067 = (state_16065[(1)]);
if((state_val_16067 === (7))){
var inst_16061 = (state_16065[(2)]);
var state_16065__$1 = state_16065;
var statearr_16070_17943 = state_16065__$1;
(statearr_16070_17943[(2)] = inst_16061);

(statearr_16070_17943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (1))){
var state_16065__$1 = state_16065;
var statearr_16074_17944 = state_16065__$1;
(statearr_16074_17944[(2)] = null);

(statearr_16074_17944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (4))){
var inst_16044 = (state_16065[(7)]);
var inst_16044__$1 = (state_16065[(2)]);
var inst_16045 = (inst_16044__$1 == null);
var state_16065__$1 = (function (){var statearr_16075 = state_16065;
(statearr_16075[(7)] = inst_16044__$1);

return statearr_16075;
})();
if(cljs.core.truth_(inst_16045)){
var statearr_16076_17945 = state_16065__$1;
(statearr_16076_17945[(1)] = (5));

} else {
var statearr_16077_17946 = state_16065__$1;
(statearr_16077_17946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (6))){
var inst_16044 = (state_16065[(7)]);
var inst_16049 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16044) : p.call(null,inst_16044));
var state_16065__$1 = state_16065;
if(cljs.core.truth_(inst_16049)){
var statearr_16078_17947 = state_16065__$1;
(statearr_16078_17947[(1)] = (8));

} else {
var statearr_16079_17948 = state_16065__$1;
(statearr_16079_17948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (3))){
var inst_16063 = (state_16065[(2)]);
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16065__$1,inst_16063);
} else {
if((state_val_16067 === (2))){
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16065__$1,(4),ch);
} else {
if((state_val_16067 === (11))){
var inst_16055 = (state_16065[(2)]);
var state_16065__$1 = state_16065;
var statearr_16080_17949 = state_16065__$1;
(statearr_16080_17949[(2)] = inst_16055);

(statearr_16080_17949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (9))){
var state_16065__$1 = state_16065;
var statearr_16081_17951 = state_16065__$1;
(statearr_16081_17951[(2)] = null);

(statearr_16081_17951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (5))){
var inst_16047 = cljs.core.async.close_BANG_(out);
var state_16065__$1 = state_16065;
var statearr_16082_17952 = state_16065__$1;
(statearr_16082_17952[(2)] = inst_16047);

(statearr_16082_17952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (10))){
var inst_16058 = (state_16065[(2)]);
var state_16065__$1 = (function (){var statearr_16083 = state_16065;
(statearr_16083[(8)] = inst_16058);

return statearr_16083;
})();
var statearr_16084_17953 = state_16065__$1;
(statearr_16084_17953[(2)] = null);

(statearr_16084_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16067 === (8))){
var inst_16044 = (state_16065[(7)]);
var state_16065__$1 = state_16065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16065__$1,(11),out,inst_16044);
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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_16088 = [null,null,null,null,null,null,null,null,null];
(statearr_16088[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_16088[(1)] = (1));

return statearr_16088;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_16065){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_16065);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e16089){var ex__12901__auto__ = e16089;
var statearr_16090_17955 = state_16065;
(statearr_16090_17955[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_16065[(4)]))){
var statearr_16091_17956 = state_16065;
(statearr_16091_17956[(1)] = cljs.core.first((state_16065[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17957 = state_16065;
state_16065 = G__17957;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_16065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_16065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_16095 = f__13482__auto__();
(statearr_16095[(6)] = c__13481__auto___17942);

return statearr_16095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16098 = arguments.length;
switch (G__16098) {
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
var c__13481__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_16184){
var state_val_16189 = (state_16184[(1)]);
if((state_val_16189 === (7))){
var inst_16174 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16192_17959 = state_16184__$1;
(statearr_16192_17959[(2)] = inst_16174);

(statearr_16192_17959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (20))){
var inst_16133 = (state_16184[(7)]);
var inst_16151 = (state_16184[(2)]);
var inst_16152 = cljs.core.next(inst_16133);
var inst_16118 = inst_16152;
var inst_16119 = null;
var inst_16120 = (0);
var inst_16121 = (0);
var state_16184__$1 = (function (){var statearr_16193 = state_16184;
(statearr_16193[(8)] = inst_16151);

(statearr_16193[(9)] = inst_16119);

(statearr_16193[(10)] = inst_16118);

(statearr_16193[(11)] = inst_16121);

(statearr_16193[(12)] = inst_16120);

return statearr_16193;
})();
var statearr_16194_17963 = state_16184__$1;
(statearr_16194_17963[(2)] = null);

(statearr_16194_17963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (1))){
var state_16184__$1 = state_16184;
var statearr_16195_17964 = state_16184__$1;
(statearr_16195_17964[(2)] = null);

(statearr_16195_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (4))){
var inst_16106 = (state_16184[(13)]);
var inst_16106__$1 = (state_16184[(2)]);
var inst_16107 = (inst_16106__$1 == null);
var state_16184__$1 = (function (){var statearr_16196 = state_16184;
(statearr_16196[(13)] = inst_16106__$1);

return statearr_16196;
})();
if(cljs.core.truth_(inst_16107)){
var statearr_16204_17966 = state_16184__$1;
(statearr_16204_17966[(1)] = (5));

} else {
var statearr_16211_17970 = state_16184__$1;
(statearr_16211_17970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (15))){
var state_16184__$1 = state_16184;
var statearr_16221_17971 = state_16184__$1;
(statearr_16221_17971[(2)] = null);

(statearr_16221_17971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (21))){
var state_16184__$1 = state_16184;
var statearr_16222_17972 = state_16184__$1;
(statearr_16222_17972[(2)] = null);

(statearr_16222_17972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (13))){
var inst_16119 = (state_16184[(9)]);
var inst_16118 = (state_16184[(10)]);
var inst_16121 = (state_16184[(11)]);
var inst_16120 = (state_16184[(12)]);
var inst_16129 = (state_16184[(2)]);
var inst_16130 = (inst_16121 + (1));
var tmp16212 = inst_16119;
var tmp16213 = inst_16118;
var tmp16214 = inst_16120;
var inst_16118__$1 = tmp16213;
var inst_16119__$1 = tmp16212;
var inst_16120__$1 = tmp16214;
var inst_16121__$1 = inst_16130;
var state_16184__$1 = (function (){var statearr_16223 = state_16184;
(statearr_16223[(9)] = inst_16119__$1);

(statearr_16223[(10)] = inst_16118__$1);

(statearr_16223[(11)] = inst_16121__$1);

(statearr_16223[(12)] = inst_16120__$1);

(statearr_16223[(14)] = inst_16129);

return statearr_16223;
})();
var statearr_16231_17981 = state_16184__$1;
(statearr_16231_17981[(2)] = null);

(statearr_16231_17981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (22))){
var state_16184__$1 = state_16184;
var statearr_16237_17982 = state_16184__$1;
(statearr_16237_17982[(2)] = null);

(statearr_16237_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (6))){
var inst_16106 = (state_16184[(13)]);
var inst_16116 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16106) : f.call(null,inst_16106));
var inst_16117 = cljs.core.seq(inst_16116);
var inst_16118 = inst_16117;
var inst_16119 = null;
var inst_16120 = (0);
var inst_16121 = (0);
var state_16184__$1 = (function (){var statearr_16239 = state_16184;
(statearr_16239[(9)] = inst_16119);

(statearr_16239[(10)] = inst_16118);

(statearr_16239[(11)] = inst_16121);

(statearr_16239[(12)] = inst_16120);

return statearr_16239;
})();
var statearr_16240_17984 = state_16184__$1;
(statearr_16240_17984[(2)] = null);

(statearr_16240_17984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (17))){
var inst_16133 = (state_16184[(7)]);
var inst_16140 = cljs.core.chunk_first(inst_16133);
var inst_16141 = cljs.core.chunk_rest(inst_16133);
var inst_16142 = cljs.core.count(inst_16140);
var inst_16118 = inst_16141;
var inst_16119 = inst_16140;
var inst_16120 = inst_16142;
var inst_16121 = (0);
var state_16184__$1 = (function (){var statearr_16244 = state_16184;
(statearr_16244[(9)] = inst_16119);

(statearr_16244[(10)] = inst_16118);

(statearr_16244[(11)] = inst_16121);

(statearr_16244[(12)] = inst_16120);

return statearr_16244;
})();
var statearr_16245_17985 = state_16184__$1;
(statearr_16245_17985[(2)] = null);

(statearr_16245_17985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (3))){
var inst_16176 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16184__$1,inst_16176);
} else {
if((state_val_16189 === (12))){
var inst_16160 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16254_17986 = state_16184__$1;
(statearr_16254_17986[(2)] = inst_16160);

(statearr_16254_17986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (2))){
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16184__$1,(4),in$);
} else {
if((state_val_16189 === (23))){
var inst_16172 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16255_17991 = state_16184__$1;
(statearr_16255_17991[(2)] = inst_16172);

(statearr_16255_17991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (19))){
var inst_16155 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16259_17993 = state_16184__$1;
(statearr_16259_17993[(2)] = inst_16155);

(statearr_16259_17993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (11))){
var inst_16118 = (state_16184[(10)]);
var inst_16133 = (state_16184[(7)]);
var inst_16133__$1 = cljs.core.seq(inst_16118);
var state_16184__$1 = (function (){var statearr_16264 = state_16184;
(statearr_16264[(7)] = inst_16133__$1);

return statearr_16264;
})();
if(inst_16133__$1){
var statearr_16267_18000 = state_16184__$1;
(statearr_16267_18000[(1)] = (14));

} else {
var statearr_16268_18001 = state_16184__$1;
(statearr_16268_18001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (9))){
var inst_16162 = (state_16184[(2)]);
var inst_16167 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16184__$1 = (function (){var statearr_16271 = state_16184;
(statearr_16271[(15)] = inst_16162);

return statearr_16271;
})();
if(cljs.core.truth_(inst_16167)){
var statearr_16273_18002 = state_16184__$1;
(statearr_16273_18002[(1)] = (21));

} else {
var statearr_16274_18004 = state_16184__$1;
(statearr_16274_18004[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (5))){
var inst_16109 = cljs.core.async.close_BANG_(out);
var state_16184__$1 = state_16184;
var statearr_16275_18008 = state_16184__$1;
(statearr_16275_18008[(2)] = inst_16109);

(statearr_16275_18008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (14))){
var inst_16133 = (state_16184[(7)]);
var inst_16138 = cljs.core.chunked_seq_QMARK_(inst_16133);
var state_16184__$1 = state_16184;
if(inst_16138){
var statearr_16276_18009 = state_16184__$1;
(statearr_16276_18009[(1)] = (17));

} else {
var statearr_16279_18010 = state_16184__$1;
(statearr_16279_18010[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (16))){
var inst_16158 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16281_18011 = state_16184__$1;
(statearr_16281_18011[(2)] = inst_16158);

(statearr_16281_18011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16189 === (10))){
var inst_16119 = (state_16184[(9)]);
var inst_16121 = (state_16184[(11)]);
var inst_16127 = cljs.core._nth(inst_16119,inst_16121);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16184__$1,(13),out,inst_16127);
} else {
if((state_val_16189 === (18))){
var inst_16133 = (state_16184[(7)]);
var inst_16149 = cljs.core.first(inst_16133);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16184__$1,(20),out,inst_16149);
} else {
if((state_val_16189 === (8))){
var inst_16121 = (state_16184[(11)]);
var inst_16120 = (state_16184[(12)]);
var inst_16123 = (inst_16121 < inst_16120);
var inst_16124 = inst_16123;
var state_16184__$1 = state_16184;
if(cljs.core.truth_(inst_16124)){
var statearr_16294_18014 = state_16184__$1;
(statearr_16294_18014[(1)] = (10));

} else {
var statearr_16295_18015 = state_16184__$1;
(statearr_16295_18015[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____0 = (function (){
var statearr_16300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16300[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__);

(statearr_16300[(1)] = (1));

return statearr_16300;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____1 = (function (state_16184){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_16184);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e16307){var ex__12901__auto__ = e16307;
var statearr_16308_18016 = state_16184;
(statearr_16308_18016[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_16184[(4)]))){
var statearr_16309_18017 = state_16184;
(statearr_16309_18017[(1)] = cljs.core.first((state_16184[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18018 = state_16184;
state_16184 = G__18018;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__ = function(state_16184){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____1.call(this,state_16184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12898__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_16311 = f__13482__auto__();
(statearr_16311[(6)] = c__13481__auto__);

return statearr_16311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

return c__13481__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16314 = arguments.length;
switch (G__16314) {
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
var G__16319 = arguments.length;
switch (G__16319) {
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
var G__16327 = arguments.length;
switch (G__16327) {
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
var c__13481__auto___18029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_16354){
var state_val_16355 = (state_16354[(1)]);
if((state_val_16355 === (7))){
var inst_16349 = (state_16354[(2)]);
var state_16354__$1 = state_16354;
var statearr_16356_18030 = state_16354__$1;
(statearr_16356_18030[(2)] = inst_16349);

(statearr_16356_18030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (1))){
var inst_16331 = null;
var state_16354__$1 = (function (){var statearr_16361 = state_16354;
(statearr_16361[(7)] = inst_16331);

return statearr_16361;
})();
var statearr_16364_18032 = state_16354__$1;
(statearr_16364_18032[(2)] = null);

(statearr_16364_18032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (4))){
var inst_16334 = (state_16354[(8)]);
var inst_16334__$1 = (state_16354[(2)]);
var inst_16335 = (inst_16334__$1 == null);
var inst_16336 = cljs.core.not(inst_16335);
var state_16354__$1 = (function (){var statearr_16368 = state_16354;
(statearr_16368[(8)] = inst_16334__$1);

return statearr_16368;
})();
if(inst_16336){
var statearr_16370_18036 = state_16354__$1;
(statearr_16370_18036[(1)] = (5));

} else {
var statearr_16371_18037 = state_16354__$1;
(statearr_16371_18037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (6))){
var state_16354__$1 = state_16354;
var statearr_16374_18038 = state_16354__$1;
(statearr_16374_18038[(2)] = null);

(statearr_16374_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (3))){
var inst_16351 = (state_16354[(2)]);
var inst_16352 = cljs.core.async.close_BANG_(out);
var state_16354__$1 = (function (){var statearr_16376 = state_16354;
(statearr_16376[(9)] = inst_16351);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16354__$1,inst_16352);
} else {
if((state_val_16355 === (2))){
var state_16354__$1 = state_16354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16354__$1,(4),ch);
} else {
if((state_val_16355 === (11))){
var inst_16334 = (state_16354[(8)]);
var inst_16343 = (state_16354[(2)]);
var inst_16331 = inst_16334;
var state_16354__$1 = (function (){var statearr_16378 = state_16354;
(statearr_16378[(10)] = inst_16343);

(statearr_16378[(7)] = inst_16331);

return statearr_16378;
})();
var statearr_16383_18040 = state_16354__$1;
(statearr_16383_18040[(2)] = null);

(statearr_16383_18040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (9))){
var inst_16334 = (state_16354[(8)]);
var state_16354__$1 = state_16354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16354__$1,(11),out,inst_16334);
} else {
if((state_val_16355 === (5))){
var inst_16331 = (state_16354[(7)]);
var inst_16334 = (state_16354[(8)]);
var inst_16338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16334,inst_16331);
var state_16354__$1 = state_16354;
if(inst_16338){
var statearr_16390_18042 = state_16354__$1;
(statearr_16390_18042[(1)] = (8));

} else {
var statearr_16391_18044 = state_16354__$1;
(statearr_16391_18044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (10))){
var inst_16346 = (state_16354[(2)]);
var state_16354__$1 = state_16354;
var statearr_16392_18045 = state_16354__$1;
(statearr_16392_18045[(2)] = inst_16346);

(statearr_16392_18045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16355 === (8))){
var inst_16331 = (state_16354[(7)]);
var tmp16384 = inst_16331;
var inst_16331__$1 = tmp16384;
var state_16354__$1 = (function (){var statearr_16393 = state_16354;
(statearr_16393[(7)] = inst_16331__$1);

return statearr_16393;
})();
var statearr_16394_18046 = state_16354__$1;
(statearr_16394_18046[(2)] = null);

(statearr_16394_18046[(1)] = (2));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_16395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16395[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_16395[(1)] = (1));

return statearr_16395;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_16354){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_16354);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e16400){var ex__12901__auto__ = e16400;
var statearr_16401_18047 = state_16354;
(statearr_16401_18047[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_16354[(4)]))){
var statearr_16406_18050 = state_16354;
(statearr_16406_18050[(1)] = cljs.core.first((state_16354[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18055 = state_16354;
state_16354 = G__18055;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_16354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_16354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_16411 = f__13482__auto__();
(statearr_16411[(6)] = c__13481__auto___18029);

return statearr_16411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16413 = arguments.length;
switch (G__16413) {
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
var c__13481__auto___18064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_16479){
var state_val_16480 = (state_16479[(1)]);
if((state_val_16480 === (7))){
var inst_16475 = (state_16479[(2)]);
var state_16479__$1 = state_16479;
var statearr_16489_18074 = state_16479__$1;
(statearr_16489_18074[(2)] = inst_16475);

(statearr_16489_18074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (1))){
var inst_16426 = (new Array(n));
var inst_16427 = inst_16426;
var inst_16428 = (0);
var state_16479__$1 = (function (){var statearr_16490 = state_16479;
(statearr_16490[(7)] = inst_16428);

(statearr_16490[(8)] = inst_16427);

return statearr_16490;
})();
var statearr_16495_18077 = state_16479__$1;
(statearr_16495_18077[(2)] = null);

(statearr_16495_18077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (4))){
var inst_16432 = (state_16479[(9)]);
var inst_16432__$1 = (state_16479[(2)]);
var inst_16434 = (inst_16432__$1 == null);
var inst_16435 = cljs.core.not(inst_16434);
var state_16479__$1 = (function (){var statearr_16504 = state_16479;
(statearr_16504[(9)] = inst_16432__$1);

return statearr_16504;
})();
if(inst_16435){
var statearr_16505_18078 = state_16479__$1;
(statearr_16505_18078[(1)] = (5));

} else {
var statearr_16506_18079 = state_16479__$1;
(statearr_16506_18079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (15))){
var inst_16467 = (state_16479[(2)]);
var state_16479__$1 = state_16479;
var statearr_16507_18080 = state_16479__$1;
(statearr_16507_18080[(2)] = inst_16467);

(statearr_16507_18080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (13))){
var state_16479__$1 = state_16479;
var statearr_16514_18081 = state_16479__$1;
(statearr_16514_18081[(2)] = null);

(statearr_16514_18081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (6))){
var inst_16428 = (state_16479[(7)]);
var inst_16463 = (inst_16428 > (0));
var state_16479__$1 = state_16479;
if(cljs.core.truth_(inst_16463)){
var statearr_16515_18091 = state_16479__$1;
(statearr_16515_18091[(1)] = (12));

} else {
var statearr_16516_18092 = state_16479__$1;
(statearr_16516_18092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (3))){
var inst_16477 = (state_16479[(2)]);
var state_16479__$1 = state_16479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16479__$1,inst_16477);
} else {
if((state_val_16480 === (12))){
var inst_16427 = (state_16479[(8)]);
var inst_16465 = cljs.core.vec(inst_16427);
var state_16479__$1 = state_16479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16479__$1,(15),out,inst_16465);
} else {
if((state_val_16480 === (2))){
var state_16479__$1 = state_16479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16479__$1,(4),ch);
} else {
if((state_val_16480 === (11))){
var inst_16452 = (state_16479[(2)]);
var inst_16456 = (new Array(n));
var inst_16427 = inst_16456;
var inst_16428 = (0);
var state_16479__$1 = (function (){var statearr_16520 = state_16479;
(statearr_16520[(10)] = inst_16452);

(statearr_16520[(7)] = inst_16428);

(statearr_16520[(8)] = inst_16427);

return statearr_16520;
})();
var statearr_16521_18099 = state_16479__$1;
(statearr_16521_18099[(2)] = null);

(statearr_16521_18099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (9))){
var inst_16427 = (state_16479[(8)]);
var inst_16450 = cljs.core.vec(inst_16427);
var state_16479__$1 = state_16479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16479__$1,(11),out,inst_16450);
} else {
if((state_val_16480 === (5))){
var inst_16439 = (state_16479[(11)]);
var inst_16428 = (state_16479[(7)]);
var inst_16432 = (state_16479[(9)]);
var inst_16427 = (state_16479[(8)]);
var inst_16437 = (inst_16427[inst_16428] = inst_16432);
var inst_16439__$1 = (inst_16428 + (1));
var inst_16442 = (inst_16439__$1 < n);
var state_16479__$1 = (function (){var statearr_16528 = state_16479;
(statearr_16528[(11)] = inst_16439__$1);

(statearr_16528[(12)] = inst_16437);

return statearr_16528;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16531_18101 = state_16479__$1;
(statearr_16531_18101[(1)] = (8));

} else {
var statearr_16532_18102 = state_16479__$1;
(statearr_16532_18102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (14))){
var inst_16470 = (state_16479[(2)]);
var inst_16471 = cljs.core.async.close_BANG_(out);
var state_16479__$1 = (function (){var statearr_16538 = state_16479;
(statearr_16538[(13)] = inst_16470);

return statearr_16538;
})();
var statearr_16541_18103 = state_16479__$1;
(statearr_16541_18103[(2)] = inst_16471);

(statearr_16541_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (10))){
var inst_16459 = (state_16479[(2)]);
var state_16479__$1 = state_16479;
var statearr_16545_18104 = state_16479__$1;
(statearr_16545_18104[(2)] = inst_16459);

(statearr_16545_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16480 === (8))){
var inst_16439 = (state_16479[(11)]);
var inst_16427 = (state_16479[(8)]);
var tmp16533 = inst_16427;
var inst_16427__$1 = tmp16533;
var inst_16428 = inst_16439;
var state_16479__$1 = (function (){var statearr_16549 = state_16479;
(statearr_16549[(7)] = inst_16428);

(statearr_16549[(8)] = inst_16427__$1);

return statearr_16549;
})();
var statearr_16550_18109 = state_16479__$1;
(statearr_16550_18109[(2)] = null);

(statearr_16550_18109[(1)] = (2));


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
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_16555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16555[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_16555[(1)] = (1));

return statearr_16555;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_16479){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_16479);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e16556){var ex__12901__auto__ = e16556;
var statearr_16557_18111 = state_16479;
(statearr_16557_18111[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_16479[(4)]))){
var statearr_16559_18112 = state_16479;
(statearr_16559_18112[(1)] = cljs.core.first((state_16479[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18113 = state_16479;
state_16479 = G__18113;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_16479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_16479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_16561 = f__13482__auto__();
(statearr_16561[(6)] = c__13481__auto___18064);

return statearr_16561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16577 = arguments.length;
switch (G__16577) {
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
var c__13481__auto___18125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_16626){
var state_val_16627 = (state_16626[(1)]);
if((state_val_16627 === (7))){
var inst_16622 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16631_18130 = state_16626__$1;
(statearr_16631_18130[(2)] = inst_16622);

(statearr_16631_18130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (1))){
var inst_16582 = [];
var inst_16583 = inst_16582;
var inst_16584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16626__$1 = (function (){var statearr_16632 = state_16626;
(statearr_16632[(7)] = inst_16583);

(statearr_16632[(8)] = inst_16584);

return statearr_16632;
})();
var statearr_16634_18131 = state_16626__$1;
(statearr_16634_18131[(2)] = null);

(statearr_16634_18131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (4))){
var inst_16587 = (state_16626[(9)]);
var inst_16587__$1 = (state_16626[(2)]);
var inst_16588 = (inst_16587__$1 == null);
var inst_16589 = cljs.core.not(inst_16588);
var state_16626__$1 = (function (){var statearr_16636 = state_16626;
(statearr_16636[(9)] = inst_16587__$1);

return statearr_16636;
})();
if(inst_16589){
var statearr_16637_18137 = state_16626__$1;
(statearr_16637_18137[(1)] = (5));

} else {
var statearr_16638_18138 = state_16626__$1;
(statearr_16638_18138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (15))){
var inst_16583 = (state_16626[(7)]);
var inst_16614 = cljs.core.vec(inst_16583);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16626__$1,(18),out,inst_16614);
} else {
if((state_val_16627 === (13))){
var inst_16609 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16654_18141 = state_16626__$1;
(statearr_16654_18141[(2)] = inst_16609);

(statearr_16654_18141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (6))){
var inst_16583 = (state_16626[(7)]);
var inst_16611 = inst_16583.length;
var inst_16612 = (inst_16611 > (0));
var state_16626__$1 = state_16626;
if(cljs.core.truth_(inst_16612)){
var statearr_16656_18143 = state_16626__$1;
(statearr_16656_18143[(1)] = (15));

} else {
var statearr_16657_18144 = state_16626__$1;
(statearr_16657_18144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (17))){
var inst_16619 = (state_16626[(2)]);
var inst_16620 = cljs.core.async.close_BANG_(out);
var state_16626__$1 = (function (){var statearr_16658 = state_16626;
(statearr_16658[(10)] = inst_16619);

return statearr_16658;
})();
var statearr_16659_18145 = state_16626__$1;
(statearr_16659_18145[(2)] = inst_16620);

(statearr_16659_18145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (3))){
var inst_16624 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16626__$1,inst_16624);
} else {
if((state_val_16627 === (12))){
var inst_16583 = (state_16626[(7)]);
var inst_16602 = cljs.core.vec(inst_16583);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16626__$1,(14),out,inst_16602);
} else {
if((state_val_16627 === (2))){
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16626__$1,(4),ch);
} else {
if((state_val_16627 === (11))){
var inst_16583 = (state_16626[(7)]);
var inst_16587 = (state_16626[(9)]);
var inst_16591 = (state_16626[(11)]);
var inst_16599 = inst_16583.push(inst_16587);
var tmp16660 = inst_16583;
var inst_16583__$1 = tmp16660;
var inst_16584 = inst_16591;
var state_16626__$1 = (function (){var statearr_16666 = state_16626;
(statearr_16666[(7)] = inst_16583__$1);

(statearr_16666[(8)] = inst_16584);

(statearr_16666[(12)] = inst_16599);

return statearr_16666;
})();
var statearr_16667_18146 = state_16626__$1;
(statearr_16667_18146[(2)] = null);

(statearr_16667_18146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (9))){
var inst_16584 = (state_16626[(8)]);
var inst_16595 = cljs.core.keyword_identical_QMARK_(inst_16584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16626__$1 = state_16626;
var statearr_16668_18147 = state_16626__$1;
(statearr_16668_18147[(2)] = inst_16595);

(statearr_16668_18147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (5))){
var inst_16584 = (state_16626[(8)]);
var inst_16592 = (state_16626[(13)]);
var inst_16587 = (state_16626[(9)]);
var inst_16591 = (state_16626[(11)]);
var inst_16591__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16587) : f.call(null,inst_16587));
var inst_16592__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16591__$1,inst_16584);
var state_16626__$1 = (function (){var statearr_16669 = state_16626;
(statearr_16669[(13)] = inst_16592__$1);

(statearr_16669[(11)] = inst_16591__$1);

return statearr_16669;
})();
if(inst_16592__$1){
var statearr_16670_18151 = state_16626__$1;
(statearr_16670_18151[(1)] = (8));

} else {
var statearr_16671_18152 = state_16626__$1;
(statearr_16671_18152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (14))){
var inst_16587 = (state_16626[(9)]);
var inst_16591 = (state_16626[(11)]);
var inst_16604 = (state_16626[(2)]);
var inst_16605 = [];
var inst_16606 = inst_16605.push(inst_16587);
var inst_16583 = inst_16605;
var inst_16584 = inst_16591;
var state_16626__$1 = (function (){var statearr_16672 = state_16626;
(statearr_16672[(14)] = inst_16604);

(statearr_16672[(15)] = inst_16606);

(statearr_16672[(7)] = inst_16583);

(statearr_16672[(8)] = inst_16584);

return statearr_16672;
})();
var statearr_16673_18154 = state_16626__$1;
(statearr_16673_18154[(2)] = null);

(statearr_16673_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (16))){
var state_16626__$1 = state_16626;
var statearr_16674_18155 = state_16626__$1;
(statearr_16674_18155[(2)] = null);

(statearr_16674_18155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (10))){
var inst_16597 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
if(cljs.core.truth_(inst_16597)){
var statearr_16675_18156 = state_16626__$1;
(statearr_16675_18156[(1)] = (11));

} else {
var statearr_16676_18157 = state_16626__$1;
(statearr_16676_18157[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (18))){
var inst_16616 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16677_18158 = state_16626__$1;
(statearr_16677_18158[(2)] = inst_16616);

(statearr_16677_18158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16627 === (8))){
var inst_16592 = (state_16626[(13)]);
var state_16626__$1 = state_16626;
var statearr_16679_18159 = state_16626__$1;
(statearr_16679_18159[(2)] = inst_16592);

(statearr_16679_18159[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12898__auto__ = null;
var cljs$core$async$state_machine__12898__auto____0 = (function (){
var statearr_16681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16681[(0)] = cljs$core$async$state_machine__12898__auto__);

(statearr_16681[(1)] = (1));

return statearr_16681;
});
var cljs$core$async$state_machine__12898__auto____1 = (function (state_16626){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_16626);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e16682){var ex__12901__auto__ = e16682;
var statearr_16683_18161 = state_16626;
(statearr_16683_18161[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_16626[(4)]))){
var statearr_16690_18162 = state_16626;
(statearr_16690_18162[(1)] = cljs.core.first((state_16626[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18163 = state_16626;
state_16626 = G__18163;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
cljs$core$async$state_machine__12898__auto__ = function(state_16626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12898__auto____1.call(this,state_16626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12898__auto____0;
cljs$core$async$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12898__auto____1;
return cljs$core$async$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_16699 = f__13482__auto__();
(statearr_16699[(6)] = c__13481__auto___18125);

return statearr_16699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
