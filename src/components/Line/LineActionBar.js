import React from "react";
import { connect } from "react-redux";
import { likeLine, disLikeLine } from "../../actions";
import { Divider } from "antd";
import { LikeThumbsUpIcon, LikeThumbsDownIcon, TrailActionBarIcon, BookmarkIcon, ShareIcon } from "../Icons";
import "./LineActionBar.scss";
const LineActionBar = () => {
  return (
    <div className="line-action-bar">
      <div
        // className={`line-action-bar-item ${feedback === 1 ? "green" : ""}`}
        onClick={() => {
          //   likeLine({ fileLineId: line.file_line_id, queryId: line.query_id });
        }}>
        <LikeThumbsUpIcon />
      </div>
      <Divider type="vertical" />
      <div
        // className={`line-action-bar-item ${feedback === -1 ? "red" : ""}`}
        onClick={() => {
          //   disLikeLine({ fileLineId: line.file_line_id, queryId: line.query_id });
        }}>
        <LikeThumbsDownIcon />
      </div>
      <Divider type="vertical" />

      <div className="line-action-bar-item">
        <TrailActionBarIcon />
      </div>
      <Divider type="vertical" />

      <div className="line-action-bar-item">
        <BookmarkIcon />
      </div>
      <Divider type="vertical" />
      <div className="line-action-bar-item">
        <ShareIcon />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({});
const actionCreators = {
  likeLine,
  disLikeLine
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
