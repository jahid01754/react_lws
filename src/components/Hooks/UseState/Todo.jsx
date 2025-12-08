import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);
  const [isTodo, setIsTodo] = useState({
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const message = inputValue.includes(".js")
      ? "You need javascript skill to complete the task"
      : "Great choice";

    setTodo(inputValue);
    setWarning(message);
  };

  const { title, description } = isTodo;
  return (
    <>
      <div>
        <h1>{todo} </h1>
        <input type="text" value={todo} onChange={handleInput}></input>
        <p>{warning || "Good Choice"}</p>
      </div>
      {/* --------------------------------------------------- */}
      <div>
        <h1>{title} </h1>
        <p>
          <input
            type="text"
            value={title}
            onChange={(e) =>
              setIsTodo({
                ...isTodo,
                title: e.target.value,
              })
            }
          ></input>
        </p>
        <p>
          <textarea
            name="todo"
            value={description}
            onChange={(e) =>
              setIsTodo({
                ...isTodo,
                description: e.target.value,
              })
            }
          />
        </p>
      </div>
    </>
  );
}
