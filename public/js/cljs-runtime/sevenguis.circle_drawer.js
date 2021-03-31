goog.provide('sevenguis.circle_drawer');
sevenguis.circle_drawer.bubble_scale = (112);
sevenguis.circle_drawer.bubble_shift = (10);
sevenguis.circle_drawer.default_diameter = (40);
sevenguis.circle_drawer.min_diameter = (1);
sevenguis.circle_drawer.max_diameter = (500);
sevenguis.circle_drawer.diameter_step = (1);
sevenguis.circle_drawer.circle_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#6e6e6e",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.25], null);
sevenguis.circle_drawer.fill_color_of_selected = "#b5b3b3";

/**
 * @interface
 */
sevenguis.circle_drawer.Drawable = function(){};

var sevenguis$circle_drawer$Drawable$draw$dyn_29878 = (function() {
var G__29879 = null;
var G__29879__1 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.circle_drawer.draw[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.circle_drawer.draw["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Drawable.draw",this$);
}
}
});
var G__29879__2 = (function (this$,settings){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.circle_drawer.draw[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,settings) : m__4429__auto__.call(null,this$,settings));
} else {
var m__4426__auto__ = (sevenguis.circle_drawer.draw["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,settings) : m__4426__auto__.call(null,this$,settings));
} else {
throw cljs.core.missing_protocol("Drawable.draw",this$);
}
}
});
G__29879 = function(this$,settings){
switch(arguments.length){
case 1:
return G__29879__1.call(this,this$);
case 2:
return G__29879__2.call(this,this$,settings);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29879.cljs$core$IFn$_invoke$arity$1 = G__29879__1;
G__29879.cljs$core$IFn$_invoke$arity$2 = G__29879__2;
return G__29879;
})()
;
sevenguis.circle_drawer.draw = (function sevenguis$circle_drawer$draw(var_args){
var G__29811 = arguments.length;
switch (G__29811) {
case 1:
return sevenguis.circle_drawer.draw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sevenguis.circle_drawer.draw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.circle_drawer.draw.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$circle_drawer$Drawable$draw$arity$1 == null)))))){
return this$.sevenguis$circle_drawer$Drawable$draw$arity$1(this$);
} else {
return sevenguis$circle_drawer$Drawable$draw$dyn_29878(this$);
}
}));

(sevenguis.circle_drawer.draw.cljs$core$IFn$_invoke$arity$2 = (function (this$,settings){
if((((!((this$ == null)))) && ((!((this$.sevenguis$circle_drawer$Drawable$draw$arity$2 == null)))))){
return this$.sevenguis$circle_drawer$Drawable$draw$arity$2(this$,settings);
} else {
return sevenguis$circle_drawer$Drawable$draw$dyn_29878(this$,settings);
}
}));

(sevenguis.circle_drawer.draw.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {sevenguis.circle_drawer.Drawable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sevenguis.circle_drawer.Circle = (function (diameter,center_position,__meta,__extmap,__hash){
this.diameter = diameter;
this.center_position = center_position;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.circle_drawer.Circle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29813,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29817 = k29813;
var G__29817__$1 = (((G__29817 instanceof cljs.core.Keyword))?G__29817.fqn:null);
switch (G__29817__$1) {
case "diameter":
return self__.diameter;

break;
case "center-position":
return self__.center_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29813,else__4383__auto__);

}
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__29818){
var vec__29819 = p__29818;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29819,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29819,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.circle-drawer.Circle{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center-position","center-position",-1139175181),self__.center_position],null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29812){
var self__ = this;
var G__29812__$1 = this;
return (new cljs.core.RecordIter((0),G__29812__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"center-position","center-position",-1139175181)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.circle_drawer.Circle(self__.diameter,self__.center_position,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1785844255 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29814,other29815){
var self__ = this;
var this29814__$1 = this;
return (((!((other29815 == null)))) && ((this29814__$1.constructor === other29815.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29814__$1.diameter,other29815.diameter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29814__$1.center_position,other29815.center_position)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29814__$1.__extmap,other29815.__extmap)));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"diameter","diameter",1560913323),null,new cljs.core.Keyword(null,"center-position","center-position",-1139175181),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.circle_drawer.Circle(self__.diameter,self__.center_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29812){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29822 = cljs.core.keyword_identical_QMARK_;
var expr__29823 = k__4388__auto__;
if(cljs.core.truth_((pred__29822.cljs$core$IFn$_invoke$arity$2 ? pred__29822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__29823) : pred__29822.call(null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__29823)))){
return (new sevenguis.circle_drawer.Circle(G__29812,self__.center_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29822.cljs$core$IFn$_invoke$arity$2 ? pred__29822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center-position","center-position",-1139175181),expr__29823) : pred__29822.call(null,new cljs.core.Keyword(null,"center-position","center-position",-1139175181),expr__29823)))){
return (new sevenguis.circle_drawer.Circle(self__.diameter,G__29812,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.circle_drawer.Circle(self__.diameter,self__.center_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__29812),null));
}
}
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"center-position","center-position",-1139175181),self__.center_position,null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Circle.prototype.sevenguis$circle_drawer$Drawable$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.circle_drawer.Circle.prototype.sevenguis$circle_drawer$Drawable$draw$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.sevenguis$circle_drawer$Drawable$draw$arity$2(null,null);
}));

(sevenguis.circle_drawer.Circle.prototype.sevenguis$circle_drawer$Drawable$draw$arity$2 = (function (_this,settings){
var self__ = this;
var _this__$1 = this;
var vec__29825 = self__.center_position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(self__.diameter / (2)),new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y], null),settings], 0))], null);
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29812){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.circle_drawer.Circle(self__.diameter,self__.center_position,G__29812,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Circle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.circle_drawer.Circle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"diameter","diameter",-1093522446,null),new cljs.core.Symbol(null,"center-position","center-position",501356346,null)], null);
}));

