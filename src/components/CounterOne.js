// useReducer is a hook that is used for state management in React
// it is an alternative to useState
// useState is built using useReducer
// when to use useReducer or useState????

// useReducer is related to reducer functions
// useReducer(reducer, initialState)
// reducer(currentState, action)

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

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
