import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";

import "./ReviewTrail.scss";

const ReviewTrail = () => {
  const location = useLocation();
  let file = location.state?.file;
  let trails = location.state?.trails;
  let query = location.state?.query;

  console.log(file);
  return (
    <div className="App">
      <div className="container">
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/books`}>Books</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/file/${file.file_id}`}>{file.name}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Review trail</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1>{query}</h1>

            <ul className="list-group list-group-flush">
              {trails.map(trailLines => {
                return (
                  <li className="list-group-item" key={trailLines.file_line_id}>
                    {trailLines.line}
                  </li>
                );
              })}
            </ul>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTrail;
