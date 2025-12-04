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

import withCounter from "./Hoc/withCounter";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </>
  );
};

const ClickCounterWithCounter = withCounter(ClickCounter);

export default ClickCounter;
