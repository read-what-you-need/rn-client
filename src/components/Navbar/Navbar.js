import React from "react";
import { connect } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import UploadButton from "../UploadButton/UploadButton";
import {getQuery } from '../../reducers'

import "./Navbar.scss";

import { UserIcon, BookOpenIcon, CompassIcon, Logo } from "../Icons";

const Navbar = ({query}) => {
  console.log(`query asked in file component is ${JSON.stringify(query)}`);
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarUnAuth />}</div>;
};

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

const mapStateToProps = (state) => ({
  query: getQuery(state)
})

export default connect(
  mapStateToProps
)(Navbar)
