import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      Count - {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : initialCount)}>
        Decrease
      </button>
    </div>
  );
}

export default HookCounterTwo;
