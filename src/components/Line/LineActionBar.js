import React from "react";
import { connect } from "react-redux";
import { clearSelectedLines, feedbackLines, getSelectedLinesCount, addToTrailCheckout } from "../../actions";
import { Divider, Tooltip } from "antd";
import { LikeThumbsUpIcon,BookmarkIcon, LikeThumbsDownIcon, TrailActionBarIcon, ClearSelectionIcon } from "../Icons";
import "./LineActionBar.scss";
const LineActionBar = ({ feedbackLines, selectedLinesCount, clearSelectedLines, addToTrailCheckout }) => {
  return (
    <div className="line-action-bar">
      {selectedLinesCount ? (
        <>
          <div className="line-action-bar-count">{selectedLinesCount}</div>
          <Divider type="vertical" />
        </>
      ) : (
        <></>
      )}

      <Tooltip title={"Give positive feedback"}>
        <div
          className="line-action-bar-item"
          onClick={() => {
            feedbackLines({ feedback: 1 });
          }}>
          <LikeThumbsUpIcon />
        </div>
      </Tooltip>
      <Divider type="vertical" />

      <Tooltip title={"Add selected lines to trail"}>
        <div
          className="line-action-bar-item scale-down"
          onClick={() => {
            addToTrailCheckout();
          }}>
          <TrailActionBarIcon />
        </div>
      </Tooltip>
      <Divider type="vertical" />

      <Tooltip title={"Give negative feedback"}>
        <div
          className="line-action-bar-item"
          onClick={() => {
            feedbackLines({ feedback: -1 });
          }}>
          <LikeThumbsDownIcon />
        </div>
      </Tooltip>
      <Divider type="vertical" />

      <Tooltip title={"Bookmark line for reading later"}>
        <div
          className="line-action-bar-item"
          onClick={() => {
           
          }}>
          <BookmarkIcon />
        </div>
      </Tooltip>


      {selectedLinesCount ? (
        <>
          <Divider type="vertical" />
          <div
            className="line-action-bar-item"
            onClick={() => {
              clearSelectedLines();
            }}>
            <ClearSelectionIcon />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  selectedLinesCount: getSelectedLinesCount(state)
});
const actionCreators = {
  feedbackLines,
  clearSelectedLines,
  addToTrailCheckout
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
