import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  state = { date: new Date(), locale: "bn-BD" }; //shortcut

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    console.log("Clock Component Rendered");

    const { date, locale } = this.state;
    return (
      <>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>

        <Button change={this.handleClick} locale="en-US" />
      </>
    );
  }
}

export default Clock;
