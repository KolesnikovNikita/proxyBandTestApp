import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PostContent = (props) => {
    const { userId } = useParams();
    const { data } = props;
    const posts = data[2]?.postData || [];

    return (
        <>
            <Helmet>
                <title>Posts</title>
                <meta
                    name="description"
                    content="Dive into a world of engaging posts created by our community members. From insightful discussions to creative expressions, there's something for everyone."
                />
            </Helmet>
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
