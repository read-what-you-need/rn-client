import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Book from "./components/Book";
import Feed from "./components/Feed/Feed";
import File from "./components/File/File";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/User/UserProfile";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Book />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/file/:id" element={<File />}></Route>
        <Route path="/user" element={<UserProfile />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
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
