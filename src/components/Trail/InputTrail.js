import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

const InputTrail = () => {
  return (
    <TextArea
      autoSize={{ minRows: 2, maxRows: 6 }}
      size="large"
      onPressEnter={e => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
        }
      }}
    />
  );
};

export default InputTrail;
