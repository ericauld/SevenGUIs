goog.provide('sevenguis.flight_booker');
sevenguis.flight_booker.date_separator = "/";
sevenguis.flight_booker.notation = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),"mm",new cljs.core.Keyword(null,"day","day",-274800446),"dd",new cljs.core.Keyword(null,"year","year",335913393),"yyyy"], null);
sevenguis.flight_booker.date_notation_order = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"year","year",335913393)], null);
sevenguis.flight_booker.date_format = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sevenguis.flight_booker.date_separator,(function (){var iter__4529__auto__ = (function sevenguis$flight_booker$iter__75189(s__75190){
return (new cljs.core.LazySeq(null,(function (){
var s__75190__$1 = s__75190;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75190__$1);
if(temp__5735__auto__){
var s__75190__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75190__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75190__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75192 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75191 = (0);
while(true){
if((i__75191 < size__4528__auto__)){
var time_period = cljs.core._nth(c__4527__auto__,i__75191);
cljs.core.chunk_append(b__75192,(time_period.cljs$core$IFn$_invoke$arity$1 ? time_period.cljs$core$IFn$_invoke$arity$1(sevenguis.flight_booker.notation) : time_period.call(null,sevenguis.flight_booker.notation)));

var G__75301 = (i__75191 + (1));
i__75191 = G__75301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75192),sevenguis$flight_booker$iter__75189(cljs.core.chunk_rest(s__75190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75192),null);
}
} else {
var time_period = cljs.core.first(s__75190__$2);
return cljs.core.cons((time_period.cljs$core$IFn$_invoke$arity$1 ? time_period.cljs$core$IFn$_invoke$arity$1(sevenguis.flight_booker.notation) : time_period.call(null,sevenguis.flight_booker.notation)),sevenguis$flight_booker$iter__75189(cljs.core.rest(s__75190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.flight_booker.date_notation_order);
})());
sevenguis.flight_booker.pattern_for = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),"\\d{2}",new cljs.core.Keyword(null,"day","day",-274800446),"\\d{2}",new cljs.core.Keyword(null,"year","year",335913393),"\\d{4}"], null);
sevenguis.flight_booker.date_pattern = cljs.core.re_pattern(["^",clojure.string.join.cljs$core$IFn$_invoke$arity$2(sevenguis.flight_booker.date_separator,(function (){var iter__4529__auto__ = (function sevenguis$flight_booker$iter__75225(s__75226){
return (new cljs.core.LazySeq(null,(function (){
var s__75226__$1 = s__75226;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__75226__$1);
if(temp__5735__auto__){
var s__75226__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75226__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__75226__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__75228 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__75227 = (0);
while(true){
if((i__75227 < size__4528__auto__)){
var time_period = cljs.core._nth(c__4527__auto__,i__75227);
cljs.core.chunk_append(b__75228,(time_period.cljs$core$IFn$_invoke$arity$1 ? time_period.cljs$core$IFn$_invoke$arity$1(sevenguis.flight_booker.pattern_for) : time_period.call(null,sevenguis.flight_booker.pattern_for)));

var G__75303 = (i__75227 + (1));
i__75227 = G__75303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75228),sevenguis$flight_booker$iter__75225(cljs.core.chunk_rest(s__75226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75228),null);
}
} else {
var time_period = cljs.core.first(s__75226__$2);
return cljs.core.cons((time_period.cljs$core$IFn$_invoke$arity$1 ? time_period.cljs$core$IFn$_invoke$arity$1(sevenguis.flight_booker.pattern_for) : time_period.call(null,sevenguis.flight_booker.pattern_for)),sevenguis$flight_booker$iter__75225(cljs.core.rest(s__75226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sevenguis.flight_booker.date_notation_order);
})()),"$"].join(''));
sevenguis.flight_booker.actual_date_QMARK_ = (function sevenguis$flight_booker$actual_date_QMARK_(p__75234){
var map__75235 = p__75234;
var map__75235__$1 = (((((!((map__75235 == null))))?(((((map__75235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75235):map__75235);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75235__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75235__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75235__$1,new cljs.core.Keyword(null,"year","year",335913393));




var date_candidate = (new Date(year,(month - (1)),day));
var parsed_month = (date_candidate.getMonth() + (1));
var parsed_day = date_candidate.getDate();
var parsed_year = date_candidate.getFullYear();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,day,year], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parsed_month,parsed_day,parsed_year], null));
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
sevenguis.flight_booker.Date = (function (month,day,year,__meta,__extmap,__hash){
this.month = month;
this.day = day;
this.year = year;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.flight_booker.Date.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75245,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75249 = k75245;
var G__75249__$1 = (((G__75249 instanceof cljs.core.Keyword))?G__75249.fqn:null);
switch (G__75249__$1) {
case "month":
return self__.month;

break;
case "day":
return self__.day;

break;
case "year":
return self__.year;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75245,else__4383__auto__);

}
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75250){
var vec__75251 = p__75250;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75251,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75251,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.flight-booker.Date{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"month","month",-1960248533),self__.month],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"day","day",-274800446),self__.day],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"year","year",335913393),self__.year],null))], null),self__.__extmap));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75244){
var self__ = this;
var G__75244__$1 = this;
return (new cljs.core.RecordIter((0),G__75244__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"year","year",335913393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.flight_booker.Date(self__.month,self__.day,self__.year,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1433897047 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75246,other75247){
var self__ = this;
var this75246__$1 = this;
return (((!((other75247 == null)))) && ((this75246__$1.constructor === other75247.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75246__$1.month,other75247.month)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75246__$1.day,other75247.day)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75246__$1.year,other75247.year)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75246__$1.__extmap,other75247.__extmap)));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),null,new cljs.core.Keyword(null,"month","month",-1960248533),null,new cljs.core.Keyword(null,"year","year",335913393),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.flight_booker.Date(self__.month,self__.day,self__.year,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75244){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75263 = cljs.core.keyword_identical_QMARK_;
var expr__75264 = k__4388__auto__;
if(cljs.core.truth_((pred__75263.cljs$core$IFn$_invoke$arity$2 ? pred__75263.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month","month",-1960248533),expr__75264) : pred__75263.call(null,new cljs.core.Keyword(null,"month","month",-1960248533),expr__75264)))){
return (new sevenguis.flight_booker.Date(G__75244,self__.day,self__.year,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75263.cljs$core$IFn$_invoke$arity$2 ? pred__75263.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day","day",-274800446),expr__75264) : pred__75263.call(null,new cljs.core.Keyword(null,"day","day",-274800446),expr__75264)))){
return (new sevenguis.flight_booker.Date(self__.month,G__75244,self__.year,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75263.cljs$core$IFn$_invoke$arity$2 ? pred__75263.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),expr__75264) : pred__75263.call(null,new cljs.core.Keyword(null,"year","year",335913393),expr__75264)))){
return (new sevenguis.flight_booker.Date(self__.month,self__.day,G__75244,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.flight_booker.Date(self__.month,self__.day,self__.year,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75244),null));
}
}
}
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"month","month",-1960248533),self__.month,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"day","day",-274800446),self__.day,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"year","year",335913393),self__.year,null))], null),self__.__extmap));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75244){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.flight_booker.Date(self__.month,self__.day,self__.year,G__75244,self__.__extmap,self__.__hash));
}));

