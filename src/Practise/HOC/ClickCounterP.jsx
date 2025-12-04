import withCounterP from "./withCounterP";

const ClickCounterP = (props) => {
  const { count, incrementClick } = props;
  return (
    <button type="button" onClick={incrementClick}>
      Clicked {count} times
    </button>
  );
};

const ClickCounterPWithCounterP = withCounterP(ClickCounterP);

export default ClickCounterPWithCounterP;
