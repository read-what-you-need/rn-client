import React from "react";
import { connect } from "react-redux";
import { filtersCollapsible } from "../../actions";

import { RightExpandIcon, LeftCollapseIcon, SettingsIcon, SortIcon } from "../Icons";

import "./LineFilters.scss";

const LineFilters = ({ isCollapsed, filtersCollapsible }) => {
  return (
    <div className={`line-filters-wrapper sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className={"line-filters-header"}>
        Filters <SettingsIcon />
      </div>
      <div
        className="line-filters-collapse-button"
        onClick={() => {
          filtersCollapsible();
        }}>
        {!isCollapsed ? <LeftCollapseIcon /> : <RightExpandIcon />}
      </div>
      <div className={"line-filters-sub-header"}>Lines</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">Read</span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">Not read</span>
          </button>
        </div>
      </div>

      <div className={"line-filters-header"}>
        Sort <SortIcon />
      </div>

      <div className={"line-filters-sub-header"}>Position in book</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">Start</span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">End</span>
          </button>
        </div>
      </div>

      <div className={"line-filters-sub-header"}>Score</div>
      <div className="line-filters-item-wrapper">
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">High</span>
          </button>
        </div>
        <div className="line-filters-item">
          <button className="push-button not-selected">
            <span className="line-filters-item-text">Low</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isCollapsed: state.filtersWrapper?.isCollapsed
});
const actionCreators = {
  filtersCollapsible
};
export default connect(mapStateToProps, actionCreators)(LineFilters);
