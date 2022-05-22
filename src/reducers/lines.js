import * as types from "../constants/ActionTypes";

const initialState = {
  linesList: [],
  totalLinesCount: 0,
  isLoading: true,
  queryId: []
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.SEARCH_QUERY_REQUEST:
      return initialState;
    case types.SEARCH_QUERY_FROM_TAG_REQUEST:
      return initialState;
    case types.FILTER_APPLIED:
      return { ...state, isLoading: true };
    case types.SEARCH_QUERY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linesList: action.data?.data,
        totalLinesCount: action.data?.totalResultsCount,
        queryId: action.data?.queryId
      };
    case types.SEARCH_QUERY_REQUEST_FAILURE:
      return { ...state, error: action.error };
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
    case types.CLEAR_SELECT_LINES:
      return {
        ...state,
        linesList: [
          ...state.linesList.map(line => {
            if (line.selected) {
              return { ...line, selected: false };
            }
            return line;
          })
        ]
      };
    case types.REMOVE_LINES_THAT_GOT_FEEDBACK:
      const lineIdsThatGotFeedback = action.data;
      return {
        ...state,
        linesList: [...state.linesList.filter(line => !lineIdsThatGotFeedback.includes(line.file_line_id))]
      };
    case types.FEEDBACK_LINE_SUCCESS:
      let fileLineIds = action.data.map(line => line.file_line_id);
      return {
        ...state,
        isLoading: false,
        error: null,
        linesList: [
          ...state.linesList.map(line => {
            if (fileLineIds.includes(line.file_line_id)) {
              return { ...line, feedback: action.feedback };
            } else return line;
          })
        ]
      };
    case types.FEEDBACK_LINE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default lines;
