// import React from "react";

// export default class ClickCounter extends React.Component {
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
//         <button type="button" onClick={this.increment}>
//           Clicked {count} times
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";

export default class ClickCounterPR extends React.Component {
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

    return (
      <>
        <button type="button" onClick={this.incrementCount}>
          Clicked {count} times
        </button>
      </>
    );
  }
}
