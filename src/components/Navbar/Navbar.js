import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import userApi from "../../api/user";

const Navbar = () => {
  let isUserAuth = localStorage.getItem('token') ? true : false;
  return (
    <div className="nav-bar-wrapper">
       {isUserAuth? <NavbarAuth/> : <NavbarUnAuth />}
      <span className="nav-button">/ Auth status : {isUserAuth.toString()}</span>
    </div>
  );
};

const NavbarAuth = () => {
  return (
    <>
      <span className="nav-button">
        <Link to={`/user`}>Home</Link>
      </span>
      <span className="nav-button">
        /{" "}
        <Link
          to={`/`}
          onClick={() => {
            userApi.logOutUser()
          }}>
          Logout
        </Link>
      </span>
    </>
  );
};

const NavbarUnAuth = () => {
  return (
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
  );
};

export default Navbar;
