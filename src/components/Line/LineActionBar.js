import React from "react";
import { connect } from "react-redux";
import { clearSelectedLines, feedbackLines, getSelectedLinesCount } from "../../actions";
import { Divider } from "antd";
import { LikeThumbsUpIcon, LikeThumbsDownIcon, ClearSelectionIcon } from "../Icons";
import "./LineActionBar.scss";
const LineActionBar = ({ feedbackLines, selectedLinesCount, clearSelectedLines }) => {
  return (
    <div className="line-action-bar">
      {selectedLinesCount ? (
        <>
          <div className="line-action-bar-item">{selectedLinesCount}</div>
          <Divider type="vertical" />
        </>
      ) : (
        <></>
      )}
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
  clearSelectedLines
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
