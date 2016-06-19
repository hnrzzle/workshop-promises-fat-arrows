getUser(userId)
    .then(user => {
        getGroup(user.groupId)
            .then(group => res.send( group ));
    });


getUser(userId)
    .then( user => getGroup(user.groupId) )
    .then( group => res.send( group ) );