import logo from "./logo.png";
import "./App.scss";

import UploadButton from "./UploadButton/UploadButton";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>Read what you need</h1>
      <div className="container">
        <div className="row">
          <UploadButton />
        </div>
      </div>
    </div>
  );
}

export default App;