(sevenguis.circle_drawer.Circle.cljs$lang$type = true);

(sevenguis.circle_drawer.Circle.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.circle-drawer/Circle",null,(1),null));
}));

(sevenguis.circle_drawer.Circle.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.circle-drawer/Circle");
}));

/**
 * Positional factory function for sevenguis.circle-drawer/Circle.
 */
sevenguis.circle_drawer.__GT_Circle = (function sevenguis$circle_drawer$__GT_Circle(diameter,center_position){
return (new sevenguis.circle_drawer.Circle(diameter,center_position,null,null,null));
});

/**
 * Factory function for sevenguis.circle-drawer/Circle, taking a map of keywords to field values.
 */
sevenguis.circle_drawer.map__GT_Circle = (function sevenguis$circle_drawer$map__GT_Circle(G__29816){
var extmap__4419__auto__ = (function (){var G__29828 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29816,new cljs.core.Keyword(null,"diameter","diameter",1560913323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"center-position","center-position",-1139175181)], 0));
if(cljs.core.record_QMARK_(G__29816)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29828);
} else {
return G__29828;
}
})();
return (new sevenguis.circle_drawer.Circle(new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(G__29816),new cljs.core.Keyword(null,"center-position","center-position",-1139175181).cljs$core$IFn$_invoke$arity$1(G__29816),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

if((typeof sevenguis !== 'undefined') && (typeof sevenguis.circle_drawer !== 'undefined') && (typeof sevenguis.circle_drawer._BANG_app_db !== 'undefined')){
} else {
sevenguis.circle_drawer._BANG_app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"modal-menu-visible?","modal-menu-visible?",1423465046),null,new cljs.core.Keyword(null,"context-menu-visible?","context-menu-visible?",1010005248),null,new cljs.core.Keyword(null,"mouse-position-rel-svg","mouse-position-rel-svg",1847372649),null,new cljs.core.Keyword(null,"context-menu-position","context-menu-position",548172821),null,new cljs.core.Keyword(null,"cached-selected-circle-index","cached-selected-circle-index",1429000523),null,new cljs.core.Keyword(null,"cached-selected-circle-diameter","cached-selected-circle-diameter",1067654432),null], null));
}
sevenguis.circle_drawer._BANG_circles = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circles","circles",-1947060917)], null));
if((typeof sevenguis !== 'undefined') && (typeof sevenguis.circle_drawer !== 'undefined') && (typeof sevenguis.circle_drawer._BANG_circle_history !== 'undefined')){
} else {
sevenguis.circle_drawer._BANG_circle_history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.PersistentVector.EMPTY], null));
}

/**
 * @interface
 */
sevenguis.circle_drawer.Undoable_Command = function(){};

var sevenguis$circle_drawer$Undoable_Command$execute$dyn_29882 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.circle_drawer.execute[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.circle_drawer.execute["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Undoable-Command.execute",this$);
}
}
});
sevenguis.circle_drawer.execute = (function sevenguis$circle_drawer$execute(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$circle_drawer$Undoable_Command$execute$arity$1 == null)))))){
return this$.sevenguis$circle_drawer$Undoable_Command$execute$arity$1(this$);
} else {
return sevenguis$circle_drawer$Undoable_Command$execute$dyn_29882(this$);
}
});

