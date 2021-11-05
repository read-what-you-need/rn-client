import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fileApi from "../../api/file";

import "./File.scss";
const File = () => {
  let params = useParams();
  let id = params.id;

  const [file, setFile] = useState([]);
  useEffect(() => {
    fileApi.getFileById(id).then(res => {
      console.log(res);
      setFile(res);
    });
  }, []);

  return (
    <div className="file-wrapper">
      <span>Name: {file?.name}</span>
      <span>Processed: {file.processed?.toString()}</span>
      <input className="input-box-search-primary" type="search"></input>
    </div>
  );
};

export default File;
