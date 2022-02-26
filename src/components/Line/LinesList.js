import React from "react";
import { connect } from "react-redux";
import LineItem from "./LineItem";

import "./LinesList.scss";

const LinesList = ({ lines, query }) => {
  return (
    <div className="lines-list">
      {lines.map(line => {
        return <LineItem key={line.file_line_id} line={line} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(LinesList);
