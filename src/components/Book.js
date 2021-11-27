import "./App.scss";
import "antd/dist/antd.css";

import UploadButton from "./UploadButton/UploadButton";
import BookList from "./BooksList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h2>My books</h2>
          <UploadButton />
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
