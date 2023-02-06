goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18934,res){
var map__18935 = p__18934;
var map__18935__$1 = cljs.core.__destructure_map(map__18935);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18935__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18935__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18937 = res;
var G__18937__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18937,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18937);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18937__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18937__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18939 = arguments.length;
switch (G__18939) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18950,msg,handlers,timeout_after_ms){
var map__18951 = p__18950;
var map__18951__$1 = cljs.core.__destructure_map(map__18951);
var runtime = map__18951__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18951__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19208 = arguments.length;
var i__5770__auto___19209 = (0);
while(true){
if((i__5770__auto___19209 < len__5769__auto___19208)){
args__5775__auto__.push((arguments[i__5770__auto___19209]));

var G__19210 = (i__5770__auto___19209 + (1));
i__5770__auto___19209 = G__19210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18982,ev,args){
var map__18990 = p__18982;
var map__18990__$1 = cljs.core.__destructure_map(map__18990);
var runtime = map__18990__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18992 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18995 = null;
var count__18996 = (0);
var i__18997 = (0);
while(true){
if((i__18997 < count__18996)){
var ext = chunk__18995.cljs$core$IIndexed$_nth$arity$2(null,i__18997);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19212 = seq__18992;
var G__19213 = chunk__18995;
var G__19214 = count__18996;
var G__19215 = (i__18997 + (1));
seq__18992 = G__19212;
chunk__18995 = G__19213;
count__18996 = G__19214;
i__18997 = G__19215;
continue;
} else {
var G__19216 = seq__18992;
var G__19217 = chunk__18995;
var G__19218 = count__18996;
var G__19219 = (i__18997 + (1));
seq__18992 = G__19216;
chunk__18995 = G__19217;
count__18996 = G__19218;
i__18997 = G__19219;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18992);
if(temp__5804__auto__){
var seq__18992__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18992__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18992__$1);
var G__19220 = cljs.core.chunk_rest(seq__18992__$1);
var G__19221 = c__5568__auto__;
var G__19222 = cljs.core.count(c__5568__auto__);
var G__19223 = (0);
seq__18992 = G__19220;
chunk__18995 = G__19221;
count__18996 = G__19222;
i__18997 = G__19223;
continue;
} else {
var ext = cljs.core.first(seq__18992__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19225 = cljs.core.next(seq__18992__$1);
var G__19226 = null;
var G__19227 = (0);
var G__19228 = (0);
seq__18992 = G__19225;
chunk__18995 = G__19226;
count__18996 = G__19227;
i__18997 = G__19228;
continue;
} else {
var G__19229 = cljs.core.next(seq__18992__$1);
var G__19230 = null;
var G__19231 = (0);
var G__19232 = (0);
seq__18992 = G__19229;
chunk__18995 = G__19230;
count__18996 = G__19231;
i__18997 = G__19232;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18956){
var G__18957 = cljs.core.first(seq18956);
var seq18956__$1 = cljs.core.next(seq18956);
var G__18958 = cljs.core.first(seq18956__$1);
var seq18956__$2 = cljs.core.next(seq18956__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18957,G__18958,seq18956__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19112,p__19113){
var map__19114 = p__19112;
var map__19114__$1 = cljs.core.__destructure_map(map__19114);
var runtime = map__19114__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19115 = p__19113;
var map__19115__$1 = cljs.core.__destructure_map(map__19115);
var msg = map__19115__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19117 = cljs.core.deref(state_ref);
var map__19117__$1 = cljs.core.__destructure_map(map__19117);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19125){
var map__19126 = p__19125;
var map__19126__$1 = cljs.core.__destructure_map(map__19126);
var runtime = map__19126__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19126__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19129,msg){
var map__19131 = p__19129;
var map__19131__$1 = cljs.core.__destructure_map(map__19131);
var runtime = map__19131__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19131__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19141,key,p__19142){
var map__19143 = p__19141;
var map__19143__$1 = cljs.core.__destructure_map(map__19143);
var state = map__19143__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19143__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19144 = p__19142;
var map__19144__$1 = cljs.core.__destructure_map(map__19144);
var spec = map__19144__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19144__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19145,key,spec){
var map__19146 = p__19145;
var map__19146__$1 = cljs.core.__destructure_map(map__19146);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19147_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19147_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19148_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19148_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19149_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19149_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19150_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19150_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19151_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19151_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19157,key){
var map__19159 = p__19157;
var map__19159__$1 = cljs.core.__destructure_map(map__19159);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19160,msg){
var map__19161 = p__19160;
var map__19161__$1 = cljs.core.__destructure_map(map__19161);
var runtime = map__19161__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19161__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19172,p__19173){
var map__19174 = p__19172;
var map__19174__$1 = cljs.core.__destructure_map(map__19174);
var runtime = map__19174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19175 = p__19173;
var map__19175__$1 = cljs.core.__destructure_map(map__19175);
var msg = map__19175__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19180 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19182 = null;
var count__19183 = (0);
var i__19184 = (0);
while(true){
if((i__19184 < count__19183)){
var map__19191 = chunk__19182.cljs$core$IIndexed$_nth$arity$2(null,i__19184);
var map__19191__$1 = cljs.core.__destructure_map(map__19191);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19254 = seq__19180;
var G__19255 = chunk__19182;
var G__19256 = count__19183;
var G__19257 = (i__19184 + (1));
seq__19180 = G__19254;
chunk__19182 = G__19255;
count__19183 = G__19256;
i__19184 = G__19257;
continue;
} else {
var G__19258 = seq__19180;
var G__19259 = chunk__19182;
var G__19260 = count__19183;
var G__19261 = (i__19184 + (1));
seq__19180 = G__19258;
chunk__19182 = G__19259;
count__19183 = G__19260;
i__19184 = G__19261;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19180);
if(temp__5804__auto__){
var seq__19180__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19180__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19180__$1);
var G__19263 = cljs.core.chunk_rest(seq__19180__$1);
var G__19264 = c__5568__auto__;
var G__19265 = cljs.core.count(c__5568__auto__);
var G__19266 = (0);
seq__19180 = G__19263;
chunk__19182 = G__19264;
count__19183 = G__19265;
i__19184 = G__19266;
continue;
} else {
var map__19196 = cljs.core.first(seq__19180__$1);
var map__19196__$1 = cljs.core.__destructure_map(map__19196);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19196__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19267 = cljs.core.next(seq__19180__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__19180 = G__19267;
chunk__19182 = G__19268;
count__19183 = G__19269;
i__19184 = G__19270;
continue;
} else {
var G__19271 = cljs.core.next(seq__19180__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__19180 = G__19271;
chunk__19182 = G__19272;
count__19183 = G__19273;
i__19184 = G__19274;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
