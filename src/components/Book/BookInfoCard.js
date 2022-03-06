import React from "react";
import "./BookInfoCard.scss";
const BookInfoCard = () => {
  return (
    <div className="book-info-card">
      <div className="book-info">
        <div className="book-info-profile-picture">
          <div className="profile-icon">Upload</div>
        </div>
        <div className="book-info-title">Book name</div>
        <div className="book-info-name">Sample long reallly hard to grow</div>
      </div>

      <div className="book-info-tags-wrapper">
        <div className="book-info-tags-title">tags</div>
        <div className="book-info-tags">
          <span className="book-info-tag">Power</span>
          <span className="book-info-tag">Tag</span>
          <span className="book-info-tag">Gesture</span>
          <span className="book-info-tag">Power</span>
          <span className="book-info-tag">Gesture</span>
          <span className="book-info-tag">TagGesture</span>
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
