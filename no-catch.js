function getUserGroup( userId ) {
	return getUser( userId )
		.then( user => {
			if( !user ) throw `not a valid userId`
			return getGroup( user.groupId ) 
		});
}


getUserGroup( req.query.userId )
	.then( group => getWhatever( groupId ) )
	.then( wat => res.send( wat ) )
	.catch( err => res.status(500).send(err) );