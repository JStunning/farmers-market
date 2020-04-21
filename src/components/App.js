import React from "react";
import Header from "./Header";
import LocationControl from "./LocationControl";

function App(){
  return ( 
    <React.Fragment>
      <div class="container">
        <Header />
        <LocationControl />
      </div>
    </React.Fragment>
  );
}

export default App;