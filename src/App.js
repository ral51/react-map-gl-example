// @flow

import React, { Component } from 'react';
import MapGL from 'react-map-gl';
const MAPBOX_TOKEN = '';
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.729,
        longitude: -122.36,
        zoom: 11,
        bearing: 0,
        pitch: 50,
        width: 500,
        height: 500
      }
    }
  }
  _onViewportChange(viewport) {
    this.setState({ viewport })
  }
  render() {
    const { viewport } = this.state;
    return (
      <React.Fragment>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={this._onViewportChange}
        />
      </React.Fragment>
    );
  }
}
