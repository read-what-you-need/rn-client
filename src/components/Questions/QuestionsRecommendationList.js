import React from "react";
import { connect } from "react-redux";
import { onQuestionClick } from "../../actions";
import "./QuestionsRecommendationList.scss";
import { Skeleton } from "antd";

const multiplySkeleton = byTimes => {
  return (
    <div>
      {[...Array(byTimes).keys()].map(id => (
        <Skeleton key={id} active />
      ))}
    </div>
  );
};
const QuestionsRecommendationList = ({ onQuestionClick, isQuestionLoading, questionRecommendations }) => {
  return (
    <div className="question-recommendation-list">
      {!isQuestionLoading
        ? questionRecommendations.map((question, index) => (
            <span
              className="question-recommendation-list-item"
              key={index}
              onClick={e => {
                onQuestionClick({ question });
              }}>
              {question}
            </span>
          ))
        : multiplySkeleton(3)}
    </div>
  );
};

const mapStateToProps = state => ({
  isQuestionLoading: state.questionsWrapper?.isQuestionLoading,
  questionRecommendations: state.questionsWrapper?.questions,
  questionForFileLineId: state.questionsWrapper?.questionForFileLineId
});
const actionCreators = { onQuestionClick };
export default connect(mapStateToProps, actionCreators)(QuestionsRecommendationList);
