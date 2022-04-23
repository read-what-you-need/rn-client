import * as types from "../constants/ActionTypes";
import helpers from "../libs/Helpers";

const initialState = {
  trails: [],
  trailTitle: ""
};

function getNewTrailSignature() {
  return { uuid: helpers.uuid_generator(), showAddNewTrail: false };
}
function lineExistsCheck(lines, lineToCheck) {
  return lines.some(line => line.file_line_id === lineToCheck.file_line_id);
}
const trails = (state = initialState, action) => {
  switch (action.type) {
    case types.FILE_PAGE_INIT:
      return initialState;
    case types.ADD_NEW_TRAIL_LINE:
      let insertAroundIndex = state.trails.findIndex(trail => trail.uuid === action.uuid);
      let insertIndex = insertAroundIndex + 1;
      if (action.insertInstruction === "before") {
        insertIndex = insertAroundIndex - 1;
      }
      let updatedTrail = helpers.insertInArray(state.trails, insertIndex, { line: action.trailLine, ...getNewTrailSignature() });
      return {
        ...state,
        trails: [
          ...updatedTrail.map(trail => {
            if (trail.uuid === action.uuid) {
              return { ...trail, showAddNewTrail: false };
            } else {
              return trail;
            }
          })
        ]
      };
    case types.DELETE_TRAIL_LINE:
      return {
        ...state,
        trails: [...state.trails.filter(trail => trail.uuid !== action.data)]
      };
    case types.ADD_TO_TRAILS_CHECKOUT:
      let uniqueTrailsToAdd = action.data
        .map(newTrail => {
          if (!lineExistsCheck(state.trails, newTrail)) {
            return newTrail;
          } else return null;
        })
        .filter(trail => trail !== null);
      return {
        ...state,
        trails: [
          ...state.trails,
          ...uniqueTrailsToAdd.map(trail => {
            return { ...trail, ...getNewTrailSignature() };
          })
        ]
      };
    case types.UPDATE_TRAIL_TITLE:
      return {
        ...state,
        trailTitle: action.trailTitle
      };
    case types.VALIDATE_TRAIL_TO_SAVE_FAILURE:
      return { ...state, error: action.error };
    case types.VALIDATE_TRAIL_TO_SAVE_SUCCESS:
      return { ...state, error: {} };
    case types.UPDATE_REORDERED_LIST_OF_TRAILS:
      return {
        ...state,
        trails: action.data
      };
    case types.TOGGLE_ADD_NEW_TRAIL_LINE_ICON:
      return {
        ...state,
        trails: [
          ...state.trails.map(trail => {
            if (trail.uuid === action.data) {
              return { ...trail, showAddNewTrail: !trail.showAddNewTrail };
            } else {
              return { ...trail, showAddNewTrail: false };
            }
          })
        ]
      };

    default:
      return state;
  }
};
export default trails;
