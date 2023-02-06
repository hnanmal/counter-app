goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18226){
var map__18227 = p__18226;
var map__18227__$1 = cljs.core.__destructure_map(map__18227);
var m = map__18227__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18227__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18227__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18238_18577 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18239_18578 = null;
var count__18240_18579 = (0);
var i__18241_18580 = (0);
while(true){
if((i__18241_18580 < count__18240_18579)){
var f_18583 = chunk__18239_18578.cljs$core$IIndexed$_nth$arity$2(null,i__18241_18580);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18583], 0));


var G__18588 = seq__18238_18577;
var G__18589 = chunk__18239_18578;
var G__18590 = count__18240_18579;
var G__18591 = (i__18241_18580 + (1));
seq__18238_18577 = G__18588;
chunk__18239_18578 = G__18589;
count__18240_18579 = G__18590;
i__18241_18580 = G__18591;
continue;
} else {
var temp__5804__auto___18592 = cljs.core.seq(seq__18238_18577);
if(temp__5804__auto___18592){
var seq__18238_18593__$1 = temp__5804__auto___18592;
if(cljs.core.chunked_seq_QMARK_(seq__18238_18593__$1)){
var c__5568__auto___18598 = cljs.core.chunk_first(seq__18238_18593__$1);
var G__18599 = cljs.core.chunk_rest(seq__18238_18593__$1);
var G__18600 = c__5568__auto___18598;
var G__18601 = cljs.core.count(c__5568__auto___18598);
var G__18602 = (0);
seq__18238_18577 = G__18599;
chunk__18239_18578 = G__18600;
count__18240_18579 = G__18601;
i__18241_18580 = G__18602;
continue;
} else {
var f_18603 = cljs.core.first(seq__18238_18593__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18603], 0));


var G__18604 = cljs.core.next(seq__18238_18593__$1);
var G__18605 = null;
var G__18606 = (0);
var G__18607 = (0);
seq__18238_18577 = G__18604;
chunk__18239_18578 = G__18605;
count__18240_18579 = G__18606;
i__18241_18580 = G__18607;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18608 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18608], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18608)))?cljs.core.second(arglists_18608):arglists_18608)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18262_18619 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18263_18620 = null;
var count__18264_18621 = (0);
var i__18265_18622 = (0);
while(true){
if((i__18265_18622 < count__18264_18621)){
var vec__18283_18627 = chunk__18263_18620.cljs$core$IIndexed$_nth$arity$2(null,i__18265_18622);
var name_18628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18283_18627,(0),null);
var map__18286_18629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18283_18627,(1),null);
var map__18286_18630__$1 = cljs.core.__destructure_map(map__18286_18629);
var doc_18631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18286_18630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18286_18630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18628], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18632], 0));

if(cljs.core.truth_(doc_18631)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18631], 0));
} else {
}


var G__18633 = seq__18262_18619;
var G__18634 = chunk__18263_18620;
var G__18635 = count__18264_18621;
var G__18636 = (i__18265_18622 + (1));
seq__18262_18619 = G__18633;
chunk__18263_18620 = G__18634;
count__18264_18621 = G__18635;
i__18265_18622 = G__18636;
continue;
} else {
var temp__5804__auto___18637 = cljs.core.seq(seq__18262_18619);
if(temp__5804__auto___18637){
var seq__18262_18640__$1 = temp__5804__auto___18637;
if(cljs.core.chunked_seq_QMARK_(seq__18262_18640__$1)){
var c__5568__auto___18641 = cljs.core.chunk_first(seq__18262_18640__$1);
var G__18643 = cljs.core.chunk_rest(seq__18262_18640__$1);
var G__18644 = c__5568__auto___18641;
var G__18645 = cljs.core.count(c__5568__auto___18641);
var G__18646 = (0);
seq__18262_18619 = G__18643;
chunk__18263_18620 = G__18644;
count__18264_18621 = G__18645;
i__18265_18622 = G__18646;
continue;
} else {
var vec__18298_18647 = cljs.core.first(seq__18262_18640__$1);
var name_18648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18298_18647,(0),null);
var map__18301_18649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18298_18647,(1),null);
var map__18301_18650__$1 = cljs.core.__destructure_map(map__18301_18649);
var doc_18651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301_18650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18301_18650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18648], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18652], 0));

if(cljs.core.truth_(doc_18651)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18651], 0));
} else {
}


var G__18653 = cljs.core.next(seq__18262_18640__$1);
var G__18654 = null;
var G__18655 = (0);
var G__18656 = (0);
seq__18262_18619 = G__18653;
chunk__18263_18620 = G__18654;
count__18264_18621 = G__18655;
i__18265_18622 = G__18656;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18313 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18314 = null;
var count__18315 = (0);
var i__18316 = (0);
while(true){
if((i__18316 < count__18315)){
var role = chunk__18314.cljs$core$IIndexed$_nth$arity$2(null,i__18316);
var temp__5804__auto___18661__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18661__$1)){
var spec_18664 = temp__5804__auto___18661__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18664)], 0));
} else {
}


