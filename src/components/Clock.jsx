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
    const { date, locale } = this.state;

    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <Button change={this.handleClick} locale="en-US">
    //       Click Here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handleClick} locale="bn-BD">
    //       Click Here
    //     </Button>
    //   );
    // }

    return (
      <>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>

        {/* <Button change={this.handleClick} locale="en-US" /> */}

        {/* {button} */}

        {locale === "bn-BD" ? (
          <Button
            change={this.handleClick}
            locale="en-US"
            show={false}
            enable={true}
          />
        ) : (
          <Button
            change={this.handleClick}
            locale="bn-BD"
            show={true}
            enable={true}
          />
        )}
      </>
    );
  }
}

export default Clock;
