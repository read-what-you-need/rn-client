import "./App.scss";
import BookList from "./BooksList";
import "./BookPage.scss";
function Book() {
  return (
    <div className="book-page container">
      <div className="row">
        <div className="book-page-breadcrumb">Account Book</div>
        <BookList />
      </div>
    </div>
  );
}

export default Book;
