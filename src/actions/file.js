import * as types from "../constants/ActionTypes";

import { getFileTags } from "./tags";

import fileApi from "../api/file";

export const getUserFilesList = () => async (dispatch, getState) => {
  dispatch({ type: types.GET_LIST_OF_USERS_FILES_REQUEST });
  const userId = getState().userWrapper.user?.id || null;
  return fileApi
    .getFileListUser({ userId })
    .then(res => {
      if (res.status === 401) {
        dispatch({ type: types.GET_LIST_OF_USERS_FILES_REQUEST_FAILURE, error: res?.message });
      } else {
        dispatch({ type: types.GET_LIST_OF_USERS_FILES_REQUEST_SUCCESS, data: res });
      }
    })
    .catch(err => {
      dispatch({ type: types.GET_LIST_OF_USERS_FILES_REQUEST_FAILURE, error: err.response?.data?.message || "Could not connect with server" });
    });
};

export const getFileDetails = fileId => dispatch => {
  dispatch({ type: types.GET_FILE_DETAILS_REQUEST, fileId });
  fileApi
    .getFileById(fileId)
    .then(res => {
      dispatch({ type: types.GET_FILE_DETAILS_REQUEST_SUCCESS, data: res.data });
    })
    .catch(err => {
      return dispatch({ type: types.GET_FILE_DETAILS_REQUEST_FAILURE, error: err.response?.data?.message });
    });
};

export const filePageInit = ({ fileId }) => {
  return function (dispatch) {
    dispatch({ type: types.FILE_PAGE_INIT, fileId });
    dispatch(getFileDetails(fileId));
    dispatch(getFileTags(fileId));
  };
};
