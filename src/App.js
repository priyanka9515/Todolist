import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./Components/list";
import Pop from "./Components/pop";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: 5,
    };
  }
  render() {
    return (
      <div className="App">
        {/* <h1>fcxv</h1>
      <h2>bdb</h2> */}
        <List />
        <Pop />
      </div>
    );
  }
}

export default App;
