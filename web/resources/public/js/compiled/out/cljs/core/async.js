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
if(typeof cljs.core.async.t22222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22222 = (function (f,fn_handler,meta22223){
this.f = f;
this.fn_handler = fn_handler;
this.meta22223 = meta22223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22222.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22224){
var self__ = this;
var _22224__$1 = this;
return self__.meta22223;
});

cljs.core.async.t22222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22224,meta22223__$1){
var self__ = this;
var _22224__$1 = this;
return (new cljs.core.async.t22222(self__.f,self__.fn_handler,meta22223__$1));
});

cljs.core.async.t22222.cljs$lang$type = true;

cljs.core.async.t22222.cljs$lang$ctorStr = "cljs.core.async/t22222";

cljs.core.async.t22222.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t22222");
});

cljs.core.async.__GT_t22222 = (function cljs$core$async$fn_handler_$___GT_t22222(f__$1,fn_handler__$1,meta22223){
return (new cljs.core.async.t22222(f__$1,fn_handler__$1,meta22223));
});

}

return (new cljs.core.async.t22222(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22226 = buff;
if(G__22226){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__22226.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22226.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22226);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22226);
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
var G__22228 = arguments.length;
switch (G__22228) {
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
var G__22231 = arguments.length;
switch (G__22231) {
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
var val_22233 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22233);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22233,ret){
return (function (){
return fn1.call(null,val_22233);
});})(val_22233,ret))
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
var G__22235 = arguments.length;
switch (G__22235) {
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
var n__19001__auto___22237 = n;
var x_22238 = (0);
while(true){
if((x_22238 < n__19001__auto___22237)){
(a[x_22238] = (0));

var G__22239 = (x_22238 + (1));
x_22238 = G__22239;
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

var G__22240 = (i + (1));
i = G__22240;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22244 = (function (flag,alt_flag,meta22245){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22245 = meta22245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22246){
var self__ = this;
var _22246__$1 = this;
return self__.meta22245;
});})(flag))
;

cljs.core.async.t22244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22246,meta22245__$1){
var self__ = this;
var _22246__$1 = this;
return (new cljs.core.async.t22244(self__.flag,self__.alt_flag,meta22245__$1));
});})(flag))
;

cljs.core.async.t22244.cljs$lang$type = true;

cljs.core.async.t22244.cljs$lang$ctorStr = "cljs.core.async/t22244";

cljs.core.async.t22244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t22244");
});})(flag))
;

cljs.core.async.__GT_t22244 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t22244(flag__$1,alt_flag__$1,meta22245){
return (new cljs.core.async.t22244(flag__$1,alt_flag__$1,meta22245));
});})(flag))
;

}

return (new cljs.core.async.t22244(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t22250 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22250 = (function (cb,flag,alt_handler,meta22251){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22251 = meta22251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22252){
var self__ = this;
var _22252__$1 = this;
return self__.meta22251;
});

cljs.core.async.t22250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22252,meta22251__$1){
var self__ = this;
var _22252__$1 = this;
return (new cljs.core.async.t22250(self__.cb,self__.flag,self__.alt_handler,meta22251__$1));
});

cljs.core.async.t22250.cljs$lang$type = true;

cljs.core.async.t22250.cljs$lang$ctorStr = "cljs.core.async/t22250";

cljs.core.async.t22250.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t22250");
});

cljs.core.async.__GT_t22250 = (function cljs$core$async$alt_handler_$___GT_t22250(cb__$1,flag__$1,alt_handler__$1,meta22251){
return (new cljs.core.async.t22250(cb__$1,flag__$1,alt_handler__$1,meta22251));
});

}

