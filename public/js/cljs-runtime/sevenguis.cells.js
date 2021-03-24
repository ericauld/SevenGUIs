goog.provide('sevenguis.cells');
sevenguis.cells.n_rows = (100);
sevenguis.cells.n_columns = (26);
sevenguis.cells.alphabet_caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
sevenguis.cells.column_labels = cljs.core.take.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.n_columns,sevenguis.cells.alphabet_caps);
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.cells !== 'undefined') && (typeof sevenguis.cells._BANG_app_db !== 'undefined')){
} else {
sevenguis.cells._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-being-edited","cell-being-edited",-1775460078),null,new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function sevenguis$cells$iter__75078(s__75079){
return (new cljs.core.LazySeq(null,(function (){
var s__75079__$1 = s__75079;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75079__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var column_letter = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__75079__$1,column_letter,xs__6292__auto__,temp__5735__auto__){
return (function sevenguis$cells$iter__75078_$_iter__75080(s__75081){
return (new cljs.core.LazySeq(null,((function (s__75079__$1,column_letter,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__75081__$1 = s__75081;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__75081__$1);
if(temp__5735__auto____$1){
var s__75081__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75081__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75081__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75083 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75082 = (0);
while(true){
if((i__75082 < size__4528__auto__)){
var row_number = cljs.core._nth(c__4527__auto__,i__75082);
cljs.core.chunk_append(b__75083,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join(''),null], null));

var G__75324 = (i__75082 + (1));
i__75082 = G__75324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75083),sevenguis$cells$iter__75078_$_iter__75080(cljs.core.chunk_rest(s__75081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75083),null);
}
} else {
var row_number = cljs.core.first(s__75081__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join(''),null], null),sevenguis$cells$iter__75078_$_iter__75080(cljs.core.rest(s__75081__$2)));
}
} else {
return null;
}
break;
}
});})(s__75079__$1,column_letter,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__75079__$1,column_letter,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sevenguis.cells.n_rows)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,sevenguis$cells$iter__75078(cljs.core.rest(s__75079__$1)));
} else {
var G__75325 = cljs.core.rest(s__75079__$1);
s__75079__$1 = G__75325;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.cells.column_labels);
})()),new cljs.core.Keyword(null,"cell-being-edited-cached-user-input","cell-being-edited-cached-user-input",-1350165399),null], null));
}
sevenguis.cells._BANG_cell_being_edited = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-being-edited","cell-being-edited",-1775460078)], null));
sevenguis.cells._BANG_cached_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-being-edited-cached-user-input","cell-being-edited-cached-user-input",-1350165399)], null));
sevenguis.cells.func_with_name = new cljs.core.PersistentArrayMap(null, 6, ["sum",cljs.core._PLUS_,"add",(function (p1__75090_SHARP_,p2__75091_SHARP_){
return (p1__75090_SHARP_ + p2__75091_SHARP_);
}),"sub",(function (p1__75092_SHARP_,p2__75093_SHARP_){
return (p1__75092_SHARP_ - p2__75093_SHARP_);
}),"prod",cljs.core._STAR_,"mul",(function (p1__75094_SHARP_,p2__75095_SHARP_){
return (p1__75094_SHARP_ * p2__75095_SHARP_);
}),"div",(function (p1__75096_SHARP_,p2__75097_SHARP_){
return (p1__75096_SHARP_ / p2__75097_SHARP_);
})], null);

/**
 * @interface
 */
sevenguis.cells.Expression = function(){};

var sevenguis$cells$Expression$evaluate$dyn_75326 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.cells.evaluate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.cells.evaluate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Expression.evaluate",this$);
}
}
});
sevenguis.cells.evaluate = (function sevenguis$cells$evaluate(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$cells$Expression$evaluate$arity$1 == null)))))){
return this$.sevenguis$cells$Expression$evaluate$arity$1(this$);
} else {
return sevenguis$cells$Expression$evaluate$dyn_75326(this$);
}
});


/**
 * @interface
 */
sevenguis.cells.Formula = function(){};

var sevenguis$cells$Formula$display$dyn_75328 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.cells.display[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.cells.display["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Formula.display",this$);
}
}
});
sevenguis.cells.display = (function sevenguis$cells$display(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$cells$Formula$display$arity$1 == null)))))){
return this$.sevenguis$cells$Formula$display$arity$1(this$);
} else {
return sevenguis$cells$Formula$display$dyn_75328(this$);
}
});


/**
 * @interface
 */
sevenguis.cells.Abbreviation = function(){};

var sevenguis$cells$Abbreviation$expand_and_eval$dyn_75329 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.cells.expand_and_eval[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.cells.expand_and_eval["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Abbreviation.expand-and-eval",this$);
}
}
});
sevenguis.cells.expand_and_eval = (function sevenguis$cells$expand_and_eval(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 == null)))))){
return this$.sevenguis$cells$Abbreviation$expand_and_eval$arity$1(this$);
} else {
return sevenguis$cells$Abbreviation$expand_and_eval$dyn_75329(this$);
}
});

