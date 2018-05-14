import React, { Component } from 'react';
import DG from '2gis-maps';
import { addMarker } from '../../store/actions';
import Marker from './components/Marker';
import { connect } from 'react-redux';
import markerImg from '../../assets/img/location-pin.png';


class Map extends Component {

    constructor(){
        super();
        this.state = {
            map : null
        }
    }

    componentDidMount(){
        this.getMap().then(m => {
            this.setState({map : m});
            this.setMapLocation(m);
        });
    }

    getMap(){
        return new Promise( ( res ) => {
            const initMap = DG.map('map', { 'center': [46.47, 30.73], 'zoom': 15 })
            res(initMap);
        })
    }

    setMapLocation(map){
        DG.control.location().addTo(map);
    }

    render(){
        return(
            <div id='map'>
                {this.state.map && 
                    <Marker test = {this.state.map}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);
