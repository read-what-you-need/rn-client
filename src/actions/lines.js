import * as types from "../constants/ActionTypes";
import linesApi from "../api/lines";

export const likeLines =
  ({ fileLineId, queryId }) =>
  dispatch => {
    dispatch({ type: types.LIKE_LINE_REQUEST });
    linesApi
      .likeLine({ fileLineId, queryId })
      .then(res => {
        dispatch({ type: types.LIKE_LINE_SUCCESS, data: res.data });
      })
      .catch(err => {
        return dispatch({ type: types.LIKE_LINE_FAILURE, error: err });
      });
  };

export const disLikeLines =
  ({ fileLineId, queryId }) =>
  dispatch => {
    dispatch({ type: types.DISLIKE_LINE_REQUEST });
    linesApi
      .disLikeLine({ fileLineId, queryId })
      .then(res => {
        dispatch({ type: types.DISLIKE_LINE_SUCCESS, data: res.data });
      })
      .catch(err => {
        return dispatch({ type: types.DISLIKE_LINE_FAILURE, error: err });
      });
  };

export const onLineSelect =
  ({ line }) =>
  dispatch => {
    dispatch({ type: types.ON_LINE_ITEM_SELECT, data: line });
  };
