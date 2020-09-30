//Functional Components
import React from 'react';

const UserCard = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <button onclick={props.onclickFunction}>Click Me!</button>
        </div>
    )
};

export default UserCard;

