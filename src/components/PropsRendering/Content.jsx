import CounterPR from "./CounterPR";
import HoverCounterPR from "./HoverCounterPR";
import ThemeContext from "../../Contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a content</h1>
      <CounterPR>
        {(counter, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <HoverCounterPR
                  counter={counter}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </CounterPR>
    </div>
  );
}
