import React, { Component } from "react";
import Axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      url: ""
    };
  }
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleCancelCLick = e => this.setState({ name: "", price: "", url: "" });
  handleAddClick = e => {
    Axios.post("/api/product", { ...this.state })
      .then(res => this.props.getAll())
      .then(() => this.handleCancelCLick());
  };

  render() {
    return (
      <div>
        <div className="form">
          {/* <url src="" alt=""/> */}
          Image URL :
          <input
            type="text"
            value={this.state.url}
            name="url"
            onChange={this.handleInput}
          />
          ProductName :
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
            name="name"
          />
          Price :
          <input
            type="text"
            value={this.state.price}
            onChange={this.handleInput}
            name="price"
          />
          <button onClick={this.handleCancelCLick}>Cancel</button>
          <button onClick={this.handleAddClick}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
