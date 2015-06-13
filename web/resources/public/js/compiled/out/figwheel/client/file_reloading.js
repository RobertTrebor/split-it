// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__28686_SHARP_,p2__28687_SHARP_){
var and__18104__auto__ = p1__28686_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__28687_SHARP_;
} else {
return and__18104__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18116__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18116__auto__){
return or__18116__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18116__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18116__auto__){
return or__18116__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18116__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28688){
var map__28689 = p__28688;
var map__28689__$1 = ((cljs.core.seq_QMARK_.call(null,map__28689))?cljs.core.apply.call(null,cljs.core.hash_map,map__28689):map__28689);
var file = cljs.core.get.call(null,map__28689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__28690){
var map__28691 = p__28690;
var map__28691__$1 = ((cljs.core.seq_QMARK_.call(null,map__28691))?cljs.core.apply.call(null,cljs.core.hash_map,map__28691):map__28691);
var namespace = cljs.core.get.call(null,map__28691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e28692){if((e28692 instanceof Error)){
var e = e28692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28692;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__28694 = arguments.length;
switch (G__28694) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28696,callback){
var map__28698 = p__28696;
var map__28698__$1 = ((cljs.core.seq_QMARK_.call(null,map__28698))?cljs.core.apply.call(null,cljs.core.hash_map,map__28698):map__28698);
var file_msg = map__28698__$1;
var request_url = cljs.core.get.call(null,map__28698__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28698,map__28698__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28698,map__28698__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28699){
var map__28701 = p__28699;
var map__28701__$1 = ((cljs.core.seq_QMARK_.call(null,map__28701))?cljs.core.apply.call(null,cljs.core.hash_map,map__28701):map__28701);
var file_msg = map__28701__$1;
var meta_data = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18116__auto__ = meta_data;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18104__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18104__auto__){
var or__18116__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
var and__18104__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18104__auto____$1){
var or__18116__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18116__auto____$2){
return or__18116__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18104__auto____$1;
}
}
}
} else {
return and__18104__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28702,callback){
var map__28704 = p__28702;
var map__28704__$1 = ((cljs.core.seq_QMARK_.call(null,map__28704))?cljs.core.apply.call(null,cljs.core.hash_map,map__28704):map__28704);
var file_msg = map__28704__$1;
var namespace = cljs.core.get.call(null,map__28704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__28704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22921__auto___28791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___28791,out){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___28791,out){
return (function (state_28773){
var state_val_28774 = (state_28773[(1)]);
if((state_val_28774 === (7))){
var inst_28757 = (state_28773[(7)]);
var inst_28763 = (state_28773[(2)]);
var inst_28764 = cljs.core.async.put_BANG_.call(null,out,inst_28763);
var inst_28753 = inst_28757;
var state_28773__$1 = (function (){var statearr_28775 = state_28773;
(statearr_28775[(8)] = inst_28764);

(statearr_28775[(9)] = inst_28753);

return statearr_28775;
})();
var statearr_28776_28792 = state_28773__$1;
(statearr_28776_28792[(2)] = null);

(statearr_28776_28792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (6))){
var inst_28769 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
var statearr_28777_28793 = state_28773__$1;
(statearr_28777_28793[(2)] = inst_28769);

(statearr_28777_28793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (5))){
var inst_28767 = cljs.core.async.close_BANG_.call(null,out);
var state_28773__$1 = state_28773;
var statearr_28778_28794 = state_28773__$1;
(statearr_28778_28794[(2)] = inst_28767);

(statearr_28778_28794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (4))){
var inst_28756 = (state_28773[(10)]);
var inst_28761 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28756);
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28773__$1,(7),inst_28761);
} else {
if((state_val_28774 === (3))){
var inst_28771 = (state_28773[(2)]);
var state_28773__$1 = state_28773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28773__$1,inst_28771);
} else {
if((state_val_28774 === (2))){
var inst_28756 = (state_28773[(10)]);
var inst_28753 = (state_28773[(9)]);
var inst_28756__$1 = cljs.core.nth.call(null,inst_28753,(0),null);
var inst_28757 = cljs.core.nthnext.call(null,inst_28753,(1));
var inst_28758 = (inst_28756__$1 == null);
var inst_28759 = cljs.core.not.call(null,inst_28758);
var state_28773__$1 = (function (){var statearr_28779 = state_28773;
(statearr_28779[(7)] = inst_28757);

(statearr_28779[(10)] = inst_28756__$1);

return statearr_28779;
})();
if(inst_28759){
var statearr_28780_28795 = state_28773__$1;
(statearr_28780_28795[(1)] = (4));

} else {
var statearr_28781_28796 = state_28773__$1;
(statearr_28781_28796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28774 === (1))){
var inst_28751 = cljs.core.nth.call(null,files,(0),null);
var inst_28752 = cljs.core.nthnext.call(null,files,(1));
var inst_28753 = files;
var state_28773__$1 = (function (){var statearr_28782 = state_28773;
(statearr_28782[(11)] = inst_28751);

(statearr_28782[(9)] = inst_28753);

(statearr_28782[(12)] = inst_28752);

return statearr_28782;
})();
var statearr_28783_28797 = state_28773__$1;
(statearr_28783_28797[(2)] = null);

(statearr_28783_28797[(1)] = (2));


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
});})(c__22921__auto___28791,out))
;
return ((function (switch__22859__auto__,c__22921__auto___28791,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____0 = (function (){
var statearr_28787 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28787[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__);

(statearr_28787[(1)] = (1));

return statearr_28787;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____1 = (function (state_28773){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28788){if((e28788 instanceof Object)){
var ex__22863__auto__ = e28788;
var statearr_28789_28798 = state_28773;
(statearr_28789_28798[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28799 = state_28773;
state_28773 = G__28799;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__ = function(state_28773){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____1.call(this,state_28773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___28791,out))
})();
var state__22923__auto__ = (function (){var statearr_28790 = f__22922__auto__.call(null);
(statearr_28790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___28791);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___28791,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__28800,p__28801){
var map__28804 = p__28800;
var map__28804__$1 = ((cljs.core.seq_QMARK_.call(null,map__28804))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var opts = map__28804__$1;
var url_rewriter = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__28805 = p__28801;
var map__28805__$1 = ((cljs.core.seq_QMARK_.call(null,map__28805))?cljs.core.apply.call(null,cljs.core.hash_map,map__28805):map__28805);
var file_msg = map__28805__$1;
var file = cljs.core.get.call(null,map__28805__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28806){
var map__28809 = p__28806;
var map__28809__$1 = ((cljs.core.seq_QMARK_.call(null,map__28809))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var file = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18104__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18104__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18104__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e28810){var e = e28810;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28815,p__28816){
var map__29018 = p__28815;
var map__29018__$1 = ((cljs.core.seq_QMARK_.call(null,map__29018))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);
var opts = map__29018__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29019 = p__28816;
var map__29019__$1 = ((cljs.core.seq_QMARK_.call(null,map__29019))?cljs.core.apply.call(null,cljs.core.hash_map,map__29019):map__29019);
var msg = map__29019__$1;
var files = cljs.core.get.call(null,map__29019__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (state_29144){
var state_val_29145 = (state_29144[(1)]);
if((state_val_29145 === (7))){
var inst_29034 = (state_29144[(7)]);
var inst_29031 = (state_29144[(8)]);
var inst_29032 = (state_29144[(9)]);
var inst_29033 = (state_29144[(10)]);
var inst_29039 = cljs.core._nth.call(null,inst_29032,inst_29034);
var inst_29040 = figwheel.client.file_reloading.eval_body.call(null,inst_29039);
var inst_29041 = (inst_29034 + (1));
var tmp29146 = inst_29031;
var tmp29147 = inst_29032;
var tmp29148 = inst_29033;
var inst_29031__$1 = tmp29146;
var inst_29032__$1 = tmp29147;
var inst_29033__$1 = tmp29148;
var inst_29034__$1 = inst_29041;
var state_29144__$1 = (function (){var statearr_29149 = state_29144;
(statearr_29149[(7)] = inst_29034__$1);

(statearr_29149[(8)] = inst_29031__$1);

(statearr_29149[(11)] = inst_29040);

(statearr_29149[(9)] = inst_29032__$1);

(statearr_29149[(10)] = inst_29033__$1);

return statearr_29149;
})();
var statearr_29150_29219 = state_29144__$1;
(statearr_29150_29219[(2)] = null);

(statearr_29150_29219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (20))){
var inst_29083 = (state_29144[(12)]);
var inst_29076 = (state_29144[(13)]);
var inst_29080 = (state_29144[(14)]);
var inst_29081 = (state_29144[(15)]);
var inst_29077 = (state_29144[(16)]);
var inst_29086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29088 = (function (){var files_not_loaded = inst_29083;
var res = inst_29081;
var res_SINGLEQUOTE_ = inst_29080;
var files_SINGLEQUOTE_ = inst_29077;
var all_files = inst_29076;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29077,inst_29086,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p__29087){
var map__29151 = p__29087;
var map__29151__$1 = ((cljs.core.seq_QMARK_.call(null,map__29151))?cljs.core.apply.call(null,cljs.core.hash_map,map__29151):map__29151);
var file = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29077,inst_29086,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29089 = cljs.core.map.call(null,inst_29088,inst_29081);
var inst_29090 = cljs.core.pr_str.call(null,inst_29089);
var inst_29091 = figwheel.client.utils.log.call(null,inst_29090);
var inst_29092 = (function (){var files_not_loaded = inst_29083;
var res = inst_29081;
var res_SINGLEQUOTE_ = inst_29080;
var files_SINGLEQUOTE_ = inst_29077;
var all_files = inst_29076;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29077,inst_29086,inst_29088,inst_29089,inst_29090,inst_29091,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29077,inst_29086,inst_29088,inst_29089,inst_29090,inst_29091,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29093 = setTimeout(inst_29092,(10));
var state_29144__$1 = (function (){var statearr_29152 = state_29144;
(statearr_29152[(17)] = inst_29086);

(statearr_29152[(18)] = inst_29091);

return statearr_29152;
})();
var statearr_29153_29220 = state_29144__$1;
(statearr_29153_29220[(2)] = inst_29093);

(statearr_29153_29220[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (27))){
var inst_29103 = (state_29144[(19)]);
var state_29144__$1 = state_29144;
var statearr_29154_29221 = state_29144__$1;
(statearr_29154_29221[(2)] = inst_29103);

(statearr_29154_29221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (1))){
var inst_29023 = (state_29144[(20)]);
var inst_29020 = before_jsload.call(null,files);
var inst_29021 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29022 = (function (){return ((function (inst_29023,inst_29020,inst_29021,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p1__28811_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28811_SHARP_);
});
;})(inst_29023,inst_29020,inst_29021,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29023__$1 = cljs.core.filter.call(null,inst_29022,files);
var inst_29024 = cljs.core.not_empty.call(null,inst_29023__$1);
var state_29144__$1 = (function (){var statearr_29155 = state_29144;
(statearr_29155[(21)] = inst_29021);

(statearr_29155[(20)] = inst_29023__$1);

(statearr_29155[(22)] = inst_29020);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29024)){
var statearr_29156_29222 = state_29144__$1;
(statearr_29156_29222[(1)] = (2));

} else {
var statearr_29157_29223 = state_29144__$1;
(statearr_29157_29223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (24))){
var state_29144__$1 = state_29144;
var statearr_29158_29224 = state_29144__$1;
(statearr_29158_29224[(2)] = null);

(statearr_29158_29224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (4))){
var inst_29068 = (state_29144[(2)]);
var inst_29069 = (function (){return ((function (inst_29068,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p1__28812_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28812_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28812_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_29068,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29070 = cljs.core.filter.call(null,inst_29069,files);
var state_29144__$1 = (function (){var statearr_29159 = state_29144;
(statearr_29159[(23)] = inst_29068);

(statearr_29159[(24)] = inst_29070);

return statearr_29159;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29160_29225 = state_29144__$1;
(statearr_29160_29225[(1)] = (16));

} else {
var statearr_29161_29226 = state_29144__$1;
(statearr_29161_29226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (15))){
var inst_29058 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29162_29227 = state_29144__$1;
(statearr_29162_29227[(2)] = inst_29058);

(statearr_29162_29227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (21))){
var state_29144__$1 = state_29144;
var statearr_29163_29228 = state_29144__$1;
(statearr_29163_29228[(2)] = null);

(statearr_29163_29228[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (31))){
var inst_29111 = (state_29144[(25)]);
var inst_29121 = (state_29144[(2)]);
var inst_29122 = cljs.core.not_empty.call(null,inst_29111);
var state_29144__$1 = (function (){var statearr_29164 = state_29144;
(statearr_29164[(26)] = inst_29121);

return statearr_29164;
})();
if(cljs.core.truth_(inst_29122)){
var statearr_29165_29229 = state_29144__$1;
(statearr_29165_29229[(1)] = (32));

} else {
var statearr_29166_29230 = state_29144__$1;
(statearr_29166_29230[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (32))){
var inst_29111 = (state_29144[(25)]);
var inst_29124 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29111);
var inst_29125 = cljs.core.pr_str.call(null,inst_29124);
var inst_29126 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29125)].join('');
var inst_29127 = figwheel.client.utils.log.call(null,inst_29126);
var state_29144__$1 = state_29144;
var statearr_29167_29231 = state_29144__$1;
(statearr_29167_29231[(2)] = inst_29127);

(statearr_29167_29231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (33))){
var state_29144__$1 = state_29144;
var statearr_29168_29232 = state_29144__$1;
(statearr_29168_29232[(2)] = null);

(statearr_29168_29232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (13))){
var inst_29044 = (state_29144[(27)]);
var inst_29048 = cljs.core.chunk_first.call(null,inst_29044);
var inst_29049 = cljs.core.chunk_rest.call(null,inst_29044);
var inst_29050 = cljs.core.count.call(null,inst_29048);
var inst_29031 = inst_29049;
var inst_29032 = inst_29048;
var inst_29033 = inst_29050;
var inst_29034 = (0);
var state_29144__$1 = (function (){var statearr_29169 = state_29144;
(statearr_29169[(7)] = inst_29034);

(statearr_29169[(8)] = inst_29031);

(statearr_29169[(9)] = inst_29032);

(statearr_29169[(10)] = inst_29033);

return statearr_29169;
})();
var statearr_29170_29233 = state_29144__$1;
(statearr_29170_29233[(2)] = null);

(statearr_29170_29233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (22))){
var inst_29083 = (state_29144[(12)]);
var inst_29096 = (state_29144[(2)]);
var inst_29097 = cljs.core.not_empty.call(null,inst_29083);
var state_29144__$1 = (function (){var statearr_29171 = state_29144;
(statearr_29171[(28)] = inst_29096);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29097)){
var statearr_29172_29234 = state_29144__$1;
(statearr_29172_29234[(1)] = (23));

} else {
var statearr_29173_29235 = state_29144__$1;
(statearr_29173_29235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (36))){
var state_29144__$1 = state_29144;
var statearr_29174_29236 = state_29144__$1;
(statearr_29174_29236[(2)] = null);

(statearr_29174_29236[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (29))){
var inst_29112 = (state_29144[(29)]);
var inst_29115 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29112);
var inst_29116 = cljs.core.pr_str.call(null,inst_29115);
var inst_29117 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29116)].join('');
var inst_29118 = figwheel.client.utils.log.call(null,inst_29117);
var state_29144__$1 = state_29144;
var statearr_29175_29237 = state_29144__$1;
(statearr_29175_29237[(2)] = inst_29118);

(statearr_29175_29237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (6))){
var inst_29065 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29176_29238 = state_29144__$1;
(statearr_29176_29238[(2)] = inst_29065);

(statearr_29176_29238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (28))){
var inst_29112 = (state_29144[(29)]);
var inst_29109 = (state_29144[(2)]);
var inst_29110 = cljs.core.get.call(null,inst_29109,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29111 = cljs.core.get.call(null,inst_29109,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29112__$1 = cljs.core.get.call(null,inst_29109,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29113 = cljs.core.not_empty.call(null,inst_29112__$1);
var state_29144__$1 = (function (){var statearr_29177 = state_29144;
(statearr_29177[(30)] = inst_29110);

(statearr_29177[(29)] = inst_29112__$1);

(statearr_29177[(25)] = inst_29111);

return statearr_29177;
})();
if(cljs.core.truth_(inst_29113)){
var statearr_29178_29239 = state_29144__$1;
(statearr_29178_29239[(1)] = (29));

} else {
var statearr_29179_29240 = state_29144__$1;
(statearr_29179_29240[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (25))){
var inst_29142 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29144__$1,inst_29142);
} else {
if((state_val_29145 === (34))){
var inst_29110 = (state_29144[(30)]);
var inst_29130 = (state_29144[(2)]);
var inst_29131 = cljs.core.not_empty.call(null,inst_29110);
var state_29144__$1 = (function (){var statearr_29180 = state_29144;
(statearr_29180[(31)] = inst_29130);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29131)){
var statearr_29181_29241 = state_29144__$1;
(statearr_29181_29241[(1)] = (35));

} else {
var statearr_29182_29242 = state_29144__$1;
(statearr_29182_29242[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (17))){
var inst_29070 = (state_29144[(24)]);
var state_29144__$1 = state_29144;
var statearr_29183_29243 = state_29144__$1;
(statearr_29183_29243[(2)] = inst_29070);

(statearr_29183_29243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (3))){
var state_29144__$1 = state_29144;
var statearr_29184_29244 = state_29144__$1;
(statearr_29184_29244[(2)] = null);

(statearr_29184_29244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (12))){
var inst_29061 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29185_29245 = state_29144__$1;
(statearr_29185_29245[(2)] = inst_29061);

(statearr_29185_29245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (2))){
var inst_29023 = (state_29144[(20)]);
var inst_29030 = cljs.core.seq.call(null,inst_29023);
var inst_29031 = inst_29030;
var inst_29032 = null;
var inst_29033 = (0);
var inst_29034 = (0);
var state_29144__$1 = (function (){var statearr_29186 = state_29144;
(statearr_29186[(7)] = inst_29034);

(statearr_29186[(8)] = inst_29031);

(statearr_29186[(9)] = inst_29032);

(statearr_29186[(10)] = inst_29033);

return statearr_29186;
})();
var statearr_29187_29246 = state_29144__$1;
(statearr_29187_29246[(2)] = null);

(statearr_29187_29246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (23))){
var inst_29083 = (state_29144[(12)]);
var inst_29076 = (state_29144[(13)]);
var inst_29080 = (state_29144[(14)]);
var inst_29081 = (state_29144[(15)]);
var inst_29103 = (state_29144[(19)]);
var inst_29077 = (state_29144[(16)]);
var inst_29099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29102 = (function (){var files_not_loaded = inst_29083;
var res = inst_29081;
var res_SINGLEQUOTE_ = inst_29080;
var files_SINGLEQUOTE_ = inst_29077;
var all_files = inst_29076;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29103,inst_29077,inst_29099,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p__29101){
var map__29188 = p__29101;
var map__29188__$1 = ((cljs.core.seq_QMARK_.call(null,map__29188))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var meta_data = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29083,inst_29076,inst_29080,inst_29081,inst_29103,inst_29077,inst_29099,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29103__$1 = cljs.core.group_by.call(null,inst_29102,inst_29083);
var inst_29104 = cljs.core.seq_QMARK_.call(null,inst_29103__$1);
var state_29144__$1 = (function (){var statearr_29189 = state_29144;
(statearr_29189[(19)] = inst_29103__$1);

(statearr_29189[(32)] = inst_29099);

return statearr_29189;
})();
if(inst_29104){
var statearr_29190_29247 = state_29144__$1;
(statearr_29190_29247[(1)] = (26));

} else {
var statearr_29191_29248 = state_29144__$1;
(statearr_29191_29248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (35))){
var inst_29110 = (state_29144[(30)]);
var inst_29133 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29110);
var inst_29134 = cljs.core.pr_str.call(null,inst_29133);
var inst_29135 = [cljs.core.str("not required: "),cljs.core.str(inst_29134)].join('');
var inst_29136 = figwheel.client.utils.log.call(null,inst_29135);
var state_29144__$1 = state_29144;
var statearr_29192_29249 = state_29144__$1;
(statearr_29192_29249[(2)] = inst_29136);

(statearr_29192_29249[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (19))){
var inst_29076 = (state_29144[(13)]);
var inst_29080 = (state_29144[(14)]);
var inst_29081 = (state_29144[(15)]);
var inst_29077 = (state_29144[(16)]);
var inst_29080__$1 = (state_29144[(2)]);
var inst_29081__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29080__$1);
var inst_29082 = (function (){var res = inst_29081__$1;
var res_SINGLEQUOTE_ = inst_29080__$1;
var files_SINGLEQUOTE_ = inst_29077;
var all_files = inst_29076;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29076,inst_29080,inst_29081,inst_29077,inst_29080__$1,inst_29081__$1,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p1__28814_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28814_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29076,inst_29080,inst_29081,inst_29077,inst_29080__$1,inst_29081__$1,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29083 = cljs.core.filter.call(null,inst_29082,inst_29080__$1);
var inst_29084 = cljs.core.not_empty.call(null,inst_29081__$1);
var state_29144__$1 = (function (){var statearr_29193 = state_29144;
(statearr_29193[(12)] = inst_29083);

(statearr_29193[(14)] = inst_29080__$1);

(statearr_29193[(15)] = inst_29081__$1);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29084)){
var statearr_29194_29250 = state_29144__$1;
(statearr_29194_29250[(1)] = (20));

} else {
var statearr_29195_29251 = state_29144__$1;
(statearr_29195_29251[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (11))){
var state_29144__$1 = state_29144;
var statearr_29196_29252 = state_29144__$1;
(statearr_29196_29252[(2)] = null);

(statearr_29196_29252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (9))){
var inst_29063 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29197_29253 = state_29144__$1;
(statearr_29197_29253[(2)] = inst_29063);

(statearr_29197_29253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (5))){
var inst_29034 = (state_29144[(7)]);
var inst_29033 = (state_29144[(10)]);
var inst_29036 = (inst_29034 < inst_29033);
var inst_29037 = inst_29036;
var state_29144__$1 = state_29144;
if(cljs.core.truth_(inst_29037)){
var statearr_29198_29254 = state_29144__$1;
(statearr_29198_29254[(1)] = (7));

} else {
var statearr_29199_29255 = state_29144__$1;
(statearr_29199_29255[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (14))){
var inst_29044 = (state_29144[(27)]);
var inst_29053 = cljs.core.first.call(null,inst_29044);
var inst_29054 = figwheel.client.file_reloading.eval_body.call(null,inst_29053);
var inst_29055 = cljs.core.next.call(null,inst_29044);
var inst_29031 = inst_29055;
var inst_29032 = null;
var inst_29033 = (0);
var inst_29034 = (0);
var state_29144__$1 = (function (){var statearr_29200 = state_29144;
(statearr_29200[(7)] = inst_29034);

(statearr_29200[(8)] = inst_29031);

(statearr_29200[(9)] = inst_29032);

(statearr_29200[(33)] = inst_29054);

(statearr_29200[(10)] = inst_29033);

return statearr_29200;
})();
var statearr_29201_29256 = state_29144__$1;
(statearr_29201_29256[(2)] = null);

(statearr_29201_29256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (26))){
var inst_29103 = (state_29144[(19)]);
var inst_29106 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29103);
var state_29144__$1 = state_29144;
var statearr_29202_29257 = state_29144__$1;
(statearr_29202_29257[(2)] = inst_29106);

(statearr_29202_29257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (16))){
var inst_29070 = (state_29144[(24)]);
var inst_29072 = (function (){var all_files = inst_29070;
return ((function (all_files,inst_29070,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function (p1__28813_SHARP_){
return cljs.core.update_in.call(null,p1__28813_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29070,state_val_29145,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var inst_29073 = cljs.core.map.call(null,inst_29072,inst_29070);
var state_29144__$1 = state_29144;
var statearr_29203_29258 = state_29144__$1;
(statearr_29203_29258[(2)] = inst_29073);

(statearr_29203_29258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (30))){
var state_29144__$1 = state_29144;
var statearr_29204_29259 = state_29144__$1;
(statearr_29204_29259[(2)] = null);

(statearr_29204_29259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (10))){
var inst_29044 = (state_29144[(27)]);
var inst_29046 = cljs.core.chunked_seq_QMARK_.call(null,inst_29044);
var state_29144__$1 = state_29144;
if(inst_29046){
var statearr_29205_29260 = state_29144__$1;
(statearr_29205_29260[(1)] = (13));

} else {
var statearr_29206_29261 = state_29144__$1;
(statearr_29206_29261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (18))){
var inst_29076 = (state_29144[(13)]);
var inst_29077 = (state_29144[(16)]);
var inst_29076__$1 = (state_29144[(2)]);
var inst_29077__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29076__$1);
var inst_29078 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29077__$1);
var state_29144__$1 = (function (){var statearr_29207 = state_29144;
(statearr_29207[(13)] = inst_29076__$1);

(statearr_29207[(16)] = inst_29077__$1);

return statearr_29207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29144__$1,(19),inst_29078);
} else {
if((state_val_29145 === (37))){
var inst_29139 = (state_29144[(2)]);
var state_29144__$1 = state_29144;
var statearr_29208_29262 = state_29144__$1;
(statearr_29208_29262[(2)] = inst_29139);

(statearr_29208_29262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29145 === (8))){
var inst_29031 = (state_29144[(8)]);
var inst_29044 = (state_29144[(27)]);
var inst_29044__$1 = cljs.core.seq.call(null,inst_29031);
var state_29144__$1 = (function (){var statearr_29209 = state_29144;
(statearr_29209[(27)] = inst_29044__$1);

return statearr_29209;
})();
if(inst_29044__$1){
var statearr_29210_29263 = state_29144__$1;
(statearr_29210_29263[(1)] = (10));

} else {
var statearr_29211_29264 = state_29144__$1;
(statearr_29211_29264[(1)] = (11));

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
});})(c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
;
return ((function (switch__22859__auto__,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____0 = (function (){
var statearr_29215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29215[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__);

(statearr_29215[(1)] = (1));

return statearr_29215;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____1 = (function (state_29144){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29216){if((e29216 instanceof Object)){
var ex__22863__auto__ = e29216;
var statearr_29217_29265 = state_29144;
(statearr_29217_29265[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29266 = state_29144;
state_29144 = G__29266;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__ = function(state_29144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____1.call(this,state_29144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
})();
var state__22923__auto__ = (function (){var statearr_29218 = f__22922__auto__.call(null);
(statearr_29218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_29218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__,map__29018,map__29018__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29019,map__29019__$1,msg,files))
);

return c__22921__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29269,link){
var map__29271 = p__29269;
var map__29271__$1 = ((cljs.core.seq_QMARK_.call(null,map__29271))?cljs.core.apply.call(null,cljs.core.hash_map,map__29271):map__29271);
var file = cljs.core.get.call(null,map__29271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29271,map__29271__$1,file){
return (function (p1__29267_SHARP_,p2__29268_SHARP_){
if(cljs.core._EQ_.call(null,p1__29267_SHARP_,p2__29268_SHARP_)){
return p1__29267_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29271,map__29271__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29275){
var map__29276 = p__29275;
var map__29276__$1 = ((cljs.core.seq_QMARK_.call(null,map__29276))?cljs.core.apply.call(null,cljs.core.hash_map,map__29276):map__29276);
var current_url_length = cljs.core.get.call(null,map__29276__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29276__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29272_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29272_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29278 = arguments.length;
switch (G__29278) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29280){
var map__29282 = p__29280;
var map__29282__$1 = ((cljs.core.seq_QMARK_.call(null,map__29282))?cljs.core.apply.call(null,cljs.core.hash_map,map__29282):map__29282);
var f_data = map__29282__$1;
var request_url = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18116__auto__ = request_url;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29283,files_msg){
var map__29305 = p__29283;
var map__29305__$1 = ((cljs.core.seq_QMARK_.call(null,map__29305))?cljs.core.apply.call(null,cljs.core.hash_map,map__29305):map__29305);
var opts = map__29305__$1;
var on_cssload = cljs.core.get.call(null,map__29305__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29306_29326 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29307_29327 = null;
var count__29308_29328 = (0);
var i__29309_29329 = (0);
while(true){
if((i__29309_29329 < count__29308_29328)){
var f_29330 = cljs.core._nth.call(null,chunk__29307_29327,i__29309_29329);
figwheel.client.file_reloading.reload_css_file.call(null,f_29330);

var G__29331 = seq__29306_29326;
var G__29332 = chunk__29307_29327;
var G__29333 = count__29308_29328;
var G__29334 = (i__29309_29329 + (1));
seq__29306_29326 = G__29331;
chunk__29307_29327 = G__29332;
count__29308_29328 = G__29333;
i__29309_29329 = G__29334;
continue;
} else {
var temp__4126__auto___29335 = cljs.core.seq.call(null,seq__29306_29326);
if(temp__4126__auto___29335){
var seq__29306_29336__$1 = temp__4126__auto___29335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29306_29336__$1)){
var c__18901__auto___29337 = cljs.core.chunk_first.call(null,seq__29306_29336__$1);
var G__29338 = cljs.core.chunk_rest.call(null,seq__29306_29336__$1);
var G__29339 = c__18901__auto___29337;
var G__29340 = cljs.core.count.call(null,c__18901__auto___29337);
var G__29341 = (0);
seq__29306_29326 = G__29338;
chunk__29307_29327 = G__29339;
count__29308_29328 = G__29340;
i__29309_29329 = G__29341;
continue;
} else {
var f_29342 = cljs.core.first.call(null,seq__29306_29336__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29342);

var G__29343 = cljs.core.next.call(null,seq__29306_29336__$1);
var G__29344 = null;
var G__29345 = (0);
var G__29346 = (0);
seq__29306_29326 = G__29343;
chunk__29307_29327 = G__29344;
count__29308_29328 = G__29345;
i__29309_29329 = G__29346;
continue;
}
} else {
}
}
break;
}

var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (2))){
var inst_29312 = (state_29316[(2)]);
var inst_29313 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29314 = on_cssload.call(null,inst_29313);
var state_29316__$1 = (function (){var statearr_29318 = state_29316;
(statearr_29318[(7)] = inst_29312);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (1))){
var inst_29310 = cljs.core.async.timeout.call(null,(100));
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(2),inst_29310);
} else {
return null;
}
}
});})(c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload))
;
return ((function (switch__22859__auto__,c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____0 = (function (){
var statearr_29322 = [null,null,null,null,null,null,null,null];
(statearr_29322[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__);

(statearr_29322[(1)] = (1));

return statearr_29322;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____1 = (function (state_29316){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_29316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e29323){if((e29323 instanceof Object)){
var ex__22863__auto__ = e29323;
var statearr_29324_29347 = state_29316;
(statearr_29324_29347[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29348 = state_29316;
state_29316 = G__29348;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload))
})();
var state__22923__auto__ = (function (){var statearr_29325 = f__22922__auto__.call(null);
(statearr_29325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_29325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__,map__29305,map__29305__$1,opts,on_cssload))
);

return c__22921__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1434173013675