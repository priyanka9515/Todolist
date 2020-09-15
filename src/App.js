import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import List from "./Components/list";
// import Pop from "./Components/pop";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Cart from "./Components/Cart";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     abc: 5,
  //   };
  // }
  render() {
    return (
      // <div className="App">
      //   {/* <h1>fcxv</h1>
      // <h2>bdb</h2> */}
      //   <List />
      //   <Pop />
      // </div>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" Component={ProductList} />

          <Route path="/details" Component={Details} />
          <Route path="/cart" Component={Cart} />

          <Route Component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
