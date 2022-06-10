import users from '../users-with-friends.json';
import * as _ from 'lodash';

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

function getSuggestedFriends(id)  {
    let user = getUser(id);
    let suggestedFriends =  [];
    users.forEach(u => {
        if(u.id !== user.id && !user.friends.includes(u.id)) {
            let mutualFriends = _.intersection(u.friends, user.friends);
            suggestedFriends.push({
                mutualFriends: mutualFriends.length,
                user: u
            });
        }
    });

    return suggestedFriends.sort((a,b) => (a.mutualFriends > b.mutualFriends) ? 1  : -1 );
}

export  { getUser, getUsers, getUsersVis, getSuggestedFriends };