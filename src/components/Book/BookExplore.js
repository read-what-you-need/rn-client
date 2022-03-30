import React from "react";
import "./BookPage.scss";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../Icons";
import BookSearch from "./BookSearch";

const BookExplore = () => {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-breadcrumb">
          <div>
            <Link to={`/profile`}>
              <span className="book-page-breadcrumb-text">Account</span>
            </Link>
          </div>
          <RightArrowIcon />
          <div>
            <Link to={`/books/explore`}>
              <span className="book-page-breadcrumb-text">Explore Books</span>
            </Link>
          </div>
        </div>
        <div className="book-page-header-wrapper">
          <div className="book-page-header-text">Search books from library </div>
        </div>
        <div className="book-page-search">
          <BookSearch />
        </div>
      </div>
    </div>
  );
};

export default BookExplore;
