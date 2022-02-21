import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import userApi from "../../api/user";

import { UploadIcon, UserIcon, BookOpenIcon, CompassIcon, Logo } from "../Icons";

const Navbar = () => {
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarUnAuth />}</div>;
};

const NavbarAuth = () => {
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo">
       <Logo/>
      </span>
      <div className="nav-central-action-icons">
        <button className="nav-central-action-icon-button">
         <BookOpenIcon/>Your Books
        </button>
        <button className="nav-central-action-icon-button">
         <CompassIcon/> Explore
        </button>
        <button className="nav-central-action-icon-button">Global Trails</button>
      </div>
      <div className="nav-upload-user-profile-button-wrapper">
        <button className="nav-primary-action-button">
         <UploadIcon/> Upload
        </button>
       <UserIcon/>
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
