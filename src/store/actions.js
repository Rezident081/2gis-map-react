export function addMarker(lat, lng){
    return {
        type : 'ADD_NEW_MARKER',
        lat,
        lng
    }
}
