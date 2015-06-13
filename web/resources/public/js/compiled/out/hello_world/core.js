// Compiled by ClojureScript 0.0-3211 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('json_html.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof hello_world.core.app_state !== 'undefined'){
} else {
hello_world.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
hello_world.core.handler = (function hello_world$core$handler(p__22148){
var vec__22150 = p__22148;
var response = cljs.core.nth.call(null,vec__22150,(0),null);
var error = cljs.core.nth.call(null,vec__22150,(1),null);
cljs.core.reset_BANG_.call(null,hello_world.core.app_state,response);

return console.log([cljs.core.str(response)].join(''));
});
hello_world.core.error_handler = (function hello_world$core$error_handler(p__22151){
var map__22153 = p__22151;
var map__22153__$1 = ((cljs.core.seq_QMARK_.call(null,map__22153))?cljs.core.apply.call(null,cljs.core.hash_map,map__22153):map__22153);
var status_text = cljs.core.get.call(null,map__22153__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__22153__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
hello_world.core.query = (function hello_world$core$query(name,params){
return ajax.core.GET.call(null,"query",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"handler","handler",-195596612),hello_world.core.handler], null));
});
hello_world.core.query.call(null,new cljs.core.Keyword(null,"get-dept-list","get-dept-list",-703347172),null);
hello_world.core.row = (function hello_world$core$row(label,input){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
hello_world.core.form_template = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),hello_world.core.row.call(null,"first name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dept_name","dept_name",8765604)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"errors.dept_name","errors.dept_name",1353440240)], null)], null)], null)], null)], null);
hello_world.core.add_department = (function hello_world$core$add_department(dept_map){
return ajax.core.POST.call(null,"/department",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),dept_map,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return hello_world.core.query.call(null,new cljs.core.Keyword(null,"get-dept-list","get-dept-list",-703347172),null);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),hello_world.core.error_handler], null));
});
hello_world.core.connect_figo = (function hello_world$core$connect_figo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Conenct"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://api.figo.me/auth/code?response_type=code&client_id=CaESKmC8MAhNpDe5rvmWnSkRE_7pkkVIIgMwclgzGcQY&scope=accounts%3Dro+balance%3Dro+transactions%3Dro&state=xqD6gjWygsBlF0uB"], null),"Connect Figo"], null)], null)], null);
});
hello_world.core.form = (function hello_world$core$form(){
var doc = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"New "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,hello_world.core.form_template,doc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (doc){
return (function (){
if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dept_name","dept_name",8765604)], null)))){
return cljs.core.swap_BANG_.call(null,doc,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"dept_name","dept_name",8765604)], null),"dept name is empty");
} else {
return hello_world.core.add_department.call(null,cljs.core.deref.call(null,doc));
}
});})(doc))
], null),"Add department"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Document State"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_html.core.edn__GT_hiccup,cljs.core.deref.call(null,doc)], null)], null);
});
;})(doc))
});
hello_world.core.dept_list = (function hello_world$core$dept_list(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"List"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_html.core.edn__GT_hiccup,cljs.core.deref.call(null,hello_world.core.app_state)], null)], null);
});
hello_world.core.dept_app = (function hello_world$core$dept_app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"App view  "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.connect_figo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.dept_list], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.dept_app], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1434183447917