import React from 'react';
import LocationList from './LocationList';
import CropList from './CropList';
//import Test from './Test';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      day: 0
    };
  }

  handleClick = () => {
    this.setState(() => {
      return {day: 0};
    });
    console.log("All");
    console.log(this.state.day);
  };
  handleClickCrop = () => {
    this.setState(() => {
      return {day: 6};
    });
    console.log("Crops");
    console.log(this.state.day);
  };
  handleClickMonday = () => {
    this.setState(() => {
      return {day: 1};
    });
    console.log("Monday");
    console.log(this.state.day);
  };
  handleClickTuesday = () => {
    this.setState(() => {
      return {day: 2};
    });
    console.log("Tuesday");
    console.log(this.state.day);
  };
  handleClickWednesday = () => {
    this.setState(() => {
      return {day: 3};
    });
    console.log("Wednesday");
    console.log(this.state.day);
  };
  handleClickThursday = () => {
    this.setState(() => {
      return {day: 4};
    });
    console.log("Thursday");
    console.log(this.state.day);
  };
  handleClickFriday = () => {
    this.setState(() => {
      return {day: 5};
    });
    console.log("Friday");
    console.log(this.state.day);
  };

  render(){
    let currentlyVisibleState = null;
    if (this.state.day === 1) {
      currentlyVisibleState = <Monday />
    } else if (this.state.day === 2) {
      currentlyVisibleState = <Tuesday />
    } else if (this.state.day === 3) {
      currentlyVisibleState = <Wednesday />
    } else if (this.state.day === 4) {
      currentlyVisibleState = <Thursday />
    } else if (this.state.day === 5) {
      currentlyVisibleState = <Friday />
    } else if (this.state.day === 6) {
      currentlyVisibleState = <CropList />
    } else {
      currentlyVisibleState = <LocationList />
    }
    return (
      <React.Fragment>
        <div class="row">
          <div class="col-md-6">
            <button onClick={this.handleClickCrop} class="cropButton">Seasonal Crops</button>
          </div>
          <div class="col-md-6">
            <button onClick={this.handleClick}>All</button>
            <button onClick={this.handleClickMonday}>Monday</button>
            <button onClick={this.handleClickTuesday}>Tuesday</button>
            <button onClick={this.handleClickWednesday}>Wednesday</button>
            <button onClick={this.handleClickThursday}>Thursday</button>
            <button onClick={this.handleClickFriday}>Friday</button>
          </div>
        </div>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }

}

export default LocationControl;