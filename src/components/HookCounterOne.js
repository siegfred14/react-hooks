// replacing the lifecycles in CLassCounterOne.js with useEffect
import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   for conditionally executing an useEffect, we add a second parameter
  //   this parameter is an array and in it, we need to specify either props or state that we need to watch for
  //   only is those props or state were to change would the effect be executed
  //   in this case, we include count in the array.

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
