import React, { Component } from "react";
import Home from "../Home/Home.js";
import Report from "../Report/Report.js";
import RpReport from "../Report/rpSubmit.js";
import RpSubmit from "../Report/rpSubmit.js";
import Information from "../Information/Information.js";
import "./Main Content.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currPage;
    if (this.props.currPage === "home") {
      currPage = <Home />;
    } else if (this.props.currPage === "report") {
      currPage = <Report pageRender={this.props.pageRender} />;
    } else if (this.props.currPage === "rpSubmit") {
      currPage = <RpSubmit />;
    } else if (this.props.currPage === "rpReport") {
      currPage = <RpReport />;
    } else if (this.props.currPage === "information") {
      currPage = <Information />;
    }
    return <div className="mainContent">{currPage}</div>;
  }
}