sevenguis.cells.eval_list = (function sevenguis$cells$eval_list(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(sevenguis.cells.expand_and_eval,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.cells.Abbreviation}
 * @implements {cljs.core.ICounted}
 * @implements {sevenguis.cells.Formula}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {sevenguis.cells.Expression}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sevenguis.cells.Decimal = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.cells.Decimal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.cells.Decimal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75106,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75111 = k75106;
var G__75111__$1 = (((G__75111 instanceof cljs.core.Keyword))?G__75111.fqn:null);
switch (G__75111__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75106,else__4383__auto__);

}
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75113){
var vec__75114 = p__75113;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75114,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75114,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.cells.Decimal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75105){
var self__ = this;
var G__75105__$1 = this;
return (new cljs.core.RecordIter((0),G__75105__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Formula$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Formula$display$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.value;
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.cells.Decimal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.cells.Decimal(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-782317571 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75107,other75108){
var self__ = this;
var this75107__$1 = this;
return (((!((other75108 == null)))) && ((this75107__$1.constructor === other75108.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75107__$1.value,other75108.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75107__$1.__extmap,other75108.__extmap)));
}));

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (new cljs.core.List(null,self__.value,null,(1),null));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.cells.Decimal(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75105){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75131 = cljs.core.keyword_identical_QMARK_;
var expr__75132 = k__4388__auto__;
if(cljs.core.truth_((pred__75131.cljs$core$IFn$_invoke$arity$2 ? pred__75131.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__75132) : pred__75131.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__75132)))){
return (new sevenguis.cells.Decimal(G__75105,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Decimal(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75105),null));
}
}));

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Expression$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Decimal.prototype.sevenguis$cells$Expression$evaluate$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.value;
}));

(sevenguis.cells.Decimal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75105){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Decimal(self__.value,G__75105,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Decimal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.cells.Decimal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(sevenguis.cells.Decimal.cljs$lang$type = true);

(sevenguis.cells.Decimal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.cells/Decimal",null,(1),null));
}));

(sevenguis.cells.Decimal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.cells/Decimal");
}));

/**
 * Positional factory function for sevenguis.cells/Decimal.
 */
sevenguis.cells.__GT_Decimal = (function sevenguis$cells$__GT_Decimal(value){
return (new sevenguis.cells.Decimal(value,null,null,null));
});

/**
 * Factory function for sevenguis.cells/Decimal, taking a map of keywords to field values.
 */
sevenguis.cells.map__GT_Decimal = (function sevenguis$cells$map__GT_Decimal(G__75109){
var extmap__4419__auto__ = (function (){var G__75137 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75109,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__75109)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75137);
} else {
return G__75137;
}
})();
return (new sevenguis.cells.Decimal(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__75109),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.cells.Abbreviation}
 * @implements {cljs.core.ICounted}
 * @implements {sevenguis.cells.Formula}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {sevenguis.cells.Expression}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sevenguis.cells.Textual = (function (s,__meta,__extmap,__hash){
this.s = s;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.cells.Textual.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.cells.Textual.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75139,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75143 = k75139;
var G__75143__$1 = (((G__75143 instanceof cljs.core.Keyword))?G__75143.fqn:null);
switch (G__75143__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75139,else__4383__auto__);

}
}));

(sevenguis.cells.Textual.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75144){
var vec__75145 = p__75144;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75145,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75145,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.cells.Textual.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.cells.Textual{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null))], null),self__.__extmap));
}));

(sevenguis.cells.Textual.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75138){
var self__ = this;
var G__75138__$1 = this;
return (new cljs.core.RecordIter((0),G__75138__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Textual.prototype.sevenguis$cells$Formula$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Textual.prototype.sevenguis$cells$Formula$display$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.s;
}));

(sevenguis.cells.Textual.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.cells.Textual.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.cells.Textual(self__.s,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Textual.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(sevenguis.cells.Textual.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1167232764 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.cells.Textual.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75140,other75141){
var self__ = this;
var this75140__$1 = this;
return (((!((other75141 == null)))) && ((this75140__$1.constructor === other75141.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75140__$1.s,other75141.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75140__$1.__extmap,other75141.__extmap)));
}));

(sevenguis.cells.Textual.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Textual.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (new cljs.core.List(null,(0),null,(1),null));
}));

(sevenguis.cells.Textual.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"s","s",1705939918),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.cells.Textual(self__.s,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.cells.Textual.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75138){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75148 = cljs.core.keyword_identical_QMARK_;
var expr__75149 = k__4388__auto__;
if(cljs.core.truth_((pred__75148.cljs$core$IFn$_invoke$arity$2 ? pred__75148.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__75149) : pred__75148.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__75149)))){
return (new sevenguis.cells.Textual(G__75138,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Textual(self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75138),null));
}
}));

