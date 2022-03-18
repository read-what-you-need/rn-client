import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import "./Home.scss";
function returnMainTitle() {
  return (
    <>
      Read <span className="secondary-highlight">SMARTLY</span>
      <br /> in less time with the help of Rastero
    </>
  );
}
const Home = () => {
  return (
    <div className="home">
      <div className="home-page-grids">
        <div className="home-page-hero">{returnMainTitle()}</div>
        <div className="home-page-gradient-section">
          <span className="secondary-highlight">SMARTLY</span>
          <span className="secondary-highlight">SMARTLY</span>
        </div>
        <div className="home-page-info-section">
          <div></div>
          <div></div>
          <div>anim 1</div>
          <div className="home-page-info-section-container">
            <div className="home-page-info-section-title">title 1</div>
            <div className="home-page-info-section-sub-title">
              Ask any question to Rastero and he will give you answer from the book. Its like asking your friend in a natural way
            </div>
            <div className="home-page-info-section-cta">
              <button className="push-button primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="home-page-info-section">
          <div></div>
          <div></div>
          <div className="home-page-info-section-container">
            <div className="home-page-info-section-title">title 2</div>
            <div className="home-page-info-section-sub-title">
              Trails are bunch of lines, capturing the best parts of your reading experience. You can make it even more personal by adding in your
              content.
            </div>
            <div className="home-page-info-section-cta">
              <button className="push-button primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="home-page-testimonial-section">Tweet fame</div>
      </div>
    </div>
  );
};

export default Home;
