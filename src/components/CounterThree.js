// Multiple useReducers
// If you need two counters with the exact same state transitions, we use multiple useReducer hooks

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    case "default":
      return state;
  }
};
// reducer function accepts the current state and returns a new state

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   we will add another counter which would also have the same state transition
  // we would create additional counters by specifying multiple useReducers
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      {/* CountTwo jsx */}
      <div>
        <div>Count - {countTwo} </div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
