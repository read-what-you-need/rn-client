import React from "react";

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
        <button
          onClick={_e => {
            addTrailHandler(line);
          }}>
          add to trail
        </button>
      </p>
      <hr />
    </>
  );
};

export default LineItem;
