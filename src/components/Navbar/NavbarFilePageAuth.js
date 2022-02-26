import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleBarLinesIcon, GreenCheckIcon, RasteroIcon, Logo } from "../Icons";
import { Input } from "antd";
import "./NavbarFilePageAuth.scss";

const NavbarFilePageAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>
      <div className="nav-central-action-wrapper">
        <div className="nav-central-action-logo">
          <RasteroIcon />
        </div>
        <Input placeholder="Ask any question. I’ll will try my best to find the answer!" />
      </div>
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button">
          <button className="push-button-icon-only secondary">
            <SimpleBarLinesIcon />
          </button>
        </span>
        <button className="push-button-icon-only primary">
          <GreenCheckIcon />
        </button>
      </div>
    </div>
  );
};

export default NavbarFilePageAuth;
