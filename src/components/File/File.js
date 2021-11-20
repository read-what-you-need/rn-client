import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LineItem from "../Line/LineItem";
import fileApi from "../../api/file";
import queryApi from "../../api/query";

import "./File.scss";
const File = () => {
  let params = useParams();
  let id = params.id;

  const [file, setFile] = useState([]);
  const [query, setQuery] = useState("");
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
        onKeyPress={event => {
          if (event.key === "Enter") {
            console.log(`pressed enter: ${query}`);
            queryApi.sendQuery({ id: file.file_id, query, offset: 2, limit: 5, orderBy: "score", arrangeBy: "desc" }).then(res => {
              setLines(res);
            });
          }
        }}
        onChange={event => {
          setQuery(event.target.value);
        }}></input>

      <div className="lines-table-wrapper">
        {lines.map(line => {
          return <LineItem line={line} />;
        })}
      </div>
    </div>
  );
};

export default File;
