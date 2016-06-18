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
2. Orchestration of tasks
    * sequential (nested code)
    * parallel (results collation and callback counter)

### What's the alternative?

```js
function getAllFiles( dir ) {

  return fsP.readdir( dir )
    .then( files => files.map( f => `${dir}/${f}` ) )
    .then( paths => paths.map( p => fsP.readFile( p, 'utf-8' ) )
    .then( filePromises => Promise.all( filePromises ) );

}
```