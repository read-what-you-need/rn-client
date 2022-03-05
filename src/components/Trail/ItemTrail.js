import React, { useEffect } from "react";
import { List, Typography } from "antd";
import InputTrail from "./InputTrail";

const ItemTrail = ({ data }) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = event => {
    if (!event.target.className.includes("ant-input")) {
    }
  };
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <div key={index}>
          <List.Item>
            <Typography.Text mark>{item.line}</Typography.Text>
          </List.Item>
         <List.Item onClick={_e => {}}>+</List.Item>
          <InputTrail index={index} />
        </div>
      )}
    />
  );
};

export default ItemTrail;
