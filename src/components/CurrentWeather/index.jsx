import { Component } from 'react';
import DropdownMenuSection from '../DropdownMenuSection';
import WeatherDisplay from '../WeatherDisplay';
import CONSTANTS from '../../constants';
import getWeather from '../../api';
import styles from './CurrentWeather.module.scss';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      isFetching: false,
      error: null,
      selectedWindSpeed: 'm/s',
      selectedTemperature: '°C',
    };
  }

  loadWeather = () => {
    this.setState({ isFetching: true });

    getWeather()
      .then((data) =>
        this.setState({
          weatherData: {
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
          },
        })
      )
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loadWeather();
  }

  handleWindSpeedChange = (value) =>
    this.setState({ selectedWindSpeed: value });

  handleTemperatureChange = (value) =>
    this.setState({ selectedTemperature: value });

  render() {
    const {
      weatherData,
      isFetching,
      error,
      selectedWindSpeed,
      selectedTemperature,
    } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.settingsSection}>
          <DropdownMenuSection
            windSpeedOptions={CONSTANTS.WINDSPEED}
            temperatureOptions={CONSTANTS.TEMPERATURE}
            selectedWindSpeed={selectedWindSpeed}
            selectedTemperature={selectedTemperature}
            onWindSpeedChange={this.handleWindSpeedChange}
            onTemperatureChange={this.handleTemperatureChange}
          />
        </div>

        <div className={styles.weatherSection}>
          {error && <div>!!!Error loading weather!!!</div>}
          {isFetching && <div>Loading weather, please wait!</div>}

          {!error && !isFetching && weatherData && (
            <WeatherDisplay
              weatherData={weatherData}
              windSpeedUnit={selectedWindSpeed}
              temperatureUnit={selectedTemperature}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
