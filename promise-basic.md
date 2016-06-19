# Basic Promises

## Wrapping async code as a Promise

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