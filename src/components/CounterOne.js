// useReducer is a hook that is used for state management in React
// it is an alternative to useState
// useState is built using useReducer
// when to use useReducer or useState????

// useReducer is related to reducer functions
// useReducer(reducer, initialState)
// reducer(currentState, action)

import React from "react";

function CounterOne() {
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterOne;
