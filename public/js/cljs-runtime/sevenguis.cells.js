goog.provide('sevenguis.cells');
sevenguis.cells.n_rows = (100);
sevenguis.cells.n_columns = (26);
sevenguis.cells.alphabet_caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
sevenguis.cells.column_labels = cljs.core.take.cljs$core$IFn$_invoke$arity$2(sevenguis.cells.n_columns,sevenguis.cells.alphabet_caps);
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.cells !== 'undefined') && (typeof sevenguis.cells._BANG_app_db !== 'undefined')){
} else {
sevenguis.cells._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-being-edited","cell-being-edited",-1775460078),null,new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function sevenguis$cells$iter__30021(s__30022){
return (new cljs.core.LazySeq(null,(function (){
var s__30022__$1 = s__30022;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30022__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var column_letter = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__30022__$1,column_letter,xs__6292__auto__,temp__5735__auto__){
return (function sevenguis$cells$iter__30021_$_iter__30023(s__30024){
return (new cljs.core.LazySeq(null,((function (s__30022__$1,column_letter,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__30024__$1 = s__30024;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30024__$1);
if(temp__5735__auto____$1){
var s__30024__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30024__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30024__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30026 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30025 = (0);
while(true){
if((i__30025 < size__4528__auto__)){
var row_number = cljs.core._nth(c__4527__auto__,i__30025);
cljs.core.chunk_append(b__30026,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join(''),null], null));

var G__30133 = (i__30025 + (1));
i__30025 = G__30133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30026),sevenguis$cells$iter__30021_$_iter__30023(cljs.core.chunk_rest(s__30024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30026),null);
}
} else {
var row_number = cljs.core.first(s__30024__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join(''),null], null),sevenguis$cells$iter__30021_$_iter__30023(cljs.core.rest(s__30024__$2)));
}
} else {
return null;
}
break;
}
});})(s__30022__$1,column_letter,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__30022__$1,column_letter,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(sevenguis.cells.n_rows)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,sevenguis$cells$iter__30021(cljs.core.rest(s__30022__$1)));
} else {
var G__30134 = cljs.core.rest(s__30022__$1);
s__30022__$1 = G__30134;
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
sevenguis.cells.func_with_name = new cljs.core.PersistentArrayMap(null, 6, ["sum",cljs.core._PLUS_,"add",(function (p1__30027_SHARP_,p2__30028_SHARP_){
return (p1__30027_SHARP_ + p2__30028_SHARP_);
}),"sub",(function (p1__30029_SHARP_,p2__30030_SHARP_){
return (p1__30029_SHARP_ - p2__30030_SHARP_);
}),"prod",cljs.core._STAR_,"mul",(function (p1__30031_SHARP_,p2__30032_SHARP_){
return (p1__30031_SHARP_ * p2__30032_SHARP_);
}),"div",(function (p1__30033_SHARP_,p2__30034_SHARP_){
return (p1__30033_SHARP_ / p2__30034_SHARP_);
})], null);

/**
 * @interface
 */
sevenguis.cells.Expression = function(){};

var sevenguis$cells$Expression$evaluate$dyn_30135 = (function (this$){
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
return sevenguis$cells$Expression$evaluate$dyn_30135(this$);
}
});


/**
 * @interface
 */
sevenguis.cells.Formula = function(){};

var sevenguis$cells$Formula$display$dyn_30136 = (function (this$){
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
return sevenguis$cells$Formula$display$dyn_30136(this$);
}
});


/**
 * @interface
 */
sevenguis.cells.Abbreviation = function(){};

var sevenguis$cells$Abbreviation$expand_and_eval$dyn_30137 = (function (this$){
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
return sevenguis$cells$Abbreviation$expand_and_eval$dyn_30137(this$);
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

(sevenguis.cells.Decimal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30036,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30040 = k30036;
var G__30040__$1 = (((G__30040 instanceof cljs.core.Keyword))?G__30040.fqn:null);
switch (G__30040__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30036,else__4383__auto__);

}
}));

(sevenguis.cells.Decimal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30041){
var vec__30042 = p__30041;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30042,(1),null);
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

