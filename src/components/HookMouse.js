import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //   To ensure the effect is called once on initial render only, we add an empty array as a second parameter
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
