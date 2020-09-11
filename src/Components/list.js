import React, { Component } from "react";

class list extends Component {
  handleonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleonClick1 = () => {
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
        <button
          onClick={this.handleonClick}
          style={{ backgroundColor: "blue" }}
        >
          increment
        </button>
        <button onClick={this.handleonClick1}>decrement</button>
      </div>
    );
  }
}
export default list;
