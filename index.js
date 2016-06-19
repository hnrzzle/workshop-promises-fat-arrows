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

readMyFile( 'foo.txt' )
	.then( text => {
		return readMyFile( text.trim() );
	})
	.catch(err => {
		return 'this is the default text';
	})
	.then( result => {
		console.log( 'final then', result );
	});