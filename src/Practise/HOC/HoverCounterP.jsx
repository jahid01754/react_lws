import withCounterP from "./withCounterP";

const HoverCounterP = ({ count, incrementClick }) => {
  return <h1 onMouseOver={incrementClick}>Hovered {count} times</h1>;
};

const HoverCounterPWithCounterP = withCounterP(HoverCounterP);

export default HoverCounterPWithCounterP;
