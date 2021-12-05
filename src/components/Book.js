import "./App.scss";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import UploadButton from "./UploadButton/UploadButton";
import BookList from "./BooksList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>My books</h1>
          <div className="breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
              <Link to={`/user`}>Profile</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>My books</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <UploadButton />
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
