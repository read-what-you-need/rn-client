import React from "react";
import "./HomeFooter.scss";
const HomeFooter = () => {
  return (
    <div className="home-footer">
      <div className="home-footer-item"></div>
      <div className="home-footer-item"></div>
      <div className="home-footer-item" id="beta"><sup>†</sup>Some features may not work as expected. Feedback welcome.</div>
      <div className="home-footer-item"></div>
    </div>
  );
};

export default HomeFooter;
