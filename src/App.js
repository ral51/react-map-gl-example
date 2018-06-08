import React, { Component } from 'react';
import MapGL from 'react-map-gl';
const MAPBOX_TOKEN = "pk.eyJ1Ijoib2RhbGF5IiwiYSI6ImNqaTZjbTk2eDB0Y2UzcXF0M2hmOGJxeGEifQ.0Q3qo0_ASfx81kc5pTBTfg";
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
