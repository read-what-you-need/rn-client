import { combineReducers } from "redux";
import lines from "./lines";

export default combineReducers({
  state: lines
});

export const getQuery = state => {
  return state.state.query;
};
