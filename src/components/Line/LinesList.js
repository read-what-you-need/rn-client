import React from "react";
import LineItem from "./LineItem";
import "./LinesList.scss";

const LinesList = ({ lines }) => {
  return (
    <div className="lines-list">
      {lines.map(line => {
        return <LineItem key={line.file_line_id} line={line}  />;
      })}
    </div>
  );
};

export default LinesList;
