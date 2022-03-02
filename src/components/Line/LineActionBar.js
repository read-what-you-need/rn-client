import React from "react";
import { connect } from "react-redux";
import { feedbackLines } from "../../actions";
import { Divider } from "antd";
import { LikeThumbsUpIcon, LikeThumbsDownIcon, TrailActionBarIcon, BookmarkIcon, ShareIcon } from "../Icons";
import "./LineActionBar.scss";
const LineActionBar = ({ feedbackLines }) => {
  return (
    <div className="line-action-bar">
      <div
        className="line-action-bar-item"
        onClick={() => {
          feedbackLines({ feedback: 1 });
        }}>
        <LikeThumbsUpIcon />
      </div>
      <Divider type="vertical" />
      <div
        className="line-action-bar-item"
        onClick={() => {
          feedbackLines({ feedback: -1 });
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
  feedbackLines
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
