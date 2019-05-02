import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class RpSubmit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rpSubmitContainer">
      <h1>Manu-o-Ku Nest Observation Form</h1>
  <form action="/action_page.php">
    <label htmlFor="fname">Nest ID</label>
    <input type="text" id="fname" name="firstname" placeholder="Nest ID"></input>

    <label htmlFor="lname">Observer</label>
    <input type="text" id="lname" name="lastname" placeholder="Observer"></input>
    <label htmlFor="lname">Observer Phone/Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Observer Phone/Email"></input>
    <label htmlFor="lname">Date of Observation</label>
    <input type="text" id="lname" name="lastname" placeholder="Date"></input>
    <label htmlFor="lname">Tree Location</label>
    <input type="text" id="lname" name="lastname" placeholder="Tree Location"></input>
    <label htmlFor="lname">Nest Status</label>
    <input type="text" id="lname" name="lastname" placeholder="Nest Status"></input>
    <label htmlFor="lname">Tree Circumference</label>
    <input type="text" id="lname" name="lastname" placeholder="Tree Circumference"></input>
    <label htmlFor="lname">Nest Height</label>
    <input type="text" id="lname" name="lastname" placeholder="Tree Height"></input>
    <label htmlFor="lname">Branch Diameter</label>
    <input type="text" id="lname" name="lastname" placeholder="Branch Diameter"></input>

    <label htmlFor="country">Nest Type</label>
    <select id="country" name="country">
      <option value="australia">Cup</option>
      <option value="canada">Fork</option>
      <option value="usa">Straight Branch</option>
    </select>

  

    <input type="submit" value="Submit"></input>
  </form>
      </div>
    );
  }
}
