import * as types from "../constants/ActionTypes";
import linesApi from "../api/lines";

const getSelectedLineIds = state => {
  const { linesList } = state.linesWrapper || [];
  let selectedLinesIds = [
    ...linesList
      .filter(line => {
        if (line.selected) {
          return line.file_line_id;
        } else return false;
      })
      .map(line => line.file_line_id)
  ];
  return selectedLinesIds;
};

export const feedbackLines =
  ({ feedback }) =>
  (dispatch, getState) => {
    dispatch({ type: types.FEEDBACK_LINE_REQUEST });
    let selectedLinesIds = getSelectedLineIds(getState());
    linesApi
      .feedbackLines({ fileLineIds: selectedLinesIds, feedback })
      .then(res => {
        dispatch({ type: types.FEEDBACK_LINE_SUCCESS, data: res.data, feedback });
      })
      .catch(err => {
        return dispatch({ type: types.FEEDBACK_LINE_FAILURE, error: err });
      });
  };

export const onLineSelect =
  ({ line }) =>
  dispatch => {
    dispatch({ type: types.ON_LINE_ITEM_SELECT, data: line });
  };

export const getSelectedLinesCount = (state)  => {
  return getSelectedLineIds(state).length;
};