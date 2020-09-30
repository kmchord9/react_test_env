import React, { Component } from 'react';

class Hello extends Component {
    render() {
        const important = true;

        let paragraph = <p>default</p>
        
        if (important){
            paragraph = <p>important</p>
        }
        return paragraph
    }
}

export default Hello;