import React, { Component } from "react";
import "./Forum.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

export default class Forum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forumContainer">
        <div className="topicGrid">
          <div className="topicsTitle">RECENT TOPICS</div>
          <div className="postThread">
            <FontAwesomeIcon icon={faPencilAlt} />
          </div>
        </div>
        <div className="forumCards">
          <div className="forumCard" onClick={(e) => this.props.pageRender("thread", "forum", true)}>
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>What do I do when I see a damaged tree?</h1>
            <h2>John Doe • 2 replies • 3 minutes ago</h2>
          </div>
        </div>
      </div>
    );
  }
}
