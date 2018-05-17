import React, { Component } from 'react';
import Map from '../../Map/';
import Toolbar from '../../Toolbar';

class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <Toolbar />
                <Map />
            </div>
        );
    }
}

export default Main;