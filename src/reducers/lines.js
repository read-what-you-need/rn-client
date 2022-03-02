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
      return { ...state, isLoading: true };
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      return { ...state, isLoading: false, linesList: action.data?.data, totalLinesCount: action.data?.totalResultsCount };
    case types.SEARCH_QUERY_REQUEST_FAILURE:
      return initialState;
    case types.ON_LINE_ITEM_SELECT:
      return {
        ...state,
        linesList: [
          ...state.linesList.map(line => {
            if (line.file_line_id === action.data.file_line_id) {
              if (action.data.selected) {
                return { ...action.data, selected: false };
              } else {
                return { ...action.data, selected: true };
              }
            } else {
              return line;
            }
          })
        ]
      };
    case types.FEEDBACK_LINE_SUCCESS:
      let fileLineIds = action.data.map(line => line.file_line_id);
      return {
        ...state,
        isLoading: false,
        linesList: [
          ...state.linesList.map(line => {
            if (fileLineIds.includes(line.file_line_id)) {
              return { ...line, feedback: action.feedback };
            } else return line;
          })
        ]
      };
    default:
      return state;
  }
};
export default lines;
