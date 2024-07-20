import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrum.css";
import arrowIcon from "../Assets/data/breadcrum_arrow.png";

export default function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      <Link style={{textDecoration:"none"}} to="/">SHOP</Link>
      <img src={arrowIcon} alt="" />
      <Link style={{textDecoration:"none"}} to={`/${product.category}`}>{product.category}</Link>
      <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
}
