import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Tern.css";

export default class Tern extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ternContainer">
        <div className="findTernHeader">
          <h1>Terns Nearby</h1>
        </div>
        <div className="ternGridContainer">
          <div className="ternItems">
            <h1>Tern Nest</h1>
            <h2>Fake ADdress</h2>
            <h3>0.2 mi. away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>Tern Nest</h1>
            <h2>Fake ADdress</h2>
            <h3>0.2 mi. away</h3>
            <div className="ternPic" />
          </div>
        </div>
      </div>
    );
  }
}
