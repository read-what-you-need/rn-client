import * as types from "../constants/ActionTypes";

const initialState = {
  filters: {
    pageSize: 6,
    currentPage: 0,
    orderBy: "score",
    arrangeBy: "desc",
    feedback: 0
  },
  isCollapsed: false
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_PAGE_CHANGE:
      return { ...state, filters: { ...state.filters, currentPage: action.data } };
    case types.FILTERS_COLLAPSE:
      return { ...state, isCollapsed: !state.isCollapsed };
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, filters: { ...state.filters, fileId: action.data.file_id } };
    case types.SEARCH_QUERY_TYPE:
      return {
        ...state,
        filters: { ...state.filters, query: action.data }
      };
    case types.SEARCH_QUERY_REQUEST:
      return { ...state, filters: { ...state.filters, query: action.query, currentPage: 0 } };
    case types.SHOW_READ_LINES:
      return { ...state, filters: { ...state.filters, feedback: 1, currentPage:0 } };
    case types.SHOW_ALL_LINES:
      return { ...state, filters: { ...state.filters, feedback: 0 , currentPage:0 } };
    case types.SHOW_UNREAD_LINES:
      // ideally feedback of -1 should show disliked lines, for now we are showing unread lines
      return { ...state, filters: { ...state.filters, feedback: -1 , currentPage:0 } };
    case types.SORT_AND_ARRANGE_LINES_BY:
      return { ...state, filters: { ...state.filters, arrangeBy: action.arrangeBy, orderBy: action.orderBy } };
    case types.PRESS_GENERATED_QUESTION:
      return { ...state, filters: { ...state.filters, query: action.data, currentPage: 0 } };

    default:
      return state;
  }
};
export default filters;
