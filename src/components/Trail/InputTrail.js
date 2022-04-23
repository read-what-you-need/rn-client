import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const InputTrail = ({ addNewTrailLine, uuid }) => {
  return (
    <TextArea
      autoSize={{ minRows: 2, maxRows: 6 }}
      size="large"
      placeholder="Press enter to add a trail. Edit after pressing enter not allowed for now."
      onPressEnter={e => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          let trailLine = e.target.value;
          if (trailLine) {
            addNewTrailLine({ trailLine: e.target.value, uuid });
          }
        }
      }}
    />
  );
};

export default InputTrail;
