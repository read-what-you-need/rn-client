import React from "react";
import "./UserProfile.scss";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="App">
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
