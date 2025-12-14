import { useEffect, useState, useRef } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();
  0;

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    // const interval = setInterval(tick, 1000);
    buttonRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <>
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <button type="button" onClick={() => clearInterval(buttonRef.current)}>
          Clean Up
        </button>
      </div>
    </>
  );
}
