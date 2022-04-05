import * as types from "../constants/ActionTypes";

const initialState = {
  fileDetails: {},
  fileList: []
};

const file = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_FILE_EXISTS_REQUEST:
      return initialState;
    case types.FILE_PAGE_INIT:
      return { ...state };
    case types.CHECK_FILE_EXISTS_SUCCESS:
      return { ...state, isFileExist: action.data };
    case types.CHECK_FILE_EXISTS_FAILURE:
      return { ...state, error: action.error };
    case types.GET_FILE_DETAILS_REQUEST:
      return {...state};
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return { ...state, fileDetails: action.data };
    case types.GET_FILE_DETAILS_REQUEST_FAILURE:
      return { ...state, error: action.error };
    case types.GET_LIST_OF_USERS_FILES_REQUEST:
      return { ...state, fileList: [] };
    case types.GET_LIST_OF_USERS_FILES_REQUEST_SUCCESS:
      return { ...state, fileList: action.data };
    case types.GET_LIST_OF_USERS_FILES_REQUEST_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default file;
