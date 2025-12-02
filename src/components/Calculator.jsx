import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenhiet } from "../lib/converter";

class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  //   onTemperatureChange = (e) => {
  //     this.setState({
  //       temperature: e.target.value,
  //     });
  //   };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenhiet) : temperature;
    return (
      <>
        {/* <fieldset>
          <legend>Enter Temperature in Celsius</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.onTemperatureChange}
          ></input>
        </fieldset> */}
        <TemperatureInput
          scale={"c"}
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale={"f"}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />

        <BoilingVerdict celcius={parseFloat(temperature)} />
      </>
    );
  }
}

export default Calculator;
