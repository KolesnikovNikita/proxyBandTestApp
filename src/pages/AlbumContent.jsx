import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AlbumContent = (props) => {
    const { userId } = useParams();
    const { data } = props;
    const albums = data[1]?.albumData || [];
    return (
        <>
            <Helmet>
                <title>Albums</title>
                <meta
                    name="description"
                    content="Browse through a collection of albums shared by our users. Experience moments captured in images, music, and memories."
                />
            </Helmet>
            <h2>User {userId} Albums</h2>

            <ul>
                {albums
                    .filter((album) => Number(userId) === album.userId)
                    .map((album) => {
                        return <li key={album.id}>{album.title}</li>;
                    })}
            </ul>
        </>
    );
};
export default AlbumContent;
