import * as types from "../constants/ActionTypes";

const initialState  = {
  fileDetails: {}
};

const file = ( state, action) => {
  console.log(action)
  switch (action.type) {
    case types.ON_FILE_PAGE_INIT:
      return initialState
    case types.GET_FILE_DETAILS_REQUEST:
      return initialState;
    case types.GET_FILE_DETAILS_REQUEST_SUCCESS:
      return {...state, fileDetails: action.data};
    case types.GET_FILE_DETAILS_REQUEST_FAILURE:
      return {...state, Error: action.error};

    default:
      return {};
  }
};
export default file;
