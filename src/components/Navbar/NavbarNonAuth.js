import React from "react";
import { Link } from "react-router-dom";

const NavbarNonAuth = () => {
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

export default NavbarNonAuth;
