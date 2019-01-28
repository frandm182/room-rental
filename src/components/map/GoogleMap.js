import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


function MapComponent(props) {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  )
}

function withGeocode(WrappedComponent) {
  return class extends React.Component {
    render() {
      console.log(this.props);
      return (
        <WrappedComponent />
      )
    }
  }
}


export const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)));


