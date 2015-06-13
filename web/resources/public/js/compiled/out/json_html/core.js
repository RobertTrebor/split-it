// Compiled by ClojureScript 0.0-3211 {}
goog.provide('json_html.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('clojure.string');
json_html.core.escape_html = (function json_html$core$escape_html(s){
return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;",">","&gt;","<","&lt;","\"","&quot;"], null));
});
json_html.core.render_keyword = (function json_html$core$render_keyword(k){
return clojure.string.join.call(null,"/",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,k)));
});
json_html.core.render_collection = (function json_html$core$render_collection(col){
if(cljs.core.empty_QMARK_.call(null,col)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__18870__auto__ = (function json_html$core$render_collection_$_iter__26951(s__26952){
return (new cljs.core.LazySeq(null,(function (){
var s__26952__$1 = s__26952;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26952__$1);
if(temp__4126__auto__){
var s__26952__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26952__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__26952__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__26954 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__26953 = (0);
while(true){
if((i__26953 < size__18869__auto__)){
var vec__26957 = cljs.core._nth.call(null,c__18868__auto__,i__26953);
var i = cljs.core.nth.call(null,vec__26957,(0),null);
var v = cljs.core.nth.call(null,vec__26957,(1),null);
cljs.core.chunk_append.call(null,b__26954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null));

var G__26959 = (i__26953 + (1));
i__26953 = G__26959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26954),json_html$core$render_collection_$_iter__26951.call(null,cljs.core.chunk_rest.call(null,s__26952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26954),null);
}
} else {
var vec__26958 = cljs.core.first.call(null,s__26952__$2);
var i = cljs.core.nth.call(null,vec__26958,(0),null);
var v = cljs.core.nth.call(null,vec__26958,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),json_html$core$render_collection_$_iter__26951.call(null,cljs.core.rest.call(null,s__26952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,col));
})()], null)], null);
}
});
json_html.core.render_set = (function json_html$core$render_set(s){
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__18870__auto__ = (function json_html$core$render_set_$_iter__26964(s__26965){
return (new cljs.core.LazySeq(null,(function (){
var s__26965__$1 = s__26965;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26965__$1);
if(temp__4126__auto__){
var s__26965__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26965__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__26965__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__26967 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__26966 = (0);
while(true){
if((i__26966 < size__18869__auto__)){
var item = cljs.core._nth.call(null,c__18868__auto__,i__26966);
cljs.core.chunk_append.call(null,b__26967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null));

var G__26968 = (i__26966 + (1));
i__26966 = G__26968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26967),json_html$core$render_set_$_iter__26964.call(null,cljs.core.chunk_rest.call(null,s__26965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26967),null);
}
} else {
var item = cljs.core.first.call(null,s__26965__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null),json_html$core$render_set_$_iter__26964.call(null,cljs.core.rest.call(null,s__26965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,cljs.core.sort.call(null,s));
})()], null);
}
});
json_html.core.render_map = (function json_html$core$render_map(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__18870__auto__ = (function json_html$core$render_map_$_iter__26977(s__26978){
return (new cljs.core.LazySeq(null,(function (){
var s__26978__$1 = s__26978;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26978__$1);
if(temp__4126__auto__){
var s__26978__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26978__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__26978__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__26980 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__26979 = (0);
while(true){
if((i__26979 < size__18869__auto__)){
var vec__26983 = cljs.core._nth.call(null,c__18868__auto__,i__26979);
var k = cljs.core.nth.call(null,vec__26983,(0),null);
var v = cljs.core.nth.call(null,vec__26983,(1),null);
cljs.core.chunk_append.call(null,b__26980,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null));

var G__26985 = (i__26979 + (1));
i__26979 = G__26985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26980),json_html$core$render_map_$_iter__26977.call(null,cljs.core.chunk_rest.call(null,s__26978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26980),null);
}
} else {
var vec__26984 = cljs.core.first.call(null,s__26978__$2);
var k = cljs.core.nth.call(null,vec__26984,(0),null);
var v = cljs.core.nth.call(null,vec__26984,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),json_html.core.render.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),json_html$core$render_map_$_iter__26977.call(null,cljs.core.rest.call(null,s__26978__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,cljs.core.into.call(null,cljs.core.sorted_map.call(null),m));
})()], null)], null);
}
});
json_html.core.render_string = (function json_html$core$render_string(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-string","span.jh-empty-string",1227187446)], null):json_html.core.escape_html.call(null,s))], null);
});
json_html.core.render = (function json_html$core$render(v){
var t = cljs.core.type.call(null,v);
if(cljs.core._EQ_.call(null,t,cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.render_keyword.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,String)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.escape_html.call(null,v)], null);
} else {
if(cljs.core._EQ_.call(null,t,Date)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-date","span.jh-type-date",-1243309956),v.toString()], null);
} else {
if(cljs.core._EQ_.call(null,t,Boolean)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-bool","span.jh-type-bool",53751640),[cljs.core.str(v)].join('')], null);
} else {
if(cljs.core._EQ_.call(null,t,Number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-number","span.jh-type-number",1495617844),v], null);
} else {
if((function (){var G__26989 = v;
if(G__26989){
var bit__18790__auto__ = (G__26989.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__18790__auto__) || (G__26989.cljs$core$IMap$)){
return true;
} else {
if((!G__26989.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__26989);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__26989);
}
})()){
return json_html.core.render_map.call(null,v);
} else {
if((function (){var G__26990 = v;
if(G__26990){
var bit__18790__auto__ = (G__26990.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__18790__auto__) || (G__26990.cljs$core$ISet$)){
return true;
} else {
if((!G__26990.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__26990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__26990);
}
})()){
return json_html.core.render_set.call(null,v);
} else {
if((function (){var G__26991 = v;
if(G__26991){
var bit__18790__auto__ = (G__26991.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__18790__auto__) || (G__26991.cljs$core$ICollection$)){
return true;
} else {
if((!G__26991.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__26991);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__26991);
}
})()){
return json_html.core.render_collection.call(null,v);
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
});
json_html.core.edn__GT_hiccup = (function json_html$core$edn__GT_hiccup(edn){
return json_html.core.render.call(null,edn);
});
json_html.core.edn__GT_html = (function json_html$core$edn__GT_html(edn){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.edn__GT_hiccup.call(null,edn)))].join('');
});
json_html.core.json__GT_hiccup = (function json_html$core$json__GT_hiccup(json){
return json_html.core.render.call(null,cljs.core.js__GT_clj.call(null,json));
});
json_html.core.json__GT_html = (function json_html$core$json__GT_html(json){
return [cljs.core.str(hiccups.runtime.render_html.call(null,json_html.core.json__GT_hiccup.call(null,json)))].join('');
});

//# sourceMappingURL=core.js.map?rel=1434173007234