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
  return newState;
};

function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default CounterOne;
