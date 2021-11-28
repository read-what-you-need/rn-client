import React from "react";
import { Input } from "antd";

const InputTrail = ({setTrailLine, setTrailLines, trailLines, trailLine}) => {
  return (
    <Input
      placeholder="Add line to trail"
      size="large"
      value={trailLine}
      onPressEnter={e => {
        setTrailLines([...trailLines, { line: e.target.value }]);
        setTrailLine("");
      }}
      onChange={e => {
        setTrailLine(e.target.value);
      }}
    />
  );
};

export default InputTrail;
