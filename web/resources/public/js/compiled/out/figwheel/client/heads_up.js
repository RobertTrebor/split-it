// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19156__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19156__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28396_28404 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28397_28405 = null;
var count__28398_28406 = (0);
var i__28399_28407 = (0);
while(true){
if((i__28399_28407 < count__28398_28406)){
var k_28408 = cljs.core._nth.call(null,chunk__28397_28405,i__28399_28407);
e.setAttribute(cljs.core.name.call(null,k_28408),cljs.core.get.call(null,attrs,k_28408));

var G__28409 = seq__28396_28404;
var G__28410 = chunk__28397_28405;
var G__28411 = count__28398_28406;
var G__28412 = (i__28399_28407 + (1));
seq__28396_28404 = G__28409;
chunk__28397_28405 = G__28410;
count__28398_28406 = G__28411;
i__28399_28407 = G__28412;
continue;
} else {
var temp__4126__auto___28413 = cljs.core.seq.call(null,seq__28396_28404);
if(temp__4126__auto___28413){
var seq__28396_28414__$1 = temp__4126__auto___28413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28396_28414__$1)){
var c__18901__auto___28415 = cljs.core.chunk_first.call(null,seq__28396_28414__$1);
var G__28416 = cljs.core.chunk_rest.call(null,seq__28396_28414__$1);
var G__28417 = c__18901__auto___28415;
var G__28418 = cljs.core.count.call(null,c__18901__auto___28415);
var G__28419 = (0);
seq__28396_28404 = G__28416;
chunk__28397_28405 = G__28417;
count__28398_28406 = G__28418;
i__28399_28407 = G__28419;
continue;
} else {
var k_28420 = cljs.core.first.call(null,seq__28396_28414__$1);
e.setAttribute(cljs.core.name.call(null,k_28420),cljs.core.get.call(null,attrs,k_28420));

var G__28421 = cljs.core.next.call(null,seq__28396_28414__$1);
var G__28422 = null;
var G__28423 = (0);
var G__28424 = (0);
seq__28396_28404 = G__28421;
chunk__28397_28405 = G__28422;
count__28398_28406 = G__28423;
i__28399_28407 = G__28424;
continue;
}
} else {
}
}
break;
}

