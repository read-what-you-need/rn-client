import React, {  useEffect } from "react";
import { connect } from "react-redux";
import { generateQuestions } from "../../actions";
import "./QuestionsRecommendationList.scss";

const QuestionsRecommendationList = ({ lineItems, generateQuestions, questionRecommendations }) => {
  useEffect(() => {
    if (lineItems.length) {
      const lines = lineItems.map(line => line.line);
      generateQuestions({ lines });
    }
  }, [lineItems]);
  return (
    <div className="question-recommendation-list">
      {questionRecommendations.map((question, index) => (
        <span className="question-recommendation-list-item" key={index}>
          {question}
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  lineItems: state.linesWrapper?.linesList || [],
  isQuestionLoading: state.questionsWrapper?.isQuestionLoading,
  questionRecommendations: state.questionsWrapper?.questions,
  questionForFileLineId: state.questionsWrapper?.questionForFileLineId
});
const actionCreators = { generateQuestions };
export default connect(mapStateToProps, actionCreators)(QuestionsRecommendationList);
