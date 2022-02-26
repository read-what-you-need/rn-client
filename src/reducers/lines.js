import * as types from "../constants/ActionTypes";

const initialState = {
  linesList: [],
  totalLinesCount: 0,
  isLoading: true,
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      return {...state, isLoading: false, linesList: action.data?.data, totalLinesCount: action.data?.totalResultsCount};
    case types.SEARCH_QUERY_REQUEST_FAILURE:
      return initialState;
    default:
      return state;
  }
};
export default lines;
