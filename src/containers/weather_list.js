import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather = cityData => {
    console.dir(cityData);
    const cityName = cityData.city.name;
    const temps = cityData.list.map(item => item.main.temp);
    const pressures = cityData.list.map(item => item.main.pressure);
    const humidities = cityData.list.map(item => item.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart data={temps} color="orange" units="k" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);
