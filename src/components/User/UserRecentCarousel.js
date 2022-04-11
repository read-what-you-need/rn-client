import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./UserRecentCarousel.scss";
const { Meta } = Card;

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
      <Button className="user-recent-carousel-button-left" shape="circle" icon={<LeftOutlined />} onClick={() => slider.current.next()} />
      <Carousel ref={slider} {...props}>
        {data.map((value, index) => {
          return (
            <div className={"item"} key={value.id}>
              <Link to={value.link}>
                <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={`https://picsum.photos/600/600?random=${index}`} />}>
                  <Meta description={value.description} />
                </Card>
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
