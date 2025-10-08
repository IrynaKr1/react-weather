import DropSection from '../DropdownMenu';

function DropdownMenuSection({ 
  windSpeedOptions, 
  temperatureOptions, 
  selectedWindSpeed, 
  selectedTemperature,
  onWindSpeedChange,
  onTemperatureChange 
}) {
  return (
    <>
      <div className='windSpeed'>
        <div>Wind speed unit: </div>
        <DropSection
          options={windSpeedOptions}
          value={selectedWindSpeed}
          onChange={onWindSpeedChange}
        />
      </div>
      <div className='tUnit'>
        <div>Temperature unit: </div>
        <DropSection
          options={temperatureOptions}
          value={selectedTemperature}
          onChange={onTemperatureChange}
        />
      </div>
    </>
  );
}

export default DropdownMenuSection;