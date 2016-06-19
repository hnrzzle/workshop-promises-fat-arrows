const sander = require('sander')

function getAllFiles( dir ) {

  return sander.readdir( dir )
    .then( files => files.map( f => `${dir}/${f}` ) )
    .then( paths => paths.map( p => sander.readFile( p, { encoding: 'utf-8' } ) ) )
    .then( filePromises => Promise.all( filePromises ) )
}

getAllFiles( __dirname + '/dir')
	.then( files => console.log(files) )
	.catch( err => console.err(err) );