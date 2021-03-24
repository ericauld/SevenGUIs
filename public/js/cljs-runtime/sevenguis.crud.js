goog.provide('sevenguis.crud');

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
sevenguis.crud.Name = (function (first,last,__meta,__extmap,__hash){
this.first = first;
this.last = last;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.crud.Name.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.crud.Name.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k75059,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__75063 = k75059;
var G__75063__$1 = (((G__75063 instanceof cljs.core.Keyword))?G__75063.fqn:null);
switch (G__75063__$1) {
case "first":
return self__.first;

break;
case "last":
return self__.last;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75059,else__4383__auto__);

}
}));

(sevenguis.crud.Name.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__75064){
var vec__75065 = p__75064;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75065,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75065,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.crud.Name.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.crud.Name{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"first","first",-644103046),self__.first],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last","last",1105735132),self__.last],null))], null),self__.__extmap));
}));

(sevenguis.crud.Name.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75058){
var self__ = this;
var G__75058__$1 = this;
return (new cljs.core.RecordIter((0),G__75058__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"last","last",1105735132)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.crud.Name.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.crud.Name.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.crud.Name(self__.first,self__.last,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.crud.Name.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sevenguis.crud.Name.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1625436163 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.crud.Name.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75060,other75061){
var self__ = this;
var this75060__$1 = this;
return (((!((other75061 == null)))) && ((this75060__$1.constructor === other75061.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75060__$1.first,other75061.first)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75060__$1.last,other75061.last)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75060__$1.__extmap,other75061.__extmap)));
}));

(sevenguis.crud.Name.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),null,new cljs.core.Keyword(null,"last","last",1105735132),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.crud.Name(self__.first,self__.last,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.crud.Name.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__75058){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__75068 = cljs.core.keyword_identical_QMARK_;
var expr__75069 = k__4388__auto__;
if(cljs.core.truth_((pred__75068.cljs$core$IFn$_invoke$arity$2 ? pred__75068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),expr__75069) : pred__75068.call(null,new cljs.core.Keyword(null,"first","first",-644103046),expr__75069)))){
return (new sevenguis.crud.Name(G__75058,self__.last,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__75068.cljs$core$IFn$_invoke$arity$2 ? pred__75068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last","last",1105735132),expr__75069) : pred__75068.call(null,new cljs.core.Keyword(null,"last","last",1105735132),expr__75069)))){
return (new sevenguis.crud.Name(self__.first,G__75058,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.crud.Name(self__.first,self__.last,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__75058),null));
}
}
}));

(sevenguis.crud.Name.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"first","first",-644103046),self__.first,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last","last",1105735132),self__.last,null))], null),self__.__extmap));
}));

(sevenguis.crud.Name.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__75058){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.crud.Name(self__.first,self__.last,G__75058,self__.__extmap,self__.__hash));
}));

(sevenguis.crud.Name.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.crud.Name.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"last","last",-1548700637,null)], null);
}));

(sevenguis.crud.Name.cljs$lang$type = true);

(sevenguis.crud.Name.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.crud/Name",null,(1),null));
}));

(sevenguis.crud.Name.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.crud/Name");
}));

/**
 * Positional factory function for sevenguis.crud/Name.
 */
sevenguis.crud.__GT_Name = (function sevenguis$crud$__GT_Name(first,last){
return (new sevenguis.crud.Name(first,last,null,null,null));
});

/**
 * Factory function for sevenguis.crud/Name, taking a map of keywords to field values.
 */
