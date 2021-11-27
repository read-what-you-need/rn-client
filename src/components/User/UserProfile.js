import React from "react";
import "./UserProfile.scss";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <h1>My profile</h1>
      My trails
      <Link to={`/books`}> My books</Link>
      My bookmarks
    </div>
  );
};

export default UserProfile;
