import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;

// Even though the mouse event is toggled off, the event listener which belongs to that component is still listening and executing
// When a component is unmounted, be sure to cancel all subscriptions and listeners
// With class components, we use the componentWillUnmount. Here, we pass a return function in the function that is passed to useEffect (in HookMouse component). This would be executed when the component will unmount
