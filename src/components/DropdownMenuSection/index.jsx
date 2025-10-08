import DropSection from '../DropdownMenu';

function DropdownMenuSection() {
  return (
    <>
      <div className='windSpeed'>
        <div>Wind speed unit: </div>
        <DropSection />
      </div>
      <div className='tUnit'>
        <div>Temperature unit: </div>
        <DropSection />
      </div>
    </>
  );
}

export default DropdownMenuSection;
