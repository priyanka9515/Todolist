import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-black px-sm-5"
        style={{ backgroundColor: "blue", height: "10" }}
      >
        <Link to="/">
          <img src={logo} alt="store" />
        </Link>
        <ul className="navbar-nav.align-items">
          <li className="nav-item ml-auto">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
