import { useRef } from "react";
import Slider from "react-slick";

import reviews from "../../../db/reviews.json";
import { CarouselItem } from "./CarouselItem";
import "./slider.css";

export const Carousel = () => {
  // eslint-disable-next-line no-unused-vars
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    className: "carousel",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {reviews.map((review, index) => {
        return <CarouselItem item={review} key={index} />;
      })}
    </Slider>
  );
};
