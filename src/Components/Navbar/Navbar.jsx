import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchPopup from "../SearchPopUp/SearchBar";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <i id="toggler" class="fa-solid fa-xmark fa-2xl"></i>
        ) : (
          <i id="toggler" class="fa-solid fa-bars fa-2xl"></i>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <div className="nav-logo-text">
            <h3
              onClick={() => {
                setMenu("shop");
              }}
            >
              SupremeTotalCare<span class="material-symbols-outlined">spa</span>
            </h3>
          </div>
        </Link>
      </div>
      <ul className={`nav-menu ${showMenu ? "show slide-in" : ""}`}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="nav-item"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fashion");
          }}
          className="nav-item"
        >
          <Link to="/fashion">Fashion</Link>
          {menu === "fashion" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("skincare");
          }}
          className="nav-item"
        >
          <Link to="/skincare">SkinCare</Link>
          {menu === "skincare" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("accessories");
          }}
          className="nav-item"
        >
          <Link to="/accessories">Accessories</Link>
          {menu === "accessories" ? <hr /> : <></>}
        </li>
        <div className="nav-login show">
          {localStorage.getItem("auth-token") ? (
            <i
              class="fa-solid fa-right-from-bracket"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            ></i>
          ) : (
            <Link to="/login">
              <i class="fa-solid fa-user fa-lg"></i>
              <span>Login/Signup</span>
            </Link>
          )}
        </div>
        <div className="nav-search show">
          <SearchPopup />
        </div>
      </ul>
      <div className="nav-search-cart">
        <div className="nav-search">
          <SearchPopup />
        </div>
        <div className="nav-login">
          {localStorage.getItem("auth-token") ? (
            <i
              class="fa-solid fa-right-from-bracket"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            ></i>
          ) : (
            <Link to="/login">
              <i class="fa-solid fa-user fa-lg"></i>
            </Link>
          )}
        </div>
        <div className="nav-cart">
          <Link style={{ textDecoration: "none" }} to="/shopping-cart">
            <i class="fa-solid fa-bag-shopping fa-lg"></i>
          </Link>
          <div className="nav-cart-counter">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
}
