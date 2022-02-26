import * as types from "../constants/ActionTypes";

const initialState = {
  filters: {
    pageSize: 15,
    currentPage: 0,
    orderBy: "score",
    arrangeBy: "desc"
  }
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, filters: { ...state.filters, fileId: action.data.file_id } };
    case types.SEARCH_QUERY_REQUEST:
      return { ...state, filters: { ...state.filters, query: action.query } };
    default:
      return state;
  }
};
export default filters;
