import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

class ProductList extends Component {
  // state = {
  //   product =[]
  // };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="Products" />

            <div className="row"></div>
          </div>
        </div>
      </React.Fragment>

      // <div>
      //   <Product />
      // </div>
    );
  }
}

export default ProductList;
