import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return this.props.inventory.map((item, index) => (
      <Product key={index} {...item} />
    ));
  }
}
export default Dashboard;
