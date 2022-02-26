import { combineReducers } from "redux";

import file from "./file";

import lines from "./lines";
import queries from "./queries";


export default combineReducers({
  queryWrapper: queries,
  linesWrapper: lines,
  fileWrapper: file
});

export const getQuery = state => {
  return state.queryWrapper.query;
};
