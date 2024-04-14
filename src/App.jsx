import React from 'react';
import UserList from './pages/UserList';
import PostContent from './pages/PostContent';
import AlbumContent from './pages/AlbumContent';
import PersonData from './pages/PersonData';
import { Routes, Route } from 'react-router-dom';

function App(props) {
    return (
        <Routes>
            <Route path="/" exact element={<UserList data={props.data} />} />
            <Route path="/user/:userId/personData" element={<PersonData data={props.data} />} />
            <Route path="/user/:userId/post" element={<PostContent data={props.data} />} />
            <Route path="/user/:userId/album" element={<AlbumContent data={props.data} />} />
        </Routes>
    );
}

export default App;
