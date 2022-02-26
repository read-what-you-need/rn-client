import { combineReducers } from "redux";

import file from "./file";
import filters from "./filters";
import lines from "./lines";
import tags from "./tags";


export default combineReducers({
  linesWrapper: lines,
  fileWrapper: file,
  filtersWrapper: filters,
  tagsWrapper: tags
});

// export const getQuery = state => {
//   return state.queryWrapper.query;
// };
