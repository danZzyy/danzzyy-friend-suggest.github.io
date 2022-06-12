import './login.css';
import React, {useState, useEffect} from 'react';
import users from '../../users-with-friends.json';

function Login({loginEvent}) {
    const [userId, setUserId] = useState();
    const [password, setPassword] =  useState();

    const handleUserSelect = (event) => {
        setUserId(event.target.value);
    };

    return (
        <div>
            <div>
                <label>
                    User
                    <select value={userId} onChange={handleUserSelect}>
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
                    <input type="text" value={password}/>
                </label>
                <button onClick={() => loginEvent(userId)}>Login</button>
            </div>
        </div>
    );
}

export default Login;