import React from "react";

const withCounterP = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    handleClick = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      const { count } = this.state;
      return (
        <OriginalComponent count={count} incrementClick={this.handleClick} />
      );
    }
  }

  NewComponent.displayName = `WithCounter(${
    OriginalComponent.displayName || OriginalComponent.name || "Component"
  })`;

  return NewComponent;
};

export default withCounterP;
