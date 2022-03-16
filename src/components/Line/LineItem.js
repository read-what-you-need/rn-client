import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { onLineSelect, generateQuestion } from "../../actions";
import { Badge, Tag } from "antd";

import { WaveIcon } from "../Icons";

const LineItem = ({ line, onLineSelect, isSelected, feedback, generateQuestion }) => {
  const score = line.score * 100;
  return (
    <>
      <div className={`line-item ${isSelected ? "selected" : ""}`}>
        <div className="line-item-text" onClick={() => onLineSelect({ line })}>
          {line.line}
        </div>
        <div className="line-action-items">
          <div className="line-action-item" onClick={() => generateQuestion({ query: line.line })}>
            <WaveIcon />
          </div>
          <Tag color="default">{score.toFixed(0)}</Tag>
        </div>
        <Badge color={feedback === 1 ? "green" : feedback === -1 ? "red" : ""}></Badge>
      </div>
      <div className="line-border"></div>
    </>
  );
};

const mapStateToProps = state => ({});
const actionCreators = { onLineSelect, generateQuestion };
export default connect(mapStateToProps, actionCreators)(LineItem);
