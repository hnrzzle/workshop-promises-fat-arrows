const fs = require( 'fs' );

function readMyFile( fileName ) {
		console.log( 'reading the file' );
		const promise = new Promise( ( resolve, reject ) => {

			fs.readFile( fileName, 'utf-8', ( err, text ) => {
				if ( err ) reject( err );
				else resolve( text );
			});

		});

		return promise;
};

var promise = readMyFile( 'foo.txt' );

promise.then( text => {
	console.log( text );
}, err => {
	console.log( 'ERROR!', err)
});

promise.then( text => {
	console.log( text );
}, err => {
	console.log( 'ERROR!', err)
});