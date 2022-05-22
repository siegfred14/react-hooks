import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  //  Call the user Context, passing in the contexts as it's argument
  // const user = useContext(UserContext);
  // const channel = useContext(ChannelContext);

  return (
    <div>
      <h1>
        {/* {user} - {channel} */}
        <ComponentF />
      </h1>
    </div>
  );
}

export default ComponentE;
