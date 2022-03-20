import React from "react";
import { connect } from "react-redux";

import "./Navbar.scss";

import NavbarAuth from "./NavbarAuth";
import NavbarNonAuth from "./NavbarNonAuth";

const Navbar = ({ isAuthUser }) => {
  console.log('in navbar ', isAuthUser)
  return <div className="nav-bar-wrapper">{isAuthUser ? <NavbarAuth /> : <NavbarNonAuth />}</div>;
};
const mapStateToProps = state => ({
  isAuthUser: state.userWrapper.isAuthUser
});

const actionCreators = {};
export default connect(mapStateToProps, actionCreators)(Navbar);
