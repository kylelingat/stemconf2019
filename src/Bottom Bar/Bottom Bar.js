import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Bottom Bar.css"

export default class BottomBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="bottomBar">
        <div className="bottomBarItem" onClick={this.props.pageSwitcher.bind(this, 'home')}>home</div>
        <div className="bottomBarItem" onClick={this.props.pageSwitcher.bind(this, 'test')}>test</div>
        <div className="bottomBarItem">test2</div>
      </div>
    );
  }
}
