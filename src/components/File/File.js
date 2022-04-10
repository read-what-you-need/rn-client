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

const File = ({ filePageInit, checkFileExists, isFileExist, submitFileJobRequest, getFileDetails, isFileProcessed = false, fileStatus, userId }) => {
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
  return (
    <div className="file-wrapper">
      {showFileInteraface ? (
        <Row>
          <Col span={6} className="tags-column">
            <FileTags />
          </Col>
          <Col span={12}>
            <Col className="lines-action-bar-wrapper" span={12} offset={6}>
              <LineActionBar />
            </Col>
            <div className="lines-list-wrapper">
              <LinesList />
            </div>
          </Col>
          <Col span={6} className="filter-column">
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
  userId: state.userWrapper.user.id
});

const actionCreators = {
  checkFileExists,
  filePageInit,
  submitFileJobRequest,
  getFileDetails
};
export default connect(mapStateToProps, actionCreators)(File);
