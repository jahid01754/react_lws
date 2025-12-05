import CounterPR from "./CounterPR";
import HoverCounterPR from "./HoverCounterPR";

export default function Content({ theme }) {
  return (
    <div>
      <h1>This is a content</h1>
      <CounterPR
        render={(counter, incrementCount) => (
          <HoverCounterPR
            counter={counter}
            incrementCount={incrementCount}
            theme={theme}
          />
        )}
      />
    </div>
  );
}
