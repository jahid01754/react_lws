import React from "react";
import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "Error": {
      return {
        loading: false,
        post: {},
        error: "There was a problem.",
      };
    }
    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, disPatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        disPatch({
          type: "Success",
          result: data,
        });
      })
      .catch(() => {
        disPatch({
          type: "Error",
        });
      });
  }, []);
  return (
    <>
      <div>
        {state.loading ? "Loading..." : state.post.title}
        {state.error || null}
      </div>
    </>
  );
}
