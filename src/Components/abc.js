import React, { Component } from "react";
class bus extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.brand}</h2>
        <h1>{this.props.number}</h1>
        <h2>{this.props.ab}</h2>
      </div>
    );
  }
}

export default bus;
