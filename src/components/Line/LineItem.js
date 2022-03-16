import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { onLineSelect, generateQuestion } from "../../actions";
import { Badge, Tag, Tooltip } from "antd";
import { WaveIcon } from "../Icons";

const LineItem = ({ line, onLineSelect, isSelected, feedback, generateQuestion }) => {
  let score = line.score * 100;
  score = score.toFixed(0);
  return (
    <>
      <div className={`line-item ${isSelected ? "selected" : ""}`}>
        <div className="line-item-text" onClick={() => onLineSelect({ line })}>
          {line.line}
        </div>
        <div className="line-action-items">
          <Tooltip title={`Rastero is ${score}% confident`}>
            <Tag color="default">{score}</Tag>
          </Tooltip>
          <Tooltip title={"Let rastero ask a question!"}>
            <div className="line-action-item" onClick={() => generateQuestion({ query: line.line })}>
              <WaveIcon />
            </div>
          </Tooltip>
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
