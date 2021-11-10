import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fileApi from "../../api/file";
import lineApi from "../../api/line";

import "./File.scss";
const File = () => {
  let params = useParams();
  let id = params.id;

  const [file, setFile] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    fileApi.getFileById(id).then(res => {
      setFile(res);
    });
  }, []);

  return (
    <div className="file-wrapper">
      <span>Name: {file?.name}</span>
      <span>Processed: {file.processed?.toString()}</span>
      <input
        className="input-box-search-primary"
        type="search"
        onChange={event => {
          lineApi.getLines({ id: file.file_id, query: event.target.value, maxResults: 18, accuracyGreaterThan: 0.2 }).then(res => {
            setLines(Object.keys(res))
          });
        }}></input>

      <div className="lines-table-wrapper">
        {lines.map((line) => {
          return (<p>{line}</p>);
        })}
      </div>
    </div>
  );
};

export default File;
