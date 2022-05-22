// At some point we might want to share the state between components
// That is, we might want to work with global state
// we can manage global state by managing useReducer and useContext

import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>Component A here</h1>
    </div>
  );
}

export default ComponentA;
