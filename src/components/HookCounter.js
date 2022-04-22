// A hook is a special function that lets you hook into react features
// useState hook is a hook that lets us add state to react functional components

// step 1 - create a component
// step 1 - create a component
import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  // using Array destructuring
  // count and setCount are chosen to make sense when we read our code.
  // it could be number and setNumber or subscribe and enableNotifications
  // this above coves steps 2 and 3 (initialize variable to 0 and method to set state value)

  return (
    <div>
      <button onClick={setCount(count + 1)}>count {count}</button>
      {/* call setCount, passing in the new count value  */}
      {/* and since it becomes a function call, we convert it to an arrow function */}
    </div>
  );
}

export default HookCounter;
