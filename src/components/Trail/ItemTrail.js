import React from "react";
import InputTrail from "./InputTrail";
import { AddIcon, DeleteIcon, DragabbleSelectIcon } from "../Icons";
import "./ItemTrail.scss";
const ItemTrail = ({ trail = {} }) => {
  return (
    <>
      <div className="item-trail-wrapper">
        <div className="item-draggable">
          <DragabbleSelectIcon />
        </div>
        <div className="item-trail">{trail?.line}</div>
        <>
          <div className="item-trail-action-button">
            <DeleteIcon />
          </div>
          <div className="item-trail-input">
            <InputTrail />
          </div>
        </>
      </div>

      <div className="item-trail-add-button">
        <AddIcon />
      </div>
    </>
  );
};

export default ItemTrail;
