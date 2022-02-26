import * as types from "../constants/ActionTypes";

const initialState = {
  filters: {
    pageSize: 15,
    currentPage: 0,
    orderBy: "score",
    arrangeBy: "desc"
  },
  isCollapsed: false
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, filters: { ...state.filters, fileId: action.data.file_id } };
    case types.SEARCH_QUERY_REQUEST:
      return { ...state, isLoading: true, filters: { ...state.filters, query: action.query } };

    case types.FILTERS_COLLAPSE:
      return { ...state, isCollapsed: !state.isCollapsed };
    default:
      return state;
  }
};
export default filters;
