import React, { Component } from "react";
import Home from "../Home/Home.js";
import Search from "../Search/Search.js"
import Tern from "../Search/Tern.js"
import Report from "../Report/Report.js";
import RpReport from "../Report/rpSubmit.js";
import RpSubmit from "../Report/rpSubmit.js";
import Information from "../Information/Information.js";
import Forum from "../Forum/Forum.js"
import Thread from "../Forum/Thread.js"
import "./Main Content.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currPage;
    if (this.props.currPage === "home") {
      currPage = <Home />;
    } else if (this.props.currPage === "search") {
      currPage = <Search pageRender={this.props.pageRender} />;
    } else if (this.props.currPage === "tern") {
      currPage = <Tern />;
    } else if (this.props.currPage === "report") {
      currPage = <Report pageRender={this.props.pageRender} />;
    } else if (this.props.currPage === "rpSubmit") {
      currPage = <RpSubmit />;
    } else if (this.props.currPage === "rpReport") {
      currPage = <RpReport />;
    } else if (this.props.currPage === "information") {
      currPage = <Information />;
    } else if (this.props.currPage === "forum") {
      currPage = <Forum pageRender={this.props.pageRender}/>;
    } else if (this.props.currPage === "thread") {
      currPage = <Thread />;
    }
    return <div className="mainContent">{currPage}</div>;
  }
}
