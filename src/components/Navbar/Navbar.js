import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ session }) => {
  return (
    <div className="action-nav-bar">
       {session? <NavbarAuth/> : <NavbarUnAuth />}
      <span className="nav-button">/ Auth status : {session.toString()}</span>
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
