import * as types from "../constants/ActionTypes";

export const filePageInit = ({ fileId }) => ({
  type: types.GET_FILE_DETAILS_REQUEST,
  fileId
});
