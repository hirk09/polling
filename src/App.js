import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to poll App</h2>
    </div>
    <section className="App-body">{props.children}</section>
  </div>
);

export default App;
