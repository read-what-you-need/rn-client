import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import "./BookInfoCard.scss";
import fileApi from "../../api/file";
import tagsApi from "../../api/tag";

const BookInfoCard = ({ trailId }) => {
  const [fileDetails, setFileDetails] = useState({});
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fileApi.getFileByTrailId({ trailId }).then(response => {
      setFileDetails(response.data);
      tagsApi.getTags({ fileId: response.data.file_id }).then(tags => {
        setTags(tags.data);
      });
    });
  }, []);
  return (
    <div className="book-info-card">
      <div className="book-info">
        <div className="book-info-profile-picture">
          <div className="profile-icon">
            <Image preview={false} src={"https://picsum.photos/200/300"} />
          </div>
        </div>
        <div className="book-info-title">Book name</div>
        <div className="book-info-name">{fileDetails?.name}</div>
      </div>
      <div className="book-info-tags-wrapper">
        <div className="book-info-tags-title">tags</div>
        <div className="book-info-tags">
          {tags.map(tag => {
            return (
              <Link to={`/file/${fileDetails?.file_id}?tag=${tag.tag}`} key={tag.tag_file_id}>
                <span className="book-info-tag">{tag.tag}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
