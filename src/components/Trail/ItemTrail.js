import React from "react";
import { connect } from "react-redux";
import { toggleNewUserTrailLine, getAddNewTrailIsShown } from "../../actions";

import InputTrail from "./InputTrail";
import { AddIcon, DeleteIcon, DragabbleSelectIcon } from "../Icons";
import "./ItemTrail.scss";
const ItemTrail = ({ trail = {}, toggleNewUserTrailLine, isAddNewTrailActive }) => {
  return (
    <>
      <div className="item-trail-wrapper">
        <div className="item-draggable">
          <DragabbleSelectIcon />
        </div>
        <div className="item-trail">{trail?.line}</div>
        {isAddNewTrailActive && (
          <>
            <div className="item-trail-action-button" onClick={() => toggleNewUserTrailLine({ uuid: trail.uuid })}>
              <DeleteIcon />
            </div>
            <div className="item-trail-input">
              <InputTrail />
            </div>
          </>
        )}
      </div>

      {!isAddNewTrailActive && (
        <div className="item-trail-add-button" onClick={() => toggleNewUserTrailLine({ uuid: trail.uuid })}>
          <AddIcon />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  trails: state.trailsWrapper.trails,
  isAddNewTrailActive: getAddNewTrailIsShown({ state, uuid: ownProps.trail.uuid })
});

const actionCreators = { toggleNewUserTrailLine };
export default connect(mapStateToProps, actionCreators)(ItemTrail);
