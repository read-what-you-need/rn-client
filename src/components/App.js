import "./App.scss";

import UploadButton from "./UploadButton/UploadButton";

function App() {
  return (
    <div className="App">
      <h1 className="title">Read what you need</h1>
      <div className="container">
        <div className="row">
          <UploadButton />
        </div>
      </div>
    </div>
  );
}

export default App;
