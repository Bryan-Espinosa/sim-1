import React, { Component } from "react";
import Dashboard from "./component/dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [{ name: "table", price: 5 }, { name: "rug", price: 5 }]
    };
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
