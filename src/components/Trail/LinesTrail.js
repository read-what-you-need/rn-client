import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import trailApi from "../../api/trail";

const LinesTrail = () => {
  const [trailLines, setTrailLines] = useState([]);
  let params = useParams();

  useEffect(() => {
    trailApi.listUserTrailLines({ trailId: params.id, offset: 0, limit: 5 }).then(res => {
      setTrailLines(res);
    });
  }, []);
  console.log(trailLines);
  return <div>I am trail lines {params.id}</div>;
};

export default LinesTrail;
