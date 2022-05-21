import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearSelectedLines, feedbackLines, getSelectedLinesCount, addToTrailCheckout } from "../../actions";
import { Divider, Tooltip } from "antd";
import { notification } from "antd";
import { LikeThumbsUpIcon, LikeThumbsDownIcon, TrailActionBarIcon, ClearSelectionIcon } from "../Icons";
import "./LineActionBar.scss";

const openNotificationWithIcon = (type, messageFor) => {
  notification[type]({
    message: `Log in to provide ${messageFor}`,
    description: "Incase you are logged in, try logging in once again."
  });
};
const LineActionBar = ({ feedbackLines, selectedLinesCount, clearSelectedLines, isAuth, addToTrailCheckout, isError }) => {
  useEffect(() => {
    if (isError) {
      openNotificationWithIcon("warning", "feedback");
    }
  }, [isError]);
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

      <Tooltip title={"Give positive feedback"} placement="bottom">
        <div
          className="line-action-bar-item"
          onClick={() => {
            feedbackLines({ feedback: 1 });
          }}>
          <LikeThumbsUpIcon />
        </div>
      </Tooltip>
      <Divider type="vertical" />

      <Tooltip title={"Add selected lines to trail"} placement="bottom">
        <div
          className="line-action-bar-item scale-down"
          onClick={() => {
            if (!isAuth) {
              openNotificationWithIcon("warning", "trail");
            } else {
              addToTrailCheckout();
            }
          }}>
          <TrailActionBarIcon />
        </div>
      </Tooltip>
      <Divider type="vertical" />

      <Tooltip title={"Give negative feedback"} placement="bottom">
        <div
          className="line-action-bar-item"
          onClick={() => {
            feedbackLines({ feedback: -1 });
          }}>
          <LikeThumbsDownIcon />
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
  selectedLinesCount: getSelectedLinesCount(state),
  isAuth: state.userWrapper?.isAuthUser,
  isError: state.linesWrapper?.error
});
const actionCreators = {
  feedbackLines,
  clearSelectedLines,
  addToTrailCheckout
};
export default connect(mapStateToProps, actionCreators)(LineActionBar);
