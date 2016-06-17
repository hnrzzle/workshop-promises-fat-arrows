![cf](http://i.imgur.com/7v5ASc8.png) Setup Check
====

* Create a file (`test.js`) with:

	```js
	Promise.resolve('world')
	  .then( place => console.log(place) );
	console.log('hello');
	```

* From terminal:
	```sh
	> node test.js
	hello
	world
	```