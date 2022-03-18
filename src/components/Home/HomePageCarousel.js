import React from "react";
import { Carousel } from "antd";
import "./HomePageCarousel.scss";
import { IntroduceListFormSVG, IntroduceProductSVG } from "../Icons";

const HomePageCarousel = () => {
  return (
    <div className="home-page-carousel">
      <Carousel effect="fade">
        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title"></div>
              <div className="home-page-carousel-card-sub-title">Rastero is an AI-based model, who sorts out best important lines from your book</div>
            </div>
            <div className="home-page-carousel-card-animation">
              <IntroduceProductSVG />
            </div>
          </div>
        </div>

        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title">List form representation</div>
              <div className="home-page-carousel-card-sub-title">
                Rastero, doesn't present you with bulky paragraphs, instead it shows small detailed lines in a list wise manner
              </div>
            </div>
            <div className="home-page-carousel-card-animation">
              <IntroduceListFormSVG />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
