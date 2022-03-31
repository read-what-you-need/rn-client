import React from "react";
import { Input } from "antd";
import fileApi from "../../api/file";

function onEnterHandler(val) {
  console.log(val);
  if (val) {
    fileApi.queryLibrary({ searchQuery: val });
  }
}

const BookSearch = () => {
  return (
    <div>
      <Input onPressEnter={e => onEnterHandler(e.target.value)} placeholder="Basic usage" />
    </div>
  );
};

export default BookSearch;
