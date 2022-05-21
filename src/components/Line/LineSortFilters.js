import React from "react";
import {  SortIcon } from "../Icons";

const LineStatusFilters = ({ arrangeBy, orderBy, sortAndArrangeLinesBy }) => {
  return (
    <>
      <div className={"line-filters-header"}>
        Sort <SortIcon />
      </div>

      <div className={"line-filters-sub-header"}>Position in book</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className={`push-button ${arrangeBy === "asc" && orderBy === "line_index" ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => sortAndArrangeLinesBy({ arrangeBy: "asc", orderBy: "line_index" })}>
              Start
            </span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className={`push-button ${arrangeBy === "desc" && orderBy === "line_index" ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => sortAndArrangeLinesBy({ arrangeBy: "desc", orderBy: "line_index" })}>
              End
            </span>
          </button>
        </div>
      </div>

      <div className={"line-filters-sub-header"}>Score</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className={`push-button ${arrangeBy === "desc" && orderBy === "score" ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => sortAndArrangeLinesBy({ arrangeBy: "desc", orderBy: "score" })}>
              High
            </span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className={`push-button ${arrangeBy === "asc" && orderBy === "score" ? "secondary" : "not-selected"}`}>
            <span className="line-filters-item-text" onClick={() => sortAndArrangeLinesBy({ arrangeBy: "asc", orderBy: "score" })}>
              Low
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LineStatusFilters;
