import logo from "./logo.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Read what you need</h1>
      </header>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">Column</div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
