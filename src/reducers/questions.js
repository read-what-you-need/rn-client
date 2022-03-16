import * as types from "../constants/ActionTypes";

const initialState = {
  isQuestionLoading: false,
  question: {},
  questionForFileLineId: [],
  questionStack: []
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.ASQ_QUESTION_REQUEST:
      return { ...state, isQuestionLoading: true, question: null, questionForFileLineId: action.data };
    case types.ASQ_QUESTION_SUCCESS:
      return {
        ...state,
        isQuestionLoading: false,
        question: action.data
      };
    case types.PRESS_GENERATED_QUESTION:
      return { ...state, questionStack: [...state.questionStack, { question: action.data, askedAt: new Date().toISOString() }] };
    case types.ASQ_QUESTION_FAILURE:
      return { ...state, isQuestionLoading: false, error: action.error };
    default:
      return state;
  }
};
export default questions;
