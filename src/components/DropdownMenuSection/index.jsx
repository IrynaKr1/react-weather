import styles from './DropdownMenuSection.module.scss';
import DropSection from '../DropdownMenu';

function DropdownMenuSection({
  windSpeedOptions,
  temperatureOptions,
  selectedWindSpeed,
  selectedTemperature,
  onWindSpeedChange,
  onTemperatureChange,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.dropdownGroup}>
        <label className={styles.label}>Wind speed unit:</label>
        <DropSection
          options={windSpeedOptions}
          value={selectedWindSpeed}
          onChange={onWindSpeedChange}
        />
      </div>
      <div className={styles.dropdownGroup}>
        <label className={styles.label}>Temperature unit:</label>
        <DropSection
          options={temperatureOptions}
          value={selectedTemperature}
          onChange={onTemperatureChange}
        />
      </div>
    </div>
  );
}

export default DropdownMenuSection;