var sevenguis$circle_drawer$Undoable_Command$undo$dyn_29883 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.circle_drawer.undo[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.circle_drawer.undo["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Undoable-Command.undo",this$);
}
}
});
sevenguis.circle_drawer.undo = (function sevenguis$circle_drawer$undo(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$circle_drawer$Undoable_Command$undo$arity$1 == null)))))){
return this$.sevenguis$circle_drawer$Undoable_Command$undo$arity$1(this$);
} else {
return sevenguis$circle_drawer$Undoable_Command$undo$dyn_29883(this$);
}
});

var sevenguis$circle_drawer$Undoable_Command$redo$dyn_29884 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sevenguis.circle_drawer.redo[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sevenguis.circle_drawer.redo["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Undoable-Command.redo",this$);
}
}
});
/**
 * Redo behavior should differ from execute behavior in that upon redo, the redo stack is not cleared
 */
sevenguis.circle_drawer.redo = (function sevenguis$circle_drawer$redo(this$){
if((((!((this$ == null)))) && ((!((this$.sevenguis$circle_drawer$Undoable_Command$redo$arity$1 == null)))))){
return this$.sevenguis$circle_drawer$Undoable_Command$redo$arity$1(this$);
} else {
return sevenguis$circle_drawer$Undoable_Command$redo$dyn_29884(this$);
}
});

sevenguis.circle_drawer.add_to_history_BANG_ = (function sevenguis$circle_drawer$add_to_history_BANG_(_BANG_history,command){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.conj,command], 0));

return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.PersistentVector.EMPTY], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.circle_drawer.Undoable_Command}
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
sevenguis.circle_drawer.Add_Circle_Command = (function (location,diameter,_BANG_memento,__meta,__extmap,__hash){
this.location = location;
this.diameter = diameter;
this._BANG_memento = _BANG_memento;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29830,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29834 = k29830;
var G__29834__$1 = (((G__29834 instanceof cljs.core.Keyword))?G__29834.fqn:null);
switch (G__29834__$1) {
case "location":
return self__.location;

break;
case "diameter":
return self__.diameter;

break;
case "!memento":
return self__._BANG_memento;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29830,else__4383__auto__);

}
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__29835){
var vec__29836 = p__29835;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29836,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29836,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.circle-drawer.Add-Circle-Command{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location","location",1815599388),self__.location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!memento","!memento",1194699893),self__._BANG_memento],null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29829){
var self__ = this;
var G__29829__$1 = this;
return (new cljs.core.RecordIter((0),G__29829__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"!memento","!memento",1194699893)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,self__.diameter,self__._BANG_memento,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.sevenguis$circle_drawer$Undoable_Command$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.circle_drawer.Add_Circle_Command.prototype.sevenguis$circle_drawer$Undoable_Command$execute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(self__._BANG_memento,cljs.core.deref(sevenguis.circle_drawer._BANG_circles));

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_circles,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sevenguis.circle_drawer.__GT_Circle(self__.diameter,self__.location)], 0));

return sevenguis.circle_drawer.add_to_history_BANG_(sevenguis.circle_drawer._BANG_circle_history,this$__$1);
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.sevenguis$circle_drawer$Undoable_Command$redo$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_circles,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sevenguis.circle_drawer.__GT_Circle(self__.diameter,self__.location)], 0));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.sevenguis$circle_drawer$Undoable_Command$undo$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_circles,cljs.core.deref(self__._BANG_memento));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1674340153 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29831,other29832){
var self__ = this;
var this29831__$1 = this;
return (((!((other29832 == null)))) && ((this29831__$1.constructor === other29832.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29831__$1.location,other29832.location)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29831__$1.diameter,other29832.diameter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29831__$1._BANG_memento,other29832._BANG_memento)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29831__$1.__extmap,other29832.__extmap)));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"diameter","diameter",1560913323),null,new cljs.core.Keyword(null,"!memento","!memento",1194699893),null,new cljs.core.Keyword(null,"location","location",1815599388),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,self__.diameter,self__._BANG_memento,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29829){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29839 = cljs.core.keyword_identical_QMARK_;
var expr__29840 = k__4388__auto__;
if(cljs.core.truth_((pred__29839.cljs$core$IFn$_invoke$arity$2 ? pred__29839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),expr__29840) : pred__29839.call(null,new cljs.core.Keyword(null,"location","location",1815599388),expr__29840)))){
return (new sevenguis.circle_drawer.Add_Circle_Command(G__29829,self__.diameter,self__._BANG_memento,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29839.cljs$core$IFn$_invoke$arity$2 ? pred__29839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__29840) : pred__29839.call(null,new cljs.core.Keyword(null,"diameter","diameter",1560913323),expr__29840)))){
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,G__29829,self__._BANG_memento,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29839.cljs$core$IFn$_invoke$arity$2 ? pred__29839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!memento","!memento",1194699893),expr__29840) : pred__29839.call(null,new cljs.core.Keyword(null,"!memento","!memento",1194699893),expr__29840)))){
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,self__.diameter,G__29829,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,self__.diameter,self__._BANG_memento,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__29829),null));
}
}
}
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location","location",1815599388),self__.location,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"diameter","diameter",1560913323),self__.diameter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!memento","!memento",1194699893),self__._BANG_memento,null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29829){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.circle_drawer.Add_Circle_Command(self__.location,self__.diameter,self__._BANG_memento,G__29829,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Add_Circle_Command.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.circle_drawer.Add_Circle_Command.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"diameter","diameter",-1093522446,null),new cljs.core.Symbol(null,"!memento","!memento",-1459735876,null)], null);
}));

