import * as types from "../constants/ActionTypes";
import queryApi from "../api/query";
import { getCurrentLines } from "./queries";

async function getQuestions(lines) {
  let questions = lines.map(line => queryApi.getQuestion({ query: line }));
  questions = await Promise.all(questions);
  return questions;
}

export const generateQuestions = () => {
  return async function (dispatch, getState) {
    const lines = getCurrentLines(getState()).map(line => line.line);
    dispatch({ type: types.ASQ_QUESTIONS_REQUEST });
    getQuestions(lines)
      .then(response => {
        dispatch({ type: types.ASQ_QUESTIONS_SUCCESS, data: response });
      })
      .catch(err => {
        return dispatch({ type: types.ASQ_QUESTIONS_FAILURE, error: err });
      });
  };
};
