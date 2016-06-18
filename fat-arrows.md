
# `=>` Arrows Functions

## Compare to `function`

```
function(x) {
	return x + 5;
}
```
_becomes_

```
(x) => {
	return x + 5;
}
```
## Slimming Down

### single parameter?
_parens may be omitted..._
```
x => {
	return x + 5;
}
```

### returns single expression? 
_block delimiters and return statement may be omitted..._

```
x => x + 5
```

## More rules

### Parens required with no parameters
```
setTimeout(() => {
	//...
}, 1000);
```

### Parens required with multiple parameters
```
array.map((item, i) => {
	//...
});
```

### Parens required with destructuring
```
todos.map(({ task, done }) => {
	//...
});
```

### Blocks can still be used inline
```
array.map(x => { return x*x; });
```

### Use parens with ambiguous expressions
```
array.map( item => ({ name: item.name, value: item.x + 5 }) );
```

## About `this`

Arrow functions use lexical binding, which is a fancy way
of saying they inherit "this" from where they are defined.

```js
function MyKlass(){
	this.name = 'klass name';
}

MyKlass.prototype.foo = function(){
	setTimeout(() => {
		console.log( this.name ); // klass-name
	})
}
```

They are "context-less" and cannot be bound using `bind`, `call`, or `apply`