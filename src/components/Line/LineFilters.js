import React from "react";
import { Button, Form, Select, Radio } from "antd";
import "./LineFilters.scss";

const { Option } = Select;

const LineFilters = ({orderByChange, arrangeByChange}) => {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 }
  };
 
  return (
    <Form
      initialValues={{
        select: "desc",
        "radio-button": "score",
        select: "desc"
      }}
      {...formItemLayout}
      onValuesChange={(_changedValues, allValues) => {
        orderByChange(allValues["radio-button"]);
        arrangeByChange(allValues.select)
      }}
      form={form}
      className="lines-filter-dash">
      <Form.Item name="radio-button" label="Arrange by">
        <Radio.Group>
          <Radio.Button value="score">Score</Radio.Button>
          <Radio.Button value="line_index">Position in book</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="select" label="Sort by">
        <Select placeholder="Descending">
          <Option value="asc">Ascending</Option>
          <Option value="desc">Descending</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default LineFilters;