var G__18665 = seq__18313;
var G__18666 = chunk__18314;
var G__18667 = count__18315;
var G__18668 = (i__18316 + (1));
seq__18313 = G__18665;
chunk__18314 = G__18666;
count__18315 = G__18667;
i__18316 = G__18668;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18313);
if(temp__5804__auto____$1){
var seq__18313__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18313__$1);
var G__18669 = cljs.core.chunk_rest(seq__18313__$1);
var G__18670 = c__5568__auto__;
var G__18671 = cljs.core.count(c__5568__auto__);
var G__18672 = (0);
seq__18313 = G__18669;
chunk__18314 = G__18670;
count__18315 = G__18671;
i__18316 = G__18672;
continue;
} else {
var role = cljs.core.first(seq__18313__$1);
var temp__5804__auto___18673__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18673__$2)){
var spec_18674 = temp__5804__auto___18673__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18674)], 0));
} else {
}


var G__18675 = cljs.core.next(seq__18313__$1);
var G__18676 = null;
var G__18677 = (0);
var G__18678 = (0);
seq__18313 = G__18675;
chunk__18314 = G__18676;
count__18315 = G__18677;
i__18316 = G__18678;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18684 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18685 = cljs.core.ex_cause(t);
via = G__18684;
t = G__18685;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18400 = datafied_throwable;
var map__18400__$1 = cljs.core.__destructure_map(map__18400);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18400__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18401 = cljs.core.last(via);
var map__18401__$1 = cljs.core.__destructure_map(map__18401);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18402 = data;
var map__18402__$1 = cljs.core.__destructure_map(map__18402);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18402__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18403 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18403__$1 = cljs.core.__destructure_map(map__18403);
var top_data = map__18403__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18417 = phase;
var G__18417__$1 = (((G__18417 instanceof cljs.core.Keyword))?G__18417.fqn:null);
switch (G__18417__$1) {
case "read-source":
var map__18424 = data;
var map__18424__$1 = cljs.core.__destructure_map(map__18424);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18433 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18433__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18433,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18433);
var G__18433__$2 = (cljs.core.truth_((function (){var fexpr__18435 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18435.cljs$core$IFn$_invoke$arity$1 ? fexpr__18435.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18435.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18433__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18433__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18433__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18445 = top_data;
var G__18445__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18445,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18445);
var G__18445__$2 = (cljs.core.truth_((function (){var fexpr__18448 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18448.cljs$core$IFn$_invoke$arity$1 ? fexpr__18448.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18448.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18445__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18445__$1);
var G__18445__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18445__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18445__$2);
var G__18445__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18445__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18445__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18445__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18445__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18464,(3),null);
var G__18467 = top_data;
var G__18467__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18467);
var G__18467__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18467__$1);
var G__18467__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18467__$2);
var G__18467__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18467__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18467__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18467__$4;
}

break;
case "execution":
var vec__18470 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18375_SHARP_){
var or__5045__auto__ = (p1__18375_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18473 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18473.cljs$core$IFn$_invoke$arity$1 ? fexpr__18473.cljs$core$IFn$_invoke$arity$1(p1__18375_SHARP_) : fexpr__18473.call(null,p1__18375_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18478 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18478__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18478,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18478);
var G__18478__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18478__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18478__$1);
var G__18478__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18478__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18478__$2);
var G__18478__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18478__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18478__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18478__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18478__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18417__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18486){
var map__18487 = p__18486;
var map__18487__$1 = cljs.core.__destructure_map(map__18487);
var triage_data = map__18487__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18487__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18492 = phase;
var G__18492__$1 = (((G__18492 instanceof cljs.core.Keyword))?G__18492.fqn:null);
switch (G__18492__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18495 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18496 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18497 = loc;
var G__18498 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18505_18783 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18506_18784 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18507_18785 = true;
var _STAR_print_fn_STAR__temp_val__18508_18786 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18507_18785);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18508_18786);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18483_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18483_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18506_18784);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18505_18783);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18495,G__18496,G__18497,G__18498) : format.call(null,G__18495,G__18496,G__18497,G__18498));

break;
case "macroexpansion":
var G__18511 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18512 = cause_type;
var G__18513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18514 = loc;
var G__18515 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18511,G__18512,G__18513,G__18514,G__18515) : format.call(null,G__18511,G__18512,G__18513,G__18514,G__18515));

break;
case "compile-syntax-check":
var G__18516 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18517 = cause_type;
var G__18518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18519 = loc;
var G__18520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18516,G__18517,G__18518,G__18519,G__18520) : format.call(null,G__18516,G__18517,G__18518,G__18519,G__18520));

break;
case "compilation":
var G__18522 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18523 = cause_type;
var G__18524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18525 = loc;
var G__18526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18522,G__18523,G__18524,G__18525,G__18526) : format.call(null,G__18522,G__18523,G__18524,G__18525,G__18526));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18531 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18532 = symbol;
var G__18533 = loc;
var G__18534 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18536_18802 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18537_18803 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18538_18804 = true;
var _STAR_print_fn_STAR__temp_val__18539_18805 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18538_18804);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18539_18805);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18484_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18484_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18537_18803);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18536_18802);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18531,G__18532,G__18533,G__18534) : format.call(null,G__18531,G__18532,G__18533,G__18534));
} else {
var G__18548 = "Execution error%s at %s(%s).\n%s\n";
var G__18549 = cause_type;
var G__18550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18551 = loc;
var G__18552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18548,G__18549,G__18550,G__18551,G__18552) : format.call(null,G__18548,G__18549,G__18550,G__18551,G__18552));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18492__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
