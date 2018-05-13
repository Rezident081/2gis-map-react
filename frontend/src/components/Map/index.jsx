import React, { Component } from 'react';
import DG from '2gis-maps';
import { addMarker } from '../../store/actions';
import { connect } from 'react-redux';
import markerImg from '../../assets/img/location-pin.png';


class Map extends Component {

    constructor(){
        super();
        this.map = null;
    }

    componentDidMount(){
        this.map = DG.map('map', { 'center': [46.47, 30.73], 'zoom': 15 });
        DG.control.location().addTo(this.map);

        this.map.addEventListener('click', this.addMarker.bind(this));
    }

    addMarker(e){
        try{

            const { lat, lng } = e.latlng;
            const myIcon = this.getMarkerIcon({ iconUrl: markerImg, iconSize: [36, 36] });

            DG.marker([ lat, lng ], {icon: myIcon}).addTo(this.map);
            this.props.dispatch(addMarker(lat, lng));

        }catch(err){
            console.error(err);
        }
    }

    getMarkerIcon(props){
        return DG.icon(props);
    }


    render() {
        return (
            <div id='map'>123</div>
        );
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
