import * as types from "../constants/ActionTypes";
import { getSelectedLines } from "./lines";
import trailApi from "../api/trail";

export const addNewTrailLine =
  ({ trailLine, uuid, insertInstruction = "after" }) =>
  dispatch => {
    dispatch({ type: types.ADD_NEW_TRAIL_LINE, trailLine, uuid, insertInstruction });
  };

export const addToTrailCheckout = () => (dispatch, getState) => {
  dispatch({ type: types.ADD_TO_TRAILS_CHECKOUT, data: getSelectedLines(getState()) });
  dispatch({ type: types.CLEAR_SELECT_LINES });
};

export const toggleNewUserTrailLine =
  ({ uuid }) =>
  dispatch => {
    dispatch({ type: types.TOGGLE_ADD_NEW_TRAIL_LINE_ICON, data: uuid });
  };
export const deleteTrailLine =
  ({ uuid }) =>
  dispatch => {
    dispatch({ type: types.DELETE_TRAIL_LINE, data: uuid });
  };

export const getAddNewTrailIsShown = ({ state, uuid }) => {
  const { trails } = state.trailsWrapper;
  let addNewTrailIsShown = false;
  trails.forEach(trail => {
    if (trail.uuid === uuid) {
      addNewTrailIsShown = trail.showAddNewTrail;
    }
  });
  return addNewTrailIsShown;
};

export const saveTrail = () => async (dispatch, getState) => {
  if (validateTrail(dispatch, getState())) {
    dispatch({ type: types.SAVE_TRAIL_REQUEST });
    const { trailsWrapper } = getState() || {};
    const { fileWrapper } = getState() || {};

    const fileId = fileWrapper.fileDetails.file_id;
    let trailLines = trailsWrapper.trails.map(trail => {
      if (trail.file_line_id) {
        return { file_line_id: trail.file_line_id };
      } else if (trail.line) {
        return { line: trail.line };
      } else {
        let trailInValidReason = {};
        trailInValidReason = { message: "Atleast one of the trail lines is empty" };
        dispatch({
          type: types.VALIDATE_TRAIL_TO_SAVE_FAILURE,
          error: trailInValidReason
        });
        throw new Error(trailInValidReason.message);
      }
    });
    let response = trailApi
      .createTrail({ trailTitle: trailsWrapper.trailTitle, trailLines, fileId })
      .then(trail => {
        dispatch({ type: types.SAVE_TRAIL_SUCCESS });
        return trail;
      })
      .catch(_err => dispatch({ type: types.SAVE_TRAIL_FAILURE }));

    return response;
  }
};

const validateTrail = (dispatch, state) => {
  dispatch({ type: types.VALIDATE_TRAIL_TO_SAVE_REQUEST });
  let isTrailValid = true;
  let trailInValidReason = {};

  const { trailsWrapper } = state || {};
  if (!trailsWrapper.trailTitle) {
    isTrailValid = false;
    trailInValidReason = { message: "Title is missing" };
  }
  for (let trail of trailsWrapper.trails) {
    if (!trail.file_line_id) {
      if (!trail.line) {
        isTrailValid = false;
        trailInValidReason = { message: "Atleast one of the trail lines is empty" };
      }
    }
  }
  if (!isTrailValid) {
    dispatch({ type: types.VALIDATE_TRAIL_TO_SAVE_FAILURE, error: trailInValidReason });
    throw new Error(trailInValidReason.message);
  }
  dispatch({ type: types.VALIDATE_TRAIL_TO_SAVE_SUCCESS });
  return isTrailValid;
};

export const updateTrailTitle =
  ({ trailTitle }) =>
  dispatch => {
    dispatch({ type: types.UPDATE_TRAIL_TITLE, trailTitle });
  };

export const updateReorderedListOfTrails =
  ({ trails }) =>
  dispatch => {
    dispatch({ type: types.UPDATE_REORDERED_LIST_OF_TRAILS, data: trails });
  };
