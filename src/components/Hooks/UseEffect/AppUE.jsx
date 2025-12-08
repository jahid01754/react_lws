import { useState } from "react";
import MyComponentFunction from "./MyComponentFunction";

export default function AppUE() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        {show && <MyComponentFunction />}
        <p>
          <button
            type="button"
            onClick={() => setShow((prevShow) => !prevShow)}
          >
            {show ? "Hide Post" : "Show Post"}
          </button>
        </p>
      </div>
    </>
  );
}
