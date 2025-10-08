import DropdownMenuSection from '../DropdownMenuSection';
import WeatherDisplay from '../WeatherDisplay';

function CurrentWeather() {
  return (
    <>
      <div>
        <DropdownMenuSection />
      </div>
      <div>
        <WeatherDisplay />
      </div>
    </>
  );
}

export default CurrentWeather;
