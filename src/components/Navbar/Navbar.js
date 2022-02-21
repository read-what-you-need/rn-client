import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import userApi from "../../api/user";

import Logo from "../Icons/Logo.svg";
import BookOpenIcon from "../Icons/BookOpenIcon.svg";
import CompassIcon from "../Icons/CompassIcon.svg";
import UserIcon from "../Icons/UserIcon.svg";
import UploadIcon from "../Icons/UploadIcon.svg";

const Navbar = () => {
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarUnAuth />}</div>;
};

const NavbarAuth = () => {
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo">
        <img src={Logo} alt="logo" />
      </span>
      <div className="nav-central-action-icons">
        <button className="nav-central-action-icon-button">
          <img src={BookOpenIcon}></img>Your Books
        </button>
        <button className="nav-central-action-icon-button">
          <img src={CompassIcon} alt="logo" /> Explore
        </button>
        <button className="nav-central-action-icon-button">Global Trails</button>
      </div>
      <div className="nav-upload-user-profile-button-wrapper">
        <button className="nav-primary-action-button">
          <img src={UploadIcon} alt="logo" /> Upload
        </button>
        <img src={UserIcon} alt="Your profile" />
      </div>
    </div>
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
