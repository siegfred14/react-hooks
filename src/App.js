import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      <HookCounterFour />
    </div>
  );
}

export default App;

// useState Summary
// - The useState hook lets you add state to functional components
// - In classes, the state is always an object. With the useState hook, the state doesn't have to be an object.
// - The useState hook returns an array with two elements.
// - The first element is the current valueof the state, and the second element is a state setter function.
// - If new state value depends on the previous state value, You can pass a function to the setter function.
// - When dealing with objects or arrays, always make sure to spread your state variables and then call the setter function.
