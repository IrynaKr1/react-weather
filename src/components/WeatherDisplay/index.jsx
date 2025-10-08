import { FaTemperatureLow, FaWind } from 'react-icons/fa6';

function WeatherDisplay({ windSpeedUnit, temperatureUnit }) {
  return (
    <>
      <h1>Current Weather</h1>
      <FaTemperatureLow />
      <p>3.4 {windSpeedUnit}</p>
      <FaWind />
      <p>17.6 {temperatureUnit}</p>
    </>
  );
}

export default WeatherDisplay;
