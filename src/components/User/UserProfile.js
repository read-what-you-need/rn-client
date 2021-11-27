import React from "react";
import "./UserProfile.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="App">
      <div class="container">
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
        <div class="row">
          <div class="col"></div>
          <div class="col-sm">
            Trails
            <div class="row">
              <Link to={`/c/trail`}>Create trail</Link>
            </div>
            <div class="row">
              <Link to={`/l/trail`}>My trails</Link>
            </div>
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
