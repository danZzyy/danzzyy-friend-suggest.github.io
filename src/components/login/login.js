import './login.css';
import React, {useState, useEffect} from 'react';
import users from '../../users-with-friends.json';

function Login({loginEvent}) {
    const [userId, setUserId] = useState(-1);
    const [password, setPassword] =  useState();

    const handleUserSelect = (event) => {
        setUserId(event.target.value);
    };

    return (
        <div>
            <div>
                <label>
                    User
                    <select placholder="Select your user" value={userId} onChange={handleUserSelect}>
                        <option value='-1' disabled selected>Select your user</option>
                        {
                            users.map(u => (
                                <option value={u.id} key={u.id}>{`${u.first_name} ${u.last_name}`}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input type="password" value={password}/>
                </label>
                <button disabled={userId === -1} onClick={() => loginEvent(userId)}>Login</button>
            </div>
        </div>
    );
}

export default Login;