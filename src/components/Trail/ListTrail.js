import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";


const ListTrail = () => {
  return (
    <div className="App">
      <div className="container">
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
              <Link to={`/l/trail`}>My trails</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            My trails
            <div className="row">...</div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default ListTrail;