(sevenguis.cells.Decimal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30035){
var self__ = this;
var G__30035__$1 = this;
return (new cljs.core.RecordIter((0),G__30035__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sevenguis.cells.Decimal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30037,other30038){
var self__ = this;
var this30037__$1 = this;
return (((!((other30038 == null)))) && ((this30037__$1.constructor === other30038.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30037__$1.value,other30038.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30037__$1.__extmap,other30038.__extmap)));
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

(sevenguis.cells.Decimal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30035){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30045 = cljs.core.keyword_identical_QMARK_;
var expr__30046 = k__4388__auto__;
if(cljs.core.truth_((pred__30045.cljs$core$IFn$_invoke$arity$2 ? pred__30045.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__30046) : pred__30045.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__30046)))){
return (new sevenguis.cells.Decimal(G__30035,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Decimal(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30035),null));
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

(sevenguis.cells.Decimal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30035){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Decimal(self__.value,G__30035,self__.__extmap,self__.__hash));
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
sevenguis.cells.map__GT_Decimal = (function sevenguis$cells$map__GT_Decimal(G__30039){
var extmap__4419__auto__ = (function (){var G__30048 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30039,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__30039)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30048);
} else {
return G__30048;
}
})();
return (new sevenguis.cells.Decimal(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__30039),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(sevenguis.cells.Textual.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30050,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30054 = k30050;
var G__30054__$1 = (((G__30054 instanceof cljs.core.Keyword))?G__30054.fqn:null);
switch (G__30054__$1) {
case "s":
return self__.s;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30050,else__4383__auto__);

}
}));

(sevenguis.cells.Textual.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30055){
var vec__30056 = p__30055;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30056,(1),null);
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

(sevenguis.cells.Textual.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30049){
var self__ = this;
var G__30049__$1 = this;
return (new cljs.core.RecordIter((0),G__30049__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sevenguis.cells.Textual.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30051,other30052){
var self__ = this;
var this30051__$1 = this;
return (((!((other30052 == null)))) && ((this30051__$1.constructor === other30052.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30051__$1.s,other30052.s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30051__$1.__extmap,other30052.__extmap)));
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

(sevenguis.cells.Textual.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30049){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30059 = cljs.core.keyword_identical_QMARK_;
var expr__30060 = k__4388__auto__;
if(cljs.core.truth_((pred__30059.cljs$core$IFn$_invoke$arity$2 ? pred__30059.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__30060) : pred__30059.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__30060)))){
return (new sevenguis.cells.Textual(G__30049,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Textual(self__.s,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30049),null));
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

(sevenguis.cells.Textual.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30049){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Textual(self__.s,G__30049,self__.__extmap,self__.__hash));
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
sevenguis.cells.map__GT_Textual = (function sevenguis$cells$map__GT_Textual(G__30053){
var extmap__4419__auto__ = (function (){var G__30062 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30053,new cljs.core.Keyword(null,"s","s",1705939918));
if(cljs.core.record_QMARK_(G__30053)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30062);
} else {
return G__30062;
}
})();
return (new sevenguis.cells.Textual(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__30053),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(sevenguis.cells.Cell.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30064,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30068 = k30064;
var G__30068__$1 = (((G__30068 instanceof cljs.core.Keyword))?G__30068.fqn:null);
switch (G__30068__$1) {
case "column":
return self__.column;

break;
case "row":
return self__.row;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30064,else__4383__auto__);

}
}));

(sevenguis.cells.Cell.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30069){
var vec__30070 = p__30069;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30070,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30070,(1),null);
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

(sevenguis.cells.Cell.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30063){
var self__ = this;
var G__30063__$1 = this;
return (new cljs.core.RecordIter((0),G__30063__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row","row",-570139521)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.cells.Cell.prototype.sevenguis$cells$Formula$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell.prototype.sevenguis$cells$Formula$display$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_evaluate_track(){
var temp__5735__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join(''),cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join('')], null))));
if(cljs.core.truth_(temp__5735__auto__)){
var cell_input = temp__5735__auto__;
return sevenguis.cells.evaluate((function (){var G__30073 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__30073) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__30073));
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

(sevenguis.cells.Cell.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30065,other30066){
var self__ = this;
var this30065__$1 = this;
return (((!((other30066 == null)))) && ((this30065__$1.constructor === other30066.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30065__$1.column,other30066.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30065__$1.row,other30066.row)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30065__$1.__extmap,other30066.__extmap)));
}));

