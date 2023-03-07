import React from "react";
function Preloader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;