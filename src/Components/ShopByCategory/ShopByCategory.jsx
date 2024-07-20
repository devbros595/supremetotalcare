import React from "react";
import "./ShopByCategory.css";
import Tumbnail2 from "../Assets/category/skincare2.jpg";
import Tumbnail3 from "../Assets/category/accessories.jpg";
import { Link } from "react-router-dom";

export default function ShopByCategory() {
  return (
    <div className="ShopByCategory">
      <h1>Shop By Category</h1>
      <div className="category-container">
        <div className="category-item">
          <div className="category">
            <Link to="/fashion">
              <img src={Tumbnail3} alt="" />
              <div className="tumbnail-text">
                <h3>Fashion</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="category-item">
          <div className="category">
            <Link to="/skincare">
              <img src={Tumbnail3} alt="" />
              <div className="tumbnail-text">
                <h3>SkinCare</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="category-item">
          <div className="category">
            <Link to="/accessories">
              <img src={Tumbnail3} alt="" />
              <div className="tumbnail-text">
                <h3>Accessories</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
