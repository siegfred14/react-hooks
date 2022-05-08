import React from "react";
import { UserContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <h1>User Context value {user} F</h1>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
