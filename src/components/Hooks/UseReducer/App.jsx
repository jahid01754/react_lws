import React from "react";
import { useReducer } from "react";
import ComponentA from "./ComponentA";

// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div>
        <div>Count: {count}</div>
        <counterContext.Provider value={{ countDispatch: dispatch }}>
          <ComponentA />
        </counterContext.Provider>
      </div>
    </>
  );
}

//43.17
