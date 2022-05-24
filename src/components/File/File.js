import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { useParams } from "react-router-dom";

import { checkFileExists, filePageInit, getFileDetails, showQuestions } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";
import LineActionBar from "../Line/LineActionBar";
import QuestionsRecommendationList from "../Questions/QuestionsRecommendationList";
import useWindowDimensions from "../../libs/useWindowDimensions";
import { LeftBackIcon } from "../Icons";

import { Row, Col } from "antd";
import "./File.scss";
let apiEndPoint = process.env.REACT_APP_NODE_API;

const File = ({
  filePageInit,
  checkFileExists,
  isFileExist,
  getFileDetails,
  fileName,
  isShowQuestions,
  isRightToolBarCollapsed,
  isLeftToolBarCollapsed,
  isToolBoxVisible,
  isFileProcessed = false,
  fileStatus,
  showQuestions
}) => {
  let params = useParams();
  let id = params.id;
  const [socketFileStatusLatest, setSocketFileStatusLatest] = useState(null);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    var socket = socketIOClient(apiEndPoint, { transports: ["websocket", "polling"] });
    socket.on(id, data => {
      if (data === "File processing finished.") {
        window.location.reload();
      }
      setSocketFileStatusLatest(data);
    });
    checkFileExists({ fileId: id }).then(exist => {
      if (exist) {
        getFileDetails({ fileId: id });
      }
    });
    return () => socket.disconnect();
  }, []);
  useEffect(() => {
    if (isFileProcessed) {
      filePageInit({ fileId: id });
    }
  }, [isFileProcessed]);
  const showFileInteraface = isFileExist && isFileProcessed;
  let isToolsCollapsed = isLeftToolBarCollapsed && isRightToolBarCollapsed;
  let isScreenSmall = width < 700;
  let sidePanelsColumnWidth = isScreenSmall ? 24 : 6;
  let middlePaneColumnWidth = isScreenSmall ? 24 : 12;
  let readingViewConfigurations = [
    isToolsCollapsed ? 2 : sidePanelsColumnWidth,
    isToolsCollapsed ? 20 : middlePaneColumnWidth,
    isToolsCollapsed ? 2 : sidePanelsColumnWidth
  ];

  return (
    <div className="file-wrapper">
      {showFileInteraface ? (
        <Row>
          <Col span={readingViewConfigurations[0]} className="tags-column">
            <FileTags />
          </Col>
          <Col span={readingViewConfigurations[1]} className="files-lines">
            {!isShowQuestions && (
              <div className="file-back-question-button">
                <button className={"push-button one-sided-rect"} onClick={() => showQuestions()}>
                  <LeftBackIcon />
                </button>
              </div>
            )}
            {isShowQuestions ? (
              <QuestionsRecommendationList />
            ) : (
              <>
                {isToolBoxVisible && (
                  <Col className={`lines-action-bar-wrapper ${isToolBoxVisible ? "show" : ""}`}>
                    <LineActionBar />
                  </Col>
                )}
                <div className="lines-list-wrapper">
                  <LinesList />
                </div>
              </>
            )}
          </Col>
          <Col span={readingViewConfigurations[2]} className="filter-column">
            {!isShowQuestions && <LineFilters />}
          </Col>
        </Row>
      ) : (
        <div className="file-show-status">
          <div className="file-main-status">{socketFileStatusLatest ? socketFileStatusLatest : fileStatus}</div>
          <div className="file-sub-info">Depending on the load, processing can take 5-10 minutes or more.</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isFileExist: state.fileWrapper.isFileExist,
  fileName: state.fileWrapper.fileDetails.name,
  isShowQuestions: state.questionsWrapper.isShowQuestions,
  isFileProcessed: state.fileWrapper.fileDetails.processed,
  fileStatus: state.fileWrapper.fileDetails.status,
  userId: state.userWrapper.user.id,
  isToolBoxVisible: state.filtersWrapper.isToolBoxVisible,
  isRightToolBarCollapsed: state.filtersWrapper.isCollapsed,
  isLeftToolBarCollapsed: state.tagsWrapper.isCollapsed
});

const actionCreators = {
  checkFileExists,
  filePageInit,
  getFileDetails,
  showQuestions
};
export default connect(mapStateToProps, actionCreators)(File);
