import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

import "./GlobalTrail.scss";

const GlobalTrail = () => {
  return (
    <div className="App">
      <div className="global-trail">
        <Result
          title="To be released soon!"
          extra={
            <Link to={`/recent`}>
              <button className="push-button secondary-rect">Continue reading</button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default GlobalTrail;
