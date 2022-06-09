const args = process.argv.slice(2);
const infile = args[0];
const outfile = args[1];

const fs = require('fs');

// generate n (numFriends) unique numbers in range f (friendPool)
const genFriendsIds = (numFriends, friendPool)  => {
    let friends = new Set();
    while (friends.size < numFriends) {
        friends.add(Math.floor(Math.random() * friendPool) + 1);
    }
    return Array.from(friends);
}

fs.readFile(infile, (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    let usersLength = users.length;
    let usersWithFriends = [];
    users.forEach(user => {
        let friendCount = Math.floor(Math.random() * 10);
        user.friends = genFriendsIds(friendCount, usersLength);
        usersWithFriends.push(user);
    });

    fs.writeFileSync(outfile, JSON.stringify(usersWithFriends));

    
});