(sevenguis.circle_drawer.Add_Circle_Command.cljs$lang$type = true);

(sevenguis.circle_drawer.Add_Circle_Command.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.circle-drawer/Add-Circle-Command",null,(1),null));
}));

(sevenguis.circle_drawer.Add_Circle_Command.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.circle-drawer/Add-Circle-Command");
}));

/**
 * Positional factory function for sevenguis.circle-drawer/Add-Circle-Command.
 */
sevenguis.circle_drawer.__GT_Add_Circle_Command = (function sevenguis$circle_drawer$__GT_Add_Circle_Command(location,diameter,_BANG_memento){
return (new sevenguis.circle_drawer.Add_Circle_Command(location,diameter,_BANG_memento,null,null,null));
});

/**
 * Factory function for sevenguis.circle-drawer/Add-Circle-Command, taking a map of keywords to field values.
 */
sevenguis.circle_drawer.map__GT_Add_Circle_Command = (function sevenguis$circle_drawer$map__GT_Add_Circle_Command(G__29833){
var extmap__4419__auto__ = (function (){var G__29842 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29833,new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diameter","diameter",1560913323),new cljs.core.Keyword(null,"!memento","!memento",1194699893)], 0));
if(cljs.core.record_QMARK_(G__29833)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29842);
} else {
return G__29842;
}
})();
return (new sevenguis.circle_drawer.Add_Circle_Command(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__29833),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(G__29833),new cljs.core.Keyword(null,"!memento","!memento",1194699893).cljs$core$IFn$_invoke$arity$1(G__29833),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sevenguis.circle_drawer.Undoable_Command}
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
sevenguis.circle_drawer.Change_Diameter_Command = (function (index,new_diameter,_BANG_memento,__meta,__extmap,__hash){
this.index = index;
this.new_diameter = new_diameter;
this._BANG_memento = _BANG_memento;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29844,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29848 = k29844;
var G__29848__$1 = (((G__29848 instanceof cljs.core.Keyword))?G__29848.fqn:null);
switch (G__29848__$1) {
case "index":
return self__.index;

break;
case "new-diameter":
return self__.new_diameter;

break;
case "!memento":
return self__._BANG_memento;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29844,else__4383__auto__);

}
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__29849){
var vec__29850 = p__29849;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29850,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sevenguis.circle-drawer.Change-Diameter-Command{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),self__.new_diameter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!memento","!memento",1194699893),self__._BANG_memento],null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29843){
var self__ = this;
var G__29843__$1 = this;
return (new cljs.core.RecordIter((0),G__29843__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),new cljs.core.Keyword(null,"!memento","!memento",1194699893)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,self__.new_diameter,self__._BANG_memento,self__.__meta,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.sevenguis$circle_drawer$Undoable_Command$ = cljs.core.PROTOCOL_SENTINEL);

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.sevenguis$circle_drawer$Undoable_Command$execute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(self__._BANG_memento,cljs.core.deref(sevenguis.circle_drawer._BANG_circles));

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_circles,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.index,new cljs.core.Keyword(null,"diameter","diameter",1560913323)], null),self__.new_diameter], 0));

