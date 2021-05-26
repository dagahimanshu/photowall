import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import "./styles/stylesheet.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
