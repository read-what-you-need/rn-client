import React from "react";
import { Link } from "react-router-dom";
import "./UserProfileActivityCards.scss";
const UserProfileActivityCards = () => {
  return (
    <div className="user-activity-cards">
      <Link key="book" to={`/books`}>
        <div className="user-activity-card">
          <span className="user-activity-card-text">Your books</span>
        </div>
      </Link>
      <Link key="trail" to={`/trail/list`}>
        <div className="user-activity-card">
          <span className="user-activity-card-text">Your trails</span>
        </div>
      </Link>
      <Link key="bookmarks" to={`/bookmarks`}>
        <div className="user-activity-card">
          <span className="user-activity-card-text">Bookmarks</span>
        </div>
      </Link>
    </div>
  );
};

export default UserProfileActivityCards;
