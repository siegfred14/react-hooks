// Using objects as a parameter in the useState hook
import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  // A state variable can be an Integer, string, boolean,object or even an array.
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.value })}
        />
        <h2>Your Firstname is - {name.firstName}</h2>
        <h2>Your Firstname is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
