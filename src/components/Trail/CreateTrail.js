import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Breadcrumb } from "antd";
import { Input } from "antd";
import "./CreateTrail.scss"

const CreateTrail = () => {
  const [trailTitle, setTrailTitle] = useState();
  const [trailLines, setTrailLines] = useState([]);

  console.log(trailTitle)
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
            <h2>Trail title</h2>
            <Input placeholder="Basic usage" size="large" onChange={(e) => setTrailTitle(e.target.value) }/>
            <div className="row trail-header-title"><h3>{trailLines.length > 0 ? `Review` : `Add`} your trail</h3></div>
            <div className="row trail-input-item"><Input placeholder="Basic usage" size="large" onChange={(e) => setTrailTitle(e.target.value) }/></div>
          </div>
          <div className="col"><Button type="primary">Save trail</Button></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrail;
