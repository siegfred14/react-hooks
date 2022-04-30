import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>mouse</h1>
      </div>
    );
  }
}

export default ClassMouse;
