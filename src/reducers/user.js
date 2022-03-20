import * as types from "../constants/ActionTypes";

const initialState = {
  isAuthUser: !!localStorage.getItem("token"),
  user: { token: localStorage.getItem("token") || [] }
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
    case types.USER_SIGNUP_REQUEST:
      return initialState;
    case types.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", action.data.token);
      return { ...state, isAuthUser: true, user: { ...state.user, ...action.data } };
    case types.USER_LOGOUT_REQUEST:
      localStorage.removeItem("token");
      return { ...state, isAuthUser: false, user: {} };
    case types.USER_LOGIN_FAILURE:
      return { ...state, error: action.error };
    case types.USER_SIGNUP_SUCCESS:
      localStorage.setItem("token", action.data.token);
      return { ...state, isAuthUser: true, user: { ...state.user, ...action.data } };
    case types.USER_SIGNUP_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
export default user;