(sevenguis.cells.Textual.prototype.sevenguis$cells$Expression$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Textual.prototype.sevenguis$cells$Expression$evaluate$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (0);
}));

(sevenguis.cells.Textual.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"s","s",1705939918),self__.s,null))], null),self__.__extmap));
}));

(sevenguis.cells.Textual.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75138){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Textual(self__.s,G__75138,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Textual.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.cells.Textual.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
}));

(sevenguis.cells.Textual.cljs$lang$type = true);

(sevenguis.cells.Textual.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.cells/Textual",null,(1),null));
}));

(sevenguis.cells.Textual.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.cells/Textual");
}));

/**
 * Positional factory function for sevenguis.cells/Textual.
 */
sevenguis.cells.__GT_Textual = (function sevenguis$cells$__GT_Textual(s){
return (new sevenguis.cells.Textual(s,null,null,null));
});

/**
 * Factory function for sevenguis.cells/Textual, taking a map of keywords to field values.
 */
sevenguis.cells.map__GT_Textual = (function sevenguis$cells$map__GT_Textual(G__75142){
var extmap__4419__auto__ = (function (){var G__75151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75142,new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_(G__75142)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75151);
} else {
return G__75151;
}
})();
return (new sevenguis.cells.Textual(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__75142),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.cells.Abbreviation}
 * @implements {cljs.core.ICounted}
 * @implements {sevenguis.cells.Formula}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {sevenguis.cells.Expression}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sevenguis.cells.Cell = (function (column,row,__meta,__extmap,__hash){
this.column = column;
this.row = row;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.cells.Cell.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.cells.Cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75153,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75157 = k75153;
var G__75157__$1 = (((G__75157 instanceof cljs.core.Keyword))?G__75157.fqn:null);
switch (G__75157__$1) {
case "column":
return self__.column;

break;
case "row":
return self__.row;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75153,else__4383__auto__);

}
}));

(sevenguis.cells.Cell.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75158){
var vec__75159 = p__75158;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75159,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75159,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.cells.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.cells.Cell{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null))], null),self__.__extmap));
}));

(sevenguis.cells.Cell.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75152){
var self__ = this;
var G__75152__$1 = this;
return (new cljs.core.RecordIter((0),G__75152__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row","row",-570139521)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Cell.prototype.sevenguis$cells$Formula$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell.prototype.sevenguis$cells$Formula$display$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_evaluate_track(){
var temp__5735__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join(''),cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join('')], null))));
if(cljs.core.truth_(temp__5735__auto__)){
var cell_input = temp__5735__auto__;
return sevenguis.cells.evaluate((function (){var G__75168 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__75168) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__75168));
})());
} else {
return null;
}
})));
}));

(sevenguis.cells.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.cells.Cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.cells.Cell(self__.column,self__.row,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Cell.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sevenguis.cells.Cell.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1328372603 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.cells.Cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75154,other75155){
var self__ = this;
var this75154__$1 = this;
return (((!((other75155 == null)))) && ((this75154__$1.constructor === other75155.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75154__$1.column,other75155.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75154__$1.row,other75155.row)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75154__$1.__extmap,other75155.__extmap)));
}));

(sevenguis.cells.Cell.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (new cljs.core.List(null,cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_evaluate_track(){
var temp__5735__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join(''),cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join('')], null))));
if(cljs.core.truth_(temp__5735__auto__)){
var cell_input = temp__5735__auto__;
return sevenguis.cells.evaluate((function (){var G__75171 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__75171) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__75171));
})());
} else {
return null;
}
}))),null,(1),null));
}));

(sevenguis.cells.Cell.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.cells.Cell(self__.column,self__.row,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.cells.Cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75152){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75175 = cljs.core.keyword_identical_QMARK_;
var expr__75176 = k__4388__auto__;
if(cljs.core.truth_((pred__75175.cljs$core$IFn$_invoke$arity$2 ? pred__75175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__75176) : pred__75175.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__75176)))){
return (new sevenguis.cells.Cell(G__75152,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75175.cljs$core$IFn$_invoke$arity$2 ? pred__75175.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),expr__75176) : pred__75175.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__75176)))){
return (new sevenguis.cells.Cell(self__.column,G__75152,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Cell(self__.column,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75152),null));
}
}
}));

(sevenguis.cells.Cell.prototype.sevenguis$cells$Expression$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell.prototype.sevenguis$cells$Expression$evaluate$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_evaluate_track(){
var temp__5735__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join(''),cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join('')], null))));
if(cljs.core.truth_(temp__5735__auto__)){
var cell_input = temp__5735__auto__;
return sevenguis.cells.evaluate((function (){var G__75178 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__75178) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__75178));
})());
} else {
return null;
}
})));
}));

