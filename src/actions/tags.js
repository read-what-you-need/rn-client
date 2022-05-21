import * as types from "../constants/ActionTypes";
import tagsApi from "../api/tag";
import { searchQueryFromTagRequest } from "./queries";
import { generateQuestions } from "./questions";


export const getFileTags = fileId => dispatch => {
  dispatch({ type: types.GET_FILE_TAGS_REQUEST, fileId });
  tagsApi
    .getTags({ fileId: fileId })
    .then(res => {
      dispatch({ type: types.GET_FILE_TAGS_REQUEST_SUCCESS, data: res.data });
      if (res.success) {
        dispatch(searchQueryFromTagRequest({ query: res.data[0]?.tag })).then(() => {
          dispatch(generateQuestions());
        });
      }
    })
    .catch(err => {
      return dispatch({ type: types.GET_FILE_TAGS_REQUEST_FAILURE, error: err.response?.data?.message });
    });
};

export const onTagPress = ({ tag }) => {
  return function (dispatch) {
    dispatch({ type: types.ON_TAG_CLICK, tag });
    dispatch(searchQueryFromTagRequest({ query: tag })).then(() => {
      dispatch(generateQuestions());
    });
  };
};
