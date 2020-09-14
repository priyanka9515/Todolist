import React, { Component } from "react";
import Car from "./abc";
class pop extends React.Component {
  render() {
    this.state = {
      value: 6,
    };
    return (
      <div>
        <Car number={this.state.value} />
        {/* <h1>Who lives in my garage?</h1> */}
        <Car brand="ford" />
      </div>
    );
  }
}
export default pop;
