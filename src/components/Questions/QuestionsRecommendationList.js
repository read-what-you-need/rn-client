import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { onLineSelect } from "../../actions";
import queryApi from "../../api/query";

async function getQuestions(lines) {
  let questions = lines.map(line => queryApi.getQuestion({ query: line }));
  questions = await Promise.all(questions);
  return questions;
}

const QuestionsRecommendationList = ({ linesItem }) => {
  const [questionRecommendations, setQuestionRecommendations] = useState([]);
  useEffect(() => {
    if (linesItem.length) {
      const lines = linesItem.map(line => line.line);
      getQuestions(lines).then(response => {
        setQuestionRecommendations(response);
      });
    }
  }, [linesItem]);
  return (
    <div>
      {questionRecommendations.map((question, index) => (
        <p key={index}>{question}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  linesItem: state.linesWrapper?.linesList || [],
  isQuestionLoading: state.questionsWrapper?.isQuestionLoading,
  question: state.questionsWrapper?.question,
  questionForFileLineId: state.questionsWrapper?.questionForFileLineId
});
const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(QuestionsRecommendationList);