return (new cljs.core.async.t22250(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22253_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22254_SHARP_,port], null));
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
var G__22255 = (i + (1));
i = G__22255;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22258){
var map__22259 = p__22258;
var map__22259__$1 = ((cljs.core.seq_QMARK_.call(null,map__22259))?cljs.core.apply.call(null,cljs.core.hash_map,map__22259):map__22259);
var opts = map__22259__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22256){
var G__22257 = cljs.core.first.call(null,seq22256);
var seq22256__$1 = cljs.core.next.call(null,seq22256);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22257,seq22256__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__22261 = arguments.length;
switch (G__22261) {
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
var c__22023__auto___22310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___22310){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___22310){
return (function (state_22285){
var state_val_22286 = (state_22285[(1)]);
if((state_val_22286 === (7))){
var inst_22281 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22287_22311 = state_22285__$1;
(statearr_22287_22311[(2)] = inst_22281);

(statearr_22287_22311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (1))){
var state_22285__$1 = state_22285;
var statearr_22288_22312 = state_22285__$1;
(statearr_22288_22312[(2)] = null);

(statearr_22288_22312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (4))){
var inst_22264 = (state_22285[(7)]);
var inst_22264__$1 = (state_22285[(2)]);
var inst_22265 = (inst_22264__$1 == null);
var state_22285__$1 = (function (){var statearr_22289 = state_22285;
(statearr_22289[(7)] = inst_22264__$1);

return statearr_22289;
})();
if(cljs.core.truth_(inst_22265)){
var statearr_22290_22313 = state_22285__$1;
(statearr_22290_22313[(1)] = (5));

} else {
var statearr_22291_22314 = state_22285__$1;
(statearr_22291_22314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (13))){
var state_22285__$1 = state_22285;
var statearr_22292_22315 = state_22285__$1;
(statearr_22292_22315[(2)] = null);

(statearr_22292_22315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (6))){
var inst_22264 = (state_22285[(7)]);
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22285__$1,(11),to,inst_22264);
} else {
if((state_val_22286 === (3))){
var inst_22283 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22285__$1,inst_22283);
} else {
if((state_val_22286 === (12))){
var state_22285__$1 = state_22285;
var statearr_22293_22316 = state_22285__$1;
(statearr_22293_22316[(2)] = null);

(statearr_22293_22316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (2))){
var state_22285__$1 = state_22285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22285__$1,(4),from);
} else {
if((state_val_22286 === (11))){
var inst_22274 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
if(cljs.core.truth_(inst_22274)){
var statearr_22294_22317 = state_22285__$1;
(statearr_22294_22317[(1)] = (12));

} else {
var statearr_22295_22318 = state_22285__$1;
(statearr_22295_22318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (9))){
var state_22285__$1 = state_22285;
var statearr_22296_22319 = state_22285__$1;
(statearr_22296_22319[(2)] = null);

(statearr_22296_22319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (5))){
var state_22285__$1 = state_22285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22297_22320 = state_22285__$1;
(statearr_22297_22320[(1)] = (8));

} else {
var statearr_22298_22321 = state_22285__$1;
(statearr_22298_22321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (14))){
var inst_22279 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22299_22322 = state_22285__$1;
(statearr_22299_22322[(2)] = inst_22279);

(statearr_22299_22322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (10))){
var inst_22271 = (state_22285[(2)]);
var state_22285__$1 = state_22285;
var statearr_22300_22323 = state_22285__$1;
(statearr_22300_22323[(2)] = inst_22271);

(statearr_22300_22323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22286 === (8))){
var inst_22268 = cljs.core.async.close_BANG_.call(null,to);
var state_22285__$1 = state_22285;
var statearr_22301_22324 = state_22285__$1;
(statearr_22301_22324[(2)] = inst_22268);

(statearr_22301_22324[(1)] = (10));


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
});})(c__22023__auto___22310))
;
return ((function (switch__22002__auto__,c__22023__auto___22310){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_22285){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object)){
var ex__22006__auto__ = e22306;
var statearr_22307_22325 = state_22285;
(statearr_22307_22325[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22326 = state_22285;
state_22285 = G__22326;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_22285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_22285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___22310))
})();
var state__22025__auto__ = (function (){var statearr_22308 = f__22024__auto__.call(null);
(statearr_22308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22310);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___22310))
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
return (function (p__22510){
var vec__22511 = p__22510;
var v = cljs.core.nth.call(null,vec__22511,(0),null);
var p = cljs.core.nth.call(null,vec__22511,(1),null);
var job = vec__22511;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22023__auto___22693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results){
return (function (state_22516){
var state_val_22517 = (state_22516[(1)]);
if((state_val_22517 === (2))){
var inst_22513 = (state_22516[(2)]);
var inst_22514 = cljs.core.async.close_BANG_.call(null,res);
var state_22516__$1 = (function (){var statearr_22518 = state_22516;
(statearr_22518[(7)] = inst_22513);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22516__$1,inst_22514);
} else {
if((state_val_22517 === (1))){
var state_22516__$1 = state_22516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22516__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results))
;
return ((function (switch__22002__auto__,c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_22522 = [null,null,null,null,null,null,null,null];
(statearr_22522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__);

(statearr_22522[(1)] = (1));

return statearr_22522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1 = (function (state_22516){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22523){if((e22523 instanceof Object)){
var ex__22006__auto__ = e22523;
var statearr_22524_22694 = state_22516;
(statearr_22524_22694[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22695 = state_22516;
state_22516 = G__22695;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = function(state_22516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1.call(this,state_22516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results))
})();
var state__22025__auto__ = (function (){var statearr_22525 = f__22024__auto__.call(null);
(statearr_22525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22693);

return statearr_22525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___22693,res,vec__22511,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22526){
var vec__22527 = p__22526;
var v = cljs.core.nth.call(null,vec__22527,(0),null);
var p = cljs.core.nth.call(null,vec__22527,(1),null);
var job = vec__22527;
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
var n__19001__auto___22696 = n;
var __22697 = (0);
while(true){
if((__22697 < n__19001__auto___22696)){
var G__22528_22698 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22528_22698) {
case "async":
var c__22023__auto___22700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22697,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (__22697,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function (state_22541){
var state_val_22542 = (state_22541[(1)]);
if((state_val_22542 === (7))){
var inst_22537 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
var statearr_22543_22701 = state_22541__$1;
(statearr_22543_22701[(2)] = inst_22537);

(statearr_22543_22701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (6))){
var state_22541__$1 = state_22541;
var statearr_22544_22702 = state_22541__$1;
(statearr_22544_22702[(2)] = null);

(statearr_22544_22702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (5))){
var state_22541__$1 = state_22541;
var statearr_22545_22703 = state_22541__$1;
(statearr_22545_22703[(2)] = null);

(statearr_22545_22703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (4))){
var inst_22531 = (state_22541[(2)]);
var inst_22532 = async.call(null,inst_22531);
var state_22541__$1 = state_22541;
if(cljs.core.truth_(inst_22532)){
var statearr_22546_22704 = state_22541__$1;
(statearr_22546_22704[(1)] = (5));

} else {
var statearr_22547_22705 = state_22541__$1;
(statearr_22547_22705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22542 === (3))){
var inst_22539 = (state_22541[(2)]);
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else {
if((state_val_22542 === (2))){
var state_22541__$1 = state_22541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22541__$1,(4),jobs);
} else {
if((state_val_22542 === (1))){
var state_22541__$1 = state_22541;
var statearr_22548_22706 = state_22541__$1;
(statearr_22548_22706[(2)] = null);

(statearr_22548_22706[(1)] = (2));


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
});})(__22697,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
;
return ((function (__22697,switch__22002__auto__,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_22552 = [null,null,null,null,null,null,null];
(statearr_22552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__);

(statearr_22552[(1)] = (1));

return statearr_22552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1 = (function (state_22541){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22553){if((e22553 instanceof Object)){
var ex__22006__auto__ = e22553;
var statearr_22554_22707 = state_22541;
(statearr_22554_22707[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22708 = state_22541;
state_22541 = G__22708;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__;
})()
;})(__22697,switch__22002__auto__,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
})();
var state__22025__auto__ = (function (){var statearr_22555 = f__22024__auto__.call(null);
(statearr_22555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22700);

return statearr_22555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(__22697,c__22023__auto___22700,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
);


break;
case "compute":
var c__22023__auto___22709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22697,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (__22697,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function (state_22568){
var state_val_22569 = (state_22568[(1)]);
if((state_val_22569 === (7))){
var inst_22564 = (state_22568[(2)]);
var state_22568__$1 = state_22568;
var statearr_22570_22710 = state_22568__$1;
(statearr_22570_22710[(2)] = inst_22564);

(statearr_22570_22710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22569 === (6))){
var state_22568__$1 = state_22568;
var statearr_22571_22711 = state_22568__$1;
(statearr_22571_22711[(2)] = null);

(statearr_22571_22711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22569 === (5))){
var state_22568__$1 = state_22568;
var statearr_22572_22712 = state_22568__$1;
(statearr_22572_22712[(2)] = null);

(statearr_22572_22712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22569 === (4))){
var inst_22558 = (state_22568[(2)]);
var inst_22559 = process.call(null,inst_22558);
var state_22568__$1 = state_22568;
if(cljs.core.truth_(inst_22559)){
var statearr_22573_22713 = state_22568__$1;
(statearr_22573_22713[(1)] = (5));

} else {
var statearr_22574_22714 = state_22568__$1;
(statearr_22574_22714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22569 === (3))){
var inst_22566 = (state_22568[(2)]);
var state_22568__$1 = state_22568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22568__$1,inst_22566);
} else {
if((state_val_22569 === (2))){
var state_22568__$1 = state_22568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22568__$1,(4),jobs);
} else {
if((state_val_22569 === (1))){
var state_22568__$1 = state_22568;
var statearr_22575_22715 = state_22568__$1;
(statearr_22575_22715[(2)] = null);

(statearr_22575_22715[(1)] = (2));


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
});})(__22697,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
;
return ((function (__22697,switch__22002__auto__,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_22579 = [null,null,null,null,null,null,null];
(statearr_22579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__);

(statearr_22579[(1)] = (1));

return statearr_22579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1 = (function (state_22568){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22580){if((e22580 instanceof Object)){
var ex__22006__auto__ = e22580;
var statearr_22581_22716 = state_22568;
(statearr_22581_22716[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22717 = state_22568;
state_22568 = G__22717;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = function(state_22568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1.call(this,state_22568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__;
})()
;})(__22697,switch__22002__auto__,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
})();
var state__22025__auto__ = (function (){var statearr_22582 = f__22024__auto__.call(null);
(statearr_22582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22709);

return statearr_22582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(__22697,c__22023__auto___22709,G__22528_22698,n__19001__auto___22696,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22718 = (__22697 + (1));
__22697 = G__22718;
continue;
} else {
}
break;
}

var c__22023__auto___22719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___22719,jobs,results,process,async){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___22719,jobs,results,process,async){
return (function (state_22604){
var state_val_22605 = (state_22604[(1)]);
if((state_val_22605 === (9))){
var inst_22597 = (state_22604[(2)]);
var state_22604__$1 = (function (){var statearr_22606 = state_22604;
(statearr_22606[(7)] = inst_22597);

return statearr_22606;
})();
var statearr_22607_22720 = state_22604__$1;
(statearr_22607_22720[(2)] = null);

(statearr_22607_22720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (8))){
var inst_22590 = (state_22604[(8)]);
var inst_22595 = (state_22604[(2)]);
var state_22604__$1 = (function (){var statearr_22608 = state_22604;
(statearr_22608[(9)] = inst_22595);

return statearr_22608;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22604__$1,(9),results,inst_22590);
} else {
if((state_val_22605 === (7))){
var inst_22600 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
var statearr_22609_22721 = state_22604__$1;
(statearr_22609_22721[(2)] = inst_22600);

(statearr_22609_22721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (6))){
var inst_22590 = (state_22604[(8)]);
var inst_22585 = (state_22604[(10)]);
var inst_22590__$1 = cljs.core.async.chan.call(null,(1));
var inst_22591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22592 = [inst_22585,inst_22590__$1];
var inst_22593 = (new cljs.core.PersistentVector(null,2,(5),inst_22591,inst_22592,null));
var state_22604__$1 = (function (){var statearr_22610 = state_22604;
(statearr_22610[(8)] = inst_22590__$1);

return statearr_22610;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22604__$1,(8),jobs,inst_22593);
} else {
if((state_val_22605 === (5))){
var inst_22588 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22604__$1 = state_22604;
var statearr_22611_22722 = state_22604__$1;
(statearr_22611_22722[(2)] = inst_22588);

(statearr_22611_22722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (4))){
var inst_22585 = (state_22604[(10)]);
var inst_22585__$1 = (state_22604[(2)]);
var inst_22586 = (inst_22585__$1 == null);
var state_22604__$1 = (function (){var statearr_22612 = state_22604;
(statearr_22612[(10)] = inst_22585__$1);

return statearr_22612;
})();
if(cljs.core.truth_(inst_22586)){
var statearr_22613_22723 = state_22604__$1;
(statearr_22613_22723[(1)] = (5));

} else {
var statearr_22614_22724 = state_22604__$1;
(statearr_22614_22724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22605 === (3))){
var inst_22602 = (state_22604[(2)]);
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22604__$1,inst_22602);
} else {
if((state_val_22605 === (2))){
var state_22604__$1 = state_22604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22604__$1,(4),from);
} else {
if((state_val_22605 === (1))){
var state_22604__$1 = state_22604;
var statearr_22615_22725 = state_22604__$1;
(statearr_22615_22725[(2)] = null);

(statearr_22615_22725[(1)] = (2));


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
});})(c__22023__auto___22719,jobs,results,process,async))
;
return ((function (switch__22002__auto__,c__22023__auto___22719,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_22619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__);

(statearr_22619[(1)] = (1));

return statearr_22619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1 = (function (state_22604){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22620){if((e22620 instanceof Object)){
var ex__22006__auto__ = e22620;
var statearr_22621_22726 = state_22604;
(statearr_22621_22726[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22727 = state_22604;
state_22604 = G__22727;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = function(state_22604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1.call(this,state_22604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___22719,jobs,results,process,async))
})();
var state__22025__auto__ = (function (){var statearr_22622 = f__22024__auto__.call(null);
(statearr_22622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22719);

return statearr_22622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___22719,jobs,results,process,async))
);


var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto__,jobs,results,process,async){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto__,jobs,results,process,async){
return (function (state_22660){
var state_val_22661 = (state_22660[(1)]);
if((state_val_22661 === (7))){
var inst_22656 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22662_22728 = state_22660__$1;
(statearr_22662_22728[(2)] = inst_22656);

(statearr_22662_22728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (20))){
var state_22660__$1 = state_22660;
var statearr_22663_22729 = state_22660__$1;
(statearr_22663_22729[(2)] = null);

(statearr_22663_22729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (1))){
var state_22660__$1 = state_22660;
var statearr_22664_22730 = state_22660__$1;
(statearr_22664_22730[(2)] = null);

(statearr_22664_22730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (4))){
var inst_22625 = (state_22660[(7)]);
var inst_22625__$1 = (state_22660[(2)]);
var inst_22626 = (inst_22625__$1 == null);
var state_22660__$1 = (function (){var statearr_22665 = state_22660;
(statearr_22665[(7)] = inst_22625__$1);

return statearr_22665;
})();
if(cljs.core.truth_(inst_22626)){
var statearr_22666_22731 = state_22660__$1;
(statearr_22666_22731[(1)] = (5));

} else {
var statearr_22667_22732 = state_22660__$1;
(statearr_22667_22732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (15))){
var inst_22638 = (state_22660[(8)]);
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22660__$1,(18),to,inst_22638);
} else {
if((state_val_22661 === (21))){
var inst_22651 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22668_22733 = state_22660__$1;
(statearr_22668_22733[(2)] = inst_22651);

(statearr_22668_22733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (13))){
var inst_22653 = (state_22660[(2)]);
var state_22660__$1 = (function (){var statearr_22669 = state_22660;
(statearr_22669[(9)] = inst_22653);

return statearr_22669;
})();
var statearr_22670_22734 = state_22660__$1;
(statearr_22670_22734[(2)] = null);

(statearr_22670_22734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (6))){
var inst_22625 = (state_22660[(7)]);
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22660__$1,(11),inst_22625);
} else {
if((state_val_22661 === (17))){
var inst_22646 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
if(cljs.core.truth_(inst_22646)){
var statearr_22671_22735 = state_22660__$1;
(statearr_22671_22735[(1)] = (19));

} else {
var statearr_22672_22736 = state_22660__$1;
(statearr_22672_22736[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (3))){
var inst_22658 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22660__$1,inst_22658);
} else {
if((state_val_22661 === (12))){
var inst_22635 = (state_22660[(10)]);
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22660__$1,(14),inst_22635);
} else {
if((state_val_22661 === (2))){
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22660__$1,(4),results);
} else {
if((state_val_22661 === (19))){
var state_22660__$1 = state_22660;
var statearr_22673_22737 = state_22660__$1;
(statearr_22673_22737[(2)] = null);

(statearr_22673_22737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (11))){
var inst_22635 = (state_22660[(2)]);
var state_22660__$1 = (function (){var statearr_22674 = state_22660;
(statearr_22674[(10)] = inst_22635);

return statearr_22674;
})();
var statearr_22675_22738 = state_22660__$1;
(statearr_22675_22738[(2)] = null);

(statearr_22675_22738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (9))){
var state_22660__$1 = state_22660;
var statearr_22676_22739 = state_22660__$1;
(statearr_22676_22739[(2)] = null);

(statearr_22676_22739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (5))){
var state_22660__$1 = state_22660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22677_22740 = state_22660__$1;
(statearr_22677_22740[(1)] = (8));

} else {
var statearr_22678_22741 = state_22660__$1;
(statearr_22678_22741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (14))){
var inst_22638 = (state_22660[(8)]);
var inst_22640 = (state_22660[(11)]);
var inst_22638__$1 = (state_22660[(2)]);
var inst_22639 = (inst_22638__$1 == null);
var inst_22640__$1 = cljs.core.not.call(null,inst_22639);
var state_22660__$1 = (function (){var statearr_22679 = state_22660;
(statearr_22679[(8)] = inst_22638__$1);

(statearr_22679[(11)] = inst_22640__$1);

return statearr_22679;
})();
if(inst_22640__$1){
var statearr_22680_22742 = state_22660__$1;
(statearr_22680_22742[(1)] = (15));

} else {
var statearr_22681_22743 = state_22660__$1;
(statearr_22681_22743[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (16))){
var inst_22640 = (state_22660[(11)]);
var state_22660__$1 = state_22660;
var statearr_22682_22744 = state_22660__$1;
(statearr_22682_22744[(2)] = inst_22640);

(statearr_22682_22744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (10))){
var inst_22632 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22683_22745 = state_22660__$1;
(statearr_22683_22745[(2)] = inst_22632);

(statearr_22683_22745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (18))){
var inst_22643 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22684_22746 = state_22660__$1;
(statearr_22684_22746[(2)] = inst_22643);

(statearr_22684_22746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (8))){
var inst_22629 = cljs.core.async.close_BANG_.call(null,to);
var state_22660__$1 = state_22660;
var statearr_22685_22747 = state_22660__$1;
(statearr_22685_22747[(2)] = inst_22629);

(statearr_22685_22747[(1)] = (10));


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
});})(c__22023__auto__,jobs,results,process,async))
;
return ((function (switch__22002__auto__,c__22023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_22689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__);

(statearr_22689[(1)] = (1));

return statearr_22689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1 = (function (state_22660){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22690){if((e22690 instanceof Object)){
var ex__22006__auto__ = e22690;
var statearr_22691_22748 = state_22660;
(statearr_22691_22748[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22749 = state_22660;
state_22660 = G__22749;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__ = function(state_22660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1.call(this,state_22660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto__,jobs,results,process,async))
})();
var state__22025__auto__ = (function (){var statearr_22692 = f__22024__auto__.call(null);
(statearr_22692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto__);

return statearr_22692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto__,jobs,results,process,async))
);

return c__22023__auto__;
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
var G__22751 = arguments.length;
switch (G__22751) {
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
var G__22754 = arguments.length;
switch (G__22754) {
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
var G__22757 = arguments.length;
switch (G__22757) {
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
var c__22023__auto___22809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___22809,tc,fc){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___22809,tc,fc){
return (function (state_22783){
var state_val_22784 = (state_22783[(1)]);
if((state_val_22784 === (7))){
var inst_22779 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22785_22810 = state_22783__$1;
(statearr_22785_22810[(2)] = inst_22779);

(statearr_22785_22810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (1))){
var state_22783__$1 = state_22783;
var statearr_22786_22811 = state_22783__$1;
(statearr_22786_22811[(2)] = null);

(statearr_22786_22811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (4))){
var inst_22760 = (state_22783[(7)]);
var inst_22760__$1 = (state_22783[(2)]);
var inst_22761 = (inst_22760__$1 == null);
var state_22783__$1 = (function (){var statearr_22787 = state_22783;
(statearr_22787[(7)] = inst_22760__$1);

return statearr_22787;
})();
if(cljs.core.truth_(inst_22761)){
var statearr_22788_22812 = state_22783__$1;
(statearr_22788_22812[(1)] = (5));

} else {
var statearr_22789_22813 = state_22783__$1;
(statearr_22789_22813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (13))){
var state_22783__$1 = state_22783;
var statearr_22790_22814 = state_22783__$1;
(statearr_22790_22814[(2)] = null);

(statearr_22790_22814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (6))){
var inst_22760 = (state_22783[(7)]);
var inst_22766 = p.call(null,inst_22760);
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22766)){
var statearr_22791_22815 = state_22783__$1;
(statearr_22791_22815[(1)] = (9));

} else {
var statearr_22792_22816 = state_22783__$1;
(statearr_22792_22816[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (3))){
var inst_22781 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22783__$1,inst_22781);
} else {
if((state_val_22784 === (12))){
var state_22783__$1 = state_22783;
var statearr_22793_22817 = state_22783__$1;
(statearr_22793_22817[(2)] = null);

(statearr_22793_22817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (2))){
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,(4),ch);
} else {
if((state_val_22784 === (11))){
var inst_22760 = (state_22783[(7)]);
var inst_22770 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22783__$1,(8),inst_22770,inst_22760);
} else {
if((state_val_22784 === (9))){
var state_22783__$1 = state_22783;
var statearr_22794_22818 = state_22783__$1;
(statearr_22794_22818[(2)] = tc);

(statearr_22794_22818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (5))){
var inst_22763 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22764 = cljs.core.async.close_BANG_.call(null,fc);
var state_22783__$1 = (function (){var statearr_22795 = state_22783;
(statearr_22795[(8)] = inst_22763);

return statearr_22795;
})();
var statearr_22796_22819 = state_22783__$1;
(statearr_22796_22819[(2)] = inst_22764);

(statearr_22796_22819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (14))){
var inst_22777 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22797_22820 = state_22783__$1;
(statearr_22797_22820[(2)] = inst_22777);

(statearr_22797_22820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (10))){
var state_22783__$1 = state_22783;
var statearr_22798_22821 = state_22783__$1;
(statearr_22798_22821[(2)] = fc);

(statearr_22798_22821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (8))){
var inst_22772 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22772)){
var statearr_22799_22822 = state_22783__$1;
(statearr_22799_22822[(1)] = (12));

} else {
var statearr_22800_22823 = state_22783__$1;
(statearr_22800_22823[(1)] = (13));

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
});})(c__22023__auto___22809,tc,fc))
;
return ((function (switch__22002__auto__,c__22023__auto___22809,tc,fc){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_22804 = [null,null,null,null,null,null,null,null,null];
(statearr_22804[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_22804[(1)] = (1));

return statearr_22804;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_22783){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22805){if((e22805 instanceof Object)){
var ex__22006__auto__ = e22805;
var statearr_22806_22824 = state_22783;
(statearr_22806_22824[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22825 = state_22783;
state_22783 = G__22825;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___22809,tc,fc))
})();
var state__22025__auto__ = (function (){var statearr_22807 = f__22024__auto__.call(null);
(statearr_22807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___22809);

return statearr_22807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___22809,tc,fc))
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto__){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto__){
return (function (state_22872){
var state_val_22873 = (state_22872[(1)]);
if((state_val_22873 === (7))){
var inst_22868 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
var statearr_22874_22890 = state_22872__$1;
(statearr_22874_22890[(2)] = inst_22868);

(statearr_22874_22890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (6))){
var inst_22858 = (state_22872[(7)]);
var inst_22861 = (state_22872[(8)]);
var inst_22865 = f.call(null,inst_22858,inst_22861);
var inst_22858__$1 = inst_22865;
var state_22872__$1 = (function (){var statearr_22875 = state_22872;
(statearr_22875[(7)] = inst_22858__$1);

return statearr_22875;
})();
var statearr_22876_22891 = state_22872__$1;
(statearr_22876_22891[(2)] = null);

(statearr_22876_22891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (5))){
var inst_22858 = (state_22872[(7)]);
var state_22872__$1 = state_22872;
var statearr_22877_22892 = state_22872__$1;
(statearr_22877_22892[(2)] = inst_22858);

(statearr_22877_22892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (4))){
var inst_22861 = (state_22872[(8)]);
var inst_22861__$1 = (state_22872[(2)]);
var inst_22862 = (inst_22861__$1 == null);
var state_22872__$1 = (function (){var statearr_22878 = state_22872;
(statearr_22878[(8)] = inst_22861__$1);

return statearr_22878;
})();
if(cljs.core.truth_(inst_22862)){
var statearr_22879_22893 = state_22872__$1;
(statearr_22879_22893[(1)] = (5));

} else {
var statearr_22880_22894 = state_22872__$1;
(statearr_22880_22894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22873 === (3))){
var inst_22870 = (state_22872[(2)]);
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22872__$1,inst_22870);
} else {
if((state_val_22873 === (2))){
var state_22872__$1 = state_22872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22872__$1,(4),ch);
} else {
if((state_val_22873 === (1))){
var inst_22858 = init;
var state_22872__$1 = (function (){var statearr_22881 = state_22872;
(statearr_22881[(7)] = inst_22858);

return statearr_22881;
})();
var statearr_22882_22895 = state_22872__$1;
(statearr_22882_22895[(2)] = null);

(statearr_22882_22895[(1)] = (2));


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
});})(c__22023__auto__))
;
return ((function (switch__22002__auto__,c__22023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22003__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22003__auto____0 = (function (){
var statearr_22886 = [null,null,null,null,null,null,null,null,null];
(statearr_22886[(0)] = cljs$core$async$reduce_$_state_machine__22003__auto__);

(statearr_22886[(1)] = (1));

return statearr_22886;
});
var cljs$core$async$reduce_$_state_machine__22003__auto____1 = (function (state_22872){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22887){if((e22887 instanceof Object)){
var ex__22006__auto__ = e22887;
var statearr_22888_22896 = state_22872;
(statearr_22888_22896[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22897 = state_22872;
state_22872 = G__22897;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22003__auto__ = function(state_22872){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22003__auto____1.call(this,state_22872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22003__auto____0;
cljs$core$async$reduce_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22003__auto____1;
return cljs$core$async$reduce_$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto__))
})();
var state__22025__auto__ = (function (){var statearr_22889 = f__22024__auto__.call(null);
(statearr_22889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto__);

return statearr_22889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto__))
);

return c__22023__auto__;
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
var G__22899 = arguments.length;
switch (G__22899) {
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto__){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto__){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (7))){
var inst_22906 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22926_22950 = state_22924__$1;
(statearr_22926_22950[(2)] = inst_22906);

(statearr_22926_22950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (1))){
var inst_22900 = cljs.core.seq.call(null,coll);
var inst_22901 = inst_22900;
var state_22924__$1 = (function (){var statearr_22927 = state_22924;
(statearr_22927[(7)] = inst_22901);

return statearr_22927;
})();
var statearr_22928_22951 = state_22924__$1;
(statearr_22928_22951[(2)] = null);

(statearr_22928_22951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (4))){
var inst_22901 = (state_22924[(7)]);
var inst_22904 = cljs.core.first.call(null,inst_22901);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(7),ch,inst_22904);
} else {
if((state_val_22925 === (13))){
var inst_22918 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22929_22952 = state_22924__$1;
(statearr_22929_22952[(2)] = inst_22918);

(statearr_22929_22952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var inst_22909 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22909)){
var statearr_22930_22953 = state_22924__$1;
(statearr_22930_22953[(1)] = (8));

} else {
var statearr_22931_22954 = state_22924__$1;
(statearr_22931_22954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (12))){
var state_22924__$1 = state_22924;
var statearr_22932_22955 = state_22924__$1;
(statearr_22932_22955[(2)] = null);

(statearr_22932_22955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (2))){
var inst_22901 = (state_22924[(7)]);
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22901)){
var statearr_22933_22956 = state_22924__$1;
(statearr_22933_22956[(1)] = (4));

} else {
var statearr_22934_22957 = state_22924__$1;
(statearr_22934_22957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (11))){
var inst_22915 = cljs.core.async.close_BANG_.call(null,ch);
var state_22924__$1 = state_22924;
var statearr_22935_22958 = state_22924__$1;
(statearr_22935_22958[(2)] = inst_22915);

(statearr_22935_22958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (9))){
var state_22924__$1 = state_22924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22936_22959 = state_22924__$1;
(statearr_22936_22959[(1)] = (11));

} else {
var statearr_22937_22960 = state_22924__$1;
(statearr_22937_22960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (5))){
var inst_22901 = (state_22924[(7)]);
var state_22924__$1 = state_22924;
var statearr_22938_22961 = state_22924__$1;
(statearr_22938_22961[(2)] = inst_22901);

(statearr_22938_22961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (10))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22939_22962 = state_22924__$1;
(statearr_22939_22962[(2)] = inst_22920);

(statearr_22939_22962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (8))){
var inst_22901 = (state_22924[(7)]);
var inst_22911 = cljs.core.next.call(null,inst_22901);
var inst_22901__$1 = inst_22911;
var state_22924__$1 = (function (){var statearr_22940 = state_22924;
(statearr_22940[(7)] = inst_22901__$1);

return statearr_22940;
})();
var statearr_22941_22963 = state_22924__$1;
(statearr_22941_22963[(2)] = null);

(statearr_22941_22963[(1)] = (2));


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
});})(c__22023__auto__))
;
return ((function (switch__22002__auto__,c__22023__auto__){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_22945 = [null,null,null,null,null,null,null,null];
(statearr_22945[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_22945[(1)] = (1));

return statearr_22945;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_22924){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e22946){if((e22946 instanceof Object)){
var ex__22006__auto__ = e22946;
var statearr_22947_22964 = state_22924;
(statearr_22947_22964[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22965 = state_22924;
state_22924 = G__22965;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto__))
})();
var state__22025__auto__ = (function (){var statearr_22948 = f__22024__auto__.call(null);
(statearr_22948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto__);

return statearr_22948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto__))
);

return c__22023__auto__;
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

cljs.core.async.Mux = (function (){var obj22967 = {};
return obj22967;
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


cljs.core.async.Mult = (function (){var obj22969 = {};
return obj22969;
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
if(typeof cljs.core.async.t23191 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23191 = (function (cs,ch,mult,meta23192){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23192 = meta23192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23191.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23191.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23193){
var self__ = this;
var _23193__$1 = this;
return self__.meta23192;
});})(cs))
;

cljs.core.async.t23191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23193,meta23192__$1){
var self__ = this;
var _23193__$1 = this;
return (new cljs.core.async.t23191(self__.cs,self__.ch,self__.mult,meta23192__$1));
});})(cs))
;

cljs.core.async.t23191.cljs$lang$type = true;

cljs.core.async.t23191.cljs$lang$ctorStr = "cljs.core.async/t23191";

cljs.core.async.t23191.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t23191");
});})(cs))
;

cljs.core.async.__GT_t23191 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t23191(cs__$1,ch__$1,mult__$1,meta23192){
return (new cljs.core.async.t23191(cs__$1,ch__$1,mult__$1,meta23192));
});})(cs))
;

}

return (new cljs.core.async.t23191(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22023__auto___23412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___23412,cs,m,dchan,dctr,done){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___23412,cs,m,dchan,dctr,done){
return (function (state_23324){
var state_val_23325 = (state_23324[(1)]);
if((state_val_23325 === (7))){
var inst_23320 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23326_23413 = state_23324__$1;
(statearr_23326_23413[(2)] = inst_23320);

(statearr_23326_23413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (20))){
var inst_23225 = (state_23324[(7)]);
var inst_23235 = cljs.core.first.call(null,inst_23225);
var inst_23236 = cljs.core.nth.call(null,inst_23235,(0),null);
var inst_23237 = cljs.core.nth.call(null,inst_23235,(1),null);
var state_23324__$1 = (function (){var statearr_23327 = state_23324;
(statearr_23327[(8)] = inst_23236);

return statearr_23327;
})();
if(cljs.core.truth_(inst_23237)){
var statearr_23328_23414 = state_23324__$1;
(statearr_23328_23414[(1)] = (22));

} else {
var statearr_23329_23415 = state_23324__$1;
(statearr_23329_23415[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (27))){
var inst_23267 = (state_23324[(9)]);
var inst_23196 = (state_23324[(10)]);
var inst_23272 = (state_23324[(11)]);
var inst_23265 = (state_23324[(12)]);
var inst_23272__$1 = cljs.core._nth.call(null,inst_23265,inst_23267);
var inst_23273 = cljs.core.async.put_BANG_.call(null,inst_23272__$1,inst_23196,done);
var state_23324__$1 = (function (){var statearr_23330 = state_23324;
(statearr_23330[(11)] = inst_23272__$1);

return statearr_23330;
})();
if(cljs.core.truth_(inst_23273)){
var statearr_23331_23416 = state_23324__$1;
(statearr_23331_23416[(1)] = (30));

} else {
var statearr_23332_23417 = state_23324__$1;
(statearr_23332_23417[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (1))){
var state_23324__$1 = state_23324;
var statearr_23333_23418 = state_23324__$1;
(statearr_23333_23418[(2)] = null);

(statearr_23333_23418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (24))){
var inst_23225 = (state_23324[(7)]);
var inst_23242 = (state_23324[(2)]);
var inst_23243 = cljs.core.next.call(null,inst_23225);
var inst_23205 = inst_23243;
var inst_23206 = null;
var inst_23207 = (0);
var inst_23208 = (0);
var state_23324__$1 = (function (){var statearr_23334 = state_23324;
(statearr_23334[(13)] = inst_23207);

(statearr_23334[(14)] = inst_23208);

(statearr_23334[(15)] = inst_23206);

(statearr_23334[(16)] = inst_23205);

(statearr_23334[(17)] = inst_23242);

return statearr_23334;
})();
var statearr_23335_23419 = state_23324__$1;
(statearr_23335_23419[(2)] = null);

(statearr_23335_23419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (39))){
var state_23324__$1 = state_23324;
var statearr_23339_23420 = state_23324__$1;
(statearr_23339_23420[(2)] = null);

(statearr_23339_23420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (4))){
var inst_23196 = (state_23324[(10)]);
var inst_23196__$1 = (state_23324[(2)]);
var inst_23197 = (inst_23196__$1 == null);
var state_23324__$1 = (function (){var statearr_23340 = state_23324;
(statearr_23340[(10)] = inst_23196__$1);

return statearr_23340;
})();
if(cljs.core.truth_(inst_23197)){
var statearr_23341_23421 = state_23324__$1;
(statearr_23341_23421[(1)] = (5));

} else {
var statearr_23342_23422 = state_23324__$1;
(statearr_23342_23422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (15))){
var inst_23207 = (state_23324[(13)]);
var inst_23208 = (state_23324[(14)]);
var inst_23206 = (state_23324[(15)]);
var inst_23205 = (state_23324[(16)]);
var inst_23221 = (state_23324[(2)]);
var inst_23222 = (inst_23208 + (1));
var tmp23336 = inst_23207;
var tmp23337 = inst_23206;
var tmp23338 = inst_23205;
var inst_23205__$1 = tmp23338;
var inst_23206__$1 = tmp23337;
var inst_23207__$1 = tmp23336;
var inst_23208__$1 = inst_23222;
var state_23324__$1 = (function (){var statearr_23343 = state_23324;
(statearr_23343[(13)] = inst_23207__$1);

(statearr_23343[(14)] = inst_23208__$1);

(statearr_23343[(18)] = inst_23221);

(statearr_23343[(15)] = inst_23206__$1);

(statearr_23343[(16)] = inst_23205__$1);

return statearr_23343;
})();
var statearr_23344_23423 = state_23324__$1;
(statearr_23344_23423[(2)] = null);

(statearr_23344_23423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (21))){
var inst_23246 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23348_23424 = state_23324__$1;
(statearr_23348_23424[(2)] = inst_23246);

(statearr_23348_23424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (31))){
var inst_23272 = (state_23324[(11)]);
var inst_23276 = done.call(null,null);
var inst_23277 = cljs.core.async.untap_STAR_.call(null,m,inst_23272);
var state_23324__$1 = (function (){var statearr_23349 = state_23324;
(statearr_23349[(19)] = inst_23276);

return statearr_23349;
})();
var statearr_23350_23425 = state_23324__$1;
(statearr_23350_23425[(2)] = inst_23277);

(statearr_23350_23425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (32))){
var inst_23267 = (state_23324[(9)]);
var inst_23266 = (state_23324[(20)]);
var inst_23264 = (state_23324[(21)]);
var inst_23265 = (state_23324[(12)]);
var inst_23279 = (state_23324[(2)]);
var inst_23280 = (inst_23267 + (1));
var tmp23345 = inst_23266;
var tmp23346 = inst_23264;
var tmp23347 = inst_23265;
var inst_23264__$1 = tmp23346;
var inst_23265__$1 = tmp23347;
var inst_23266__$1 = tmp23345;
var inst_23267__$1 = inst_23280;
var state_23324__$1 = (function (){var statearr_23351 = state_23324;
(statearr_23351[(9)] = inst_23267__$1);

(statearr_23351[(20)] = inst_23266__$1);

(statearr_23351[(21)] = inst_23264__$1);

(statearr_23351[(22)] = inst_23279);

(statearr_23351[(12)] = inst_23265__$1);

return statearr_23351;
})();
var statearr_23352_23426 = state_23324__$1;
(statearr_23352_23426[(2)] = null);

(statearr_23352_23426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (40))){
var inst_23292 = (state_23324[(23)]);
var inst_23296 = done.call(null,null);
var inst_23297 = cljs.core.async.untap_STAR_.call(null,m,inst_23292);
var state_23324__$1 = (function (){var statearr_23353 = state_23324;
(statearr_23353[(24)] = inst_23296);

return statearr_23353;
})();
var statearr_23354_23427 = state_23324__$1;
(statearr_23354_23427[(2)] = inst_23297);

(statearr_23354_23427[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (33))){
var inst_23283 = (state_23324[(25)]);
var inst_23285 = cljs.core.chunked_seq_QMARK_.call(null,inst_23283);
var state_23324__$1 = state_23324;
if(inst_23285){
var statearr_23355_23428 = state_23324__$1;
(statearr_23355_23428[(1)] = (36));

} else {
var statearr_23356_23429 = state_23324__$1;
(statearr_23356_23429[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (13))){
var inst_23215 = (state_23324[(26)]);
var inst_23218 = cljs.core.async.close_BANG_.call(null,inst_23215);
var state_23324__$1 = state_23324;
var statearr_23357_23430 = state_23324__$1;
(statearr_23357_23430[(2)] = inst_23218);

(statearr_23357_23430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (22))){
var inst_23236 = (state_23324[(8)]);
var inst_23239 = cljs.core.async.close_BANG_.call(null,inst_23236);
var state_23324__$1 = state_23324;
var statearr_23358_23431 = state_23324__$1;
(statearr_23358_23431[(2)] = inst_23239);

(statearr_23358_23431[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (36))){
var inst_23283 = (state_23324[(25)]);
var inst_23287 = cljs.core.chunk_first.call(null,inst_23283);
var inst_23288 = cljs.core.chunk_rest.call(null,inst_23283);
var inst_23289 = cljs.core.count.call(null,inst_23287);
var inst_23264 = inst_23288;
var inst_23265 = inst_23287;
var inst_23266 = inst_23289;
var inst_23267 = (0);
var state_23324__$1 = (function (){var statearr_23359 = state_23324;
(statearr_23359[(9)] = inst_23267);

(statearr_23359[(20)] = inst_23266);

(statearr_23359[(21)] = inst_23264);

(statearr_23359[(12)] = inst_23265);

return statearr_23359;
})();
var statearr_23360_23432 = state_23324__$1;
(statearr_23360_23432[(2)] = null);

(statearr_23360_23432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (41))){
var inst_23283 = (state_23324[(25)]);
var inst_23299 = (state_23324[(2)]);
var inst_23300 = cljs.core.next.call(null,inst_23283);
var inst_23264 = inst_23300;
var inst_23265 = null;
var inst_23266 = (0);
var inst_23267 = (0);
var state_23324__$1 = (function (){var statearr_23361 = state_23324;
(statearr_23361[(9)] = inst_23267);

(statearr_23361[(20)] = inst_23266);

(statearr_23361[(27)] = inst_23299);

(statearr_23361[(21)] = inst_23264);

(statearr_23361[(12)] = inst_23265);

return statearr_23361;
})();
var statearr_23362_23433 = state_23324__$1;
(statearr_23362_23433[(2)] = null);

(statearr_23362_23433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (43))){
var state_23324__$1 = state_23324;
var statearr_23363_23434 = state_23324__$1;
(statearr_23363_23434[(2)] = null);

(statearr_23363_23434[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (29))){
var inst_23308 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23364_23435 = state_23324__$1;
(statearr_23364_23435[(2)] = inst_23308);

(statearr_23364_23435[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (44))){
var inst_23317 = (state_23324[(2)]);
var state_23324__$1 = (function (){var statearr_23365 = state_23324;
(statearr_23365[(28)] = inst_23317);

return statearr_23365;
})();
var statearr_23366_23436 = state_23324__$1;
(statearr_23366_23436[(2)] = null);

(statearr_23366_23436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (6))){
var inst_23256 = (state_23324[(29)]);
var inst_23255 = cljs.core.deref.call(null,cs);
var inst_23256__$1 = cljs.core.keys.call(null,inst_23255);
var inst_23257 = cljs.core.count.call(null,inst_23256__$1);
var inst_23258 = cljs.core.reset_BANG_.call(null,dctr,inst_23257);
var inst_23263 = cljs.core.seq.call(null,inst_23256__$1);
var inst_23264 = inst_23263;
var inst_23265 = null;
var inst_23266 = (0);
var inst_23267 = (0);
var state_23324__$1 = (function (){var statearr_23367 = state_23324;
(statearr_23367[(9)] = inst_23267);

(statearr_23367[(30)] = inst_23258);

(statearr_23367[(29)] = inst_23256__$1);

(statearr_23367[(20)] = inst_23266);

(statearr_23367[(21)] = inst_23264);

(statearr_23367[(12)] = inst_23265);

return statearr_23367;
})();
var statearr_23368_23437 = state_23324__$1;
(statearr_23368_23437[(2)] = null);

(statearr_23368_23437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (28))){
var inst_23264 = (state_23324[(21)]);
var inst_23283 = (state_23324[(25)]);
var inst_23283__$1 = cljs.core.seq.call(null,inst_23264);
var state_23324__$1 = (function (){var statearr_23369 = state_23324;
(statearr_23369[(25)] = inst_23283__$1);

return statearr_23369;
})();
if(inst_23283__$1){
var statearr_23370_23438 = state_23324__$1;
(statearr_23370_23438[(1)] = (33));

} else {
var statearr_23371_23439 = state_23324__$1;
(statearr_23371_23439[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (25))){
var inst_23267 = (state_23324[(9)]);
var inst_23266 = (state_23324[(20)]);
var inst_23269 = (inst_23267 < inst_23266);
var inst_23270 = inst_23269;
var state_23324__$1 = state_23324;
if(cljs.core.truth_(inst_23270)){
var statearr_23372_23440 = state_23324__$1;
(statearr_23372_23440[(1)] = (27));

} else {
var statearr_23373_23441 = state_23324__$1;
(statearr_23373_23441[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (34))){
var state_23324__$1 = state_23324;
var statearr_23374_23442 = state_23324__$1;
(statearr_23374_23442[(2)] = null);

(statearr_23374_23442[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (17))){
var state_23324__$1 = state_23324;
var statearr_23375_23443 = state_23324__$1;
(statearr_23375_23443[(2)] = null);

(statearr_23375_23443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (3))){
var inst_23322 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23324__$1,inst_23322);
} else {
if((state_val_23325 === (12))){
var inst_23251 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23376_23444 = state_23324__$1;
(statearr_23376_23444[(2)] = inst_23251);

(statearr_23376_23444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (2))){
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23324__$1,(4),ch);
} else {
if((state_val_23325 === (23))){
var state_23324__$1 = state_23324;
var statearr_23377_23445 = state_23324__$1;
(statearr_23377_23445[(2)] = null);

(statearr_23377_23445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (35))){
var inst_23306 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23378_23446 = state_23324__$1;
(statearr_23378_23446[(2)] = inst_23306);

(statearr_23378_23446[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (19))){
var inst_23225 = (state_23324[(7)]);
var inst_23229 = cljs.core.chunk_first.call(null,inst_23225);
var inst_23230 = cljs.core.chunk_rest.call(null,inst_23225);
var inst_23231 = cljs.core.count.call(null,inst_23229);
var inst_23205 = inst_23230;
var inst_23206 = inst_23229;
var inst_23207 = inst_23231;
var inst_23208 = (0);
var state_23324__$1 = (function (){var statearr_23379 = state_23324;
(statearr_23379[(13)] = inst_23207);

(statearr_23379[(14)] = inst_23208);

(statearr_23379[(15)] = inst_23206);

(statearr_23379[(16)] = inst_23205);

return statearr_23379;
})();
var statearr_23380_23447 = state_23324__$1;
(statearr_23380_23447[(2)] = null);

(statearr_23380_23447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (11))){
var inst_23225 = (state_23324[(7)]);
var inst_23205 = (state_23324[(16)]);
var inst_23225__$1 = cljs.core.seq.call(null,inst_23205);
var state_23324__$1 = (function (){var statearr_23381 = state_23324;
(statearr_23381[(7)] = inst_23225__$1);

return statearr_23381;
})();
if(inst_23225__$1){
var statearr_23382_23448 = state_23324__$1;
(statearr_23382_23448[(1)] = (16));

} else {
var statearr_23383_23449 = state_23324__$1;
(statearr_23383_23449[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (9))){
var inst_23253 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23384_23450 = state_23324__$1;
(statearr_23384_23450[(2)] = inst_23253);

(statearr_23384_23450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (5))){
var inst_23203 = cljs.core.deref.call(null,cs);
var inst_23204 = cljs.core.seq.call(null,inst_23203);
var inst_23205 = inst_23204;
var inst_23206 = null;
var inst_23207 = (0);
var inst_23208 = (0);
var state_23324__$1 = (function (){var statearr_23385 = state_23324;
(statearr_23385[(13)] = inst_23207);

(statearr_23385[(14)] = inst_23208);

(statearr_23385[(15)] = inst_23206);

(statearr_23385[(16)] = inst_23205);

return statearr_23385;
})();
var statearr_23386_23451 = state_23324__$1;
(statearr_23386_23451[(2)] = null);

(statearr_23386_23451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (14))){
var state_23324__$1 = state_23324;
var statearr_23387_23452 = state_23324__$1;
(statearr_23387_23452[(2)] = null);

(statearr_23387_23452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (45))){
var inst_23314 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23388_23453 = state_23324__$1;
(statearr_23388_23453[(2)] = inst_23314);

(statearr_23388_23453[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (26))){
var inst_23256 = (state_23324[(29)]);
var inst_23310 = (state_23324[(2)]);
var inst_23311 = cljs.core.seq.call(null,inst_23256);
var state_23324__$1 = (function (){var statearr_23389 = state_23324;
(statearr_23389[(31)] = inst_23310);

return statearr_23389;
})();
if(inst_23311){
var statearr_23390_23454 = state_23324__$1;
(statearr_23390_23454[(1)] = (42));

} else {
var statearr_23391_23455 = state_23324__$1;
(statearr_23391_23455[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (16))){
var inst_23225 = (state_23324[(7)]);
var inst_23227 = cljs.core.chunked_seq_QMARK_.call(null,inst_23225);
var state_23324__$1 = state_23324;
if(inst_23227){
var statearr_23392_23456 = state_23324__$1;
(statearr_23392_23456[(1)] = (19));

} else {
var statearr_23393_23457 = state_23324__$1;
(statearr_23393_23457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (38))){
var inst_23303 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23394_23458 = state_23324__$1;
(statearr_23394_23458[(2)] = inst_23303);

(statearr_23394_23458[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (30))){
var state_23324__$1 = state_23324;
var statearr_23395_23459 = state_23324__$1;
(statearr_23395_23459[(2)] = null);

(statearr_23395_23459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (10))){
var inst_23208 = (state_23324[(14)]);
var inst_23206 = (state_23324[(15)]);
var inst_23214 = cljs.core._nth.call(null,inst_23206,inst_23208);
var inst_23215 = cljs.core.nth.call(null,inst_23214,(0),null);
var inst_23216 = cljs.core.nth.call(null,inst_23214,(1),null);
var state_23324__$1 = (function (){var statearr_23396 = state_23324;
(statearr_23396[(26)] = inst_23215);

return statearr_23396;
})();
if(cljs.core.truth_(inst_23216)){
var statearr_23397_23460 = state_23324__$1;
(statearr_23397_23460[(1)] = (13));

} else {
var statearr_23398_23461 = state_23324__$1;
(statearr_23398_23461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (18))){
var inst_23249 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23399_23462 = state_23324__$1;
(statearr_23399_23462[(2)] = inst_23249);

(statearr_23399_23462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (42))){
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23324__$1,(45),dchan);
} else {
if((state_val_23325 === (37))){
var inst_23292 = (state_23324[(23)]);
var inst_23196 = (state_23324[(10)]);
var inst_23283 = (state_23324[(25)]);
var inst_23292__$1 = cljs.core.first.call(null,inst_23283);
var inst_23293 = cljs.core.async.put_BANG_.call(null,inst_23292__$1,inst_23196,done);
var state_23324__$1 = (function (){var statearr_23400 = state_23324;
(statearr_23400[(23)] = inst_23292__$1);

return statearr_23400;
})();
if(cljs.core.truth_(inst_23293)){
var statearr_23401_23463 = state_23324__$1;
(statearr_23401_23463[(1)] = (39));

} else {
var statearr_23402_23464 = state_23324__$1;
(statearr_23402_23464[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (8))){
var inst_23207 = (state_23324[(13)]);
var inst_23208 = (state_23324[(14)]);
var inst_23210 = (inst_23208 < inst_23207);
var inst_23211 = inst_23210;
var state_23324__$1 = state_23324;
if(cljs.core.truth_(inst_23211)){
var statearr_23403_23465 = state_23324__$1;
(statearr_23403_23465[(1)] = (10));

} else {
var statearr_23404_23466 = state_23324__$1;
(statearr_23404_23466[(1)] = (11));

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
});})(c__22023__auto___23412,cs,m,dchan,dctr,done))
;
return ((function (switch__22002__auto__,c__22023__auto___23412,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22003__auto__ = null;
var cljs$core$async$mult_$_state_machine__22003__auto____0 = (function (){
var statearr_23408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23408[(0)] = cljs$core$async$mult_$_state_machine__22003__auto__);

(statearr_23408[(1)] = (1));

return statearr_23408;
});
var cljs$core$async$mult_$_state_machine__22003__auto____1 = (function (state_23324){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_23324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e23409){if((e23409 instanceof Object)){
var ex__22006__auto__ = e23409;
var statearr_23410_23467 = state_23324;
(statearr_23410_23467[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23468 = state_23324;
state_23324 = G__23468;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22003__auto__ = function(state_23324){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22003__auto____1.call(this,state_23324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22003__auto____0;
cljs$core$async$mult_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22003__auto____1;
return cljs$core$async$mult_$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___23412,cs,m,dchan,dctr,done))
})();
var state__22025__auto__ = (function (){var statearr_23411 = f__22024__auto__.call(null);
(statearr_23411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___23412);

return statearr_23411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___23412,cs,m,dchan,dctr,done))
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
var G__23470 = arguments.length;
switch (G__23470) {
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

cljs.core.async.Mix = (function (){var obj23473 = {};
return obj23473;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23478){
var map__23479 = p__23478;
var map__23479__$1 = ((cljs.core.seq_QMARK_.call(null,map__23479))?cljs.core.apply.call(null,cljs.core.hash_map,map__23479):map__23479);
var opts = map__23479__$1;
var statearr_23480_23483 = state;
(statearr_23480_23483[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__23479,map__23479__$1,opts){
return (function (val){
var statearr_23481_23484 = state;
(statearr_23481_23484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23479,map__23479__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23482_23485 = state;
(statearr_23482_23485[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23474){
var G__23475 = cljs.core.first.call(null,seq23474);
var seq23474__$1 = cljs.core.next.call(null,seq23474);
var G__23476 = cljs.core.first.call(null,seq23474__$1);
var seq23474__$2 = cljs.core.next.call(null,seq23474__$1);
var G__23477 = cljs.core.first.call(null,seq23474__$2);
var seq23474__$3 = cljs.core.next.call(null,seq23474__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23475,G__23476,G__23477,seq23474__$3);
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
if(typeof cljs.core.async.t23605 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23605 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23606){
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
this.meta23606 = meta23606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23605.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t23605.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23607){
var self__ = this;
var _23607__$1 = this;
return self__.meta23606;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23607,meta23606__$1){
var self__ = this;
var _23607__$1 = this;
return (new cljs.core.async.t23605(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23606__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23605.cljs$lang$type = true;

cljs.core.async.t23605.cljs$lang$ctorStr = "cljs.core.async/t23605";

cljs.core.async.t23605.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t23605");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23605 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t23605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23606){
return (new cljs.core.async.t23605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23606));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23605(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22023__auto___23724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23677){
var state_val_23678 = (state_23677[(1)]);
if((state_val_23678 === (7))){
var inst_23621 = (state_23677[(7)]);
var inst_23626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23621);
var state_23677__$1 = state_23677;
var statearr_23679_23725 = state_23677__$1;
(statearr_23679_23725[(2)] = inst_23626);

(statearr_23679_23725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (20))){
var inst_23636 = (state_23677[(8)]);
var state_23677__$1 = state_23677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23677__$1,(23),out,inst_23636);
} else {
if((state_val_23678 === (1))){
var inst_23611 = (state_23677[(9)]);
var inst_23611__$1 = calc_state.call(null);
var inst_23612 = cljs.core.seq_QMARK_.call(null,inst_23611__$1);
var state_23677__$1 = (function (){var statearr_23680 = state_23677;
(statearr_23680[(9)] = inst_23611__$1);

return statearr_23680;
})();
if(inst_23612){
var statearr_23681_23726 = state_23677__$1;
(statearr_23681_23726[(1)] = (2));

} else {
var statearr_23682_23727 = state_23677__$1;
(statearr_23682_23727[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (24))){
var inst_23629 = (state_23677[(10)]);
var inst_23621 = inst_23629;
var state_23677__$1 = (function (){var statearr_23683 = state_23677;
(statearr_23683[(7)] = inst_23621);

return statearr_23683;
})();
var statearr_23684_23728 = state_23677__$1;
(statearr_23684_23728[(2)] = null);

(statearr_23684_23728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (4))){
var inst_23611 = (state_23677[(9)]);
var inst_23617 = (state_23677[(2)]);
var inst_23618 = cljs.core.get.call(null,inst_23617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23619 = cljs.core.get.call(null,inst_23617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23620 = cljs.core.get.call(null,inst_23617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23621 = inst_23611;
var state_23677__$1 = (function (){var statearr_23685 = state_23677;
(statearr_23685[(11)] = inst_23618);

(statearr_23685[(12)] = inst_23619);

(statearr_23685[(7)] = inst_23621);

(statearr_23685[(13)] = inst_23620);

return statearr_23685;
})();
var statearr_23686_23729 = state_23677__$1;
(statearr_23686_23729[(2)] = null);

(statearr_23686_23729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (15))){
var state_23677__$1 = state_23677;
var statearr_23687_23730 = state_23677__$1;
(statearr_23687_23730[(2)] = null);

(statearr_23687_23730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (21))){
var inst_23629 = (state_23677[(10)]);
var inst_23621 = inst_23629;
var state_23677__$1 = (function (){var statearr_23688 = state_23677;
(statearr_23688[(7)] = inst_23621);

return statearr_23688;
})();
var statearr_23689_23731 = state_23677__$1;
(statearr_23689_23731[(2)] = null);

(statearr_23689_23731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (13))){
var inst_23673 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
var statearr_23690_23732 = state_23677__$1;
(statearr_23690_23732[(2)] = inst_23673);

(statearr_23690_23732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (22))){
var inst_23671 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
var statearr_23691_23733 = state_23677__$1;
(statearr_23691_23733[(2)] = inst_23671);

(statearr_23691_23733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (6))){
var inst_23675 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23677__$1,inst_23675);
} else {
if((state_val_23678 === (25))){
var state_23677__$1 = state_23677;
var statearr_23692_23734 = state_23677__$1;
(statearr_23692_23734[(2)] = null);

(statearr_23692_23734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (17))){
var inst_23651 = (state_23677[(14)]);
var state_23677__$1 = state_23677;
var statearr_23693_23735 = state_23677__$1;
(statearr_23693_23735[(2)] = inst_23651);

(statearr_23693_23735[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (3))){
var inst_23611 = (state_23677[(9)]);
var state_23677__$1 = state_23677;
var statearr_23694_23736 = state_23677__$1;
(statearr_23694_23736[(2)] = inst_23611);

(statearr_23694_23736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (12))){
var inst_23637 = (state_23677[(15)]);
var inst_23651 = (state_23677[(14)]);
var inst_23632 = (state_23677[(16)]);
var inst_23651__$1 = inst_23632.call(null,inst_23637);
var state_23677__$1 = (function (){var statearr_23695 = state_23677;
(statearr_23695[(14)] = inst_23651__$1);

return statearr_23695;
})();
if(cljs.core.truth_(inst_23651__$1)){
var statearr_23696_23737 = state_23677__$1;
(statearr_23696_23737[(1)] = (17));

} else {
var statearr_23697_23738 = state_23677__$1;
(statearr_23697_23738[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (2))){
var inst_23611 = (state_23677[(9)]);
var inst_23614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23611);
var state_23677__$1 = state_23677;
var statearr_23698_23739 = state_23677__$1;
(statearr_23698_23739[(2)] = inst_23614);

(statearr_23698_23739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (23))){
var inst_23662 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
if(cljs.core.truth_(inst_23662)){
var statearr_23699_23740 = state_23677__$1;
(statearr_23699_23740[(1)] = (24));

} else {
var statearr_23700_23741 = state_23677__$1;
(statearr_23700_23741[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (19))){
var inst_23659 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
if(cljs.core.truth_(inst_23659)){
var statearr_23701_23742 = state_23677__$1;
(statearr_23701_23742[(1)] = (20));

} else {
var statearr_23702_23743 = state_23677__$1;
(statearr_23702_23743[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (11))){
var inst_23636 = (state_23677[(8)]);
var inst_23642 = (inst_23636 == null);
var state_23677__$1 = state_23677;
if(cljs.core.truth_(inst_23642)){
var statearr_23703_23744 = state_23677__$1;
(statearr_23703_23744[(1)] = (14));

} else {
var statearr_23704_23745 = state_23677__$1;
(statearr_23704_23745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (9))){
var inst_23629 = (state_23677[(10)]);
var inst_23629__$1 = (state_23677[(2)]);
var inst_23630 = cljs.core.get.call(null,inst_23629__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23631 = cljs.core.get.call(null,inst_23629__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23632 = cljs.core.get.call(null,inst_23629__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_23677__$1 = (function (){var statearr_23705 = state_23677;
(statearr_23705[(17)] = inst_23631);

(statearr_23705[(10)] = inst_23629__$1);

(statearr_23705[(16)] = inst_23632);

return statearr_23705;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23677__$1,(10),inst_23630);
} else {
if((state_val_23678 === (5))){
var inst_23621 = (state_23677[(7)]);
var inst_23624 = cljs.core.seq_QMARK_.call(null,inst_23621);
var state_23677__$1 = state_23677;
if(inst_23624){
var statearr_23706_23746 = state_23677__$1;
(statearr_23706_23746[(1)] = (7));

} else {
var statearr_23707_23747 = state_23677__$1;
(statearr_23707_23747[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (14))){
var inst_23637 = (state_23677[(15)]);
var inst_23644 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23637);
var state_23677__$1 = state_23677;
var statearr_23708_23748 = state_23677__$1;
(statearr_23708_23748[(2)] = inst_23644);

(statearr_23708_23748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (26))){
var inst_23667 = (state_23677[(2)]);
var state_23677__$1 = state_23677;
var statearr_23709_23749 = state_23677__$1;
(statearr_23709_23749[(2)] = inst_23667);

(statearr_23709_23749[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (16))){
var inst_23647 = (state_23677[(2)]);
var inst_23648 = calc_state.call(null);
var inst_23621 = inst_23648;
var state_23677__$1 = (function (){var statearr_23710 = state_23677;
(statearr_23710[(18)] = inst_23647);

(statearr_23710[(7)] = inst_23621);

return statearr_23710;
})();
var statearr_23711_23750 = state_23677__$1;
(statearr_23711_23750[(2)] = null);

(statearr_23711_23750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (10))){
var inst_23637 = (state_23677[(15)]);
var inst_23636 = (state_23677[(8)]);
var inst_23635 = (state_23677[(2)]);
var inst_23636__$1 = cljs.core.nth.call(null,inst_23635,(0),null);
var inst_23637__$1 = cljs.core.nth.call(null,inst_23635,(1),null);
var inst_23638 = (inst_23636__$1 == null);
var inst_23639 = cljs.core._EQ_.call(null,inst_23637__$1,change);
var inst_23640 = (inst_23638) || (inst_23639);
var state_23677__$1 = (function (){var statearr_23712 = state_23677;
(statearr_23712[(15)] = inst_23637__$1);

(statearr_23712[(8)] = inst_23636__$1);

return statearr_23712;
})();
if(cljs.core.truth_(inst_23640)){
var statearr_23713_23751 = state_23677__$1;
(statearr_23713_23751[(1)] = (11));

} else {
var statearr_23714_23752 = state_23677__$1;
(statearr_23714_23752[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (18))){
var inst_23637 = (state_23677[(15)]);
var inst_23631 = (state_23677[(17)]);
var inst_23632 = (state_23677[(16)]);
var inst_23654 = cljs.core.empty_QMARK_.call(null,inst_23632);
var inst_23655 = inst_23631.call(null,inst_23637);
var inst_23656 = cljs.core.not.call(null,inst_23655);
var inst_23657 = (inst_23654) && (inst_23656);
var state_23677__$1 = state_23677;
var statearr_23715_23753 = state_23677__$1;
(statearr_23715_23753[(2)] = inst_23657);

(statearr_23715_23753[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23678 === (8))){
var inst_23621 = (state_23677[(7)]);
var state_23677__$1 = state_23677;
var statearr_23716_23754 = state_23677__$1;
(statearr_23716_23754[(2)] = inst_23621);

(statearr_23716_23754[(1)] = (9));


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
});})(c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22002__auto__,c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22003__auto__ = null;
var cljs$core$async$mix_$_state_machine__22003__auto____0 = (function (){
var statearr_23720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23720[(0)] = cljs$core$async$mix_$_state_machine__22003__auto__);

(statearr_23720[(1)] = (1));

return statearr_23720;
});
var cljs$core$async$mix_$_state_machine__22003__auto____1 = (function (state_23677){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_23677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e23721){if((e23721 instanceof Object)){
var ex__22006__auto__ = e23721;
var statearr_23722_23755 = state_23677;
(statearr_23722_23755[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23756 = state_23677;
state_23677 = G__23756;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22003__auto__ = function(state_23677){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22003__auto____1.call(this,state_23677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22003__auto____0;
cljs$core$async$mix_$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22003__auto____1;
return cljs$core$async$mix_$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22025__auto__ = (function (){var statearr_23723 = f__22024__auto__.call(null);
(statearr_23723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___23724);

return statearr_23723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___23724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj23758 = {};
return obj23758;
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
var G__23760 = arguments.length;
switch (G__23760) {
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
var G__23764 = arguments.length;
switch (G__23764) {
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
return (function (p1__23762_SHARP_){
if(cljs.core.truth_(p1__23762_SHARP_.call(null,topic))){
return p1__23762_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23765 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta23766){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta23766 = meta23766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23765.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23765.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23765.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t23765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23765.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23765.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23767){
var self__ = this;
var _23767__$1 = this;
return self__.meta23766;
});})(mults,ensure_mult))
;

cljs.core.async.t23765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23767,meta23766__$1){
var self__ = this;
var _23767__$1 = this;
return (new cljs.core.async.t23765(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta23766__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23765.cljs$lang$type = true;

cljs.core.async.t23765.cljs$lang$ctorStr = "cljs.core.async/t23765";

cljs.core.async.t23765.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t23765");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23765 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t23765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta23766){
return (new cljs.core.async.t23765(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta23766));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23765(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22023__auto___23888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___23888,mults,ensure_mult,p){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___23888,mults,ensure_mult,p){
return (function (state_23839){
var state_val_23840 = (state_23839[(1)]);
if((state_val_23840 === (7))){
var inst_23835 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23841_23889 = state_23839__$1;
(statearr_23841_23889[(2)] = inst_23835);

(statearr_23841_23889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (20))){
var state_23839__$1 = state_23839;
var statearr_23842_23890 = state_23839__$1;
(statearr_23842_23890[(2)] = null);

(statearr_23842_23890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (1))){
var state_23839__$1 = state_23839;
var statearr_23843_23891 = state_23839__$1;
(statearr_23843_23891[(2)] = null);

(statearr_23843_23891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (24))){
var inst_23818 = (state_23839[(7)]);
var inst_23827 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23818);
var state_23839__$1 = state_23839;
var statearr_23844_23892 = state_23839__$1;
(statearr_23844_23892[(2)] = inst_23827);

(statearr_23844_23892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (4))){
var inst_23770 = (state_23839[(8)]);
var inst_23770__$1 = (state_23839[(2)]);
var inst_23771 = (inst_23770__$1 == null);
var state_23839__$1 = (function (){var statearr_23845 = state_23839;
(statearr_23845[(8)] = inst_23770__$1);

return statearr_23845;
})();
if(cljs.core.truth_(inst_23771)){
var statearr_23846_23893 = state_23839__$1;
(statearr_23846_23893[(1)] = (5));

} else {
var statearr_23847_23894 = state_23839__$1;
(statearr_23847_23894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (15))){
var inst_23812 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23848_23895 = state_23839__$1;
(statearr_23848_23895[(2)] = inst_23812);

(statearr_23848_23895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (21))){
var inst_23832 = (state_23839[(2)]);
var state_23839__$1 = (function (){var statearr_23849 = state_23839;
(statearr_23849[(9)] = inst_23832);

return statearr_23849;
})();
var statearr_23850_23896 = state_23839__$1;
(statearr_23850_23896[(2)] = null);

(statearr_23850_23896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (13))){
var inst_23794 = (state_23839[(10)]);
var inst_23796 = cljs.core.chunked_seq_QMARK_.call(null,inst_23794);
var state_23839__$1 = state_23839;
if(inst_23796){
var statearr_23851_23897 = state_23839__$1;
(statearr_23851_23897[(1)] = (16));

} else {
var statearr_23852_23898 = state_23839__$1;
(statearr_23852_23898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (22))){
var inst_23824 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
if(cljs.core.truth_(inst_23824)){
var statearr_23853_23899 = state_23839__$1;
(statearr_23853_23899[(1)] = (23));

} else {
var statearr_23854_23900 = state_23839__$1;
(statearr_23854_23900[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (6))){
var inst_23820 = (state_23839[(11)]);
var inst_23770 = (state_23839[(8)]);
var inst_23818 = (state_23839[(7)]);
var inst_23818__$1 = topic_fn.call(null,inst_23770);
var inst_23819 = cljs.core.deref.call(null,mults);
var inst_23820__$1 = cljs.core.get.call(null,inst_23819,inst_23818__$1);
var state_23839__$1 = (function (){var statearr_23855 = state_23839;
(statearr_23855[(11)] = inst_23820__$1);

(statearr_23855[(7)] = inst_23818__$1);

return statearr_23855;
})();
if(cljs.core.truth_(inst_23820__$1)){
var statearr_23856_23901 = state_23839__$1;
(statearr_23856_23901[(1)] = (19));

} else {
var statearr_23857_23902 = state_23839__$1;
(statearr_23857_23902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (25))){
var inst_23829 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23858_23903 = state_23839__$1;
(statearr_23858_23903[(2)] = inst_23829);

(statearr_23858_23903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (17))){
var inst_23794 = (state_23839[(10)]);
var inst_23803 = cljs.core.first.call(null,inst_23794);
var inst_23804 = cljs.core.async.muxch_STAR_.call(null,inst_23803);
var inst_23805 = cljs.core.async.close_BANG_.call(null,inst_23804);
var inst_23806 = cljs.core.next.call(null,inst_23794);
var inst_23780 = inst_23806;
var inst_23781 = null;
var inst_23782 = (0);
var inst_23783 = (0);
var state_23839__$1 = (function (){var statearr_23859 = state_23839;
(statearr_23859[(12)] = inst_23781);

(statearr_23859[(13)] = inst_23783);

(statearr_23859[(14)] = inst_23782);

(statearr_23859[(15)] = inst_23805);

(statearr_23859[(16)] = inst_23780);

return statearr_23859;
})();
var statearr_23860_23904 = state_23839__$1;
(statearr_23860_23904[(2)] = null);

(statearr_23860_23904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (3))){
var inst_23837 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23839__$1,inst_23837);
} else {
if((state_val_23840 === (12))){
var inst_23814 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23861_23905 = state_23839__$1;
(statearr_23861_23905[(2)] = inst_23814);

(statearr_23861_23905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (2))){
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23839__$1,(4),ch);
} else {
if((state_val_23840 === (23))){
var state_23839__$1 = state_23839;
var statearr_23862_23906 = state_23839__$1;
(statearr_23862_23906[(2)] = null);

(statearr_23862_23906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (19))){
var inst_23820 = (state_23839[(11)]);
var inst_23770 = (state_23839[(8)]);
var inst_23822 = cljs.core.async.muxch_STAR_.call(null,inst_23820);
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23839__$1,(22),inst_23822,inst_23770);
} else {
if((state_val_23840 === (11))){
var inst_23794 = (state_23839[(10)]);
var inst_23780 = (state_23839[(16)]);
var inst_23794__$1 = cljs.core.seq.call(null,inst_23780);
var state_23839__$1 = (function (){var statearr_23863 = state_23839;
(statearr_23863[(10)] = inst_23794__$1);

return statearr_23863;
})();
if(inst_23794__$1){
var statearr_23864_23907 = state_23839__$1;
(statearr_23864_23907[(1)] = (13));

} else {
var statearr_23865_23908 = state_23839__$1;
(statearr_23865_23908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (9))){
var inst_23816 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23866_23909 = state_23839__$1;
(statearr_23866_23909[(2)] = inst_23816);

(statearr_23866_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (5))){
var inst_23777 = cljs.core.deref.call(null,mults);
var inst_23778 = cljs.core.vals.call(null,inst_23777);
var inst_23779 = cljs.core.seq.call(null,inst_23778);
var inst_23780 = inst_23779;
var inst_23781 = null;
var inst_23782 = (0);
var inst_23783 = (0);
var state_23839__$1 = (function (){var statearr_23867 = state_23839;
(statearr_23867[(12)] = inst_23781);

(statearr_23867[(13)] = inst_23783);

(statearr_23867[(14)] = inst_23782);

(statearr_23867[(16)] = inst_23780);

return statearr_23867;
})();
var statearr_23868_23910 = state_23839__$1;
(statearr_23868_23910[(2)] = null);

(statearr_23868_23910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (14))){
var state_23839__$1 = state_23839;
var statearr_23872_23911 = state_23839__$1;
(statearr_23872_23911[(2)] = null);

(statearr_23872_23911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (16))){
var inst_23794 = (state_23839[(10)]);
var inst_23798 = cljs.core.chunk_first.call(null,inst_23794);
var inst_23799 = cljs.core.chunk_rest.call(null,inst_23794);
var inst_23800 = cljs.core.count.call(null,inst_23798);
var inst_23780 = inst_23799;
var inst_23781 = inst_23798;
var inst_23782 = inst_23800;
var inst_23783 = (0);
var state_23839__$1 = (function (){var statearr_23873 = state_23839;
(statearr_23873[(12)] = inst_23781);

(statearr_23873[(13)] = inst_23783);

(statearr_23873[(14)] = inst_23782);

(statearr_23873[(16)] = inst_23780);

return statearr_23873;
})();
var statearr_23874_23912 = state_23839__$1;
(statearr_23874_23912[(2)] = null);

(statearr_23874_23912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (10))){
var inst_23781 = (state_23839[(12)]);
var inst_23783 = (state_23839[(13)]);
var inst_23782 = (state_23839[(14)]);
var inst_23780 = (state_23839[(16)]);
var inst_23788 = cljs.core._nth.call(null,inst_23781,inst_23783);
var inst_23789 = cljs.core.async.muxch_STAR_.call(null,inst_23788);
var inst_23790 = cljs.core.async.close_BANG_.call(null,inst_23789);
var inst_23791 = (inst_23783 + (1));
var tmp23869 = inst_23781;
var tmp23870 = inst_23782;
var tmp23871 = inst_23780;
var inst_23780__$1 = tmp23871;
var inst_23781__$1 = tmp23869;
var inst_23782__$1 = tmp23870;
var inst_23783__$1 = inst_23791;
var state_23839__$1 = (function (){var statearr_23875 = state_23839;
(statearr_23875[(12)] = inst_23781__$1);

(statearr_23875[(13)] = inst_23783__$1);

(statearr_23875[(17)] = inst_23790);

(statearr_23875[(14)] = inst_23782__$1);

(statearr_23875[(16)] = inst_23780__$1);

return statearr_23875;
})();
var statearr_23876_23913 = state_23839__$1;
(statearr_23876_23913[(2)] = null);

(statearr_23876_23913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (18))){
var inst_23809 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23877_23914 = state_23839__$1;
(statearr_23877_23914[(2)] = inst_23809);

(statearr_23877_23914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (8))){
var inst_23783 = (state_23839[(13)]);
var inst_23782 = (state_23839[(14)]);
var inst_23785 = (inst_23783 < inst_23782);
var inst_23786 = inst_23785;
var state_23839__$1 = state_23839;
if(cljs.core.truth_(inst_23786)){
var statearr_23878_23915 = state_23839__$1;
(statearr_23878_23915[(1)] = (10));

} else {
var statearr_23879_23916 = state_23839__$1;
(statearr_23879_23916[(1)] = (11));

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
});})(c__22023__auto___23888,mults,ensure_mult,p))
;
return ((function (switch__22002__auto__,c__22023__auto___23888,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_23883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23883[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_23883[(1)] = (1));

return statearr_23883;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_23839){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_23839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e23884){if((e23884 instanceof Object)){
var ex__22006__auto__ = e23884;
var statearr_23885_23917 = state_23839;
(statearr_23885_23917[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23918 = state_23839;
state_23839 = G__23918;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_23839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_23839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___23888,mults,ensure_mult,p))
})();
var state__22025__auto__ = (function (){var statearr_23886 = f__22024__auto__.call(null);
(statearr_23886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___23888);

return statearr_23886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___23888,mults,ensure_mult,p))
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
var G__23920 = arguments.length;
switch (G__23920) {
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
var G__23923 = arguments.length;
switch (G__23923) {
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
var G__23926 = arguments.length;
switch (G__23926) {
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
var c__22023__auto___23996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23965){
var state_val_23966 = (state_23965[(1)]);
if((state_val_23966 === (7))){
var state_23965__$1 = state_23965;
var statearr_23967_23997 = state_23965__$1;
(statearr_23967_23997[(2)] = null);

(statearr_23967_23997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (1))){
var state_23965__$1 = state_23965;
var statearr_23968_23998 = state_23965__$1;
(statearr_23968_23998[(2)] = null);

(statearr_23968_23998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (4))){
var inst_23929 = (state_23965[(7)]);
var inst_23931 = (inst_23929 < cnt);
var state_23965__$1 = state_23965;
if(cljs.core.truth_(inst_23931)){
var statearr_23969_23999 = state_23965__$1;
(statearr_23969_23999[(1)] = (6));

} else {
var statearr_23970_24000 = state_23965__$1;
(statearr_23970_24000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (15))){
var inst_23961 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
var statearr_23971_24001 = state_23965__$1;
(statearr_23971_24001[(2)] = inst_23961);

(statearr_23971_24001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (13))){
var inst_23954 = cljs.core.async.close_BANG_.call(null,out);
var state_23965__$1 = state_23965;
var statearr_23972_24002 = state_23965__$1;
(statearr_23972_24002[(2)] = inst_23954);

(statearr_23972_24002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (6))){
var state_23965__$1 = state_23965;
var statearr_23973_24003 = state_23965__$1;
(statearr_23973_24003[(2)] = null);

(statearr_23973_24003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (3))){
var inst_23963 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23965__$1,inst_23963);
} else {
if((state_val_23966 === (12))){
var inst_23951 = (state_23965[(8)]);
var inst_23951__$1 = (state_23965[(2)]);
var inst_23952 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23951__$1);
var state_23965__$1 = (function (){var statearr_23974 = state_23965;
(statearr_23974[(8)] = inst_23951__$1);

return statearr_23974;
})();
if(cljs.core.truth_(inst_23952)){
var statearr_23975_24004 = state_23965__$1;
(statearr_23975_24004[(1)] = (13));

} else {
var statearr_23976_24005 = state_23965__$1;
(statearr_23976_24005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (2))){
var inst_23928 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23929 = (0);
var state_23965__$1 = (function (){var statearr_23977 = state_23965;
(statearr_23977[(7)] = inst_23929);

(statearr_23977[(9)] = inst_23928);

return statearr_23977;
})();
var statearr_23978_24006 = state_23965__$1;
(statearr_23978_24006[(2)] = null);

(statearr_23978_24006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (11))){
var inst_23929 = (state_23965[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23965,(10),Object,null,(9));
var inst_23938 = chs__$1.call(null,inst_23929);
var inst_23939 = done.call(null,inst_23929);
var inst_23940 = cljs.core.async.take_BANG_.call(null,inst_23938,inst_23939);
var state_23965__$1 = state_23965;
var statearr_23979_24007 = state_23965__$1;
(statearr_23979_24007[(2)] = inst_23940);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (9))){
var inst_23929 = (state_23965[(7)]);
var inst_23942 = (state_23965[(2)]);
var inst_23943 = (inst_23929 + (1));
var inst_23929__$1 = inst_23943;
var state_23965__$1 = (function (){var statearr_23980 = state_23965;
(statearr_23980[(10)] = inst_23942);

(statearr_23980[(7)] = inst_23929__$1);

return statearr_23980;
})();
var statearr_23981_24008 = state_23965__$1;
(statearr_23981_24008[(2)] = null);

(statearr_23981_24008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (5))){
var inst_23949 = (state_23965[(2)]);
var state_23965__$1 = (function (){var statearr_23982 = state_23965;
(statearr_23982[(11)] = inst_23949);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23965__$1,(12),dchan);
} else {
if((state_val_23966 === (14))){
var inst_23951 = (state_23965[(8)]);
var inst_23956 = cljs.core.apply.call(null,f,inst_23951);
var state_23965__$1 = state_23965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23965__$1,(16),out,inst_23956);
} else {
if((state_val_23966 === (16))){
var inst_23958 = (state_23965[(2)]);
var state_23965__$1 = (function (){var statearr_23983 = state_23965;
(statearr_23983[(12)] = inst_23958);

return statearr_23983;
})();
var statearr_23984_24009 = state_23965__$1;
(statearr_23984_24009[(2)] = null);

(statearr_23984_24009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (10))){
var inst_23933 = (state_23965[(2)]);
var inst_23934 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23965__$1 = (function (){var statearr_23985 = state_23965;
(statearr_23985[(13)] = inst_23933);

return statearr_23985;
})();
var statearr_23986_24010 = state_23965__$1;
(statearr_23986_24010[(2)] = inst_23934);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23966 === (8))){
var inst_23947 = (state_23965[(2)]);
var state_23965__$1 = state_23965;
var statearr_23987_24011 = state_23965__$1;
(statearr_23987_24011[(2)] = inst_23947);

(statearr_23987_24011[(1)] = (5));


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
});})(c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22002__auto__,c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_23991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23991[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_23991[(1)] = (1));

return statearr_23991;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_23965){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_23965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e23992){if((e23992 instanceof Object)){
var ex__22006__auto__ = e23992;
var statearr_23993_24012 = state_23965;
(statearr_23993_24012[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24013 = state_23965;
state_23965 = G__24013;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_23965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_23965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22025__auto__ = (function (){var statearr_23994 = f__22024__auto__.call(null);
(statearr_23994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___23996);

return statearr_23994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___23996,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24016 = arguments.length;
switch (G__24016) {
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
var c__22023__auto___24071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24071,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24071,out){
return (function (state_24046){
var state_val_24047 = (state_24046[(1)]);
if((state_val_24047 === (7))){
var inst_24026 = (state_24046[(7)]);
var inst_24025 = (state_24046[(8)]);
var inst_24025__$1 = (state_24046[(2)]);
var inst_24026__$1 = cljs.core.nth.call(null,inst_24025__$1,(0),null);
var inst_24027 = cljs.core.nth.call(null,inst_24025__$1,(1),null);
var inst_24028 = (inst_24026__$1 == null);
var state_24046__$1 = (function (){var statearr_24048 = state_24046;
(statearr_24048[(9)] = inst_24027);

(statearr_24048[(7)] = inst_24026__$1);

(statearr_24048[(8)] = inst_24025__$1);

return statearr_24048;
})();
if(cljs.core.truth_(inst_24028)){
var statearr_24049_24072 = state_24046__$1;
(statearr_24049_24072[(1)] = (8));

} else {
var statearr_24050_24073 = state_24046__$1;
(statearr_24050_24073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (1))){
var inst_24017 = cljs.core.vec.call(null,chs);
var inst_24018 = inst_24017;
var state_24046__$1 = (function (){var statearr_24051 = state_24046;
(statearr_24051[(10)] = inst_24018);

return statearr_24051;
})();
var statearr_24052_24074 = state_24046__$1;
(statearr_24052_24074[(2)] = null);

(statearr_24052_24074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (4))){
var inst_24018 = (state_24046[(10)]);
var state_24046__$1 = state_24046;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24046__$1,(7),inst_24018);
} else {
if((state_val_24047 === (6))){
var inst_24042 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24053_24075 = state_24046__$1;
(statearr_24053_24075[(2)] = inst_24042);

(statearr_24053_24075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (3))){
var inst_24044 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24046__$1,inst_24044);
} else {
if((state_val_24047 === (2))){
var inst_24018 = (state_24046[(10)]);
var inst_24020 = cljs.core.count.call(null,inst_24018);
var inst_24021 = (inst_24020 > (0));
var state_24046__$1 = state_24046;
if(cljs.core.truth_(inst_24021)){
var statearr_24055_24076 = state_24046__$1;
(statearr_24055_24076[(1)] = (4));

} else {
var statearr_24056_24077 = state_24046__$1;
(statearr_24056_24077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (11))){
var inst_24018 = (state_24046[(10)]);
var inst_24035 = (state_24046[(2)]);
var tmp24054 = inst_24018;
var inst_24018__$1 = tmp24054;
var state_24046__$1 = (function (){var statearr_24057 = state_24046;
(statearr_24057[(10)] = inst_24018__$1);

(statearr_24057[(11)] = inst_24035);

return statearr_24057;
})();
var statearr_24058_24078 = state_24046__$1;
(statearr_24058_24078[(2)] = null);

(statearr_24058_24078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (9))){
var inst_24026 = (state_24046[(7)]);
var state_24046__$1 = state_24046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24046__$1,(11),out,inst_24026);
} else {
if((state_val_24047 === (5))){
var inst_24040 = cljs.core.async.close_BANG_.call(null,out);
var state_24046__$1 = state_24046;
var statearr_24059_24079 = state_24046__$1;
(statearr_24059_24079[(2)] = inst_24040);

(statearr_24059_24079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (10))){
var inst_24038 = (state_24046[(2)]);
var state_24046__$1 = state_24046;
var statearr_24060_24080 = state_24046__$1;
(statearr_24060_24080[(2)] = inst_24038);

(statearr_24060_24080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24047 === (8))){
var inst_24027 = (state_24046[(9)]);
var inst_24026 = (state_24046[(7)]);
var inst_24025 = (state_24046[(8)]);
var inst_24018 = (state_24046[(10)]);
var inst_24030 = (function (){var c = inst_24027;
var v = inst_24026;
var vec__24023 = inst_24025;
var cs = inst_24018;
return ((function (c,v,vec__24023,cs,inst_24027,inst_24026,inst_24025,inst_24018,state_val_24047,c__22023__auto___24071,out){
return (function (p1__24014_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24014_SHARP_);
});
;})(c,v,vec__24023,cs,inst_24027,inst_24026,inst_24025,inst_24018,state_val_24047,c__22023__auto___24071,out))
})();
var inst_24031 = cljs.core.filterv.call(null,inst_24030,inst_24018);
var inst_24018__$1 = inst_24031;
var state_24046__$1 = (function (){var statearr_24061 = state_24046;
(statearr_24061[(10)] = inst_24018__$1);

return statearr_24061;
})();
var statearr_24062_24081 = state_24046__$1;
(statearr_24062_24081[(2)] = null);

(statearr_24062_24081[(1)] = (2));


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
});})(c__22023__auto___24071,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24071,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24066[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24066[(1)] = (1));

return statearr_24066;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24046){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24067){if((e24067 instanceof Object)){
var ex__22006__auto__ = e24067;
var statearr_24068_24082 = state_24046;
(statearr_24068_24082[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24083 = state_24046;
state_24046 = G__24083;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24071,out))
})();
var state__22025__auto__ = (function (){var statearr_24069 = f__22024__auto__.call(null);
(statearr_24069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24071);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24071,out))
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
var G__24085 = arguments.length;
switch (G__24085) {
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
var c__22023__auto___24133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24133,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24133,out){
return (function (state_24109){
var state_val_24110 = (state_24109[(1)]);
if((state_val_24110 === (7))){
var inst_24091 = (state_24109[(7)]);
var inst_24091__$1 = (state_24109[(2)]);
var inst_24092 = (inst_24091__$1 == null);
var inst_24093 = cljs.core.not.call(null,inst_24092);
var state_24109__$1 = (function (){var statearr_24111 = state_24109;
(statearr_24111[(7)] = inst_24091__$1);

return statearr_24111;
})();
if(inst_24093){
var statearr_24112_24134 = state_24109__$1;
(statearr_24112_24134[(1)] = (8));

} else {
var statearr_24113_24135 = state_24109__$1;
(statearr_24113_24135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (1))){
var inst_24086 = (0);
var state_24109__$1 = (function (){var statearr_24114 = state_24109;
(statearr_24114[(8)] = inst_24086);

return statearr_24114;
})();
var statearr_24115_24136 = state_24109__$1;
(statearr_24115_24136[(2)] = null);

(statearr_24115_24136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (4))){
var state_24109__$1 = state_24109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24109__$1,(7),ch);
} else {
if((state_val_24110 === (6))){
var inst_24104 = (state_24109[(2)]);
var state_24109__$1 = state_24109;
var statearr_24116_24137 = state_24109__$1;
(statearr_24116_24137[(2)] = inst_24104);

(statearr_24116_24137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (3))){
var inst_24106 = (state_24109[(2)]);
var inst_24107 = cljs.core.async.close_BANG_.call(null,out);
var state_24109__$1 = (function (){var statearr_24117 = state_24109;
(statearr_24117[(9)] = inst_24106);

return statearr_24117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24109__$1,inst_24107);
} else {
if((state_val_24110 === (2))){
var inst_24086 = (state_24109[(8)]);
var inst_24088 = (inst_24086 < n);
var state_24109__$1 = state_24109;
if(cljs.core.truth_(inst_24088)){
var statearr_24118_24138 = state_24109__$1;
(statearr_24118_24138[(1)] = (4));

} else {
var statearr_24119_24139 = state_24109__$1;
(statearr_24119_24139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (11))){
var inst_24086 = (state_24109[(8)]);
var inst_24096 = (state_24109[(2)]);
var inst_24097 = (inst_24086 + (1));
var inst_24086__$1 = inst_24097;
var state_24109__$1 = (function (){var statearr_24120 = state_24109;
(statearr_24120[(10)] = inst_24096);

(statearr_24120[(8)] = inst_24086__$1);

return statearr_24120;
})();
var statearr_24121_24140 = state_24109__$1;
(statearr_24121_24140[(2)] = null);

(statearr_24121_24140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (9))){
var state_24109__$1 = state_24109;
var statearr_24122_24141 = state_24109__$1;
(statearr_24122_24141[(2)] = null);

(statearr_24122_24141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (5))){
var state_24109__$1 = state_24109;
var statearr_24123_24142 = state_24109__$1;
(statearr_24123_24142[(2)] = null);

(statearr_24123_24142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (10))){
var inst_24101 = (state_24109[(2)]);
var state_24109__$1 = state_24109;
var statearr_24124_24143 = state_24109__$1;
(statearr_24124_24143[(2)] = inst_24101);

(statearr_24124_24143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24110 === (8))){
var inst_24091 = (state_24109[(7)]);
var state_24109__$1 = state_24109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24109__$1,(11),out,inst_24091);
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
});})(c__22023__auto___24133,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24133,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24128[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24128[(1)] = (1));

return statearr_24128;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24109){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object)){
var ex__22006__auto__ = e24129;
var statearr_24130_24144 = state_24109;
(statearr_24130_24144[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24145 = state_24109;
state_24109 = G__24145;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24133,out))
})();
var state__22025__auto__ = (function (){var statearr_24131 = f__22024__auto__.call(null);
(statearr_24131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24133);

return statearr_24131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24133,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t24153 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24153 = (function (ch,f,map_LT_,meta24154){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24154 = meta24154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t24156 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24156 = (function (fn1,_,meta24154,map_LT_,f,ch,meta24157){
this.fn1 = fn1;
this._ = _;
this.meta24154 = meta24154;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24157 = meta24157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24156.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t24156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24146_SHARP_){
return f1.call(null,(((p1__24146_SHARP_ == null))?null:self__.f.call(null,p1__24146_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24158){
var self__ = this;
var _24158__$1 = this;
return self__.meta24157;
});})(___$1))
;

cljs.core.async.t24156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24158,meta24157__$1){
var self__ = this;
var _24158__$1 = this;
return (new cljs.core.async.t24156(self__.fn1,self__._,self__.meta24154,self__.map_LT_,self__.f,self__.ch,meta24157__$1));
});})(___$1))
;

cljs.core.async.t24156.cljs$lang$type = true;

cljs.core.async.t24156.cljs$lang$ctorStr = "cljs.core.async/t24156";

cljs.core.async.t24156.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t24156");
});})(___$1))
;

cljs.core.async.__GT_t24156 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t24156(fn1__$1,___$2,meta24154__$1,map_LT___$1,f__$1,ch__$1,meta24157){
return (new cljs.core.async.t24156(fn1__$1,___$2,meta24154__$1,map_LT___$1,f__$1,ch__$1,meta24157));
});})(___$1))
;

}

return (new cljs.core.async.t24156(fn1,___$1,self__.meta24154,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24153.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24155){
var self__ = this;
var _24155__$1 = this;
return self__.meta24154;
});

cljs.core.async.t24153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24155,meta24154__$1){
var self__ = this;
var _24155__$1 = this;
return (new cljs.core.async.t24153(self__.ch,self__.f,self__.map_LT_,meta24154__$1));
});

cljs.core.async.t24153.cljs$lang$type = true;

cljs.core.async.t24153.cljs$lang$ctorStr = "cljs.core.async/t24153";

cljs.core.async.t24153.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t24153");
});

cljs.core.async.__GT_t24153 = (function cljs$core$async$map_LT__$___GT_t24153(ch__$1,f__$1,map_LT___$1,meta24154){
return (new cljs.core.async.t24153(ch__$1,f__$1,map_LT___$1,meta24154));
});

}

return (new cljs.core.async.t24153(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t24162 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24162 = (function (ch,f,map_GT_,meta24163){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24163 = meta24163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24164){
var self__ = this;
var _24164__$1 = this;
return self__.meta24163;
});

cljs.core.async.t24162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24164,meta24163__$1){
var self__ = this;
var _24164__$1 = this;
return (new cljs.core.async.t24162(self__.ch,self__.f,self__.map_GT_,meta24163__$1));
});

cljs.core.async.t24162.cljs$lang$type = true;

cljs.core.async.t24162.cljs$lang$ctorStr = "cljs.core.async/t24162";

cljs.core.async.t24162.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t24162");
});

cljs.core.async.__GT_t24162 = (function cljs$core$async$map_GT__$___GT_t24162(ch__$1,f__$1,map_GT___$1,meta24163){
return (new cljs.core.async.t24162(ch__$1,f__$1,map_GT___$1,meta24163));
});

}

return (new cljs.core.async.t24162(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t24168 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24168 = (function (ch,p,filter_GT_,meta24169){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24169 = meta24169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24168.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24170){
var self__ = this;
var _24170__$1 = this;
return self__.meta24169;
});

cljs.core.async.t24168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24170,meta24169__$1){
var self__ = this;
var _24170__$1 = this;
return (new cljs.core.async.t24168(self__.ch,self__.p,self__.filter_GT_,meta24169__$1));
});

cljs.core.async.t24168.cljs$lang$type = true;

cljs.core.async.t24168.cljs$lang$ctorStr = "cljs.core.async/t24168";

cljs.core.async.t24168.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t24168");
});

cljs.core.async.__GT_t24168 = (function cljs$core$async$filter_GT__$___GT_t24168(ch__$1,p__$1,filter_GT___$1,meta24169){
return (new cljs.core.async.t24168(ch__$1,p__$1,filter_GT___$1,meta24169));
});

}

return (new cljs.core.async.t24168(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24172 = arguments.length;
switch (G__24172) {
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
var c__22023__auto___24215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24215,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24215,out){
return (function (state_24193){
var state_val_24194 = (state_24193[(1)]);
if((state_val_24194 === (7))){
var inst_24189 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24195_24216 = state_24193__$1;
(statearr_24195_24216[(2)] = inst_24189);

(statearr_24195_24216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (1))){
var state_24193__$1 = state_24193;
var statearr_24196_24217 = state_24193__$1;
(statearr_24196_24217[(2)] = null);

(statearr_24196_24217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (4))){
var inst_24175 = (state_24193[(7)]);
var inst_24175__$1 = (state_24193[(2)]);
var inst_24176 = (inst_24175__$1 == null);
var state_24193__$1 = (function (){var statearr_24197 = state_24193;
(statearr_24197[(7)] = inst_24175__$1);

return statearr_24197;
})();
if(cljs.core.truth_(inst_24176)){
var statearr_24198_24218 = state_24193__$1;
(statearr_24198_24218[(1)] = (5));

} else {
var statearr_24199_24219 = state_24193__$1;
(statearr_24199_24219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (6))){
var inst_24175 = (state_24193[(7)]);
var inst_24180 = p.call(null,inst_24175);
var state_24193__$1 = state_24193;
if(cljs.core.truth_(inst_24180)){
var statearr_24200_24220 = state_24193__$1;
(statearr_24200_24220[(1)] = (8));

} else {
var statearr_24201_24221 = state_24193__$1;
(statearr_24201_24221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (3))){
var inst_24191 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24193__$1,inst_24191);
} else {
if((state_val_24194 === (2))){
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24193__$1,(4),ch);
} else {
if((state_val_24194 === (11))){
var inst_24183 = (state_24193[(2)]);
var state_24193__$1 = state_24193;
var statearr_24202_24222 = state_24193__$1;
(statearr_24202_24222[(2)] = inst_24183);

(statearr_24202_24222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (9))){
var state_24193__$1 = state_24193;
var statearr_24203_24223 = state_24193__$1;
(statearr_24203_24223[(2)] = null);

(statearr_24203_24223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (5))){
var inst_24178 = cljs.core.async.close_BANG_.call(null,out);
var state_24193__$1 = state_24193;
var statearr_24204_24224 = state_24193__$1;
(statearr_24204_24224[(2)] = inst_24178);

(statearr_24204_24224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (10))){
var inst_24186 = (state_24193[(2)]);
var state_24193__$1 = (function (){var statearr_24205 = state_24193;
(statearr_24205[(8)] = inst_24186);

return statearr_24205;
})();
var statearr_24206_24225 = state_24193__$1;
(statearr_24206_24225[(2)] = null);

(statearr_24206_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24194 === (8))){
var inst_24175 = (state_24193[(7)]);
var state_24193__$1 = state_24193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24193__$1,(11),out,inst_24175);
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
});})(c__22023__auto___24215,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24215,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24210 = [null,null,null,null,null,null,null,null,null];
(statearr_24210[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24210[(1)] = (1));

return statearr_24210;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24193){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24211){if((e24211 instanceof Object)){
var ex__22006__auto__ = e24211;
var statearr_24212_24226 = state_24193;
(statearr_24212_24226[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24227 = state_24193;
state_24193 = G__24227;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24215,out))
})();
var state__22025__auto__ = (function (){var statearr_24213 = f__22024__auto__.call(null);
(statearr_24213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24215);

return statearr_24213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24215,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__24229 = arguments.length;
switch (G__24229) {
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
var c__22023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto__){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto__){
return (function (state_24396){
var state_val_24397 = (state_24396[(1)]);
if((state_val_24397 === (7))){
var inst_24392 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24398_24439 = state_24396__$1;
(statearr_24398_24439[(2)] = inst_24392);

(statearr_24398_24439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (20))){
var inst_24362 = (state_24396[(7)]);
var inst_24373 = (state_24396[(2)]);
var inst_24374 = cljs.core.next.call(null,inst_24362);
var inst_24348 = inst_24374;
var inst_24349 = null;
var inst_24350 = (0);
var inst_24351 = (0);
var state_24396__$1 = (function (){var statearr_24399 = state_24396;
(statearr_24399[(8)] = inst_24349);

(statearr_24399[(9)] = inst_24373);

(statearr_24399[(10)] = inst_24351);

(statearr_24399[(11)] = inst_24350);

(statearr_24399[(12)] = inst_24348);

return statearr_24399;
})();
var statearr_24400_24440 = state_24396__$1;
(statearr_24400_24440[(2)] = null);

(statearr_24400_24440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (1))){
var state_24396__$1 = state_24396;
var statearr_24401_24441 = state_24396__$1;
(statearr_24401_24441[(2)] = null);

(statearr_24401_24441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (4))){
var inst_24337 = (state_24396[(13)]);
var inst_24337__$1 = (state_24396[(2)]);
var inst_24338 = (inst_24337__$1 == null);
var state_24396__$1 = (function (){var statearr_24402 = state_24396;
(statearr_24402[(13)] = inst_24337__$1);

return statearr_24402;
})();
if(cljs.core.truth_(inst_24338)){
var statearr_24403_24442 = state_24396__$1;
(statearr_24403_24442[(1)] = (5));

} else {
var statearr_24404_24443 = state_24396__$1;
(statearr_24404_24443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (15))){
var state_24396__$1 = state_24396;
var statearr_24408_24444 = state_24396__$1;
(statearr_24408_24444[(2)] = null);

(statearr_24408_24444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (21))){
var state_24396__$1 = state_24396;
var statearr_24409_24445 = state_24396__$1;
(statearr_24409_24445[(2)] = null);

(statearr_24409_24445[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (13))){
var inst_24349 = (state_24396[(8)]);
var inst_24351 = (state_24396[(10)]);
var inst_24350 = (state_24396[(11)]);
var inst_24348 = (state_24396[(12)]);
var inst_24358 = (state_24396[(2)]);
var inst_24359 = (inst_24351 + (1));
var tmp24405 = inst_24349;
var tmp24406 = inst_24350;
var tmp24407 = inst_24348;
var inst_24348__$1 = tmp24407;
var inst_24349__$1 = tmp24405;
var inst_24350__$1 = tmp24406;
var inst_24351__$1 = inst_24359;
var state_24396__$1 = (function (){var statearr_24410 = state_24396;
(statearr_24410[(8)] = inst_24349__$1);

(statearr_24410[(14)] = inst_24358);

(statearr_24410[(10)] = inst_24351__$1);

(statearr_24410[(11)] = inst_24350__$1);

(statearr_24410[(12)] = inst_24348__$1);

return statearr_24410;
})();
var statearr_24411_24446 = state_24396__$1;
(statearr_24411_24446[(2)] = null);

(statearr_24411_24446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (22))){
var state_24396__$1 = state_24396;
var statearr_24412_24447 = state_24396__$1;
(statearr_24412_24447[(2)] = null);

(statearr_24412_24447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (6))){
var inst_24337 = (state_24396[(13)]);
var inst_24346 = f.call(null,inst_24337);
var inst_24347 = cljs.core.seq.call(null,inst_24346);
var inst_24348 = inst_24347;
var inst_24349 = null;
var inst_24350 = (0);
var inst_24351 = (0);
var state_24396__$1 = (function (){var statearr_24413 = state_24396;
(statearr_24413[(8)] = inst_24349);

(statearr_24413[(10)] = inst_24351);

(statearr_24413[(11)] = inst_24350);

(statearr_24413[(12)] = inst_24348);

return statearr_24413;
})();
var statearr_24414_24448 = state_24396__$1;
(statearr_24414_24448[(2)] = null);

(statearr_24414_24448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (17))){
var inst_24362 = (state_24396[(7)]);
var inst_24366 = cljs.core.chunk_first.call(null,inst_24362);
var inst_24367 = cljs.core.chunk_rest.call(null,inst_24362);
var inst_24368 = cljs.core.count.call(null,inst_24366);
var inst_24348 = inst_24367;
var inst_24349 = inst_24366;
var inst_24350 = inst_24368;
var inst_24351 = (0);
var state_24396__$1 = (function (){var statearr_24415 = state_24396;
(statearr_24415[(8)] = inst_24349);

(statearr_24415[(10)] = inst_24351);

(statearr_24415[(11)] = inst_24350);

(statearr_24415[(12)] = inst_24348);

return statearr_24415;
})();
var statearr_24416_24449 = state_24396__$1;
(statearr_24416_24449[(2)] = null);

(statearr_24416_24449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (3))){
var inst_24394 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24396__$1,inst_24394);
} else {
if((state_val_24397 === (12))){
var inst_24382 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24417_24450 = state_24396__$1;
(statearr_24417_24450[(2)] = inst_24382);

(statearr_24417_24450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (2))){
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24396__$1,(4),in$);
} else {
if((state_val_24397 === (23))){
var inst_24390 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24418_24451 = state_24396__$1;
(statearr_24418_24451[(2)] = inst_24390);

(statearr_24418_24451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (19))){
var inst_24377 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24419_24452 = state_24396__$1;
(statearr_24419_24452[(2)] = inst_24377);

(statearr_24419_24452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (11))){
var inst_24362 = (state_24396[(7)]);
var inst_24348 = (state_24396[(12)]);
var inst_24362__$1 = cljs.core.seq.call(null,inst_24348);
var state_24396__$1 = (function (){var statearr_24420 = state_24396;
(statearr_24420[(7)] = inst_24362__$1);

return statearr_24420;
})();
if(inst_24362__$1){
var statearr_24421_24453 = state_24396__$1;
(statearr_24421_24453[(1)] = (14));

} else {
var statearr_24422_24454 = state_24396__$1;
(statearr_24422_24454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (9))){
var inst_24384 = (state_24396[(2)]);
var inst_24385 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24396__$1 = (function (){var statearr_24423 = state_24396;
(statearr_24423[(15)] = inst_24384);

return statearr_24423;
})();
if(cljs.core.truth_(inst_24385)){
var statearr_24424_24455 = state_24396__$1;
(statearr_24424_24455[(1)] = (21));

} else {
var statearr_24425_24456 = state_24396__$1;
(statearr_24425_24456[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (5))){
var inst_24340 = cljs.core.async.close_BANG_.call(null,out);
var state_24396__$1 = state_24396;
var statearr_24426_24457 = state_24396__$1;
(statearr_24426_24457[(2)] = inst_24340);

(statearr_24426_24457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (14))){
var inst_24362 = (state_24396[(7)]);
var inst_24364 = cljs.core.chunked_seq_QMARK_.call(null,inst_24362);
var state_24396__$1 = state_24396;
if(inst_24364){
var statearr_24427_24458 = state_24396__$1;
(statearr_24427_24458[(1)] = (17));

} else {
var statearr_24428_24459 = state_24396__$1;
(statearr_24428_24459[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (16))){
var inst_24380 = (state_24396[(2)]);
var state_24396__$1 = state_24396;
var statearr_24429_24460 = state_24396__$1;
(statearr_24429_24460[(2)] = inst_24380);

(statearr_24429_24460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24397 === (10))){
var inst_24349 = (state_24396[(8)]);
var inst_24351 = (state_24396[(10)]);
var inst_24356 = cljs.core._nth.call(null,inst_24349,inst_24351);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24396__$1,(13),out,inst_24356);
} else {
if((state_val_24397 === (18))){
var inst_24362 = (state_24396[(7)]);
var inst_24371 = cljs.core.first.call(null,inst_24362);
var state_24396__$1 = state_24396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24396__$1,(20),out,inst_24371);
} else {
if((state_val_24397 === (8))){
var inst_24351 = (state_24396[(10)]);
var inst_24350 = (state_24396[(11)]);
var inst_24353 = (inst_24351 < inst_24350);
var inst_24354 = inst_24353;
var state_24396__$1 = state_24396;
if(cljs.core.truth_(inst_24354)){
var statearr_24430_24461 = state_24396__$1;
(statearr_24430_24461[(1)] = (10));

} else {
var statearr_24431_24462 = state_24396__$1;
(statearr_24431_24462[(1)] = (11));

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
});})(c__22023__auto__))
;
return ((function (switch__22002__auto__,c__22023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____0 = (function (){
var statearr_24435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24435[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__);

(statearr_24435[(1)] = (1));

return statearr_24435;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____1 = (function (state_24396){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24436){if((e24436 instanceof Object)){
var ex__22006__auto__ = e24436;
var statearr_24437_24463 = state_24396;
(statearr_24437_24463[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24396;
state_24396 = G__24464;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__ = function(state_24396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____1.call(this,state_24396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22003__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto__))
})();
var state__22025__auto__ = (function (){var statearr_24438 = f__22024__auto__.call(null);
(statearr_24438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto__);

return statearr_24438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto__))
);

return c__22023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__24466 = arguments.length;
switch (G__24466) {
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
var G__24469 = arguments.length;
switch (G__24469) {
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
var G__24472 = arguments.length;
switch (G__24472) {
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
var c__22023__auto___24522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24522,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24522,out){
return (function (state_24496){
var state_val_24497 = (state_24496[(1)]);
if((state_val_24497 === (7))){
var inst_24491 = (state_24496[(2)]);
var state_24496__$1 = state_24496;
var statearr_24498_24523 = state_24496__$1;
(statearr_24498_24523[(2)] = inst_24491);

(statearr_24498_24523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (1))){
var inst_24473 = null;
var state_24496__$1 = (function (){var statearr_24499 = state_24496;
(statearr_24499[(7)] = inst_24473);

return statearr_24499;
})();
var statearr_24500_24524 = state_24496__$1;
(statearr_24500_24524[(2)] = null);

(statearr_24500_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (4))){
var inst_24476 = (state_24496[(8)]);
var inst_24476__$1 = (state_24496[(2)]);
var inst_24477 = (inst_24476__$1 == null);
var inst_24478 = cljs.core.not.call(null,inst_24477);
var state_24496__$1 = (function (){var statearr_24501 = state_24496;
(statearr_24501[(8)] = inst_24476__$1);

return statearr_24501;
})();
if(inst_24478){
var statearr_24502_24525 = state_24496__$1;
(statearr_24502_24525[(1)] = (5));

} else {
var statearr_24503_24526 = state_24496__$1;
(statearr_24503_24526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (6))){
var state_24496__$1 = state_24496;
var statearr_24504_24527 = state_24496__$1;
(statearr_24504_24527[(2)] = null);

(statearr_24504_24527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (3))){
var inst_24493 = (state_24496[(2)]);
var inst_24494 = cljs.core.async.close_BANG_.call(null,out);
var state_24496__$1 = (function (){var statearr_24505 = state_24496;
(statearr_24505[(9)] = inst_24493);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24496__$1,inst_24494);
} else {
if((state_val_24497 === (2))){
var state_24496__$1 = state_24496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24496__$1,(4),ch);
} else {
if((state_val_24497 === (11))){
var inst_24476 = (state_24496[(8)]);
var inst_24485 = (state_24496[(2)]);
var inst_24473 = inst_24476;
var state_24496__$1 = (function (){var statearr_24506 = state_24496;
(statearr_24506[(7)] = inst_24473);

(statearr_24506[(10)] = inst_24485);

return statearr_24506;
})();
var statearr_24507_24528 = state_24496__$1;
(statearr_24507_24528[(2)] = null);

(statearr_24507_24528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (9))){
var inst_24476 = (state_24496[(8)]);
var state_24496__$1 = state_24496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24496__$1,(11),out,inst_24476);
} else {
if((state_val_24497 === (5))){
var inst_24476 = (state_24496[(8)]);
var inst_24473 = (state_24496[(7)]);
var inst_24480 = cljs.core._EQ_.call(null,inst_24476,inst_24473);
var state_24496__$1 = state_24496;
if(inst_24480){
var statearr_24509_24529 = state_24496__$1;
(statearr_24509_24529[(1)] = (8));

} else {
var statearr_24510_24530 = state_24496__$1;
(statearr_24510_24530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (10))){
var inst_24488 = (state_24496[(2)]);
var state_24496__$1 = state_24496;
var statearr_24511_24531 = state_24496__$1;
(statearr_24511_24531[(2)] = inst_24488);

(statearr_24511_24531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24497 === (8))){
var inst_24473 = (state_24496[(7)]);
var tmp24508 = inst_24473;
var inst_24473__$1 = tmp24508;
var state_24496__$1 = (function (){var statearr_24512 = state_24496;
(statearr_24512[(7)] = inst_24473__$1);

return statearr_24512;
})();
var statearr_24513_24532 = state_24496__$1;
(statearr_24513_24532[(2)] = null);

(statearr_24513_24532[(1)] = (2));


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
});})(c__22023__auto___24522,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24522,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24517[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24517[(1)] = (1));

return statearr_24517;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24496){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24518){if((e24518 instanceof Object)){
var ex__22006__auto__ = e24518;
var statearr_24519_24533 = state_24496;
(statearr_24519_24533[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24534 = state_24496;
state_24496 = G__24534;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24522,out))
})();
var state__22025__auto__ = (function (){var statearr_24520 = f__22024__auto__.call(null);
(statearr_24520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24522);

return statearr_24520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24522,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__24536 = arguments.length;
switch (G__24536) {
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
var c__22023__auto___24605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24605,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24605,out){
return (function (state_24574){
var state_val_24575 = (state_24574[(1)]);
if((state_val_24575 === (7))){
var inst_24570 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24576_24606 = state_24574__$1;
(statearr_24576_24606[(2)] = inst_24570);

(statearr_24576_24606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (1))){
var inst_24537 = (new Array(n));
var inst_24538 = inst_24537;
var inst_24539 = (0);
var state_24574__$1 = (function (){var statearr_24577 = state_24574;
(statearr_24577[(7)] = inst_24538);

(statearr_24577[(8)] = inst_24539);

return statearr_24577;
})();
var statearr_24578_24607 = state_24574__$1;
(statearr_24578_24607[(2)] = null);

(statearr_24578_24607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (4))){
var inst_24542 = (state_24574[(9)]);
var inst_24542__$1 = (state_24574[(2)]);
var inst_24543 = (inst_24542__$1 == null);
var inst_24544 = cljs.core.not.call(null,inst_24543);
var state_24574__$1 = (function (){var statearr_24579 = state_24574;
(statearr_24579[(9)] = inst_24542__$1);

return statearr_24579;
})();
if(inst_24544){
var statearr_24580_24608 = state_24574__$1;
(statearr_24580_24608[(1)] = (5));

} else {
var statearr_24581_24609 = state_24574__$1;
(statearr_24581_24609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (15))){
var inst_24564 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24582_24610 = state_24574__$1;
(statearr_24582_24610[(2)] = inst_24564);

(statearr_24582_24610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (13))){
var state_24574__$1 = state_24574;
var statearr_24583_24611 = state_24574__$1;
(statearr_24583_24611[(2)] = null);

(statearr_24583_24611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (6))){
var inst_24539 = (state_24574[(8)]);
var inst_24560 = (inst_24539 > (0));
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24560)){
var statearr_24584_24612 = state_24574__$1;
(statearr_24584_24612[(1)] = (12));

} else {
var statearr_24585_24613 = state_24574__$1;
(statearr_24585_24613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (3))){
var inst_24572 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24574__$1,inst_24572);
} else {
if((state_val_24575 === (12))){
var inst_24538 = (state_24574[(7)]);
var inst_24562 = cljs.core.vec.call(null,inst_24538);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(15),out,inst_24562);
} else {
if((state_val_24575 === (2))){
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(4),ch);
} else {
if((state_val_24575 === (11))){
var inst_24554 = (state_24574[(2)]);
var inst_24555 = (new Array(n));
var inst_24538 = inst_24555;
var inst_24539 = (0);
var state_24574__$1 = (function (){var statearr_24586 = state_24574;
(statearr_24586[(10)] = inst_24554);

(statearr_24586[(7)] = inst_24538);

(statearr_24586[(8)] = inst_24539);

return statearr_24586;
})();
var statearr_24587_24614 = state_24574__$1;
(statearr_24587_24614[(2)] = null);

(statearr_24587_24614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (9))){
var inst_24538 = (state_24574[(7)]);
var inst_24552 = cljs.core.vec.call(null,inst_24538);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(11),out,inst_24552);
} else {
if((state_val_24575 === (5))){
var inst_24538 = (state_24574[(7)]);
var inst_24547 = (state_24574[(11)]);
var inst_24539 = (state_24574[(8)]);
var inst_24542 = (state_24574[(9)]);
var inst_24546 = (inst_24538[inst_24539] = inst_24542);
var inst_24547__$1 = (inst_24539 + (1));
var inst_24548 = (inst_24547__$1 < n);
var state_24574__$1 = (function (){var statearr_24588 = state_24574;
(statearr_24588[(12)] = inst_24546);

(statearr_24588[(11)] = inst_24547__$1);

return statearr_24588;
})();
if(cljs.core.truth_(inst_24548)){
var statearr_24589_24615 = state_24574__$1;
(statearr_24589_24615[(1)] = (8));

} else {
var statearr_24590_24616 = state_24574__$1;
(statearr_24590_24616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (14))){
var inst_24567 = (state_24574[(2)]);
var inst_24568 = cljs.core.async.close_BANG_.call(null,out);
var state_24574__$1 = (function (){var statearr_24592 = state_24574;
(statearr_24592[(13)] = inst_24567);

return statearr_24592;
})();
var statearr_24593_24617 = state_24574__$1;
(statearr_24593_24617[(2)] = inst_24568);

(statearr_24593_24617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (10))){
var inst_24558 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24594_24618 = state_24574__$1;
(statearr_24594_24618[(2)] = inst_24558);

(statearr_24594_24618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (8))){
var inst_24538 = (state_24574[(7)]);
var inst_24547 = (state_24574[(11)]);
var tmp24591 = inst_24538;
var inst_24538__$1 = tmp24591;
var inst_24539 = inst_24547;
var state_24574__$1 = (function (){var statearr_24595 = state_24574;
(statearr_24595[(7)] = inst_24538__$1);

(statearr_24595[(8)] = inst_24539);

return statearr_24595;
})();
var statearr_24596_24619 = state_24574__$1;
(statearr_24596_24619[(2)] = null);

(statearr_24596_24619[(1)] = (2));


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
});})(c__22023__auto___24605,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24605,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24600[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24600[(1)] = (1));

return statearr_24600;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24574){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24601){if((e24601 instanceof Object)){
var ex__22006__auto__ = e24601;
var statearr_24602_24620 = state_24574;
(statearr_24602_24620[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24621 = state_24574;
state_24574 = G__24621;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24605,out))
})();
var state__22025__auto__ = (function (){var statearr_24603 = f__22024__auto__.call(null);
(statearr_24603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24605);

return statearr_24603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__24623 = arguments.length;
switch (G__24623) {
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
var c__22023__auto___24696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22023__auto___24696,out){
return (function (){
var f__22024__auto__ = (function (){var switch__22002__auto__ = ((function (c__22023__auto___24696,out){
return (function (state_24665){
var state_val_24666 = (state_24665[(1)]);
if((state_val_24666 === (7))){
var inst_24661 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24667_24697 = state_24665__$1;
(statearr_24667_24697[(2)] = inst_24661);

(statearr_24667_24697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (1))){
var inst_24624 = [];
var inst_24625 = inst_24624;
var inst_24626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24665__$1 = (function (){var statearr_24668 = state_24665;
(statearr_24668[(7)] = inst_24626);

(statearr_24668[(8)] = inst_24625);

return statearr_24668;
})();
var statearr_24669_24698 = state_24665__$1;
(statearr_24669_24698[(2)] = null);

(statearr_24669_24698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (4))){
var inst_24629 = (state_24665[(9)]);
var inst_24629__$1 = (state_24665[(2)]);
var inst_24630 = (inst_24629__$1 == null);
var inst_24631 = cljs.core.not.call(null,inst_24630);
var state_24665__$1 = (function (){var statearr_24670 = state_24665;
(statearr_24670[(9)] = inst_24629__$1);

return statearr_24670;
})();
if(inst_24631){
var statearr_24671_24699 = state_24665__$1;
(statearr_24671_24699[(1)] = (5));

} else {
var statearr_24672_24700 = state_24665__$1;
(statearr_24672_24700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (15))){
var inst_24655 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24673_24701 = state_24665__$1;
(statearr_24673_24701[(2)] = inst_24655);

(statearr_24673_24701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (13))){
var state_24665__$1 = state_24665;
var statearr_24674_24702 = state_24665__$1;
(statearr_24674_24702[(2)] = null);

(statearr_24674_24702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (6))){
var inst_24625 = (state_24665[(8)]);
var inst_24650 = inst_24625.length;
var inst_24651 = (inst_24650 > (0));
var state_24665__$1 = state_24665;
if(cljs.core.truth_(inst_24651)){
var statearr_24675_24703 = state_24665__$1;
(statearr_24675_24703[(1)] = (12));

} else {
var statearr_24676_24704 = state_24665__$1;
(statearr_24676_24704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (3))){
var inst_24663 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24665__$1,inst_24663);
} else {
if((state_val_24666 === (12))){
var inst_24625 = (state_24665[(8)]);
var inst_24653 = cljs.core.vec.call(null,inst_24625);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(15),out,inst_24653);
} else {
if((state_val_24666 === (2))){
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24665__$1,(4),ch);
} else {
if((state_val_24666 === (11))){
var inst_24633 = (state_24665[(10)]);
var inst_24629 = (state_24665[(9)]);
var inst_24643 = (state_24665[(2)]);
var inst_24644 = [];
var inst_24645 = inst_24644.push(inst_24629);
var inst_24625 = inst_24644;
var inst_24626 = inst_24633;
var state_24665__$1 = (function (){var statearr_24677 = state_24665;
(statearr_24677[(11)] = inst_24645);

(statearr_24677[(7)] = inst_24626);

(statearr_24677[(8)] = inst_24625);

(statearr_24677[(12)] = inst_24643);

return statearr_24677;
})();
var statearr_24678_24705 = state_24665__$1;
(statearr_24678_24705[(2)] = null);

(statearr_24678_24705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (9))){
var inst_24625 = (state_24665[(8)]);
var inst_24641 = cljs.core.vec.call(null,inst_24625);
var state_24665__$1 = state_24665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24665__$1,(11),out,inst_24641);
} else {
if((state_val_24666 === (5))){
var inst_24633 = (state_24665[(10)]);
var inst_24626 = (state_24665[(7)]);
var inst_24629 = (state_24665[(9)]);
var inst_24633__$1 = f.call(null,inst_24629);
var inst_24634 = cljs.core._EQ_.call(null,inst_24633__$1,inst_24626);
var inst_24635 = cljs.core.keyword_identical_QMARK_.call(null,inst_24626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24636 = (inst_24634) || (inst_24635);
var state_24665__$1 = (function (){var statearr_24679 = state_24665;
(statearr_24679[(10)] = inst_24633__$1);

return statearr_24679;
})();
if(cljs.core.truth_(inst_24636)){
var statearr_24680_24706 = state_24665__$1;
(statearr_24680_24706[(1)] = (8));

} else {
var statearr_24681_24707 = state_24665__$1;
(statearr_24681_24707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (14))){
var inst_24658 = (state_24665[(2)]);
var inst_24659 = cljs.core.async.close_BANG_.call(null,out);
var state_24665__$1 = (function (){var statearr_24683 = state_24665;
(statearr_24683[(13)] = inst_24658);

return statearr_24683;
})();
var statearr_24684_24708 = state_24665__$1;
(statearr_24684_24708[(2)] = inst_24659);

(statearr_24684_24708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (10))){
var inst_24648 = (state_24665[(2)]);
var state_24665__$1 = state_24665;
var statearr_24685_24709 = state_24665__$1;
(statearr_24685_24709[(2)] = inst_24648);

(statearr_24685_24709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24666 === (8))){
var inst_24633 = (state_24665[(10)]);
var inst_24629 = (state_24665[(9)]);
var inst_24625 = (state_24665[(8)]);
var inst_24638 = inst_24625.push(inst_24629);
var tmp24682 = inst_24625;
var inst_24625__$1 = tmp24682;
var inst_24626 = inst_24633;
var state_24665__$1 = (function (){var statearr_24686 = state_24665;
(statearr_24686[(7)] = inst_24626);

(statearr_24686[(14)] = inst_24638);

(statearr_24686[(8)] = inst_24625__$1);

return statearr_24686;
})();
var statearr_24687_24710 = state_24665__$1;
(statearr_24687_24710[(2)] = null);

(statearr_24687_24710[(1)] = (2));


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
});})(c__22023__auto___24696,out))
;
return ((function (switch__22002__auto__,c__22023__auto___24696,out){
return (function() {
var cljs$core$async$state_machine__22003__auto__ = null;
var cljs$core$async$state_machine__22003__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$state_machine__22003__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$state_machine__22003__auto____1 = (function (state_24665){
while(true){
var ret_value__22004__auto__ = (function (){try{while(true){
var result__22005__auto__ = switch__22002__auto__.call(null,state_24665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22005__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__22006__auto__ = e24692;
var statearr_24693_24711 = state_24665;
(statearr_24693_24711[(5)] = ex__22006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24712 = state_24665;
state_24665 = G__24712;
continue;
} else {
return ret_value__22004__auto__;
}
break;
}
});
cljs$core$async$state_machine__22003__auto__ = function(state_24665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22003__auto____1.call(this,state_24665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22003__auto____0;
cljs$core$async$state_machine__22003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22003__auto____1;
return cljs$core$async$state_machine__22003__auto__;
})()
;})(switch__22002__auto__,c__22023__auto___24696,out))
})();
var state__22025__auto__ = (function (){var statearr_24694 = f__22024__auto__.call(null);
(statearr_24694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22023__auto___24696);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22025__auto__);
});})(c__22023__auto___24696,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1434186339689