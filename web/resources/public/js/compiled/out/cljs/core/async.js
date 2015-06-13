// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t29399 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29399 = (function (f,fn_handler,meta29400){
this.f = f;
this.fn_handler = fn_handler;
this.meta29400 = meta29400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29399.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29401){
var self__ = this;
var _29401__$1 = this;
return self__.meta29400;
});

cljs.core.async.t29399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29401,meta29400__$1){
var self__ = this;
var _29401__$1 = this;
return (new cljs.core.async.t29399(self__.f,self__.fn_handler,meta29400__$1));
});

cljs.core.async.t29399.cljs$lang$type = true;

cljs.core.async.t29399.cljs$lang$ctorStr = "cljs.core.async/t29399";

cljs.core.async.t29399.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29399");
});

cljs.core.async.__GT_t29399 = (function cljs$core$async$fn_handler_$___GT_t29399(f__$1,fn_handler__$1,meta29400){
return (new cljs.core.async.t29399(f__$1,fn_handler__$1,meta29400));
});

}

return (new cljs.core.async.t29399(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__29403 = buff;
if(G__29403){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__29403.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29403.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29403);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29403);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__29405 = arguments.length;
switch (G__29405) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__29408 = arguments.length;
switch (G__29408) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29410 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29410);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29410,ret){
return (function (){
return fn1.call(null,val_29410);
});})(val_29410,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__29412 = arguments.length;
switch (G__29412) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19001__auto___29414 = n;
var x_29415 = (0);
while(true){
if((x_29415 < n__19001__auto___29414)){
(a[x_29415] = (0));

var G__29416 = (x_29415 + (1));
x_29415 = G__29416;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29417 = (i + (1));
i = G__29417;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29421 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29421 = (function (flag,alt_flag,meta29422){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29422 = meta29422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29421.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29423){
var self__ = this;
var _29423__$1 = this;
return self__.meta29422;
});})(flag))
;

cljs.core.async.t29421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29423,meta29422__$1){
var self__ = this;
var _29423__$1 = this;
return (new cljs.core.async.t29421(self__.flag,self__.alt_flag,meta29422__$1));
});})(flag))
;

cljs.core.async.t29421.cljs$lang$type = true;

cljs.core.async.t29421.cljs$lang$ctorStr = "cljs.core.async/t29421";

cljs.core.async.t29421.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29421");
});})(flag))
;

cljs.core.async.__GT_t29421 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t29421(flag__$1,alt_flag__$1,meta29422){
return (new cljs.core.async.t29421(flag__$1,alt_flag__$1,meta29422));
});})(flag))
;

}

return (new cljs.core.async.t29421(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t29427 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29427 = (function (cb,flag,alt_handler,meta29428){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29428 = meta29428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29427.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29429){
var self__ = this;
var _29429__$1 = this;
return self__.meta29428;
});

cljs.core.async.t29427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29429,meta29428__$1){
var self__ = this;
var _29429__$1 = this;
return (new cljs.core.async.t29427(self__.cb,self__.flag,self__.alt_handler,meta29428__$1));
});

cljs.core.async.t29427.cljs$lang$type = true;

cljs.core.async.t29427.cljs$lang$ctorStr = "cljs.core.async/t29427";

cljs.core.async.t29427.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t29427");
});

cljs.core.async.__GT_t29427 = (function cljs$core$async$alt_handler_$___GT_t29427(cb__$1,flag__$1,alt_handler__$1,meta29428){
return (new cljs.core.async.t29427(cb__$1,flag__$1,alt_handler__$1,meta29428));
});

}

