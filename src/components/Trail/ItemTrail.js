import React, { useState } from "react";
import { List, Typography } from "antd";
import InputTrail from "./InputTrail";

const ItemTrail = ({
  data,
  setTrailLine,
  setTrailLines,
  trailLines,
  trailLine,
  clickAddTrail,
  setClickAddTrail,
  setClickAddTrailIndex,
  clickAddTrailIndex
}) => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <div key={index}>
          <List.Item>
            <Typography.Text mark>{item.line}</Typography.Text>
          </List.Item>

          {data.length - 1 === index ? (
            <></>
          ) : (
            <List.Item
              onClick={_e => {
                setClickAddTrail(true);
                setClickAddTrailIndex(index);
                console.log(`clicked index is:${index}`);
              }}>
              +
            </List.Item>
          )}
          {clickAddTrail && clickAddTrailIndex === index && (
            <InputTrail setTrailLine={setTrailLine} setTrailLines={setTrailLines} trailLine={trailLine} trailLines={trailLines} index={index}/>
          )}
        </div>
      )}
    />
  );
};

export default ItemTrail;
