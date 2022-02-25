import React from "react";
import "./NavbarAuth.scss";
import { useNavigate } from "react-router-dom";
import UploadButton from "../UploadButton/UploadButton";


import { UserIcon, BookOpenIcon, CompassIcon, Logo } from "../Icons";

const NavbarAuth = () => {
  let navigate = useNavigate();
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/")}>
        <Logo />
      </span>
      <div className="nav-central-action-icons">
        <button className="nav-central-action-icon-button" onClick={() => navigate("/books")}>
          <BookOpenIcon />
          Your Books
        </button>
        <button className="nav-central-action-icon-button">
          <CompassIcon /> Explore
        </button>
        <button className="nav-central-action-icon-button">Global Trails</button>
      </div>
      <div className="nav-upload-user-profile-button-wrapper">
        <span className="nav-primary-action-button">
          <UploadButton />
        </span>
        <UserIcon />
      </div>
    </div>
  );
};
export default NavbarAuth;