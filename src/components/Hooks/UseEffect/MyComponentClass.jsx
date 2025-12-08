import React from "react";

export default class MyComponentClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  addClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  // addClick = () => {
  //   this.setState(({ count }) => ({
  //     count: count + 1,
  //   }));
  // };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { date } = this.state;
    return (
      <>
        <div>
          <p>Time: {date.toLocaleTimeString()}</p>
          <p>
            <button type="button" onClick={this.addClick}>
              Click
            </button>
          </p>
        </div>
      </>
    );
  }
}
