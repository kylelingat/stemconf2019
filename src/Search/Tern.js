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
            <h1>AM010201</h1>
            <h2>Ala Moana Beach Park</h2>
            <h3>0.2 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM020102</h1>
            <h2>Kapiolani Boulevard</h2>
            <h3>0.3 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM120401</h1>
            <h2>Kona St</h2>
            <h3>0.5 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM150103</h1>
            <h2>Kewalo Basin Marina</h2>
            <h3>0.7 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM200103</h1>
            <h2>Kapiolani Boulevard</h2>
            <h3>0.9 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM440102</h1>
            <h2>Kona and Atkinson</h2>
            <h3>1.3 miles away</h3>
            <div className="ternPic" />
          </div>
          <div className="ternItems">
            <h1>AM970101</h1>
            <h2>750 Amana Street</h2>
            <h3>1.5 miles away</h3>
            <div className="ternPic" />
          </div>
        </div>
      </div>
    );
  }
}