sevenguis.crud.map__GT_Name = (function sevenguis$crud$map__GT_Name(G__75062){
var extmap__4419__auto__ = (function (){var G__75072 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__75062,new cljs.core.Keyword(null,"first","first",-644103046),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last","last",1105735132)], 0));
if(cljs.core.record_QMARK_(G__75062)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75072);
} else {
return G__75072;
}
})();
return (new sevenguis.crud.Name(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(G__75062),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(G__75062),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.crud.initial_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.crud.__GT_Name("Joni","Mitchell"),sevenguis.crud.__GT_Name("Trish","Keenan"),sevenguis.crud.__GT_Name("Laura","Viers"),sevenguis.crud.__GT_Name("Cate","Le Bon"),sevenguis.crud.__GT_Name("Verity","Susman")], null);
sevenguis.crud.size_of_name_list_window = (5);
sevenguis.crud.format_name = (function sevenguis$crud$format_name(name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(name)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(name))].join('');
});
sevenguis.crud.allowed_prefix_regex = /^[^\\]*$/;
sevenguis.crud.valid_prefix_QMARK_ = (function sevenguis$crud$valid_prefix_QMARK_(user_input){
if(cljs.core.not(user_input)){
return true;
} else {
return (!((cljs.core.re_matches(sevenguis.crud.allowed_prefix_regex,user_input) == null)));
}
});
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.crud !== 'undefined') && (typeof sevenguis.crud._BANG_app_db !== 'undefined')){
} else {
sevenguis.crud._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name-list","name-list",-749937499),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.crud.__GT_Name("Joni","Mitchell"),sevenguis.crud.__GT_Name("Trish","Keenan"),sevenguis.crud.__GT_Name("Laura","Viers"),sevenguis.crud.__GT_Name("Cate","Le Bon"),sevenguis.crud.__GT_Name("Verity","Susman")], null),new cljs.core.Keyword(null,"prefix-input","prefix-input",-1285822663),null,new cljs.core.Keyword(null,"name-input","name-input",25417616),null,new cljs.core.Keyword(null,"surname-input","surname-input",637604889),null,new cljs.core.Keyword(null,"focus","focus",234677911),null,new cljs.core.Keyword(null,"selected-name-index","selected-name-index",-648018033),null], null));
}
sevenguis.crud._BANG_focus = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",234677911)], null));
sevenguis.crud._BANG_prefix = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix-input","prefix-input",-1285822663)], null));
sevenguis.crud._BANG_names = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name-list","name-list",-749937499)], null));
sevenguis.crud._BANG_selected = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-name-index","selected-name-index",-648018033)], null));
sevenguis.crud._BANG_prefix_valid_QMARK_ = reagent.core.track((function (){
return sevenguis.crud.valid_prefix_QMARK_(cljs.core.deref(sevenguis.crud._BANG_prefix));
}));
sevenguis.crud._BANG_first_name_input = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name-input","name-input",25417616)], null));
sevenguis.crud._BANG_surname_input = reagent.core.cursor(sevenguis.crud._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"surname-input","surname-input",637604889)], null));
sevenguis.crud._BANG_user_input_as_Name = reagent.core.track((function sevenguis$crud$make_name_from_user_input(){
var first_name = cljs.core.deref(sevenguis.crud._BANG_first_name_input);
var surname = cljs.core.deref(sevenguis.crud._BANG_surname_input);
if(((typeof first_name === 'string') && (typeof surname === 'string') && ((!(clojure.string.blank_QMARK_(first_name)))) && ((!(clojure.string.blank_QMARK_(surname)))))){
return sevenguis.crud.__GT_Name(first_name,surname);
} else {
return null;
}
}));
sevenguis.crud.matches_QMARK_ = (function sevenguis$crud$matches_QMARK_(prefix,name){
if(((cljs.core.not(prefix)) || (((typeof prefix === 'string') && (clojure.string.blank_QMARK_(prefix)))))){
return true;
} else {
var prefix_pattern = cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return (!((cljs.core.re_find(prefix_pattern,new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(name)) == null)));
}
});
sevenguis.crud._BANG_matches_prefix_QMARK_ = reagent.core.track((function sevenguis$crud$get_prefix_matcher(){
return (function (name){
if(cljs.core.not(cljs.core.deref(sevenguis.crud._BANG_prefix_valid_QMARK_))){
return false;
} else {
return sevenguis.crud.matches_QMARK_(cljs.core.deref(sevenguis.crud._BANG_prefix),name);
}
});
}));
sevenguis.crud.crud_buttons = (function sevenguis$crud$crud_buttons(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line.button-line","div.gui-line.button-line",-639077900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$crud$crud_buttons_$_create_on_click(_){
var temp__5735__auto__ = cljs.core.deref(sevenguis.crud._BANG_user_input_as_Name);
if(cljs.core.truth_(temp__5735__auto__)){
var name = temp__5735__auto__;
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.crud._BANG_names,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));

cljs.core.reset_BANG_(sevenguis.crud._BANG_first_name_input,null);

return cljs.core.reset_BANG_(sevenguis.crud._BANG_surname_input,null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(sevenguis.crud._BANG_user_input_as_Name))], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_every_QMARK_(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(sevenguis.crud._BANG_selected),cljs.core.deref(sevenguis.crud._BANG_user_input_as_Name)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$crud$crud_buttons_$_update_on_click(_){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.crud._BANG_names,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(sevenguis.crud._BANG_selected),cljs.core.deref(sevenguis.crud._BANG_user_input_as_Name)], 0));

