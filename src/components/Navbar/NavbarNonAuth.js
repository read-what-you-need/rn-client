import React from "react";
import { useLocation } from "react-router-dom";
import "./NavbarNonAuth.scss";

import NavbarHomePageNonAuth from "./NavbarHomePageNonAuth";
import NavbarFilePageAuth from "./NavbarFilePageAuth";

const getCurrentPathWithoutLastPart = location => {
  return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
};

const NavbarNonAuth = () => {
  let location = useLocation();
  let currentPagePath = getCurrentPathWithoutLastPart(location);
  function getCurrentViewNavBar() {
    if (currentPagePath === "/file") {
      return <NavbarFilePageAuth />;
    }  else {
      return <NavbarHomePageNonAuth />;
    }
  }
  return getCurrentViewNavBar();
};
export default NavbarNonAuth;
