import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
