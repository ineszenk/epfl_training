import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Canvas from "./Canvas";
import ProductConfig from "./ProductConfig";

ReactDOM.render(
  <ProductConfig>
    {function(zoom, handleZoom) {
      return (
        <div className="product-container">
          <ProductConfig.Zoom zoom={zoom} handleZoom={handleZoom} />
          <Canvas zoom={zoom} />
        </div>
      );
    }}
  </ProductConfig>,
  document.getElementById("product-demo")
);
