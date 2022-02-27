import * as types from "../constants/ActionTypes";
import tagsApi from "../api/tag";
import { searchQueryRequest } from "./queries";

export const getFileTags = fileId => dispatch => {
  dispatch({ type: types.GET_FILE_TAGS_REQUEST, fileId });
  tagsApi
    .getTags({ fileId: fileId})
    .then(res => {
      dispatch({ type: types.GET_FILE_TAGS_REQUEST_SUCCESS, data: res.data });
      if (res.success) {
        dispatch(searchQueryRequest({ query: res.data[0]?.tag }));
      }
    })
    .catch(err => {
      return dispatch({ type: types.GET_FILE_TAGS_REQUEST_FAILURE, error: err.response?.data?.message });
    });
};
