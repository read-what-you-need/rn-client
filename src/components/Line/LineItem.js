import React from "react";
import "./LineItem.scss";
import { connect } from "react-redux";
import { onLineSelect,  } from "../../actions";
import {  Badge,} from "antd";


const LineItem = ({
  line,
  onLineSelect,
  isSelected,
  feedback,
}) => {
  return (
    <>
      <div className={`line-item ${isSelected ? "selected" : ""}`}>
        <div className="line-item-text" onClick={() => onLineSelect({ line })}>
          {line.line}
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
const actionCreators = { onLineSelect };
export default connect(mapStateToProps, actionCreators)(LineItem);
