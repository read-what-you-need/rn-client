import * as types from "../constants/ActionTypes";
import queryApi from "../api/query";

export const getLines = () => (dispatch, getState) => {
  const { filters } = getState().filtersWrapper || {};
  dispatch({ type: types.SEARCH_QUERY_REQUEST });
  queryApi
    .sendQuery(filters)
    .then(res => {
      dispatch({ type: types.SEARCH_QUERY_REQUEST_SUCCESS, data: res });
    })
    .catch(err => {
      return dispatch({ type: types.SEARCH_QUERY_REQUEST_FAILURE, error: err });
    });
};

export const searchQueryRequest = ({ query }) => {
  return function (dispatch) {
    dispatch(setSearchQuery({ query }));
    dispatch(getLines());
  };
};

export const searchQueryFromTagRequest = ({ query }) => {
  return function (dispatch) {
    dispatch({ type: types.SEARCH_QUERY_FROM_TAG_REQUEST, query });
    dispatch(getLines());
  };
};

export const setSearchQuery = ({ query }) => {
  return function (dispatch) {
    dispatch({ type: types.SET_SEARCH_QUERY, data: query });
  };
};

export const getCurrentQueryId = state => {
  return state.linesWrapper.queryId || [];
};

export const onTagPress = ({ tag }) => {
  return function (dispatch) {
    dispatch({ type: types.ON_TAG_CLICK, tag });
    dispatch({ type: types.SEARCH_QUERY_FROM_TAG_REQUEST, query: tag });
    dispatch(getLines());
  };
};

export const showLikedLines = () => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_APPLIED });
    dispatch({ type: types.SHOW_LIKED_LINES });
    dispatch(getLines());
  };
};

export const showAllLines = () => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_APPLIED });
    dispatch({ type: types.SHOW_ALL_LINES });
    dispatch(getLines());
  };
};

export const showUnReadLines = () => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_APPLIED });
    dispatch({ type: types.SHOW_UNREAD_LINES });
    dispatch(getLines());
  };
};

export const sortAndArrangeLinesBy = ({ arrangeBy, orderBy }) => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_APPLIED });
    dispatch({ type: types.SORT_AND_ARRANGE_LINES_BY, arrangeBy, orderBy });
    dispatch(getLines());
  };
};

export const changePage = ({ pageChangeTo }) => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_PAGE_CHANGE, data: pageChangeTo });
    dispatch(getLines());
  };
};

async function getQuestions(lines) {
  let questions = lines.map(line => queryApi.getQuestion({ query: line }));
  questions = await Promise.all(questions);
  return questions;
}

export const generateQuestions = ({ lines }) => {
  return async function (dispatch) {
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

export const onQuestionClick = ({ question }) => {
  return async function (dispatch) {
    dispatch({ type: types.ON_QUESTION_CLICK });
    dispatch({ type: types.SEARCH_QUERY_FROM_QUESTION_REQUEST, query: question });
    dispatch(getLines());
  };
};
