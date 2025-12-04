// import React from "react";

// export default class HoverCounter extends React.Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1 onMouseOver={this.increment}>Hovered {count} times</h1>
//       </div>
//     );
//   }
// }

import React from "react";

export default class HoverCounterPR extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    // 18.02

    return (
      <>
        <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
      </>
    );
  }
}
