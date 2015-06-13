// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('hello_world.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__22113__delegate = function (x){
if(cljs.core.truth_(hello_world.core.on_js_reload)){
return cljs.core.apply.call(null,hello_world.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hello-world.core/on-js-reload' is missing");
}
};
var G__22113 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__22114__i = 0, G__22114__a = new Array(arguments.length -  0);
while (G__22114__i < G__22114__a.length) {G__22114__a[G__22114__i] = arguments[G__22114__i + 0]; ++G__22114__i;}
  x = new cljs.core.IndexedSeq(G__22114__a,0);
} 
return G__22113__delegate.call(this,x);};
G__22113.cljs$lang$maxFixedArity = 0;
G__22113.cljs$lang$applyTo = (function (arglist__22115){
var x = cljs.core.seq(arglist__22115);
return G__22113__delegate(x);
});
G__22113.cljs$core$IFn$_invoke$arity$variadic = G__22113__delegate;
return G__22113;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1434183067686