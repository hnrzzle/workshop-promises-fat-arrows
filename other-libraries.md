Other promise libraries
===

## Be careful of intermediate implementations

* non-standard behaviors and methods
* online blog info may be inaccurate
* better now than last year

## Sugar methods

* finally

## Better node performance

* Event loop
	* `setTimeout`
	* `setInterval`
	* `process.nextTick`
* Careful about unnecessary "ticks"
* (bluebird)[http://bluebirdjs.com/]

## Browser considerations

* Volume of promise calls
* Weight of add'l library

## Standardize by wrapping

Starting promise dictates who owns chain. Wrap to convert:

```js
Promise.resolve( someOtherLib() )
	.then( val => { ... } )
``` 