# Promises

## From callbacks

How do we get our heads around what Promises change
from callbacks?

### The callback

```js
function myAsyncFn( callback ) {

	setTimeout( () => {
		callback();
	}, 1000);

};

myAsyncFn( 'xyz', () => {
	console.log( 'all done!' );
});

```

# "Externalize" the callback parameter

```js
function myAsyncFn() {

	var callback = null;

	setTimeout( () => {
		// we need a callback by the time
		// setTimeout callback happens
		if ( callback ) callback();
	}, 1000);


	// instead, return an object that has
	// function that sets the callback
	return {
		then( cb ){
			callback = cb;
		}
	};

};

myAsyncFn().then(() => {
	console.log( 'all done!' );
});
```

### What if we had separate callback for errors?


```js
function myAsyncFn( input ) {
	let callback = ()=>{};
	let errCallback = ()=>{};

	fs.readFile( input, ( err, buffer ) => {
		if ( err ) errCallback( err );
		else callback( buffer );
	});

	return {
		then( cb, errCb ){
			callback = cb;
			errCallback = errCb;
		}
	};

};

myAsyncFn( 'xyz' ).then( buffer => {
	console.log( buffer.toString() );
}, err => {
	console.error( err );
});
```

### Moar features...

Add in rest of [Promise features](https://promisesaplus.com/):
* Chaining
	* ensure asynchronicity
	* return value/promise handling
	* error propagation 

And you have Promises.