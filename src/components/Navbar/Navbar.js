import React from "react";
import "./Navbar.scss";

import NavbarAuth from "./NavbarAuth";
import NavbarNonAuth from "./NavbarNonAuth";

const Navbar = () => {
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarNonAuth />}</div>;
};

export default Navbar;
