import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import HomeFooter from "./HomeFooter";

import { IntroduceLinesSVG, IntroduceTrailsSVG } from "../Icons";
import "./Home.scss";
import { Avatar } from "antd";
function returnMainTitle() {
  return (
    <>
      Read <span className="secondary-highlight">SMARTLY</span>
      <br /> with the help of Rastero
    </>
  );
}
const Home = () => {
  return (
    <div className="home">
      <div className="home-page-grids">
        <div className="home-page-hero">{returnMainTitle()}</div>
        <div className="home-page-gradient-section">
          <div className="section-highlight">Who is Rastero</div>
          <div className="home-page-gradient-section-carousel-wrapper">
            <HomePageCarousel />
          </div>
        </div>
        <div className="home-page-info-section">
          <div></div>
          <div></div>
          <div>
            <IntroduceLinesSVG />
          </div>
          <div className="home-page-info-section-container">
            <div className="home-page-info-section-title">Rastero Answer Back</div>
            <div className="home-page-info-section-sub-title">
              Ask any question to Rastero and get your answer from the book. Its like asking your friend in a natural way
            </div>
            <div className="home-page-info-section-cta">
              <button className="push-button primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="home-page-info-section">
          <div></div>
          <div></div>
          <div className="home-page-info-section-container right-shift">
            <div className="home-page-info-section-title">Introducing Trails</div>
            <div className="home-page-info-section-sub-title">
              Trails are bunch of lines, capturing the best parts of your reading experience. You can make it even more personal by adding in your
              content.
            </div>
            <div className="home-page-info-section-cta">
              <button className="push-button primary">Get Started</button>
            </div>
            <div className="right-shift"></div>
          </div>
          <div className="right-shift">
            <IntroduceTrailsSVG />
          </div>
        </div>
        <div className="home-page-testimonial-section">
          <button className={"push-button secondary"}>
            <div className="home-page-testimonial-section-reviewer-detail">
              <Avatar src="https://pbs.twimg.com/profile_images/1500914711617015809/eFzyYWjS_400x400.jpg" /> <b>Jack Butcher</b>, Founder, Visualize
              value
            </div>
            <div className="home-page-testimonial-section-text">“Really cool idea, can see it evolving in a lot of interesting ways. Nice work”</div>
          </button>
          <div className="home-page-testimonial-section-cta">
            <button className="push-button primary">Get Started</button>
          </div>
        </div>
        <HomeFooter/>
      </div>
    </div>
  );
};

export default Home;