return sevenguis.circle_drawer.add_to_history_BANG_(sevenguis.circle_drawer._BANG_circle_history,this$__$1);
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.sevenguis$circle_drawer$Undoable_Command$redo$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_circles,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.index,new cljs.core.Keyword(null,"diameter","diameter",1560913323)], null),self__.new_diameter], 0));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.sevenguis$circle_drawer$Undoable_Command$undo$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_circles,cljs.core.deref(self__._BANG_memento));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2076638372 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29845,other29846){
var self__ = this;
var this29845__$1 = this;
return (((!((other29846 == null)))) && ((this29845__$1.constructor === other29846.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.index,other29846.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.new_diameter,other29846.new_diameter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1._BANG_memento,other29846._BANG_memento)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29845__$1.__extmap,other29846.__extmap)));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),null,new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"!memento","!memento",1194699893),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,self__.new_diameter,self__._BANG_memento,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29843){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29853 = cljs.core.keyword_identical_QMARK_;
var expr__29854 = k__4388__auto__;
if(cljs.core.truth_((pred__29853.cljs$core$IFn$_invoke$arity$2 ? pred__29853.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),expr__29854) : pred__29853.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__29854)))){
return (new sevenguis.circle_drawer.Change_Diameter_Command(G__29843,self__.new_diameter,self__._BANG_memento,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29853.cljs$core$IFn$_invoke$arity$2 ? pred__29853.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),expr__29854) : pred__29853.call(null,new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),expr__29854)))){
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,G__29843,self__._BANG_memento,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29853.cljs$core$IFn$_invoke$arity$2 ? pred__29853.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!memento","!memento",1194699893),expr__29854) : pred__29853.call(null,new cljs.core.Keyword(null,"!memento","!memento",1194699893),expr__29854)))){
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,self__.new_diameter,G__29843,self__.__meta,self__.__extmap,null));
} else {
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,self__.new_diameter,self__._BANG_memento,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__29843),null));
}
}
}
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"index","index",-1531685915),self__.index,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),self__.new_diameter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!memento","!memento",1194699893),self__._BANG_memento,null))], null),self__.__extmap));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29843){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sevenguis.circle_drawer.Change_Diameter_Command(self__.index,self__.new_diameter,self__._BANG_memento,G__29843,self__.__extmap,self__.__hash));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sevenguis.circle_drawer.Change_Diameter_Command.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"new-diameter","new-diameter",-754991284,null),new cljs.core.Symbol(null,"!memento","!memento",-1459735876,null)], null);
}));

(sevenguis.circle_drawer.Change_Diameter_Command.cljs$lang$type = true);

(sevenguis.circle_drawer.Change_Diameter_Command.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sevenguis.circle-drawer/Change-Diameter-Command",null,(1),null));
}));

(sevenguis.circle_drawer.Change_Diameter_Command.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sevenguis.circle-drawer/Change-Diameter-Command");
}));

/**
 * Positional factory function for sevenguis.circle-drawer/Change-Diameter-Command.
 */
sevenguis.circle_drawer.__GT_Change_Diameter_Command = (function sevenguis$circle_drawer$__GT_Change_Diameter_Command(index,new_diameter,_BANG_memento){
return (new sevenguis.circle_drawer.Change_Diameter_Command(index,new_diameter,_BANG_memento,null,null,null));
});

/**
 * Factory function for sevenguis.circle-drawer/Change-Diameter-Command, taking a map of keywords to field values.
 */
sevenguis.circle_drawer.map__GT_Change_Diameter_Command = (function sevenguis$circle_drawer$map__GT_Change_Diameter_Command(G__29847){
var extmap__4419__auto__ = (function (){var G__29856 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29847,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),new cljs.core.Keyword(null,"!memento","!memento",1194699893)], 0));
if(cljs.core.record_QMARK_(G__29847)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29856);
} else {
return G__29856;
}
})();
return (new sevenguis.circle_drawer.Change_Diameter_Command(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__29847),new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485).cljs$core$IFn$_invoke$arity$1(G__29847),new cljs.core.Keyword(null,"!memento","!memento",1194699893).cljs$core$IFn$_invoke$arity$1(G__29847),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sevenguis.circle_drawer.undo_last_BANG_ = (function sevenguis$circle_drawer$undo_last_BANG_(_BANG_history){
var temp__5735__auto__ = cljs.core.last(new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_history)));
if(cljs.core.truth_(temp__5735__auto__)){
var last_command = temp__5735__auto__;
sevenguis.circle_drawer.undo(last_command);

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),cljs.core.pop], 0));

