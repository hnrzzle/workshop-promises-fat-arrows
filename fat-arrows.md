
# Fat Arrows

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
x => return x + 5
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
todos.map( ({task, done }) => {
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


