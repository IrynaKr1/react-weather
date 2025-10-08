import { Component } from 'react';
import DropdownMenuSection from '../DropdownMenuSection';
import WeatherDisplay from '../WeatherDisplay';
import CONSTANTS from '../../constants';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWindSpeed: 'M/s',
      selectedTemperature: '°C',
    };
  }

  render() {
    return (
      <>
        <div>
          <DropdownMenuSection
            windSpeedOptions={CONSTANTS.WINDSPEED}
            temperatureOptions={CONSTANTS.TEMPERATURE}
            selectedWindSpeed={this.state.selectedWindSpeed}
            selectedTemperature={this.state.selectedTemperature}
            onWindSpeedChange={(value) =>
              this.setState({ selectedWindSpeed: value })
            }
            onTemperatureChange={(value) =>
              this.setState({ selectedTemperature: value })
            }
          />
        </div>
        <div>
          <WeatherDisplay
            windSpeedUnit={this.state.selectedWindSpeed}
            temperatureUnit={this.state.selectedTemperature}
          />
        </div>
      </>
    );
  }
}

export default CurrentWeather;
