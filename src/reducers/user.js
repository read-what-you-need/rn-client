import * as types from "../constants/ActionTypes";

const initialState = {
  user: { tokenUpdateCount: 0 }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_DETAILS_REQUEST:
      return initialState;
    case types.GET_USER_DETAILS_REQUEST_SUCCESS:
      return { ...state, user: action.data };
    case types.GET_USER_DETAILS_REQUEST_FAILURE:
      return { ...state, error: action.error };
    case types.USER_LOGIN_REQUEST:
      return initialState;
    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.data.user.token);
      return { ...state, user: { ...state.user, ...action.data?.user, tokenUpdateCount: state.user.tokenUpdateCount + 1 } };
    case types.USER_LOGOUT_REQUEST:
      localStorage.removeItem("token");
      return { ...state, user: { tokenUpdateCount: state.user.tokenUpdateCount + 1 } };
    case types.USER_LOGIN_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default user;
