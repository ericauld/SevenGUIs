goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28786(s__28787){
return (new cljs.core.LazySeq(null,(function (){
var s__28787__$1 = s__28787;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28787__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28792 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28792,(1),null);
var iterys__4525__auto__ = ((function (s__28787__$1,vec__28792,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__28786_$_iter__28788(s__28789){
return (new cljs.core.LazySeq(null,((function (s__28787__$1,vec__28792,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__28789__$1 = s__28789;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28789__$1);
if(temp__5735__auto____$1){
var s__28789__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28789__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28789__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28791 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28790 = (0);
while(true){
if((i__28790 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28790);
cljs.core.chunk_append(b__28791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__28864 = (i__28790 + (1));
i__28790 = G__28864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28791),tailrecursion$priority_map$iter__28786_$_iter__28788(cljs.core.chunk_rest(s__28789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28791),null);
}
} else {
var item = cljs.core.first(s__28789__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__28786_$_iter__28788(cljs.core.rest(s__28789__$2)));
}
} else {
return null;
}
break;
}
});})(s__28787__$1,vec__28792,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__28787__$1,vec__28792,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28786(cljs.core.rest(s__28787__$1)));
} else {
var G__28865 = cljs.core.rest(s__28787__$1);
s__28787__$1 = G__28865;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28795(s__28796){
return (new cljs.core.LazySeq(null,(function (){
var s__28796__$1 = s__28796;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28796__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28801 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(1),null);
var iterys__4525__auto__ = ((function (s__28796__$1,vec__28801,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__28795_$_iter__28797(s__28798){
return (new cljs.core.LazySeq(null,((function (s__28796__$1,vec__28801,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1){
return (function (){
var s__28798__$1 = s__28798;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28798__$1);
if(temp__5735__auto____$1){
var s__28798__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28798__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28798__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28800 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28799 = (0);
while(true){
if((i__28799 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28799);
cljs.core.chunk_append(b__28800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__28866 = (i__28799 + (1));
i__28799 = G__28866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28800),tailrecursion$priority_map$iter__28795_$_iter__28797(cljs.core.chunk_rest(s__28798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28800),null);
}
} else {
var item = cljs.core.first(s__28798__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__28795_$_iter__28797(cljs.core.rest(s__28798__$2)));
}
} else {
return null;
}
break;
}
});})(s__28796__$1,vec__28801,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
,null,null));
});})(s__28796__$1,vec__28801,priority,item_set,xs__6292__auto__,temp__5735__auto__,coll__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28795(cljs.core.rest(s__28796__$1)));
} else {
var G__28867 = cljs.core.rest(s__28796__$1);
s__28796__$1 = G__28867;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5733__auto__)){
var current_priority = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28804(s__28805){
return (new cljs.core.LazySeq(null,(function (){
var s__28805__$1 = s__28805;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28805__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28810 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28810,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28810,(1),null);
var iterys__4525__auto__ = ((function (s__28805__$1,vec__28810,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__28804_$_iter__28806(s__28807){
return (new cljs.core.LazySeq(null,((function (s__28805__$1,vec__28810,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__28807__$1 = s__28807;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28807__$1);
if(temp__5735__auto____$1){
var s__28807__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28807__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28807__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28809 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28808 = (0);
while(true){
if((i__28808 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28808);
cljs.core.chunk_append(b__28809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__28885 = (i__28808 + (1));
i__28808 = G__28885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28809),tailrecursion$priority_map$iter__28804_$_iter__28806(cljs.core.chunk_rest(s__28807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28809),null);
}
} else {
var item = cljs.core.first(s__28807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__28804_$_iter__28806(cljs.core.rest(s__28807__$2)));
}
} else {
return null;
}
break;
}
});})(s__28805__$1,vec__28810,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__28805__$1,vec__28810,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28804(cljs.core.rest(s__28805__$1)));
} else {
var G__28886 = cljs.core.rest(s__28805__$1);
s__28805__$1 = G__28886;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28813(s__28814){
return (new cljs.core.LazySeq(null,(function (){
var s__28814__$1 = s__28814;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28814__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28819 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28819,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28819,(1),null);
var iterys__4525__auto__ = ((function (s__28814__$1,vec__28819,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__28813_$_iter__28815(s__28816){
return (new cljs.core.LazySeq(null,((function (s__28814__$1,vec__28819,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1){
return (function (){
var s__28816__$1 = s__28816;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28816__$1);
if(temp__5735__auto____$1){
var s__28816__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28816__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28816__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28818 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28817 = (0);
while(true){
if((i__28817 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28817);
cljs.core.chunk_append(b__28818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__28887 = (i__28817 + (1));
i__28817 = G__28887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28818),tailrecursion$priority_map$iter__28813_$_iter__28815(cljs.core.chunk_rest(s__28816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28818),null);
}
} else {
var item = cljs.core.first(s__28816__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__28813_$_iter__28815(cljs.core.rest(s__28816__$2)));
}
} else {
return null;
}
break;
}
});})(s__28814__$1,vec__28819,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
,null,null));
});})(s__28814__$1,vec__28819,priority,item_set,xs__6292__auto__,temp__5735__auto__,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28813(cljs.core.rest(s__28814__$1)));
} else {
var G__28891 = cljs.core.rest(s__28814__$1);
s__28814__$1 = G__28891;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__28892 = null;
var G__28892__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__28892__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__28892 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__28892__2.call(this,self__,item);
case 3:
return G__28892__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__28892.cljs$core$IFn$_invoke$arity$2 = G__28892__2;
G__28892.cljs$core$IFn$_invoke$arity$3 = G__28892__3;
return G__28892;
})()
);

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args28785){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28785)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__28822 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__28822.cljs$core$IFn$_invoke$arity$1 ? fexpr__28822.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__28822.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28823(s__28824){
return (new cljs.core.LazySeq(null,(function (){
var s__28824__$1 = s__28824;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28824__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28829 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829,(1),null);
var iterys__4525__auto__ = ((function (s__28824__$1,vec__28829,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__28823_$_iter__28825(s__28826){
return (new cljs.core.LazySeq(null,((function (s__28824__$1,vec__28829,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__28826__$1 = s__28826;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28826__$1);
if(temp__5735__auto____$1){
var s__28826__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28826__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28826__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28828 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28827 = (0);
while(true){
if((i__28827 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28827);
cljs.core.chunk_append(b__28828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__28906 = (i__28827 + (1));
i__28827 = G__28906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28828),tailrecursion$priority_map$iter__28823_$_iter__28825(cljs.core.chunk_rest(s__28826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28828),null);
}
} else {
var item = cljs.core.first(s__28826__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__28823_$_iter__28825(cljs.core.rest(s__28826__$2)));
}
} else {
return null;
}
break;
}
});})(s__28824__$1,vec__28829,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__28824__$1,vec__28829,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28823(cljs.core.rest(s__28824__$1)));
} else {
var G__28911 = cljs.core.rest(s__28824__$1);
s__28824__$1 = G__28911;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__4529__auto__ = (function tailrecursion$priority_map$iter__28832(s__28833){
return (new cljs.core.LazySeq(null,(function (){
var s__28833__$1 = s__28833;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28833__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__28838 = cljs.core.first(xs__6292__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28838,(1),null);
var iterys__4525__auto__ = ((function (s__28833__$1,vec__28838,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__28832_$_iter__28834(s__28835){
return (new cljs.core.LazySeq(null,((function (s__28833__$1,vec__28838,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1){
return (function (){
var s__28835__$1 = s__28835;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28835__$1);
if(temp__5735__auto____$1){
var s__28835__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28835__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28835__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28837 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28836 = (0);
while(true){
if((i__28836 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__28836);
cljs.core.chunk_append(b__28837,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__28922 = (i__28836 + (1));
i__28836 = G__28922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28837),tailrecursion$priority_map$iter__28832_$_iter__28834(cljs.core.chunk_rest(s__28835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28837),null);
}
} else {
var item = cljs.core.first(s__28835__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__28832_$_iter__28834(cljs.core.rest(s__28835__$2)));
}
} else {
return null;
}
break;
}
});})(s__28833__$1,vec__28838,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
,null,null));
});})(s__28833__$1,vec__28838,priority,item_set,xs__6292__auto__,temp__5735__auto__,sets,this$__$1))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(item_set));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,tailrecursion$priority_map$iter__28832(cljs.core.rest(s__28833__$1)));
} else {
var G__28927 = cljs.core.rest(s__28833__$1);
s__28833__$1 = G__28927;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__28841 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__28841) : self__.keyfn.call(null,G__28841));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__28843 = arguments.length;
switch (G__28843) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28931 = arguments.length;
var i__4737__auto___28932 = (0);
while(true){
if((i__4737__auto___28932 < len__4736__auto___28931)){
args__4742__auto__.push((arguments[i__4737__auto___28932]));

var G__28933 = (i__4737__auto___28932 + (1));
i__4737__auto___28932 = G__28933;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__28934 = cljs.core.nnext(in$);
var G__28935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28934;
out = G__28935;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq28844){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28844));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28936 = arguments.length;
var i__4737__auto___28937 = (0);
while(true){
if((i__4737__auto___28937 < len__4736__auto___28936)){
args__4742__auto__.push((arguments[i__4737__auto___28937]));

var G__28938 = (i__4737__auto___28937 + (1));
i__4737__auto___28937 = G__28938;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__28939 = cljs.core.nnext(in$);
var G__28940 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28939;
out = G__28940;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq28845){
var G__28846 = cljs.core.first(seq28845);
var seq28845__$1 = cljs.core.next(seq28845);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28846,seq28845__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28941 = arguments.length;
var i__4737__auto___28942 = (0);
while(true){
if((i__4737__auto___28942 < len__4736__auto___28941)){
args__4742__auto__.push((arguments[i__4737__auto___28942]));

var G__28943 = (i__4737__auto___28942 + (1));
i__4737__auto___28942 = G__28943;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__28948 = cljs.core.nnext(in$);
var G__28949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28948;
out = G__28949;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq28847){
var G__28848 = cljs.core.first(seq28847);
var seq28847__$1 = cljs.core.next(seq28847);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28848,seq28847__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28950 = arguments.length;
var i__4737__auto___28951 = (0);
while(true){
if((i__4737__auto___28951 < len__4736__auto___28950)){
args__4742__auto__.push((arguments[i__4737__auto___28951]));

var G__28953 = (i__4737__auto___28951 + (1));
i__4737__auto___28951 = G__28953;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__28956 = cljs.core.nnext(in$);
var G__28957 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__28956;
out = G__28957;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq28849){
var G__28850 = cljs.core.first(seq28849);
var seq28849__$1 = cljs.core.next(seq28849);
var G__28851 = cljs.core.first(seq28849__$1);
var seq28849__$2 = cljs.core.next(seq28849__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28850,G__28851,seq28849__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
