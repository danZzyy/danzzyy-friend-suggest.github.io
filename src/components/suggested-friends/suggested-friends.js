import {getSuggestedFriends} from '../../api/api';
import React, {useState, useEffect} from 'react';
import  UserCard from '../user-card/user-card';

function SuggestedFriends({user})  {
    const [sugFriends, setSugFriends] = useState(getSuggestedFriends(user.id));
    console.log(sugFriends);
    return  (
        <div>
            {
                sugFriends.map(sf => (
                    <UserCard userProp={sf} key={sf.user.id}></UserCard>
                ))
            }
        </div>
    )
}

export default SuggestedFriends;