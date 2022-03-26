import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import HomeFooter from "./HomeFooter";

import sample from "./Peek 2022-03-26 07-21.mp4";
import sampleTrail from "./Peek 2022-03-26 08-04.mp4";

import "./Home.scss";
import { Avatar } from "antd";
function returnMainTitle() {
  return (
    <div>
      Read <span className="secondary-highlight">SMARTLY</span>
      <br /> with the help of Rastero
    </div>
  );
}
const Home = () => {
  return (
    <div className="home">
      <div className="home-page-grids">
        <div className="home-page-hero">
          <div></div>
          {returnMainTitle()}
        </div>
        <div className="home-page-gradient-section">
          <div className="section-highlight">Who is Rastero</div>
          <div className="home-page-gradient-section-carousel-wrapper">
            <HomePageCarousel />
          </div>
        </div>
        <div className="home-page-info-section">
          <div></div>
          <div></div>
          <div className="home-page-info-video-container">
            <video className="home-page-info-video yellow-shadow" autoPlay loop muted>
              <source src={sample} type="video/mp4" />
            </video>
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
          <div className="home-page-info-video-container right-shift">
            <video className="home-page-info-video" autoPlay loop muted>
              <source src={sampleTrail} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="home-page-testimonial-section">
          <div className="home-page-testimonial-section-wrapper">
            <button className={"push-button secondary"}>
              <div className="home-page-testimonial-section-reviewer-detail">
                <Avatar src="https://pbs.twimg.com/profile_images/1506648005671325708/Pr0nYzxU_400x400.jpg" size="large" /> <b>Jack Butcher</b>,
                Founder, Visualize value
              </div>
              <div className="home-page-testimonial-section-text">
                “Really cool idea, can see it evolving in a lot of interesting ways. Nice work”
              </div>
            </button>
            <div className="home-page-testimonial-section-cta">
              <button className="push-button primary">Get Started</button>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
