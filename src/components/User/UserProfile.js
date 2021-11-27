import React from "react";
import "./UserProfile.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <div className="container">
        <h1>My profile</h1>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
            <Link to={`/feed`}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/user`}>Profile</Link>
            </Breadcrumb.Item>
            
          </Breadcrumb>
        </div>
        <div class="container">
          <div class="row">
            <div class="col"></div>
            <div class="col-sm">
              Trails
              <div class="row">Create trail</div>
              <div class="row">My trails</div>
            </div>
            <div class="col-sm">
              <Link to={`/books`}> My books</Link>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
