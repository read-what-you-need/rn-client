import React from "react";

const LineItem = ({ line }) => {
  return (
    <ul>
      <p>
        {" "}
        {line.line} <br /> <code>{(line.score * 100).toString().slice(0, 5)}</code>
      </p>
      <hr />
    </ul>
  );
};

export default LineItem;
