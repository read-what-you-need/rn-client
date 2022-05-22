import * as types from "../constants/ActionTypes";

export * from "./queries";
export * from "./file";
export * from "./user";
export * from "./lines";
export * from "./tags";
export * from "./trails";
export * from "./questions";



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