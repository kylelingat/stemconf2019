import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Report.css";

export default class Report extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reportContainer">
        <div className="reportButton" onClick={(e) => this.props.pageRender("rpSubmit", "report", true)}>
          <div className="reportButtonImg rpSubmit" />
          <h1>Submit a Nesting Obvservation</h1>
        </div>
        <div className="reportButton" onClick={(e) => this.props.pageRender("rpReport", "report", true)}>
          <div className="reportButtonImg rpReport" />
          <h1>Report an Unmarked Nesting Tree</h1>
        </div>
        <div className="reportButton rpLive">
          <h1>CLICK HERE TO VIEW A LIVE WEB CAM OF A WHITE TERN NEST</h1>
        </div>
      </div>
    );
  }
}
