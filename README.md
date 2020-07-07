# [Simda.js](https://www.npmjs.com/package/simda)

A light-weight alternative (in ES6+) of [Ramda.js](https://ramdajs.com/)

### Installation

```shell
npm i simda
```

### Usage

```js
import * as S from 'simda'

const newObj = S.assocPath(['a', 1, 'c'], 999)({a: [{b: 111}]})
console.log(newObj) // => {a:[{b:111},{c:999}]}
```

### Functions

**\internal**
>- [x] [**_arity**](src/internal/_arity.js)
>- [x] [_complement](src/internal/_complement.js)
>- [x] [**_curry1**](src/internal/_curry1.js)
>- [x] [**_curry2**](src/internal/_curry2.js)
>- [x] [**_curry3**](src/internal/_curry3.js)
>- [x] [_filter](src/internal/_filter.js)
>- [x] [**_has**](src/internal/_has.js)
>- [x] [_identity](src/internal/_identity.js)
>- [x] [**_isArguments**](src/internal/_isArguments.js)
>- [x] [_isArray](src/internal/_isArray.js)
>- [x] [**_isArrayLike**](src/internal/_isArrayLike.js)
>- [x] [_isFunction](src/internal/_isFunction.js)
>- [x] [**_isInteger**](src/internal/_isInteger.js)
>- [x] [_isObject](src/internal/_isObject.js)
>- [x] [_isString](src/internal/_isString.js)
>- [x] [**_map**](src/internal/_map.js)
>- [x] [**_pipe**](src/internal/_pipe.js)
>- [x] [**_reduce**](src/internal/_reduce.js)
>- [x] [_toString](src/internal/_toString.js)
>- [] [_aperture](src/internal/_aperture.js)
>- [] [_arrayFromIterator](src/internal/_arrayFromIterator.js)
>- [] [_assertPromise](src/internal/_assertPromise.js)
>- [] [_assoc](src/internal/_assoc.js)
>- [] [_checkForMethod](src/internal/_checkForMethod.js)
>- [] [_clone](src/internal/_clone.js)
>- [] [_cloneRegExp](src/internal/_cloneRegExp.js)
>- [] [_concat](src/internal/_concat.js)
>- [] [_createPartialApplicator](src/internal/_createPartialApplicator.js)
>- [] [_curryN](src/internal/_curryN.js)
>- [] [_dispatchable](src/internal/_dispatchable.js)
>- [] [_dissoc](src/internal/_dissoc.js)
>- [] [_dropLast](src/internal/_dropLast.js)
>- [] [_dropLastWhile](src/internal/_dropLastWhile.js)
>- [] [_equals](src/internal/_equals.js)
>- [] [_flatCat](src/internal/_flatCat.js)
>- [] [_forceReduced](src/internal/_forceReduced.js)
>- [] [_functionName](src/internal/_functionName.js)
>- [] [_functionsWith](src/internal/_functionsWith.js)
>- [] [_includes](src/internal/_includes.js)
>- [] [_includesWith](src/internal/_includesWith.js)
>- [] [_indexOf](src/internal/_indexOf.js)
>- [] [_isNumber](src/internal/_isNumber.js)
>- [] [_isPlaceholder](src/internal/_isPlaceholder.js)
>- [] [_isRegExp](src/internal/_isRegExp.js)
>- [] [_isTransformer](src/internal/_isTransformer.js)
>- [] [_isTypedArray](src/internal/_isTypedArray.js)
>- [] [_makeFlat](src/internal/_makeFlat.js)
>- [] [_objectAssign](src/internal/_objectAssign.js)
>- [] [_objectIs](src/internal/_objectIs.js)
>- [] [_of](src/internal/_of.js)
>- [] [_pipeP](src/internal/_pipeP.js)
>- [] [_promap](src/internal/_promap.js)
>- [] [_quote](src/internal/_quote.js)
>- [] [_reduced](src/internal/_reduced.js)
>- [] [_Set](src/internal/_Set.js)
>- [] [_stepCat](src/internal/_stepCat.js)
>- [] [_toISOString](src/internal/_toISOString.js)
>- [] [_xall](src/internal/_xall.js)
>- [] [_xany](src/internal/_xany.js)
>- [] [_xaperture](src/internal/_xaperture.js)
>- [] [_xchain](src/internal/_xchain.js)
>- [] [_xdrop](src/internal/_xdrop.js)
>- [] [_xdropLast](src/internal/_xdropLast.js)
>- [] [_xdropLastWhile](src/internal/_xdropLastWhile.js)
>- [] [_xdropRepeatsWith](src/internal/_xdropRepeatsWith.js)
>- [] [_xdropWhile](src/internal/_xdropWhile.js)
>- [] [_xfBase](src/internal/_xfBase.js)
>- [] [_xfilter](src/internal/_xfilter.js)
>- [] [_xfind](src/internal/_xfind.js)
>- [] [_xfindIndex](src/internal/_xfindIndex.js)
>- [] [_xfindLast](src/internal/_xfindLast.js)
>- [] [_xfindLastIndex](src/internal/_xfindLastIndex.js)
>- [] [_xmap](src/internal/_xmap.js)
>- [] [_xpromap](src/internal/_xpromap.js)
>- [] [_xreduceBy](src/internal/_xreduceBy.js)
>- [] [_xtake](src/internal/_xtake.js)
>- [] [_xtakeWhile](src/internal/_xtakeWhile.js)
>- [] [_xtap](src/internal/_xtap.js)
>- [] [_xwrap](src/internal/_xwrap.js)
- [x] [add](src/add.js)
- [x] [always](src/always.js)
- [x] [ascend](src/ascend.js)
- [x] [assoc](src/assoc.js)
- [x] [**assocPath**](src/assocPath.js)
- [x] [concat](src/concat.js)
- [x] [defaultTo](src/defaultTo.js)
- [x] [descend](src/descend.js)
- [x] [**empty**](src/empty.js)
- [x] [F](src/F.js)
- [x] [**filter**](src/filter.js)
- [x] [flatten](src/flatten.js)
- [x] [fromPairs](src/fromPairs.js)
- [x] [head](src/head.js)
- [x] [identity](src/identity.js)
- [x] [**is**](src/is.js)
- [x] [isFunction](src/isFunction.js)
- [x] [isNil](src/isNil.js)
- [x] [**isPlainObj**](src/isPlainObj.js)
- [x] [**keys**](src/keys.js)
- [x] [**map**](src/map.js) supported (val, key, list)=>{...}
- [x] [mergeRight](src/mergeRight.js)
- [x] [multiply](src/multiply.js)
- [x] [nth](src/nth.js)
- [x] [path](src/path.js)
- [x] [pathOr](src/pathOr.js)
- [x] [pick](src/pick.js)
- [x] [pickAll](src/pickAll.js)
- [x] [pickBy](src/pickBy.js)
- [x] [**pipe**](src/pipe.js)
- [x] [pluck](src/pluck.js)
- [x] [prop](src/prop.js)
- [x] [propOr](src/propOr.js)
- [x] [reduce](src/reduce.js)
- [x] [reject](src/reject.js)
- [x] [replace](src/replace.js)
- [x] [slice](src/slice.js)
- [x] [sort](src/sort.js)
- [x] [**sortBy**](src/sortBy.js)
- [x] [split](src/split.js)
- [x] [sum](src/sum.js)
- [x] [T](src/T.js)
- [x] [tail](src/tail.js)
- [x] [toLower](src/toLower.js)
- [x] [toPairs](src/toPairs.js)
- [x] [toUpper](src/toUpper.js)
- [x] [**trim**](src/trim.js)
- [x] [unnest](src/unnest.js)
- [x] [values](src/values.js)
- [x] [zipObj](src/zipObj.js)
- [] [__](src/internal/__.js)
- [] [addIndex](src/internal/addIndex.js)
- [] [adjust](src/internal/adjust.js)
- [] [all](src/internal/all.js)
- [] [allPass](src/internal/allPass.js)
- [] [and](src/internal/and.js)
- [] [andThen](src/internal/andThen.js)
- [] [any](src/internal/any.js)
- [] [anyPass](src/internal/anyPass.js)
- [] [ap](src/internal/ap.js)
- [] [aperture](src/internal/aperture.js)
- [] [append](src/internal/append.js)
- [] [apply](src/internal/apply.js)
- [] [applySpec](src/internal/applySpec.js)
- [] [applyTo](src/internal/applyTo.js)
- [] [binary](src/internal/binary.js)
- [] [bind](src/internal/bind.js)
- [] [both](src/internal/both.js)
- [] [call](src/internal/call.js)
- [] [chain](src/internal/chain.js)
- [] [clamp](src/internal/clamp.js)
- [] [clip](src/internal/clip)
- [] [clone](src/internal/clone.js)
- [] [collectBy](src/internal/collectBy.js)
- [] [comparator](src/internal/comparator.js)
- [] [complement](src/internal/complement.js)
- [] [compose](src/internal/compose.js)
- [] [composeWith](src/internal/composeWith.js)
- [] [cond](src/internal/cond.js)
- [] [construct](src/internal/construct.js)
- [] [constructN](src/internal/constructN.js)
- [] [converge](src/internal/converge.js)
- [] [countBy](src/internal/countBy.js)
- [] [curry](src/internal/curry.js)
- [] [curryN](src/internal/curryN.js)
- [] [dec](src/internal/dec.js)
- [] [difference](src/internal/difference.js)
- [] [differenceWith](src/internal/differenceWith.js)
- [] [dissoc](src/internal/dissoc.js)
- [] [dissocPath](src/internal/dissocPath.js)
- [] [divide](src/internal/divide.js)
- [] [drop](src/internal/drop.js)
- [] [dropLast](src/internal/dropLast.js)
- [] [dropLastWhile](src/internal/dropLastWhile.js)
- [] [dropRepeats](src/internal/dropRepeats.js)
- [] [dropRepeatsWith](src/internal/dropRepeatsWith.js)
- [] [dropWhile](src/internal/dropWhile.js)
- [] [either](src/internal/either.js)
- [] [endsWith](src/internal/endsWith.js)
- [] [eqBy](src/internal/eqBy.js)
- [] [eqProps](src/internal/eqProps.js)
- [] [equals](src/internal/equals.js)
- [] [evolve](src/internal/evolve.js)
- [] [find](src/internal/find.js)
- [] [findIndex](src/internal/findIndex.js)
- [] [findLast](src/internal/findLast.js)
- [] [findLastIndex](src/internal/findLastIndex.js)
- [] [flip](src/internal/flip.js)
- [] [forEach](src/internal/forEach.js)
- [] [forEachObjIndexed](src/internal/forEachObjIndexed.js)
- [] [groupBy](src/internal/groupBy.js)
- [] [groupWith](src/internal/groupWith.js)
- [] [gt](src/internal/gt.js)
- [] [gte](src/internal/gte.js)
- [] [has](src/internal/has.js)
- [] [hasIn](src/internal/hasIn.js)
- [] [hasPath](src/internal/hasPath.js)
- [] [identical](src/internal/identical.js)
- [] [ifElse](src/internal/ifElse.js)
- [] [inc](src/internal/inc.js)
- [] [includes](src/internal/includes.js)
- [] [index](src/internal/index.js)
- [] [indexBy](src/internal/indexBy.js)
- [] [indexOf](src/internal/indexOf.js)
- [] [init](src/internal/init.js)
- [] [innerJoin](src/internal/innerJoin.js)
- [] [insert](src/internal/insert.js)
- [] [insertAll](src/internal/insertAll.js)
- [] [internal/](src/internal/internal/)
- [] [intersection](src/internal/intersection.js)
- [] [intersperse](src/internal/intersperse.js)
- [] [into](src/internal/into.js)
- [] [invert](src/internal/invert.js)
- [] [invertObj](src/internal/invertObj.js)
- [] [invoker](src/internal/invoker.js)
- [] [isEmpty](src/internal/isEmpty.js)
- [] [join](src/internal/join.js)
- [] [juxt](src/internal/juxt.js)
- [] [keysIn](src/internal/keysIn.js)
- [] [last](src/internal/last.js)
- [] [lastIndexOf](src/internal/lastIndexOf.js)
- [] [length](src/internal/length.js)
- [] [lens](src/internal/lens.js)
- [] [lensIndex](src/internal/lensIndex.js)
- [] [lensPath](src/internal/lensPath.js)
- [] [lensProp](src/internal/lensProp.js)
- [] [lift](src/internal/lift.js)
- [] [liftN](src/internal/liftN.js)
- [] [lt](src/internal/lt.js)
- [] [lte](src/internal/lte.js)
- [] [mapAccum](src/internal/mapAccum.js)
- [] [mapAccumRight](src/internal/mapAccumRight.js)
- [] [mapObjIndexed](src/internal/mapObjIndexed.js)
- [] [match](src/internal/match.js)
- [] [mathMod](src/internal/mathMod.js)
- [] [max](src/internal/max.js)
- [] [maxBy](src/internal/maxBy.js)
- [] [mean](src/internal/mean.js)
- [] [median](src/internal/median.js)
- [] [memoizeWith](src/internal/memoizeWith.js)
- [] [mergeAll](src/internal/mergeAll.js)
- [] [mergeDeepLeft](src/internal/mergeDeepLeft.js)
- [] [mergeDeepRight](src/internal/mergeDeepRight.js)
- [] [mergeDeepWith](src/internal/mergeDeepWith.js)
- [] [mergeDeepWithKey](src/internal/mergeDeepWithKey.js)
- [] [mergeLeft](src/internal/mergeLeft.js)
- [] [mergeWith](src/internal/mergeWith.js)
- [] [mergeWithKey](src/internal/mergeWithKey.js)
- [] [min](src/internal/min.js)
- [] [minBy](src/internal/minBy.js)
- [] [modulo](src/internal/modulo.js)
- [] [move](src/internal/move.js)
- [] [nAry](src/internal/nAry.js)
- [] [negate](src/internal/negate.js)
- [] [none](src/internal/none.js)
- [] [not](src/internal/not.js)
- [] [nthArg](src/internal/nthArg.js)
- [] [o](src/internal/o.js)
- [] [objOf](src/internal/objOf.js)
- [] [of](src/internal/of.js)
- [] [omit](src/internal/omit.js)
- [] [on](src/internal/on.js)
- [] [once](src/internal/once.js)
- [] [or](src/internal/or.js)
- [] [otherwise](src/internal/otherwise.js)
- [] [over](src/internal/over.js)
- [] [pair](src/internal/pair.js)
- [] [partial](src/internal/partial.js)
- [] [partialRight](src/internal/partialRight.js)
- [] [partition](src/internal/partition.js)
- [] [pathEq](src/internal/pathEq.js)
- [] [paths](src/internal/paths.js)
- [] [pathSatisfies](src/internal/pathSatisfies.js)
- [] [pipeWith](src/internal/pipeWith.js)
- [] [prepend](src/internal/prepend.js)
- [] [product](src/internal/product.js)
- [] [project](src/internal/project.js)
- [] [promap](src/internal/promap.js)
- [] [propEq](src/internal/propEq.js)
- [] [propIs](src/internal/propIs.js)
- [] [props](src/internal/props.js)
- [] [propSatisfies](src/internal/propSatisfies.js)
- [] [range](src/internal/range.js)
- [] [reduceBy](src/internal/reduceBy.js)
- [] [reduced](src/internal/reduced.js)
- [] [reduceRight](src/internal/reduceRight.js)
- [] [reduceWhile](src/internal/reduceWhile.js)
- [] [remove](src/internal/remove.js)
- [] [repeat](src/internal/repeat.js)
- [] [reverse](src/internal/reverse.js)
- [] [scan](src/internal/scan.js)
- [] [sequence](src/internal/sequence.js)
- [] [set](src/internal/set.js)
- [] [sortWith](src/internal/sortWith.js)
- [] [splitAt](src/internal/splitAt.js)
- [] [splitEvery](src/internal/splitEvery.js)
- [] [splitWhen](src/internal/splitWhen.js)
- [] [splitWhenever](src/internal/splitWhenever.js)
- [] [startsWith](src/internal/startsWith.js)
- [] [subtract](src/internal/subtract.js)
- [] [symmetricDifference](src/internal/symmetricDifference.js)
- [] [symmetricDifferenceWith](src/internal/symmetricDifferenceWith.js)
- [] [take](src/internal/take.js)
- [] [takeLast](src/internal/takeLast.js)
- [] [takeLastWhile](src/internal/takeLastWhile.js)
- [] [takeWhile](src/internal/takeWhile.js)
- [] [tap](src/internal/tap.js)
- [] [test](src/internal/test.js)
- [] [thunkify](src/internal/thunkify.js)
- [] [times](src/internal/times.js)
- [] [toPairsIn](src/internal/toPairsIn.js)
- [] [toString](src/internal/toString.js)
- [] [transduce](src/internal/transduce.js)
- [] [transpose](src/internal/transpose.js)
- [] [traverse](src/internal/traverse.js)
- [] [tryCatch](src/internal/tryCatch.js)
- [] [type](src/internal/type.js)
- [] [unapply](src/internal/unapply.js)
- [] [unary](src/internal/unary.js)
- [] [uncurryN](src/internal/uncurryN.js)
- [] [unfold](src/internal/unfold.js)
- [] [union](src/internal/union.js)
- [] [unionWith](src/internal/unionWith.js)
- [] [uniq](src/internal/uniq.js)
- [] [uniqBy](src/internal/uniqBy.js)
- [] [uniqWith](src/internal/uniqWith.js)
- [] [unless](src/internal/unless.js)
- [] [until](src/internal/until.js)
- [] [update](src/internal/update.js)
- [] [useWith](src/internal/useWith.js)
- [] [valuesIn](src/internal/valuesIn.js)
- [] [view](src/internal/view.js)
- [] [when](src/internal/when.js)
- [] [where](src/internal/where.js)
- [] [whereAny](src/internal/whereAny.js)
- [] [whereEq](src/internal/whereEq.js)
- [] [without](src/internal/without.js)
- [] [xor](src/internal/xor.js)
- [] [xprod](src/internal/xprod.js)
- [] [zip](src/internal/zip.js)
- [] [zipWith](src/internal/zipWith.js)
