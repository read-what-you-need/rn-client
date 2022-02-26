import * as types from "../constants/ActionTypes";

const initialState = {
  linesList: []
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_FILE_PAGE_INIT:
      return initialState
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    default:
      return {};
  }
};
export default lines;