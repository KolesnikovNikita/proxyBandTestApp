import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Main = (props) => {
    const users = props.data[0]?.personData || [];
    const [username, setUserName] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(username.toLowerCase().trim()));

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    };

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <>
            <Helmet>
                <title> Users</title>
                <meta
                    name="description"
                    content="Explore a diverse community of users and their profiles. Discover unique stories, interests, and connections."
                />
            </Helmet>

            <h1>Main Page</h1>
            <div>
                <input type="text" value={username} onChange={handleChange} />
            </div>
            <br />
            <button onClick={toggleSortOrder}>Toggle Sort Order</button>
            <ul>
                {sortedUsers.map((user) => {
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
