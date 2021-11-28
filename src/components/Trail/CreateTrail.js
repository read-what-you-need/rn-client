import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const CreateTrail = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Create your trail</h1>
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
              <Link to={`/c/trail`}>Create trail</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            Trail lines
            <div className="row">Trail line 1</div>
            <div className="row">Trail line 1</div>
            <div className="row">Trail line 1</div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrail;
