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

import withCounter from "./Hoc/withCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>
    </>
  );
};

const HoverCounterWithCounter = withCounter(HoverCounter);

export default HoverCounterWithCounter;
