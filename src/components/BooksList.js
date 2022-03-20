import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import { getUserFilesList } from "../actions";

import "./BooksList.scss";
const BookList = ({ files = [], getUserFilesList, fileListError = "" }) => {
  useEffect(() => {
    getUserFilesList();
  }, []);
  return (
    <div className="book-list">
      {files.map(file => {
        return (
          <Link className="book-list-item" key={file.file_id} to={`/file/${file.file_id}`}>
            <div className="book-list-picture"></div>
            <div className="book-list-title">{file.name}</div>
            <Progress type="circle" strokeColor="#64B4CE" percent={Math.random().toFixed(1) * 100} />
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
