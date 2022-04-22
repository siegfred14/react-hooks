// step 1 - create a component
import React, { Component } from "react";

// step 2 - create a state variable and initialize to 0
class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // step 2 - create a method that is capable of setting this state value
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Count - {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
