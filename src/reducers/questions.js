import * as types from "../constants/ActionTypes";

const initialState = {
  questions: [],
  isQuestionLoading: false,
  isShowQuestions: true
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.ON_QUESTION_CLICK:
      return { ...state, isShowQuestions: false };
    case types.ON_TAG_CLICK:
      return { ...state, isShowQuestions: true };
    case types.ASQ_QUESTIONS_REQUEST:
      return { ...state, isQuestionLoading: true };
    case types.ASQ_QUESTIONS_SUCCESS:
      return { ...state, questions: action.data, isQuestionLoading: false };
    case types.ASQ_QUESTIONS_FAILURE:
      return { ...state, questions: [], error: action.err, isQuestionLoading: false };
    default:
      return state;
  }
};
export default questions;
