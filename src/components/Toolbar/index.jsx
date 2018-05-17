import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="toolbar-btn-wrap">
                    <Button className="btn-success">Save markers</Button>
                    <Button className="btn-danger">Show markers</Button>
                </div>
            </div>
        );
    }
}

export default Toolbar;