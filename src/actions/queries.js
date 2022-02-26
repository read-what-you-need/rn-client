// get your get lines api here
import * as types from "../constants/ActionTypes";

export const searchQueryRequest = ({ query }) => {
  return function (dispatch) {
    return dispatch({ type: types.SEARCH_QUERY_REQUEST_SUCCESS, query });
  };
};
