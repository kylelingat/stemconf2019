import React, { Component } from "react";
import Home from "../Home/Home.js";
import Test from "../Test/Test.js";
import "./Main Content.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currPage;
    if (this.props.currPage === "home") {
      currPage = <Home />;
    } else if (this.props.currPage === "test") {
      currPage = <Test />;
    }
    return <div className="mainContent">{currPage}</div>;
  }
}
