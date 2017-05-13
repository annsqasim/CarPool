import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
  state = {
    center: [60.938043, 30.337157],
    zoom: 9,
  };

  _onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }

  render() {
    return (
       <GoogleMapReact
        onChange={this._onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="place" lat={60.955413} lng={30.337844}>MyPlace</div>
      </GoogleMapReact>
    );
  }
}

module.exports = SimpleMap;