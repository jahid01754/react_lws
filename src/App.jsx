import Clock from "./components/Clock";
import ClockList from "./components/ClockList";

function App() {
  const quantities = [1, 2, 3];
  return (
    <>
      <Clock />
      <ClockList quantity={quantities} />
    </>
  );
}

export default App;
