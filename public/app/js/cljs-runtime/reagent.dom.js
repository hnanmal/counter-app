goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11751 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11752 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11752);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11756 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11757 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11757);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11756);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11751);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11770 = arguments.length;
switch (G__11770) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11781 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11781,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11781,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11791_11810 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11792_11811 = null;
var count__11793_11812 = (0);
var i__11794_11813 = (0);
while(true){
if((i__11794_11813 < count__11793_11812)){
var vec__11801_11814 = chunk__11792_11811.cljs$core$IIndexed$_nth$arity$2(null,i__11794_11813);
var container_11815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11801_11814,(0),null);
var comp_11816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11801_11814,(1),null);
reagent.dom.re_render_component(comp_11816,container_11815);


var G__11817 = seq__11791_11810;
var G__11818 = chunk__11792_11811;
var G__11819 = count__11793_11812;
var G__11820 = (i__11794_11813 + (1));
seq__11791_11810 = G__11817;
chunk__11792_11811 = G__11818;
count__11793_11812 = G__11819;
i__11794_11813 = G__11820;
continue;
} else {
var temp__5804__auto___11821 = cljs.core.seq(seq__11791_11810);
if(temp__5804__auto___11821){
var seq__11791_11822__$1 = temp__5804__auto___11821;
if(cljs.core.chunked_seq_QMARK_(seq__11791_11822__$1)){
var c__5568__auto___11823 = cljs.core.chunk_first(seq__11791_11822__$1);
var G__11824 = cljs.core.chunk_rest(seq__11791_11822__$1);
var G__11825 = c__5568__auto___11823;
var G__11826 = cljs.core.count(c__5568__auto___11823);
var G__11827 = (0);
seq__11791_11810 = G__11824;
chunk__11792_11811 = G__11825;
count__11793_11812 = G__11826;
i__11794_11813 = G__11827;
continue;
} else {
var vec__11804_11828 = cljs.core.first(seq__11791_11822__$1);
var container_11829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11804_11828,(0),null);
var comp_11830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11804_11828,(1),null);
reagent.dom.re_render_component(comp_11830,container_11829);


var G__11831 = cljs.core.next(seq__11791_11822__$1);
var G__11832 = null;
var G__11833 = (0);
var G__11834 = (0);
seq__11791_11810 = G__11831;
chunk__11792_11811 = G__11832;
count__11793_11812 = G__11833;
i__11794_11813 = G__11834;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
