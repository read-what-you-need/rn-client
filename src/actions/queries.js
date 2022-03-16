import * as types from "../constants/ActionTypes";
import queryApi from "../api/query";

export const getLines = () => (dispatch, getState) => {
  const { filters } = getState().filtersWrapper || {};
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
    dispatch({ type: types.SEARCH_QUERY_REQUEST, query });
    dispatch(getLines());
  };
};

export const getCurrentQueryId = state => {
  return state.linesWrapper.queryId || [];
};

export const onTagPress = ({ tag }) => {
  return function (dispatch) {
    dispatch({ type: types.ON_TAG_CLICK, tag });
    dispatch({ type: types.SEARCH_QUERY_REQUEST, query: tag });
    dispatch(getLines());
  };
};

export const showReadLines = () => {
  return function (dispatch) {
    dispatch({ type: types.FILTER_APPLIED });
    dispatch({ type: types.SHOW_READ_LINES });
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

export const generateQuestion = ({ query }) => {
  return function (dispatch) {
    dispatch({ type: types.ASQ_QUESTION_REQUEST });
    queryApi.getQuestion({ query }).then(res => {
      console.log(res)
      dispatch({ type: types.ASQ_QUESTION_SUCCESS, data: res });
    })
    .catch(err => {
      return dispatch({ type: types.ASQ_QUESTION_FAILURE, error: err });
    });
  };
};