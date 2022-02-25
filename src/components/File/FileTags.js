import React, { useState } from "react";
import { RightExpandIcon, LeftCollapseIcon } from "../Icons";
import "./FileTags.scss";

const FileTags = ({ tags }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`file-tags sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className={"file-tags-header"}>Tags in this book</div>
      <div
        className="file-tags-collapse-button"
        onClick={() => {
          setIsCollapsed(!isCollapsed);
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

export default FileTags;
