import React from "react";
import { Link } from "react-router-dom";
import "./UserProfileActivityCards.scss";
import { BookSecondaryIcon, TrailsSecondaryIcon } from "../Icons";

const UserProfileActivityCards = () => {
  return (
    <div className="user-activity-cards">
      <Link key="book" to={`/books`}>
        <div className="user-activity-card">
          <span className="user-activity-card-logo">
            <BookSecondaryIcon />
          </span>
          <span className="user-activity-card-text">Your books</span>
        </div>
      </Link>
      <Link key="trail" to={`/trail/list`}>
        <div className="user-activity-card">
          {" "}
          <span className="user-activity-card-logo">
            <TrailsSecondaryIcon />
          </span>
          <span className="user-activity-card-text">Your trails</span>
        </div>
      </Link>
    </div>
  );
};

export default UserProfileActivityCards;
