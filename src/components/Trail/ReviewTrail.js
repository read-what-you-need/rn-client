import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

const ReviewTrail = () => {
  const location = useLocation();
  let file = location.state?.file;
  let trails = location.state?.trails;
  return (
    <div className="App">
      <div className="container">
        <h1>Review Trail</h1>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/feed`}>Books</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/user`}>{file.name}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/user`}>Review trail</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col">
            {trails.map(trailLines => {
              return <div key={trailLines.file_line_id}>{trailLines.line}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTrail;
