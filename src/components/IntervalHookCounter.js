import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  //   this calls the tick method every second
  //   but if we want the interval to be set up only once on initial render, ie componentDidMount equivallent, we simply pass an empty array as the dependency list
  //   That is as the second parameter
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //   we can eliminate the dependency variable, or add count to it, to allow for re-render

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default IntervalHookCounter;
