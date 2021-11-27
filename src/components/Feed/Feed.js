import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./Feed.scss";

const Feed = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Main feed page</h1>
          <div className="breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/user`}>Profile</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
