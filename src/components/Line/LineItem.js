import React from "react";
import { Button } from "antd";

const LineItem = ({ line, addTrailHandler }) => {
  return (
    <>
      <p>
        {" "}
        {line.line} <br />{" "}
        <code>
          score: {(line.score * 100).toString().slice(0, 5)}, line index: {line.line_index}
        </code>
        <br />
        <Button> Relevant</Button>
        <Button>Not relevant</Button>
        <Button
          onClick={_e => {
            addTrailHandler(line);
          }}>
          Add to trail
        </Button>
      </p>
      <hr />
    </>
  );
};

export default LineItem;
