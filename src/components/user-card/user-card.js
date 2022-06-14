import './user-card.css';
import React, {useState, useEffect} from 'react';

function UserCard({userProp}) {
    const [user, setUser] = useState(userProp);

    return (
        <div class="card">
            <img src={user.user.avatar}/>
            <h4>{user.user.first_name} {user.user.last_name}</h4>
            <h5>{user.mutualFriends} mutual friends</h5>
        </div>
    );

}

export default UserCard;