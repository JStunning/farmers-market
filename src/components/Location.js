import React from "react";
import PropTypes from "prop-types";

function Location(props){
  return (
    <React.Fragment>
      <h3>Day: </h3><p>{props.day}</p>
      <h3>Address: </h3><p>{props.address}</p>
      <h3>Team: </h3><p>{props.names}</p>
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