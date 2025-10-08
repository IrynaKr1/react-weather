import { FaTemperatureLow, FaWind } from 'react-icons/fa6';
import { TbTemperatureCelsius } from 'react-icons/tb';

function WeatherDisplay() {
  return (
    <>
      <h1>Current Weather</h1>
      <FaTemperatureLow />
      <p>3.4 m/s</p>
      <FaWind />
      <p>
        17.6 <TbTemperatureCelsius />
      </p>
    </>
  );
}

export default WeatherDisplay;
