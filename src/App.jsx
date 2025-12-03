import CalculatorP from "./com/CalculatorP";
import Calculator from "./components/Calculator";
import Clock from "./components/Clock";
import ClockList from "./components/ClockList";
import Form from "./components/Form";
import FormPractise from "./components/FormPractise";
// import Text from "./components/inheritance/Text";
import Text from "./components/composition/text";
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";

function App() {
  // const quantities = [1, 2, 3];
  return (
    <>
      {/* <Clock /> */}
      {/* <ClockList quantity={quantities} /> */}
      {/* <Form /> */}
      {/* <FormPractise /> */}
      {/* <Calculator /> */}
      {/* <CalculatorP /> */}
      {/* <Text /> */}
      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji>
    </>
  );
}

export default App;
