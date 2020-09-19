import React from "react";
import { Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
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
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />

          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
