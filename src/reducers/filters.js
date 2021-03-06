import * as types from "../constants/ActionTypes";

const initialState = {
  filters: {
    pageSize: 6,
    currentPage: 0,
    orderBy: "score",
    arrangeBy: "desc",
    feedback: 2,
    minScoreThreshold: 0.28
    //feedback set to 2 returns all unread lines
  },
  isCollapsed: false,
  isToolBoxVisible: false
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_PAGE_CHANGE:
      return { ...state, filters: { ...state.filters, currentPage: action.data } };
    case types.FILTERS_COLLAPSE:
      return { ...state, isCollapsed: !state.isCollapsed };
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, filters: { ...state.filters, fileId: action.data.file_id } };
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        filters: { ...state.filters, query: action.data }
      };
    case types.SEARCH_QUERY_FROM_SEARCH_BAR_REQUEST:
      return { ...state, filters: { ...state.filters, query: action.query, currentPage: 0 } };
    case types.SEARCH_QUERY_FROM_TAG_REQUEST:
      return { ...state, filters: { ...state.filters, query: action.query, currentPage: 0 } };
    case types.SEARCH_QUERY_FROM_QUESTION_REQUEST:
      return { ...state, filters: { ...state.filters, query: action.query, currentPage: 0 } };
    case types.SHOW_LIKED_LINES:
      return { ...state, filters: { ...state.filters, feedback: 1, currentPage: 0 } };
    case types.SHOW_ALL_LINES:
      return { ...state, filters: { ...state.filters, feedback: 0, currentPage: 0 } };
    case types.SHOW_UNREAD_LINES:
      return { ...state, filters: { ...state.filters, feedback: 2, currentPage: 0 } };
    case types.SHOW_TOOLBOX:
      return { ...state, isToolBoxVisible: true };
    case types.ON_TAG_CLICK:
      return { ...state, filters: { ...state.filters, feedback: 2, currentPage: 0 } };
    case types.HIDE_TOOLBOX:
      return { ...state, isToolBoxVisible: false };
    case types.SORT_AND_ARRANGE_LINES_BY:
      return { ...state, filters: { ...state.filters, arrangeBy: action.arrangeBy, orderBy: action.orderBy } };

    default:
      return state;
  }
};
export default filters;
