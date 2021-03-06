import React, { useReducer, useState } from "react";
import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import ComponentE from "./components/ComponentE";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     case "default":
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     <h1>Count - {count}</h1>
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <div>
      <DataFetchingTwo />
    </div>
  );
}

export default App;

// useState v useReducer
// Scenario            -          useState            -        useReducer
// Type of State           Number, String, Boolean         Object or Array
// No of state transitions        one or two                    too many
// Related state transitions        No                            Yes
// Business Logic             No business logic           Complex Business Logic
// Local v Global state           local                           global
