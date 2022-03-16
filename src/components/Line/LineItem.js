import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { onLineSelect, generateQuestion, onPressGeneratedQuestion } from "../../actions";
import { message, Badge, Tag, Tooltip } from "antd";
import { WaveIcon } from "../Icons";
import { SyncOutlined } from "@ant-design/icons";

const questionGenerationFail = () => {
  message.warning("Question could not be generated. Try again later.", 1);
};

const LineItem = ({
  line,
  onLineSelect,
  isSelected,
  feedback,
  generateQuestion,
  question,
  isQuestionLoading,
  questionForFileLineId,
  onPressGeneratedQuestion
}) => {
  let score = line.score * 100;
  score = score.toFixed(0);
  let isLineItemActive = questionForFileLineId === line.file_line_id;
  let isCurrenLineQuestionLoading = isQuestionLoading && isLineItemActive;
  return (
    <>
      <div className={`line-item ${isSelected ? "selected" : ""}`}>
        <div className="line-item-text" onClick={() => onLineSelect({ line })}>
          {line.line}
        </div>
        <div className="line-item-question" onClick={() => onPressGeneratedQuestion({ query: question })}>
          {isLineItemActive && question}
        </div>
        <div className="line-action-items">
          <Tooltip title={`Rastero is ${score}% confident`}>
            <Tag color="default">{score}</Tag>
          </Tooltip>
          <div
            className="line-action-item"
            onClick={() => generateQuestion({ query: line.line, fileLineId: line.file_line_id }).catch(() => questionGenerationFail())}>
            {!isCurrenLineQuestionLoading ? <WaveIcon /> : <SyncOutlined spin />}
          </div>
        </div>
        <Badge color={feedback === 1 ? "green" : feedback === -1 ? "red" : ""}></Badge>
      </div>
      <div className="line-border"></div>
    </>
  );
};

const mapStateToProps = state => ({
  isQuestionLoading: state.questionsWrapper?.isQuestionLoading,
  question: state.questionsWrapper?.question,
  questionForFileLineId: state.questionsWrapper?.questionForFileLineId
});
const actionCreators = { onLineSelect, generateQuestion, onPressGeneratedQuestion };
export default connect(mapStateToProps, actionCreators)(LineItem);
