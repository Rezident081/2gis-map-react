import { combineReducers } from 'redux';
import defaultState from './state';

function markers(state = defaultState, action){
    switch (action.type) {
        case 'ADD_NEW_MARKER':
            return Object.assign(
                 {}, 
                 state, 
                 { maps: state.maps.concat({id:state.maps.length + 1, lat : action.lat, lng: action.lng}) }            
            )
        default:
            return state;
    }
}

export default combineReducers({
    markers
})

