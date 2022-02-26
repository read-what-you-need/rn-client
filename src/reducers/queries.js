import * as types from "../constants/ActionTypes";

const initialState = {
  query: ""
};

const queries = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case types.ON_FILE_PAGE_INIT:
      return initialState
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      return {...state,  query: action.query};
    default:
      return state;
  }
};
export default queries;
