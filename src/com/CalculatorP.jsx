import React from "react";
// import BoilingVerdictP from "./BoilingVerdictP";
import TemperatureInputP from "./TemperatureInputP";
import { toCelsius, convert, toFahrenheit } from "./Converter";
import BoilingVerdictP from "./BoilingVerdictP";

export default class CalculatorP extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  onTemperatureChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInputP
          scale={"c"}
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
        />
        <TemperatureInputP
          scale={"f"}
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
        />

        <BoilingVerdictP celsius={parseFloat(temperature)} />
      </>
    );
  }
}
