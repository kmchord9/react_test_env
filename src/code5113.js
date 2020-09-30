//Functional Components
import React from 'react';

const UserCard = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
};

export default UserCard;