(sevenguis.cells.Cell.prototype.sevenguis$cells$Abbreviation$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.cells.Cell.prototype.sevenguis$cells$Abbreviation$expand_and_eval$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return (new cljs.core.List(null,cljs.core.deref(reagent.core.track((function sevenguis$cells$cell_evaluate_track(){
var temp__5735__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join(''),cljs.core.deref(sevenguis.cells._BANG_cell_being_edited)))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.column),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.row)].join('')], null))));
if(cljs.core.truth_(temp__5735__auto__)){
var cell_input = temp__5735__auto__;
return sevenguis.cells.evaluate((function (){var G__30074 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__30074) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__30074));
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

(sevenguis.cells.Cell.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30063){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30075 = cljs.core.keyword_identical_QMARK_;
var expr__30076 = k__4388__auto__;
if(cljs.core.truth_((pred__30075.cljs$core$IFn$_invoke$arity$2 ? pred__30075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__30076) : pred__30075.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__30076)))){
return (new sevenguis.cells.Cell(G__30063,self__.row,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30075.cljs$core$IFn$_invoke$arity$2 ? pred__30075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),expr__30076) : pred__30075.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__30076)))){
return (new sevenguis.cells.Cell(self__.column,G__30063,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Cell(self__.column,self__.row,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30063),null));
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
return sevenguis.cells.evaluate((function (){var G__30078 = (sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.user_input__GT_hiccup_tree.cljs$core$IFn$_invoke$arity$1(cell_input) : sevenguis.cells.user_input__GT_hiccup_tree.call(null,cell_input));
return (sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1 ? sevenguis.cells.hiccup_tree__GT_formula_object.cljs$core$IFn$_invoke$arity$1(G__30078) : sevenguis.cells.hiccup_tree__GT_formula_object.call(null,G__30078));
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

(sevenguis.cells.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30063){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Cell(self__.column,self__.row,G__30063,self__.__extmap,self__.__hash));
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
sevenguis.cells.map__GT_Cell = (function sevenguis$cells$map__GT_Cell(G__30067){
var extmap__4419__auto__ = (function (){var G__30079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30067,new cljs.core.Keyword(null,"column","column",2078222095),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521)], 0));
if(cljs.core.record_QMARK_(G__30067)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30079);
} else {
return G__30079;
}
})();
return (new sevenguis.cells.Cell(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__30067),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__30067),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.cells.cell_range__GT_list = (function sevenguis$cells$cell_range__GT_list(first_cell,final_cell){
var n_columns_in_range = ((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(final_cell).charCodeAt() - new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt()) + (1));
var n_rows_in_range = ((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(final_cell) - new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell)) + (1));
if((!((((n_columns_in_range > (0))) && ((n_rows_in_range > (0))))))){
return cljs.core.List.EMPTY;
} else {
var iter__4529__auto__ = (function sevenguis$cells$cell_range__GT_list_$_iter__30080(s__30081){
return (new cljs.core.LazySeq(null,(function (){
var s__30081__$1 = s__30081;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30081__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var column_offset = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__30081__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range){
return (function sevenguis$cells$cell_range__GT_list_$_iter__30080_$_iter__30082(s__30083){
return (new cljs.core.LazySeq(null,((function (s__30081__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range){
return (function (){
var s__30083__$1 = s__30083;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30083__$1);
if(temp__5735__auto____$1){
var s__30083__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30083__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30083__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30085 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30084 = (0);
while(true){
if((i__30084 < size__4528__auto__)){
var row_offset = cljs.core._nth(c__4527__auto__,i__30084);
var column = cljs.core.char$((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt() + column_offset));
var row = (new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell) + row_offset);
cljs.core.chunk_append(b__30085,sevenguis.cells.__GT_Cell(column,row));

var G__30141 = (i__30084 + (1));
i__30084 = G__30141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30085),sevenguis$cells$cell_range__GT_list_$_iter__30080_$_iter__30082(cljs.core.chunk_rest(s__30083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30085),null);
}
} else {
var row_offset = cljs.core.first(s__30083__$2);
var column = cljs.core.char$((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(first_cell).charCodeAt() + column_offset));
var row = (new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(first_cell) + row_offset);
return cljs.core.cons(sevenguis.cells.__GT_Cell(column,row),sevenguis$cells$cell_range__GT_list_$_iter__30080_$_iter__30082(cljs.core.rest(s__30083__$2)));
}
} else {
return null;
}
break;
}
});})(s__30081__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range))
,null,null));
});})(s__30081__$1,column_offset,xs__6292__auto__,temp__5735__auto__,n_columns_in_range,n_rows_in_range))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows_in_range)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,sevenguis$cells$cell_range__GT_list_$_iter__30080(cljs.core.rest(s__30081__$1)));
} else {
var G__30142 = cljs.core.rest(s__30081__$1);
s__30081__$1 = G__30142;
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

(sevenguis.cells.Cell_range.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30087,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30091 = k30087;
var G__30091__$1 = (((G__30091 instanceof cljs.core.Keyword))?G__30091.fqn:null);
switch (G__30091__$1) {
case "first-cell":
return self__.first_cell;

break;
case "final-cell":
return self__.final_cell;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30087,else__4383__auto__);

}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30092){
var vec__30093 = p__30092;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30093,(1),null);
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

