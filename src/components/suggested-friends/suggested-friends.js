import {getSuggestedFriends} from '../../api/api';
import React, {useState, useEffect} from 'react';
import  UserCard from '../user-card/user-card';

function SuggestedFriends({user})  {
    const [sugFriends, setSugFriends] = useState([]);
    setSugFriends(getSuggestedFriends(user.id)); 

    return  (
        <div>
            {
                sugFriends.map(sf => (
                    <UserCard user={sf}></UserCard>
                ))
            }
        </div>
    )
}

export default SuggestedFriends;