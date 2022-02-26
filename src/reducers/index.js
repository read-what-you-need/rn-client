import { combineReducers } from "redux";

import lines from "./lines";
import queries from "./queries";


export default combineReducers({
  queryWrapper: queries,
  linesWrapper: lines
});

export const getQuery = state => {
  return state.queryWrapper.query;
};