(sevenguis.cells.Cell_range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30086){
var self__ = this;
var G__30086__$1 = this;
return (new cljs.core.RecordIter((0),G__30086__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-cell","first-cell",104391002),new cljs.core.Keyword(null,"final-cell","final-cell",-786858111)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sevenguis.cells.Cell_range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30088,other30089){
var self__ = this;
var this30088__$1 = this;
return (((!((other30089 == null)))) && ((this30088__$1.constructor === other30089.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30088__$1.first_cell,other30089.first_cell)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30088__$1.final_cell,other30089.final_cell)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30088__$1.__extmap,other30089.__extmap)));
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

(sevenguis.cells.Cell_range.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30086){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30096 = cljs.core.keyword_identical_QMARK_;
var expr__30097 = k__4388__auto__;
if(cljs.core.truth_((pred__30096.cljs$core$IFn$_invoke$arity$2 ? pred__30096.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-cell","first-cell",104391002),expr__30097) : pred__30096.call(null,new cljs.core.Keyword(null,"first-cell","first-cell",104391002),expr__30097)))){
return (new sevenguis.cells.Cell_range(G__30086,self__.final_cell,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30096.cljs$core$IFn$_invoke$arity$2 ? pred__30096.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),expr__30097) : pred__30096.call(null,new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),expr__30097)))){
return (new sevenguis.cells.Cell_range(self__.first_cell,G__30086,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30086),null));
}
}
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"first-cell","first-cell",104391002),self__.first_cell,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"final-cell","final-cell",-786858111),self__.final_cell,null))], null),self__.__extmap));
}));

(sevenguis.cells.Cell_range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30086){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Cell_range(self__.first_cell,self__.final_cell,G__30086,self__.__extmap,self__.__hash));
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
sevenguis.cells.map__GT_Cell_range = (function sevenguis$cells$map__GT_Cell_range(G__30090){
var extmap__4419__auto__ = (function (){var G__30099 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30090,new cljs.core.Keyword(null,"first-cell","first-cell",104391002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"final-cell","final-cell",-786858111)], 0));
if(cljs.core.record_QMARK_(G__30090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30099);
} else {
return G__30099;
}
})();
return (new sevenguis.cells.Cell_range(new cljs.core.Keyword(null,"first-cell","first-cell",104391002).cljs$core$IFn$_invoke$arity$1(G__30090),new cljs.core.Keyword(null,"final-cell","final-cell",-786858111).cljs$core$IFn$_invoke$arity$1(G__30090),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(sevenguis.cells.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k30101,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__30105 = k30101;
var G__30105__$1 = (((G__30105 instanceof cljs.core.Keyword))?G__30105.fqn:null);
switch (G__30105__$1) {
case "func-as-string":
return self__.func_as_string;

break;
case "arg-list":
return self__.arg_list;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30101,else__4383__auto__);

}
}));

(sevenguis.cells.Application.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__30106){
var vec__30107 = p__30106;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(1),null);
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

