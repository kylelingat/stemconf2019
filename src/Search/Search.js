import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

export default class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="findTernNest" onClick={(e) => this.props.pageRender("tern", "search", true)}>
          <div className="findTernNestImg" />
          <h1 className="findTernNestText">Find Tern Nests near me</h1>
        </div>
        <div className="findTernNest" onClick={(e) => this.props.pageRender("tern", "search", true)}>
          <div className="findTernNestImg" />
          <h1 className="findTernNestText">ExploAR Tern Territory</h1>
        </div>
        <div className="findTernNest" onClick={(e) => this.props.pageRender("tern", "search", true)}>
          <div className="viewActiveImg" />
          <h1 className="findTernNestText">View Active Tern Database</h1>
        </div>
      </div>
    );
  }
}