return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191)], null),cljs.core.conj,last_command], 0));
} else {
return null;
}
});
sevenguis.circle_drawer.redo_last_BANG_ = (function sevenguis$circle_drawer$redo_last_BANG_(_BANG_history){
var temp__5735__auto__ = cljs.core.last(new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_history)));
if(cljs.core.truth_(temp__5735__auto__)){
var last_undo = temp__5735__auto__;
sevenguis.circle_drawer.redo(last_undo);

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),cljs.core.conj,last_undo], 0));

return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_history,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191)], null),cljs.core.pop], 0));
} else {
return null;
}
});
sevenguis.circle_drawer._BANG_mouse_position = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-position-rel-svg","mouse-position-rel-svg",1847372649)], null));
sevenguis.circle_drawer._BANG_context_menu_position = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu-position","context-menu-position",548172821)], null));
sevenguis.circle_drawer._BANG_context_visible_QMARK_ = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu-visible?","context-menu-visible?",1010005248)], null));
sevenguis.circle_drawer._BANG_modal_visible_QMARK_ = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-menu-visible?","modal-menu-visible?",1423465046)], null));
sevenguis.circle_drawer._BANG_cached_selected_index = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cached-selected-circle-index","cached-selected-circle-index",1429000523)], null));
sevenguis.circle_drawer._BANG_cached_diameter = reagent.core.cursor(sevenguis.circle_drawer._BANG_app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cached-selected-circle-diameter","cached-selected-circle-diameter",1067654432)], null));
sevenguis.circle_drawer.find_index_of_selected_circle = (function sevenguis$circle_drawer$find_index_of_selected_circle(circles,mouse_position){
if(cljs.core.truth_(mouse_position)){
var circles_with_indices_and_square_distances = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,circle){
var sqr_distance_2d = (function (p__29858,p__29859){
var vec__29860 = p__29858;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(1),null);
var vec__29863 = p__29859;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(1),null);
var vec__29866 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
var d1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(0),null);
var d2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(1),null);
return (Math.pow(d1,(2)) + Math.pow(d2,(2)));
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"sqr-radius","sqr-radius",-434176325),Math.pow((new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(circle) / (2)),(2)),new cljs.core.Keyword(null,"sqr-dist-from-center-to-mouse","sqr-dist-from-center-to-mouse",-484880591),sqr_distance_2d(mouse_position,new cljs.core.Keyword(null,"center-position","center-position",-1139175181).cljs$core$IFn$_invoke$arity$1(circle))], null);
}),circles);
var circles_surrounding_mouse = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29857_SHARP_){
return (new cljs.core.Keyword(null,"sqr-dist-from-center-to-mouse","sqr-dist-from-center-to-mouse",-484880591).cljs$core$IFn$_invoke$arity$1(p1__29857_SHARP_) < new cljs.core.Keyword(null,"sqr-radius","sqr-radius",-434176325).cljs$core$IFn$_invoke$arity$1(p1__29857_SHARP_));
}),circles_with_indices_and_square_distances);
var index_of_closest_surrounding = (function (){var G__29869 = circles_surrounding_mouse;
var G__29869__$1 = (((G__29869 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,new cljs.core.Keyword(null,"sqr-dist-from-center-to-mouse","sqr-dist-from-center-to-mouse",-484880591),G__29869));
if((G__29869__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__29869__$1);
}
})();
return index_of_closest_surrounding;
} else {
return null;
}
});
sevenguis.circle_drawer._BANG_index_of_selected_circle = reagent.core.track((function (){
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.deref(sevenguis.circle_drawer._BANG_context_visible_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(sevenguis.circle_drawer._BANG_modal_visible_QMARK_);
}
})())){
return sevenguis.circle_drawer.find_index_of_selected_circle(cljs.core.deref(sevenguis.circle_drawer._BANG_circles),cljs.core.deref(sevenguis.circle_drawer._BANG_mouse_position));
} else {
return cljs.core.deref(sevenguis.circle_drawer._BANG_cached_selected_index);
}
}));
sevenguis.circle_drawer.get_set_selected_circle = (function sevenguis$circle_drawer$get_set_selected_circle(var_args){
var G__29871 = arguments.length;
switch (G__29871) {
case 1:
return sevenguis.circle_drawer.get_set_selected_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sevenguis.circle_drawer.get_set_selected_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.circle_drawer.get_set_selected_circle.cljs$core$IFn$_invoke$arity$1 = (function (_k){
if(cljs.core.truth_(cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.circle_drawer._BANG_circles),cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle));
} else {
return null;
}
}));

(sevenguis.circle_drawer.get_set_selected_circle.cljs$core$IFn$_invoke$arity$2 = (function (_k,v){
if(cljs.core.truth_(cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle))){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_circles,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle),v], 0));
} else {
return null;
}
}));

