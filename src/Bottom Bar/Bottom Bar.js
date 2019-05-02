import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Bottom Bar.css";

export default class BottomBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bottomBar">
        <div
          className="bottomBarItem"
          onClick={(e) => this.props.pageSwitcher("home", "Home")}
        >
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div
          className="bottomBarItem"
          onClick={(e) => this.props.pageSwitcher("search", "Search")}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div
          className="bottomBarItem"
          onClick={(e) => this.props.pageSwitcher("report", "Report")}
        >
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div
          className="bottomBarItem"
          onClick={(e) => this.props.pageSwitcher("information", "Learn More")}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div
          className="bottomBarItem"
          onClick={(e) => this.props.pageSwitcher("forum", "Forum")}
        >
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
      </div>
    );
  }
}