(sevenguis.flight_booker.Date.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.flight_booker.Date.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"month","month",-319717006,null),new cljs.core.Symbol(null,"day","day",1365731081,null),new cljs.core.Symbol(null,"year","year",1976444920,null)], null);
}));

(sevenguis.flight_booker.Date.cljs$lang$type = true);

(sevenguis.flight_booker.Date.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.flight-booker/Date",null,(1),null));
}));

(sevenguis.flight_booker.Date.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.flight-booker/Date");
}));

/**
 * Positional factory function for sevenguis.flight-booker/Date.
 */
sevenguis.flight_booker.__GT_Date = (function sevenguis$flight_booker$__GT_Date(month,day,year){
return (new sevenguis.flight_booker.Date(month,day,year,null,null,null));
});

/**
 * Factory function for sevenguis.flight-booker/Date, taking a map of keywords to field values.
 */
sevenguis.flight_booker.map__GT_Date = (function sevenguis$flight_booker$map__GT_Date(G__75248){
var extmap__4419__auto__ = (function (){var G__75269 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75248,new cljs.core.Keyword(null,"month","month",-1960248533),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"year","year",335913393)], 0));
if(cljs.core.record_QMARK_(G__75248)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75269);
} else {
return G__75269;
}
})();
return (new sevenguis.flight_booker.Date(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(G__75248),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(G__75248),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(G__75248),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.flight_booker.today = (function sevenguis$flight_booker$today(){
var now = (new Date());
var month = (now.getMonth() + (1));
var day = now.getDate();
var year = now.getFullYear();
return sevenguis.flight_booker.__GT_Date(month,day,year);
});
sevenguis.flight_booker.is_before_or_same_as = (function sevenguis$flight_booker$is_before_or_same_as(date1,date2){
return (cljs.core.compare(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(date1),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(date1),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(date1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(date2),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(date2),new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(date2)], null)) <= (0));
});
sevenguis.flight_booker.already_happened_QMARK_ = (function sevenguis$flight_booker$already_happened_QMARK_(date){
return (!(sevenguis.flight_booker.is_before_or_same_as(sevenguis.flight_booker.today(),date)));
});
sevenguis.flight_booker.flight_types = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"one-way","one-way",-1465093708),new cljs.core.Keyword(null,"round-trip","round-trip",99316507)], null);
sevenguis.flight_booker.default_flight_type = new cljs.core.Keyword(null,"one-way","one-way",-1465093708);
sevenguis.flight_booker.booking_states = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"not-ready","not-ready",-191902149),new cljs.core.Keyword(null,"date-in-the-past","date-in-the-past",-1636309124),new cljs.core.Keyword(null,"dates-out-of-order","dates-out-of-order",-464969492),new cljs.core.Keyword(null,"success","success",1890645906)], null);
sevenguis.flight_booker.matches_date_format_QMARK_ = (function sevenguis$flight_booker$matches_date_format_QMARK_(s){
var v = s;
var v__$1 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__75280_SHARP_){
return cljs.core.re_matches(sevenguis.flight_booker.date_pattern,p1__75280_SHARP_);
}),"")(v);
return (!((v__$1 == null)));
});
sevenguis.flight_booker.str__GT_Date = (function sevenguis$flight_booker$str__GT_Date(s){
if(sevenguis.flight_booker.matches_date_format_QMARK_(s)){
var date_keys = sevenguis.flight_booker.date_notation_order;
var date_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,sevenguis.flight_booker.date_separator));
var parse_attempt = sevenguis.flight_booker.map__GT_Date(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(date_keys,date_values)));
if(sevenguis.flight_booker.actual_date_QMARK_(parse_attempt)){
return parse_attempt;
} else {
return null;
}
} else {
return null;
}
});
sevenguis.flight_booker.bad_input_QMARK_ = (function sevenguis$flight_booker$bad_input_QMARK_(date_str){
if(cljs.core.not(date_str)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date_str,"")){
return false;
} else {
if(cljs.core.not(sevenguis.flight_booker.str__GT_Date(date_str))){
return true;
} else {
return false;

}
}
}
});
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.flight_booker !== 'undefined') && (typeof sevenguis.flight_booker._BANG_app_db !== 'undefined')){
} else {
sevenguis.flight_booker._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),sevenguis.flight_booker.default_flight_type,new cljs.core.Keyword(null,"departure-input","departure-input",-1074192963),null,new cljs.core.Keyword(null,"return-input","return-input",-300902515),null], null));
}
sevenguis.flight_booker._BANG_flight_type = reagent.core.cursor(sevenguis.flight_booker._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flight-type","flight-type",-24264583)], null));
sevenguis.flight_booker._BANG_one_way_QMARK_ = reagent.core.track((function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.flight_booker._BANG_flight_type),new cljs.core.Keyword(null,"one-way","one-way",-1465093708));
}));
sevenguis.flight_booker._BANG_departure_input = reagent.core.cursor(sevenguis.flight_booker._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"departure-input","departure-input",-1074192963)], null));
sevenguis.flight_booker._BANG_return_input = reagent.core.cursor(sevenguis.flight_booker._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"return-input","return-input",-300902515)], null));
sevenguis.flight_booker.success_states = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"not-ready","not-ready",-191902149),new cljs.core.Keyword(null,"date-in-the-past","date-in-the-past",-1636309124),new cljs.core.Keyword(null,"dates-out-of-order","dates-out-of-order",-464969492),new cljs.core.Keyword(null,"success","success",1890645906)], null);
sevenguis.flight_booker.success_state = (function sevenguis$flight_booker$success_state(departure_input,return_input,one_way_QMARK_){
var departure_date_attempt = sevenguis.flight_booker.str__GT_Date(departure_input);
var return_date_attempt = sevenguis.flight_booker.str__GT_Date(return_input);
if(cljs.core.truth_(one_way_QMARK_)){
if((!(sevenguis.flight_booker.matches_date_format_QMARK_(departure_input)))){
return new cljs.core.Keyword(null,"not-ready","not-ready",-191902149);
} else {
if(cljs.core.not(departure_date_attempt)){
return new cljs.core.Keyword(null,"not-ready","not-ready",-191902149);
} else {
if(sevenguis.flight_booker.already_happened_QMARK_(departure_date_attempt)){
return new cljs.core.Keyword(null,"date-in-the-past","date-in-the-past",-1636309124);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906);

}
}
}
} else {
if(cljs.core.not_every_QMARK_(sevenguis.flight_booker.matches_date_format_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [departure_input,return_input], null))){
return new cljs.core.Keyword(null,"not-ready","not-ready",-191902149);
} else {
if(cljs.core.not_every_QMARK_(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [departure_date_attempt,return_date_attempt], null))){
return new cljs.core.Keyword(null,"not-ready","not-ready",-191902149);
} else {
if(cljs.core.truth_(cljs.core.some(sevenguis.flight_booker.already_happened_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [departure_date_attempt,return_date_attempt], null)))){
return new cljs.core.Keyword(null,"date-in-the-past","date-in-the-past",-1636309124);
} else {
if((!(sevenguis.flight_booker.is_before_or_same_as(departure_date_attempt,return_date_attempt)))){
return new cljs.core.Keyword(null,"dates-out-of-order","dates-out-of-order",-464969492);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906);

}
}
}
}

}
});
sevenguis.flight_booker._BANG_success_state = reagent.core.track((function (){
return sevenguis.flight_booker.success_state(cljs.core.deref(sevenguis.flight_booker._BANG_departure_input),cljs.core.deref(sevenguis.flight_booker._BANG_return_input),cljs.core.deref(sevenguis.flight_booker._BANG_one_way_QMARK_));
}));
sevenguis.flight_booker.message = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not-ready","not-ready",-191902149),null,new cljs.core.Keyword(null,"date-in-the-past","date-in-the-past",-1636309124),["We regret to inform you that at least one of the dates ","you have chosen is in the past."].join(''),new cljs.core.Keyword(null,"dates-out-of-order","dates-out-of-order",-464969492),"Unfortunately, it is impossible to return before you depart.",new cljs.core.Keyword(null,"success","success",1890645906),"You're all set!"], null);
sevenguis.flight_booker._BANG_modal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.flight_booker.modal = (function sevenguis$flight_booker$modal(p__75289){
var map__75290 = p__75289;
var map__75290__$1 = (((((!((map__75290 == null))))?(((((map__75290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75290):map__75290);
var _BANG_modal_element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75290__$1,new cljs.core.Keyword(null,"!modal-element","!modal-element",-800405911));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75290__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var button_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75290__$1,new cljs.core.Keyword(null,"button-text","button-text",-1800441720));
var times_symbol = "\u00D7";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__75288_SHARP_){
return cljs.core.reset_BANG_(_BANG_modal_element,p1__75288_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-close-wrapper","div.dialog-close-wrapper",-1292050291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dialog-close","span.dialog-close",-360255878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5735__auto__ = cljs.core.deref(_BANG_modal_element);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return modal.close();
} else {
return null;
}
})], null),times_symbol], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),text], null),(cljs.core.truth_(button_text)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),button_text], null):null)], null);
});
sevenguis.flight_booker.flight_booker2 = (function sevenguis$flight_booker$flight_booker2(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui.flight-booker","div.gui.flight-booker",-1900412236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__75294_SHARP_){
return cljs.core.reset_BANG_(sevenguis.flight_booker._BANG_flight_type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__75294_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"one-way","one-way",-1465093708)], null),"One-way flight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"round-trip","round-trip",99316507)], null),"Round-trip flight"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(sevenguis.flight_booker._BANG_departure_input),new cljs.core.Keyword(null,"className","className",-1983287057),((sevenguis.flight_booker.bad_input_QMARK_(cljs.core.deref(sevenguis.flight_booker._BANG_departure_input)))?"bad-input":null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),sevenguis.flight_booker.date_format,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__75295_SHARP_){
return cljs.core.reset_BANG_(sevenguis.flight_booker._BANG_departure_input,p1__75295_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(cljs.core.deref(sevenguis.flight_booker._BANG_one_way_QMARK_))?null:cljs.core.deref(sevenguis.flight_booker._BANG_return_input)),new cljs.core.Keyword(null,"className","className",-1983287057),((((cljs.core.not(cljs.core.deref(sevenguis.flight_booker._BANG_one_way_QMARK_))) && (sevenguis.flight_booker.bad_input_QMARK_(cljs.core.deref(sevenguis.flight_booker._BANG_return_input)))))?"bad-input":null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(cljs.core.deref(sevenguis.flight_booker._BANG_one_way_QMARK_))?null:sevenguis.flight_booker.date_format),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__75296_SHARP_){
return cljs.core.reset_BANG_(sevenguis.flight_booker._BANG_return_input,p1__75296_SHARP_.target.value);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(sevenguis.flight_booker._BANG_one_way_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#book-button","button#book-button",-306767388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5735__auto__ = cljs.core.deref(sevenguis.flight_booker._BANG_modal);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return modal.showModal();
} else {
return null;
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.flight_booker._BANG_success_state),new cljs.core.Keyword(null,"not-ready","not-ready",-191902149))], null),"Book!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.flight_booker.modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"!modal-element","!modal-element",-800405911),sevenguis.flight_booker._BANG_modal,new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var fexpr__75300 = cljs.core.deref(sevenguis.flight_booker._BANG_success_state);
return (fexpr__75300.cljs$core$IFn$_invoke$arity$1 ? fexpr__75300.cljs$core$IFn$_invoke$arity$1(sevenguis.flight_booker.message) : fexpr__75300.call(null,sevenguis.flight_booker.message));
})()], null)], null)], null);
});

//# sourceMappingURL=sevenguis.flight_booker.js.map
