// get your get lines api here
import * as types from '../constants/ActionTypes'

export const searchQueryRequestAction = query => ({
  type: types.SEARCH_QUERY_REQUEST_SUCCESS,
  query
})