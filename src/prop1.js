import React from 'react';

const Profile = (prop) => {
    const { name, age, love } = prop.data;
    return (
        <dl>
            <dt>Name</dt><dd>{name}</dd>
            <dt>Age</dt><dd>{age}</dd>
            <dt>Love</dt><dd>{love}</dd>
        </dl>
    );
};

export default Profile;