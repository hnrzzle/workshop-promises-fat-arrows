# Promises

## From callbacks

How do we get our heads around what Promises change
from callbacks?

### Externalize the callback

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
becomes

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

And you have Promises:


```js
function myAsyncFn( input ) {
	return new Promises( ( resolve, reject ) => {

		fs.readFile( input, ( err, buffer ) => {
			if ( err ) reject( err );
			else resolve( buffer );
		});

	});

};

myAsyncFn( 'xyz' ).then( buffer => {
	console.log( buffer.toString() );
}, err => {
	console.error( err );
});
```

## Errata and Caveats

### You should rarely `new Promise()`

* As a JavaScript developer, you will be orchestrating
existing asynchronous methods. (You'd need to develop a 
`c++` node plugin for new asynchronous method)

* If you are using a library that already supports promises, 
you don't need to create a new promise

* There are many, many npm libraries that will "promisify"
existing libraries or that exist to wrap an existing library.

* However, if you have a one-off case you should know how to 
roll your own wrapper

### Promises do not re-execute

```js
const promise = myAsyncFn( 'xyz' );

promise.then( buffer => {
	console.log( buffer );
});

// does not re-run the file get!
promise.then( buffer => {
	console.log( buffer );
});
```