import React from "react";
import { connect } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {getQuery } from '../../reducers'

import "./Navbar.scss";

import NavbarAuth from "./NavbarAuth";
import NavbarNonAuth from "./NavbarNonAuth";

const Navbar = ({query}) => {
  console.log(`query asked in file component is ${JSON.stringify(query)}`);
  let isUserAuth = localStorage.getItem("token") ? true : false;
  return <div className="nav-bar-wrapper">{isUserAuth ? <NavbarAuth /> : <NavbarNonAuth />}</div>;
};


const mapStateToProps = (state) => ({
  query: getQuery(state)
})

export default connect(
  mapStateToProps
)(Navbar)
