import React from "react";
import WaterTemperatureInput from "./WaterTemperatureInput";
import BoilStatus from "./BoilStatus";
import { tempConverter, toCelsius, toFahrenhiet } from "./TemperatureConverter";

export default class BoilStatusCalculator extends React.Component {
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
      scale === "f" ? tempConverter(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tempConverter(temperature, toFahrenhiet) : temperature;

    return (
      <>
        <WaterTemperatureInput
          temperature={celsius}
          onTemperatureChange={this.onTemperatureChange}
          scale={"c"}
        />
        <WaterTemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={this.onTemperatureChange}
          scale={"f"}
        />

        <BoilStatus celsius={parseFloat(celsius)} />
      </>
    );
  }
}
