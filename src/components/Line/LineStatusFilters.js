import React from "react";
import { SettingsIcon } from "../Icons";

const LineStatusFilters = ({ lineFilterStatus, showLikedLines, showUnReadLines }) => {
  return (
    <>
      <div className={"line-filters-header"}>
        Filters <SettingsIcon />
      </div>
      <div className={"line-filters-sub-header"}>Lines</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className={`push-button ${lineFilterStatus === 1 ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => showLikedLines()}>
              Liked
            </span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className={`push-button ${lineFilterStatus === 2 ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => showUnReadLines()}>
              Unread
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LineStatusFilters;
