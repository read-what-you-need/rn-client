import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fileApi from "../api/file";
import { Progress } from "antd";

import "./BooksList.scss";
const BookList = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fileApi.getFileList().then(res => {
      setFiles(res);
    });
  }, []);
  return (
    <div className="book-list">
      {files.map(file => {
        return (
          <Link className="book-list-item" key={file.file_id} to={`/file/${file.file_id}`}>
            <div className="book-list-picture"></div>
            <div className="book-list-title">{file.name}</div>
            <Progress
              type="circle"
              strokeColor="#64B4CE"
              percent={Math.random().toFixed(1) * 100}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default BookList;
