import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenhiet",
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <>
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        ></input>
      </fieldset>
    </>
  );
}

export default TemperatureInput;
