import React from "react";
import Background from "../Background.jpg"

function Wrapper(props) {
  return <main style={{backgroundImage: `url(${Background})`}} className="wrapper" {...props} />;
}

export default Wrapper;