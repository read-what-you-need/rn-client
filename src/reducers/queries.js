import * as types from "../constants/ActionTypes";

const initialState = {
  query: ""
};

const queries = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_FILE_PAGE_INIT:
      return initialState
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      state = {
        query: action.query
      };
      return state;
    default:
      return {};
  }
};
export default queries;
