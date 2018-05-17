import React, { Component } from 'react';
import DG from '2gis-maps';
import { addMarker } from '../../store/actions';
import { connect } from 'react-redux';
import { Map, Marker } from '2gis-maps-react';


class Maps extends Component {

    createMarker(e){
        const { lat, lng } = e.latlng
        this.props.dispatch(addMarker(lat, lng));
    }

    render(){
        const { center, coords } = this.props.state.markers;
        return(
            <div id="map">
                <Map 
                    center={center} 
                    zoom={13}
                    onClick={this.createMarker.bind(this)}
                >
                    <Marker pos={center} />
                    {
                        coords.map((position, index) =>
                            <Marker
                                key={index}
                                pos={position}
                            />)
                    }
                </Map>
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
)(Maps);
