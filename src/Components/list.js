import React, { Component } from "react";

class list extends Component {
  handleonClick = () => {
    // console.log("abc");
    // this.state.clicks++;

    this.setState({ count: this.state.count + 1 });
  };
  handleonClick1 = () => {
    // console.log("abc");
    // this.state.clicks++;

    this.setState({ count: this.state.count - 1 });
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleonClick}>increment</button>
        <button onClick={this.handleonClick1}>decrement</button>
      </div>
    );
  }
}
export default list;
