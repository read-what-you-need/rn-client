import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import trailApi from "../../api/trail";
import { Breadcrumb } from "antd";

const LinesTrail = () => {
  const [trailLines, setTrailLines] = useState([]);
  let params = useParams();

  useEffect(() => {
    trailApi.listUserTrailLines({ trailId: params.id, offset: 0, limit: 5 }).then(res => {
      setTrailLines(res);
    });
  }, []);
  console.log(trailLines);
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
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinesTrail;
