import React from "react";
import { List, Typography } from "antd";

const ItemTrail = ({ data }) => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <>
          <List.Item>
            <Typography.Text mark>{item.line}</Typography.Text>
          </List.Item>

          {data.length - 1 === index ? <></> : <List.Item>+</List.Item>}
        </>
      )}
    />
  );
};

export default ItemTrail;
