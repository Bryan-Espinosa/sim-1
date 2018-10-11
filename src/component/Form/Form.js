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
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  handleCancelCLick = e => this.setState({ name: "", price: "", img: "" });

  render() {
    return (
      <div>
        <div className="form">
          <form>
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
              name="Product Name"
            />
            Price :
            <input
              onChange={this.handleInput}
              placeholder="0"
              value={this.state.price}
              type="text"
              name="Price"
            />
            <button>Cancel</button>
            <button>Add to Inventory</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
