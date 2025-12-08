import { useState, useEffect } from "react";

export default function MyComponentFunction() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // const [text, setText] = useState("");

  const addclick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    console.log("clock ticking");

    setDate(new Date());
  };

  useEffect(() => {
    console.log("updating document title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");

    const interval = setInterval(tick, 1000);

    return () => {
      console.log("component Unmount");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={addclick}>
            Click
          </button>
        </p>

        {/* <p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </p> */}
      </div>
    </>
  );
}
