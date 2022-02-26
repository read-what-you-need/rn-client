import { SEARCH_QUERY_REQUEST } from "../constants/ActionTypes";

const initialState = {
  linesList: []
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY_REQUEST:
      return initialState;
    default:
      return {};
  }
};
export default lines;