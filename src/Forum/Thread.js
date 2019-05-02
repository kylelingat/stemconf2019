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
          <h2>John Doe • 4 replies • 30 minutes ago</h2>
        </div>
        <div className="threadComments">
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Lisa Young</h1>
            <h2>Ribbon check! If you see a blue ribbon, it's definitely a nesting spot for the Manu-o-Kū.</h2>
            <h3>3m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Jane Doe</h1>
            <h2>Check for any signs of nesting. Is it a confirmed nesting spot?</h2>
            <h3>4m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Henry Acacia</h1>
            <h2>Is it a nesting spot? Just in case, look around the base of the tree for any tern chicks. If you find one, call Hui Manu-o-Kū immediately.</h2>
            <h3>20m</h3>
          </div>
          <div className="threadCommentItem">
            <div className="forumUserCard">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <h1>Alex Macha</h1>
            <h2>Report it!</h2>
            <h3>29m</h3>
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
