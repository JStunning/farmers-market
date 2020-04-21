import React from 'react';
import Crop from './Crop';

const masterCropList = [
  {
    name: 'Tomatoes',
    season: 'Late spring - Early summer',
    image: 'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg'
  },
  {
    name: 'Carrots',
    season: 'Early spring - Late fall',
    image: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/02/carrots.jpg'
  },
  {
    name: 'Potatoes',
    season: 'All year',
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fred-yukon-gold-potatoes-difference.jpg%3Fitok%3DIYTy9ysa'
  },
  {
    name: 'Cabbage',
    season: 'Late spring - Early summer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Chou_1.jpg/220px-Chou_1.jpg'
  },
  {
    name: 'Broccoli',
    season: 'Late fall - Early spring',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg'
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
          image={crop.image}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default CropList;