(sevenguis.cells.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30100){
var self__ = this;
var G__30100__$1 = this;
return (new cljs.core.RecordIter((0),G__30100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),new cljs.core.Keyword(null,"arg-list","arg-list",332788853)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sevenguis.cells.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30102,other30103){
var self__ = this;
var this30102__$1 = this;
return (((!((other30103 == null)))) && ((this30102__$1.constructor === other30103.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30102__$1.func_as_string,other30103.func_as_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30102__$1.arg_list,other30103.arg_list)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30102__$1.__extmap,other30103.__extmap)));
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

(sevenguis.cells.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__30100){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__30110 = cljs.core.keyword_identical_QMARK_;
var expr__30111 = k__4388__auto__;
if(cljs.core.truth_((pred__30110.cljs$core$IFn$_invoke$arity$2 ? pred__30110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),expr__30111) : pred__30110.call(null,new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),expr__30111)))){
return (new sevenguis.cells.Application(G__30100,self__.arg_list,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30110.cljs$core$IFn$_invoke$arity$2 ? pred__30110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg-list","arg-list",332788853),expr__30111) : pred__30110.call(null,new cljs.core.Keyword(null,"arg-list","arg-list",332788853),expr__30111)))){
return (new sevenguis.cells.Application(self__.func_as_string,G__30100,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__30100),null));
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

(sevenguis.cells.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__30100){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.cells.Application(self__.func_as_string,self__.arg_list,G__30100,self__.__extmap,self__.__hash));
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
sevenguis.cells.map__GT_Application = (function sevenguis$cells$map__GT_Application(G__30104){
var extmap__4419__auto__ = (function (){var G__30113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30104,new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg-list","arg-list",332788853)], 0));
if(cljs.core.record_QMARK_(G__30104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30113);
} else {
return G__30113;
}
})();
return (new sevenguis.cells.Application(new cljs.core.Keyword(null,"func-as-string","func-as-string",1240222766).cljs$core$IFn$_invoke$arity$1(G__30104),new cljs.core.Keyword(null,"arg-list","arg-list",332788853).cljs$core$IFn$_invoke$arity$1(G__30104),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__30145__i = 0, G__30145__a = new Array(arguments.length -  1);
while (G__30145__i < G__30145__a.length) {G__30145__a[G__30145__i] = arguments[G__30145__i + 1]; ++G__30145__i;}
  arg_list = new cljs.core.IndexedSeq(G__30145__a,0,null);
} 
return sevenguis$cells$application_creator__delegate.call(this,func_as_string,arg_list);};
sevenguis$cells$application_creator.cljs$lang$maxFixedArity = 1;
sevenguis$cells$application_creator.cljs$lang$applyTo = (function (arglist__30146){
var func_as_string = cljs.core.first(arglist__30146);
var arg_list = cljs.core.rest(arglist__30146);
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
sevenguis.cells.cell = (function sevenguis$cells$cell(p__30114){
var map__30115 = p__30114;
var map__30115__$1 = (((((!((map__30115 == null))))?(((((map__30115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30115):map__30115);
var _BANG_user_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30115__$1,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862));
var _BANG_computed_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30115__$1,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486));
var cell_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30115__$1,new cljs.core.Keyword(null,"cell-name","cell-name",-536377994));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui.cells","div.gui.cells",940111588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Double-click to edit a cell (per assignment instructions)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Formulas begin with an = sign"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Example operations: sum, prod, sub, div"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Commas between function arguments, no space"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-wrapper","div.table-wrapper",-440600779),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null),(function (){var iter__4529__auto__ = (function sevenguis$cells$cells_$_iter__30117(s__30118){
return (new cljs.core.LazySeq(null,(function (){
var s__30118__$1 = s__30118;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30118__$1);
if(temp__5735__auto__){
var s__30118__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30118__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30118__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30120 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30119 = (0);
while(true){
if((i__30119 < size__4528__auto__)){
var column_letter = cljs.core._nth(c__4527__auto__,i__30119);
cljs.core.chunk_append(b__30120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),column_letter], null));

var G__30147 = (i__30119 + (1));
i__30119 = G__30147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30120),sevenguis$cells$cells_$_iter__30117(cljs.core.chunk_rest(s__30118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30120),null);
}
} else {
var column_letter = cljs.core.first(s__30118__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),column_letter], null),sevenguis$cells$cells_$_iter__30117(cljs.core.rest(s__30118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.cells.column_labels);
})())], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4529__auto__ = (function sevenguis$cells$cells_$_iter__30121(s__30122){
return (new cljs.core.LazySeq(null,(function (){
var s__30122__$1 = s__30122;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30122__$1);
if(temp__5735__auto__){
var s__30122__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30122__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30122__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30124 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30123 = (0);
while(true){
if((i__30123 < size__4528__auto__)){
var row_number = cljs.core._nth(c__4527__auto__,i__30123);
cljs.core.chunk_append(b__30124,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),row_number], null)], null),(function (){var iter__4529__auto__ = ((function (i__30123,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30125(s__30126){
return (new cljs.core.LazySeq(null,((function (i__30123,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__){
return (function (){
var s__30126__$1 = s__30126;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30126__$1);
if(temp__5735__auto____$1){
var s__30126__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30126__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__30126__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__30128 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__30127 = (0);
while(true){
if((i__30127 < size__4528__auto____$1)){
var column_letter = cljs.core._nth(c__4527__auto____$1,i__30127);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
cljs.core.chunk_append(b__30128,sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__30127,i__30123,cell_name,_BANG_user_input,column_letter,c__4527__auto____$1,size__4528__auto____$1,b__30128,s__30126__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30125_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__30127,i__30123,cell_name,_BANG_user_input,column_letter,c__4527__auto____$1,size__4528__auto____$1,b__30128,s__30126__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__))
)], null)));

var G__30148 = (i__30127 + (1));
i__30127 = G__30148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30128),sevenguis$cells$cells_$_iter__30121_$_iter__30125(cljs.core.chunk_rest(s__30126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30128),null);
}
} else {
var column_letter = cljs.core.first(s__30126__$2);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
return cljs.core.cons(sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__30123,cell_name,_BANG_user_input,column_letter,s__30126__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30125_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__30123,cell_name,_BANG_user_input,column_letter,s__30126__$2,temp__5735__auto____$1,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__))
)], null)),sevenguis$cells$cells_$_iter__30121_$_iter__30125(cljs.core.rest(s__30126__$2)));
}
} else {
return null;
}
break;
}
});})(i__30123,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__))
,null,null));
});})(i__30123,row_number,c__4527__auto__,size__4528__auto__,b__30124,s__30122__$2,temp__5735__auto__))
;
return iter__4529__auto__(sevenguis.cells.column_labels);
})()));

