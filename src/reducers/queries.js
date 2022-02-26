import { SEARCH_QUERY_REQUEST, SEARCH_QUERY_REQUEST_SUCCESS, SEARCH_QUERY_REQUEST_FAILURE } from "../constants/ActionTypes";

const initialState = {
  query: ""
};

const queries = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY_REQUEST:
      return initialState;
    case SEARCH_QUERY_REQUEST_SUCCESS:
      state = {
        query: action.query
      };
      return state;
    default:
      return {};
  }
};
export default queries;
