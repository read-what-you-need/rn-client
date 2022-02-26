import React from "react";
import { connect } from "react-redux";

import { tagsCollapsible } from "../../actions";

import { RightExpandIcon, LeftCollapseIcon } from "../Icons";
import "./FileTags.scss";

const FileTags = ({ tags = [], isCollapsed, tagsCollapsible }) => {
  return (
    <div className={`file-tags sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className={"file-tags-header"}>Tags in this book</div>
      <div
        className="file-tags-collapse-button"
        onClick={() => {
          tagsCollapsible();
        }}>
        {!isCollapsed ? <LeftCollapseIcon /> : <RightExpandIcon />}
      </div>
      <div className="file-tags-item-wrapper">
        {tags.map(tag => {
          return (
            <div className="file-tags-item">
              <button className="push-button not-selected">
                <span className="file-tags-item-text">{tag.tag}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  tags: state.tagsWrapper?.tags || [],
  isCollapsed: state.tagsWrapper?.isCollapsed
});
const actionCreators = { tagsCollapsible };
export default connect(mapStateToProps, actionCreators)(FileTags);
