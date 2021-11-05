import "./App.scss";

import UploadButton from "./UploadButton/UploadButton";
import BookList from "./BooksList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Read what you need</h1>
      <div className="container">
        <div className="row">
          <UploadButton />
        </div>
        <div className="row">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
