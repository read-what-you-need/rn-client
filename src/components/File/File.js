import React from "react";
import { useParams } from "react-router-dom";

const File = () => {
  let params = useParams();
  let id = params.id;

  return <div className="App">I am file page {id}</div>;
};

export default File;
