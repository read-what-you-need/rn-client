import React from "react";
import { connect } from "react-redux";
import LineItem from "./LineItem";
import { Skeleton } from "antd";

import "./LinesList.scss";

const multiplySkeleton = byTimes => {
  return (
    <div>
      {[...Array(byTimes).keys()].map(() => (
        <Skeleton active />
      ))}
    </div>
  );
};

const LinesList = ({ lines, isLoading }) => {
  return (
    <div className="lines-list">
      {isLoading
        ? multiplySkeleton(5)
        : lines.map(line => {
            return <LineItem key={line.file_line_id} line={line} />;
          })}
    </div>
  );
};

const mapStateToProps = state => ({
  lines: state.linesWrapper?.linesList || [],
  isLoading: state.linesWrapper?.isLoading
});

export default connect(mapStateToProps)(LinesList);
