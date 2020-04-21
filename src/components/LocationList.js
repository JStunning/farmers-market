import React from 'react';
import Location from './Location';

const masterLocationList = [
  {
    day: 'Monday',
    names: 'Thato and Haley',
    address: '1234 Down Town Ave'
  },
  {
    day: 'Tuesday',
    names: 'Sleater and Kinney',
    address: '0987 1st St'
  },
  {
    day: 'Wednesday',
    names: 'Imani & Jacob',
    address: '1029 Main St'
  },
  {
    day: 'Thursday',
    names: 'Thato and Haley',
    address: '1234 Down Town Ave'
  },
  {
    day: 'Friday',
    names: 'Imani & Jacob',
    address: '1029 Main St'
  },
];

function LocationList(){
  return (
    <React.Fragment>
      <hr/>
      {masterLocationList.map((location, index) =>
        <Location 
          day={location.day}
          names={location.names}
          address={location.address}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default LocationList;