cljs.core.reset_BANG_(sevenguis.crud._BANG_first_name_input,null);

return cljs.core.reset_BANG_(sevenguis.crud._BANG_surname_input,null);
})], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.deref(sevenguis.crud._BANG_selected)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$crud$crud_buttons_$_delete_on_click(_){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.crud._BANG_names,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(sevenguis.crud._BANG_selected),null], 0));

return cljs.core.reset_BANG_(sevenguis.crud._BANG_selected,null);
})], null),"Delete"], null)], null);
});
sevenguis.crud.name_input = (function sevenguis$crud$name_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.crud-column","div.crud-column",1315181487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#blank-line.gui-line","div#blank-line.gui-line",1014710288)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subcolumn-wrapper","div.subcolumn-wrapper",-1455085521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subcolumn","div.subcolumn",-1198764863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Name:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Surname:"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subcolumn","div.subcolumn",-1198764863),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(sevenguis.crud._BANG_first_name_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function sevenguis$crud$name_input_$_name_input_on_change(e){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_first_name_input,e.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function sevenguis$crud$name_input_$_name_input_on_focus(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,new cljs.core.Keyword(null,"name-input","name-input",25417616));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$crud$name_input_$_name_input_on_blur(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,null);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(sevenguis.crud._BANG_surname_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function sevenguis$crud$name_input_$_surname_input_on_change(e){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_surname_input,e.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function sevenguis$crud$name_input_$_surname_input_on_focus(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,new cljs.core.Keyword(null,"surname-input","surname-input",637604889));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$crud$name_input_$_surname_input_on_blur(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,null);
})], null)], null)], null)], null)], null)], null);
});
sevenguis.crud.prefix_input = (function sevenguis$crud$prefix_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Filter prefix:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#prefix-input","input#prefix-input",-1302244132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(cljs.core.deref(sevenguis.crud._BANG_prefix_valid_QMARK_))?null:"bad-input"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function sevenguis$crud$prefix_input_$_on_change_prefix_input(e){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_prefix,e.target.value);
}),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function sevenguis$crud$prefix_input_$_prefix_input_on_focus(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,new cljs.core.Keyword(null,"prefix-input","prefix-input",-1285822663));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function sevenguis$crud$prefix_input_$_prefix_input_on_blur(_){
return cljs.core.reset_BANG_(sevenguis.crud._BANG_focus,null);
})], null)], null)], null);
});
sevenguis.crud.crud = (function sevenguis$crud$crud(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#crud.gui","div#crud.gui",165717826),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.crud-column-wrapper","div.crud-column-wrapper",-202540491),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.crud-column","div.crud-column",1315181487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.crud.prefix_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.filtered_list,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"!items","!items",1965469221),sevenguis.crud._BANG_names,new cljs.core.Keyword(null,"!keep?","!keep?",1059574733),sevenguis.crud._BANG_matches_prefix_QMARK_,new cljs.core.Keyword(null,"!focus","!focus",382027913),sevenguis.crud._BANG_focus,new cljs.core.Keyword(null,"size","size",1098693007),sevenguis.crud.size_of_name_list_window,new cljs.core.Keyword(null,"item->str","item->str",-951370232),sevenguis.crud.format_name,new cljs.core.Keyword(null,"!selected-item-index","!selected-item-index",-3640468),sevenguis.crud._BANG_selected], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.crud.name_input], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.crud.crud_buttons], null)], null);
});

//# sourceMappingURL=sevenguis.crud.js.map
