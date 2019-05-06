import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../componenets/google_map'

class WeatherList extends Component {
  renderWeather({data}) {  
    return (
      <tr key={data.idx} >
        <td>{data.city.name}</td>
        <td><GoogleMap lat={data.city.geo[0]} lng={data.city.geo[1]}/></td>
        <td>{data.aqi}</td>
        <td>{data.time.s}</td>
        <td>{handleStatus({data})}</td>
      </tr>
    );
  }
  handleError() {
    if (this.props.error) {
      console.log(this.props.error)
      return (
        <div className="alert alert-danger" role="alert">
          <p>없는 city 입니다.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='weather-list' >
        { this.handleError() }
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Map</th>
              <th>Air Quality</th>
              <th>Measurement Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function handleStatus({data}) {
  if (data.aqi <=50) {
    return (
      "Good"
    ); 
  } else if (50 < data.aqi && data.aqi <= 100) {
    return (
      "Moderate"
    );
  } else if (100 < data.aqi && data.aqi <= 150) {
    return (
      "Unhealthy for Sensitive Groups"
    );
  } else if (150 < data.aqi && data.aqi <= 200) {
    return (
      "Unhealthy"
    );
  } else if (200 < data.aqi && data.aqi <= 300) {
    return (
      "Very Unhealthy"
    );
  } else if (data.aqi > 300) {
    return (
      "Hazardous"
    );
  }
}

function mapStateToProps(state) {
  return { 
    weather: state.weather.data,  
    error: state.weather.error
  };
}

export default connect(mapStateToProps)(WeatherList);