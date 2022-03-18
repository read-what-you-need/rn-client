import * as types from "../constants/ActionTypes";

import userApi from "../api/user";
export const loginUser =
  ({ username, password }) =>
  async dispatch => {
    dispatch({ type: types.USER_LOGIN_REQUEST });

    return userApi
      .signInUser({ username, password })
      .then(res => {
        dispatch({ type: types.USER_LOGIN_SUCCESS, data: res });
      })
      .catch(err => {
        dispatch({ type: types.USER_LOGIN_FAILURE, error: err.response?.data?.message || "Could not connect with server" });
      });
  };

export const logoutUser = () => async dispatch => {
  dispatch({ type: types.USER_LOGOUT_REQUEST });
};

export const getUserDetails = () => dispatch => {
  dispatch({ type: types.GET_USER_DETAILS_REQUEST });
  userApi
    .getCurrentUserDetails()
    .then(res => {
      dispatch({ type: types.GET_USER_DETAILS_REQUEST_SUCCESS, data: res });
    })
    .catch(err => {
      return dispatch({ type: types.GET_USER_DETAILS_REQUEST_FAILURE, error: err.response?.data?.message });
    });
};
