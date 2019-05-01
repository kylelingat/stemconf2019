import React, { Component } from "react";
import NavBar from "../Nav Bar/Nav Bar.js";
import MainContent from "../Main Content/Main Content.js";
import BottomBar from "../Bottom Bar/Bottom Bar.js"
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currPage: 'home'
    }
  }

  pageSwitcher = () => {
    console.log('s')
  }

  pageRender = () => {
    console.log('t')
  }

render(){
  return (
    <div className="mainContainer">
      <NavBar />
      <MainContent pageRender={this.pageRender}/>
      <BottomBar pageSwitcher={this.pageSwitcher}></BottomBar>
    </div>
  );
}
}


