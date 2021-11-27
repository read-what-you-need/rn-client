import React from "react";
import "./UserProfile.scss";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <h1>My profile</h1>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-sm">
            Trails
            <div class="row">create trail</div>
            <div class="row">my trails</div>
          </div>
          <div class="col-sm">
            <Link to={`/books`}> My books</Link>
          </div>
          <div class="col"></div>
         
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
