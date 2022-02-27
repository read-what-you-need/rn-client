import * as types from "../constants/ActionTypes";

import userApi from "../api/user";

export const getUserDetails = () => dispatch => {
  dispatch({ type: types.GET_USER_DETAILS_REQUEST });
  userApi
    .getCurrentUserDetails()
    .then(res => {
      console.log(res);
      dispatch({ type: types.GET_USER_DETAILS_REQUEST_SUCCESS, data: res });
    })
    .catch(err => {
      return dispatch({ type: types.GET_USER_DETAILS_REQUEST_FAILURE, error: err.response?.data?.message });
    });
};
