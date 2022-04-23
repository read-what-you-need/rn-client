import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

import "./Bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className="App">
      <div className="book-marks">
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

export default Bookmarks;
