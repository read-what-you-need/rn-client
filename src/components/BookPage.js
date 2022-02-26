import "./App.scss";
import BookList from "./BooksList";
import { Link } from "react-router-dom";
import { RightArrowIcon  } from "./Icons";

import "./BookPage.scss";
function Book() {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-breadcrumb">
          <div>Account</div>
          <RightArrowIcon />
          <div>
            <Link to={`/books`}>Books</Link>
          </div>
        </div>
        <BookList />
      </div>
    </div>
  );
}

export default Book;
