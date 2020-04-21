import React from "react";
import PropTypes from "prop-types";

function Location(props){
  return (
    <React.Fragment>
      <h3>Day: {props.day}</h3>
      <h3>Address: {props.address}</h3>
      <h3>Team: {props.names}</h3>
      <hr/>
    </React.Fragment>
  );
}

Location.propTypes = {
  day: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Location;