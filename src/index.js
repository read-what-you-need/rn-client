import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.scss";
import Book from "./components/Book/BookPage";
import BookExplore from "./components/Book/BookExplore";
import CreateTrail from "./components/Trail/CreateTrail";
import LinesTrail from "./components/Trail/LinesTrail";
import GlobalTrail from "./components/Trail/GlobalTrail";
import ReviewTrail from "./components/Trail/ReviewTrail";
import ListTrail from "./components/Trail/ListTrail";

import Feed from "./components/Feed/Feed";
import File from "./components/File/File";
import Home from "./components/Home/Home";
import HomeFooter from "./components/Home/HomeFooter";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/User/UserProfile";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import UserRecent from "./components/User/UserRecent";

import RequireAuth from "./components/Auth/RequireAuth";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import store from "./reduxStore";
import axios from "axios";
import setupAxios from "./api/setupAxios";
setupAxios(axios, store);

const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route
          path="/"
          element={
            <RequireAuth redirectTo="/intro">
              <Navigate to={"/recent"} />
            </RequireAuth>
          }></Route>
        <Route
          path="/books"
          element={
            <RequireAuth redirectTo="/signin">
              <Book />
            </RequireAuth>
          }></Route>
        <Route
          path="/bookmarks"
          element={
            <RequireAuth redirectTo="/signin">
              <Bookmarks />
            </RequireAuth>
          }></Route>
        <Route
          path="/recent"
          element={
            <RequireAuth redirectTo="/signin">
              <UserRecent />
            </RequireAuth>
          }></Route>
        <Route
          path="trail/create"
          element={
            <RequireAuth redirectTo="/signin">
              <CreateTrail />
            </RequireAuth>
          }
        />
        <Route path="trails/global" element={<GlobalTrail />}></Route>
        <Route path="trail/:id" element={<LinesTrail />} />
        <Route
          path="trail/list"
          element={
            <RequireAuth redirectTo="/signin">
              <ListTrail />
            </RequireAuth>
          }
        />
        <Route
          path="trail/review"
          element={
            <RequireAuth redirectTo="/signin">
              <ReviewTrail />
            </RequireAuth>
          }
        />
        <Route path="/books/explore" element={<BookExplore />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/file/:id" element={<File />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route> */}
      </Routes>
      <HomeFooter />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
