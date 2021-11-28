import React from "react";
import { List, Typography } from "antd";

const ItemTrail = ({data}) => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>{item.line}</Typography.Text> 
        </List.Item>
      )}
    />
  );
};

export default ItemTrail;
