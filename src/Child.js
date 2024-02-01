import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handeClick() {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  console.log(onChangeColor)
  return <div onClick={handeClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
