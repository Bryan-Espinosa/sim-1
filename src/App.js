import React, { Component } from "react";
import Dashboard from "./component/dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [{}]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    Axios.get("/api/inventory").then(res =>
      this.setState({ inventory: res.data })
    );
  }

  render() {
    return (
      <div className="App">
        <Dashboard
          getAll={this.componentDidMount}
          inventory={this.state.inventory}
        />
        <Form getAll={this.componentDidMount} />
        <Header />
      </div>
    );
  }
}

export default App;
