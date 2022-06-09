import users from '../users-with-friends.json';

function getUser(id) {
    return users.find(user => user.id === id);
}

function getUsers(ids) {
    let userList = [];
    ids.forEach(id => {
        userList.push(users.find(user => user.id === id));
    });
    return userList;
}

function getUsersVis()  {
    let nodes = [];
    let edges = [];

    users.forEach(user => {
        nodes.push({
            id: user.id,
            label: user.first_name + " " + user.last_name,
            title: ""
        });
        user.friends.forEach(f =>  {
            const ed = {
                from: user.id,
                to: f
            };
            edges.push(ed);
        });
    });

    return {
        nodes: nodes,
        edges: edges
    };
}

export  { getUser, getUsers, getUsersVis };