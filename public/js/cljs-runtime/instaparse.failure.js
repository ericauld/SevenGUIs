goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__28621 = (line + (1));
var G__28622 = (1);
var G__28623 = (counter + (1));
line = G__28621;
col = G__28622;
counter = G__28623;
continue;
} else {
var G__28624 = line;
var G__28625 = (col + (1));
var G__28626 = (counter + (1));
line = G__28624;
col = G__28625;
counter = G__28626;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__28627 = cljs.core.next(chars);
var G__28628 = (n__$1 - (1));
chars = G__28627;
n__$1 = G__28628;
continue;
} else {
var G__28629 = cljs.core.next(chars);
var G__28630 = n__$1;
chars = G__28629;
n__$1 = G__28630;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__28609){
var map__28610 = p__28609;
var map__28610__$1 = (((((!((map__28610 == null))))?(((((map__28610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28610):map__28610);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28610__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__28612_28639 = cljs.core.seq(full_reasons);
var chunk__28613_28640 = null;
var count__28614_28641 = (0);
var i__28615_28642 = (0);
while(true){
if((i__28615_28642 < count__28614_28641)){
var r_28643 = chunk__28613_28640.cljs$core$IIndexed$_nth$arity$2(null,i__28615_28642);
instaparse.failure.print_reason(r_28643);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__28644 = seq__28612_28639;
var G__28645 = chunk__28613_28640;
var G__28646 = count__28614_28641;
var G__28647 = (i__28615_28642 + (1));
seq__28612_28639 = G__28644;
chunk__28613_28640 = G__28645;
count__28614_28641 = G__28646;
i__28615_28642 = G__28647;
continue;
} else {
var temp__5735__auto___28648 = cljs.core.seq(seq__28612_28639);
if(temp__5735__auto___28648){
var seq__28612_28649__$1 = temp__5735__auto___28648;
if(cljs.core.chunked_seq_QMARK_(seq__28612_28649__$1)){
var c__4556__auto___28650 = cljs.core.chunk_first(seq__28612_28649__$1);
var G__28651 = cljs.core.chunk_rest(seq__28612_28649__$1);
var G__28652 = c__4556__auto___28650;
var G__28653 = cljs.core.count(c__4556__auto___28650);
var G__28654 = (0);
seq__28612_28639 = G__28651;
chunk__28613_28640 = G__28652;
count__28614_28641 = G__28653;
i__28615_28642 = G__28654;
continue;
} else {
var r_28655 = cljs.core.first(seq__28612_28649__$1);
instaparse.failure.print_reason(r_28655);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__28656 = cljs.core.next(seq__28612_28649__$1);
var G__28657 = null;
var G__28658 = (0);
var G__28659 = (0);
seq__28612_28639 = G__28656;
chunk__28613_28640 = G__28657;
count__28614_28641 = G__28658;
i__28615_28642 = G__28659;
continue;
}
} else {
}
}
break;
}

var seq__28617 = cljs.core.seq(partial_reasons);
var chunk__28618 = null;
var count__28619 = (0);
var i__28620 = (0);
while(true){
if((i__28620 < count__28619)){
var r = chunk__28618.cljs$core$IIndexed$_nth$arity$2(null,i__28620);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__28662 = seq__28617;
var G__28663 = chunk__28618;
var G__28664 = count__28619;
var G__28665 = (i__28620 + (1));
seq__28617 = G__28662;
chunk__28618 = G__28663;
count__28619 = G__28664;
i__28620 = G__28665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28617);
if(temp__5735__auto__){
var seq__28617__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28617__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28617__$1);
var G__28667 = cljs.core.chunk_rest(seq__28617__$1);
var G__28668 = c__4556__auto__;
var G__28669 = cljs.core.count(c__4556__auto__);
var G__28670 = (0);
seq__28617 = G__28667;
chunk__28618 = G__28668;
count__28619 = G__28669;
i__28620 = G__28670;
continue;
} else {
var r = cljs.core.first(seq__28617__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__28672 = cljs.core.next(seq__28617__$1);
var G__28673 = null;
var G__28674 = (0);
var G__28675 = (0);
seq__28617 = G__28672;
chunk__28618 = G__28673;
count__28619 = G__28674;
i__28620 = G__28675;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
