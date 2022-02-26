import * as types from "../constants/ActionTypes";
import queryApi from "../api/query";

export const searchQueryRequest = ({ query }) => {
  return function (dispatch) {
    dispatch({ type: types.SEARCH_QUERY_REQUEST, query });
    // queryApi.sendQuery({ id: fileId, offset, limit, query, orderBy, arrangeBy }).then(res => {
    //   setLines(res.data);
    //   setTotalResultsCount(res.totalResultsCount);
    // });
  };
};
