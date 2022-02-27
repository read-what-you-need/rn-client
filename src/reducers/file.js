import * as types from "../constants/ActionTypes";

const initialState = {
  fileDetails: {}
};

const file = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.GET_FILE_DETAILS_REQUEST:
      return initialState;
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, fileDetails: action.data };
    case types.GET_FILE_DETAILS_REQUEST_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
export default file;
