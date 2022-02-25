import React from "react";
import "./FileTags.scss";

const FileTags = ({ tags }) => {
  return (
    <div className="file-tags">
      <div className="file-tags-header">Tags in this book</div>
      <div className="file-tags-item-wrapper">
        {tags.map(tag => {
          return <div>{tag.tag}</div>;
        })}
      </div>
    </div>
  );
};

export default FileTags;
