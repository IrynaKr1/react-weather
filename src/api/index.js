function getWeather(option) {
  const defaultOption = {
    latitude: 51.1,
    longitude: 17.0333,
    current: 'temperature_2m,wind_speed_10m',
    hourly: 'temperature_2m,wind_speed_10m',
    timezone: 'Europe/Berlin',
    forecast_days: 1,
  };

  const realOptions = {
    ...defaultOption,
    ...option,
  };

  const { latitude, longitude, current, timezone } = realOptions;

  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${current}&timezone=${timezone}`
  ).then((response) => response.json());
}

export default getWeather;
