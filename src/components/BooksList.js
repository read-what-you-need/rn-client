import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserFilesList } from "../actions";

import "./BooksList.scss";
const BookList = ({ files = [], getUserFilesList, fileListError = "" }) => {
  useEffect(() => {
    getUserFilesList();
  }, []);
  const dateFormatOptions = {  hour:"2-digit", minute:"2-digit", weekday: "long", year: "numeric", month: "long", day: "numeric", };
  return (
    <div className="book-list">
      {files.map(file => {
        const fileCreatedAt = new Date(file.created_at).toLocaleDateString("en-US", dateFormatOptions);
        return (
          <Link className="book-list-item" key={file.file_id} to={`/file/${file.file_id}`}>
            <div className="book-list-picture"></div>
            <div className="book-list-title-wrapper">
              <div className="book-list-title "> {file.name}</div>
              <div className="book-list-date">{fileCreatedAt}</div>
            </div>
            <div className="book-list-info-wrapper">
              <div className={`book-list-info-header ${!file.processed ? "un-processed" : ""}`}>Processed: {file.processed.toString()}</div>
              <div className={`book-list-info-sub-header ${!file.tags_added ? "un-processed" : ""}`}>Tags added: {file.tags_added.toString()}</div>
            </div>
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
