import * as types from "../constants/ActionTypes";

const initialState = {
  tags: [],
  isCollapsed: false,
  pressedTag: []
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.GET_FILE_TAGS_REQUEST_SUCCESS:
      return { ...state, tags: action.data };
    case types.GET_FILE_TAGS_REQUEST_FAILURE:
      return { ...state, error: action.error, isCollapsed: true };
    case types.TAGS_COLLAPSE:
      return { ...state, isCollapsed: !state.isCollapsed };
    case types.ON_TAG_CLICK:
      return { ...state, pressedTag: action.tag };
    default:
      return state;
  }
};
export default filters;
