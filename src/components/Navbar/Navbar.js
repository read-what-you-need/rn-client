import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="action-nav-bar">
      <span className="nav-button">
        <Link to={`/`}>Home</Link>
      </span>
      <span className="nav-button">
       / <Link to={`/signin`}>Login</Link>
      </span>
      <span className="nav-button">
        / <Link to={`/signup`}>Signup</Link>
      </span>
      <span className="nav-button">/ User auth status : {false.toString()}</span>
    </div>
  );
};

export default Navbar;
