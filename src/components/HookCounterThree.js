// Using objects as a parameter in the useSeate hook
import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // A state variable can be an Integer, string, boolean,object or even an array.
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <h2>Your Firstname is - {name.firstName}</h2>
        <h2>Your Firstname is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
