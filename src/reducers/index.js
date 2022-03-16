import { combineReducers } from "redux";

import file from "./file";
import filters from "./filters";
import lines from "./lines";
import tags from "./tags";
import trails from "./trails";
import user from "./user";
import questions from "./questions";

export default combineReducers({
  linesWrapper: lines,
  fileWrapper: file,
  filtersWrapper: filters,
  tagsWrapper: tags,
  trailsWrapper: trails,
  userWrapper: user,
  questionsWrapper: questions
});

// export const getQuery = state => {
//   return state.queryWrapper.query;
// };
