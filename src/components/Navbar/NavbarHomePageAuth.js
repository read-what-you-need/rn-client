import React from "react";
import "./NavbarHomePageAuth.scss";
import UploadButton from "../UploadButton/UploadButton";
import { useNavigate, useLocation } from "react-router-dom";
import UserMenu from "../User/UserMenu";
import { BookOpenIcon, CompassIcon, Logo, GlobalIcon } from "../Icons";
import useWindowDimensions from "../../libs/useWindowDimensions";

const NavbarHomePageAuth = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  let isScreenSmall = width < 700;
  const currentPagePath = location.pathname;
  const navigateItems = [
    { icon: <BookOpenIcon />, displayText: "Your Books", path: "/recent" },
    { icon: <CompassIcon />, displayText: "Explore Books", path: "/books/explore" },
    { icon: <GlobalIcon />, displayText: "Global Trails", path: "/trails/global" }
  ];
  return (
    <div className="nav-bar-auth-wrapper">
      <span className="nav-logo" onClick={() => navigate("/recent")}>
        <Logo />
      </span>
      {!isScreenSmall && <div className="nav-central-action-wrapper">
        {navigateItems.map(item => (
          <button className={`nav-central-action-icon-button ${currentPagePath === item.path ? "active" : ""}`} onClick={() => navigate(item.path)}>
            {item?.icon}
            {item.displayText}
          </button>
        ))}
      </div>}
      <div className="nav-corner-action-wrapper">
        <span className="nav-primary-action-button">
          <UploadButton />
        </span>
        <span className="nav-logo">
          <UserMenu />
        </span>
      </div>
    </div>
  );
};

export default NavbarHomePageAuth;
