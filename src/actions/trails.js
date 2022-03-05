import * as types from "../constants/ActionTypes";
import { getSelectedLines } from "./lines";

export const addToTrailCheckout = () => (dispatch, getState) => {
  dispatch({ type: types.ADD_TO_TRAILS_CHECKOUT, data: getSelectedLines(getState()) });
};
