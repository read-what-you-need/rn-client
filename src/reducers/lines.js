import * as types from "../constants/ActionTypes";

const initialState = {
  linesList: [],
  totalLinesCount: 0,
  isLoading: true
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    case types.FILTER_APPLIED:
      return {...state, isLoading: true};
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      return { ...state, isLoading: false, linesList: action.data?.data, totalLinesCount: action.data?.totalResultsCount };
    case types.SEARCH_QUERY_REQUEST_FAILURE:
      return initialState;
    case types.LIKE_LINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linesList: [
          ...state.linesList.map(line => {
            if (line.file_line_id === action.data.file_line_id) {
              return { ...line, feedback: 1 };
            } else return line;
          })
        ]
      };
    case types.DISLIKE_LINE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linesList: [
          ...state.linesList.map(line => {
            if (line.file_line_id === action.data.file_line_id) {
              return { ...line, feedback: -1 };
            } else return line;
          })
        ]
      };
    default:
      return state;
  }
};
export default lines;