(sevenguis.circle_drawer.get_set_selected_circle.cljs$lang$maxFixedArity = 2);

/**
 * The cursor is set with a get-set function and an empty path, since the path consists only of the index
 *   of the selected circle, which is already provided in the get-set function.
 */
sevenguis.circle_drawer._BANG_selected_circle = reagent.core.cursor(sevenguis.circle_drawer.get_set_selected_circle,cljs.core.PersistentVector.EMPTY);
sevenguis.circle_drawer._BANG_modal_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.circle_drawer._BANG_svg_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.circle_drawer._BANG_gui_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.circle_drawer.render_circles = (function sevenguis$circle_drawer$render_circles(var_args){
var G__29873 = arguments.length;
switch (G__29873) {
case 2:
return sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$2 = (function (circles,index_of_selected){
return sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$3(circles,index_of_selected,null);
}));

(sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$3 = (function (circles,index_of_selected,settings){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,circle){
var settings_with_fill = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,index_of_selected))?sevenguis.circle_drawer.fill_color_of_selected:"transparent")], null)], 0));
return sevenguis.circle_drawer.draw(circle,settings_with_fill);
}),circles);
}));

(sevenguis.circle_drawer.render_circles.cljs$lang$maxFixedArity = 3);

sevenguis.circle_drawer._BANG_render_circles = reagent.core.track((function (){
return sevenguis.circle_drawer.render_circles.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(sevenguis.circle_drawer._BANG_circles),cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle),sevenguis.circle_drawer.circle_settings);
}));
sevenguis.circle_drawer.change_diameter_dialog = (function sevenguis$circle_drawer$change_diameter_dialog(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialog#change-diameter-dialog","dialog#change-diameter-dialog",-1197919863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function sevenguis$circle_drawer$change_diameter_dialog_$_set_modal_ref(ref){
cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_modal_ref,ref);

var temp__5735__auto__ = cljs.core.deref(sevenguis.circle_drawer._BANG_modal_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
return dialogPolyfill.registerDialog(modal);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var vec__29874 = (cljs.core.truth_(cljs.core.deref(sevenguis.circle_drawer._BANG_selected_circle))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Math.round,new cljs.core.Keyword(null,"center-position","center-position",-1139175181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.circle_drawer._BANG_selected_circle))):null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(1),null);
return ["Adjust diameter of circle at (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('');
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.range_with_bubble,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"!value","!value",1189919300),reagent.core.cursor(sevenguis.circle_drawer._BANG_selected_circle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diameter","diameter",1560913323)], null)),new cljs.core.Keyword(null,"min","min",444991522),sevenguis.circle_drawer.min_diameter,new cljs.core.Keyword(null,"max","max",61366548),sevenguis.circle_drawer.max_diameter,new cljs.core.Keyword(null,"bubble-scale","bubble-scale",33327641),sevenguis.circle_drawer.bubble_scale,new cljs.core.Keyword(null,"bubble-shift","bubble-shift",-956348627),sevenguis.circle_drawer.bubble_shift,new cljs.core.Keyword(null,"step","step",1288888124),sevenguis.circle_drawer.diameter_step], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line.button-line","div.gui-line.button-line",-639077900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$circle_drawer$change_diameter_dialog_$_on_click_modal_done(_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.circle_drawer._BANG_cached_diameter),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.circle_drawer._BANG_selected_circle)))){
} else {
var circles_before_diameter_change_29889 = cljs.core.assoc_in(cljs.core.deref(sevenguis.circle_drawer._BANG_circles),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle),new cljs.core.Keyword(null,"diameter","diameter",1560913323)], null),cljs.core.deref(sevenguis.circle_drawer._BANG_cached_diameter));
var change_diameter_command_29890 = sevenguis.circle_drawer.map__GT_Change_Diameter_Command(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle),new cljs.core.Keyword(null,"new-diameter","new-diameter",1899444485),new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.circle_drawer._BANG_selected_circle)),new cljs.core.Keyword(null,"!memento","!memento",1194699893),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(circles_before_diameter_change_29889)], null));
sevenguis.circle_drawer.add_to_history_BANG_(sevenguis.circle_drawer._BANG_circle_history,change_diameter_command_29890);
}

var temp__5735__auto__ = cljs.core.deref(sevenguis.circle_drawer._BANG_modal_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_modal_visible_QMARK_,false);

