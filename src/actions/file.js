import * as types from "../constants/ActionTypes";

import { searchQueryRequest } from "./queries";

import fileApi from "../api/file";
import tagsApi from "../api/tag";

export const getFileTags = fileId => dispatch => {
  dispatch({ type: types.GET_FILE_TAGS_REQUEST, fileId });
  tagsApi
    .getTags({ fileId })
    .then(res => {
      dispatch({ type: types.GET_FILE_TAGS_REQUEST_SUCCESS, data: res });
      if (res[0]?.tag) {
        dispatch(searchQueryRequest({ query: res[0].tag }));
      }
    })
    .catch(err => {
      return dispatch({ type: types.GET_FILE_TAGS_REQUEST_FAILURE, error: err.response?.data?.message });
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
