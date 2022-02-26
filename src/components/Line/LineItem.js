import React from "react";
import "./LineItem.scss";
const LineItem = ({ line, addTrailHandler }) => {
  return (
    <div className="line-item">
      <div className="line-item-text">
        {line.line} 
        <br/>
        <code>
          score: {(line.score * 100).toString().slice(0, 5)}, line index: {line.line_index}
        </code>
        {/* <br />
        <Button> Relevant</Button>
        <Button>Not relevant</Button>
        <Button
          onClick={_e => {
            addTrailHandler(line);
          }}>
          Add to trail
        </Button> */}
      </div>
    </div>
  );
};

export default LineItem;
