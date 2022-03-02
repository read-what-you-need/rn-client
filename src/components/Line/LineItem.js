import React from "react";
import "./LineItem.scss";

const LineItem = ({ line }) => {
  return (
    <div className="line-item">
      <div className="line-item-text">{line.line}</div>
    </div>
  );
};

export default LineItem;