return (new cljs.core.async.t29427(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29430_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29430_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29431_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29431_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18116__auto__ = wport;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29432 = (i + (1));
i = G__29432;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18116__auto__ = ret;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18104__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18104__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19156__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19156__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29435){
var map__29436 = p__29435;
var map__29436__$1 = ((cljs.core.seq_QMARK_.call(null,map__29436))?cljs.core.apply.call(null,cljs.core.hash_map,map__29436):map__29436);
var opts = map__29436__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29433){
var G__29434 = cljs.core.first.call(null,seq29433);
var seq29433__$1 = cljs.core.next.call(null,seq29433);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29434,seq29433__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__29438 = arguments.length;
switch (G__29438) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22921__auto___29487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___29487){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___29487){
return (function (state_29462){
var state_val_29463 = (state_29462[(1)]);
if((state_val_29463 === (7))){
var inst_29458 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29464_29488 = state_29462__$1;
(statearr_29464_29488[(2)] = inst_29458);

(statearr_29464_29488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (1))){
var state_29462__$1 = state_29462;
var statearr_29465_29489 = state_29462__$1;
(statearr_29465_29489[(2)] = null);

(statearr_29465_29489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (4))){
var inst_29441 = (state_29462[(7)]);
var inst_29441__$1 = (state_29462[(2)]);
var inst_29442 = (inst_29441__$1 == null);
var state_29462__$1 = (function (){var statearr_29466 = state_29462;
(statearr_29466[(7)] = inst_29441__$1);

return statearr_29466;
})();
if(cljs.core.truth_(inst_29442)){
var statearr_29467_29490 = state_29462__$1;
(statearr_29467_29490[(1)] = (5));

} else {
var statearr_29468_29491 = state_29462__$1;
(statearr_29468_29491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (13))){
var state_29462__$1 = state_29462;
var statearr_29469_29492 = state_29462__$1;
(statearr_29469_29492[(2)] = null);

(statearr_29469_29492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (6))){
var inst_29441 = (state_29462[(7)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29462__$1,(11),to,inst_29441);
} else {
if((state_val_29463 === (3))){
var inst_29460 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29462__$1,inst_29460);
} else {
if((state_val_29463 === (12))){
var state_29462__$1 = state_29462;
var statearr_29470_29493 = state_29462__$1;
(statearr_29470_29493[(2)] = null);

(statearr_29470_29493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (2))){
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29462__$1,(4),from);
} else {
if((state_val_29463 === (11))){
var inst_29451 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
if(cljs.core.truth_(inst_29451)){
var statearr_29471_29494 = state_29462__$1;
(statearr_29471_29494[(1)] = (12));

} else {
var statearr_29472_29495 = state_29462__$1;
(statearr_29472_29495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (9))){
var state_29462__$1 = state_29462;
var statearr_29473_29496 = state_29462__$1;
(statearr_29473_29496[(2)] = null);

(statearr_29473_29496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (5))){
var state_29462__$1 = state_29462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29474_29497 = state_29462__$1;
(statearr_29474_29497[(1)] = (8));

} else {
var statearr_29475_29498 = state_29462__$1;
(statearr_29475_29498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (14))){
var inst_29456 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29476_29499 = state_29462__$1;
(statearr_29476_29499[(2)] = inst_29456);

(statearr_29476_29499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (10))){
var inst_29448 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29477_29500 = state_29462__$1;
(statearr_29477_29500[(2)] = inst_29448);

(statearr_29477_29500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (8))){
var inst_29445 = cljs.core.async.close_BANG_.call(null,to);
var state_29462__$1 = state_29462;
var statearr_29478_29501 = state_29462__$1;
(statearr_29478_29501[(2)] = inst_29445);

(statearr_29478_29501[(1)] = (10));


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
});})(c__22921__auto___29487))
;
return ((function (switch__22859__auto__,c__22921__auto___29487){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_29482 = [null,null,null,null,null,null,null,null];
(statearr_29482[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_29482[(1)] = (1));

return statearr_29482;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_29462){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29483){if((e29483 instanceof Object)){
var ex__22863__auto__ = e29483;
var statearr_29484_29502 = state_29462;
(statearr_29484_29502[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29503 = state_29462;
state_29462 = G__29503;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_29462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_29462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___29487))
})();
var state__22923__auto__ = (function (){var statearr_29485 = f__22922__auto__.call(null);
(statearr_29485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29487);

return statearr_29485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___29487))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29687){
var vec__29688 = p__29687;
var v = cljs.core.nth.call(null,vec__29688,(0),null);
var p = cljs.core.nth.call(null,vec__29688,(1),null);
var job = vec__29688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22921__auto___29870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results){
return (function (state_29693){
var state_val_29694 = (state_29693[(1)]);
if((state_val_29694 === (2))){
var inst_29690 = (state_29693[(2)]);
var inst_29691 = cljs.core.async.close_BANG_.call(null,res);
var state_29693__$1 = (function (){var statearr_29695 = state_29693;
(statearr_29695[(7)] = inst_29690);

return statearr_29695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29693__$1,inst_29691);
} else {
if((state_val_29694 === (1))){
var state_29693__$1 = state_29693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29693__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results))
;
return ((function (switch__22859__auto__,c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_29699 = [null,null,null,null,null,null,null,null];
(statearr_29699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__);

(statearr_29699[(1)] = (1));

return statearr_29699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1 = (function (state_29693){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29700){if((e29700 instanceof Object)){
var ex__22863__auto__ = e29700;
var statearr_29701_29871 = state_29693;
(statearr_29701_29871[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29872 = state_29693;
state_29693 = G__29872;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = function(state_29693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1.call(this,state_29693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results))
})();
var state__22923__auto__ = (function (){var statearr_29702 = f__22922__auto__.call(null);
(statearr_29702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29870);

return statearr_29702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___29870,res,vec__29688,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29703){
var vec__29704 = p__29703;
var v = cljs.core.nth.call(null,vec__29704,(0),null);
var p = cljs.core.nth.call(null,vec__29704,(1),null);
var job = vec__29704;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19001__auto___29873 = n;
var __29874 = (0);
while(true){
if((__29874 < n__19001__auto___29873)){
var G__29705_29875 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29705_29875) {
case "async":
var c__22921__auto___29877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29874,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (__29874,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function (state_29718){
var state_val_29719 = (state_29718[(1)]);
if((state_val_29719 === (7))){
var inst_29714 = (state_29718[(2)]);
var state_29718__$1 = state_29718;
var statearr_29720_29878 = state_29718__$1;
(statearr_29720_29878[(2)] = inst_29714);

(statearr_29720_29878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (6))){
var state_29718__$1 = state_29718;
var statearr_29721_29879 = state_29718__$1;
(statearr_29721_29879[(2)] = null);

(statearr_29721_29879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (5))){
var state_29718__$1 = state_29718;
var statearr_29722_29880 = state_29718__$1;
(statearr_29722_29880[(2)] = null);

(statearr_29722_29880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (4))){
var inst_29708 = (state_29718[(2)]);
var inst_29709 = async.call(null,inst_29708);
var state_29718__$1 = state_29718;
if(cljs.core.truth_(inst_29709)){
var statearr_29723_29881 = state_29718__$1;
(statearr_29723_29881[(1)] = (5));

} else {
var statearr_29724_29882 = state_29718__$1;
(statearr_29724_29882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29719 === (3))){
var inst_29716 = (state_29718[(2)]);
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29718__$1,inst_29716);
} else {
if((state_val_29719 === (2))){
var state_29718__$1 = state_29718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29718__$1,(4),jobs);
} else {
if((state_val_29719 === (1))){
var state_29718__$1 = state_29718;
var statearr_29725_29883 = state_29718__$1;
(statearr_29725_29883[(2)] = null);

(statearr_29725_29883[(1)] = (2));


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
});})(__29874,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
;
return ((function (__29874,switch__22859__auto__,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null];
(statearr_29729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1 = (function (state_29718){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object)){
var ex__22863__auto__ = e29730;
var statearr_29731_29884 = state_29718;
(statearr_29731_29884[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29885 = state_29718;
state_29718 = G__29885;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = function(state_29718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1.call(this,state_29718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__;
})()
;})(__29874,switch__22859__auto__,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
})();
var state__22923__auto__ = (function (){var statearr_29732 = f__22922__auto__.call(null);
(statearr_29732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29877);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(__29874,c__22921__auto___29877,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
);


break;
case "compute":
var c__22921__auto___29886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29874,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (__29874,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function (state_29745){
var state_val_29746 = (state_29745[(1)]);
if((state_val_29746 === (7))){
var inst_29741 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
var statearr_29747_29887 = state_29745__$1;
(statearr_29747_29887[(2)] = inst_29741);

(statearr_29747_29887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (6))){
var state_29745__$1 = state_29745;
var statearr_29748_29888 = state_29745__$1;
(statearr_29748_29888[(2)] = null);

(statearr_29748_29888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (5))){
var state_29745__$1 = state_29745;
var statearr_29749_29889 = state_29745__$1;
(statearr_29749_29889[(2)] = null);

(statearr_29749_29889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (4))){
var inst_29735 = (state_29745[(2)]);
var inst_29736 = process.call(null,inst_29735);
var state_29745__$1 = state_29745;
if(cljs.core.truth_(inst_29736)){
var statearr_29750_29890 = state_29745__$1;
(statearr_29750_29890[(1)] = (5));

} else {
var statearr_29751_29891 = state_29745__$1;
(statearr_29751_29891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29746 === (3))){
var inst_29743 = (state_29745[(2)]);
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29745__$1,inst_29743);
} else {
if((state_val_29746 === (2))){
var state_29745__$1 = state_29745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29745__$1,(4),jobs);
} else {
if((state_val_29746 === (1))){
var state_29745__$1 = state_29745;
var statearr_29752_29892 = state_29745__$1;
(statearr_29752_29892[(2)] = null);

(statearr_29752_29892[(1)] = (2));


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
});})(__29874,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
;
return ((function (__29874,switch__22859__auto__,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_29756 = [null,null,null,null,null,null,null];
(statearr_29756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__);

(statearr_29756[(1)] = (1));

return statearr_29756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1 = (function (state_29745){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object)){
var ex__22863__auto__ = e29757;
var statearr_29758_29893 = state_29745;
(statearr_29758_29893[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29894 = state_29745;
state_29745 = G__29894;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = function(state_29745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1.call(this,state_29745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__;
})()
;})(__29874,switch__22859__auto__,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
})();
var state__22923__auto__ = (function (){var statearr_29759 = f__22922__auto__.call(null);
(statearr_29759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29886);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(__29874,c__22921__auto___29886,G__29705_29875,n__19001__auto___29873,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29895 = (__29874 + (1));
__29874 = G__29895;
continue;
} else {
}
break;
}

var c__22921__auto___29896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___29896,jobs,results,process,async){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___29896,jobs,results,process,async){
return (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (9))){
var inst_29774 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29783 = state_29781;
(statearr_29783[(7)] = inst_29774);

return statearr_29783;
})();
var statearr_29784_29897 = state_29781__$1;
(statearr_29784_29897[(2)] = null);

(statearr_29784_29897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (8))){
var inst_29767 = (state_29781[(8)]);
var inst_29772 = (state_29781[(2)]);
var state_29781__$1 = (function (){var statearr_29785 = state_29781;
(statearr_29785[(9)] = inst_29772);

return statearr_29785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29781__$1,(9),results,inst_29767);
} else {
if((state_val_29782 === (7))){
var inst_29777 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
var statearr_29786_29898 = state_29781__$1;
(statearr_29786_29898[(2)] = inst_29777);

(statearr_29786_29898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (6))){
var inst_29767 = (state_29781[(8)]);
var inst_29762 = (state_29781[(10)]);
var inst_29767__$1 = cljs.core.async.chan.call(null,(1));
var inst_29768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29769 = [inst_29762,inst_29767__$1];
var inst_29770 = (new cljs.core.PersistentVector(null,2,(5),inst_29768,inst_29769,null));
var state_29781__$1 = (function (){var statearr_29787 = state_29781;
(statearr_29787[(8)] = inst_29767__$1);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29781__$1,(8),jobs,inst_29770);
} else {
if((state_val_29782 === (5))){
var inst_29765 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29781__$1 = state_29781;
var statearr_29788_29899 = state_29781__$1;
(statearr_29788_29899[(2)] = inst_29765);

(statearr_29788_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (4))){
var inst_29762 = (state_29781[(10)]);
var inst_29762__$1 = (state_29781[(2)]);
var inst_29763 = (inst_29762__$1 == null);
var state_29781__$1 = (function (){var statearr_29789 = state_29781;
(statearr_29789[(10)] = inst_29762__$1);

return statearr_29789;
})();
if(cljs.core.truth_(inst_29763)){
var statearr_29790_29900 = state_29781__$1;
(statearr_29790_29900[(1)] = (5));

} else {
var statearr_29791_29901 = state_29781__$1;
(statearr_29791_29901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29782 === (3))){
var inst_29779 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29781__$1,inst_29779);
} else {
if((state_val_29782 === (2))){
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29781__$1,(4),from);
} else {
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
var statearr_29792_29902 = state_29781__$1;
(statearr_29792_29902[(2)] = null);

(statearr_29792_29902[(1)] = (2));


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
});})(c__22921__auto___29896,jobs,results,process,async))
;
return ((function (switch__22859__auto__,c__22921__auto___29896,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_29796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__);

(statearr_29796[(1)] = (1));

return statearr_29796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1 = (function (state_29781){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29797){if((e29797 instanceof Object)){
var ex__22863__auto__ = e29797;
var statearr_29798_29903 = state_29781;
(statearr_29798_29903[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29904 = state_29781;
state_29781 = G__29904;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___29896,jobs,results,process,async))
})();
var state__22923__auto__ = (function (){var statearr_29799 = f__22922__auto__.call(null);
(statearr_29799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29896);

return statearr_29799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___29896,jobs,results,process,async))
);


var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__,jobs,results,process,async){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__,jobs,results,process,async){
return (function (state_29837){
var state_val_29838 = (state_29837[(1)]);
if((state_val_29838 === (7))){
var inst_29833 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29839_29905 = state_29837__$1;
(statearr_29839_29905[(2)] = inst_29833);

(statearr_29839_29905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (20))){
var state_29837__$1 = state_29837;
var statearr_29840_29906 = state_29837__$1;
(statearr_29840_29906[(2)] = null);

(statearr_29840_29906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (1))){
var state_29837__$1 = state_29837;
var statearr_29841_29907 = state_29837__$1;
(statearr_29841_29907[(2)] = null);

(statearr_29841_29907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (4))){
var inst_29802 = (state_29837[(7)]);
var inst_29802__$1 = (state_29837[(2)]);
var inst_29803 = (inst_29802__$1 == null);
var state_29837__$1 = (function (){var statearr_29842 = state_29837;
(statearr_29842[(7)] = inst_29802__$1);

return statearr_29842;
})();
if(cljs.core.truth_(inst_29803)){
var statearr_29843_29908 = state_29837__$1;
(statearr_29843_29908[(1)] = (5));

} else {
var statearr_29844_29909 = state_29837__$1;
(statearr_29844_29909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (15))){
var inst_29815 = (state_29837[(8)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29837__$1,(18),to,inst_29815);
} else {
if((state_val_29838 === (21))){
var inst_29828 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29845_29910 = state_29837__$1;
(statearr_29845_29910[(2)] = inst_29828);

(statearr_29845_29910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (13))){
var inst_29830 = (state_29837[(2)]);
var state_29837__$1 = (function (){var statearr_29846 = state_29837;
(statearr_29846[(9)] = inst_29830);

return statearr_29846;
})();
var statearr_29847_29911 = state_29837__$1;
(statearr_29847_29911[(2)] = null);

(statearr_29847_29911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (6))){
var inst_29802 = (state_29837[(7)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29837__$1,(11),inst_29802);
} else {
if((state_val_29838 === (17))){
var inst_29823 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
if(cljs.core.truth_(inst_29823)){
var statearr_29848_29912 = state_29837__$1;
(statearr_29848_29912[(1)] = (19));

} else {
var statearr_29849_29913 = state_29837__$1;
(statearr_29849_29913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (3))){
var inst_29835 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29837__$1,inst_29835);
} else {
if((state_val_29838 === (12))){
var inst_29812 = (state_29837[(10)]);
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29837__$1,(14),inst_29812);
} else {
if((state_val_29838 === (2))){
var state_29837__$1 = state_29837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29837__$1,(4),results);
} else {
if((state_val_29838 === (19))){
var state_29837__$1 = state_29837;
var statearr_29850_29914 = state_29837__$1;
(statearr_29850_29914[(2)] = null);

(statearr_29850_29914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (11))){
var inst_29812 = (state_29837[(2)]);
var state_29837__$1 = (function (){var statearr_29851 = state_29837;
(statearr_29851[(10)] = inst_29812);

return statearr_29851;
})();
var statearr_29852_29915 = state_29837__$1;
(statearr_29852_29915[(2)] = null);

(statearr_29852_29915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (9))){
var state_29837__$1 = state_29837;
var statearr_29853_29916 = state_29837__$1;
(statearr_29853_29916[(2)] = null);

(statearr_29853_29916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (5))){
var state_29837__$1 = state_29837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29854_29917 = state_29837__$1;
(statearr_29854_29917[(1)] = (8));

} else {
var statearr_29855_29918 = state_29837__$1;
(statearr_29855_29918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (14))){
var inst_29815 = (state_29837[(8)]);
var inst_29817 = (state_29837[(11)]);
var inst_29815__$1 = (state_29837[(2)]);
var inst_29816 = (inst_29815__$1 == null);
var inst_29817__$1 = cljs.core.not.call(null,inst_29816);
var state_29837__$1 = (function (){var statearr_29856 = state_29837;
(statearr_29856[(8)] = inst_29815__$1);

(statearr_29856[(11)] = inst_29817__$1);

return statearr_29856;
})();
if(inst_29817__$1){
var statearr_29857_29919 = state_29837__$1;
(statearr_29857_29919[(1)] = (15));

} else {
var statearr_29858_29920 = state_29837__$1;
(statearr_29858_29920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (16))){
var inst_29817 = (state_29837[(11)]);
var state_29837__$1 = state_29837;
var statearr_29859_29921 = state_29837__$1;
(statearr_29859_29921[(2)] = inst_29817);

(statearr_29859_29921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (10))){
var inst_29809 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29860_29922 = state_29837__$1;
(statearr_29860_29922[(2)] = inst_29809);

(statearr_29860_29922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (18))){
var inst_29820 = (state_29837[(2)]);
var state_29837__$1 = state_29837;
var statearr_29861_29923 = state_29837__$1;
(statearr_29861_29923[(2)] = inst_29820);

(statearr_29861_29923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29838 === (8))){
var inst_29806 = cljs.core.async.close_BANG_.call(null,to);
var state_29837__$1 = state_29837;
var statearr_29862_29924 = state_29837__$1;
(statearr_29862_29924[(2)] = inst_29806);

(statearr_29862_29924[(1)] = (10));


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
});})(c__22921__auto__,jobs,results,process,async))
;
return ((function (switch__22859__auto__,c__22921__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_29866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__);

(statearr_29866[(1)] = (1));

return statearr_29866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1 = (function (state_29837){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29867){if((e29867 instanceof Object)){
var ex__22863__auto__ = e29867;
var statearr_29868_29925 = state_29837;
(statearr_29868_29925[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29926 = state_29837;
state_29837 = G__29926;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__ = function(state_29837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1.call(this,state_29837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__,jobs,results,process,async))
})();
var state__22923__auto__ = (function (){var statearr_29869 = f__22922__auto__.call(null);
(statearr_29869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__,jobs,results,process,async))
);

return c__22921__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__29928 = arguments.length;
switch (G__29928) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__29931 = arguments.length;
switch (G__29931) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__29934 = arguments.length;
switch (G__29934) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22921__auto___29986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___29986,tc,fc){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___29986,tc,fc){
return (function (state_29960){
var state_val_29961 = (state_29960[(1)]);
if((state_val_29961 === (7))){
var inst_29956 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
var statearr_29962_29987 = state_29960__$1;
(statearr_29962_29987[(2)] = inst_29956);

(statearr_29962_29987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (1))){
var state_29960__$1 = state_29960;
var statearr_29963_29988 = state_29960__$1;
(statearr_29963_29988[(2)] = null);

(statearr_29963_29988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (4))){
var inst_29937 = (state_29960[(7)]);
var inst_29937__$1 = (state_29960[(2)]);
var inst_29938 = (inst_29937__$1 == null);
var state_29960__$1 = (function (){var statearr_29964 = state_29960;
(statearr_29964[(7)] = inst_29937__$1);

return statearr_29964;
})();
if(cljs.core.truth_(inst_29938)){
var statearr_29965_29989 = state_29960__$1;
(statearr_29965_29989[(1)] = (5));

} else {
var statearr_29966_29990 = state_29960__$1;
(statearr_29966_29990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (13))){
var state_29960__$1 = state_29960;
var statearr_29967_29991 = state_29960__$1;
(statearr_29967_29991[(2)] = null);

(statearr_29967_29991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (6))){
var inst_29937 = (state_29960[(7)]);
var inst_29943 = p.call(null,inst_29937);
var state_29960__$1 = state_29960;
if(cljs.core.truth_(inst_29943)){
var statearr_29968_29992 = state_29960__$1;
(statearr_29968_29992[(1)] = (9));

} else {
var statearr_29969_29993 = state_29960__$1;
(statearr_29969_29993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (3))){
var inst_29958 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29960__$1,inst_29958);
} else {
if((state_val_29961 === (12))){
var state_29960__$1 = state_29960;
var statearr_29970_29994 = state_29960__$1;
(statearr_29970_29994[(2)] = null);

(statearr_29970_29994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (2))){
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29960__$1,(4),ch);
} else {
if((state_val_29961 === (11))){
var inst_29937 = (state_29960[(7)]);
var inst_29947 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29960__$1,(8),inst_29947,inst_29937);
} else {
if((state_val_29961 === (9))){
var state_29960__$1 = state_29960;
var statearr_29971_29995 = state_29960__$1;
(statearr_29971_29995[(2)] = tc);

(statearr_29971_29995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (5))){
var inst_29940 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29941 = cljs.core.async.close_BANG_.call(null,fc);
var state_29960__$1 = (function (){var statearr_29972 = state_29960;
(statearr_29972[(8)] = inst_29940);

return statearr_29972;
})();
var statearr_29973_29996 = state_29960__$1;
(statearr_29973_29996[(2)] = inst_29941);

(statearr_29973_29996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (14))){
var inst_29954 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
var statearr_29974_29997 = state_29960__$1;
(statearr_29974_29997[(2)] = inst_29954);

(statearr_29974_29997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (10))){
var state_29960__$1 = state_29960;
var statearr_29975_29998 = state_29960__$1;
(statearr_29975_29998[(2)] = fc);

(statearr_29975_29998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29961 === (8))){
var inst_29949 = (state_29960[(2)]);
var state_29960__$1 = state_29960;
if(cljs.core.truth_(inst_29949)){
var statearr_29976_29999 = state_29960__$1;
(statearr_29976_29999[(1)] = (12));

} else {
var statearr_29977_30000 = state_29960__$1;
(statearr_29977_30000[(1)] = (13));

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
});})(c__22921__auto___29986,tc,fc))
;
return ((function (switch__22859__auto__,c__22921__auto___29986,tc,fc){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_29981 = [null,null,null,null,null,null,null,null,null];
(statearr_29981[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_29981[(1)] = (1));

return statearr_29981;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_29960){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29982){if((e29982 instanceof Object)){
var ex__22863__auto__ = e29982;
var statearr_29983_30001 = state_29960;
(statearr_29983_30001[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30002 = state_29960;
state_29960 = G__30002;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_29960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_29960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___29986,tc,fc))
})();
var state__22923__auto__ = (function (){var statearr_29984 = f__22922__auto__.call(null);
(statearr_29984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___29986);

return statearr_29984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___29986,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_30049){
var state_val_30050 = (state_30049[(1)]);
if((state_val_30050 === (7))){
var inst_30045 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
var statearr_30051_30067 = state_30049__$1;
(statearr_30051_30067[(2)] = inst_30045);

(statearr_30051_30067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (6))){
var inst_30038 = (state_30049[(7)]);
var inst_30035 = (state_30049[(8)]);
var inst_30042 = f.call(null,inst_30035,inst_30038);
var inst_30035__$1 = inst_30042;
var state_30049__$1 = (function (){var statearr_30052 = state_30049;
(statearr_30052[(8)] = inst_30035__$1);

return statearr_30052;
})();
var statearr_30053_30068 = state_30049__$1;
(statearr_30053_30068[(2)] = null);

(statearr_30053_30068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (5))){
var inst_30035 = (state_30049[(8)]);
var state_30049__$1 = state_30049;
var statearr_30054_30069 = state_30049__$1;
(statearr_30054_30069[(2)] = inst_30035);

(statearr_30054_30069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (4))){
var inst_30038 = (state_30049[(7)]);
var inst_30038__$1 = (state_30049[(2)]);
var inst_30039 = (inst_30038__$1 == null);
var state_30049__$1 = (function (){var statearr_30055 = state_30049;
(statearr_30055[(7)] = inst_30038__$1);

return statearr_30055;
})();
if(cljs.core.truth_(inst_30039)){
var statearr_30056_30070 = state_30049__$1;
(statearr_30056_30070[(1)] = (5));

} else {
var statearr_30057_30071 = state_30049__$1;
(statearr_30057_30071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30050 === (3))){
var inst_30047 = (state_30049[(2)]);
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30049__$1,inst_30047);
} else {
if((state_val_30050 === (2))){
var state_30049__$1 = state_30049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30049__$1,(4),ch);
} else {
if((state_val_30050 === (1))){
var inst_30035 = init;
var state_30049__$1 = (function (){var statearr_30058 = state_30049;
(statearr_30058[(8)] = inst_30035);

return statearr_30058;
})();
var statearr_30059_30072 = state_30049__$1;
(statearr_30059_30072[(2)] = null);

(statearr_30059_30072[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22860__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22860__auto____0 = (function (){
var statearr_30063 = [null,null,null,null,null,null,null,null,null];
(statearr_30063[(0)] = cljs$core$async$reduce_$_state_machine__22860__auto__);

(statearr_30063[(1)] = (1));

return statearr_30063;
});
var cljs$core$async$reduce_$_state_machine__22860__auto____1 = (function (state_30049){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_30049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e30064){if((e30064 instanceof Object)){
var ex__22863__auto__ = e30064;
var statearr_30065_30073 = state_30049;
(statearr_30065_30073[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30074 = state_30049;
state_30049 = G__30074;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22860__auto__ = function(state_30049){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22860__auto____1.call(this,state_30049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22860__auto____0;
cljs$core$async$reduce_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22860__auto____1;
return cljs$core$async$reduce_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_30066 = f__22922__auto__.call(null);
(statearr_30066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_30066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__30076 = arguments.length;
switch (G__30076) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_30101){
var state_val_30102 = (state_30101[(1)]);
if((state_val_30102 === (7))){
var inst_30083 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30103_30127 = state_30101__$1;
(statearr_30103_30127[(2)] = inst_30083);

(statearr_30103_30127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (1))){
var inst_30077 = cljs.core.seq.call(null,coll);
var inst_30078 = inst_30077;
var state_30101__$1 = (function (){var statearr_30104 = state_30101;
(statearr_30104[(7)] = inst_30078);

return statearr_30104;
})();
var statearr_30105_30128 = state_30101__$1;
(statearr_30105_30128[(2)] = null);

(statearr_30105_30128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (4))){
var inst_30078 = (state_30101[(7)]);
var inst_30081 = cljs.core.first.call(null,inst_30078);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30101__$1,(7),ch,inst_30081);
} else {
if((state_val_30102 === (13))){
var inst_30095 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30106_30129 = state_30101__$1;
(statearr_30106_30129[(2)] = inst_30095);

(statearr_30106_30129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (6))){
var inst_30086 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
if(cljs.core.truth_(inst_30086)){
var statearr_30107_30130 = state_30101__$1;
(statearr_30107_30130[(1)] = (8));

} else {
var statearr_30108_30131 = state_30101__$1;
(statearr_30108_30131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (3))){
var inst_30099 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30101__$1,inst_30099);
} else {
if((state_val_30102 === (12))){
var state_30101__$1 = state_30101;
var statearr_30109_30132 = state_30101__$1;
(statearr_30109_30132[(2)] = null);

(statearr_30109_30132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (2))){
var inst_30078 = (state_30101[(7)]);
var state_30101__$1 = state_30101;
if(cljs.core.truth_(inst_30078)){
var statearr_30110_30133 = state_30101__$1;
(statearr_30110_30133[(1)] = (4));

} else {
var statearr_30111_30134 = state_30101__$1;
(statearr_30111_30134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (11))){
var inst_30092 = cljs.core.async.close_BANG_.call(null,ch);
var state_30101__$1 = state_30101;
var statearr_30112_30135 = state_30101__$1;
(statearr_30112_30135[(2)] = inst_30092);

(statearr_30112_30135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (9))){
var state_30101__$1 = state_30101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30113_30136 = state_30101__$1;
(statearr_30113_30136[(1)] = (11));

} else {
var statearr_30114_30137 = state_30101__$1;
(statearr_30114_30137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (5))){
var inst_30078 = (state_30101[(7)]);
var state_30101__$1 = state_30101;
var statearr_30115_30138 = state_30101__$1;
(statearr_30115_30138[(2)] = inst_30078);

(statearr_30115_30138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (10))){
var inst_30097 = (state_30101[(2)]);
var state_30101__$1 = state_30101;
var statearr_30116_30139 = state_30101__$1;
(statearr_30116_30139[(2)] = inst_30097);

(statearr_30116_30139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30102 === (8))){
var inst_30078 = (state_30101[(7)]);
var inst_30088 = cljs.core.next.call(null,inst_30078);
var inst_30078__$1 = inst_30088;
var state_30101__$1 = (function (){var statearr_30117 = state_30101;
(statearr_30117[(7)] = inst_30078__$1);

return statearr_30117;
})();
var statearr_30118_30140 = state_30101__$1;
(statearr_30118_30140[(2)] = null);

(statearr_30118_30140[(1)] = (2));


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
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_30122 = [null,null,null,null,null,null,null,null];
(statearr_30122[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_30122[(1)] = (1));

return statearr_30122;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_30101){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_30101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e30123){if((e30123 instanceof Object)){
var ex__22863__auto__ = e30123;
var statearr_30124_30141 = state_30101;
(statearr_30124_30141[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30142 = state_30101;
state_30101 = G__30142;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_30101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_30101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_30125 = f__22922__auto__.call(null);
(statearr_30125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_30125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30144 = {};
return obj30144;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18104__auto__ = _;
if(and__18104__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18752__auto__ = (((_ == null))?null:_);
return (function (){var or__18116__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30146 = {};
return obj30146;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30368 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30368 = (function (cs,ch,mult,meta30369){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30369 = meta30369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30368.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30368.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30368.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30368.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30368.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30368.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30370){
var self__ = this;
var _30370__$1 = this;
return self__.meta30369;
});})(cs))
;

cljs.core.async.t30368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30370,meta30369__$1){
var self__ = this;
var _30370__$1 = this;
return (new cljs.core.async.t30368(self__.cs,self__.ch,self__.mult,meta30369__$1));
});})(cs))
;

cljs.core.async.t30368.cljs$lang$type = true;

cljs.core.async.t30368.cljs$lang$ctorStr = "cljs.core.async/t30368";

cljs.core.async.t30368.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30368");
});})(cs))
;

cljs.core.async.__GT_t30368 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t30368(cs__$1,ch__$1,mult__$1,meta30369){
return (new cljs.core.async.t30368(cs__$1,ch__$1,mult__$1,meta30369));
});})(cs))
;

}

return (new cljs.core.async.t30368(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22921__auto___30589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___30589,cs,m,dchan,dctr,done){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___30589,cs,m,dchan,dctr,done){
return (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30497 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30503_30590 = state_30501__$1;
(statearr_30503_30590[(2)] = inst_30497);

(statearr_30503_30590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (20))){
var inst_30402 = (state_30501[(7)]);
var inst_30412 = cljs.core.first.call(null,inst_30402);
var inst_30413 = cljs.core.nth.call(null,inst_30412,(0),null);
var inst_30414 = cljs.core.nth.call(null,inst_30412,(1),null);
var state_30501__$1 = (function (){var statearr_30504 = state_30501;
(statearr_30504[(8)] = inst_30413);

return statearr_30504;
})();
if(cljs.core.truth_(inst_30414)){
var statearr_30505_30591 = state_30501__$1;
(statearr_30505_30591[(1)] = (22));

} else {
var statearr_30506_30592 = state_30501__$1;
(statearr_30506_30592[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (27))){
var inst_30449 = (state_30501[(9)]);
var inst_30444 = (state_30501[(10)]);
var inst_30442 = (state_30501[(11)]);
var inst_30373 = (state_30501[(12)]);
var inst_30449__$1 = cljs.core._nth.call(null,inst_30442,inst_30444);
var inst_30450 = cljs.core.async.put_BANG_.call(null,inst_30449__$1,inst_30373,done);
var state_30501__$1 = (function (){var statearr_30507 = state_30501;
(statearr_30507[(9)] = inst_30449__$1);

return statearr_30507;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30508_30593 = state_30501__$1;
(statearr_30508_30593[(1)] = (30));

} else {
var statearr_30509_30594 = state_30501__$1;
(statearr_30509_30594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var state_30501__$1 = state_30501;
var statearr_30510_30595 = state_30501__$1;
(statearr_30510_30595[(2)] = null);

(statearr_30510_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (24))){
var inst_30402 = (state_30501[(7)]);
var inst_30419 = (state_30501[(2)]);
var inst_30420 = cljs.core.next.call(null,inst_30402);
var inst_30382 = inst_30420;
var inst_30383 = null;
var inst_30384 = (0);
var inst_30385 = (0);
var state_30501__$1 = (function (){var statearr_30511 = state_30501;
(statearr_30511[(13)] = inst_30382);

(statearr_30511[(14)] = inst_30384);

(statearr_30511[(15)] = inst_30383);

(statearr_30511[(16)] = inst_30419);

(statearr_30511[(17)] = inst_30385);

return statearr_30511;
})();
var statearr_30512_30596 = state_30501__$1;
(statearr_30512_30596[(2)] = null);

(statearr_30512_30596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (39))){
var state_30501__$1 = state_30501;
var statearr_30516_30597 = state_30501__$1;
(statearr_30516_30597[(2)] = null);

(statearr_30516_30597[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30373 = (state_30501[(12)]);
var inst_30373__$1 = (state_30501[(2)]);
var inst_30374 = (inst_30373__$1 == null);
var state_30501__$1 = (function (){var statearr_30517 = state_30501;
(statearr_30517[(12)] = inst_30373__$1);

return statearr_30517;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30518_30598 = state_30501__$1;
(statearr_30518_30598[(1)] = (5));

} else {
var statearr_30519_30599 = state_30501__$1;
(statearr_30519_30599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (15))){
var inst_30382 = (state_30501[(13)]);
var inst_30384 = (state_30501[(14)]);
var inst_30383 = (state_30501[(15)]);
var inst_30385 = (state_30501[(17)]);
var inst_30398 = (state_30501[(2)]);
var inst_30399 = (inst_30385 + (1));
var tmp30513 = inst_30382;
var tmp30514 = inst_30384;
var tmp30515 = inst_30383;
var inst_30382__$1 = tmp30513;
var inst_30383__$1 = tmp30515;
var inst_30384__$1 = tmp30514;
var inst_30385__$1 = inst_30399;
var state_30501__$1 = (function (){var statearr_30520 = state_30501;
(statearr_30520[(18)] = inst_30398);

(statearr_30520[(13)] = inst_30382__$1);

(statearr_30520[(14)] = inst_30384__$1);

(statearr_30520[(15)] = inst_30383__$1);

(statearr_30520[(17)] = inst_30385__$1);

return statearr_30520;
})();
var statearr_30521_30600 = state_30501__$1;
(statearr_30521_30600[(2)] = null);

(statearr_30521_30600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (21))){
var inst_30423 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30525_30601 = state_30501__$1;
(statearr_30525_30601[(2)] = inst_30423);

(statearr_30525_30601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (31))){
var inst_30449 = (state_30501[(9)]);
var inst_30453 = done.call(null,null);
var inst_30454 = cljs.core.async.untap_STAR_.call(null,m,inst_30449);
var state_30501__$1 = (function (){var statearr_30526 = state_30501;
(statearr_30526[(19)] = inst_30453);

return statearr_30526;
})();
var statearr_30527_30602 = state_30501__$1;
(statearr_30527_30602[(2)] = inst_30454);

(statearr_30527_30602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (32))){
var inst_30441 = (state_30501[(20)]);
var inst_30444 = (state_30501[(10)]);
var inst_30443 = (state_30501[(21)]);
var inst_30442 = (state_30501[(11)]);
var inst_30456 = (state_30501[(2)]);
var inst_30457 = (inst_30444 + (1));
var tmp30522 = inst_30441;
var tmp30523 = inst_30443;
var tmp30524 = inst_30442;
var inst_30441__$1 = tmp30522;
var inst_30442__$1 = tmp30524;
var inst_30443__$1 = tmp30523;
var inst_30444__$1 = inst_30457;
var state_30501__$1 = (function (){var statearr_30528 = state_30501;
(statearr_30528[(20)] = inst_30441__$1);

(statearr_30528[(10)] = inst_30444__$1);

(statearr_30528[(21)] = inst_30443__$1);

(statearr_30528[(11)] = inst_30442__$1);

(statearr_30528[(22)] = inst_30456);

return statearr_30528;
})();
var statearr_30529_30603 = state_30501__$1;
(statearr_30529_30603[(2)] = null);

(statearr_30529_30603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (40))){
var inst_30469 = (state_30501[(23)]);
var inst_30473 = done.call(null,null);
var inst_30474 = cljs.core.async.untap_STAR_.call(null,m,inst_30469);
var state_30501__$1 = (function (){var statearr_30530 = state_30501;
(statearr_30530[(24)] = inst_30473);

return statearr_30530;
})();
var statearr_30531_30604 = state_30501__$1;
(statearr_30531_30604[(2)] = inst_30474);

(statearr_30531_30604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (33))){
var inst_30460 = (state_30501[(25)]);
var inst_30462 = cljs.core.chunked_seq_QMARK_.call(null,inst_30460);
var state_30501__$1 = state_30501;
if(inst_30462){
var statearr_30532_30605 = state_30501__$1;
(statearr_30532_30605[(1)] = (36));

} else {
var statearr_30533_30606 = state_30501__$1;
(statearr_30533_30606[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (13))){
var inst_30392 = (state_30501[(26)]);
var inst_30395 = cljs.core.async.close_BANG_.call(null,inst_30392);
var state_30501__$1 = state_30501;
var statearr_30534_30607 = state_30501__$1;
(statearr_30534_30607[(2)] = inst_30395);

(statearr_30534_30607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (22))){
var inst_30413 = (state_30501[(8)]);
var inst_30416 = cljs.core.async.close_BANG_.call(null,inst_30413);
var state_30501__$1 = state_30501;
var statearr_30535_30608 = state_30501__$1;
(statearr_30535_30608[(2)] = inst_30416);

(statearr_30535_30608[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (36))){
var inst_30460 = (state_30501[(25)]);
var inst_30464 = cljs.core.chunk_first.call(null,inst_30460);
var inst_30465 = cljs.core.chunk_rest.call(null,inst_30460);
var inst_30466 = cljs.core.count.call(null,inst_30464);
var inst_30441 = inst_30465;
var inst_30442 = inst_30464;
var inst_30443 = inst_30466;
var inst_30444 = (0);
var state_30501__$1 = (function (){var statearr_30536 = state_30501;
(statearr_30536[(20)] = inst_30441);

(statearr_30536[(10)] = inst_30444);

(statearr_30536[(21)] = inst_30443);

(statearr_30536[(11)] = inst_30442);

return statearr_30536;
})();
var statearr_30537_30609 = state_30501__$1;
(statearr_30537_30609[(2)] = null);

(statearr_30537_30609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (41))){
var inst_30460 = (state_30501[(25)]);
var inst_30476 = (state_30501[(2)]);
var inst_30477 = cljs.core.next.call(null,inst_30460);
var inst_30441 = inst_30477;
var inst_30442 = null;
var inst_30443 = (0);
var inst_30444 = (0);
var state_30501__$1 = (function (){var statearr_30538 = state_30501;
(statearr_30538[(27)] = inst_30476);

(statearr_30538[(20)] = inst_30441);

(statearr_30538[(10)] = inst_30444);

(statearr_30538[(21)] = inst_30443);

(statearr_30538[(11)] = inst_30442);

return statearr_30538;
})();
var statearr_30539_30610 = state_30501__$1;
(statearr_30539_30610[(2)] = null);

(statearr_30539_30610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (43))){
var state_30501__$1 = state_30501;
var statearr_30540_30611 = state_30501__$1;
(statearr_30540_30611[(2)] = null);

(statearr_30540_30611[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (29))){
var inst_30485 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30541_30612 = state_30501__$1;
(statearr_30541_30612[(2)] = inst_30485);

(statearr_30541_30612[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (44))){
var inst_30494 = (state_30501[(2)]);
var state_30501__$1 = (function (){var statearr_30542 = state_30501;
(statearr_30542[(28)] = inst_30494);

return statearr_30542;
})();
var statearr_30543_30613 = state_30501__$1;
(statearr_30543_30613[(2)] = null);

(statearr_30543_30613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var inst_30433 = (state_30501[(29)]);
var inst_30432 = cljs.core.deref.call(null,cs);
var inst_30433__$1 = cljs.core.keys.call(null,inst_30432);
var inst_30434 = cljs.core.count.call(null,inst_30433__$1);
var inst_30435 = cljs.core.reset_BANG_.call(null,dctr,inst_30434);
var inst_30440 = cljs.core.seq.call(null,inst_30433__$1);
var inst_30441 = inst_30440;
var inst_30442 = null;
var inst_30443 = (0);
var inst_30444 = (0);
var state_30501__$1 = (function (){var statearr_30544 = state_30501;
(statearr_30544[(30)] = inst_30435);

(statearr_30544[(20)] = inst_30441);

(statearr_30544[(10)] = inst_30444);

(statearr_30544[(21)] = inst_30443);

(statearr_30544[(11)] = inst_30442);

(statearr_30544[(29)] = inst_30433__$1);

return statearr_30544;
})();
var statearr_30545_30614 = state_30501__$1;
(statearr_30545_30614[(2)] = null);

(statearr_30545_30614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (28))){
var inst_30460 = (state_30501[(25)]);
var inst_30441 = (state_30501[(20)]);
var inst_30460__$1 = cljs.core.seq.call(null,inst_30441);
var state_30501__$1 = (function (){var statearr_30546 = state_30501;
(statearr_30546[(25)] = inst_30460__$1);

return statearr_30546;
})();
if(inst_30460__$1){
var statearr_30547_30615 = state_30501__$1;
(statearr_30547_30615[(1)] = (33));

} else {
var statearr_30548_30616 = state_30501__$1;
(statearr_30548_30616[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (25))){
var inst_30444 = (state_30501[(10)]);
var inst_30443 = (state_30501[(21)]);
var inst_30446 = (inst_30444 < inst_30443);
var inst_30447 = inst_30446;
var state_30501__$1 = state_30501;
if(cljs.core.truth_(inst_30447)){
var statearr_30549_30617 = state_30501__$1;
(statearr_30549_30617[(1)] = (27));

} else {
var statearr_30550_30618 = state_30501__$1;
(statearr_30550_30618[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (34))){
var state_30501__$1 = state_30501;
var statearr_30551_30619 = state_30501__$1;
(statearr_30551_30619[(2)] = null);

(statearr_30551_30619[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (17))){
var state_30501__$1 = state_30501;
var statearr_30552_30620 = state_30501__$1;
(statearr_30552_30620[(2)] = null);

(statearr_30552_30620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30499 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30501__$1,inst_30499);
} else {
if((state_val_30502 === (12))){
var inst_30428 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30553_30621 = state_30501__$1;
(statearr_30553_30621[(2)] = inst_30428);

(statearr_30553_30621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (2))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30501__$1,(4),ch);
} else {
if((state_val_30502 === (23))){
var state_30501__$1 = state_30501;
var statearr_30554_30622 = state_30501__$1;
(statearr_30554_30622[(2)] = null);

(statearr_30554_30622[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (35))){
var inst_30483 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30555_30623 = state_30501__$1;
(statearr_30555_30623[(2)] = inst_30483);

(statearr_30555_30623[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (19))){
var inst_30402 = (state_30501[(7)]);
var inst_30406 = cljs.core.chunk_first.call(null,inst_30402);
var inst_30407 = cljs.core.chunk_rest.call(null,inst_30402);
var inst_30408 = cljs.core.count.call(null,inst_30406);
var inst_30382 = inst_30407;
var inst_30383 = inst_30406;
var inst_30384 = inst_30408;
var inst_30385 = (0);
var state_30501__$1 = (function (){var statearr_30556 = state_30501;
(statearr_30556[(13)] = inst_30382);

(statearr_30556[(14)] = inst_30384);

(statearr_30556[(15)] = inst_30383);

(statearr_30556[(17)] = inst_30385);

return statearr_30556;
})();
var statearr_30557_30624 = state_30501__$1;
(statearr_30557_30624[(2)] = null);

(statearr_30557_30624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (11))){
var inst_30382 = (state_30501[(13)]);
var inst_30402 = (state_30501[(7)]);
var inst_30402__$1 = cljs.core.seq.call(null,inst_30382);
var state_30501__$1 = (function (){var statearr_30558 = state_30501;
(statearr_30558[(7)] = inst_30402__$1);

return statearr_30558;
})();
if(inst_30402__$1){
var statearr_30559_30625 = state_30501__$1;
(statearr_30559_30625[(1)] = (16));

} else {
var statearr_30560_30626 = state_30501__$1;
(statearr_30560_30626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (9))){
var inst_30430 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30561_30627 = state_30501__$1;
(statearr_30561_30627[(2)] = inst_30430);

(statearr_30561_30627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var inst_30380 = cljs.core.deref.call(null,cs);
var inst_30381 = cljs.core.seq.call(null,inst_30380);
var inst_30382 = inst_30381;
var inst_30383 = null;
var inst_30384 = (0);
var inst_30385 = (0);
var state_30501__$1 = (function (){var statearr_30562 = state_30501;
(statearr_30562[(13)] = inst_30382);

(statearr_30562[(14)] = inst_30384);

(statearr_30562[(15)] = inst_30383);

(statearr_30562[(17)] = inst_30385);

return statearr_30562;
})();
var statearr_30563_30628 = state_30501__$1;
(statearr_30563_30628[(2)] = null);

(statearr_30563_30628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (14))){
var state_30501__$1 = state_30501;
var statearr_30564_30629 = state_30501__$1;
(statearr_30564_30629[(2)] = null);

(statearr_30564_30629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (45))){
var inst_30491 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30565_30630 = state_30501__$1;
(statearr_30565_30630[(2)] = inst_30491);

(statearr_30565_30630[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (26))){
var inst_30433 = (state_30501[(29)]);
var inst_30487 = (state_30501[(2)]);
var inst_30488 = cljs.core.seq.call(null,inst_30433);
var state_30501__$1 = (function (){var statearr_30566 = state_30501;
(statearr_30566[(31)] = inst_30487);

return statearr_30566;
})();
if(inst_30488){
var statearr_30567_30631 = state_30501__$1;
(statearr_30567_30631[(1)] = (42));

} else {
var statearr_30568_30632 = state_30501__$1;
(statearr_30568_30632[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (16))){
var inst_30402 = (state_30501[(7)]);
var inst_30404 = cljs.core.chunked_seq_QMARK_.call(null,inst_30402);
var state_30501__$1 = state_30501;
if(inst_30404){
var statearr_30569_30633 = state_30501__$1;
(statearr_30569_30633[(1)] = (19));

} else {
var statearr_30570_30634 = state_30501__$1;
(statearr_30570_30634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (38))){
var inst_30480 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30571_30635 = state_30501__$1;
(statearr_30571_30635[(2)] = inst_30480);

(statearr_30571_30635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (30))){
var state_30501__$1 = state_30501;
var statearr_30572_30636 = state_30501__$1;
(statearr_30572_30636[(2)] = null);

(statearr_30572_30636[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var inst_30383 = (state_30501[(15)]);
var inst_30385 = (state_30501[(17)]);
var inst_30391 = cljs.core._nth.call(null,inst_30383,inst_30385);
var inst_30392 = cljs.core.nth.call(null,inst_30391,(0),null);
var inst_30393 = cljs.core.nth.call(null,inst_30391,(1),null);
var state_30501__$1 = (function (){var statearr_30573 = state_30501;
(statearr_30573[(26)] = inst_30392);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30393)){
var statearr_30574_30637 = state_30501__$1;
(statearr_30574_30637[(1)] = (13));

} else {
var statearr_30575_30638 = state_30501__$1;
(statearr_30575_30638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (18))){
var inst_30426 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30576_30639 = state_30501__$1;
(statearr_30576_30639[(2)] = inst_30426);

(statearr_30576_30639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (42))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30501__$1,(45),dchan);
} else {
if((state_val_30502 === (37))){
var inst_30460 = (state_30501[(25)]);
var inst_30469 = (state_30501[(23)]);
var inst_30373 = (state_30501[(12)]);
var inst_30469__$1 = cljs.core.first.call(null,inst_30460);
var inst_30470 = cljs.core.async.put_BANG_.call(null,inst_30469__$1,inst_30373,done);
var state_30501__$1 = (function (){var statearr_30577 = state_30501;
(statearr_30577[(23)] = inst_30469__$1);

return statearr_30577;
})();
if(cljs.core.truth_(inst_30470)){
var statearr_30578_30640 = state_30501__$1;
(statearr_30578_30640[(1)] = (39));

} else {
var statearr_30579_30641 = state_30501__$1;
(statearr_30579_30641[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30384 = (state_30501[(14)]);
var inst_30385 = (state_30501[(17)]);
var inst_30387 = (inst_30385 < inst_30384);
var inst_30388 = inst_30387;
var state_30501__$1 = state_30501;
if(cljs.core.truth_(inst_30388)){
var statearr_30580_30642 = state_30501__$1;
(statearr_30580_30642[(1)] = (10));

} else {
var statearr_30581_30643 = state_30501__$1;
(statearr_30581_30643[(1)] = (11));

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
});})(c__22921__auto___30589,cs,m,dchan,dctr,done))
;
return ((function (switch__22859__auto__,c__22921__auto___30589,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22860__auto__ = null;
var cljs$core$async$mult_$_state_machine__22860__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30585[(0)] = cljs$core$async$mult_$_state_machine__22860__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var cljs$core$async$mult_$_state_machine__22860__auto____1 = (function (state_30501){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_30501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__22863__auto__ = e30586;
var statearr_30587_30644 = state_30501;
(statearr_30587_30644[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30645 = state_30501;
state_30501 = G__30645;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22860__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22860__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22860__auto____0;
cljs$core$async$mult_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22860__auto____1;
return cljs$core$async$mult_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___30589,cs,m,dchan,dctr,done))
})();
var state__22923__auto__ = (function (){var statearr_30588 = f__22922__auto__.call(null);
(statearr_30588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___30589);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___30589,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__30647 = arguments.length;
switch (G__30647) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj30650 = {};
return obj30650;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19156__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19156__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30655){
var map__30656 = p__30655;
var map__30656__$1 = ((cljs.core.seq_QMARK_.call(null,map__30656))?cljs.core.apply.call(null,cljs.core.hash_map,map__30656):map__30656);
var opts = map__30656__$1;
var statearr_30657_30660 = state;
(statearr_30657_30660[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__30656,map__30656__$1,opts){
return (function (val){
var statearr_30658_30661 = state;
(statearr_30658_30661[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30656,map__30656__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_30659_30662 = state;
(statearr_30659_30662[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30651){
var G__30652 = cljs.core.first.call(null,seq30651);
var seq30651__$1 = cljs.core.next.call(null,seq30651);
var G__30653 = cljs.core.first.call(null,seq30651__$1);
var seq30651__$2 = cljs.core.next.call(null,seq30651__$1);
var G__30654 = cljs.core.first.call(null,seq30651__$2);
var seq30651__$3 = cljs.core.next.call(null,seq30651__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30652,G__30653,G__30654,seq30651__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30782 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30782 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30783){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30783 = meta30783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30782.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30782.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30782.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30784){
var self__ = this;
var _30784__$1 = this;
return self__.meta30783;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30784,meta30783__$1){
var self__ = this;
var _30784__$1 = this;
return (new cljs.core.async.t30782(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30783__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30782.cljs$lang$type = true;

cljs.core.async.t30782.cljs$lang$ctorStr = "cljs.core.async/t30782";

cljs.core.async.t30782.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30782");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30782 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t30782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30783){
return (new cljs.core.async.t30782(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30783));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30782(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22921__auto___30901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30854){
var state_val_30855 = (state_30854[(1)]);
if((state_val_30855 === (7))){
var inst_30798 = (state_30854[(7)]);
var inst_30803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30798);
var state_30854__$1 = state_30854;
var statearr_30856_30902 = state_30854__$1;
(statearr_30856_30902[(2)] = inst_30803);

(statearr_30856_30902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (20))){
var inst_30813 = (state_30854[(8)]);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30854__$1,(23),out,inst_30813);
} else {
if((state_val_30855 === (1))){
var inst_30788 = (state_30854[(9)]);
var inst_30788__$1 = calc_state.call(null);
var inst_30789 = cljs.core.seq_QMARK_.call(null,inst_30788__$1);
var state_30854__$1 = (function (){var statearr_30857 = state_30854;
(statearr_30857[(9)] = inst_30788__$1);

return statearr_30857;
})();
if(inst_30789){
var statearr_30858_30903 = state_30854__$1;
(statearr_30858_30903[(1)] = (2));

} else {
var statearr_30859_30904 = state_30854__$1;
(statearr_30859_30904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (24))){
var inst_30806 = (state_30854[(10)]);
var inst_30798 = inst_30806;
var state_30854__$1 = (function (){var statearr_30860 = state_30854;
(statearr_30860[(7)] = inst_30798);

return statearr_30860;
})();
var statearr_30861_30905 = state_30854__$1;
(statearr_30861_30905[(2)] = null);

(statearr_30861_30905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (4))){
var inst_30788 = (state_30854[(9)]);
var inst_30794 = (state_30854[(2)]);
var inst_30795 = cljs.core.get.call(null,inst_30794,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30796 = cljs.core.get.call(null,inst_30794,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30797 = cljs.core.get.call(null,inst_30794,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30798 = inst_30788;
var state_30854__$1 = (function (){var statearr_30862 = state_30854;
(statearr_30862[(11)] = inst_30797);

(statearr_30862[(12)] = inst_30795);

(statearr_30862[(13)] = inst_30796);

(statearr_30862[(7)] = inst_30798);

return statearr_30862;
})();
var statearr_30863_30906 = state_30854__$1;
(statearr_30863_30906[(2)] = null);

(statearr_30863_30906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (15))){
var state_30854__$1 = state_30854;
var statearr_30864_30907 = state_30854__$1;
(statearr_30864_30907[(2)] = null);

(statearr_30864_30907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (21))){
var inst_30806 = (state_30854[(10)]);
var inst_30798 = inst_30806;
var state_30854__$1 = (function (){var statearr_30865 = state_30854;
(statearr_30865[(7)] = inst_30798);

return statearr_30865;
})();
var statearr_30866_30908 = state_30854__$1;
(statearr_30866_30908[(2)] = null);

(statearr_30866_30908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (13))){
var inst_30850 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30867_30909 = state_30854__$1;
(statearr_30867_30909[(2)] = inst_30850);

(statearr_30867_30909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (22))){
var inst_30848 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30868_30910 = state_30854__$1;
(statearr_30868_30910[(2)] = inst_30848);

(statearr_30868_30910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (6))){
var inst_30852 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30854__$1,inst_30852);
} else {
if((state_val_30855 === (25))){
var state_30854__$1 = state_30854;
var statearr_30869_30911 = state_30854__$1;
(statearr_30869_30911[(2)] = null);

(statearr_30869_30911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (17))){
var inst_30828 = (state_30854[(14)]);
var state_30854__$1 = state_30854;
var statearr_30870_30912 = state_30854__$1;
(statearr_30870_30912[(2)] = inst_30828);

(statearr_30870_30912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (3))){
var inst_30788 = (state_30854[(9)]);
var state_30854__$1 = state_30854;
var statearr_30871_30913 = state_30854__$1;
(statearr_30871_30913[(2)] = inst_30788);

(statearr_30871_30913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (12))){
var inst_30814 = (state_30854[(15)]);
var inst_30828 = (state_30854[(14)]);
var inst_30809 = (state_30854[(16)]);
var inst_30828__$1 = inst_30809.call(null,inst_30814);
var state_30854__$1 = (function (){var statearr_30872 = state_30854;
(statearr_30872[(14)] = inst_30828__$1);

return statearr_30872;
})();
if(cljs.core.truth_(inst_30828__$1)){
var statearr_30873_30914 = state_30854__$1;
(statearr_30873_30914[(1)] = (17));

} else {
var statearr_30874_30915 = state_30854__$1;
(statearr_30874_30915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (2))){
var inst_30788 = (state_30854[(9)]);
var inst_30791 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30788);
var state_30854__$1 = state_30854;
var statearr_30875_30916 = state_30854__$1;
(statearr_30875_30916[(2)] = inst_30791);

(statearr_30875_30916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (23))){
var inst_30839 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
if(cljs.core.truth_(inst_30839)){
var statearr_30876_30917 = state_30854__$1;
(statearr_30876_30917[(1)] = (24));

} else {
var statearr_30877_30918 = state_30854__$1;
(statearr_30877_30918[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (19))){
var inst_30836 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
if(cljs.core.truth_(inst_30836)){
var statearr_30878_30919 = state_30854__$1;
(statearr_30878_30919[(1)] = (20));

} else {
var statearr_30879_30920 = state_30854__$1;
(statearr_30879_30920[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (11))){
var inst_30813 = (state_30854[(8)]);
var inst_30819 = (inst_30813 == null);
var state_30854__$1 = state_30854;
if(cljs.core.truth_(inst_30819)){
var statearr_30880_30921 = state_30854__$1;
(statearr_30880_30921[(1)] = (14));

} else {
var statearr_30881_30922 = state_30854__$1;
(statearr_30881_30922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (9))){
var inst_30806 = (state_30854[(10)]);
var inst_30806__$1 = (state_30854[(2)]);
var inst_30807 = cljs.core.get.call(null,inst_30806__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30808 = cljs.core.get.call(null,inst_30806__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30809 = cljs.core.get.call(null,inst_30806__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30854__$1 = (function (){var statearr_30882 = state_30854;
(statearr_30882[(17)] = inst_30808);

(statearr_30882[(10)] = inst_30806__$1);

(statearr_30882[(16)] = inst_30809);

return statearr_30882;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30854__$1,(10),inst_30807);
} else {
if((state_val_30855 === (5))){
var inst_30798 = (state_30854[(7)]);
var inst_30801 = cljs.core.seq_QMARK_.call(null,inst_30798);
var state_30854__$1 = state_30854;
if(inst_30801){
var statearr_30883_30923 = state_30854__$1;
(statearr_30883_30923[(1)] = (7));

} else {
var statearr_30884_30924 = state_30854__$1;
(statearr_30884_30924[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (14))){
var inst_30814 = (state_30854[(15)]);
var inst_30821 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30814);
var state_30854__$1 = state_30854;
var statearr_30885_30925 = state_30854__$1;
(statearr_30885_30925[(2)] = inst_30821);

(statearr_30885_30925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (26))){
var inst_30844 = (state_30854[(2)]);
var state_30854__$1 = state_30854;
var statearr_30886_30926 = state_30854__$1;
(statearr_30886_30926[(2)] = inst_30844);

(statearr_30886_30926[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (16))){
var inst_30824 = (state_30854[(2)]);
var inst_30825 = calc_state.call(null);
var inst_30798 = inst_30825;
var state_30854__$1 = (function (){var statearr_30887 = state_30854;
(statearr_30887[(18)] = inst_30824);

(statearr_30887[(7)] = inst_30798);

return statearr_30887;
})();
var statearr_30888_30927 = state_30854__$1;
(statearr_30888_30927[(2)] = null);

(statearr_30888_30927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (10))){
var inst_30814 = (state_30854[(15)]);
var inst_30813 = (state_30854[(8)]);
var inst_30812 = (state_30854[(2)]);
var inst_30813__$1 = cljs.core.nth.call(null,inst_30812,(0),null);
var inst_30814__$1 = cljs.core.nth.call(null,inst_30812,(1),null);
var inst_30815 = (inst_30813__$1 == null);
var inst_30816 = cljs.core._EQ_.call(null,inst_30814__$1,change);
var inst_30817 = (inst_30815) || (inst_30816);
var state_30854__$1 = (function (){var statearr_30889 = state_30854;
(statearr_30889[(15)] = inst_30814__$1);

(statearr_30889[(8)] = inst_30813__$1);

return statearr_30889;
})();
if(cljs.core.truth_(inst_30817)){
var statearr_30890_30928 = state_30854__$1;
(statearr_30890_30928[(1)] = (11));

} else {
var statearr_30891_30929 = state_30854__$1;
(statearr_30891_30929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (18))){
var inst_30808 = (state_30854[(17)]);
var inst_30814 = (state_30854[(15)]);
var inst_30809 = (state_30854[(16)]);
var inst_30831 = cljs.core.empty_QMARK_.call(null,inst_30809);
var inst_30832 = inst_30808.call(null,inst_30814);
var inst_30833 = cljs.core.not.call(null,inst_30832);
var inst_30834 = (inst_30831) && (inst_30833);
var state_30854__$1 = state_30854;
var statearr_30892_30930 = state_30854__$1;
(statearr_30892_30930[(2)] = inst_30834);

(statearr_30892_30930[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30855 === (8))){
var inst_30798 = (state_30854[(7)]);
var state_30854__$1 = state_30854;
var statearr_30893_30931 = state_30854__$1;
(statearr_30893_30931[(2)] = inst_30798);

(statearr_30893_30931[(1)] = (9));


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
});})(c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22859__auto__,c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22860__auto__ = null;
var cljs$core$async$mix_$_state_machine__22860__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30897[(0)] = cljs$core$async$mix_$_state_machine__22860__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var cljs$core$async$mix_$_state_machine__22860__auto____1 = (function (state_30854){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_30854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e30898){if((e30898 instanceof Object)){
var ex__22863__auto__ = e30898;
var statearr_30899_30932 = state_30854;
(statearr_30899_30932[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30933 = state_30854;
state_30854 = G__30933;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22860__auto__ = function(state_30854){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22860__auto____1.call(this,state_30854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22860__auto____0;
cljs$core$async$mix_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22860__auto____1;
return cljs$core$async$mix_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22923__auto__ = (function (){var statearr_30900 = f__22922__auto__.call(null);
(statearr_30900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___30901);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___30901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30935 = {};
return obj30935;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__30937 = arguments.length;
switch (G__30937) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__30941 = arguments.length;
switch (G__30941) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18116__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18116__auto__,mults){
return (function (p1__30939_SHARP_){
if(cljs.core.truth_(p1__30939_SHARP_.call(null,topic))){
return p1__30939_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30939_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30942 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta30943){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta30943 = meta30943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30942.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30942.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30944){
var self__ = this;
var _30944__$1 = this;
return self__.meta30943;
});})(mults,ensure_mult))
;

cljs.core.async.t30942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30944,meta30943__$1){
var self__ = this;
var _30944__$1 = this;
return (new cljs.core.async.t30942(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta30943__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30942.cljs$lang$type = true;

cljs.core.async.t30942.cljs$lang$ctorStr = "cljs.core.async/t30942";

cljs.core.async.t30942.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t30942");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30942 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t30942(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30943){
return (new cljs.core.async.t30942(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta30943));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30942(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22921__auto___31065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31065,mults,ensure_mult,p){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31065,mults,ensure_mult,p){
return (function (state_31016){
var state_val_31017 = (state_31016[(1)]);
if((state_val_31017 === (7))){
var inst_31012 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31018_31066 = state_31016__$1;
(statearr_31018_31066[(2)] = inst_31012);

(statearr_31018_31066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (20))){
var state_31016__$1 = state_31016;
var statearr_31019_31067 = state_31016__$1;
(statearr_31019_31067[(2)] = null);

(statearr_31019_31067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (1))){
var state_31016__$1 = state_31016;
var statearr_31020_31068 = state_31016__$1;
(statearr_31020_31068[(2)] = null);

(statearr_31020_31068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (24))){
var inst_30995 = (state_31016[(7)]);
var inst_31004 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30995);
var state_31016__$1 = state_31016;
var statearr_31021_31069 = state_31016__$1;
(statearr_31021_31069[(2)] = inst_31004);

(statearr_31021_31069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (4))){
var inst_30947 = (state_31016[(8)]);
var inst_30947__$1 = (state_31016[(2)]);
var inst_30948 = (inst_30947__$1 == null);
var state_31016__$1 = (function (){var statearr_31022 = state_31016;
(statearr_31022[(8)] = inst_30947__$1);

return statearr_31022;
})();
if(cljs.core.truth_(inst_30948)){
var statearr_31023_31070 = state_31016__$1;
(statearr_31023_31070[(1)] = (5));

} else {
var statearr_31024_31071 = state_31016__$1;
(statearr_31024_31071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (15))){
var inst_30989 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31025_31072 = state_31016__$1;
(statearr_31025_31072[(2)] = inst_30989);

(statearr_31025_31072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (21))){
var inst_31009 = (state_31016[(2)]);
var state_31016__$1 = (function (){var statearr_31026 = state_31016;
(statearr_31026[(9)] = inst_31009);

return statearr_31026;
})();
var statearr_31027_31073 = state_31016__$1;
(statearr_31027_31073[(2)] = null);

(statearr_31027_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (13))){
var inst_30971 = (state_31016[(10)]);
var inst_30973 = cljs.core.chunked_seq_QMARK_.call(null,inst_30971);
var state_31016__$1 = state_31016;
if(inst_30973){
var statearr_31028_31074 = state_31016__$1;
(statearr_31028_31074[(1)] = (16));

} else {
var statearr_31029_31075 = state_31016__$1;
(statearr_31029_31075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (22))){
var inst_31001 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_31001)){
var statearr_31030_31076 = state_31016__$1;
(statearr_31030_31076[(1)] = (23));

} else {
var statearr_31031_31077 = state_31016__$1;
(statearr_31031_31077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (6))){
var inst_30997 = (state_31016[(11)]);
var inst_30947 = (state_31016[(8)]);
var inst_30995 = (state_31016[(7)]);
var inst_30995__$1 = topic_fn.call(null,inst_30947);
var inst_30996 = cljs.core.deref.call(null,mults);
var inst_30997__$1 = cljs.core.get.call(null,inst_30996,inst_30995__$1);
var state_31016__$1 = (function (){var statearr_31032 = state_31016;
(statearr_31032[(11)] = inst_30997__$1);

(statearr_31032[(7)] = inst_30995__$1);

return statearr_31032;
})();
if(cljs.core.truth_(inst_30997__$1)){
var statearr_31033_31078 = state_31016__$1;
(statearr_31033_31078[(1)] = (19));

} else {
var statearr_31034_31079 = state_31016__$1;
(statearr_31034_31079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (25))){
var inst_31006 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31035_31080 = state_31016__$1;
(statearr_31035_31080[(2)] = inst_31006);

(statearr_31035_31080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (17))){
var inst_30971 = (state_31016[(10)]);
var inst_30980 = cljs.core.first.call(null,inst_30971);
var inst_30981 = cljs.core.async.muxch_STAR_.call(null,inst_30980);
var inst_30982 = cljs.core.async.close_BANG_.call(null,inst_30981);
var inst_30983 = cljs.core.next.call(null,inst_30971);
var inst_30957 = inst_30983;
var inst_30958 = null;
var inst_30959 = (0);
var inst_30960 = (0);
var state_31016__$1 = (function (){var statearr_31036 = state_31016;
(statearr_31036[(12)] = inst_30957);

(statearr_31036[(13)] = inst_30982);

(statearr_31036[(14)] = inst_30960);

(statearr_31036[(15)] = inst_30958);

(statearr_31036[(16)] = inst_30959);

return statearr_31036;
})();
var statearr_31037_31081 = state_31016__$1;
(statearr_31037_31081[(2)] = null);

(statearr_31037_31081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (3))){
var inst_31014 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31016__$1,inst_31014);
} else {
if((state_val_31017 === (12))){
var inst_30991 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31038_31082 = state_31016__$1;
(statearr_31038_31082[(2)] = inst_30991);

(statearr_31038_31082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (2))){
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31016__$1,(4),ch);
} else {
if((state_val_31017 === (23))){
var state_31016__$1 = state_31016;
var statearr_31039_31083 = state_31016__$1;
(statearr_31039_31083[(2)] = null);

(statearr_31039_31083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (19))){
var inst_30997 = (state_31016[(11)]);
var inst_30947 = (state_31016[(8)]);
var inst_30999 = cljs.core.async.muxch_STAR_.call(null,inst_30997);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31016__$1,(22),inst_30999,inst_30947);
} else {
if((state_val_31017 === (11))){
var inst_30957 = (state_31016[(12)]);
var inst_30971 = (state_31016[(10)]);
var inst_30971__$1 = cljs.core.seq.call(null,inst_30957);
var state_31016__$1 = (function (){var statearr_31040 = state_31016;
(statearr_31040[(10)] = inst_30971__$1);

return statearr_31040;
})();
if(inst_30971__$1){
var statearr_31041_31084 = state_31016__$1;
(statearr_31041_31084[(1)] = (13));

} else {
var statearr_31042_31085 = state_31016__$1;
(statearr_31042_31085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (9))){
var inst_30993 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31043_31086 = state_31016__$1;
(statearr_31043_31086[(2)] = inst_30993);

(statearr_31043_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (5))){
var inst_30954 = cljs.core.deref.call(null,mults);
var inst_30955 = cljs.core.vals.call(null,inst_30954);
var inst_30956 = cljs.core.seq.call(null,inst_30955);
var inst_30957 = inst_30956;
var inst_30958 = null;
var inst_30959 = (0);
var inst_30960 = (0);
var state_31016__$1 = (function (){var statearr_31044 = state_31016;
(statearr_31044[(12)] = inst_30957);

(statearr_31044[(14)] = inst_30960);

(statearr_31044[(15)] = inst_30958);

(statearr_31044[(16)] = inst_30959);

return statearr_31044;
})();
var statearr_31045_31087 = state_31016__$1;
(statearr_31045_31087[(2)] = null);

(statearr_31045_31087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (14))){
var state_31016__$1 = state_31016;
var statearr_31049_31088 = state_31016__$1;
(statearr_31049_31088[(2)] = null);

(statearr_31049_31088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (16))){
var inst_30971 = (state_31016[(10)]);
var inst_30975 = cljs.core.chunk_first.call(null,inst_30971);
var inst_30976 = cljs.core.chunk_rest.call(null,inst_30971);
var inst_30977 = cljs.core.count.call(null,inst_30975);
var inst_30957 = inst_30976;
var inst_30958 = inst_30975;
var inst_30959 = inst_30977;
var inst_30960 = (0);
var state_31016__$1 = (function (){var statearr_31050 = state_31016;
(statearr_31050[(12)] = inst_30957);

(statearr_31050[(14)] = inst_30960);

(statearr_31050[(15)] = inst_30958);

(statearr_31050[(16)] = inst_30959);

return statearr_31050;
})();
var statearr_31051_31089 = state_31016__$1;
(statearr_31051_31089[(2)] = null);

(statearr_31051_31089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (10))){
var inst_30957 = (state_31016[(12)]);
var inst_30960 = (state_31016[(14)]);
var inst_30958 = (state_31016[(15)]);
var inst_30959 = (state_31016[(16)]);
var inst_30965 = cljs.core._nth.call(null,inst_30958,inst_30960);
var inst_30966 = cljs.core.async.muxch_STAR_.call(null,inst_30965);
var inst_30967 = cljs.core.async.close_BANG_.call(null,inst_30966);
var inst_30968 = (inst_30960 + (1));
var tmp31046 = inst_30957;
var tmp31047 = inst_30958;
var tmp31048 = inst_30959;
var inst_30957__$1 = tmp31046;
var inst_30958__$1 = tmp31047;
var inst_30959__$1 = tmp31048;
var inst_30960__$1 = inst_30968;
var state_31016__$1 = (function (){var statearr_31052 = state_31016;
(statearr_31052[(12)] = inst_30957__$1);

(statearr_31052[(17)] = inst_30967);

(statearr_31052[(14)] = inst_30960__$1);

(statearr_31052[(15)] = inst_30958__$1);

(statearr_31052[(16)] = inst_30959__$1);

return statearr_31052;
})();
var statearr_31053_31090 = state_31016__$1;
(statearr_31053_31090[(2)] = null);

(statearr_31053_31090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (18))){
var inst_30986 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31054_31091 = state_31016__$1;
(statearr_31054_31091[(2)] = inst_30986);

(statearr_31054_31091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (8))){
var inst_30960 = (state_31016[(14)]);
var inst_30959 = (state_31016[(16)]);
var inst_30962 = (inst_30960 < inst_30959);
var inst_30963 = inst_30962;
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30963)){
var statearr_31055_31092 = state_31016__$1;
(statearr_31055_31092[(1)] = (10));

} else {
var statearr_31056_31093 = state_31016__$1;
(statearr_31056_31093[(1)] = (11));

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
});})(c__22921__auto___31065,mults,ensure_mult,p))
;
return ((function (switch__22859__auto__,c__22921__auto___31065,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31060[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31060[(1)] = (1));

return statearr_31060;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31016){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31061){if((e31061 instanceof Object)){
var ex__22863__auto__ = e31061;
var statearr_31062_31094 = state_31016;
(statearr_31062_31094[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31095 = state_31016;
state_31016 = G__31095;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31065,mults,ensure_mult,p))
})();
var state__22923__auto__ = (function (){var statearr_31063 = f__22922__auto__.call(null);
(statearr_31063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31065);

return statearr_31063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31065,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__31097 = arguments.length;
switch (G__31097) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__31100 = arguments.length;
switch (G__31100) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__31103 = arguments.length;
switch (G__31103) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22921__auto___31173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31142){
var state_val_31143 = (state_31142[(1)]);
if((state_val_31143 === (7))){
var state_31142__$1 = state_31142;
var statearr_31144_31174 = state_31142__$1;
(statearr_31144_31174[(2)] = null);

(statearr_31144_31174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (1))){
var state_31142__$1 = state_31142;
var statearr_31145_31175 = state_31142__$1;
(statearr_31145_31175[(2)] = null);

(statearr_31145_31175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (4))){
var inst_31106 = (state_31142[(7)]);
var inst_31108 = (inst_31106 < cnt);
var state_31142__$1 = state_31142;
if(cljs.core.truth_(inst_31108)){
var statearr_31146_31176 = state_31142__$1;
(statearr_31146_31176[(1)] = (6));

} else {
var statearr_31147_31177 = state_31142__$1;
(statearr_31147_31177[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (15))){
var inst_31138 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31148_31178 = state_31142__$1;
(statearr_31148_31178[(2)] = inst_31138);

(statearr_31148_31178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (13))){
var inst_31131 = cljs.core.async.close_BANG_.call(null,out);
var state_31142__$1 = state_31142;
var statearr_31149_31179 = state_31142__$1;
(statearr_31149_31179[(2)] = inst_31131);

(statearr_31149_31179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (6))){
var state_31142__$1 = state_31142;
var statearr_31150_31180 = state_31142__$1;
(statearr_31150_31180[(2)] = null);

(statearr_31150_31180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (3))){
var inst_31140 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31142__$1,inst_31140);
} else {
if((state_val_31143 === (12))){
var inst_31128 = (state_31142[(8)]);
var inst_31128__$1 = (state_31142[(2)]);
var inst_31129 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31128__$1);
var state_31142__$1 = (function (){var statearr_31151 = state_31142;
(statearr_31151[(8)] = inst_31128__$1);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31129)){
var statearr_31152_31181 = state_31142__$1;
(statearr_31152_31181[(1)] = (13));

} else {
var statearr_31153_31182 = state_31142__$1;
(statearr_31153_31182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (2))){
var inst_31105 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31106 = (0);
var state_31142__$1 = (function (){var statearr_31154 = state_31142;
(statearr_31154[(9)] = inst_31105);

(statearr_31154[(7)] = inst_31106);

return statearr_31154;
})();
var statearr_31155_31183 = state_31142__$1;
(statearr_31155_31183[(2)] = null);

(statearr_31155_31183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (11))){
var inst_31106 = (state_31142[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31142,(10),Object,null,(9));
var inst_31115 = chs__$1.call(null,inst_31106);
var inst_31116 = done.call(null,inst_31106);
var inst_31117 = cljs.core.async.take_BANG_.call(null,inst_31115,inst_31116);
var state_31142__$1 = state_31142;
var statearr_31156_31184 = state_31142__$1;
(statearr_31156_31184[(2)] = inst_31117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (9))){
var inst_31106 = (state_31142[(7)]);
var inst_31119 = (state_31142[(2)]);
var inst_31120 = (inst_31106 + (1));
var inst_31106__$1 = inst_31120;
var state_31142__$1 = (function (){var statearr_31157 = state_31142;
(statearr_31157[(10)] = inst_31119);

(statearr_31157[(7)] = inst_31106__$1);

return statearr_31157;
})();
var statearr_31158_31185 = state_31142__$1;
(statearr_31158_31185[(2)] = null);

(statearr_31158_31185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (5))){
var inst_31126 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31159 = state_31142;
(statearr_31159[(11)] = inst_31126);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(12),dchan);
} else {
if((state_val_31143 === (14))){
var inst_31128 = (state_31142[(8)]);
var inst_31133 = cljs.core.apply.call(null,f,inst_31128);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31142__$1,(16),out,inst_31133);
} else {
if((state_val_31143 === (16))){
var inst_31135 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31160 = state_31142;
(statearr_31160[(12)] = inst_31135);

return statearr_31160;
})();
var statearr_31161_31186 = state_31142__$1;
(statearr_31161_31186[(2)] = null);

(statearr_31161_31186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (10))){
var inst_31110 = (state_31142[(2)]);
var inst_31111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31142__$1 = (function (){var statearr_31162 = state_31142;
(statearr_31162[(13)] = inst_31110);

return statearr_31162;
})();
var statearr_31163_31187 = state_31142__$1;
(statearr_31163_31187[(2)] = inst_31111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (8))){
var inst_31124 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31164_31188 = state_31142__$1;
(statearr_31164_31188[(2)] = inst_31124);

(statearr_31164_31188[(1)] = (5));


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
});})(c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22859__auto__,c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31168[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31168[(1)] = (1));

return statearr_31168;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31142){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object)){
var ex__22863__auto__ = e31169;
var statearr_31170_31189 = state_31142;
(statearr_31170_31189[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31142;
state_31142 = G__31190;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22923__auto__ = (function (){var statearr_31171 = f__22922__auto__.call(null);
(statearr_31171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31173);

return statearr_31171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31173,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__31193 = arguments.length;
switch (G__31193) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31248,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31248,out){
return (function (state_31223){
var state_val_31224 = (state_31223[(1)]);
if((state_val_31224 === (7))){
var inst_31203 = (state_31223[(7)]);
var inst_31202 = (state_31223[(8)]);
var inst_31202__$1 = (state_31223[(2)]);
var inst_31203__$1 = cljs.core.nth.call(null,inst_31202__$1,(0),null);
var inst_31204 = cljs.core.nth.call(null,inst_31202__$1,(1),null);
var inst_31205 = (inst_31203__$1 == null);
var state_31223__$1 = (function (){var statearr_31225 = state_31223;
(statearr_31225[(7)] = inst_31203__$1);

(statearr_31225[(8)] = inst_31202__$1);

(statearr_31225[(9)] = inst_31204);

return statearr_31225;
})();
if(cljs.core.truth_(inst_31205)){
var statearr_31226_31249 = state_31223__$1;
(statearr_31226_31249[(1)] = (8));

} else {
var statearr_31227_31250 = state_31223__$1;
(statearr_31227_31250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (1))){
var inst_31194 = cljs.core.vec.call(null,chs);
var inst_31195 = inst_31194;
var state_31223__$1 = (function (){var statearr_31228 = state_31223;
(statearr_31228[(10)] = inst_31195);

return statearr_31228;
})();
var statearr_31229_31251 = state_31223__$1;
(statearr_31229_31251[(2)] = null);

(statearr_31229_31251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (4))){
var inst_31195 = (state_31223[(10)]);
var state_31223__$1 = state_31223;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31223__$1,(7),inst_31195);
} else {
if((state_val_31224 === (6))){
var inst_31219 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
var statearr_31230_31252 = state_31223__$1;
(statearr_31230_31252[(2)] = inst_31219);

(statearr_31230_31252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (3))){
var inst_31221 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31223__$1,inst_31221);
} else {
if((state_val_31224 === (2))){
var inst_31195 = (state_31223[(10)]);
var inst_31197 = cljs.core.count.call(null,inst_31195);
var inst_31198 = (inst_31197 > (0));
var state_31223__$1 = state_31223;
if(cljs.core.truth_(inst_31198)){
var statearr_31232_31253 = state_31223__$1;
(statearr_31232_31253[(1)] = (4));

} else {
var statearr_31233_31254 = state_31223__$1;
(statearr_31233_31254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (11))){
var inst_31195 = (state_31223[(10)]);
var inst_31212 = (state_31223[(2)]);
var tmp31231 = inst_31195;
var inst_31195__$1 = tmp31231;
var state_31223__$1 = (function (){var statearr_31234 = state_31223;
(statearr_31234[(11)] = inst_31212);

(statearr_31234[(10)] = inst_31195__$1);

return statearr_31234;
})();
var statearr_31235_31255 = state_31223__$1;
(statearr_31235_31255[(2)] = null);

(statearr_31235_31255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (9))){
var inst_31203 = (state_31223[(7)]);
var state_31223__$1 = state_31223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31223__$1,(11),out,inst_31203);
} else {
if((state_val_31224 === (5))){
var inst_31217 = cljs.core.async.close_BANG_.call(null,out);
var state_31223__$1 = state_31223;
var statearr_31236_31256 = state_31223__$1;
(statearr_31236_31256[(2)] = inst_31217);

(statearr_31236_31256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (10))){
var inst_31215 = (state_31223[(2)]);
var state_31223__$1 = state_31223;
var statearr_31237_31257 = state_31223__$1;
(statearr_31237_31257[(2)] = inst_31215);

(statearr_31237_31257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31224 === (8))){
var inst_31203 = (state_31223[(7)]);
var inst_31195 = (state_31223[(10)]);
var inst_31202 = (state_31223[(8)]);
var inst_31204 = (state_31223[(9)]);
var inst_31207 = (function (){var c = inst_31204;
var v = inst_31203;
var vec__31200 = inst_31202;
var cs = inst_31195;
return ((function (c,v,vec__31200,cs,inst_31203,inst_31195,inst_31202,inst_31204,state_val_31224,c__22921__auto___31248,out){
return (function (p1__31191_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31191_SHARP_);
});
;})(c,v,vec__31200,cs,inst_31203,inst_31195,inst_31202,inst_31204,state_val_31224,c__22921__auto___31248,out))
})();
var inst_31208 = cljs.core.filterv.call(null,inst_31207,inst_31195);
var inst_31195__$1 = inst_31208;
var state_31223__$1 = (function (){var statearr_31238 = state_31223;
(statearr_31238[(10)] = inst_31195__$1);

return statearr_31238;
})();
var statearr_31239_31258 = state_31223__$1;
(statearr_31239_31258[(2)] = null);

(statearr_31239_31258[(1)] = (2));


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
});})(c__22921__auto___31248,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31248,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31243[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31243[(1)] = (1));

return statearr_31243;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31223){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31244){if((e31244 instanceof Object)){
var ex__22863__auto__ = e31244;
var statearr_31245_31259 = state_31223;
(statearr_31245_31259[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_31223;
state_31223 = G__31260;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31248,out))
})();
var state__22923__auto__ = (function (){var statearr_31246 = f__22922__auto__.call(null);
(statearr_31246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31248);

return statearr_31246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31248,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__31262 = arguments.length;
switch (G__31262) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31310,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31310,out){
return (function (state_31286){
var state_val_31287 = (state_31286[(1)]);
if((state_val_31287 === (7))){
var inst_31268 = (state_31286[(7)]);
var inst_31268__$1 = (state_31286[(2)]);
var inst_31269 = (inst_31268__$1 == null);
var inst_31270 = cljs.core.not.call(null,inst_31269);
var state_31286__$1 = (function (){var statearr_31288 = state_31286;
(statearr_31288[(7)] = inst_31268__$1);

return statearr_31288;
})();
if(inst_31270){
var statearr_31289_31311 = state_31286__$1;
(statearr_31289_31311[(1)] = (8));

} else {
var statearr_31290_31312 = state_31286__$1;
(statearr_31290_31312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (1))){
var inst_31263 = (0);
var state_31286__$1 = (function (){var statearr_31291 = state_31286;
(statearr_31291[(8)] = inst_31263);

return statearr_31291;
})();
var statearr_31292_31313 = state_31286__$1;
(statearr_31292_31313[(2)] = null);

(statearr_31292_31313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (4))){
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31286__$1,(7),ch);
} else {
if((state_val_31287 === (6))){
var inst_31281 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31293_31314 = state_31286__$1;
(statearr_31293_31314[(2)] = inst_31281);

(statearr_31293_31314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (3))){
var inst_31283 = (state_31286[(2)]);
var inst_31284 = cljs.core.async.close_BANG_.call(null,out);
var state_31286__$1 = (function (){var statearr_31294 = state_31286;
(statearr_31294[(9)] = inst_31283);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31286__$1,inst_31284);
} else {
if((state_val_31287 === (2))){
var inst_31263 = (state_31286[(8)]);
var inst_31265 = (inst_31263 < n);
var state_31286__$1 = state_31286;
if(cljs.core.truth_(inst_31265)){
var statearr_31295_31315 = state_31286__$1;
(statearr_31295_31315[(1)] = (4));

} else {
var statearr_31296_31316 = state_31286__$1;
(statearr_31296_31316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (11))){
var inst_31263 = (state_31286[(8)]);
var inst_31273 = (state_31286[(2)]);
var inst_31274 = (inst_31263 + (1));
var inst_31263__$1 = inst_31274;
var state_31286__$1 = (function (){var statearr_31297 = state_31286;
(statearr_31297[(8)] = inst_31263__$1);

(statearr_31297[(10)] = inst_31273);

return statearr_31297;
})();
var statearr_31298_31317 = state_31286__$1;
(statearr_31298_31317[(2)] = null);

(statearr_31298_31317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (9))){
var state_31286__$1 = state_31286;
var statearr_31299_31318 = state_31286__$1;
(statearr_31299_31318[(2)] = null);

(statearr_31299_31318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (5))){
var state_31286__$1 = state_31286;
var statearr_31300_31319 = state_31286__$1;
(statearr_31300_31319[(2)] = null);

(statearr_31300_31319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (10))){
var inst_31278 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31301_31320 = state_31286__$1;
(statearr_31301_31320[(2)] = inst_31278);

(statearr_31301_31320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (8))){
var inst_31268 = (state_31286[(7)]);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31286__$1,(11),out,inst_31268);
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
});})(c__22921__auto___31310,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31310,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31305[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31305[(1)] = (1));

return statearr_31305;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31286){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31306){if((e31306 instanceof Object)){
var ex__22863__auto__ = e31306;
var statearr_31307_31321 = state_31286;
(statearr_31307_31321[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31322 = state_31286;
state_31286 = G__31322;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31310,out))
})();
var state__22923__auto__ = (function (){var statearr_31308 = f__22922__auto__.call(null);
(statearr_31308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31310);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31310,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t31330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31330 = (function (ch,f,map_LT_,meta31331){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31331 = meta31331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t31333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31333 = (function (fn1,_,meta31331,map_LT_,f,ch,meta31334){
this.fn1 = fn1;
this._ = _;
this.meta31331 = meta31331;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31334 = meta31334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t31333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31323_SHARP_){
return f1.call(null,(((p1__31323_SHARP_ == null))?null:self__.f.call(null,p1__31323_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t31333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31335){
var self__ = this;
var _31335__$1 = this;
return self__.meta31334;
});})(___$1))
;

cljs.core.async.t31333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31335,meta31334__$1){
var self__ = this;
var _31335__$1 = this;
return (new cljs.core.async.t31333(self__.fn1,self__._,self__.meta31331,self__.map_LT_,self__.f,self__.ch,meta31334__$1));
});})(___$1))
;

cljs.core.async.t31333.cljs$lang$type = true;

cljs.core.async.t31333.cljs$lang$ctorStr = "cljs.core.async/t31333";

cljs.core.async.t31333.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31333");
});})(___$1))
;

cljs.core.async.__GT_t31333 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t31333(fn1__$1,___$2,meta31331__$1,map_LT___$1,f__$1,ch__$1,meta31334){
return (new cljs.core.async.t31333(fn1__$1,___$2,meta31331__$1,map_LT___$1,f__$1,ch__$1,meta31334));
});})(___$1))
;

}

return (new cljs.core.async.t31333(fn1,___$1,self__.meta31331,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18104__auto__ = ret;
if(cljs.core.truth_(and__18104__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18104__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31332){
var self__ = this;
var _31332__$1 = this;
return self__.meta31331;
});

cljs.core.async.t31330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31332,meta31331__$1){
var self__ = this;
var _31332__$1 = this;
return (new cljs.core.async.t31330(self__.ch,self__.f,self__.map_LT_,meta31331__$1));
});

cljs.core.async.t31330.cljs$lang$type = true;

cljs.core.async.t31330.cljs$lang$ctorStr = "cljs.core.async/t31330";

cljs.core.async.t31330.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31330");
});

cljs.core.async.__GT_t31330 = (function cljs$core$async$map_LT__$___GT_t31330(ch__$1,f__$1,map_LT___$1,meta31331){
return (new cljs.core.async.t31330(ch__$1,f__$1,map_LT___$1,meta31331));
});

}

return (new cljs.core.async.t31330(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t31339 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31339 = (function (ch,f,map_GT_,meta31340){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31340 = meta31340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31341){
var self__ = this;
var _31341__$1 = this;
return self__.meta31340;
});

cljs.core.async.t31339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31341,meta31340__$1){
var self__ = this;
var _31341__$1 = this;
return (new cljs.core.async.t31339(self__.ch,self__.f,self__.map_GT_,meta31340__$1));
});

cljs.core.async.t31339.cljs$lang$type = true;

cljs.core.async.t31339.cljs$lang$ctorStr = "cljs.core.async/t31339";

cljs.core.async.t31339.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31339");
});

cljs.core.async.__GT_t31339 = (function cljs$core$async$map_GT__$___GT_t31339(ch__$1,f__$1,map_GT___$1,meta31340){
return (new cljs.core.async.t31339(ch__$1,f__$1,map_GT___$1,meta31340));
});

}

return (new cljs.core.async.t31339(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t31345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31345 = (function (ch,p,filter_GT_,meta31346){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31346 = meta31346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t31345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t31345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31347){
var self__ = this;
var _31347__$1 = this;
return self__.meta31346;
});

cljs.core.async.t31345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31347,meta31346__$1){
var self__ = this;
var _31347__$1 = this;
return (new cljs.core.async.t31345(self__.ch,self__.p,self__.filter_GT_,meta31346__$1));
});

cljs.core.async.t31345.cljs$lang$type = true;

cljs.core.async.t31345.cljs$lang$ctorStr = "cljs.core.async/t31345";

cljs.core.async.t31345.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t31345");
});

cljs.core.async.__GT_t31345 = (function cljs$core$async$filter_GT__$___GT_t31345(ch__$1,p__$1,filter_GT___$1,meta31346){
return (new cljs.core.async.t31345(ch__$1,p__$1,filter_GT___$1,meta31346));
});

}

return (new cljs.core.async.t31345(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__31349 = arguments.length;
switch (G__31349) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31392,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31392,out){
return (function (state_31370){
var state_val_31371 = (state_31370[(1)]);
if((state_val_31371 === (7))){
var inst_31366 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31372_31393 = state_31370__$1;
(statearr_31372_31393[(2)] = inst_31366);

(statearr_31372_31393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (1))){
var state_31370__$1 = state_31370;
var statearr_31373_31394 = state_31370__$1;
(statearr_31373_31394[(2)] = null);

(statearr_31373_31394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (4))){
var inst_31352 = (state_31370[(7)]);
var inst_31352__$1 = (state_31370[(2)]);
var inst_31353 = (inst_31352__$1 == null);
var state_31370__$1 = (function (){var statearr_31374 = state_31370;
(statearr_31374[(7)] = inst_31352__$1);

return statearr_31374;
})();
if(cljs.core.truth_(inst_31353)){
var statearr_31375_31395 = state_31370__$1;
(statearr_31375_31395[(1)] = (5));

} else {
var statearr_31376_31396 = state_31370__$1;
(statearr_31376_31396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (6))){
var inst_31352 = (state_31370[(7)]);
var inst_31357 = p.call(null,inst_31352);
var state_31370__$1 = state_31370;
if(cljs.core.truth_(inst_31357)){
var statearr_31377_31397 = state_31370__$1;
(statearr_31377_31397[(1)] = (8));

} else {
var statearr_31378_31398 = state_31370__$1;
(statearr_31378_31398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (3))){
var inst_31368 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31370__$1,inst_31368);
} else {
if((state_val_31371 === (2))){
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31370__$1,(4),ch);
} else {
if((state_val_31371 === (11))){
var inst_31360 = (state_31370[(2)]);
var state_31370__$1 = state_31370;
var statearr_31379_31399 = state_31370__$1;
(statearr_31379_31399[(2)] = inst_31360);

(statearr_31379_31399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (9))){
var state_31370__$1 = state_31370;
var statearr_31380_31400 = state_31370__$1;
(statearr_31380_31400[(2)] = null);

(statearr_31380_31400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (5))){
var inst_31355 = cljs.core.async.close_BANG_.call(null,out);
var state_31370__$1 = state_31370;
var statearr_31381_31401 = state_31370__$1;
(statearr_31381_31401[(2)] = inst_31355);

(statearr_31381_31401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (10))){
var inst_31363 = (state_31370[(2)]);
var state_31370__$1 = (function (){var statearr_31382 = state_31370;
(statearr_31382[(8)] = inst_31363);

return statearr_31382;
})();
var statearr_31383_31402 = state_31370__$1;
(statearr_31383_31402[(2)] = null);

(statearr_31383_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31371 === (8))){
var inst_31352 = (state_31370[(7)]);
var state_31370__$1 = state_31370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31370__$1,(11),out,inst_31352);
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
});})(c__22921__auto___31392,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31392,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31387 = [null,null,null,null,null,null,null,null,null];
(statearr_31387[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31387[(1)] = (1));

return statearr_31387;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31370){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31388){if((e31388 instanceof Object)){
var ex__22863__auto__ = e31388;
var statearr_31389_31403 = state_31370;
(statearr_31389_31403[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31404 = state_31370;
state_31370 = G__31404;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31392,out))
})();
var state__22923__auto__ = (function (){var statearr_31390 = f__22922__auto__.call(null);
(statearr_31390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31392);

return statearr_31390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31392,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__31406 = arguments.length;
switch (G__31406) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_31573){
var state_val_31574 = (state_31573[(1)]);
if((state_val_31574 === (7))){
var inst_31569 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31575_31616 = state_31573__$1;
(statearr_31575_31616[(2)] = inst_31569);

(statearr_31575_31616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (20))){
var inst_31539 = (state_31573[(7)]);
var inst_31550 = (state_31573[(2)]);
var inst_31551 = cljs.core.next.call(null,inst_31539);
var inst_31525 = inst_31551;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31573__$1 = (function (){var statearr_31576 = state_31573;
(statearr_31576[(8)] = inst_31525);

(statearr_31576[(9)] = inst_31528);

(statearr_31576[(10)] = inst_31527);

(statearr_31576[(11)] = inst_31550);

(statearr_31576[(12)] = inst_31526);

return statearr_31576;
})();
var statearr_31577_31617 = state_31573__$1;
(statearr_31577_31617[(2)] = null);

(statearr_31577_31617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (1))){
var state_31573__$1 = state_31573;
var statearr_31578_31618 = state_31573__$1;
(statearr_31578_31618[(2)] = null);

(statearr_31578_31618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (4))){
var inst_31514 = (state_31573[(13)]);
var inst_31514__$1 = (state_31573[(2)]);
var inst_31515 = (inst_31514__$1 == null);
var state_31573__$1 = (function (){var statearr_31579 = state_31573;
(statearr_31579[(13)] = inst_31514__$1);

return statearr_31579;
})();
if(cljs.core.truth_(inst_31515)){
var statearr_31580_31619 = state_31573__$1;
(statearr_31580_31619[(1)] = (5));

} else {
var statearr_31581_31620 = state_31573__$1;
(statearr_31581_31620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (15))){
var state_31573__$1 = state_31573;
var statearr_31585_31621 = state_31573__$1;
(statearr_31585_31621[(2)] = null);

(statearr_31585_31621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (21))){
var state_31573__$1 = state_31573;
var statearr_31586_31622 = state_31573__$1;
(statearr_31586_31622[(2)] = null);

(statearr_31586_31622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (13))){
var inst_31525 = (state_31573[(8)]);
var inst_31528 = (state_31573[(9)]);
var inst_31527 = (state_31573[(10)]);
var inst_31526 = (state_31573[(12)]);
var inst_31535 = (state_31573[(2)]);
var inst_31536 = (inst_31528 + (1));
var tmp31582 = inst_31525;
var tmp31583 = inst_31527;
var tmp31584 = inst_31526;
var inst_31525__$1 = tmp31582;
var inst_31526__$1 = tmp31584;
var inst_31527__$1 = tmp31583;
var inst_31528__$1 = inst_31536;
var state_31573__$1 = (function (){var statearr_31587 = state_31573;
(statearr_31587[(8)] = inst_31525__$1);

(statearr_31587[(9)] = inst_31528__$1);

(statearr_31587[(14)] = inst_31535);

(statearr_31587[(10)] = inst_31527__$1);

(statearr_31587[(12)] = inst_31526__$1);

return statearr_31587;
})();
var statearr_31588_31623 = state_31573__$1;
(statearr_31588_31623[(2)] = null);

(statearr_31588_31623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (22))){
var state_31573__$1 = state_31573;
var statearr_31589_31624 = state_31573__$1;
(statearr_31589_31624[(2)] = null);

(statearr_31589_31624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (6))){
var inst_31514 = (state_31573[(13)]);
var inst_31523 = f.call(null,inst_31514);
var inst_31524 = cljs.core.seq.call(null,inst_31523);
var inst_31525 = inst_31524;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31573__$1 = (function (){var statearr_31590 = state_31573;
(statearr_31590[(8)] = inst_31525);

(statearr_31590[(9)] = inst_31528);

(statearr_31590[(10)] = inst_31527);

(statearr_31590[(12)] = inst_31526);

return statearr_31590;
})();
var statearr_31591_31625 = state_31573__$1;
(statearr_31591_31625[(2)] = null);

(statearr_31591_31625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (17))){
var inst_31539 = (state_31573[(7)]);
var inst_31543 = cljs.core.chunk_first.call(null,inst_31539);
var inst_31544 = cljs.core.chunk_rest.call(null,inst_31539);
var inst_31545 = cljs.core.count.call(null,inst_31543);
var inst_31525 = inst_31544;
var inst_31526 = inst_31543;
var inst_31527 = inst_31545;
var inst_31528 = (0);
var state_31573__$1 = (function (){var statearr_31592 = state_31573;
(statearr_31592[(8)] = inst_31525);

(statearr_31592[(9)] = inst_31528);

(statearr_31592[(10)] = inst_31527);

(statearr_31592[(12)] = inst_31526);

return statearr_31592;
})();
var statearr_31593_31626 = state_31573__$1;
(statearr_31593_31626[(2)] = null);

(statearr_31593_31626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (3))){
var inst_31571 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31573__$1,inst_31571);
} else {
if((state_val_31574 === (12))){
var inst_31559 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31594_31627 = state_31573__$1;
(statearr_31594_31627[(2)] = inst_31559);

(statearr_31594_31627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (2))){
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31573__$1,(4),in$);
} else {
if((state_val_31574 === (23))){
var inst_31567 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31595_31628 = state_31573__$1;
(statearr_31595_31628[(2)] = inst_31567);

(statearr_31595_31628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (19))){
var inst_31554 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31596_31629 = state_31573__$1;
(statearr_31596_31629[(2)] = inst_31554);

(statearr_31596_31629[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (11))){
var inst_31525 = (state_31573[(8)]);
var inst_31539 = (state_31573[(7)]);
var inst_31539__$1 = cljs.core.seq.call(null,inst_31525);
var state_31573__$1 = (function (){var statearr_31597 = state_31573;
(statearr_31597[(7)] = inst_31539__$1);

return statearr_31597;
})();
if(inst_31539__$1){
var statearr_31598_31630 = state_31573__$1;
(statearr_31598_31630[(1)] = (14));

} else {
var statearr_31599_31631 = state_31573__$1;
(statearr_31599_31631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (9))){
var inst_31561 = (state_31573[(2)]);
var inst_31562 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31573__$1 = (function (){var statearr_31600 = state_31573;
(statearr_31600[(15)] = inst_31561);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31562)){
var statearr_31601_31632 = state_31573__$1;
(statearr_31601_31632[(1)] = (21));

} else {
var statearr_31602_31633 = state_31573__$1;
(statearr_31602_31633[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (5))){
var inst_31517 = cljs.core.async.close_BANG_.call(null,out);
var state_31573__$1 = state_31573;
var statearr_31603_31634 = state_31573__$1;
(statearr_31603_31634[(2)] = inst_31517);

(statearr_31603_31634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (14))){
var inst_31539 = (state_31573[(7)]);
var inst_31541 = cljs.core.chunked_seq_QMARK_.call(null,inst_31539);
var state_31573__$1 = state_31573;
if(inst_31541){
var statearr_31604_31635 = state_31573__$1;
(statearr_31604_31635[(1)] = (17));

} else {
var statearr_31605_31636 = state_31573__$1;
(statearr_31605_31636[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (16))){
var inst_31557 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31606_31637 = state_31573__$1;
(statearr_31606_31637[(2)] = inst_31557);

(statearr_31606_31637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (10))){
var inst_31528 = (state_31573[(9)]);
var inst_31526 = (state_31573[(12)]);
var inst_31533 = cljs.core._nth.call(null,inst_31526,inst_31528);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31573__$1,(13),out,inst_31533);
} else {
if((state_val_31574 === (18))){
var inst_31539 = (state_31573[(7)]);
var inst_31548 = cljs.core.first.call(null,inst_31539);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31573__$1,(20),out,inst_31548);
} else {
if((state_val_31574 === (8))){
var inst_31528 = (state_31573[(9)]);
var inst_31527 = (state_31573[(10)]);
var inst_31530 = (inst_31528 < inst_31527);
var inst_31531 = inst_31530;
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31531)){
var statearr_31607_31638 = state_31573__$1;
(statearr_31607_31638[(1)] = (10));

} else {
var statearr_31608_31639 = state_31573__$1;
(statearr_31608_31639[(1)] = (11));

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
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____1 = (function (state_31573){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31613){if((e31613 instanceof Object)){
var ex__22863__auto__ = e31613;
var statearr_31614_31640 = state_31573;
(statearr_31614_31640[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31641 = state_31573;
state_31573 = G__31641;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__ = function(state_31573){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____1.call(this,state_31573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22860__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_31615 = f__22922__auto__.call(null);
(statearr_31615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__31643 = arguments.length;
switch (G__31643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__31646 = arguments.length;
switch (G__31646) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__31649 = arguments.length;
switch (G__31649) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31699,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31699,out){
return (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31668 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31675_31700 = state_31673__$1;
(statearr_31675_31700[(2)] = inst_31668);

(statearr_31675_31700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var inst_31650 = null;
var state_31673__$1 = (function (){var statearr_31676 = state_31673;
(statearr_31676[(7)] = inst_31650);

return statearr_31676;
})();
var statearr_31677_31701 = state_31673__$1;
(statearr_31677_31701[(2)] = null);

(statearr_31677_31701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31653 = (state_31673[(8)]);
var inst_31653__$1 = (state_31673[(2)]);
var inst_31654 = (inst_31653__$1 == null);
var inst_31655 = cljs.core.not.call(null,inst_31654);
var state_31673__$1 = (function (){var statearr_31678 = state_31673;
(statearr_31678[(8)] = inst_31653__$1);

return statearr_31678;
})();
if(inst_31655){
var statearr_31679_31702 = state_31673__$1;
(statearr_31679_31702[(1)] = (5));

} else {
var statearr_31680_31703 = state_31673__$1;
(statearr_31680_31703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var state_31673__$1 = state_31673;
var statearr_31681_31704 = state_31673__$1;
(statearr_31681_31704[(2)] = null);

(statearr_31681_31704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31670 = (state_31673[(2)]);
var inst_31671 = cljs.core.async.close_BANG_.call(null,out);
var state_31673__$1 = (function (){var statearr_31682 = state_31673;
(statearr_31682[(9)] = inst_31670);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31673__$1,inst_31671);
} else {
if((state_val_31674 === (2))){
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,(4),ch);
} else {
if((state_val_31674 === (11))){
var inst_31653 = (state_31673[(8)]);
var inst_31662 = (state_31673[(2)]);
var inst_31650 = inst_31653;
var state_31673__$1 = (function (){var statearr_31683 = state_31673;
(statearr_31683[(7)] = inst_31650);

(statearr_31683[(10)] = inst_31662);

return statearr_31683;
})();
var statearr_31684_31705 = state_31673__$1;
(statearr_31684_31705[(2)] = null);

(statearr_31684_31705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var inst_31653 = (state_31673[(8)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31673__$1,(11),out,inst_31653);
} else {
if((state_val_31674 === (5))){
var inst_31650 = (state_31673[(7)]);
var inst_31653 = (state_31673[(8)]);
var inst_31657 = cljs.core._EQ_.call(null,inst_31653,inst_31650);
var state_31673__$1 = state_31673;
if(inst_31657){
var statearr_31686_31706 = state_31673__$1;
(statearr_31686_31706[(1)] = (8));

} else {
var statearr_31687_31707 = state_31673__$1;
(statearr_31687_31707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31665 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31688_31708 = state_31673__$1;
(statearr_31688_31708[(2)] = inst_31665);

(statearr_31688_31708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31650 = (state_31673[(7)]);
var tmp31685 = inst_31650;
var inst_31650__$1 = tmp31685;
var state_31673__$1 = (function (){var statearr_31689 = state_31673;
(statearr_31689[(7)] = inst_31650__$1);

return statearr_31689;
})();
var statearr_31690_31709 = state_31673__$1;
(statearr_31690_31709[(2)] = null);

(statearr_31690_31709[(1)] = (2));


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
});})(c__22921__auto___31699,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31699,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31694[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31694[(1)] = (1));

return statearr_31694;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31673){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31695){if((e31695 instanceof Object)){
var ex__22863__auto__ = e31695;
var statearr_31696_31710 = state_31673;
(statearr_31696_31710[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31673;
state_31673 = G__31711;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31699,out))
})();
var state__22923__auto__ = (function (){var statearr_31697 = f__22922__auto__.call(null);
(statearr_31697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31699);

return statearr_31697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31699,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__31713 = arguments.length;
switch (G__31713) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31782,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31782,out){
return (function (state_31751){
var state_val_31752 = (state_31751[(1)]);
if((state_val_31752 === (7))){
var inst_31747 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
var statearr_31753_31783 = state_31751__$1;
(statearr_31753_31783[(2)] = inst_31747);

(statearr_31753_31783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (1))){
var inst_31714 = (new Array(n));
var inst_31715 = inst_31714;
var inst_31716 = (0);
var state_31751__$1 = (function (){var statearr_31754 = state_31751;
(statearr_31754[(7)] = inst_31716);

(statearr_31754[(8)] = inst_31715);

return statearr_31754;
})();
var statearr_31755_31784 = state_31751__$1;
(statearr_31755_31784[(2)] = null);

(statearr_31755_31784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (4))){
var inst_31719 = (state_31751[(9)]);
var inst_31719__$1 = (state_31751[(2)]);
var inst_31720 = (inst_31719__$1 == null);
var inst_31721 = cljs.core.not.call(null,inst_31720);
var state_31751__$1 = (function (){var statearr_31756 = state_31751;
(statearr_31756[(9)] = inst_31719__$1);

return statearr_31756;
})();
if(inst_31721){
var statearr_31757_31785 = state_31751__$1;
(statearr_31757_31785[(1)] = (5));

} else {
var statearr_31758_31786 = state_31751__$1;
(statearr_31758_31786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (15))){
var inst_31741 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
var statearr_31759_31787 = state_31751__$1;
(statearr_31759_31787[(2)] = inst_31741);

(statearr_31759_31787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (13))){
var state_31751__$1 = state_31751;
var statearr_31760_31788 = state_31751__$1;
(statearr_31760_31788[(2)] = null);

(statearr_31760_31788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (6))){
var inst_31716 = (state_31751[(7)]);
var inst_31737 = (inst_31716 > (0));
var state_31751__$1 = state_31751;
if(cljs.core.truth_(inst_31737)){
var statearr_31761_31789 = state_31751__$1;
(statearr_31761_31789[(1)] = (12));

} else {
var statearr_31762_31790 = state_31751__$1;
(statearr_31762_31790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (3))){
var inst_31749 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31751__$1,inst_31749);
} else {
if((state_val_31752 === (12))){
var inst_31715 = (state_31751[(8)]);
var inst_31739 = cljs.core.vec.call(null,inst_31715);
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31751__$1,(15),out,inst_31739);
} else {
if((state_val_31752 === (2))){
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31751__$1,(4),ch);
} else {
if((state_val_31752 === (11))){
var inst_31731 = (state_31751[(2)]);
var inst_31732 = (new Array(n));
var inst_31715 = inst_31732;
var inst_31716 = (0);
var state_31751__$1 = (function (){var statearr_31763 = state_31751;
(statearr_31763[(7)] = inst_31716);

(statearr_31763[(10)] = inst_31731);

(statearr_31763[(8)] = inst_31715);

return statearr_31763;
})();
var statearr_31764_31791 = state_31751__$1;
(statearr_31764_31791[(2)] = null);

(statearr_31764_31791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (9))){
var inst_31715 = (state_31751[(8)]);
var inst_31729 = cljs.core.vec.call(null,inst_31715);
var state_31751__$1 = state_31751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31751__$1,(11),out,inst_31729);
} else {
if((state_val_31752 === (5))){
var inst_31716 = (state_31751[(7)]);
var inst_31715 = (state_31751[(8)]);
var inst_31724 = (state_31751[(11)]);
var inst_31719 = (state_31751[(9)]);
var inst_31723 = (inst_31715[inst_31716] = inst_31719);
var inst_31724__$1 = (inst_31716 + (1));
var inst_31725 = (inst_31724__$1 < n);
var state_31751__$1 = (function (){var statearr_31765 = state_31751;
(statearr_31765[(12)] = inst_31723);

(statearr_31765[(11)] = inst_31724__$1);

return statearr_31765;
})();
if(cljs.core.truth_(inst_31725)){
var statearr_31766_31792 = state_31751__$1;
(statearr_31766_31792[(1)] = (8));

} else {
var statearr_31767_31793 = state_31751__$1;
(statearr_31767_31793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (14))){
var inst_31744 = (state_31751[(2)]);
var inst_31745 = cljs.core.async.close_BANG_.call(null,out);
var state_31751__$1 = (function (){var statearr_31769 = state_31751;
(statearr_31769[(13)] = inst_31744);

return statearr_31769;
})();
var statearr_31770_31794 = state_31751__$1;
(statearr_31770_31794[(2)] = inst_31745);

(statearr_31770_31794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (10))){
var inst_31735 = (state_31751[(2)]);
var state_31751__$1 = state_31751;
var statearr_31771_31795 = state_31751__$1;
(statearr_31771_31795[(2)] = inst_31735);

(statearr_31771_31795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31752 === (8))){
var inst_31715 = (state_31751[(8)]);
var inst_31724 = (state_31751[(11)]);
var tmp31768 = inst_31715;
var inst_31715__$1 = tmp31768;
var inst_31716 = inst_31724;
var state_31751__$1 = (function (){var statearr_31772 = state_31751;
(statearr_31772[(7)] = inst_31716);

(statearr_31772[(8)] = inst_31715__$1);

return statearr_31772;
})();
var statearr_31773_31796 = state_31751__$1;
(statearr_31773_31796[(2)] = null);

(statearr_31773_31796[(1)] = (2));


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
});})(c__22921__auto___31782,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31782,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31777[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31777[(1)] = (1));

return statearr_31777;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31751){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31778){if((e31778 instanceof Object)){
var ex__22863__auto__ = e31778;
var statearr_31779_31797 = state_31751;
(statearr_31779_31797[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31798 = state_31751;
state_31751 = G__31798;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31782,out))
})();
var state__22923__auto__ = (function (){var statearr_31780 = f__22922__auto__.call(null);
(statearr_31780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31782);

return statearr_31780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31782,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__31800 = arguments.length;
switch (G__31800) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22921__auto___31873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___31873,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___31873,out){
return (function (state_31842){
var state_val_31843 = (state_31842[(1)]);
if((state_val_31843 === (7))){
var inst_31838 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31844_31874 = state_31842__$1;
(statearr_31844_31874[(2)] = inst_31838);

(statearr_31844_31874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (1))){
var inst_31801 = [];
var inst_31802 = inst_31801;
var inst_31803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31842__$1 = (function (){var statearr_31845 = state_31842;
(statearr_31845[(7)] = inst_31802);

(statearr_31845[(8)] = inst_31803);

return statearr_31845;
})();
var statearr_31846_31875 = state_31842__$1;
(statearr_31846_31875[(2)] = null);

(statearr_31846_31875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (4))){
var inst_31806 = (state_31842[(9)]);
var inst_31806__$1 = (state_31842[(2)]);
var inst_31807 = (inst_31806__$1 == null);
var inst_31808 = cljs.core.not.call(null,inst_31807);
var state_31842__$1 = (function (){var statearr_31847 = state_31842;
(statearr_31847[(9)] = inst_31806__$1);

return statearr_31847;
})();
if(inst_31808){
var statearr_31848_31876 = state_31842__$1;
(statearr_31848_31876[(1)] = (5));

} else {
var statearr_31849_31877 = state_31842__$1;
(statearr_31849_31877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (15))){
var inst_31832 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31850_31878 = state_31842__$1;
(statearr_31850_31878[(2)] = inst_31832);

(statearr_31850_31878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (13))){
var state_31842__$1 = state_31842;
var statearr_31851_31879 = state_31842__$1;
(statearr_31851_31879[(2)] = null);

(statearr_31851_31879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (6))){
var inst_31802 = (state_31842[(7)]);
var inst_31827 = inst_31802.length;
var inst_31828 = (inst_31827 > (0));
var state_31842__$1 = state_31842;
if(cljs.core.truth_(inst_31828)){
var statearr_31852_31880 = state_31842__$1;
(statearr_31852_31880[(1)] = (12));

} else {
var statearr_31853_31881 = state_31842__$1;
(statearr_31853_31881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (3))){
var inst_31840 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31842__$1,inst_31840);
} else {
if((state_val_31843 === (12))){
var inst_31802 = (state_31842[(7)]);
var inst_31830 = cljs.core.vec.call(null,inst_31802);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31842__$1,(15),out,inst_31830);
} else {
if((state_val_31843 === (2))){
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31842__$1,(4),ch);
} else {
if((state_val_31843 === (11))){
var inst_31810 = (state_31842[(10)]);
var inst_31806 = (state_31842[(9)]);
var inst_31820 = (state_31842[(2)]);
var inst_31821 = [];
var inst_31822 = inst_31821.push(inst_31806);
var inst_31802 = inst_31821;
var inst_31803 = inst_31810;
var state_31842__$1 = (function (){var statearr_31854 = state_31842;
(statearr_31854[(11)] = inst_31822);

(statearr_31854[(7)] = inst_31802);

(statearr_31854[(12)] = inst_31820);

(statearr_31854[(8)] = inst_31803);

return statearr_31854;
})();
var statearr_31855_31882 = state_31842__$1;
(statearr_31855_31882[(2)] = null);

(statearr_31855_31882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (9))){
var inst_31802 = (state_31842[(7)]);
var inst_31818 = cljs.core.vec.call(null,inst_31802);
var state_31842__$1 = state_31842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31842__$1,(11),out,inst_31818);
} else {
if((state_val_31843 === (5))){
var inst_31810 = (state_31842[(10)]);
var inst_31803 = (state_31842[(8)]);
var inst_31806 = (state_31842[(9)]);
var inst_31810__$1 = f.call(null,inst_31806);
var inst_31811 = cljs.core._EQ_.call(null,inst_31810__$1,inst_31803);
var inst_31812 = cljs.core.keyword_identical_QMARK_.call(null,inst_31803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31813 = (inst_31811) || (inst_31812);
var state_31842__$1 = (function (){var statearr_31856 = state_31842;
(statearr_31856[(10)] = inst_31810__$1);

return statearr_31856;
})();
if(cljs.core.truth_(inst_31813)){
var statearr_31857_31883 = state_31842__$1;
(statearr_31857_31883[(1)] = (8));

} else {
var statearr_31858_31884 = state_31842__$1;
(statearr_31858_31884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (14))){
var inst_31835 = (state_31842[(2)]);
var inst_31836 = cljs.core.async.close_BANG_.call(null,out);
var state_31842__$1 = (function (){var statearr_31860 = state_31842;
(statearr_31860[(13)] = inst_31835);

return statearr_31860;
})();
var statearr_31861_31885 = state_31842__$1;
(statearr_31861_31885[(2)] = inst_31836);

(statearr_31861_31885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (10))){
var inst_31825 = (state_31842[(2)]);
var state_31842__$1 = state_31842;
var statearr_31862_31886 = state_31842__$1;
(statearr_31862_31886[(2)] = inst_31825);

(statearr_31862_31886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31843 === (8))){
var inst_31802 = (state_31842[(7)]);
var inst_31810 = (state_31842[(10)]);
var inst_31806 = (state_31842[(9)]);
var inst_31815 = inst_31802.push(inst_31806);
var tmp31859 = inst_31802;
var inst_31802__$1 = tmp31859;
var inst_31803 = inst_31810;
var state_31842__$1 = (function (){var statearr_31863 = state_31842;
(statearr_31863[(7)] = inst_31802__$1);

(statearr_31863[(14)] = inst_31815);

(statearr_31863[(8)] = inst_31803);

return statearr_31863;
})();
var statearr_31864_31887 = state_31842__$1;
(statearr_31864_31887[(2)] = null);

(statearr_31864_31887[(1)] = (2));


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
});})(c__22921__auto___31873,out))
;
return ((function (switch__22859__auto__,c__22921__auto___31873,out){
return (function() {
var cljs$core$async$state_machine__22860__auto__ = null;
var cljs$core$async$state_machine__22860__auto____0 = (function (){
var statearr_31868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31868[(0)] = cljs$core$async$state_machine__22860__auto__);

(statearr_31868[(1)] = (1));

return statearr_31868;
});
var cljs$core$async$state_machine__22860__auto____1 = (function (state_31842){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_31842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e31869){if((e31869 instanceof Object)){
var ex__22863__auto__ = e31869;
var statearr_31870_31888 = state_31842;
(statearr_31870_31888[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31889 = state_31842;
state_31842 = G__31889;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
cljs$core$async$state_machine__22860__auto__ = function(state_31842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22860__auto____1.call(this,state_31842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22860__auto____0;
cljs$core$async$state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22860__auto____1;
return cljs$core$async$state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___31873,out))
})();
var state__22923__auto__ = (function (){var statearr_31871 = f__22922__auto__.call(null);
(statearr_31871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___31873);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___31873,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1434173017363