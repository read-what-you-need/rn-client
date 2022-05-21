import React from "react";
import { connect } from "react-redux";
import { filtersCollapsible, showLikedLines, showUnReadLines, sortAndArrangeLinesBy } from "../../actions";
import LineStatusFilters from "./LineStatusFilters";
import LineSortFilters from "./LineSortFilters";

import { RightExpandIcon, LeftCollapseIcon } from "../Icons";

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
        <LineStatusFilters lineFilterStatus={lineFilterStatus} showLikedLines={showLikedLines} showUnReadLines={showUnReadLines} />
        <LineSortFilters arrangeBy={arrangeBy} orderBy={orderBy} sortAndArrangeLinesBy={sortAndArrangeLinesBy} />
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
