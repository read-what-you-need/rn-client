import * as types from "../constants/ActionTypes";
import { getSelectedLines } from "./lines";

export const addToTrailCheckout = () => (dispatch, getState) => {
  dispatch({ type: types.ADD_TO_TRAILS_CHECKOUT, data: getSelectedLines(getState()) });
};

export const toggleNewUserTrailLine =
  ({ uuid }) =>
  dispatch => {
    dispatch({ type: types.TOGGLE_ADD_NEW_TRAIL_LINE_ICON, data: uuid });
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