return modal.close();
} else {
return null;
}
})], null),"Done"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$circle_drawer$change_diameter_dialog_$_on_click_modal_cancel(_){
var temp__5735__auto__ = cljs.core.deref(sevenguis.circle_drawer._BANG_modal_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sevenguis.circle_drawer._BANG_selected_circle,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diameter","diameter",1560913323),cljs.core.deref(sevenguis.circle_drawer._BANG_cached_diameter)], 0));

cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_modal_visible_QMARK_,false);

return modal.close();
} else {
return null;
}
})], null),"Cancel"], null)], null)], null);
});
sevenguis.circle_drawer.circle_canvas = (function sevenguis$circle_drawer$circle_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line","div.gui-line",1184923243),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#circle-svg","svg#circle-svg",-1156425870),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function sevenguis$circle_drawer$circle_canvas_$_set_svg_ref(ref){
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_svg_ref,ref);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function sevenguis$circle_drawer$circle_canvas_$_svg_mouse_leave(_){
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_mouse_position,null);
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function sevenguis$circle_drawer$circle_canvas_$_svg_mouse_move(e){
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_mouse_position,sevenguis.util.coords_rel(sevenguis.circle_drawer._BANG_svg_ref,e));
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function sevenguis$circle_drawer$circle_canvas_$_svg_on_context_menu(right_click){
if(cljs.core.truth_(cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle))){
right_click.preventDefault();

cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_cached_selected_index,cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle));

cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_cached_diameter,new cljs.core.Keyword(null,"diameter","diameter",1560913323).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.circle_drawer._BANG_circles),cljs.core.deref(sevenguis.circle_drawer._BANG_index_of_selected_circle))));

cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_context_menu_position,sevenguis.util.coords_rel(sevenguis.circle_drawer._BANG_gui_ref,right_click));

return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_context_visible_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$circle_drawer$circle_canvas_$_svg_on_click(_){
if(cljs.core.truth_(cljs.core.deref(sevenguis.circle_drawer._BANG_context_visible_QMARK_))){
return null;
} else {
return sevenguis.circle_drawer.map__GT_Add_Circle_Command(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.deref(sevenguis.circle_drawer._BANG_mouse_position),new cljs.core.Keyword(null,"diameter","diameter",1560913323),sevenguis.circle_drawer.default_diameter,new cljs.core.Keyword(null,"!memento","!memento",1194699893),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null)).sevenguis$circle_drawer$Undoable_Command$execute$arity$1(null);
}
})], null)], null),cljs.core.deref(sevenguis.circle_drawer._BANG_render_circles))], null);
});
sevenguis.circle_drawer.circle_drawer_buttons = (function sevenguis$circle_drawer$circle_drawer_buttons(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gui-line.button-line","div.gui-line.button-line",-639077900),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$circle_drawer$circle_drawer_buttons_$_undo_on_click(_){
return sevenguis.circle_drawer.undo_last_BANG_(sevenguis.circle_drawer._BANG_circle_history);
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function sevenguis$circle_drawer$circle_drawer_buttons_$_redo_on_click(_){
return sevenguis.circle_drawer.redo_last_BANG_(sevenguis.circle_drawer._BANG_circle_history);
})], null),"Redo"], null)], null);
});
sevenguis.circle_drawer.circle_drawer = (function sevenguis$circle_drawer$circle_drawer(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#circle-drawer.gui","div#circle-drawer.gui",-1815774389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__29877_SHARP_){
return cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_gui_ref,p1__29877_SHARP_);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.circle_drawer.circle_drawer_buttons], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Click to add a circle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instructions","div.instructions",-526747560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Right click to change a circle's diameter"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.circle_drawer.circle_canvas], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.util.context_menu,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options-and-listeners","options-and-listeners",-1780414521),new cljs.core.PersistentArrayMap(null, 1, ["Adjust diameter...",(function sevenguis$circle_drawer$circle_drawer_$_context_menu_adjust_diameter_on_click(_){
var temp__5735__auto__ = cljs.core.deref(sevenguis.circle_drawer._BANG_modal_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var modal = temp__5735__auto__;
cljs.core.reset_BANG_(sevenguis.circle_drawer._BANG_modal_visible_QMARK_,true);

return modal.showModal();
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"!visible?","!visible?",-564061257),sevenguis.circle_drawer._BANG_context_visible_QMARK_,new cljs.core.Keyword(null,"!position","!position",-1373918838),sevenguis.circle_drawer._BANG_context_menu_position,new cljs.core.Keyword(null,"with-cancel?","with-cancel?",805171968),true], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.circle_drawer.change_diameter_dialog], null)], null);
});

//# sourceMappingURL=sevenguis.circle_drawer.js.map
