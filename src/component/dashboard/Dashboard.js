import React, { Component } from "react";
import Product from "../Product/Product";
import Axios from "axios";

class Dashboard extends Component {
  handleDelete = id => {
    Axios.delete(`/api/delete/${id}`).then(res => this.props.getAll());
  };
  render() {
    return this.props.inventory.map((item, index) => (
      <Product delete={this.handleDelete} key={index} {...item} />
    ));
  }
}
export default Dashboard;
