Handling Promise rejections
===

## `then(result, err)`

In practice we rarely use both arguments.

## Introducing `catch`

```js
.catch(err => {...})
``` 

is short for:

```js
.then(null, err => {...})
```

## Rejection "chains"

```js
someAsync()
	.then(value => {...})
	.catch(err => {...})
	.then(result => {...})
```

* When `someAsync` resolves, closest `then` is: `.then(value => {...})`
* When `someAsync` rejects, closest `catch` is: `.catch(err => {...})`
* Same rule applies after each promise!

## `catch` swallows errors!

Once an error is routed to a `catch`, it is handled!

## `throw` to route to a catch

```js
someAsync()
	.then(value => {
		if(value === 7) throw 'no sevens allowed!';
		// rest of handler
	})
	.catch(err => {
		console.log(err); //'no sevens allowed'
	});
```

## awkward error flows

When you get stuck routing error, look up at higher level chain design.
