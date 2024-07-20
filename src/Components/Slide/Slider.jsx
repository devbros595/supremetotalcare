import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slide/Slider.css";
import Slide1 from "../Assets/Slides/slider_1.jpg";

export default function MyCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Slide1} alt="Image 1" />
        <div className="slide-text">
          <h1>
            GET <em>50%</em> DISCOUNT ON
            <br /> EXCLUSIVES
          </h1>
          <p>
            Fashion <i class="fa-solid fa-arrow-right fa-flip"></i> SkinCare <i class="fa-solid fa-arrow-right fa-flip"></i> Accessories
          </p>
        </div>
      </div>
    </Slider>
  );
}
