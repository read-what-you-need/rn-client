import * as types from "../constants/ActionTypes";

export * from "./queries";
export * from "./file";
export * from "./user";

export const tagsCollapsible = () => {
  return function (dispatch) {
    dispatch({ type: types.TAGS_COLLAPSE });
  };
};

export const filtersCollapsible = () => {
  return function (dispatch) {
    dispatch({ type: types.FILTERS_COLLAPSE });
  };
};