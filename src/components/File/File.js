import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { useParams } from "react-router-dom";

import { checkFileExists, filePageInit, getFileDetails } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";
import LineActionBar from "../Line/LineActionBar";

import { Row, Col } from "antd";
import "./File.scss";
let apiEndPoint = process.env.REACT_APP_NODE_API;

const File = ({
  filePageInit,
  checkFileExists,
  isFileExist,
  getFileDetails,
  fileName,
  isRightToolBarCollapsed,
  isLeftToolBarCollapsed,
  isToolBoxVisible,
  isFileProcessed = false,
  fileStatus,
  userId
}) => {
  let params = useParams();
  let id = params.id;
  const [socketFileStatusLatest, setSocketFileStatusLatest] = useState(null);
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
  let readingViewConfigurations = [isToolsCollapsed ? 2 : 6, isToolsCollapsed ? 20 : 12, isToolsCollapsed ? 2 : 6];

  return (
    <div className="file-wrapper">
      {showFileInteraface ? (
        <Row>
          <Col span={readingViewConfigurations[0]} className="tags-column">
            <FileTags />
          </Col>
          <Col span={readingViewConfigurations[1]} className="files-lines">
            <div className="file-title">{fileName}</div>
            {isToolBoxVisible && (
              <Col className={`lines-action-bar-wrapper ${isToolBoxVisible ? "show" : ""}`}>
                <LineActionBar />
              </Col>
            )}
            <div className="lines-list-wrapper">
              <LinesList />
            </div>
          </Col>
          <Col span={readingViewConfigurations[2]} className="filter-column">
            <LineFilters />
          </Col>
        </Row>
      ) : (
        <div className="file-show-status">
          <div>{socketFileStatusLatest ? socketFileStatusLatest : fileStatus}</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isFileExist: state.fileWrapper.isFileExist,
  fileName: state.fileWrapper.fileDetails.name,
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
  getFileDetails
};
export default connect(mapStateToProps, actionCreators)(File);
