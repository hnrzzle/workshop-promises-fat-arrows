# Promise Chaining

## `.then()` returns a new promise

```js
// we don't normally write it this way,
// but allows us to see promises
const promise1 = myAsyncFn();
const promise2 = promise1.then(result => result + 5 );
promise2.then(value => {}) // what is "value" here???
```

## Chained promise value

* return value of previous promise
__OR__
* result of promise if return value was a promise

```js
myAsyncFn()
	.then(result => result + 5);
	.then(sum => {
		const foo = getFoo(sum);
		return myOtherAsyncFn(foo);
	})
	.then(bar => console.log(bar));
```

## Don't nest unnecessarily

Instead of:

```js
getUser(userId)
	.then(user => {
		getGroup(user.groupId)
			.then(group => res.send( group ));
	});
```

Use:

```js
getUser(userId)
	.then(user => getGroup(user.groupId))
	.then(group => res.send( group ));
```

When we add error handling, the benefits will be 
even more obvious...

## You can chain on a return promised

* Compose via Promise returning functions
* You can inline calls that don't need `this` context

```js
function getFirstFileContents(dir) {
	return sander.readdir(dir)
		.then(files => files[0])
		.then(sander.readFile) // as long as sander doesn't need "this"
}

getUser(userId)
	.then(user => getGroup(user.groupId))
	.then(group => getFirstFileContents(group.directory))
	.then(contents => res.send(contents);
```

## TIP: Destructuring

instead of:

```js
.then(group => getFirstFileContents(group.directory))
```

you can write:

```js
.then(({directory}) => getFirstFileContents(directory))
```



