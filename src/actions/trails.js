import * as types from "../constants/ActionTypes";
import { getSelectedLines } from "./lines";

export const addNewTrailLine =
  ({ trailLine, uuid, insertInstruction = "after" }) =>
  dispatch => {
    dispatch({ type: types.ADD_NEW_TRAIL_LINE, trailLine, uuid, insertInstruction });
  };

export const addToTrailCheckout = () => (dispatch, getState) => {
  dispatch({ type: types.ADD_TO_TRAILS_CHECKOUT, data: getSelectedLines(getState()) });
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
