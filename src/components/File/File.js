import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { checkFileExists, filePageInit, submitFileJobRequest, getFileDetails } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";
import LineActionBar from "../Line/LineActionBar";

import { Row, Col } from "antd";
import "./File.scss";

const File = ({
  filePageInit,
  checkFileExists,
  isFileExist,
  submitFileJobRequest,
  getFileDetails,
  isRightToolBarCollapsed,
  isLeftToolBarCollapsed,
  isFileProcessed = false,
  fileStatus,
  userId
}) => {
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    checkFileExists({ fileId: id }).then(({ exist }) => {
      if (exist) {
        getFileDetails({ fileId: id });
      } else {
        submitFileJobRequest({ fileId: id });
      }
    });
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
          <Col span={readingViewConfigurations[1]}>
            <Col className="lines-action-bar-wrapper">
              <LineActionBar />
            </Col>
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
          <div>{fileStatus}</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isFileExist: state.fileWrapper.isFileExist,
  isFileProcessed: state.fileWrapper.fileDetails.processed,
  fileStatus: state.fileWrapper.fileDetails.status,
  userId: state.userWrapper.user.id,
  isRightToolBarCollapsed: state.filtersWrapper.isCollapsed,
  isLeftToolBarCollapsed: state.tagsWrapper.isCollapsed
});

const actionCreators = {
  checkFileExists,
  filePageInit,
  submitFileJobRequest,
  getFileDetails
};
export default connect(mapStateToProps, actionCreators)(File);
