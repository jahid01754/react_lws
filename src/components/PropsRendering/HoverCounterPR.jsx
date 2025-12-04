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

export default function HoverCounterPR({ counter, incrementCount }) {
  return (
    <>
      <h1 onMouseOver={incrementCount}>Hovered {counter} times</h1>
    </>
  );
}
