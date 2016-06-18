What's wrong with callbacks?
===

_Seems easy enough..._

```js
fs.readFile( filepath, 'utf-8', function( err, filetext ) {
	console.log( filetext );
});
```

_And then..._

```js
function getAllFiles( directory, cb ) {
  
  fs.readdir( directory, function( err, files ) {
    if ( err ) return cb( err );			
  
    const results = [];
    var count = files.length;
    
    files.forEach( function(file, i) {
      
      const filepath = directory + '/' + file;

      fs.readFile( filepath, 'utf-8', function( err, filetext ) {
        if ( err ) return cb( err );
        results[i] = filetext;
        
        if ( !--count ) {
          cb( null, results );
        }
      });
      
    });			
  });
}
```

## What's going on?

1. Manually checking and propagating errors
2. Orchestration of sequential (nested) and parallel (counter) tasks

### What's the alternative?

```js
function getAllFiles( directory ) {

  return fsPromise.readdir( directory )
    .then( files => files.map( f => directory + '/' + f ) )
    .then( paths => paths.map( p => fsPromise.readFile( p, 'utf-8' ) )
    .then( filePromises => Promise.all( filePromises ) );

}
```