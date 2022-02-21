import React from "react";
import "./UserProfile.scss";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-wrapper">
        <h1 className="user-profile-hero-title">Search your book from the library</h1>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm">
            Trails
            <div className="row">
              <Link to={`/trail/create`}>Create trail</Link>
            </div>
            <div className="row">
              <Link to={`/trail/list`}>My trails</Link>
            </div>
          </div>
          <div className="col-sm">
            <Link to={`/books`}> My books</Link>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
