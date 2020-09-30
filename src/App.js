import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './prop1';

const taro = {
    name: 'Taro',
    age: 20,
    love: 'Game'
};

const hanako = {
    name: 'Hanako',
    age: 10,
    love: 'Cats'
};

class App extends Component {
    render() {
        return (
            <div>
                <Profile data={taro} />
                <Profile data={hanako} />
            </div>
        );
    }
}

export default App;