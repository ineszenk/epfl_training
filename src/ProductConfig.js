import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Canvas from "./Canvas";
import Slider from "rc-slider"; // Slider UI lib
import "rc-slider/assets/index.css"; // React Slider CSS
import "./Zoom.css"; // overrides

export function Zoom(props) {
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

export default class ProductConfig extends React.Component {
  static Zoom = Zoom;

  state = {
    zoom: this.props.zoom || 1
  };

  handleZoom = value => {
    console.log(value);
    this.setState({ zoom: value });
  };

  render() {
    console.log(this.state.zoom);
    console.log(this.handleZoom);
    return (
      <div className="product-container">
        <Canvas zoom={this.state.zoom} />
        <Zoom zoom={this.state.zoom} onChange={this.handleZoom} />
      </div>
    );
  }
}
