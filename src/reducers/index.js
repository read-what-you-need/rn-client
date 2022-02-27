import { combineReducers } from "redux";

import file from "./file";
import filters from "./filters";
import lines from "./lines";
import tags from "./tags";
import user from "./user";

export default combineReducers({
  linesWrapper: lines,
  fileWrapper: file,
  filtersWrapper: filters,
  tagsWrapper: tags,
  userWrapper: user
});

// export const getQuery = state => {
//   return state.queryWrapper.query;
// };
