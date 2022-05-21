import * as types from "../constants/ActionTypes";

const initialState = {
  isQuestionLoading: false,
  isShowQuestion: true
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    default:
      return state;
  }
};
export default questions;
