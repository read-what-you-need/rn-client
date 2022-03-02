import React from "react";
import { connect } from "react-redux";
import { likeLines, disLikeLines } from "../../actions";
import { Divider } from "antd";
import { LikeThumbsUpIcon, LikeThumbsDownIcon, TrailActionBarIcon, BookmarkIcon, ShareIcon } from "../Icons";
import "./LineActionBar.scss";
const LineActionBar = ({ likeLines, disLikeLines }) => {
  return (
    <div className="line-action-bar">
      <div
        className="line-action-bar-item"
        onClick={() => {
          likeLines();
        }}>
        <LikeThumbsUpIcon />
      </div>
      <Divider type="vertical" />
      <div
        className="line-action-bar-item"
        onClick={() => {
          disLikeLines();
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
  likeLines,
  disLikeLines
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
