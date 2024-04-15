import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PeronData = (props) => {
    const { userId } = useParams();
    const { data } = props;
    const userName = data[0]?.personData || [];

    return (
        <>
            <Helmet>
                <title>User id info</title>
                <meta
                    name="description"
                    content="Explore the profile of User {userId}. Discover insights, interests, and contributions from this community member."
                />
            </Helmet>
            <h2>User {userId} </h2>
            {userName
                .filter((person) => Number(userId) === person.id)
                .map((person) => {
                    return (
                        <div key={person.id}>
                            <h2>
                                {person.name} 's ID is: {person.id}
                            </h2>
                        </div>
                    );
                })}
        </>
    );
};
export default PeronData;
