import * as types from "../constants/ActionTypes";
import linesApi from "../api/lines";
import { getCurrentQueryId, getLines } from "./queries";

export const getSelectedLines = state => {
  const { linesList } = state.linesWrapper || [];
  const { query } = state.filtersWrapper.filters || "";
  let selectedLines = [
    ...linesList
      .filter(line => {
        if (line.selected) {
          return line.file_line_id;
        } else return false;
      })
      .map(line => {
        return { ...line, query };
      })
  ];
  return selectedLines;
};

export const feedbackLines =
  ({ feedback }) =>
  (dispatch, getState) => {
    dispatch({ type: types.FEEDBACK_LINE_REQUEST });
    let selectedLinesIds = getSelectedLines(getState()).map(line => line.file_line_id);
    let currentQueryId = getCurrentQueryId(getState());
    linesApi
      .feedbackLines({ fileLineIds: selectedLinesIds, feedback, queryId: currentQueryId })
      .then(res => {
        dispatch({ type: types.FEEDBACK_LINE_SUCCESS, data: res.data, feedback });
        dispatch(clearSelectedLines());
        dispatch(handleLinesThatGotFeedback(selectedLinesIds));
      })
      .catch(err => {
        return dispatch({ type: types.FEEDBACK_LINE_FAILURE, error: "Please try logging in." });
      });
  };

export const onLineSelect =
  ({ line }) =>
  dispatch => {
    dispatch({ type: types.ON_LINE_ITEM_SELECT, data: line });
    dispatch({ type: types.SHOW_TOOLBOX });
  };

export const getSelectedLinesCount = state => {
  return getSelectedLines(state).length;
};

export const handleLinesThatGotFeedback = dislikedLineIds => dispatch => {
  dispatch(removeLinesThatGotFeedback(dislikedLineIds));
  dispatch(getLines());
};

export const removeLinesThatGotFeedback = dislikedLineIds => dispatch => {
  dispatch({ type: types.REMOVE_LINES_THAT_GOT_FEEDBACK, data: dislikedLineIds });
};

export const clearSelectedLines = () => dispatch => {
  dispatch({ type: types.CLEAR_SELECT_LINES });
  dispatch({ type: types.HIDE_TOOLBOX });
};
