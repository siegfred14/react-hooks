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
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          // this means overwrite the name and the change only the firstName
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          // this means overwrite the name and the change only the lastName
        />
        <h2>Your Firstname is - {name.firstName}</h2>
        <h2>Your Firstname is - {name.lastName}</h2>
        {/* useState does not automatically merge and update the object, unlike setState in class components
            hence the unused field update disappears when the opposite field is updated
            setState will merge the state, useState will not merge the state, and must be effected manually.
            to do this, we use the spread operator to handle the manual merge */}

        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;

// The setter function provided by the useState hook does not automatically merge and update objects.
// You have to manually merge it and the pass the value to the setter function
