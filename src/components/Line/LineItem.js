import React from "react";

const LineItem = ({ line }) => {
  return (
    <>
      <p>
        {" "}
        {line.line} <br />{" "}
        <code>
          score: {(line.score * 100).toString().slice(0, 5)}, line index: {line.line_index}
        </code>
      </p>
      <hr />
    </>
  );
};

export default LineItem;
