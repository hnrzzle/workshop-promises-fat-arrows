![cf](http://i.imgur.com/7v5ASc8.png) Setup Check
====

Pair up with someone make sure both people can:

* Create a file `test.js` with:

	```js
	Promise
		.resolve( 'world' )
		.then( place => console.log(place) );

	console.log( 'hello' );
	```

* Run from terminal:
	```sh
	> node test.js
	hello
	world
	```