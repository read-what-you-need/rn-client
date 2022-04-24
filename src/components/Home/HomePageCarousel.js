import React from "react";
import { Carousel } from "antd";
import "./HomePageCarousel.scss";
import { IntroduceListFormSVG, IntroduceAddonToolsSVG } from "../Icons";

const HomePageCarousel = () => {
  return (
    <div className="home-page-carousel">
      <Carousel effect="fade">
        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title">AI book explorer</div>
              <div className="home-page-carousel-card-sub-title">Rastero is an AI-based bot, who helps you find relevant lines for you</div>
            </div>
            <div className="home-page-carousel-card-animation">
              <video className="home-page-carousel-card-video reduce-size" autoPlay loop muted>
                <source src={"https://rastero-objects.s3.ap-south-1.amazonaws.com/public/assets/video-casts/book-scan.mp4"} type="video/mp4" />
              </video>
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

        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title">Creates automatic topics</div>
              <div className="home-page-carousel-card-sub-title">
                All content is explorable based on topics created from your book which acts as hooks to explore the book
              </div>
            </div>
            <div className="home-page-carousel-card-animation">
              <video className="home-page-carousel-card-video reduce-size" autoPlay loop muted>
                <source src={"https://rastero-objects.s3.ap-south-1.amazonaws.com/public/assets/video-casts/tag-explore.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div>
          <div className="home-page-carousel-card">
            <div className="home-page-carousel-card-info">
              <div className="home-page-carousel-card-title">Add-on Tool kit</div>
              <div className="home-page-carousel-card-sub-title">
                Rastero has features that allows you to engage with the lines and make them yours.
              </div>
            </div>
            <div className="home-page-carousel-card-animation">
              <IntroduceAddonToolsSVG />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;
