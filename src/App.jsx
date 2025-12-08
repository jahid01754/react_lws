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
import BoilStatusCalculator from "./WaterStatus/BoilStatusCalculator";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterP from "./Practise/HOC/clickCounterP";
import HoverCounterP from "./Practise/HOC/HoverCounterP";
import ClickCounterPR from "./components/PropsRendering/ClickCounterPR";
import HoverCounterPR from "./components/PropsRendering/HoverCounterPR";
import User from "./components/PropsRendering/user";
import CounterPR from "./components/PropsRendering/CounterPR";
import Section from "./components/PropsRendering/Section";
import ThemeContext from "./Contexts/themeContext";

import React from "react";

import TodoPR from "./Practise/Hooks/TodoPR";
import Todo from "./components/Hooks/UseState/Todo";
import HookCounter from "./components/Hooks/UseState/HookCounter";
import MyComponentClass from "./components/Hooks/UseEffect/MyComponentClass";
import MyComponentFunction from "./components/Hooks/UseEffect/MyComponentFunction";
import AppUE from "./components/Hooks/UseEffect/AppUE";

class App extends React.Component {
  // const quantities = [1, 2, 3];
  // state = {
  //   theme: "dark",
  //   switchTheme: () => {
  //     this.setState(({ theme }) => {
  //       if (theme === "dark") {
  //         return {
  //           theme: "light",
  //         };
  //       } else {
  //         return {
  //           theme: "dark",
  //         };
  //       }
  //     });
  //   },
  // };

  render() {
    // const { theme,switchTheme } = this.state;
    return (
      <>
        {/* <Clock /> */}
        {/* <ClockList quantity={quantities} /> */}
        {/* <Form /> */}
        {/* <FormPractise /> */}
        {/* <Calculator /> */}
        {/* <CalculatorP /> */}
        {/* <Text /> */}
        {/* <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => (
              <Text addEmoji={addEmoji} addBracket={addBracket} />
            )}
          </Bracket>
        )}
      </Emoji> */}
        {/* <br></br>
      <br></br> */}
        {/* <BoilStatusCalculator /> */}

        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}

        {/* <ClickCounterP /> */}
        {/* <HoverCounterP /> */}

        {/* <ClickCounterPR /> */}
        {/* <HoverCounterPR /> */}

        {/* <User name={"Choion"} /> */}
        {/* <User render={(isLoggedIn) => (isLoggedIn ? "Choion" : "Guest")} /> */}
        {/* <div>
          <CounterPR>
            {(counter, incrementCount) => (
              <ClickCounterPR
                counter={counter}
                incrementCount={incrementCount}
              />
            )}
          </CounterPR>
        </div> */}

        {/* <CounterPR>
          {(counter, incrementCount) => (
            <HoverCounterPR counter={counter} incrementCount={incrementCount} />
          )}
        </CounterPR> */}

        {/* <CounterPR>
          {(counter, incrementCount) => (
            <HoverCounterPR counter={counter} incrementCount={incrementCount} />
          )}
        </CounterPR> */}

        {/* <br />
        <br /> */}

        {/* <User name={(isLoggedIn) => (isLoggedIn ? "Choion" : "Guest")} /> */}

        {/* <br />
        <br /> */}

        {/* <ThemeContext.Provider value={{ theme: theme, switchTheme: this.switchTheme }}> */}
        {/* <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider> */}

        {/* <TodoPR /> */}
        {/* <Todo /> */}
        {/* <HookCounter /> */}

        <MyComponentClass />
        {/* <MyComponentFunction /> */}
        <AppUE />
      </>
    );
  }
}

export default App;
