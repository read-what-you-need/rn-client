import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import userApi from "../../api/user";

import "./Navbar.scss";

const Navbar = () => {
  const [isUserAuth, setIsUserAuth] = useState("loading...");
  useEffect(() => {
    userApi.isUserAuth().then(res => {
      setIsUserAuth(res);
    });
  }, []);
  return (
    <div className="action-nav-bar">
      {isUserAuth ? (
        <>
          <span className="nav-button">
            <Link to={`/user`}>Home</Link>
          </span>
          <span className="nav-button">
            / <Link to={`/logout`}>Logout</Link>
          </span>
        </>
      ) : (
        <>
          <span className="nav-button">
            <Link to={`/`}>Home</Link>
          </span>
          <span className="nav-button">
            / <Link to={`/signin`}>Login</Link>
          </span>
          <span className="nav-button">
            / <Link to={`/signup`}>Signup</Link>
          </span>
        </>
      )}
      <span className="nav-button">/ Auth status : {isUserAuth.toString()}</span>
    </div>
  );
};

export default Navbar;
