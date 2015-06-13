// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28639_28651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28640_28652 = null;
var count__28641_28653 = (0);
var i__28642_28654 = (0);
while(true){
if((i__28642_28654 < count__28641_28653)){
var f_28655 = cljs.core._nth.call(null,chunk__28640_28652,i__28642_28654);
cljs.core.println.call(null,"  ",f_28655);

var G__28656 = seq__28639_28651;
var G__28657 = chunk__28640_28652;
var G__28658 = count__28641_28653;
var G__28659 = (i__28642_28654 + (1));
seq__28639_28651 = G__28656;
chunk__28640_28652 = G__28657;
count__28641_28653 = G__28658;
i__28642_28654 = G__28659;
continue;
} else {
var temp__4126__auto___28660 = cljs.core.seq.call(null,seq__28639_28651);
if(temp__4126__auto___28660){
var seq__28639_28661__$1 = temp__4126__auto___28660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28639_28661__$1)){
var c__18901__auto___28662 = cljs.core.chunk_first.call(null,seq__28639_28661__$1);
var G__28663 = cljs.core.chunk_rest.call(null,seq__28639_28661__$1);
var G__28664 = c__18901__auto___28662;
var G__28665 = cljs.core.count.call(null,c__18901__auto___28662);
var G__28666 = (0);
seq__28639_28651 = G__28663;
chunk__28640_28652 = G__28664;
count__28641_28653 = G__28665;
i__28642_28654 = G__28666;
continue;
} else {
var f_28667 = cljs.core.first.call(null,seq__28639_28661__$1);
cljs.core.println.call(null,"  ",f_28667);

var G__28668 = cljs.core.next.call(null,seq__28639_28661__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28639_28651 = G__28668;
chunk__28640_28652 = G__28669;
count__28641_28653 = G__28670;
i__28642_28654 = G__28671;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18116__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28643 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28644 = null;
var count__28645 = (0);
var i__28646 = (0);
while(true){
if((i__28646 < count__28645)){
var vec__28647 = cljs.core._nth.call(null,chunk__28644,i__28646);
var name = cljs.core.nth.call(null,vec__28647,(0),null);
var map__28648 = cljs.core.nth.call(null,vec__28647,(1),null);
var map__28648__$1 = ((cljs.core.seq_QMARK_.call(null,map__28648))?cljs.core.apply.call(null,cljs.core.hash_map,map__28648):map__28648);
var arglists = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28648__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28672 = seq__28643;
var G__28673 = chunk__28644;
var G__28674 = count__28645;
var G__28675 = (i__28646 + (1));
seq__28643 = G__28672;
chunk__28644 = G__28673;
count__28645 = G__28674;
i__28646 = G__28675;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28643);
if(temp__4126__auto__){
var seq__28643__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28643__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__28643__$1);
var G__28676 = cljs.core.chunk_rest.call(null,seq__28643__$1);
var G__28677 = c__18901__auto__;
var G__28678 = cljs.core.count.call(null,c__18901__auto__);
var G__28679 = (0);
seq__28643 = G__28676;
chunk__28644 = G__28677;
count__28645 = G__28678;
i__28646 = G__28679;
continue;
} else {
var vec__28649 = cljs.core.first.call(null,seq__28643__$1);
var name = cljs.core.nth.call(null,vec__28649,(0),null);
var map__28650 = cljs.core.nth.call(null,vec__28649,(1),null);
var map__28650__$1 = ((cljs.core.seq_QMARK_.call(null,map__28650))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var arglists = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28680 = cljs.core.next.call(null,seq__28643__$1);
var G__28681 = null;
var G__28682 = (0);
var G__28683 = (0);
seq__28643 = G__28680;
chunk__28644 = G__28681;
count__28645 = G__28682;
i__28646 = G__28683;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1434173012813