import React, { Component } from "react";
import NavBar from "../Nav Bar/Nav Bar.js";
import MainContent from "../Main Content/Main Content.js";
import BottomBar from "../Bottom Bar/Bottom Bar.js";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: "home",
      navHeader: "Home",
      cache: null,
      inSub: false
    };
  }

  pageSwitcher = (page, header) => {
    console.log(page);
    this.setState({ currPage: page, navHeader: header }, function() {
      if (
        this.state.currPage === "home" ||
        this.state.currPage === "report" ||
        this.state.currPage === "search" ||
        this.state.currPage === "information" ||
        this.state.currPage === "forum"
      ) {
        this.setState({ inSub: false });
      }
    });
  };

  pageRender = (newPage, pageCache, inSub) => {
    this.setState({ currPage: newPage, cache: pageCache, inSub: inSub });
  };

  backButtonHandler = () => {
    this.setState({ currPage: this.state.cache }, function() {
      if (
        this.state.currPage === "home" ||
        this.state.currPage === "report" ||
        this.state.currPage === "search" ||
        this.state.currPage === "information" ||
        this.state.currPage === "forum"
      ) {
        this.setState({ cache: null, inSub: false });
      }
    });
  };

  render() {
    return (
      <div className="mainContainer">
        <NavBar
          inSub={this.state.inSub}
          currNavHeader={this.state.navHeader}
          backButtonHandler={this.backButtonHandler}
        />
        <MainContent
          pageRender={this.pageRender}
          currPage={this.state.currPage}
        />
        <BottomBar pageSwitcher={this.pageSwitcher} />
      </div>
    );
  }
}
