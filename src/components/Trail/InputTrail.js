import React from "react";
import { Input } from "antd";
import Helpers from "../../Libs/Helpers";
const { TextArea } = Input;

const InputTrail = ({ setTrailLine, setTrailLines, trailLines, trailLine, index }) => {
  return (
    <TextArea
      placeholder="Add line to trail"
      autoSize={{ minRows: 2, maxRows: 6 }}
      size="large"
      value={trailLine}
      onPressEnter={e => {
        let updatedTrailLines = [];
        updatedTrailLines = Helpers.insertInArray(trailLines, index + 1, { line: trailLine });
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
