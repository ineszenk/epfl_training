import React, { Component } from "react";
import Slider from "rc-slider"; // Slider UI lib
import "rc-slider/assets/index.css"; // React Slider CSS
// import "./Zoom.css"; // overrides

function Zoom(props) {
  return (
    <div className="zoom">
      <label>
        {props.zoom > 1.25
          ? "Zoom-out to get the bigger picture."
          : "Zoom-in for a more detailed view."}
      </label>
      <Slider
        value={props.zoom}
        min={1}
        max={1.5}
        step={0.1}
        onChange={props.handleZoom}
      />
    </div>
  );
}

export default Zoom;
