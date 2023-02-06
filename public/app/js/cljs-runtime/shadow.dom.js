goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18480 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18480(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18481 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18481(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16811 = coll;
var G__16812 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16811,G__16812) : shadow.dom.lazy_native_coll_seq.call(null,G__16811,G__16812));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16892 = arguments.length;
switch (G__16892) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16902 = arguments.length;
switch (G__16902) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16912 = arguments.length;
switch (G__16912) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16927 = arguments.length;
switch (G__16927) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16946 = arguments.length;
switch (G__16946) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16977 = arguments.length;
switch (G__16977) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16994){if((e16994 instanceof Object)){
var e = e16994;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16994;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17010 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17011 = null;
var count__17012 = (0);
var i__17013 = (0);
while(true){
if((i__17013 < count__17012)){
var el = chunk__17011.cljs$core$IIndexed$_nth$arity$2(null,i__17013);
var handler_18554__$1 = ((function (seq__17010,chunk__17011,count__17012,i__17013,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17010,chunk__17011,count__17012,i__17013,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18554__$1);


var G__18559 = seq__17010;
var G__18560 = chunk__17011;
var G__18561 = count__17012;
var G__18562 = (i__17013 + (1));
seq__17010 = G__18559;
chunk__17011 = G__18560;
count__17012 = G__18561;
i__17013 = G__18562;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17010);
if(temp__5804__auto__){
var seq__17010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17010__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17010__$1);
var G__18563 = cljs.core.chunk_rest(seq__17010__$1);
var G__18564 = c__5568__auto__;
var G__18565 = cljs.core.count(c__5568__auto__);
var G__18566 = (0);
seq__17010 = G__18563;
chunk__17011 = G__18564;
count__17012 = G__18565;
i__17013 = G__18566;
continue;
} else {
var el = cljs.core.first(seq__17010__$1);
var handler_18567__$1 = ((function (seq__17010,chunk__17011,count__17012,i__17013,el,seq__17010__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17010,chunk__17011,count__17012,i__17013,el,seq__17010__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18567__$1);


var G__18568 = cljs.core.next(seq__17010__$1);
var G__18569 = null;
var G__18570 = (0);
var G__18571 = (0);
seq__17010 = G__18568;
chunk__17011 = G__18569;
count__17012 = G__18570;
i__17013 = G__18571;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17054 = arguments.length;
switch (G__17054) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17100 = cljs.core.seq(events);
var chunk__17101 = null;
var count__17102 = (0);
var i__17103 = (0);
while(true){
if((i__17103 < count__17102)){
var vec__17152 = chunk__17101.cljs$core$IIndexed$_nth$arity$2(null,i__17103);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17152,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18573 = seq__17100;
var G__18574 = chunk__17101;
var G__18575 = count__17102;
var G__18576 = (i__17103 + (1));
seq__17100 = G__18573;
chunk__17101 = G__18574;
count__17102 = G__18575;
i__17103 = G__18576;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17100);
if(temp__5804__auto__){
var seq__17100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17100__$1);
var G__18584 = cljs.core.chunk_rest(seq__17100__$1);
var G__18585 = c__5568__auto__;
var G__18586 = cljs.core.count(c__5568__auto__);
var G__18587 = (0);
seq__17100 = G__18584;
chunk__17101 = G__18585;
count__17102 = G__18586;
i__17103 = G__18587;
continue;
} else {
var vec__17166 = cljs.core.first(seq__17100__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18594 = cljs.core.next(seq__17100__$1);
var G__18595 = null;
var G__18596 = (0);
var G__18597 = (0);
seq__17100 = G__18594;
chunk__17101 = G__18595;
count__17102 = G__18596;
i__17103 = G__18597;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17184 = cljs.core.seq(styles);
var chunk__17185 = null;
var count__17186 = (0);
var i__17187 = (0);
while(true){
if((i__17187 < count__17186)){
var vec__17220 = chunk__17185.cljs$core$IIndexed$_nth$arity$2(null,i__17187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18611 = seq__17184;
var G__18612 = chunk__17185;
var G__18613 = count__17186;
var G__18614 = (i__17187 + (1));
seq__17184 = G__18611;
chunk__17185 = G__18612;
count__17186 = G__18613;
i__17187 = G__18614;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17184);
if(temp__5804__auto__){
var seq__17184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17184__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17184__$1);
var G__18615 = cljs.core.chunk_rest(seq__17184__$1);
var G__18616 = c__5568__auto__;
var G__18617 = cljs.core.count(c__5568__auto__);
var G__18618 = (0);
seq__17184 = G__18615;
chunk__17185 = G__18616;
count__17186 = G__18617;
i__17187 = G__18618;
continue;
} else {
var vec__17227 = cljs.core.first(seq__17184__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17227,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18623 = cljs.core.next(seq__17184__$1);
var G__18624 = null;
var G__18625 = (0);
var G__18626 = (0);
seq__17184 = G__18623;
chunk__17185 = G__18624;
count__17186 = G__18625;
i__17187 = G__18626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17231_18638 = key;
var G__17231_18639__$1 = (((G__17231_18638 instanceof cljs.core.Keyword))?G__17231_18638.fqn:null);
switch (G__17231_18639__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18663 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18663,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18663,"aria-");
}
})())){
el.setAttribute(ks_18663,value);
} else {
(el[ks_18663] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17259){
var map__17260 = p__17259;
var map__17260__$1 = cljs.core.__destructure_map(map__17260);
var props = map__17260__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17260__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17261 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17264 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17264,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17264;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17268 = arguments.length;
switch (G__17268) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17284){
var vec__17285 = p__17284;
var seq__17286 = cljs.core.seq(vec__17285);
var first__17287 = cljs.core.first(seq__17286);
var seq__17286__$1 = cljs.core.next(seq__17286);
var nn = first__17287;
var first__17287__$1 = cljs.core.first(seq__17286__$1);
var seq__17286__$2 = cljs.core.next(seq__17286__$1);
var np = first__17287__$1;
var nc = seq__17286__$2;
var node = vec__17285;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17292 = nn;
var G__17293 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17292,G__17293) : create_fn.call(null,G__17292,G__17293));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17295 = nn;
var G__17296 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17295,G__17296) : create_fn.call(null,G__17295,G__17296));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17303 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17303,(1),null);
var seq__17308_18694 = cljs.core.seq(node_children);
var chunk__17309_18695 = null;
var count__17310_18696 = (0);
var i__17311_18697 = (0);
while(true){
if((i__17311_18697 < count__17310_18696)){
var child_struct_18698 = chunk__17309_18695.cljs$core$IIndexed$_nth$arity$2(null,i__17311_18697);
var children_18699 = shadow.dom.dom_node(child_struct_18698);
if(cljs.core.seq_QMARK_(children_18699)){
var seq__17382_18700 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18699));
var chunk__17384_18701 = null;
var count__17385_18702 = (0);
var i__17386_18703 = (0);
while(true){
if((i__17386_18703 < count__17385_18702)){
var child_18704 = chunk__17384_18701.cljs$core$IIndexed$_nth$arity$2(null,i__17386_18703);
if(cljs.core.truth_(child_18704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18704);


var G__18705 = seq__17382_18700;
var G__18707 = chunk__17384_18701;
var G__18708 = count__17385_18702;
var G__18709 = (i__17386_18703 + (1));
seq__17382_18700 = G__18705;
chunk__17384_18701 = G__18707;
count__17385_18702 = G__18708;
i__17386_18703 = G__18709;
continue;
} else {
var G__18710 = seq__17382_18700;
var G__18711 = chunk__17384_18701;
var G__18712 = count__17385_18702;
var G__18713 = (i__17386_18703 + (1));
seq__17382_18700 = G__18710;
chunk__17384_18701 = G__18711;
count__17385_18702 = G__18712;
i__17386_18703 = G__18713;
continue;
}
} else {
var temp__5804__auto___18715 = cljs.core.seq(seq__17382_18700);
if(temp__5804__auto___18715){
var seq__17382_18716__$1 = temp__5804__auto___18715;
if(cljs.core.chunked_seq_QMARK_(seq__17382_18716__$1)){
var c__5568__auto___18717 = cljs.core.chunk_first(seq__17382_18716__$1);
var G__18718 = cljs.core.chunk_rest(seq__17382_18716__$1);
var G__18719 = c__5568__auto___18717;
var G__18720 = cljs.core.count(c__5568__auto___18717);
var G__18721 = (0);
seq__17382_18700 = G__18718;
chunk__17384_18701 = G__18719;
count__17385_18702 = G__18720;
i__17386_18703 = G__18721;
continue;
} else {
var child_18722 = cljs.core.first(seq__17382_18716__$1);
if(cljs.core.truth_(child_18722)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18722);


var G__18723 = cljs.core.next(seq__17382_18716__$1);
var G__18724 = null;
var G__18725 = (0);
var G__18726 = (0);
seq__17382_18700 = G__18723;
chunk__17384_18701 = G__18724;
count__17385_18702 = G__18725;
i__17386_18703 = G__18726;
continue;
} else {
var G__18727 = cljs.core.next(seq__17382_18716__$1);
var G__18728 = null;
var G__18729 = (0);
var G__18730 = (0);
seq__17382_18700 = G__18727;
chunk__17384_18701 = G__18728;
count__17385_18702 = G__18729;
i__17386_18703 = G__18730;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18699);
}


var G__18731 = seq__17308_18694;
var G__18732 = chunk__17309_18695;
var G__18733 = count__17310_18696;
var G__18734 = (i__17311_18697 + (1));
seq__17308_18694 = G__18731;
chunk__17309_18695 = G__18732;
count__17310_18696 = G__18733;
i__17311_18697 = G__18734;
continue;
} else {
var temp__5804__auto___18735 = cljs.core.seq(seq__17308_18694);
if(temp__5804__auto___18735){
var seq__17308_18736__$1 = temp__5804__auto___18735;
if(cljs.core.chunked_seq_QMARK_(seq__17308_18736__$1)){
var c__5568__auto___18737 = cljs.core.chunk_first(seq__17308_18736__$1);
var G__18738 = cljs.core.chunk_rest(seq__17308_18736__$1);
var G__18739 = c__5568__auto___18737;
var G__18740 = cljs.core.count(c__5568__auto___18737);
var G__18741 = (0);
seq__17308_18694 = G__18738;
chunk__17309_18695 = G__18739;
count__17310_18696 = G__18740;
i__17311_18697 = G__18741;
continue;
} else {
var child_struct_18742 = cljs.core.first(seq__17308_18736__$1);
var children_18743 = shadow.dom.dom_node(child_struct_18742);
if(cljs.core.seq_QMARK_(children_18743)){
var seq__17438_18744 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18743));
var chunk__17440_18745 = null;
var count__17441_18746 = (0);
var i__17442_18747 = (0);
while(true){
if((i__17442_18747 < count__17441_18746)){
var child_18748 = chunk__17440_18745.cljs$core$IIndexed$_nth$arity$2(null,i__17442_18747);
if(cljs.core.truth_(child_18748)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18748);


var G__18749 = seq__17438_18744;
var G__18750 = chunk__17440_18745;
var G__18751 = count__17441_18746;
var G__18752 = (i__17442_18747 + (1));
seq__17438_18744 = G__18749;
chunk__17440_18745 = G__18750;
count__17441_18746 = G__18751;
i__17442_18747 = G__18752;
continue;
} else {
var G__18753 = seq__17438_18744;
var G__18754 = chunk__17440_18745;
var G__18755 = count__17441_18746;
var G__18756 = (i__17442_18747 + (1));
seq__17438_18744 = G__18753;
chunk__17440_18745 = G__18754;
count__17441_18746 = G__18755;
i__17442_18747 = G__18756;
continue;
}
} else {
var temp__5804__auto___18758__$1 = cljs.core.seq(seq__17438_18744);
if(temp__5804__auto___18758__$1){
var seq__17438_18759__$1 = temp__5804__auto___18758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17438_18759__$1)){
var c__5568__auto___18760 = cljs.core.chunk_first(seq__17438_18759__$1);
var G__18761 = cljs.core.chunk_rest(seq__17438_18759__$1);
var G__18762 = c__5568__auto___18760;
var G__18763 = cljs.core.count(c__5568__auto___18760);
var G__18764 = (0);
seq__17438_18744 = G__18761;
chunk__17440_18745 = G__18762;
count__17441_18746 = G__18763;
i__17442_18747 = G__18764;
continue;
} else {
var child_18765 = cljs.core.first(seq__17438_18759__$1);
if(cljs.core.truth_(child_18765)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18765);


var G__18766 = cljs.core.next(seq__17438_18759__$1);
var G__18767 = null;
var G__18768 = (0);
var G__18769 = (0);
seq__17438_18744 = G__18766;
chunk__17440_18745 = G__18767;
count__17441_18746 = G__18768;
i__17442_18747 = G__18769;
continue;
} else {
var G__18772 = cljs.core.next(seq__17438_18759__$1);
var G__18773 = null;
var G__18774 = (0);
var G__18775 = (0);
seq__17438_18744 = G__18772;
chunk__17440_18745 = G__18773;
count__17441_18746 = G__18774;
i__17442_18747 = G__18775;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18743);
}


var G__18777 = cljs.core.next(seq__17308_18736__$1);
var G__18778 = null;
var G__18779 = (0);
var G__18780 = (0);
seq__17308_18694 = G__18777;
chunk__17309_18695 = G__18778;
count__17310_18696 = G__18779;
i__17311_18697 = G__18780;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17526 = cljs.core.seq(node);
var chunk__17527 = null;
var count__17528 = (0);
var i__17529 = (0);
while(true){
if((i__17529 < count__17528)){
var n = chunk__17527.cljs$core$IIndexed$_nth$arity$2(null,i__17529);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18789 = seq__17526;
var G__18790 = chunk__17527;
var G__18791 = count__17528;
var G__18792 = (i__17529 + (1));
seq__17526 = G__18789;
chunk__17527 = G__18790;
count__17528 = G__18791;
i__17529 = G__18792;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17526);
if(temp__5804__auto__){
var seq__17526__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17526__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17526__$1);
var G__18793 = cljs.core.chunk_rest(seq__17526__$1);
var G__18794 = c__5568__auto__;
var G__18795 = cljs.core.count(c__5568__auto__);
var G__18796 = (0);
seq__17526 = G__18793;
chunk__17527 = G__18794;
count__17528 = G__18795;
i__17529 = G__18796;
continue;
} else {
var n = cljs.core.first(seq__17526__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18797 = cljs.core.next(seq__17526__$1);
var G__18798 = null;
var G__18799 = (0);
var G__18800 = (0);
seq__17526 = G__18797;
chunk__17527 = G__18798;
count__17528 = G__18799;
i__17529 = G__18800;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17595 = arguments.length;
switch (G__17595) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17606 = arguments.length;
switch (G__17606) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17640 = arguments.length;
switch (G__17640) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18816 = arguments.length;
var i__5770__auto___18817 = (0);
while(true){
if((i__5770__auto___18817 < len__5769__auto___18816)){
args__5775__auto__.push((arguments[i__5770__auto___18817]));

var G__18819 = (i__5770__auto___18817 + (1));
i__5770__auto___18817 = G__18819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17689_18820 = cljs.core.seq(nodes);
var chunk__17690_18821 = null;
var count__17691_18822 = (0);
var i__17692_18823 = (0);
while(true){
if((i__17692_18823 < count__17691_18822)){
var node_18824 = chunk__17690_18821.cljs$core$IIndexed$_nth$arity$2(null,i__17692_18823);
fragment.appendChild(shadow.dom._to_dom(node_18824));


var G__18825 = seq__17689_18820;
var G__18826 = chunk__17690_18821;
var G__18827 = count__17691_18822;
var G__18828 = (i__17692_18823 + (1));
seq__17689_18820 = G__18825;
chunk__17690_18821 = G__18826;
count__17691_18822 = G__18827;
i__17692_18823 = G__18828;
continue;
} else {
var temp__5804__auto___18829 = cljs.core.seq(seq__17689_18820);
if(temp__5804__auto___18829){
var seq__17689_18830__$1 = temp__5804__auto___18829;
if(cljs.core.chunked_seq_QMARK_(seq__17689_18830__$1)){
var c__5568__auto___18831 = cljs.core.chunk_first(seq__17689_18830__$1);
var G__18832 = cljs.core.chunk_rest(seq__17689_18830__$1);
var G__18833 = c__5568__auto___18831;
var G__18834 = cljs.core.count(c__5568__auto___18831);
var G__18835 = (0);
seq__17689_18820 = G__18832;
chunk__17690_18821 = G__18833;
count__17691_18822 = G__18834;
i__17692_18823 = G__18835;
continue;
} else {
var node_18836 = cljs.core.first(seq__17689_18830__$1);
fragment.appendChild(shadow.dom._to_dom(node_18836));


var G__18837 = cljs.core.next(seq__17689_18830__$1);
var G__18838 = null;
var G__18839 = (0);
var G__18840 = (0);
seq__17689_18820 = G__18837;
chunk__17690_18821 = G__18838;
count__17691_18822 = G__18839;
i__17692_18823 = G__18840;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17676){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17676));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17717_18841 = cljs.core.seq(scripts);
var chunk__17718_18842 = null;
var count__17719_18843 = (0);
var i__17720_18844 = (0);
while(true){
if((i__17720_18844 < count__17719_18843)){
var vec__17747_18846 = chunk__17718_18842.cljs$core$IIndexed$_nth$arity$2(null,i__17720_18844);
var script_tag_18847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747_18846,(0),null);
var script_body_18848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17747_18846,(1),null);
eval(script_body_18848);


var G__18849 = seq__17717_18841;
var G__18850 = chunk__17718_18842;
var G__18851 = count__17719_18843;
var G__18852 = (i__17720_18844 + (1));
seq__17717_18841 = G__18849;
chunk__17718_18842 = G__18850;
count__17719_18843 = G__18851;
i__17720_18844 = G__18852;
continue;
} else {
var temp__5804__auto___18853 = cljs.core.seq(seq__17717_18841);
if(temp__5804__auto___18853){
var seq__17717_18854__$1 = temp__5804__auto___18853;
if(cljs.core.chunked_seq_QMARK_(seq__17717_18854__$1)){
var c__5568__auto___18855 = cljs.core.chunk_first(seq__17717_18854__$1);
var G__18860 = cljs.core.chunk_rest(seq__17717_18854__$1);
var G__18861 = c__5568__auto___18855;
var G__18862 = cljs.core.count(c__5568__auto___18855);
var G__18863 = (0);
seq__17717_18841 = G__18860;
chunk__17718_18842 = G__18861;
count__17719_18843 = G__18862;
i__17720_18844 = G__18863;
continue;
} else {
var vec__17758_18864 = cljs.core.first(seq__17717_18854__$1);
var script_tag_18865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17758_18864,(0),null);
var script_body_18866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17758_18864,(1),null);
eval(script_body_18866);


var G__18867 = cljs.core.next(seq__17717_18854__$1);
var G__18868 = null;
var G__18869 = (0);
var G__18870 = (0);
seq__17717_18841 = G__18867;
chunk__17718_18842 = G__18868;
count__17719_18843 = G__18869;
i__17720_18844 = G__18870;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17768){
var vec__17770 = p__17768;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17770,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17770,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17798 = arguments.length;
switch (G__17798) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17838 = cljs.core.seq(style_keys);
var chunk__17839 = null;
var count__17840 = (0);
var i__17841 = (0);
while(true){
if((i__17841 < count__17840)){
var it = chunk__17839.cljs$core$IIndexed$_nth$arity$2(null,i__17841);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18885 = seq__17838;
var G__18886 = chunk__17839;
var G__18887 = count__17840;
var G__18888 = (i__17841 + (1));
seq__17838 = G__18885;
chunk__17839 = G__18886;
count__17840 = G__18887;
i__17841 = G__18888;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17838);
if(temp__5804__auto__){
var seq__17838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17838__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17838__$1);
var G__18889 = cljs.core.chunk_rest(seq__17838__$1);
var G__18890 = c__5568__auto__;
var G__18891 = cljs.core.count(c__5568__auto__);
var G__18892 = (0);
seq__17838 = G__18889;
chunk__17839 = G__18890;
count__17840 = G__18891;
i__17841 = G__18892;
continue;
} else {
var it = cljs.core.first(seq__17838__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18893 = cljs.core.next(seq__17838__$1);
var G__18894 = null;
var G__18895 = (0);
var G__18896 = (0);
seq__17838 = G__18893;
chunk__17839 = G__18894;
count__17840 = G__18895;
i__17841 = G__18896;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17857,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17867 = k17857;
var G__17867__$1 = (((G__17867 instanceof cljs.core.Keyword))?G__17867.fqn:null);
switch (G__17867__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17857,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17876){
var vec__17877 = p__17876;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17856){
var self__ = this;
var G__17856__$1 = this;
return (new cljs.core.RecordIter((0),G__17856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17858,other17859){
var self__ = this;
var this17858__$1 = this;
return (((!((other17859 == null)))) && ((((this17858__$1.constructor === other17859.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17858__$1.x,other17859.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17858__$1.y,other17859.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17858__$1.__extmap,other17859.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17857){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17921 = k17857;
var G__17921__$1 = (((G__17921 instanceof cljs.core.Keyword))?G__17921.fqn:null);
switch (G__17921__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17857);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17856){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17922 = cljs.core.keyword_identical_QMARK_;
var expr__17923 = k__5352__auto__;
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17923) : pred__17922.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17923)))){
return (new shadow.dom.Coordinate(G__17856,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17923) : pred__17922.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17923)))){
return (new shadow.dom.Coordinate(self__.x,G__17856,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17856),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17856){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17856,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17860){
var extmap__5385__auto__ = (function (){var G__17954 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17860,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17860)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17954);
} else {
return G__17954;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17860),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17860),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17978,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17992 = k17978;
var G__17992__$1 = (((G__17992 instanceof cljs.core.Keyword))?G__17992.fqn:null);
switch (G__17992__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17978,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18003){
var vec__18005 = p__18003;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17977){
var self__ = this;
var G__17977__$1 = this;
return (new cljs.core.RecordIter((0),G__17977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17979,other17980){
var self__ = this;
var this17979__$1 = this;
return (((!((other17980 == null)))) && ((((this17979__$1.constructor === other17980.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17979__$1.w,other17980.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17979__$1.h,other17980.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17979__$1.__extmap,other17980.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17978){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18031 = k17978;
var G__18031__$1 = (((G__18031 instanceof cljs.core.Keyword))?G__18031.fqn:null);
switch (G__18031__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17978);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17977){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18033 = cljs.core.keyword_identical_QMARK_;
var expr__18034 = k__5352__auto__;
if(cljs.core.truth_((pred__18033.cljs$core$IFn$_invoke$arity$2 ? pred__18033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18034) : pred__18033.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18034)))){
return (new shadow.dom.Size(G__17977,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18033.cljs$core$IFn$_invoke$arity$2 ? pred__18033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18034) : pred__18033.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18034)))){
return (new shadow.dom.Size(self__.w,G__17977,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17977),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17977){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17977,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17983){
var extmap__5385__auto__ = (function (){var G__18062 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17983,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17983)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18062);
} else {
return G__18062;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17983),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17983),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18943 = (i + (1));
var G__18944 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18943;
ret = G__18944;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18126){
var vec__18127 = p__18126;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18140 = arguments.length;
switch (G__18140) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18954 = ps;
var G__18955 = (i + (1));
el__$1 = G__18954;
i = G__18955;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18176 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18176,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18176,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18176,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18183_18965 = cljs.core.seq(props);
var chunk__18184_18966 = null;
var count__18185_18967 = (0);
var i__18186_18968 = (0);
while(true){
if((i__18186_18968 < count__18185_18967)){
var vec__18194_18969 = chunk__18184_18966.cljs$core$IIndexed$_nth$arity$2(null,i__18186_18968);
var k_18970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18194_18969,(0),null);
var v_18971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18194_18969,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18970);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18970),v_18971);


var G__18974 = seq__18183_18965;
var G__18975 = chunk__18184_18966;
var G__18976 = count__18185_18967;
var G__18977 = (i__18186_18968 + (1));
seq__18183_18965 = G__18974;
chunk__18184_18966 = G__18975;
count__18185_18967 = G__18976;
i__18186_18968 = G__18977;
continue;
} else {
var temp__5804__auto___18979 = cljs.core.seq(seq__18183_18965);
if(temp__5804__auto___18979){
var seq__18183_18980__$1 = temp__5804__auto___18979;
if(cljs.core.chunked_seq_QMARK_(seq__18183_18980__$1)){
var c__5568__auto___18981 = cljs.core.chunk_first(seq__18183_18980__$1);
var G__18983 = cljs.core.chunk_rest(seq__18183_18980__$1);
var G__18984 = c__5568__auto___18981;
var G__18985 = cljs.core.count(c__5568__auto___18981);
var G__18986 = (0);
seq__18183_18965 = G__18983;
chunk__18184_18966 = G__18984;
count__18185_18967 = G__18985;
i__18186_18968 = G__18986;
continue;
} else {
var vec__18202_18987 = cljs.core.first(seq__18183_18980__$1);
var k_18988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18202_18987,(0),null);
var v_18989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18202_18987,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18988);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18988),v_18989);


var G__19002 = cljs.core.next(seq__18183_18980__$1);
var G__19003 = null;
var G__19004 = (0);
var G__19005 = (0);
seq__18183_18965 = G__19002;
chunk__18184_18966 = G__19003;
count__18185_18967 = G__19004;
i__18186_18968 = G__19005;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18211 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18211,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18211,(1),null);
var seq__18214_19006 = cljs.core.seq(node_children);
var chunk__18216_19007 = null;
var count__18217_19008 = (0);
var i__18218_19009 = (0);
while(true){
if((i__18218_19009 < count__18217_19008)){
var child_struct_19010 = chunk__18216_19007.cljs$core$IIndexed$_nth$arity$2(null,i__18218_19009);
if((!((child_struct_19010 == null)))){
if(typeof child_struct_19010 === 'string'){
var text_19011 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19011),child_struct_19010].join(''));
} else {
var children_19014 = shadow.dom.svg_node(child_struct_19010);
if(cljs.core.seq_QMARK_(children_19014)){
var seq__18271_19015 = cljs.core.seq(children_19014);
var chunk__18273_19016 = null;
var count__18274_19017 = (0);
var i__18275_19018 = (0);
while(true){
if((i__18275_19018 < count__18274_19017)){
var child_19020 = chunk__18273_19016.cljs$core$IIndexed$_nth$arity$2(null,i__18275_19018);
if(cljs.core.truth_(child_19020)){
node.appendChild(child_19020);


var G__19021 = seq__18271_19015;
var G__19022 = chunk__18273_19016;
var G__19023 = count__18274_19017;
var G__19024 = (i__18275_19018 + (1));
seq__18271_19015 = G__19021;
chunk__18273_19016 = G__19022;
count__18274_19017 = G__19023;
i__18275_19018 = G__19024;
continue;
} else {
var G__19025 = seq__18271_19015;
var G__19026 = chunk__18273_19016;
var G__19027 = count__18274_19017;
var G__19028 = (i__18275_19018 + (1));
seq__18271_19015 = G__19025;
chunk__18273_19016 = G__19026;
count__18274_19017 = G__19027;
i__18275_19018 = G__19028;
continue;
}
} else {
var temp__5804__auto___19029 = cljs.core.seq(seq__18271_19015);
if(temp__5804__auto___19029){
var seq__18271_19030__$1 = temp__5804__auto___19029;
if(cljs.core.chunked_seq_QMARK_(seq__18271_19030__$1)){
var c__5568__auto___19033 = cljs.core.chunk_first(seq__18271_19030__$1);
var G__19034 = cljs.core.chunk_rest(seq__18271_19030__$1);
var G__19035 = c__5568__auto___19033;
var G__19036 = cljs.core.count(c__5568__auto___19033);
var G__19037 = (0);
seq__18271_19015 = G__19034;
chunk__18273_19016 = G__19035;
count__18274_19017 = G__19036;
i__18275_19018 = G__19037;
continue;
} else {
var child_19039 = cljs.core.first(seq__18271_19030__$1);
if(cljs.core.truth_(child_19039)){
node.appendChild(child_19039);


var G__19040 = cljs.core.next(seq__18271_19030__$1);
var G__19041 = null;
var G__19042 = (0);
var G__19043 = (0);
seq__18271_19015 = G__19040;
chunk__18273_19016 = G__19041;
count__18274_19017 = G__19042;
i__18275_19018 = G__19043;
continue;
} else {
var G__19044 = cljs.core.next(seq__18271_19030__$1);
var G__19045 = null;
var G__19046 = (0);
var G__19047 = (0);
seq__18271_19015 = G__19044;
chunk__18273_19016 = G__19045;
count__18274_19017 = G__19046;
i__18275_19018 = G__19047;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19014);
}
}


var G__19048 = seq__18214_19006;
var G__19049 = chunk__18216_19007;
var G__19050 = count__18217_19008;
var G__19051 = (i__18218_19009 + (1));
seq__18214_19006 = G__19048;
chunk__18216_19007 = G__19049;
count__18217_19008 = G__19050;
i__18218_19009 = G__19051;
continue;
} else {
var G__19052 = seq__18214_19006;
var G__19053 = chunk__18216_19007;
var G__19054 = count__18217_19008;
var G__19055 = (i__18218_19009 + (1));
seq__18214_19006 = G__19052;
chunk__18216_19007 = G__19053;
count__18217_19008 = G__19054;
i__18218_19009 = G__19055;
continue;
}
} else {
var temp__5804__auto___19056 = cljs.core.seq(seq__18214_19006);
if(temp__5804__auto___19056){
var seq__18214_19057__$1 = temp__5804__auto___19056;
if(cljs.core.chunked_seq_QMARK_(seq__18214_19057__$1)){
var c__5568__auto___19058 = cljs.core.chunk_first(seq__18214_19057__$1);
var G__19060 = cljs.core.chunk_rest(seq__18214_19057__$1);
var G__19061 = c__5568__auto___19058;
var G__19062 = cljs.core.count(c__5568__auto___19058);
var G__19063 = (0);
seq__18214_19006 = G__19060;
chunk__18216_19007 = G__19061;
count__18217_19008 = G__19062;
i__18218_19009 = G__19063;
continue;
} else {
var child_struct_19064 = cljs.core.first(seq__18214_19057__$1);
if((!((child_struct_19064 == null)))){
if(typeof child_struct_19064 === 'string'){
var text_19065 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19065),child_struct_19064].join(''));
} else {
var children_19069 = shadow.dom.svg_node(child_struct_19064);
if(cljs.core.seq_QMARK_(children_19069)){
var seq__18307_19070 = cljs.core.seq(children_19069);
var chunk__18309_19071 = null;
var count__18310_19072 = (0);
var i__18311_19073 = (0);
while(true){
if((i__18311_19073 < count__18310_19072)){
var child_19076 = chunk__18309_19071.cljs$core$IIndexed$_nth$arity$2(null,i__18311_19073);
if(cljs.core.truth_(child_19076)){
node.appendChild(child_19076);


var G__19077 = seq__18307_19070;
var G__19078 = chunk__18309_19071;
var G__19079 = count__18310_19072;
var G__19080 = (i__18311_19073 + (1));
seq__18307_19070 = G__19077;
chunk__18309_19071 = G__19078;
count__18310_19072 = G__19079;
i__18311_19073 = G__19080;
continue;
} else {
var G__19081 = seq__18307_19070;
var G__19082 = chunk__18309_19071;
var G__19083 = count__18310_19072;
var G__19084 = (i__18311_19073 + (1));
seq__18307_19070 = G__19081;
chunk__18309_19071 = G__19082;
count__18310_19072 = G__19083;
i__18311_19073 = G__19084;
continue;
}
} else {
var temp__5804__auto___19085__$1 = cljs.core.seq(seq__18307_19070);
if(temp__5804__auto___19085__$1){
var seq__18307_19088__$1 = temp__5804__auto___19085__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18307_19088__$1)){
var c__5568__auto___19089 = cljs.core.chunk_first(seq__18307_19088__$1);
var G__19090 = cljs.core.chunk_rest(seq__18307_19088__$1);
var G__19091 = c__5568__auto___19089;
var G__19092 = cljs.core.count(c__5568__auto___19089);
var G__19093 = (0);
seq__18307_19070 = G__19090;
chunk__18309_19071 = G__19091;
count__18310_19072 = G__19092;
i__18311_19073 = G__19093;
continue;
} else {
var child_19094 = cljs.core.first(seq__18307_19088__$1);
if(cljs.core.truth_(child_19094)){
node.appendChild(child_19094);


var G__19095 = cljs.core.next(seq__18307_19088__$1);
var G__19096 = null;
var G__19097 = (0);
var G__19098 = (0);
seq__18307_19070 = G__19095;
chunk__18309_19071 = G__19096;
count__18310_19072 = G__19097;
i__18311_19073 = G__19098;
continue;
} else {
var G__19099 = cljs.core.next(seq__18307_19088__$1);
var G__19100 = null;
var G__19101 = (0);
var G__19102 = (0);
seq__18307_19070 = G__19099;
chunk__18309_19071 = G__19100;
count__18310_19072 = G__19101;
i__18311_19073 = G__19102;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19069);
}
}


var G__19103 = cljs.core.next(seq__18214_19057__$1);
var G__19104 = null;
var G__19105 = (0);
var G__19106 = (0);
seq__18214_19006 = G__19103;
chunk__18216_19007 = G__19104;
count__18217_19008 = G__19105;
i__18218_19009 = G__19106;
continue;
} else {
var G__19107 = cljs.core.next(seq__18214_19057__$1);
var G__19108 = null;
var G__19109 = (0);
var G__19110 = (0);
seq__18214_19006 = G__19107;
chunk__18216_19007 = G__19108;
count__18217_19008 = G__19109;
i__18218_19009 = G__19110;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19116 = arguments.length;
var i__5770__auto___19118 = (0);
while(true){
if((i__5770__auto___19118 < len__5769__auto___19116)){
args__5775__auto__.push((arguments[i__5770__auto___19118]));

var G__19119 = (i__5770__auto___19118 + (1));
i__5770__auto___19118 = G__19119;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18319){
var G__18320 = cljs.core.first(seq18319);
var seq18319__$1 = cljs.core.next(seq18319);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18320,seq18319__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18346 = arguments.length;
switch (G__18346) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13481__auto___19128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13482__auto__ = (function (){var switch__12897__auto__ = (function (state_18415){
var state_val_18416 = (state_18415[(1)]);
if((state_val_18416 === (1))){
var state_18415__$1 = state_18415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18415__$1,(2),once_or_cleanup);
} else {
if((state_val_18416 === (2))){
var inst_18409 = (state_18415[(2)]);
var inst_18410 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18415__$1 = (function (){var statearr_18434 = state_18415;
(statearr_18434[(7)] = inst_18409);

return statearr_18434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18415__$1,inst_18410);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12898__auto__ = null;
var shadow$dom$state_machine__12898__auto____0 = (function (){
var statearr_18444 = [null,null,null,null,null,null,null,null];
(statearr_18444[(0)] = shadow$dom$state_machine__12898__auto__);

(statearr_18444[(1)] = (1));

return statearr_18444;
});
var shadow$dom$state_machine__12898__auto____1 = (function (state_18415){
while(true){
var ret_value__12899__auto__ = (function (){try{while(true){
var result__12900__auto__ = switch__12897__auto__(state_18415);
if(cljs.core.keyword_identical_QMARK_(result__12900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12900__auto__;
}
break;
}
}catch (e18446){var ex__12901__auto__ = e18446;
var statearr_18447_19133 = state_18415;
(statearr_18447_19133[(2)] = ex__12901__auto__);


if(cljs.core.seq((state_18415[(4)]))){
var statearr_18453_19135 = state_18415;
(statearr_18453_19135[(1)] = cljs.core.first((state_18415[(4)])));

} else {
throw ex__12901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19137 = state_18415;
state_18415 = G__19137;
continue;
} else {
return ret_value__12899__auto__;
}
break;
}
});
shadow$dom$state_machine__12898__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12898__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12898__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12898__auto____0;
shadow$dom$state_machine__12898__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12898__auto____1;
return shadow$dom$state_machine__12898__auto__;
})()
})();
var state__13483__auto__ = (function (){var statearr_18459 = f__13482__auto__();
(statearr_18459[(6)] = c__13481__auto___19128);

return statearr_18459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13483__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
