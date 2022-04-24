import BookList from "../BooksList";

import "./BookPage.scss";
function Book() {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-header-wrapper">
          <div className="book-page-header-text">Your books</div>
        </div>
        <BookList />
      </div>
    </div>
  );
}

export default Book;
