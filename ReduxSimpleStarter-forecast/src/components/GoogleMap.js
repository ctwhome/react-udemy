import React, { Component } from 'react';

class GoogleMap extends Component {
  // just to use the library of google maps
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }
  render() {
    // this.defs.map
    return <div ref="map" />;
  }
}
export default GoogleMap;
