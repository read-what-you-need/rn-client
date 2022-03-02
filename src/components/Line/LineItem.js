import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { likeLine, disLikeLine } from "../../actions";

const LineItem = ({ line, likeLine, disLikeLine }) => {
  let feedback = line.feedback;
  return (
    <div className="line-item">
      <div className="line-item-text">
        {line.line}
        <code>
          score: {(line.score * 100).toString().slice(0, 5)}, line index: {line.line_index}
        </code>
        <br />
        <button
          className={`${feedback === 1 ? "green" : ""}`}
          onClick={() => {
            likeLine({ fileLineId: line.file_line_id, queryId: line.query_id });
          }}>
          like
        </button>
        <button
          className={`${feedback === -1 ? "red" : ""}`}
          onClick={() => {
            disLikeLine({ fileLineId: line.file_line_id, queryId: line.query_id });
          }}>
          dislike
        </button>
        <button className="pink">add to favorites</button>
        <button className="yellow">add to trail</button>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});

const actionCreators = {
  likeLine,
  disLikeLine
};
export default connect(mapStateToProps, actionCreators)(LineItem);
