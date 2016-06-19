const fs = require( 'fs' );

function readMyFile( fileName ) {
		
		const promise = new Promise( ( resolve, reject ) => {
			fs.readFile( fileName, 'utf-8', ( err, text ) => {
				if ( err ) reject( err );
				else resolve( text );
			});
		});

		return promise;
};

const promise1 = readMyFile( 'foo.txt' );



readMyFile( 'foo.txt' )
	.then( text => {
		console.log( 'promise1', text );
		return text.toUpperCase();
	})
	.then( result => {
		console.log( 'promise2', result );
	});