import React from 'react';
import { useParams } from 'react-router-dom';

const PostContent = (props) => {
    const { userId } = useParams();
    const { data } = props;
    const posts = data[2]?.postData || [];

    return (
        <>
            <h2>User {userId} Posts</h2>

            <ul>
                {posts
                    .filter((post) => Number(userId) === post.userId)
                    .map((post) => {
                        return (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};
export default PostContent;
