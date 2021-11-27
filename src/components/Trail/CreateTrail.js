import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const CreateTrail = () => {
  return (
    <div className="App">
      <div class="container">
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
        <div class="row">
          <div class="col"></div>
          <div class="col">
            Trail lines
            <div class="row">Trail line 1</div>
            <div class="row">Trail line 1</div>
            <div class="row">Trail line 1</div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrail;
