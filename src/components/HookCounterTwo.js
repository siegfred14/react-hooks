import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count - {count}
      <br />
      {/* <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : initialCount)}>
        Decrease
      </button> */}
      ***
      {/* Using a more appropriate way to change count value */}
      {/* Into the setCount method, we pass in a function that has access to the previous value, and increase that value by 1  */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button
        onClick={() =>
          count > 0 ? setCount((prevCount) => prevCount - 1) : initialCount
        }
      >
        Decrease
      </button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
}

export default HookCounterTwo;
