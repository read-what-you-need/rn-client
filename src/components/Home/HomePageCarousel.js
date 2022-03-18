import React from "react";
import { Carousel } from "antd";
import "./HomePageCarousel.scss";
const HomePageCarousel = () => {

  return (
    <div className="home-page-carousel">
      <Carousel  effect="fade">
        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title"></div>
              <div className="home-page-carousel-card-sub-title">Rastero is an AI-based model, who sorts out best important lines from your book</div>
            </div>
            <div className="home-page-carousel-card-animation">Animation</div>
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
            <div className="home-page-carousel-card-animation">Animation</div>
          </div>
        </div>

        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title">Creates tag automatically</div>
              <div className="home-page-carousel-card-sub-title">
              All content is explorable based on tags created from your book/file which act as chapter or title 
              </div>
            </div>
            <div className="home-page-carousel-card-animation">Animation</div>
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
