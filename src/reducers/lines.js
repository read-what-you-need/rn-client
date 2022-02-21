import { SEARCH_QUERY_REQUEST, SEARCH_QUERY_REQUEST_SUCCESS } from "../constants/ActionTypes";

const initialState = {
  query: ""
};

const lines = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY_REQUEST:
      console.log('asked for new lines')
      return initialState
    case SEARCH_QUERY_REQUEST_SUCCESS:
      state = {
        query: action.query
      }
      return state;
    default:
      return {
        
      }
  }
}
export default lines;