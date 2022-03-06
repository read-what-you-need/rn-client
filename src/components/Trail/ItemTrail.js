import React from "react";
import { connect } from "react-redux";
import { toggleNewUserTrailLine, getAddNewTrailIsShown, addNewTrailLine, deleteTrailLine } from "../../actions";

import InputTrail from "./InputTrail";
import { AddIcon, DeleteIcon, DragabbleSelectIcon, RemoveMinusIcon } from "../Icons";
import "./ItemTrail.scss";
const ItemTrail = ({ trail = {}, toggleNewUserTrailLine, isAddNewTrailActive, addNewTrailLine, deleteTrailLine }) => {
  return (
    <div>
      <div className="item-trail-wrapper">
        <div className="item-draggable">
          <DragabbleSelectIcon />
        </div>
        <div className="item-trail">{trail?.line}</div>
        <div className="item-trail-action-button">
          <button onClick={() => deleteTrailLine({ uuid: trail.uuid })}>
            <RemoveMinusIcon />
          </button>
        </div>
        {isAddNewTrailActive && (
          <>
            <div className="item-trail-action-button">
              <button onClick={() => toggleNewUserTrailLine({ uuid: trail.uuid })}>
                <DeleteIcon />
              </button>
            </div>
            <div className="item-trail-input">
              <InputTrail addNewTrailLine={addNewTrailLine} uuid={trail.uuid} />
            </div>
          </>
        )}
      </div>

      {!isAddNewTrailActive && (
        <div className="item-trail-add-button">
          <button onClick={() => toggleNewUserTrailLine({ uuid: trail.uuid })}>
            <AddIcon />
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  trails: state.trailsWrapper.trails,
  isAddNewTrailActive: getAddNewTrailIsShown({ state, uuid: ownProps.trail?.uuid })
});

const actionCreators = { toggleNewUserTrailLine, addNewTrailLine, deleteTrailLine };
export default connect(mapStateToProps, actionCreators)(ItemTrail);
