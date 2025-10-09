import { FaTemperatureLow, FaWind } from 'react-icons/fa6';

function WeatherDisplay({ weatherData, windSpeedUnit, temperatureUnit }) {
  const displayTemperature = convertTemperature(
    weatherData.temperature,
    '°C',
    temperatureUnit
  );

  const displayWindSpeed = convertWindSpeed(
    weatherData.windSpeed,
    'm/s',
    windSpeedUnit
  );

  return (
    <>
      <h1>Current Weather</h1>
      <FaTemperatureLow />
      <p>
        {displayWindSpeed.toFixed(1)} {windSpeedUnit}
      </p>
      <FaWind />
      <p>
        {displayTemperature.toFixed(1)} {temperatureUnit}
      </p>
    </>
  );

  function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    //F -> C
    let celsius = value;

    if (fromUnit === '°F') {
      celsius = ((value - 32) * 5) / 9;
    }

    //C->F
    if (toUnit === '°F') {
      return (celsius * 9) / 5 + 32;
    }

    return celsius;
  }

  function convertWindSpeed(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    //km/h -> m/s
    let ms = value;
    if (fromUnit === 'km/h') {
      ms = value / 3.6;
    }

    // m/s->km/h
    if (toUnit === 'km/h') {
      return ms * 3.6;
    }
    return ms;
  }
}

export default WeatherDisplay;
