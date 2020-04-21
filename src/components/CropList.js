import React from 'react';
import Crop from './Crop';

const masterCropList = [
  {
    name: 'Tomatoes',
    season: 'Late spring - Early summer'
  },
  {
    name: 'Carrots',
    season: 'Early spring - Late fall'
  },
  {
    name: 'Potatoes',
    season: 'All year'
  },
  {
    name: 'Cabbage',
    season: 'Late spring - Early summer'
  },
  {
    name: 'Broccoli',
    season: 'Late fall - Early spring'
  },
];

function CropList(){
  return (
    <React.Fragment>
      <hr/>
      {masterCropList.map((crop, index) =>
        <Crop 
          name={crop.name}
          season={crop.season}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default CropList;