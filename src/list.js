import React from 'react';

const List = (prop) => {
    const listitems = prop.data.map((index, text) => {
        return <li>{index} : {text}</li>
    });

    return (
        <ul>
            {listitems}
        </ul>
    );
};

export default List

