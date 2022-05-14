import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserFilesList } from "../actions";
import { Row, Col } from "antd";

import "./BooksList.scss";
const BookList = ({ files = [], getUserFilesList, fileListError = "" }) => {
  useEffect(() => {
    getUserFilesList();
  }, []);
  const dateFormatOptions = { hour: "2-digit", minute: "2-digit", weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="book-list">
      {files.map((file, index) => {
        const fileCreatedAt = new Date(file.created_at).toLocaleDateString("en-US", dateFormatOptions);
        return (
          <Link className="book-list-item" key={file.file_id} to={`/file/${file.file_id}`}>
            <Row className="book-list-item-wrapper">
              <Col md={{ span: 24 }} lg={{ span: 4 }} className="book-list-picture-wrapper ">
                <div className="book-list-picture"></div>
              </Col>
              <Col md={{ span: 24 }} lg={{ offset: 2, span: 18 }} className="book-list-info-wrapper">
                <Row className>
                  <div className="book-list-title "> {file.name}</div>
                </Row>
                <Row className="book-list-info-header-wrapper ">
                  <div className="book-list-date">{fileCreatedAt}</div>

                  <div className={`book-list-info-header ${!file.processed ? "un-processed" : ""}`}>Processed: {file.processed.toString()}</div>
                  <Col span={{ span: 1 }} className="book-list-picture-wrapper ">
                  </Col>
                </Row>
              </Col>
            </Row>
          </Link>
        );
      })}
      {fileListError && fileListError}
    </div>
  );
};

const mapStateToProps = state => ({
  files: state.fileWrapper.fileList,
  fileListError: state.fileWrapper?.error
});
const actionCreators = { getUserFilesList };
export default connect(mapStateToProps, actionCreators)(BookList);
