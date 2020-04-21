import React from 'react';
import Location from './Location';

const masterLocationList = [
  {
    date: '4/21/2020',
    names: 'Thato and Haley',
    address: '1234 Down Town Ave'
  },
  {
    date: '4/22/2020',
    names: 'Sleater and Kinney',
    address: '0987 1st St'
  },
  {
    date: '4/23/2020',
    names: 'Imani & Jacob',
    address: '1029 Main St'
  }
];

function LocationList(){
  return (
    <React.Fragment>
      <hr/>
      {masterLocationList.map((location, index) =>
        <Location 
          date={location.date}
          names={location.names}
          address={location.address}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default LocationList;