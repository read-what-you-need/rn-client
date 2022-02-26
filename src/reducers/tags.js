import * as types from "../constants/ActionTypes";

const initialState = {
  tags: []
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.GET_FILE_TAGS_REQUEST_SUCCESS:
      return { ...state, tags: action.data };
    case types.GET_FILE_TAGS_REQUEST_FAILURE:
      return { ...state, tags: initialState, error: action.data.error };
    default:
      return state;
  }
};
export default filters;
