import React from 'react';
import { useParams } from 'react-router-dom';

const AlbumContent = (props) => {
    const { userId } = useParams();
    const { data } = props;
    const albums = data[1]?.albumData || [];
    console.log(userId);
    return (
        <>
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