var seq__28400_28425 = cljs.core.seq.call(null,children);
var chunk__28401_28426 = null;
var count__28402_28427 = (0);
var i__28403_28428 = (0);
while(true){
if((i__28403_28428 < count__28402_28427)){
var ch_28429 = cljs.core._nth.call(null,chunk__28401_28426,i__28403_28428);
e.appendChild(ch_28429);

var G__28430 = seq__28400_28425;
var G__28431 = chunk__28401_28426;
var G__28432 = count__28402_28427;
var G__28433 = (i__28403_28428 + (1));
seq__28400_28425 = G__28430;
chunk__28401_28426 = G__28431;
count__28402_28427 = G__28432;
i__28403_28428 = G__28433;
continue;
} else {
var temp__4126__auto___28434 = cljs.core.seq.call(null,seq__28400_28425);
if(temp__4126__auto___28434){
var seq__28400_28435__$1 = temp__4126__auto___28434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28400_28435__$1)){
var c__18901__auto___28436 = cljs.core.chunk_first.call(null,seq__28400_28435__$1);
var G__28437 = cljs.core.chunk_rest.call(null,seq__28400_28435__$1);
var G__28438 = c__18901__auto___28436;
var G__28439 = cljs.core.count.call(null,c__18901__auto___28436);
var G__28440 = (0);
seq__28400_28425 = G__28437;
chunk__28401_28426 = G__28438;
count__28402_28427 = G__28439;
i__28403_28428 = G__28440;
continue;
} else {
var ch_28441 = cljs.core.first.call(null,seq__28400_28435__$1);
e.appendChild(ch_28441);

var G__28442 = cljs.core.next.call(null,seq__28400_28435__$1);
var G__28443 = null;
var G__28444 = (0);
var G__28445 = (0);
seq__28400_28425 = G__28442;
chunk__28401_28426 = G__28443;
count__28402_28427 = G__28444;
i__28403_28428 = G__28445;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28393){
var G__28394 = cljs.core.first.call(null,seq28393);
var seq28393__$1 = cljs.core.next.call(null,seq28393);
var G__28395 = cljs.core.first.call(null,seq28393__$1);
var seq28393__$2 = cljs.core.next.call(null,seq28393__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28394,G__28395,seq28393__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28446 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28446.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28446.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28446.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28446);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28447,st_map){
var map__28451 = p__28447;
var map__28451__$1 = ((cljs.core.seq_QMARK_.call(null,map__28451))?cljs.core.apply.call(null,cljs.core.hash_map,map__28451):map__28451);
var container_el = cljs.core.get.call(null,map__28451__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28451,map__28451__$1,container_el){
return (function (p__28452){
var vec__28453 = p__28452;
var k = cljs.core.nth.call(null,vec__28453,(0),null);
var v = cljs.core.nth.call(null,vec__28453,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28451,map__28451__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28454,dom_str){
var map__28456 = p__28454;
var map__28456__$1 = ((cljs.core.seq_QMARK_.call(null,map__28456))?cljs.core.apply.call(null,cljs.core.hash_map,map__28456):map__28456);
var c = map__28456__$1;
var content_area_el = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28457){
var map__28459 = p__28457;
var map__28459__$1 = ((cljs.core.seq_QMARK_.call(null,map__28459))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459):map__28459);
var content_area_el = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_28501){
var state_val_28502 = (state_28501[(1)]);
if((state_val_28502 === (2))){
var inst_28486 = (state_28501[(7)]);
var inst_28495 = (state_28501[(2)]);
var inst_28496 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28497 = ["auto"];
var inst_28498 = cljs.core.PersistentHashMap.fromArrays(inst_28496,inst_28497);
var inst_28499 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28486,inst_28498);
var state_28501__$1 = (function (){var statearr_28503 = state_28501;
(statearr_28503[(8)] = inst_28495);

return statearr_28503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28501__$1,inst_28499);
} else {
if((state_val_28502 === (1))){
var inst_28486 = (state_28501[(7)]);
var inst_28486__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28487 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28488 = ["10px","10px","100%","68px","1.0"];
var inst_28489 = cljs.core.PersistentHashMap.fromArrays(inst_28487,inst_28488);
var inst_28490 = cljs.core.merge.call(null,inst_28489,style);
var inst_28491 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28486__$1,inst_28490);
var inst_28492 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28486__$1,msg);
var inst_28493 = cljs.core.async.timeout.call(null,(300));
var state_28501__$1 = (function (){var statearr_28504 = state_28501;
(statearr_28504[(9)] = inst_28491);

(statearr_28504[(10)] = inst_28492);

(statearr_28504[(7)] = inst_28486__$1);

return statearr_28504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28501__$1,(2),inst_28493);
} else {
return null;
}
}
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28508[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____1 = (function (state_28501){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__22863__auto__ = e28509;
var statearr_28510_28512 = state_28501;
(statearr_28510_28512[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28501;
state_28501 = G__28513;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__ = function(state_28501){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____1.call(this,state_28501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_28511 = f__22922__auto__.call(null);
(statearr_28511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28515 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28515,(0),null);
var ln = cljs.core.nth.call(null,vec__28515,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28518 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28518,(0),null);
var file_line = cljs.core.nth.call(null,vec__28518,(1),null);
var file_column = cljs.core.nth.call(null,vec__28518,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28518,file_name,file_line,file_column){
return (function (p1__28516_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28516_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28518,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18116__auto__ = file_line;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var and__18104__auto__ = cause;
if(cljs.core.truth_(and__18104__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18104__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28520 = figwheel.client.heads_up.ensure_container.call(null);
var map__28520__$1 = ((cljs.core.seq_QMARK_.call(null,map__28520))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);
var content_area_el = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_28567){
var state_val_28568 = (state_28567[(1)]);
if((state_val_28568 === (3))){
var inst_28550 = (state_28567[(7)]);
var inst_28564 = (state_28567[(2)]);
var inst_28565 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28550,"");
var state_28567__$1 = (function (){var statearr_28569 = state_28567;
(statearr_28569[(8)] = inst_28564);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28567__$1,inst_28565);
} else {
if((state_val_28568 === (2))){
var inst_28550 = (state_28567[(7)]);
var inst_28557 = (state_28567[(2)]);
var inst_28558 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28559 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28560 = cljs.core.PersistentHashMap.fromArrays(inst_28558,inst_28559);
var inst_28561 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28550,inst_28560);
var inst_28562 = cljs.core.async.timeout.call(null,(200));
var state_28567__$1 = (function (){var statearr_28570 = state_28567;
(statearr_28570[(9)] = inst_28557);

(statearr_28570[(10)] = inst_28561);

return statearr_28570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28567__$1,(3),inst_28562);
} else {
if((state_val_28568 === (1))){
var inst_28550 = (state_28567[(7)]);
var inst_28550__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28551 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28552 = ["0.0"];
var inst_28553 = cljs.core.PersistentHashMap.fromArrays(inst_28551,inst_28552);
var inst_28554 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28550__$1,inst_28553);
var inst_28555 = cljs.core.async.timeout.call(null,(300));
var state_28567__$1 = (function (){var statearr_28571 = state_28567;
(statearr_28571[(11)] = inst_28554);

(statearr_28571[(7)] = inst_28550__$1);

return statearr_28571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28567__$1,(2),inst_28555);
} else {
return null;
}
}
}
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22860__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22860__auto____0 = (function (){
var statearr_28575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28575[(0)] = figwheel$client$heads_up$clear_$_state_machine__22860__auto__);

(statearr_28575[(1)] = (1));

return statearr_28575;
});
var figwheel$client$heads_up$clear_$_state_machine__22860__auto____1 = (function (state_28567){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28576){if((e28576 instanceof Object)){
var ex__22863__auto__ = e28576;
var statearr_28577_28579 = state_28567;
(statearr_28577_28579[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28580 = state_28567;
state_28567 = G__28580;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22860__auto__ = function(state_28567){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22860__auto____1.call(this,state_28567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22860__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22860__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_28578 = f__22922__auto__.call(null);
(statearr_28578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_28578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_28612){
var state_val_28613 = (state_28612[(1)]);
if((state_val_28613 === (4))){
var inst_28610 = (state_28612[(2)]);
var state_28612__$1 = state_28612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28612__$1,inst_28610);
} else {
if((state_val_28613 === (3))){
var inst_28607 = (state_28612[(2)]);
var inst_28608 = figwheel.client.heads_up.clear.call(null);
var state_28612__$1 = (function (){var statearr_28614 = state_28612;
(statearr_28614[(7)] = inst_28607);

return statearr_28614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28612__$1,(4),inst_28608);
} else {
if((state_val_28613 === (2))){
var inst_28604 = (state_28612[(2)]);
var inst_28605 = cljs.core.async.timeout.call(null,(400));
var state_28612__$1 = (function (){var statearr_28615 = state_28612;
(statearr_28615[(8)] = inst_28604);

return statearr_28615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28612__$1,(3),inst_28605);
} else {
if((state_val_28613 === (1))){
var inst_28602 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28612__$1 = state_28612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28612__$1,(2),inst_28602);
} else {
return null;
}
}
}
}
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____0 = (function (){
var statearr_28619 = [null,null,null,null,null,null,null,null,null];
(statearr_28619[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__);

(statearr_28619[(1)] = (1));

return statearr_28619;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____1 = (function (state_28612){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28620){if((e28620 instanceof Object)){
var ex__22863__auto__ = e28620;
var statearr_28621_28623 = state_28612;
(statearr_28621_28623[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28624 = state_28612;
state_28612 = G__28624;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__ = function(state_28612){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____1.call(this,state_28612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_28622 = f__22922__auto__.call(null);
(statearr_28622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_28622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1434173012665