(sevenguis.cells.Cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row","row",-570139521),self__.row,null))], null),self__.__extmap));
}));

(sevenguis.cells.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75152){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Cell(self__.column,self__.row,G__75152,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Cell.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.cells.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.Symbol(null,"row","row",1070392006,null)], null);
}));

(sevenguis.cells.Cell.cljs$lang$type = true);

(sevenguis.cells.Cell.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.cells/Cell",null,(1),null));
}));

(sevenguis.cells.Cell.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.cells/Cell");
}));

/**
 * Positional factory function for sevenguis.cells/Cell.
 */
sevenguis.cells.__GT_Cell = (function sevenguis$cells$__GT_Cell(column,row){
return (new sevenguis.cells.Cell(column,row,null,null,null));
});

/**
 * Factory function for sevenguis.cells/Cell, taking a map of keywords to field values.
 */
sevenguis.cells.map__GT_Cell = (function sevenguis$cells$map__GT_Cell(G__75156){
var extmap__4419__auto__ = (function (){var G__75179 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75156,new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521)], 0));
if(cljs.core.record_QMARK_(G__75156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75179);
} else {
return G__75179;
}
})();
return (new sevenguis.cells.Cell(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__75156),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__75156),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.cells.cell_range__GT_list = (function sevenguis$cells$cell_range__GT_list(first_cell,final_cell){
var n_columns_in_range = ((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(final_cell).charCodeAt() - new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt()) + (1));
var n_rows_in_range = ((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(final_cell) - new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell)) + (1));
if((!((((n_columns_in_range > (0))) && ((n_rows_in_range > (0))))))){
return cljs.core.List.EMPTY;
} else {
var iter__4529__auto__ = (function sevenguis$cells$cell_range__GT_list_$_iter__75183(s__75184){
return (new cljs.core.LazySeq(null,(function (){
var s__75184__$1 = s__75184;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75184__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var column_offset = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__75184__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range){
return (function sevenguis$cells$cell_range__GT_list_$_iter__75183_$_iter__75185(s__75186){
return (new cljs.core.LazySeq(null,((function (s__75184__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range){
return (function (){
var s__75186__$1 = s__75186;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__75186__$1);
if(temp__5735__auto____$1){
var s__75186__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75186__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75186__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75188 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75187 = (0);
while(true){
if((i__75187 < size__4528__auto__)){
var row_offset = cljs.core._nth(c__4527__auto__,i__75187);
var column = cljs.core.char$((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt() + column_offset));
var row = (new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell) + row_offset);
cljs.core.chunk_append(b__75188,sevenguis.cells.__GT_Cell(column,row));

var G__75337 = (i__75187 + (1));
i__75187 = G__75337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75188),sevenguis$cells$cell_range__GT_list_$_iter__75183_$_iter__75185(cljs.core.chunk_rest(s__75186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75188),null);
}
} else {
var row_offset = cljs.core.first(s__75186__$2);
var column = cljs.core.char$((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt() + column_offset));
var row = (new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell) + row_offset);
return cljs.core.cons(sevenguis.cells.__GT_Cell(column,row),sevenguis$cells$cell_range__GT_list_$_iter__75183_$_iter__75185(cljs.core.rest(s__75186__$2)));
}
} else {
return null;
}
break;
}
});})(s__75184__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range))
,null,null));
});})(s__75184__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows_in_range)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,sevenguis$cells$cell_range__GT_list_$_iter__75183(cljs.core.rest(s__75184__$1)));
} else {
var G__75338 = cljs.core.rest(s__75184__$1);
s__75184__$1 = G__75338;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_columns_in_range));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.cells.Abbreviation}
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
sevenguis.cells.Cell_range = (function (first_cell,final_cell,__meta,__extmap,__hash){
this.first_cell = first_cell;
this.final_cell = final_cell;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.cells.Cell_range.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75195,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75199 = k75195;
var G__75199__$1 = (((G__75199 instanceof cljs.core.Keyword))?G__75199.fqn:null);
switch (G__75199__$1) {
case "first-cell":
return self__.first_cell;

break;
case "final-cell":
return self__.final_cell;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75195,else__4383__auto__);

}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75212){
var vec__75213 = p__75212;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75213,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75213,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.cells.Cell-range{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"first-cell","first-cell",104391002),self__.first_cell],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),self__.final_cell],null))], null),self__.__extmap));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75194){
var self__ = this;
var G__75194__$1 = this;
return (new cljs.core.RecordIter((0),G__75194__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-cell","first-cell",104391002),new cljs.core.Keyword(null,"final-cell","final-cell",-786858111)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-901528180 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75196,other75197){
var self__ = this;
var this75196__$1 = this;
return (((!((other75197 == null)))) && ((this75196__$1.constructor === other75197.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75196__$1.first_cell,other75197.first_cell)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75196__$1.final_cell,other75197.final_cell)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75196__$1.__extmap,other75197.__extmap)));
}));

