import React from 'react';
import LocationList from './LocationList';

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    if(this.state.count <= 6){
      this.setState((state) => {
        return {count: state.count + 1}
      });
    } else {
      this.setState((state) => {
        return {count: 0}
      });
    }

    console.log("hello");
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    // if (this.state.count === 0) {
    //   currentlyVisibleState = <NewLocationForm />
    //   buttonText = "Return to Location List";
    // } else {
      currentlyVisibleState = <LocationList />
      buttonText = "Add Location";
    //}
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default LocationControl;