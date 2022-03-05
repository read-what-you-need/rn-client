import React from "react";
import { Input } from "antd";
import Helpers from "../../libs/Helpers";
const { TextArea } = Input;

const InputTrail = () => {
  return (
    <TextArea
      autoSize={{ minRows: 2, maxRows: 6 }}
      size="large"
      onChange={e => {
        console.log(e.target.value);
      }}
    />
  );
};

export default InputTrail;
