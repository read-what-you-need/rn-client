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
  function getCurrentViewNavBar() {
    if (currentPagePath === "/file") {
      return <NavbarFilePageAuth />;
    } else if (currentPagePath === "/trail") {
      return <NavbarHomePageAuth />;
    } else {
      return <NavbarHomePageAuth />;
    }
  }
  return getCurrentViewNavBar();
};
export default NavbarAuth;
