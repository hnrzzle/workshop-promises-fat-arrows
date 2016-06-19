const fs = require( 'fs' );

function readdir( dir ) {
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
	return readdir( dir )
		.then( files => files.map( f => dir + '/' + f ) )
		.then( filePaths => filePaths.map( f => readFile( f ) ) )
		.then( promises => Promise.all( promises ) );
}

getAllFiles( __dirname + '/dir' )
	.then( files => console.log( files ) )
	.catch( err => console.log( err ) );