import React from "react";
import "./FileTags.scss";

const FileTags = ({ tags }) => {
  return (
    <div className="file-tags">
      List of tags:
      <div>
        {tags.map(tag => {
          return <div>{tag.tag}</div>;
        })}
      </div>
    </div>
  );
};

export default FileTags;
