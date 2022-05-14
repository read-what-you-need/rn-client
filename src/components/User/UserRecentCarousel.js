import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import BookCard from "../Book/BookCard";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./UserRecentCarousel.scss";

const UserRecentCarousel = ({ data }) => {
  const slider = useRef(null);
  const props = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: data.length < 3 ? data.length : 3,
    slidesToScroll: 1
  };
  return (
    <div className="user-recent-carousel">
      <Button className="user-recent-carousel-button-left" shape="circle" icon={<LeftOutlined />} onClick={() => slider.current.prev()} />
      <Carousel ref={slider} {...props}>
        {data.map((value, index) => {
          return (
            <div className={"item"} key={value.id}>
              <Link to={value.link}>
                <BookCard coverArtUrl={`https://picsum.photos/600/600?random=${index}`} title={value.description}/>
              </Link>
            </div>
          );
        })}
      </Carousel>
      <Button className="user-recent-carousel-button-right" shape="circle" icon={<RightOutlined />} onClick={() => slider.current.next()} />
    </div>
  );
};

export default UserRecentCarousel;
