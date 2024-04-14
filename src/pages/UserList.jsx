import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Main = (props) => {
    const users = props.data[0]?.personData || [];
    const [username, setUserName] = useState('');

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(username.toLowerCase().trim()));

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <>
            <h1>Main Page</h1>
            <div>
                <input type="text" value={username} onChange={handleChange} />
            </div>
            <ul>
                {filteredUsers.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link to={`/user/${user.id}/personData`}>
                                <h1>{user.name}</h1>
                            </Link>
                            <ul>
                                <Link to={`/user/${user.id}/album`}>
                                    <li>Albums</li>
                                </Link>
                                <Link to={`/user/${user.id}/post`}>
                                    <li>Posts</li>
                                </Link>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Main;
