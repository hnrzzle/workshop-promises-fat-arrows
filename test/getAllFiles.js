const fs = require( 'fs' );

function readdir( fileName ) {
		return new Promise( ( resolve, reject ) => {
			fs.readdir( dir, ( err, files ) => {
				if ( err ) reject( err );
				else resolve( files );
			});
		});
};

function readFile( fileName ) {
		return new Promise( ( resolve, reject ) => {
			fs.readFile( fileName, 'utf-8', ( err, text ) => {
				if ( err ) reject( err );
				else resolve( text );
			});
		});
};

function getAllFiles( dir ) {

}

getAllFiles( __dirname + '/dir' )
	.then( files => console.log( files ) );