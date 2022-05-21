import React from "react";
import { connect } from "react-redux";
import { onQuestionClick } from "../../actions";
import "./QuestionsRecommendationList.scss";

const QuestionsRecommendationList = ({ onQuestionClick, isQuestionLoading, questionRecommendations }) => {
  return (
    <div className="question-recommendation-list">
      {!isQuestionLoading ? questionRecommendations.map((question, index) => (
        <span
          className="question-recommendation-list-item"
          key={index}
          onClick={e => {
            onQuestionClick({ question });
          }}>
          {question}
        </span>
      )): <>loading question recommendation</>}
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
