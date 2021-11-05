import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fileApi from "../api/file";

const BookList = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fileApi.getFileList().then(res => {
      setFiles(res);
    });
  }, []);
  return (
    <table className="table table-hover mt-5 table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id</th>
          <th scope="col">Book title</th>
          <th scope="col">Processed</th>
          <th scope="col">Created</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => {
          return (
            <tr key={file.file_id}>
              <th scope="row">{index + 1}</th>
              <td>{file.file_id.slice(0, 8)}</td>
              <td><Link to={`/file/${file.file_id}`}>{file.name}</Link></td>
              <td>{file.processed.toString()}</td>
              <td>{file.created_at}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookList;
