export default function BoilingVerdictP({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p>Water would Boil</p>;
  }
  return <p>Water Would NOT Boil</p>;
}
