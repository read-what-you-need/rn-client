import { combineReducers } from "redux";

import file from "./file";
import filters from "./filters";
import lines from "./lines";

export default combineReducers({
  linesWrapper: lines,
  fileWrapper: file,
  filtersWrapper: filters
});

export const getQuery = state => {
  return state.queryWrapper.query;
};
