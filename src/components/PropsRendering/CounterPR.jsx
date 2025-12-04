import React from "react";

export default class CounterPR extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { render } = this.props;
    const { CounterPR } = this.state;
    return render(CounterPR, this.incrementCount);
  }
}
