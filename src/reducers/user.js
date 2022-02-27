import * as types from "../constants/ActionTypes";

const initialState = {
  user: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_DETAILS_REQUEST:
      return initialState;
    case types.GET_USER_DETAILS_REQUEST_SUCCESS:
      return { ...state, user: action.data };
    case types.GET_USER_DETAILS_REQUEST_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default user;
