import React from "react";
import "./CSS/AboutUs.css";
import "animate.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="heading">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <div className="sub-main-1">
          <div className="about-intro">
            <p>
              <b>Welcome</b> to our vibrant world of fashion and skincare, where
              authenticity meets elegance and natural beauty is celebrated. Our
              online store offers a unique blend of authentic Ankara styles and
              effective skincare solutions, designed to make you look and feel
              flawless every day.
            </p>
          </div>
          <div className="about-why-choose-us">
            <h5>Why Choose Us?</h5>
            <ul>
              <li>
                <b>Authentic African Designs:</b> Crafted with love and made to
                make you stand out.
              </li>
              <li>
                <b>High-Quality Fabrics & Prints:</b> Durable and beautiful
                materials that drape perfectly.
              </li>
              <li>
                <b>Natural, Gentle Formulas:</b> Suitable for all skin types and
                free from harsh chemicals.
              </li>
              <li>
                <b>Luxurious Moisturizing Products:</b> Deeply nourishing with
                long-lasting fragrances.
              </li>
              <li>
                <b>Customer-Centric Shopping Experience:</b> Fast, secure
                checkout, easy returns, and dedicated support.
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-main-2">
          <div className="about-offering">
            <h5>Our Offering</h5>
            <h6>Exquisite Ankara Collections</h6>
            <p>
              Discover an array of stunning Ankara dresses, skirts, pantsuits,
              and accessories. Each piece is meticulously crafted with premium
              fabrics and bold, beautiful prints, ensuring you stand out on any
              occasion. Embrace your inner fashion icon with styles that flatter
              every figure.
            </p>
            <h6>Natural Skin Care Solutions</h6>
            <p>
              Pamper your skin with our curated collection of natural skincare
              products. Using nourishing ingredients and age-defying formulas,
              we address various skin concerns to leave you with a healthy,
              youthful glow. From gentle cleansers to revitalizing masks, we
              have everything you need for radiant skin.
            </p>
            <h6>Luxurious Body Care</h6>
            <p>
              Indulge in our rich body creams, infused with hydrating
              ingredients like shea butter and cocoa butter. Our creams deeply
              nourish and replenish your skin, leaving it soft, smooth, and
              irresistibly touchable. Enjoy a daily ritual of self-care with
              enticing fragrances and gentle, natural ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
