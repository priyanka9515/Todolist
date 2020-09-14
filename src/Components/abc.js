import React, { Component } from "react";
class bus extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.brand}</h2>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default bus;
