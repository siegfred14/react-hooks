// replacing the lifecycles in CLassCounterOne.js with useEffect
import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;

// useEffect Hook
// The Effect Hook lets you perform side effects in functional components
// it's a close replacement for componentDidMount, componentDidupdate and componentWillUnmount.
// useEffect runs after every render
// useEffect is placed inside the component

// steps
// import useEffect from React,
// call it within the component,
// pass in a function which has to be executed after every render of the component
