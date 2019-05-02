import React, { Component } from "react";
import "./Nav Bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarOpen: false
    };
  }

  toggleNavBar = () => {
    this.setState({ navBarOpen: !this.state.navBarOpen });
  };

  render() {
    return (
      <div className="navBar">
        <div className="navBarLeft" onClick={this.props.backButtonHandler}>{this.props.inSub === true ? "back" : null}</div>
        <div className="navBarMid">
          <h1>{this.props.currNavHeader}</h1>
        </div>
        {/* <div className="navBarRight" onClick={this.toggleNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* {this.state.navBarOpen === true ?(<div className="navBarHidden">
          <a>News</a>
          <a>Contact</a>
          <a>About</a>
        </div>) : null} */}
      </div>
    );
  }
}
