import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  let isUserAuth = localStorage.getItem('token') ? true : false;
  return (
    <div className="action-nav-bar">
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
            localStorage.setItem("token", "");
            window.location.reload();
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
