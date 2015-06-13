// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27746__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27747__i = 0, G__27747__a = new Array(arguments.length -  0);
while (G__27747__i < G__27747__a.length) {G__27747__a[G__27747__i] = arguments[G__27747__i + 0]; ++G__27747__i;}
  args = new cljs.core.IndexedSeq(G__27747__a,0);
} 
return G__27746__delegate.call(this,args);};
G__27746.cljs$lang$maxFixedArity = 0;
G__27746.cljs$lang$applyTo = (function (arglist__27748){
var args = cljs.core.seq(arglist__27748);
return G__27746__delegate(args);
});
G__27746.cljs$core$IFn$_invoke$arity$variadic = G__27746__delegate;
return G__27746;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27749){
var map__27751 = p__27749;
var map__27751__$1 = ((cljs.core.seq_QMARK_.call(null,map__27751))?cljs.core.apply.call(null,cljs.core.hash_map,map__27751):map__27751);
var class$ = cljs.core.get.call(null,map__27751__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__27751__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18116__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18104__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18104__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18104__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22921__auto___27880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___27880,ch){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___27880,ch){
return (function (state_27854){
var state_val_27855 = (state_27854[(1)]);
if((state_val_27855 === (7))){
var inst_27850 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27856_27881 = state_27854__$1;
(statearr_27856_27881[(2)] = inst_27850);

(statearr_27856_27881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (1))){
var state_27854__$1 = state_27854;
var statearr_27857_27882 = state_27854__$1;
(statearr_27857_27882[(2)] = null);

(statearr_27857_27882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (4))){
var inst_27818 = (state_27854[(7)]);
var inst_27818__$1 = (state_27854[(2)]);
var state_27854__$1 = (function (){var statearr_27858 = state_27854;
(statearr_27858[(7)] = inst_27818__$1);

return statearr_27858;
})();
if(cljs.core.truth_(inst_27818__$1)){
var statearr_27859_27883 = state_27854__$1;
(statearr_27859_27883[(1)] = (5));

} else {
var statearr_27860_27884 = state_27854__$1;
(statearr_27860_27884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (13))){
var state_27854__$1 = state_27854;
var statearr_27861_27885 = state_27854__$1;
(statearr_27861_27885[(2)] = null);

(statearr_27861_27885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (6))){
var state_27854__$1 = state_27854;
var statearr_27862_27886 = state_27854__$1;
(statearr_27862_27886[(2)] = null);

(statearr_27862_27886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (3))){
var inst_27852 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27854__$1,inst_27852);
} else {
if((state_val_27855 === (12))){
var inst_27825 = (state_27854[(8)]);
var inst_27838 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27825);
var inst_27839 = cljs.core.first.call(null,inst_27838);
var inst_27840 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27839);
var inst_27841 = console.warn("Figwheel: Not loading code with warnings - ",inst_27840);
var state_27854__$1 = state_27854;
var statearr_27863_27887 = state_27854__$1;
(statearr_27863_27887[(2)] = inst_27841);

(statearr_27863_27887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (2))){
var state_27854__$1 = state_27854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27854__$1,(4),ch);
} else {
if((state_val_27855 === (11))){
var inst_27834 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27864_27888 = state_27854__$1;
(statearr_27864_27888[(2)] = inst_27834);

(statearr_27864_27888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (9))){
var inst_27824 = (state_27854[(9)]);
var inst_27836 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27824,opts);
var state_27854__$1 = state_27854;
if(cljs.core.truth_(inst_27836)){
var statearr_27865_27889 = state_27854__$1;
(statearr_27865_27889[(1)] = (12));

} else {
var statearr_27866_27890 = state_27854__$1;
(statearr_27866_27890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (5))){
var inst_27824 = (state_27854[(9)]);
var inst_27818 = (state_27854[(7)]);
var inst_27820 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27821 = (new cljs.core.PersistentArrayMap(null,2,inst_27820,null));
var inst_27822 = (new cljs.core.PersistentHashSet(null,inst_27821,null));
var inst_27823 = figwheel.client.focus_msgs.call(null,inst_27822,inst_27818);
var inst_27824__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27823);
var inst_27825 = cljs.core.first.call(null,inst_27823);
var inst_27826 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27824__$1,opts);
var state_27854__$1 = (function (){var statearr_27867 = state_27854;
(statearr_27867[(8)] = inst_27825);

(statearr_27867[(9)] = inst_27824__$1);

return statearr_27867;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27868_27891 = state_27854__$1;
(statearr_27868_27891[(1)] = (8));

} else {
var statearr_27869_27892 = state_27854__$1;
(statearr_27869_27892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (14))){
var inst_27844 = (state_27854[(2)]);
var state_27854__$1 = state_27854;
var statearr_27870_27893 = state_27854__$1;
(statearr_27870_27893[(2)] = inst_27844);

(statearr_27870_27893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (10))){
var inst_27846 = (state_27854[(2)]);
var state_27854__$1 = (function (){var statearr_27871 = state_27854;
(statearr_27871[(10)] = inst_27846);

return statearr_27871;
})();
var statearr_27872_27894 = state_27854__$1;
(statearr_27872_27894[(2)] = null);

(statearr_27872_27894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27855 === (8))){
var inst_27825 = (state_27854[(8)]);
var inst_27828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27829 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27825);
var inst_27830 = cljs.core.async.timeout.call(null,(1000));
var inst_27831 = [inst_27829,inst_27830];
var inst_27832 = (new cljs.core.PersistentVector(null,2,(5),inst_27828,inst_27831,null));
var state_27854__$1 = state_27854;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27854__$1,(11),inst_27832);
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
});})(c__22921__auto___27880,ch))
;
return ((function (switch__22859__auto__,c__22921__auto___27880,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____0 = (function (){
var statearr_27876 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27876[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__);

(statearr_27876[(1)] = (1));

return statearr_27876;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____1 = (function (state_27854){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_27854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e27877){if((e27877 instanceof Object)){
var ex__22863__auto__ = e27877;
var statearr_27878_27895 = state_27854;
(statearr_27878_27895[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27896 = state_27854;
state_27854 = G__27896;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__ = function(state_27854){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____1.call(this,state_27854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22860__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___27880,ch))
})();
var state__22923__auto__ = (function (){var statearr_27879 = f__22922__auto__.call(null);
(statearr_27879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___27880);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___27880,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27897_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27897_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_27904 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27904){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_27902 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27903 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27902,_STAR_print_newline_STAR_27903,base_path_27904){
return (function() { 
var G__27905__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27906__i = 0, G__27906__a = new Array(arguments.length -  0);
while (G__27906__i < G__27906__a.length) {G__27906__a[G__27906__i] = arguments[G__27906__i + 0]; ++G__27906__i;}
  args = new cljs.core.IndexedSeq(G__27906__a,0);
} 
return G__27905__delegate.call(this,args);};
G__27905.cljs$lang$maxFixedArity = 0;
G__27905.cljs$lang$applyTo = (function (arglist__27907){
var args = cljs.core.seq(arglist__27907);
return G__27905__delegate(args);
});
G__27905.cljs$core$IFn$_invoke$arity$variadic = G__27905__delegate;
return G__27905;
})()
;})(_STAR_print_fn_STAR_27902,_STAR_print_newline_STAR_27903,base_path_27904))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27903;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27902;
}}catch (e27901){if((e27901 instanceof Error)){
var e = e27901;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27904], null));
} else {
var e = e27901;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27904))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27908){
var map__27913 = p__27908;
var map__27913__$1 = ((cljs.core.seq_QMARK_.call(null,map__27913))?cljs.core.apply.call(null,cljs.core.hash_map,map__27913):map__27913);
var opts = map__27913__$1;
var build_id = cljs.core.get.call(null,map__27913__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27913,map__27913__$1,opts,build_id){
return (function (p__27914){
var vec__27915 = p__27914;
var map__27916 = cljs.core.nth.call(null,vec__27915,(0),null);
var map__27916__$1 = ((cljs.core.seq_QMARK_.call(null,map__27916))?cljs.core.apply.call(null,cljs.core.hash_map,map__27916):map__27916);
var msg = map__27916__$1;
var msg_name = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27915,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__27915,map__27916,map__27916__$1,msg,msg_name,_,map__27913,map__27913__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27915,map__27916,map__27916__$1,msg,msg_name,_,map__27913,map__27913__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27913,map__27913__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27920){
var vec__27921 = p__27920;
var map__27922 = cljs.core.nth.call(null,vec__27921,(0),null);
var map__27922__$1 = ((cljs.core.seq_QMARK_.call(null,map__27922))?cljs.core.apply.call(null,cljs.core.hash_map,map__27922):map__27922);
var msg = map__27922__$1;
var msg_name = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27921,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27923){
var map__27931 = p__27923;
var map__27931__$1 = ((cljs.core.seq_QMARK_.call(null,map__27931))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);
var on_compile_fail = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__27931,map__27931__$1,on_compile_fail,on_compile_warning){
return (function (p__27932){
var vec__27933 = p__27932;
var map__27934 = cljs.core.nth.call(null,vec__27933,(0),null);
var map__27934__$1 = ((cljs.core.seq_QMARK_.call(null,map__27934))?cljs.core.apply.call(null,cljs.core.hash_map,map__27934):map__27934);
var msg = map__27934__$1;
var msg_name = cljs.core.get.call(null,map__27934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27933,(1));
var pred__27935 = cljs.core._EQ_;
var expr__27936 = msg_name;
if(cljs.core.truth_(pred__27935.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27936))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27935.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27936))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27931,map__27931__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__,msg_hist,msg_names,msg){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (7))){
var inst_28071 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28139_28180 = state_28137__$1;
(statearr_28139_28180[(2)] = inst_28071);

(statearr_28139_28180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (20))){
var inst_28099 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28099)){
var statearr_28140_28181 = state_28137__$1;
(statearr_28140_28181[(1)] = (22));

} else {
var statearr_28141_28182 = state_28137__$1;
(statearr_28141_28182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (27))){
var inst_28111 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28112 = figwheel.client.heads_up.display_warning.call(null,inst_28111);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(30),inst_28112);
} else {
if((state_val_28138 === (1))){
var inst_28059 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28059)){
var statearr_28142_28183 = state_28137__$1;
(statearr_28142_28183[(1)] = (2));

} else {
var statearr_28143_28184 = state_28137__$1;
(statearr_28143_28184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (24))){
var inst_28127 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28144_28185 = state_28137__$1;
(statearr_28144_28185[(2)] = inst_28127);

(statearr_28144_28185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (4))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (15))){
var inst_28087 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28088 = figwheel.client.format_messages.call(null,inst_28087);
var inst_28089 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28090 = figwheel.client.heads_up.display_error.call(null,inst_28088,inst_28089);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(18),inst_28090);
} else {
if((state_val_28138 === (21))){
var inst_28129 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28145_28186 = state_28137__$1;
(statearr_28145_28186[(2)] = inst_28129);

(statearr_28145_28186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (31))){
var inst_28118 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(34),inst_28118);
} else {
if((state_val_28138 === (32))){
var state_28137__$1 = state_28137;
var statearr_28146_28187 = state_28137__$1;
(statearr_28146_28187[(2)] = null);

(statearr_28146_28187[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (33))){
var inst_28123 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28147_28188 = state_28137__$1;
(statearr_28147_28188[(2)] = inst_28123);

(statearr_28147_28188[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (13))){
var inst_28077 = (state_28137[(2)]);
var inst_28078 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28079 = figwheel.client.format_messages.call(null,inst_28078);
var inst_28080 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28081 = figwheel.client.heads_up.display_error.call(null,inst_28079,inst_28080);
var state_28137__$1 = (function (){var statearr_28148 = state_28137;
(statearr_28148[(7)] = inst_28077);

return statearr_28148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(14),inst_28081);
} else {
if((state_val_28138 === (22))){
var inst_28101 = figwheel.client.heads_up.clear.call(null);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(25),inst_28101);
} else {
if((state_val_28138 === (29))){
var inst_28125 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28149_28189 = state_28137__$1;
(statearr_28149_28189[(2)] = inst_28125);

(statearr_28149_28189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (6))){
var inst_28067 = figwheel.client.heads_up.clear.call(null);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(9),inst_28067);
} else {
if((state_val_28138 === (28))){
var inst_28116 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28116)){
var statearr_28150_28190 = state_28137__$1;
(statearr_28150_28190[(1)] = (31));

} else {
var statearr_28151_28191 = state_28137__$1;
(statearr_28151_28191[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (25))){
var inst_28103 = (state_28137[(2)]);
var inst_28104 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28105 = figwheel.client.heads_up.display_warning.call(null,inst_28104);
var state_28137__$1 = (function (){var statearr_28152 = state_28137;
(statearr_28152[(8)] = inst_28103);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(26),inst_28105);
} else {
if((state_val_28138 === (34))){
var inst_28120 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28153_28192 = state_28137__$1;
(statearr_28153_28192[(2)] = inst_28120);

(statearr_28153_28192[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (17))){
var inst_28131 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28154_28193 = state_28137__$1;
(statearr_28154_28193[(2)] = inst_28131);

(statearr_28154_28193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (3))){
var inst_28073 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28073)){
var statearr_28155_28194 = state_28137__$1;
(statearr_28155_28194[(1)] = (10));

} else {
var statearr_28156_28195 = state_28137__$1;
(statearr_28156_28195[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (12))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28157_28196 = state_28137__$1;
(statearr_28157_28196[(2)] = inst_28133);

(statearr_28157_28196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (2))){
var inst_28061 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28061)){
var statearr_28158_28197 = state_28137__$1;
(statearr_28158_28197[(1)] = (5));

} else {
var statearr_28159_28198 = state_28137__$1;
(statearr_28159_28198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (23))){
var inst_28109 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28109)){
var statearr_28160_28199 = state_28137__$1;
(statearr_28160_28199[(1)] = (27));

} else {
var statearr_28161_28200 = state_28137__$1;
(statearr_28161_28200[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (19))){
var inst_28096 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28097 = figwheel.client.heads_up.append_message.call(null,inst_28096);
var state_28137__$1 = state_28137;
var statearr_28162_28201 = state_28137__$1;
(statearr_28162_28201[(2)] = inst_28097);

(statearr_28162_28201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (11))){
var inst_28085 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28085)){
var statearr_28163_28202 = state_28137__$1;
(statearr_28163_28202[(1)] = (15));

} else {
var statearr_28164_28203 = state_28137__$1;
(statearr_28164_28203[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (9))){
var inst_28069 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28165_28204 = state_28137__$1;
(statearr_28165_28204[(2)] = inst_28069);

(statearr_28165_28204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (5))){
var inst_28063 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(8),inst_28063);
} else {
if((state_val_28138 === (14))){
var inst_28083 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28166_28205 = state_28137__$1;
(statearr_28166_28205[(2)] = inst_28083);

(statearr_28166_28205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (26))){
var inst_28107 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28167_28206 = state_28137__$1;
(statearr_28167_28206[(2)] = inst_28107);

(statearr_28167_28206[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (16))){
var inst_28094 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28094)){
var statearr_28168_28207 = state_28137__$1;
(statearr_28168_28207[(1)] = (19));

} else {
var statearr_28169_28208 = state_28137__$1;
(statearr_28169_28208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (30))){
var inst_28114 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28170_28209 = state_28137__$1;
(statearr_28170_28209[(2)] = inst_28114);

(statearr_28170_28209[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (10))){
var inst_28075 = figwheel.client.heads_up.clear.call(null);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(13),inst_28075);
} else {
if((state_val_28138 === (18))){
var inst_28092 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28171_28210 = state_28137__$1;
(statearr_28171_28210[(2)] = inst_28092);

(statearr_28171_28210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (8))){
var inst_28065 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28172_28211 = state_28137__$1;
(statearr_28172_28211[(2)] = inst_28065);

(statearr_28172_28211[(1)] = (7));


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
});})(c__22921__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22859__auto__,c__22921__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null,null,null];
(statearr_28176[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____1 = (function (state_28137){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__22863__auto__ = e28177;
var statearr_28178_28212 = state_28137;
(statearr_28178_28212[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28137;
state_28137 = G__28213;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__,msg_hist,msg_names,msg))
})();
var state__22923__auto__ = (function (){var statearr_28179 = f__22922__auto__.call(null);
(statearr_28179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__,msg_hist,msg_names,msg))
);

return c__22921__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22921__auto___28276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto___28276,ch){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto___28276,ch){
return (function (state_28259){
var state_val_28260 = (state_28259[(1)]);
if((state_val_28260 === (8))){
var inst_28251 = (state_28259[(2)]);
var state_28259__$1 = (function (){var statearr_28261 = state_28259;
(statearr_28261[(7)] = inst_28251);

return statearr_28261;
})();
var statearr_28262_28277 = state_28259__$1;
(statearr_28262_28277[(2)] = null);

(statearr_28262_28277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (7))){
var inst_28255 = (state_28259[(2)]);
var state_28259__$1 = state_28259;
var statearr_28263_28278 = state_28259__$1;
(statearr_28263_28278[(2)] = inst_28255);

(statearr_28263_28278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (6))){
var state_28259__$1 = state_28259;
var statearr_28264_28279 = state_28259__$1;
(statearr_28264_28279[(2)] = null);

(statearr_28264_28279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (5))){
var inst_28247 = (state_28259[(8)]);
var inst_28249 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28247);
var state_28259__$1 = state_28259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28259__$1,(8),inst_28249);
} else {
if((state_val_28260 === (4))){
var inst_28247 = (state_28259[(8)]);
var inst_28247__$1 = (state_28259[(2)]);
var state_28259__$1 = (function (){var statearr_28265 = state_28259;
(statearr_28265[(8)] = inst_28247__$1);

return statearr_28265;
})();
if(cljs.core.truth_(inst_28247__$1)){
var statearr_28266_28280 = state_28259__$1;
(statearr_28266_28280[(1)] = (5));

} else {
var statearr_28267_28281 = state_28259__$1;
(statearr_28267_28281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28260 === (3))){
var inst_28257 = (state_28259[(2)]);
var state_28259__$1 = state_28259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28259__$1,inst_28257);
} else {
if((state_val_28260 === (2))){
var state_28259__$1 = state_28259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28259__$1,(4),ch);
} else {
if((state_val_28260 === (1))){
var state_28259__$1 = state_28259;
var statearr_28268_28282 = state_28259__$1;
(statearr_28268_28282[(2)] = null);

(statearr_28268_28282[(1)] = (2));


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
});})(c__22921__auto___28276,ch))
;
return ((function (switch__22859__auto__,c__22921__auto___28276,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22860__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22860__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22860__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var figwheel$client$heads_up_plugin_$_state_machine__22860__auto____1 = (function (state_28259){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__22863__auto__ = e28273;
var statearr_28274_28283 = state_28259;
(statearr_28274_28283[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28284 = state_28259;
state_28259 = G__28284;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22860__auto__ = function(state_28259){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22860__auto____1.call(this,state_28259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22860__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22860__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto___28276,ch))
})();
var state__22923__auto__ = (function (){var statearr_28275 = f__22922__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto___28276);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto___28276,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22921__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22921__auto__){
return (function (){
var f__22922__auto__ = (function (){var switch__22859__auto__ = ((function (c__22921__auto__){
return (function (state_28305){
var state_val_28306 = (state_28305[(1)]);
if((state_val_28306 === (2))){
var inst_28302 = (state_28305[(2)]);
var inst_28303 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28305__$1 = (function (){var statearr_28307 = state_28305;
(statearr_28307[(7)] = inst_28302);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28305__$1,inst_28303);
} else {
if((state_val_28306 === (1))){
var inst_28300 = cljs.core.async.timeout.call(null,(3000));
var state_28305__$1 = state_28305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28305__$1,(2),inst_28300);
} else {
return null;
}
}
});})(c__22921__auto__))
;
return ((function (switch__22859__auto__,c__22921__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____0 = (function (){
var statearr_28311 = [null,null,null,null,null,null,null,null];
(statearr_28311[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__);

(statearr_28311[(1)] = (1));

return statearr_28311;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____1 = (function (state_28305){
while(true){
var ret_value__22861__auto__ = (function (){try{while(true){
var result__22862__auto__ = switch__22859__auto__.call(null,state_28305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22862__auto__;
}
break;
}
}catch (e28312){if((e28312 instanceof Object)){
var ex__22863__auto__ = e28312;
var statearr_28313_28315 = state_28305;
(statearr_28313_28315[(5)] = ex__22863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28316 = state_28305;
state_28305 = G__28316;
continue;
} else {
return ret_value__22861__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__ = function(state_28305){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____1.call(this,state_28305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22860__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22860__auto__;
})()
;})(switch__22859__auto__,c__22921__auto__))
})();
var state__22923__auto__ = (function (){var statearr_28314 = f__22922__auto__.call(null);
(statearr_28314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22921__auto__);

return statearr_28314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22923__auto__);
});})(c__22921__auto__))
);

return c__22921__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28317){
var map__28323 = p__28317;
var map__28323__$1 = ((cljs.core.seq_QMARK_.call(null,map__28323))?cljs.core.apply.call(null,cljs.core.hash_map,map__28323):map__28323);
var ed = map__28323__$1;
var cause = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28323__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28324_28328 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28325_28329 = null;
var count__28326_28330 = (0);
var i__28327_28331 = (0);
while(true){
if((i__28327_28331 < count__28326_28330)){
var msg_28332 = cljs.core._nth.call(null,chunk__28325_28329,i__28327_28331);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28332);

var G__28333 = seq__28324_28328;
var G__28334 = chunk__28325_28329;
var G__28335 = count__28326_28330;
var G__28336 = (i__28327_28331 + (1));
seq__28324_28328 = G__28333;
chunk__28325_28329 = G__28334;
count__28326_28330 = G__28335;
i__28327_28331 = G__28336;
continue;
} else {
var temp__4126__auto___28337 = cljs.core.seq.call(null,seq__28324_28328);
if(temp__4126__auto___28337){
var seq__28324_28338__$1 = temp__4126__auto___28337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28324_28338__$1)){
var c__18901__auto___28339 = cljs.core.chunk_first.call(null,seq__28324_28338__$1);
var G__28340 = cljs.core.chunk_rest.call(null,seq__28324_28338__$1);
var G__28341 = c__18901__auto___28339;
var G__28342 = cljs.core.count.call(null,c__18901__auto___28339);
var G__28343 = (0);
seq__28324_28328 = G__28340;
chunk__28325_28329 = G__28341;
count__28326_28330 = G__28342;
i__28327_28331 = G__28343;
continue;
} else {
var msg_28344 = cljs.core.first.call(null,seq__28324_28338__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28344);

var G__28345 = cljs.core.next.call(null,seq__28324_28338__$1);
var G__28346 = null;
var G__28347 = (0);
var G__28348 = (0);
seq__28324_28328 = G__28345;
chunk__28325_28329 = G__28346;
count__28326_28330 = G__28347;
i__28327_28331 = G__28348;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28349){
var map__28351 = p__28349;
var map__28351__$1 = ((cljs.core.seq_QMARK_.call(null,map__28351))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);
var w = map__28351__$1;
var message = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18104__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18104__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18104__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28358 = cljs.core.seq.call(null,plugins);
var chunk__28359 = null;
var count__28360 = (0);
var i__28361 = (0);
while(true){
if((i__28361 < count__28360)){
var vec__28362 = cljs.core._nth.call(null,chunk__28359,i__28361);
var k = cljs.core.nth.call(null,vec__28362,(0),null);
var plugin = cljs.core.nth.call(null,vec__28362,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28364 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28358,chunk__28359,count__28360,i__28361,pl_28364,vec__28362,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28364.call(null,msg_hist);
});})(seq__28358,chunk__28359,count__28360,i__28361,pl_28364,vec__28362,k,plugin))
);
} else {
}

var G__28365 = seq__28358;
var G__28366 = chunk__28359;
var G__28367 = count__28360;
var G__28368 = (i__28361 + (1));
seq__28358 = G__28365;
chunk__28359 = G__28366;
count__28360 = G__28367;
i__28361 = G__28368;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28358);
if(temp__4126__auto__){
var seq__28358__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28358__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__28358__$1);
var G__28369 = cljs.core.chunk_rest.call(null,seq__28358__$1);
var G__28370 = c__18901__auto__;
var G__28371 = cljs.core.count.call(null,c__18901__auto__);
var G__28372 = (0);
seq__28358 = G__28369;
chunk__28359 = G__28370;
count__28360 = G__28371;
i__28361 = G__28372;
continue;
} else {
var vec__28363 = cljs.core.first.call(null,seq__28358__$1);
var k = cljs.core.nth.call(null,vec__28363,(0),null);
var plugin = cljs.core.nth.call(null,vec__28363,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28373 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28358,chunk__28359,count__28360,i__28361,pl_28373,vec__28363,k,plugin,seq__28358__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28373.call(null,msg_hist);
});})(seq__28358,chunk__28359,count__28360,i__28361,pl_28373,vec__28363,k,plugin,seq__28358__$1,temp__4126__auto__))
);
} else {
}

var G__28374 = cljs.core.next.call(null,seq__28358__$1);
var G__28375 = null;
var G__28376 = (0);
var G__28377 = (0);
seq__28358 = G__28374;
chunk__28359 = G__28375;
count__28360 = G__28376;
i__28361 = G__28377;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28379 = arguments.length;
switch (G__28379) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19156__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19156__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28382){
var map__28383 = p__28382;
var map__28383__$1 = ((cljs.core.seq_QMARK_.call(null,map__28383))?cljs.core.apply.call(null,cljs.core.hash_map,map__28383):map__28383);
var opts = map__28383__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28381){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28381));
});

//# sourceMappingURL=client.js.map?rel=1434173012163