(sevenguis.cells.Cell_range.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell_range.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_range_value(){
return sevenguis.cells.eval_list(sevenguis.cells.cell_range__GT_list(self__.first_cell,self__.final_cell));
})));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),null,new cljs.core.Keyword(null,"first-cell","first-cell",104391002),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75194){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75256 = cljs.core.keyword_identical_QMARK_;
var expr__75257 = k__4388__auto__;
if(cljs.core.truth_((pred__75256.cljs$core$IFn$_invoke$arity$2 ? pred__75256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-cell","first-cell",104391002),expr__75257) : pred__75256.call(null,new cljs.core.Keyword(null,"first-cell","first-cell",104391002),expr__75257)))){
return (new sevenguis.cells.Cell_range(G__75194,self__.final_cell,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75256.cljs$core$IFn$_invoke$arity$2 ? pred__75256.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),expr__75257) : pred__75256.call(null,new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),expr__75257)))){
return (new sevenguis.cells.Cell_range(self__.first_cell,G__75194,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75194),null));
}
}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"first-cell","first-cell",104391002),self__.first_cell,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),self__.final_cell,null))], null),self__.__extmap));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75194){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,G__75194,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.cells.Cell_range.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first-cell","first-cell",1744922529,null),new cljs.core.Symbol(null,"final-cell","final-cell",853673416,null)], null);
}));

(sevenguis.cells.Cell_range.cljs$lang$type = true);

(sevenguis.cells.Cell_range.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.cells/Cell-range",null,(1),null));
}));

(sevenguis.cells.Cell_range.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.cells/Cell-range");
}));

/**
 * Positional factory function for sevenguis.cells/Cell-range.
 */
sevenguis.cells.__GT_Cell_range = (function sevenguis$cells$__GT_Cell_range(first_cell,final_cell){
return (new sevenguis.cells.Cell_range(first_cell,final_cell,null,null,null));
});

/**
 * Factory function for sevenguis.cells/Cell-range, taking a map of keywords to field values.
 */
sevenguis.cells.map__GT_Cell_range = (function sevenguis$cells$map__GT_Cell_range(G__75198){
var extmap__4419__auto__ = (function (){var G__75267 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75198,new cljs.core.Keyword(null,"first-cell","first-cell",104391002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"final-cell","final-cell",-786858111)], 0));
if(cljs.core.record_QMARK_(G__75198)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75267);
} else {
return G__75267;
}
})();
return (new sevenguis.cells.Cell_range(new cljs.core.Keyword(null,"first-cell","first-cell",104391002).cljs$core$IFn$_invoke$arity$1(G__75198),new cljs.core.Keyword(null,"final-cell","final-cell",-786858111).cljs$core$IFn$_invoke$arity$1(G__75198),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.cells.Abbreviation}
 * @implements {cljs.core.ICounted}
 * @implements {sevenguis.cells.Formula}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {sevenguis.cells.Expression}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sevenguis.cells.Application = (function (func_as_string,arg_list,__meta,__extmap,__hash){
this.func_as_string = func_as_string;
this.arg_list = arg_list;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.cells.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.cells.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75271,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75282 = k75271;
var G__75282__$1 = (((G__75282 instanceof cljs.core.Keyword))?G__75282.fqn:null);
switch (G__75282__$1) {
case "func-as-string":
return self__.func_as_string;

break;
case "arg-list":
return self__.arg_list;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75271,else__4383__auto__);

}
}));

(sevenguis.cells.Application.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75283){
var vec__75284 = p__75283;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75284,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75284,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.cells.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.cells.Application{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),self__.func_as_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-list","arg-list",332788853),self__.arg_list],null))], null),self__.__extmap));
}));

(sevenguis.cells.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75270){
var self__ = this;
var G__75270__$1 = this;
return (new cljs.core.RecordIter((0),G__75270__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),new cljs.core.Keyword(null,"arg-list","arg-list",332788853)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Application.prototype.sevenguis$cells$Formula$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Application.prototype.sevenguis$cells$Formula$display$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.func_with_name,self__.func_as_string);
return cljs.core.deref(reagent.core.track((function sevenguis$cells$eval_application(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,sevenguis.cells.eval_list(self__.arg_list));
})));
}));

(sevenguis.cells.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.cells.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sevenguis.cells.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1850651612 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.cells.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75272,other75273){
var self__ = this;
var this75272__$1 = this;
return (((!((other75273 == null)))) && ((this75272__$1.constructor === other75273.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75272__$1.func_as_string,other75273.func_as_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75272__$1.arg_list,other75273.arg_list)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75272__$1.__extmap,other75273.__extmap)));
}));

