import React from 'react';
import { MapWithGeocode } from 'components/map/GoogleMap';

export class RentalMap extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <MapWithGeocode
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAg0VnjjBzvGRyFztF-W18RMDOrV1o_z7o&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
