import * as types from "../constants/ActionTypes";

import fileApi from "../api/file";

export const filePageInit = ({ fileId }) => {
  return function (dispatch) {
    dispatch({ type: types.ON_FILE_PAGE_INIT, fileId });
    dispatch({ type: types.GET_FILE_DETAILS_REQUEST, fileId });
    fileApi
      .getFileById(fileId)
      .then(res => {
        console.log(res)
        dispatch({ type: types.GET_FILE_DETAILS_REQUEST_SUCCESS, data: res.data });
      })
      .catch(err => {
        return dispatch({ type: types.GET_FILE_DETAILS_REQUEST_FAILURE, error: err.response?.data?.message });
      });
  };
};
