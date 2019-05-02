import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homePage">
        <div className="homeHeader">
          <div className="homeHeaderImg" />
          <h1 className="homeHeaderText">HUI MANU-O-KŪ</h1>
        </div>
        <div className="homeBox">
          <p>
            The Hui Manu-o-Kū is a group of conservationists and citizens that
            all have one thing in common: an interest and admiration for White
            Terns, or manu-o-Kū. This group has formed to ensure that the
            official bird of Honolulu is taken care of and watched after.
            Manu-o-Kū is a very unique bird, especially for an urban center like
            Honolulu. We developed a citizen science initiative to help track
            the growing population in the city. Together, the Hui Manu-o-Kū and
            citizen scientists will ensure that the population is protected and
            cared for, so that they continue to thrive in Honolulu.
          </p>
        </div>
      </div>
    );
  }
}
