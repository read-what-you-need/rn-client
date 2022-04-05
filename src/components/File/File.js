import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import { checkFileExists, filePageInit } from "../../actions";

import FileTags from "./FileTags";
import LineFilters from "../Line/LineFilters";
import LinesList from "../Line/LinesList";
import LineActionBar from "../Line/LineActionBar";

import { Row, Col } from "antd";
import "./File.scss";

const File = ({ filePageInit, checkFileExists, isFileExist }) => {
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    checkFileExists({ fileId: id }).then(({ exist }) => {
      if (exist) {
        filePageInit({ fileId: id });
      }
    });
  }, []);
  console.log(`isFileExist is ${isFileExist}`);
  return (
    <div className="file-wrapper">
      {isFileExist ? (
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
        <div>showing status here</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isFileExist: state.fileWrapper.isFileExist
});

const actionCreators = {
  checkFileExists,
  filePageInit
};
export default connect(mapStateToProps, actionCreators)(File);
