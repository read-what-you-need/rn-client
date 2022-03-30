import React from "react";
import { Select } from "antd";
import fileApi from "../../api/file";

const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  fileApi.queryLibrary({ searchQuery: val });
}

const BookSearch = () => {
  return (
    <div>
      <Select
        showSearch
        showArrow={false}
        placeholder="Search a book"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </div>
  );
};

export default BookSearch;
