import React from "react";

export default class TodoPR extends React.Component {
  state = {
    todo: "",
    warning: null,
  };

  handleInput = (e) => {
    const inputValue = e.target.value;
    const message = inputValue.includes(".js")
      ? "You need javascript skill to complete the task"
      : "Great choice";
    this.setState({
      todo: inputValue,
      warning: message,
    });
  };
  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <h1>{todo} </h1>
        <input type="text" value={todo} onChange={this.handleInput}></input>
        <p>{warning}</p>
      </div>
    );
  }
}
