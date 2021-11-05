import React from "react";
import { useParams } from "react-router-dom";

import "./File.scss";
const File = () => {
  let params = useParams();
  let id = params.id;

  return (
    <div className="file-wrapper">
      <span>I am file page {id}</span>
      <input className="input-box-search-primary" type="search"></input>
    </div>
  );
};

export default File;
