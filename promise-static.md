Promise static methods 
===

## `Promise.all` - parallel made easy

Run series of promises in parallel and synchronize result

```js
Promise.all(array_of_promises)
	.then(array_of_ordered_results => {...});
```

### Use `.map`

Create array of promises from array of inputs  

```js
getUsers(query)
	.then(users => users.map(u => u.groupId))
	.then(ids => ids.map(id => getGroup(id))
	.then(groupPromises => Promise.all(groupPromises) )
	.then(groups => {
		// do something with groups
	});
```

## `Promise.race`

Return first of many promises

## `Promise.resolve` and `Promise.reject`

Return an resolved or rejected promise

```
Promise.resolve(42)
	.then(answer => console.log(answer);
```

Sometimes an alternative to wrapping with `new Promise`

