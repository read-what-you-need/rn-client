import React from "react";
import "./NavbarAuth.scss";
import { useLocation } from "react-router-dom";

import NavbarHomePageAuth from "./NavbarHomePageAuth";
import NavbarFilePageAuth from "./NavbarFilePageAuth";


const getCurrentPathWithoutLastPart = location => {
  return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
};

const NavbarAuth = () => {
  let location = useLocation();
  let currentPagePath = getCurrentPathWithoutLastPart(location);
  let isCurrentPageFileView = currentPagePath === "/file";
  return isCurrentPageFileView ? <NavbarFilePageAuth/> : <NavbarHomePageAuth />;
};
export default NavbarAuth;
