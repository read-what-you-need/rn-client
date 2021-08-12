import logo from "./logo.png";
import "./App.scss";

import LiveReadersTable from "./LiveReadersTable";

function App() {
  return (
    <div className="App">
      
        <img src={logo} alt="logo" />
        <h1>Read what you need</h1>
      
      <div className="container">
        <div className="row">
         
          <div className="col-sm-12 col-md-6 mx-auto mt-5">
            <input
              className="form-control"
              type="text"
              placeholder="search for books"
              aria-label="default input example"
            />
          </div>

          <LiveReadersTable />
        </div>
      </div>
    </div>
  );
}

export default App;
