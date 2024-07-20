import React, { useContext } from "react";
import "./ProductDisplay.css";
import startIcon from "../Assets/data/star_icon.png";
import startDullIcon from "../Assets/data/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* {product.description} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
          vitae blanditiis, laboriosam nihil quidem consequatur quis mollitia
          saepe accusamus.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>2XL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
        <div className="productdisplay-category-tag">
          <p>
            <span>Category:</span> {product.category}
          </p>
          <p>
            <span>Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}