(sevenguis.cells.Application.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Application.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.func_with_name,self__.func_as_string);
return (new cljs.core.List(null,cljs.core.deref(reagent.core.track((function sevenguis$cells$eval_application(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,sevenguis.cells.eval_list(self__.arg_list));
}))),null,(1),null));
}));

(sevenguis.cells.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),null,new cljs.core.Keyword(null,"arg-list","arg-list",332788853),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.cells.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75270){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75297 = cljs.core.keyword_identical_QMARK_;
var expr__75298 = k__4388__auto__;
if(cljs.core.truth_((pred__75297.cljs$core$IFn$_invoke$arity$2 ? pred__75297.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),expr__75298) : pred__75297.call(null,new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),expr__75298)))){
return (new sevenguis.cells.Application(G__75270,self__.arg_list,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75297.cljs$core$IFn$_invoke$arity$2 ? pred__75297.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg-list","arg-list",332788853),expr__75298) : pred__75297.call(null,new cljs.core.Keyword(null,"arg-list","arg-list",332788853),expr__75298)))){
return (new sevenguis.cells.Application(self__.func_as_string,G__75270,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75270),null));
}
}
}));

(sevenguis.cells.Application.prototype.sevenguis$cells$Expression$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Application.prototype.sevenguis$cells$Expression$evaluate$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.func_with_name,self__.func_as_string);
return cljs.core.deref(reagent.core.track((function sevenguis$cells$eval_application(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,sevenguis.cells.eval_list(self__.arg_list));
})));
}));

(sevenguis.cells.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),self__.func_as_string,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-list","arg-list",332788853),self__.arg_list,null))], null),self__.__extmap));
}));

(sevenguis.cells.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75270){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,G__75270,self__.__extmap,self__.__hash));
}));

(sevenguis.cells.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.cells.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func-as-string","func-as-string",-1414213003,null),new cljs.core.Symbol(null,"arg-list","arg-list",1973320380,null)], null);
}));

(sevenguis.cells.Application.cljs$lang$type = true);

(sevenguis.cells.Application.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.cells/Application",null,(1),null));
}));

(sevenguis.cells.Application.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.cells/Application");
}));

/**
 * Positional factory function for sevenguis.cells/Application.
 */
sevenguis.cells.__GT_Application = (function sevenguis$cells$__GT_Application(func_as_string,arg_list){
return (new sevenguis.cells.Application(func_as_string,arg_list,null,null,null));
});

/**
 * Factory function for sevenguis.cells/Application, taking a map of keywords to field values.
 */
