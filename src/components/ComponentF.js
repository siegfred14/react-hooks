// import React from "react";
// import { UserContext, ChannelContext } from "../App";

// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <ChannelContext.Consumer>
//               {(channel) => {
//                 return (
//                   <h1>
//                     User Context value {user}, channel context value {channel}
//                   </h1>
//                 );
//               }}
//             </ChannelContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// export default ComponentF;

// The useContext hook makes the consumption of the context simpler, without nesting

import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Component F here - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
