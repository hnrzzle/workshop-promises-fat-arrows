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

readMyFile( 'README.md' ).then( text => {
	console.log( text );
},err => {
	console.log( 'ERROR!', err)
});