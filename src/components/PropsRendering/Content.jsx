import CounterPR from "./CounterPR";
import HoverCounterPR from "./HoverCounterPR";
import themeContext from "../../Contexts/themeContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(themeContext);
  console.log(context);
  const { theme, switchTheme } = context;
  console.log("content rendered");
  return (
    <div>
      <h1>This is a content</h1>
      <CounterPR>
        {(counter, incrementCount) => {
          return (
            <HoverCounterPR
              counter={counter}
              incrementCount={incrementCount}
              theme={theme}
              switchTheme={switchTheme}
            />
          );
        }}
      </CounterPR>
    </div>
  );
}
