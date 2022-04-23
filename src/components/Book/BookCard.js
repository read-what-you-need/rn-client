import React from "react";
import "./BookCard.scss";
const BookCard = ({coverArtUrl, title}) => {
  return (
    <div className="book-card">
      <div className="book-card-cover">
        <img alt="example" src={coverArtUrl} />
      </div>
      <div className="book-card-meta-data-holder">
        <div className="book-card-meta-data-holder-text">{title}</div>
      </div>
    </div>
  );
};

export default BookCard;
