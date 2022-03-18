import React from "react";
import { connect } from "react-redux";

import "./Navbar.scss";

import NavbarAuth from "./NavbarAuth";
import NavbarNonAuth from "./NavbarNonAuth";

const Navbar = ({ tokenUpdated }) => {
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarNonAuth />}</div>;
};
const mapStateToProps = state => ({
  tokenUpdated: state.userWrapper.user.tokenUpdateCount
});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(Navbar);
