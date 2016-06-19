const sander = require( 'sander' );

function getFirstFileContents(dir) {
    return sander.readdir(dir)
        .then(files => files[0])
        .then(file => sander.readFile( file ) ); // as long as sander doesn't need "this"
}

getUser(userId)
    .then(user => getGroup(user.groupId))
    .then(group => getFirstFileContents(group.directory))
    .then(contents => res.send(contents));

// destructuring example
// ({directory}) => getFirstFileContents(directory)
// ( ref ) => {
// 	var directory = ref.directory;
// 	getFirstFileContents(directory);
// }