import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;

    if (currentChange === nextChange) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log("Button Component Rendered");
    const { change, locale } = this.props;
    const { change } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        Click Here (58.10)
      </button>
    );
  }
}

export default Button;
