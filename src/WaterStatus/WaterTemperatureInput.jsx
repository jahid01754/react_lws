const TemperatureScaleName = {
  c: "Celsius",
  f: "Fahrenhiet",
};

export default function WaterTemperatureInput({
  temperature,
  onTemperatureChange,
  scale,
}) {
  return (
    <fieldset>
      <legend>Enter the {TemperatureScaleName[scale]}</legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      ></input>
    </fieldset>
  );
}
