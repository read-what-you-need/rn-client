import React from "react";
import "./FileTags.scss";
import { RightExpandIcon } from "../Icons";

const FileTags = ({ tags }) => {
  return (
    <div className="file-tags">
      <div className="file-tags-header">Tags in this book</div>
      <div className="file-tags-expand-icon">
        <RightExpandIcon />
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
