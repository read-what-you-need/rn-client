import React from "react";
import { connect } from "react-redux";

import { tagsCollapsible, onTagPress } from "../../actions";

import { RightExpandIcon, LeftCollapseIcon } from "../Icons";
import "./FileTags.scss";

const FileTags = ({ tags = [], isCollapsed, tagsCollapsible, onTagPress, clickedTag }) => {
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
              <button
                className={`push-button ${clickedTag === tag.tag ? "secondary" : "not-selected"}`}
                onClick={() => onTagPress({ tag: tag.tag, tagId: tag.file_tag_id })}>
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
  isCollapsed: state.tagsWrapper?.isCollapsed,
  clickedTag: state.tagsWrapper?.pressedTag
});
const actionCreators = { tagsCollapsible, onTagPress };
export default connect(mapStateToProps, actionCreators)(FileTags);
