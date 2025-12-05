import React from "react";

export default class CounterPR extends React.Component {
  state = {
    counter: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    const { children } = this.props;

    const { counter } = this.state;
    return children(counter, this.incrementCount);
  }
}