sevenguis.cells.map__GT_Application = (function sevenguis$cells$map__GT_Application(G__75274){
var extmap__4419__auto__ = (function (){var G__75302 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75274,new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg-list","arg-list",332788853)], 0));
if(cljs.core.record_QMARK_(G__75274)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75302);
} else {
return G__75302;
}
})();
return (new sevenguis.cells.Application(new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766).cljs$core$IFn$_invoke$arity$1(G__75274),new cljs.core.Keyword(null,"arg-list","arg-list",332788853).cljs$core$IFn$_invoke$arity$1(G__75274),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.cells.symbol__GT_creator = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Formula","Formula",62023456),new cljs.core.Keyword(null,"textual","textual",-1537320607),new cljs.core.Keyword(null,"Abbreviation","Abbreviation",-138374804),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"function-symbol","function-symbol",-1336068270),new cljs.core.Keyword(null,"Cell","Cell",53644787),new cljs.core.Keyword(null,"decimal","decimal",-170212044),new cljs.core.Keyword(null,"Application","Application",-694943881),new cljs.core.Keyword(null,"Expr","Expr",-722609095),new cljs.core.Keyword(null,"Cell-range","Cell-range",-1774231431),new cljs.core.Keyword(null,"row","row",-570139521)],[cljs.core.identity,(function sevenguis$cells$textual_creator(s){
return sevenguis.cells.__GT_Textual(s);
}),cljs.core.identity,cljs.core.identity,cljs.core.identity,(function sevenguis$cells$cell_creator(column,row){
return sevenguis.cells.__GT_Cell(column,row);
}),(function sevenguis$cells$decimal_creator(s){
return sevenguis.cells.__GT_Decimal(parseFloat(s));
}),(function() { 
var sevenguis$cells$application_creator__delegate = function (func_as_string,arg_list){
return sevenguis.cells.__GT_Application(func_as_string,arg_list);
};
var sevenguis$cells$application_creator = function (func_as_string,var_args){
var arg_list = null;
if (arguments.length > 1) {
var G__75341__i = 0, G__75341__a = new Array(arguments.length -  1);
while (G__75341__i < G__75341__a.length) {G__75341__a[G__75341__i] = arguments[G__75341__i + 1]; ++G__75341__i;}
  arg_list = new cljs.core.IndexedSeq(G__75341__a,0,null);
} 
return sevenguis$cells$application_creator__delegate.call(this,func_as_string,arg_list);};
sevenguis$cells$application_creator.cljs$lang$maxFixedArity = 1;
sevenguis$cells$application_creator.cljs$lang$applyTo = (function (arglist__75342){
var func_as_string = cljs.core.first(arglist__75342);
var arg_list = cljs.core.rest(arglist__75342);
return sevenguis$cells$application_creator__delegate(func_as_string,arg_list);
});
sevenguis$cells$application_creator.cljs$core$IFn$_invoke$arity$variadic = sevenguis$cells$application_creator__delegate;
return sevenguis$cells$application_creator;
})()
,cljs.core.identity,(function sevenguis$cells$cell_range_creator(first_cell,final_cell){
return sevenguis.cells.__GT_Cell_range(first_cell,final_cell);
}),cljs.core.int$]);
sevenguis.cells.user_input__GT_hiccup_tree = instaparse.core.parser("\n  Formula = decimal / textual / (<'='> Expr)\n  Expr =  Cell | decimal | Application\n  Abbreviation = Cell-range | Expr\n  Application = function-symbol <'('> (Abbreviation <','> )* Abbreviation <')'>\n  Cell-range   = Cell <':'> Cell\n  Cell    = column row\n  column = #'[A-Za-z]'\n  row = #'[0-9][0-9]?'\n  textual = #'[^=].*' / #'\\s*'\n  function-symbol   = #'[a-zA-Z_]\\w*'\n  decimal = #'-?\\d+(\\.\\d+)?'");
sevenguis.cells.hiccup_tree__GT_formula_object = (function sevenguis$cells$hiccup_tree__GT_formula_object(tree){
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.symbol__GT_creator,tree) : instaparse.core.transform.call(null,sevenguis.cells.symbol__GT_creator,tree));
});
sevenguis.cells.get_computed_value = (function sevenguis$cells$get_computed_value(input){
if(cljs.core.truth_(input)){
return cljs.core.deref(reagent.core.track((function sevenguis$cells$get_computed_value_$_get_computed_value_track(){
return sevenguis.cells.display(sevenguis.cells.hiccup_tree__GT_formula_object((sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,input))));
})));
} else {
return null;
}
});
sevenguis.cells.cell = (function sevenguis$cells$cell(p__75305){
var map__75306 = p__75305;
var map__75306__$1 = (((((!((map__75306 == null))))?(((((map__75306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75306):map__75306);
var _BANG_user_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75306__$1,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862));
var _BANG_computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75306__$1,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486));
var cell_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75306__$1,new cljs.core.Keyword(null,"cell-name","cell-name",-536377994));
var this_cell_being_edited_QMARK_ = (cljs.core.truth_(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_name,cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),(cljs.core.truth_(this_cell_being_edited_QMARK_)?null:true),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(this_cell_being_edited_QMARK_)?cljs.core.deref(_BANG_user_input):cljs.core.deref(_BANG_computed_value)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function sevenguis$cells$cell_$_cell_on_change(e){
return cljs.core.reset_BANG_(_BANG_user_input,e.target.value);
}),new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function sevenguis$cells$cell_$_cell_on_double_click(){
cljs.core.reset_BANG_(sevenguis.cells._BANG_cached_input,cljs.core.deref(_BANG_user_input));

return cljs.core.reset_BANG_(sevenguis.cells._BANG_cell_being_edited,cell_name);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$cells$cell_$_cell_on_blur(){
cljs.core.reset_BANG_(sevenguis.cells._BANG_cached_input,null);

return cljs.core.reset_BANG_(sevenguis.cells._BANG_cell_being_edited,null);
})], null)], null)], null);
});
sevenguis.cells.cells = (function sevenguis$cells$cells(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui.cells","div.gui.cells",940111588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-wrapper","div.table-wrapper",-440600779),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null),(function (){var iter__4529__auto__ = (function sevenguis$cells$cells_$_iter__75308(s__75309){
return (new cljs.core.LazySeq(null,(function (){
var s__75309__$1 = s__75309;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75309__$1);
if(temp__5735__auto__){
var s__75309__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75309__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75309__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75311 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75310 = (0);
while(true){
if((i__75310 < size__4528__auto__)){
var column_letter = cljs.core._nth(c__4527__auto__,i__75310);
cljs.core.chunk_append(b__75311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),column_letter], null));

var G__75343 = (i__75310 + (1));
i__75310 = G__75343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75311),sevenguis$cells$cells_$_iter__75308(cljs.core.chunk_rest(s__75309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75311),null);
}
} else {
var column_letter = cljs.core.first(s__75309__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),column_letter], null),sevenguis$cells$cells_$_iter__75308(cljs.core.rest(s__75309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.cells.column_labels);
})())], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4529__auto__ = (function sevenguis$cells$cells_$_iter__75312(s__75313){
return (new cljs.core.LazySeq(null,(function (){
var s__75313__$1 = s__75313;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75313__$1);
if(temp__5735__auto__){
var s__75313__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75313__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75313__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75315 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75314 = (0);
while(true){
if((i__75314 < size__4528__auto__)){
var row_number = cljs.core._nth(c__4527__auto__,i__75314);
cljs.core.chunk_append(b__75315,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),row_number], null)], null),(function (){var iter__4529__auto__ = ((function (i__75314,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75316(s__75317){
return (new cljs.core.LazySeq(null,((function (i__75314,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__){
return (function (){
var s__75317__$1 = s__75317;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__75317__$1);
if(temp__5735__auto____$1){
var s__75317__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75317__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__75317__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__75319 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__75318 = (0);
while(true){
if((i__75318 < size__4528__auto____$1)){
var column_letter = cljs.core._nth(c__4527__auto____$1,i__75318);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
cljs.core.chunk_append(b__75319,sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__75318,i__75314,cell_name,_BANG_user_input,column_letter,c__4527__auto____$1,size__4528__auto____$1,b__75319,s__75317__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75316_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__75318,i__75314,cell_name,_BANG_user_input,column_letter,c__4527__auto____$1,size__4528__auto____$1,b__75319,s__75317__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__))
)], null)));

var G__75344 = (i__75318 + (1));
i__75318 = G__75344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75319),sevenguis$cells$cells_$_iter__75312_$_iter__75316(cljs.core.chunk_rest(s__75317__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75319),null);
}
} else {
var column_letter = cljs.core.first(s__75317__$2);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
return cljs.core.cons(sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__75314,cell_name,_BANG_user_input,column_letter,s__75317__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75316_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__75314,cell_name,_BANG_user_input,column_letter,s__75317__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__))
)], null)),sevenguis$cells$cells_$_iter__75312_$_iter__75316(cljs.core.rest(s__75317__$2)));
}
} else {
return null;
}
break;
}
});})(i__75314,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__))
,null,null));
});})(i__75314,row_number,c__4527__auto__,size__4528__auto__,b__75315,s__75313__$2,temp__5735__auto__))
;
return iter__4529__auto__(sevenguis.cells.column_labels);
})()));

