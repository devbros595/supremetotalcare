import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slide/Slider.css";
import 'animate.css';
import Slide1 from "../Assets/bg.png";
import Slide2 from "../Assets/fashion.webp";

export default function MyCarousel() {
  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    fade:true,
    
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="image-container-2">
          <h1 className="animate__animated animate__slideInLeft ">
            Shop luxuries at your favourite online
            <br /> store{" "}
            <i
              class="fa-solid fa-bag-shopping fa-fade fa-xs "
              style={{ color: "#ffffff" }}
            ></i>
          </h1>
          <img src={Slide2} alt="Image 2" />
        </div>
      </div>
      <div className="slide">
        <div className="image-container">
          <h1>Quality african fabrics</h1>
          <img src={Slide1} alt="Image 1" />
        </div>
      </div>
    </Slider>
  );
}
