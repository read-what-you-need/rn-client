import "./App.scss";
import BookList from "./BooksList";
import { Link } from "react-router-dom";
import { RightArrowIcon, SettingsIcon } from "./Icons";

import "./BookPage.scss";
function Book() {
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
            <Link to={`/books`}>
              <span className="book-page-breadcrumb-text">Books</span>
            </Link>
          </div>
        </div>
        <div className="book-page-header-wrapper">
          <div className="book-page-header-text">Your books</div>
          <div className="book-page-header-filter">
            <button className="push-button secondary-rect">
              <span className="book-page-header-filter-text">Filters</span> <SettingsIcon />
            </button>
          </div>
        </div>
        <BookList />
      </div>
    </div>
  );
}

export default Book;