var G__30149 = (i__30123 + (1));
i__30123 = G__30149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30124),sevenguis$cells$cells_$_iter__30121(cljs.core.chunk_rest(s__30122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30124),null);
}
} else {
var row_number = cljs.core.first(s__30122__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),row_number], null)], null),(function (){var iter__4529__auto__ = ((function (row_number,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30129(s__30130){
return (new cljs.core.LazySeq(null,(function (){
var s__30130__$1 = s__30130;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30130__$1);
if(temp__5735__auto____$1){
var s__30130__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30130__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30130__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30132 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30131 = (0);
while(true){
if((i__30131 < size__4528__auto__)){
var column_letter = cljs.core._nth(c__4527__auto__,i__30131);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
cljs.core.chunk_append(b__30132,sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (i__30131,cell_name,_BANG_user_input,column_letter,c__4527__auto__,size__4528__auto__,b__30132,s__30130__$2,temp__5735__auto____$1,row_number,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30129_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(i__30131,cell_name,_BANG_user_input,column_letter,c__4527__auto__,size__4528__auto__,b__30132,s__30130__$2,temp__5735__auto____$1,row_number,s__30122__$2,temp__5735__auto__))
)], null)));

var G__30150 = (i__30131 + (1));
i__30131 = G__30150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),sevenguis$cells$cells_$_iter__30121_$_iter__30129(cljs.core.chunk_rest(s__30130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),null);
}
} else {
var column_letter = cljs.core.first(s__30130__$2);
var cell_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_letter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
var _BANG_user_input = reagent.core.cursor(sevenguis.cells._BANG_app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cell_name], null));
return cljs.core.cons(sevenguis.cells.cell(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell-name","cell-name",-536377994),cell_name,new cljs.core.Keyword(null,"!user-input","!user-input",-1715583862),_BANG_user_input,new cljs.core.Keyword(null,"!computed-value","!computed-value",-221943486),reagent.core.track(((function (cell_name,_BANG_user_input,column_letter,s__30130__$2,temp__5735__auto____$1,row_number,s__30122__$2,temp__5735__auto__){
return (function sevenguis$cells$cells_$_iter__30121_$_iter__30129_$_computed_value_track(){
return sevenguis.cells.get_computed_value(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.cells._BANG_cell_being_edited),cell_name))?cljs.core.deref(sevenguis.cells._BANG_cached_input):cljs.core.deref(_BANG_user_input)));
});})(cell_name,_BANG_user_input,column_letter,s__30130__$2,temp__5735__auto____$1,row_number,s__30122__$2,temp__5735__auto__))
)], null)),sevenguis$cells$cells_$_iter__30121_$_iter__30129(cljs.core.rest(s__30130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_number,s__30122__$2,temp__5735__auto__))
;
return iter__4529__auto__(sevenguis.cells.column_labels);
})()),sevenguis$cells$cells_$_iter__30121(cljs.core.rest(s__30122__$2)));
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
