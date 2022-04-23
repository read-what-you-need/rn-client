import React from "react";
import { connect } from "react-redux";
import { filtersCollapsible, showLikedLines, showUnReadLines, sortAndArrangeLinesBy } from "../../actions";

import { RightExpandIcon, LeftCollapseIcon, SettingsIcon, SortIcon } from "../Icons";

import "./LineFilters.scss";

const LineFilters = ({
  isCollapsed,
  filtersCollapsible,
  showLikedLines,
  showUnReadLines,
  arrangeBy,
  orderBy,
  lineFilterStatus,
  sortAndArrangeLinesBy
}) => {
  return (
    <div className={`line-filters-wrapper sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div
        className="line-filters-collapse-button"
        onClick={() => {
          filtersCollapsible();
        }}>
        {!isCollapsed ? <LeftCollapseIcon /> : <RightExpandIcon />}
      </div>
      <div style={{ opacity: `${isCollapsed ? 0 : 1}` }}>
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
            <button className={`push-button ${lineFilterStatus === -1 ? "secondary" : "not-selected"}`}>
              <span className="line-filters-item-text" onClick={() => showUnReadLines()}>
                Unread
              </span>
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isCollapsed: state.filtersWrapper?.isCollapsed,
  lineFilterStatus: state.filtersWrapper?.filters?.feedback,
  arrangeBy: state.filtersWrapper?.filters?.arrangeBy,
  orderBy: state.filtersWrapper?.filters?.orderBy
});
const actionCreators = {
  filtersCollapsible,
  showLikedLines,
  showUnReadLines,
  sortAndArrangeLinesBy
};
export default connect(mapStateToProps, actionCreators)(LineFilters);
