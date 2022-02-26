import React from "react";
import { connect } from "react-redux";
import LineItem from "./LineItem";

import { getQuery } from "../../reducers";

import "./LinesList.scss";

const LinesList = ({ lines, query }) => {
  console.log(`list component got the results for query ${JSON.stringify(query)}`);
  return (
    <div className="lines-list">
      {lines.map(line => {
        return <LineItem key={line.file_line_id} line={line} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  query: getQuery(state)
});

export default connect(mapStateToProps)(LinesList);
