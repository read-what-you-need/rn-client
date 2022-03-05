import * as types from "../constants/ActionTypes";
import helpers from "../libs/Helpers";

const initialState = {
  trails: []
};

const trails = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.ADD_TO_TRAILS_CHECKOUT:
      return { ...state, trails: [...state.trails, ...action.data.map((trail) => {
        return {...trail, uuid: helpers.uuid_generator()}
      })] };

    default:
      return state;
  }
};
export default trails;