var G__75345 = (i__75314 + (1));
i__75314 = G__75345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75315),sevenguis$cells$cells_$_iter__75312(cljs.core.chunk_rest(s__75313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75315),null);
}
} else {
var row_number = cljs.core.first(s__75313__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),row_number], null)], null),(function (){var iter__4529__auto__ = ((function (row_number,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75320(s__75321){
return (new cljs.core.LazySeq(null,(function (){
var s__75321__$1 = s__75321;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__75321__$1);
if(temp__5735__auto____$1){
var s__75321__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75321__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75321__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75323 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75322 = (0);
while(true){
if((i__75322 < size__4528__auto__)){
var column_letter = cljs.core._nth(c__4527__auto__,i__75322);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
cljs.core.chunk_append(b__75323,sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__75322,cell_name,_BANG_user_input,column_letter,c__4527__auto__,size__4528__auto__,b__75323,s__75321__$2,temp__5735__auto____$1,row_number,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75320_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__75322,cell_name,_BANG_user_input,column_letter,c__4527__auto__,size__4528__auto__,b__75323,s__75321__$2,temp__5735__auto____$1,row_number,s__75313__$2,temp__5735__auto__))
)], null)));

var G__75346 = (i__75322 + (1));
i__75322 = G__75346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75323),sevenguis$cells$cells_$_iter__75312_$_iter__75320(cljs.core.chunk_rest(s__75321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75323),null);
}
} else {
var column_letter = cljs.core.first(s__75321__$2);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
return cljs.core.cons(sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (cell_name,_BANG_user_input,column_letter,s__75321__$2,temp__5735__auto____$1,row_number,s__75313__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__75312_$_iter__75320_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(cell_name,_BANG_user_input,column_letter,s__75321__$2,temp__5735__auto____$1,row_number,s__75313__$2,temp__5735__auto__))
)], null)),sevenguis$cells$cells_$_iter__75312_$_iter__75320(cljs.core.rest(s__75321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_number,s__75313__$2,temp__5735__auto__))
;
return iter__4529__auto__(sevenguis.cells.column_labels);
})()),sevenguis$cells$cells_$_iter__75312(cljs.core.rest(s__75313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sevenguis.cells.n_rows));
})())], null)], null)], null);
});

//# sourceMappingURL=sevenguis.cells.js.map
