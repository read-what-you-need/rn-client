import React from "react";
import "./NavbarHomePageAuth.scss";
import UploadButton from "../UploadButton/UploadButton";
import { useNavigate } from "react-router-dom";
import { UserIcon, BookOpenIcon, CompassIcon, Logo } from "../Icons";

const NavbarHomePageAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>
      <div className="nav-central-action-wrapper">
        <button className="nav-central-action-icon-button" onClick={() => navigate("/books")}>
          <BookOpenIcon />
          Your Books
        </button>
        <button className="nav-central-action-icon-button">
          <CompassIcon /> Explore
        </button>
        <button className="nav-central-action-icon-button">Global Trails</button>
      </div>
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button">
          <UploadButton />
        </span>
        <UserIcon />
      </div>
    </div>
  );
};

export default NavbarHomePageAuth;
