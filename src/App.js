import React, { Component } from "react";
import Dashboard from "./component/dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
