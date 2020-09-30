import React from 'react';

function Cd1() {
    return <p>1: hello, world!</p>;
}

const Cd2 = () => {
    return <p>2: hello, world!</p>
};

const Cd3 = () => <p>3: hello, world!</p>;

const Hello2 = () => {
    return (
        <div>
            <Cd1 />
            <Cd2 />
            <Cd3 />
        </div>
    );
};

export default Hello2;