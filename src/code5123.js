//Container

import React, { Component } from 'react';
import SwitchFlag from './code5122';
import ViewFlagValue from './code5121';


class App extends Component {
    constructor() {
        super();
        this.handleUpdateFlag = this.handleUpdateFlag.bind(this);
        this.state = {
            flag: false
        }
    }

    handleUpdateFlag() {
        this.setState({
            flag: !this.state.flag
        })
    }
    
    render() {
        return (
            <div>
                <SwitchFlag 
                  handleUpdateFlag={this.handleUpdateFlag}
                />
                <ViewFlagValue 
                  flag={this.state.flag}
                />
            </div>
        )
    }
}

export default App;