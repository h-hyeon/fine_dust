/*global google*/
import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }
  componentDidMount() {
    console.log('google', this.props);
    var map = new google.maps.Map(this.map.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });

    var imageMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return 'https://tiles.waqi.info/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=_8d5d5eac48586bf9657d18e676d89d47f69c9947_";
      },
      name: "Air  Quality"
    });

    map.overlayMapTypes.push(imageMapType);
  }

  render() {
    return <div className='map' ref={this.map}></div>;
  }
}

export default GoogleMap;