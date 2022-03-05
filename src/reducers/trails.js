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
      return {
        ...state,
        trails: [
          ...state.trails,
          ...action.data.map(trail => {
            return { ...trail, uuid: helpers.uuid_generator(), showAddNewTrail: false};
          })
        ]
      };
    case types.TOGGLE_ADD_NEW_TRAIL_LINE_ICON:
      return {
        ...state,
        trails: [
          ...state.trails.map(trail => {
            if (trail.uuid === action.data) {
              return { ...trail, showAddNewTrail: !trail.showAddNewTrail };
            } else {
              return { ...trail, showAddNewTrail: false };;
            }
          })
        ]
      };

    default:
      return state;
  }
};
export default trails;
