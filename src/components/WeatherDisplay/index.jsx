import { FaTemperatureLow, FaWind } from 'react-icons/fa6';
import styles from './WeatherDisplay.module.scss';

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
    <div className={styles.container}>
      <h1 className={styles.title}>Current Weather</h1>
      <div className={styles.weatherItem}>
        <FaTemperatureLow className={styles.icon} />
        <span className={styles.value}>
          {displayWindSpeed.toFixed(1)} {windSpeedUnit}
        </span>
      </div>
      <div className={styles.weatherItem}>
        <FaWind className={styles.icon} />
        <span className={styles.value}>
          {displayTemperature.toFixed(1)} {temperatureUnit}
        </span>
      </div>
    </div>
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
