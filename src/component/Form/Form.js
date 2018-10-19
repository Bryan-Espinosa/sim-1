import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      img: ""
    };
  }
  handleInput = e =>
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  handleCancelCLick = e => this.setState({ name: "", price: "", img: "" });

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="form">
          {/* <img src="" alt=""/> */}
          Image URL :
          <input
            type="text"
            value={this.state.img}
            name="img"
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
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
