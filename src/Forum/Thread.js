import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

export default class Thread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="threadContainer">
        <div className="threadForumCard">
          <div className="forumUserCard">
            <FontAwesomeIcon icon={faUserAlt} />
          </div>
          <h1>What do I do when I see a damaged tree?</h1>
          <h2>John Doe • 2 replies • 3 minutes ago</h2>
        </div>
        <div className="threadComments">
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>John</h1>
            <h2>Report it</h2>
            <h3>3m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>John</h1>
            <h2>Report it</h2>
            <h3>3m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>John</h1>
            <h2>Report it</h2>
            <h3>3m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>John</h1>
            <h2>Report it</h2>
            <h3>3m</h3>
          </div>
        </div>
        <div className="addCommentContainer">
        <div className="addCommentWrap"><h1>Add a Comment...</h1></div>
        <div className="addCommentButton"><FontAwesomeIcon icon={faPencilAlt} /></div>
        </div>
      </div>
    );
  }
}
