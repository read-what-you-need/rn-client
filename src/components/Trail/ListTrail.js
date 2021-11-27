import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";


const ListTrail = () => {
  return (
    <div className="App">
      <div class="container">
        <h1>My trails</h1>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/feed`}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/user`}>Profile</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Trail</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/c/trail`}>Your trails</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col">
            My collected trail
            <div class="row">...</div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default ListTrail;
