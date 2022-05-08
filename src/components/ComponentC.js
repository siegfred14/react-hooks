// Context
// Context provides a way to pass data through the component tree without having to pass props down manually at every level

import React from "react";
import ComponentE from "./ComponentE";

const UserContext = React.createContext();

export function ComponentC() {
  return (
    <div>
      <UserContext.Provider value={"Siegfred"}>
        <ComponentE />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentC;
