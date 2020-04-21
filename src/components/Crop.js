import React from "react";
import PropTypes from "prop-types";

function Crop(props){
  return (
    <React.Fragment>
      <h3>Name: </h3><p>{props.name}</p>
      <h3>Season: </h3><p>{props.season}</p>
      <hr/>
    </React.Fragment>
  );
}

Crop.propTypes = {
  name: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
};

export default Crop;