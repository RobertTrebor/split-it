// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('hello_world.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__24715__delegate = function (x){
if(cljs.core.truth_(hello_world.core.on_js_reload)){
return cljs.core.apply.call(null,hello_world.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hello-world.core/on-js-reload' is missing");
}
};
var G__24715 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__24716__i = 0, G__24716__a = new Array(arguments.length -  0);
while (G__24716__i < G__24716__a.length) {G__24716__a[G__24716__i] = arguments[G__24716__i + 0]; ++G__24716__i;}
  x = new cljs.core.IndexedSeq(G__24716__a,0);
} 
return G__24715__delegate.call(this,x);};
G__24715.cljs$lang$maxFixedArity = 0;
G__24715.cljs$lang$applyTo = (function (arglist__24717){
var x = cljs.core.seq(arglist__24717);
return G__24715__delegate(x);
});
G__24715.cljs$core$IFn$_invoke$arity$variadic = G__24715__delegate;
return G__24715;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1434186340695