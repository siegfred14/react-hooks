// Using a state object and an action object

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    // to change the second counter value, we'll create 2 more cases

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;
    case "default":
      return state;
  }
};
// Because we have two properties in the state object but changing 1 at a time,
// we have to modify the return statements to merge the state properties in order to get the expected outcome
// within the return statement, we spread the state properties

// reducer function accepts the current state and returns a new state

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>

      {/* <div>Count - {count.firstCounter} </div> */}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement Counter 2
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;

// Advantages of using this method
// First scenario is concerning the value to which we have to increment or decrement the counter
// Eg if we want to increment and decrement by 5

// With second scenario, we'll talk about state as an object
// suppose we want to add another state property, this is easy when our state is an object.

// Multiple useReducers
// If you need two counters with the exact same state transitions, we use multiple useReducer hooks
