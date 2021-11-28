import React from "react";
import { Input } from "antd";
import Helpers from "../Libs/Helpers";

const InputTrail = ({ setTrailLine, setTrailLines, trailLines, trailLine, index }) => {
  return (
    <Input
      placeholder="Add line to trail"
      size="large"
      value={trailLine}
      onPressEnter={e => {
        let updatedTrailLines = [];
        updatedTrailLines = Helpers.insertInArray(trailLines, index+1, {line: trailLine});
        console.log(updatedTrailLines, 'updatedTrailLines')
        setTrailLines(updatedTrailLines);
        setTrailLine("");
      }}
      onChange={e => {
        setTrailLine(e.target.value);
      }}
    />
  );
};

export default InputTrail;
