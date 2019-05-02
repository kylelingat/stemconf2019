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
            <h2>John Doe • 4 replies • 30 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>I just found an unmarked nest. What do I do?</h1>
            <h2>Angel Wall • 4 replies • 35 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Anyone wanna go tern-watching together?</h1>
            <h2>Doug White • 3 replies • 41 minutes ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>I just saw a chick at the base of a tree!</h1>
            <h2>Dylan Sakata • 6 replies • 1 hour ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Can white terns lead fishermen to good fishing areas?</h1>
            <h2>Zak Tucker • 5 replies • 1 day ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Looking for a camera to borrow... in need of tern pics!</h1>
            <h2>Kyla Juston • 3 replies • 2 days ago</h2>
          </div>
          <div className="forumCard">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Can white terns be identified by their chirps alone?</h1>
            <h2>Simon Takara • 12 replies • 2 days ago</h2>
          </div>
        </div>
      </div>
    );
  }
}
