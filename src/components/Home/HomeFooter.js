import React from "react";
import "./HomeFooter.scss";
import { useLocation } from "react-router-dom";

function decideToShowFooter(currentPagePath) {
  const nonAcceptedPaths = ["/signup", "/signin", "/trail", "/trails", "/trail/list", "/trails/global", "/recent"];
  if (nonAcceptedPaths.includes(currentPagePath)) {
    return false;
  } else if (currentPagePath.includes("file/")) {
    return false;
  } else return true;
}
const HomeFooter = () => {
  let location = useLocation();
  let currentPagePath = location.pathname;
  let showFooter = decideToShowFooter(currentPagePath);
  return (
    <>
      {showFooter && (
        <div className="home-footer">
          <div className="home-footer-item" id="beta">
            <sup>†</sup>
            <a rel="noopener noreferrer" href="https://forms.gle/U6Yw5FrdeszpFZ6m8" target="_blank">
              Contact us.
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeFooter;
