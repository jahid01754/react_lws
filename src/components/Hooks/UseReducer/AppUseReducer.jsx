import App from "./app";
import ComplexCounter from "./ComplexCounter";
import Counter from "./Counter";
import CounterThree from "./CounterThree";

export default function AppUseReducer() {
  return (
    <>
      <Counter />
      <ComplexCounter />
      <CounterThree />
      <App />
    </>
  );
}
