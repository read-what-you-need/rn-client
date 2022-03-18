import React from "react";
import { useNavigate } from "react-router-dom";

import { Logo } from "../Icons";

import "./NavbarNonAuth.scss";

const NavbarNonAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-non-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>

      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button" onClick={() => navigate("/signup")}>
          <button className="push-button primary">Signup</button>
        </span>
        <span className="nav-primary-action-button" onClick={() => navigate("/signin")}>
          <button className="push-button not-selected">Login</button>
        </span>
      </div>
    </div>
  );
};

export default NavbarNonAuth;
